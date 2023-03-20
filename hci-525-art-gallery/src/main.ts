import {
  LoadingManager,
  Mesh,
  PCFSoftShadowMap,
  sRGBEncoding,
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  DirectionalLight,
  AmbientLight,
  CircleGeometry,
  MeshBasicMaterial,
  Vector3,
  Camera,
  BoxGeometry,
  //SpotLightHelper,
  SpotLight,
  //LineBasicMaterial, //For rapier3d debug
  //BufferGeometry,
  //LineSegments,
  //BufferAttribute, 
} from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import World from './world.js'
import WASDController from './controller.js';
import Selector from './selector.js'
import RAPIER /*, { RigidBody }*/ from '@dimforge/rapier3d-compat'

class MainApp {
  world: RAPIER.World;
  renderer!: WebGLRenderer;
  camera: PerspectiveCamera;
  camItemSelect: Selector;
  crossHairs: Mesh;
  scene: Scene;
  loadingManager: LoadingManager;
  controls: any;
  characterController: RAPIER.KinematicCharacterController;
  immobile: boolean;
  wasd: WASDController;
  camPair: { cam: Camera, col: RAPIER.Collider, bod: RAPIER.RigidBody };
  interactiveItems:string[];
  viewing: boolean;
  //lines: LineSegments|null; //For debug
  constructor() {
    // Rapier3D setup
    const gravity = { x: 0.0, y: -9.81, z: 0.0 };
    this.world = new RAPIER.World(gravity);

    // HTML canvas
    const canvas = document.querySelector('#c');

    // renderer and shadows
    if (canvas) {
      this.renderer = new WebGLRenderer({ canvas, antialias: true });
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = PCFSoftShadowMap;
      this.renderer.outputEncoding = sRGBEncoding;
    }

    // scene
    this.scene = new Scene();

    /* //debug lines
    this.lines = null;
    if (!this.lines) {
      let material = new LineBasicMaterial({
          color: 0xffffff,
      });
      let geometry =  new BufferGeometry();
      this.lines = new LineSegments(geometry, material);
      this.scene.add(this.lines); 
    }*/

    // camera
    const camStartPos = new Vector3(0, 4, 20)
    this.camera = new PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 150); //create camera
    this.camera.position.set(camStartPos.x, camStartPos.y, camStartPos.z); //set starting position

    // Create a dynamic rigid-body for the camera
    const camBodyDesc = RAPIER.RigidBodyDesc.kinematicPositionBased().lockRotations().setTranslation(camStartPos.x, 0, camStartPos.z);
    const camBody = this.world.createRigidBody(camBodyDesc);

    // Create a capsule collider attached to the dynamic rigidBody for the camera
    const camColliderDesc = RAPIER.ColliderDesc.capsule(camStartPos.y / 2, 1).setFriction(.01);
    const camCollider = this.world.createCollider(camColliderDesc, camBody);

    // Create a pair to contain the camera, collider, and rigidbody
    this.camPair = { cam: this.camera, col: camCollider, bod: camBody }


    // create camera crossHairs
    const crossHairsGeo = new CircleGeometry(.0025, 16);
    const crossHairsMat = new MeshBasicMaterial({ color: 0xe6e6e6 });
    crossHairsMat.transparent = true;
    crossHairsMat.opacity = 0.45;
    this.crossHairs = new Mesh(crossHairsGeo, crossHairsMat);
    this.crossHairs.position.set(camStartPos.x, 0, -0.5);
    this.camera.add(this.crossHairs);

    // character controller for camera
    const offset = 2;
    this.characterController = this.world.createCharacterController(offset);
    this.characterController.setSlideEnabled(true)

    // camera item selection
    this.camItemSelect = new Selector(offset)
    this.interactiveItems = [];

    // lighting
    const color = 0xFFFFFF;
    const intensity = 0.8;
    let lightD = new DirectionalLight(color, intensity); //directional light (sun)
    lightD.position.set(-50, 70, -20);
    lightD.target.position.set(0, 0, 0);
    lightD.castShadow = true;
    lightD.shadow.mapSize.width = 2048;
    lightD.shadow.mapSize.height = 2048;
    lightD.shadow.camera.near = 0.1;
    lightD.shadow.camera.far = 500.0;
    lightD.shadow.camera.near = 0.5;
    lightD.shadow.camera.far = 500.0;
    lightD.shadow.camera.left = 100;
    lightD.shadow.camera.right = -100;
    lightD.shadow.camera.top = 100;
    lightD.shadow.camera.bottom = -100;
    this.scene.add(lightD);
    const lightA = new AmbientLight(0x404040, .8); // ambient light
    this.scene.add(lightA);

    const spotLightDavid = new SpotLight(color, .6)
    spotLightDavid.position.set(5,27,-20)
    spotLightDavid.target.position.set(2,19,-24)
    spotLightDavid.penumbra = 1;
    spotLightDavid.angle = Math.PI/16;
    spotLightDavid.castShadow = true;
    this.scene.add(spotLightDavid)
    this.scene.add(spotLightDavid.target)
    //const helperDavid = new SpotLightHelper(spotLightDavid);
    //this.scene.add(helperDavid);

    const spotLightPieta = new SpotLight(color, .4)
    spotLightPieta.position.set(5,27,20)
    spotLightPieta.target.position.set(-15,6,-12)
    spotLightPieta.penumbra = 1;
    spotLightPieta.angle = Math.PI/16;
    spotLightPieta.castShadow = true;
    this.scene.add(spotLightPieta)
    this.scene.add(spotLightPieta.target)
    //const helper = new SpotLightHelper(spotLightPieta);
    //this.scene.add(helper);

    // loading manager
    this.loadingManager = new LoadingManager();

    // ***CONTROLS***
    this.controls = new PointerLockControls(this.camera, document.body); // new pointer controls for camera
    this.wasd = new WASDController(document); // new wasd controls for movement



    // immobilize controls on startup
    this.immobile = true;
    this.viewing = false;

    // add event listeners for pointerlock and control screens
    const instructions = document.getElementById('instructions');
    if (instructions) {
      instructions.addEventListener('click', this.lockControls.bind(this));
    }
    this.controls.addEventListener('lock', this.removeControlBlock.bind(this));
    this.controls.addEventListener('unlock', this.addControlBlock.bind(this));
    this.scene.add(this.controls.getObject());

    // add items to environment
    this.addItems()
  }

  lockControls() { // lock the controls using pointerlock controls
    this.controls.lock();
  }

  removeControlBlock() { // remove the instruction screen when pointerlock is engaged 
    const instructions = document.getElementById('instructions');
    const blocker = document.getElementById('blocker');
    if (instructions && blocker) {
      instructions.style.display = 'none';
      instructions.style.zIndex = '-1';
      blocker.style.display = 'none';
      blocker.style.zIndex = '-1';
      this.immobile = false;
    }
  }

  addControlBlock() { // reinstate instrutions screen when pointerlock is disengaged
    const instructions = document.getElementById('instructions');
    const blocker = document.getElementById('blocker');
    if (instructions && blocker && !this.viewing) {
      blocker.style.display = 'block';
      instructions.style.display = '';
      instructions.style.zIndex = '1';
      blocker.style.zIndex = '1';
      this.immobile = true;
    }
  }

  addItems() { // add items to visible world and generate physics
    const world3D = new World(this.loadingManager); //visible world generator

    // loading screen and instructions screen elements 
    const bar = document.getElementById("bar-fill");
    const loadParagraph = document.getElementById("resource-load");
    const blocker = document.getElementById('blocker');
    const instructions = document.getElementById('instructions');
    const loadScreen = document.getElementById('load-screen');

    // Loading
    let loadPercent;
    let width = 1;

    // floor
    const floorW = 50;
    const floorL = 89;
    const floorText = {
      map: '../assets/Floor/Stone_Floor_004_SD/Substance_Graph_BaseColor.jpg',
      roughmap: '../assets/Floor/Stone_Floor_004_SD/Substance_Graph_Roughness.jpg',
      aomap: '../assets/Floor/Stone_Floor_004_SD/Substance_Graph_AmbientOcclusion.jpg'
    }

    // walls
    const wallHeight = 25;
    const wallText = {
      base: '../assets/Wall/marble_01_1k/marble_01_diff_1k.jpg',
      rough: '../assets/Wall/marble_01_1k/marble_01_rough_1k.jpg',
      ao: '../assets/Wall/marble_01_1k/marble_01_ao_1k.jpg'
    }

    Promise.all([world3D.skybox(), // check if all assets are loaded
    world3D.floor(floorW, floorL, 0.6, floorText.map, floorText.roughmap, floorText.aomap), // floor
    world3D.wall(floorW, wallHeight, 1, 0.6, false, false, wallText.base, wallText.rough, wallText.ao), //wallS
    world3D.wall(floorW, wallHeight, 1, 0.6, false, false, wallText.base, wallText.rough, wallText.ao), //wallN
    world3D.wall(floorL, wallHeight, 1, 0.6, false, false, wallText.base, wallText.rough, wallText.ao), //wallW
    world3D.wall(floorL, wallHeight, 1, 0.6, false, false, wallText.base, wallText.rough, wallText.ao), //wallE
    world3D.gltfModel('../assets/Ceiling/Ratatouille - Skylight/Ratatouille - Skylight.gltf', .16, 0, wallHeight + .25, 0, -Math.PI / 2, false), // ceiling
    world3D.gltfModel('../assets/Statues/Pieta.gltf', 3.1, -15, 2.2, -10, Math.PI/2, true), // pieta
    world3D.gltfModel('../assets/Statues/Madonna.gltf', 3, 15.5, 2.2, -14.5, -Math.PI/2, true), // madonna
    world3D.gltfModel('../assets/Statues/David.gltf', 3, -4, 0.5, -25, 2*Math.PI, true), // david
    world3D.wall(4,1.7,6,0.6,true,true,wallText.base, wallText.rough, wallText.ao),
    world3D.wall(4,1.7,6,0.6,true,true,wallText.base, wallText.rough, wallText.ao),
    ]).then(models => { // then create items in scene
      

      // skybox
      const sky = models[0];
      this.scene.background = sky;

      // floor
      const floor: any = models[1];
      this.scene.add(floor);
      const groundColliderDesc = RAPIER.ColliderDesc.cuboid(floorW / 2, 0.5, floorL / 2);
      this.world.createCollider(groundColliderDesc);

      // walls
      const wallS: any = models[2]; //South wall (behind player)
      wallS.translateZ(floorL / 2 - 0.5);
      this.scene.add(wallS);
      const wallSColliderDesc = RAPIER.ColliderDesc.cuboid(floorW / 2, wallHeight / 2, 0.5).setTranslation(0, 0, floorL / 2 - 0.5).setFriction(.01);
      this.world.createCollider(wallSColliderDesc);

      const wallN: any = models[3]; //North wall
      wallN.translateZ(-(floorL / 2 - 0.5));
      this.scene.add(wallN);
      const wallNColliderDesc = RAPIER.ColliderDesc.cuboid(floorW / 2, wallHeight / 2, 0.5).setTranslation(0, 0, -(floorL / 2 - 0.5)).setFriction(.01);
      this.world.createCollider(wallNColliderDesc);

      const wallW: any = models[4]; //East wall
      wallW.translateX(floorW / 2 - 0.5);
      wallW.rotateY(-Math.PI / 2);
      this.scene.add(wallW);
      const wallWColliderDesc = RAPIER.ColliderDesc.cuboid(0.5, wallHeight / 2, floorL / 2).setTranslation(floorW / 2 - 0.5, 0, 0).setFriction(.01);
      this.world.createCollider(wallWColliderDesc);

      const wallE: any = models[5]; //West wall
      wallE.translateX(-(floorW / 2 - 0.5));
      wallE.rotateY(-Math.PI / 2);
      this.scene.add(wallE);
      const wallEColliderDesc = RAPIER.ColliderDesc.cuboid(0.5, wallHeight / 2, floorL / 2).setTranslation(-(floorW / 2 - 0.5), 0, 0).setFriction(.01);
      this.world.createCollider(wallEColliderDesc);

      //ceiling
      const skylight: any = models[6];
      this.scene.add(skylight);

      //statues
      const pieta: any = models[7];
      pieta.children[0].name = 'pieta'
      this.interactiveItems.push(pieta.children[0].name)
      this.scene.add(pieta);

      const madonna: any = models[8];
      madonna.children[0].name = 'madonna'
      this.interactiveItems.push(madonna.children[0].name)
      this.scene.add(madonna);

      const david: any = models[9];
      david.children[0].name = 'david'
      this.interactiveItems.push(david.children[0].name)
      this.scene.add(david);

      const pietaStand: any = models[10];
      pietaStand.translateX(-17)
      pietaStand.translateZ(-13)
      this.scene.add(pietaStand)
      const pietaStandColliderDesc = RAPIER.ColliderDesc.cuboid(2,1.7/2,3).setTranslation(-17, 2.2, -13).setFriction(.01);
      this.world.createCollider(pietaStandColliderDesc);

      const madonnaStand: any = models[11];
      madonnaStand.translateX(17)
      madonnaStand.translateZ(-13)
      this.scene.add(madonnaStand)
      const madonnaStandColliderDesc = RAPIER.ColliderDesc.cuboid(2,1.7/2,3).setTranslation(17, 2.2, -13).setFriction(.01);
      this.world.createCollider(madonnaStandColliderDesc);

      // doorway
      const geometry = new BoxGeometry( 5, 10, 1 );
      const material = new MeshBasicMaterial( { color: 0x00ff00 } );
      const doorway = new Mesh( geometry, material );
      doorway.position.set(0, 5, floorL/2-1)
      doorway.name = 'doorway';
      this.interactiveItems.push(doorway.name);
      this.scene.add( doorway );

      //complete loading bar
      loadPercent = 100;
      //remove loading overlay
      if (bar && loadParagraph && loadScreen && instructions && blocker) {
        bar.style.width = width + (loadPercent - width) + "%";
        loadParagraph.textContent = "Loading complete"
        loadScreen.remove();
        instructions.style.display = '';
        blocker.style.display = 'block';
        document.body.appendChild(this.renderer.domElement);
      }

      // Start 3D rendering
      this.run(/*bodyPairs*/)

    })

    //LOADING MANAGER
    this.loadingManager.onStart = function (_url: string, itemsLoaded: number, itemsTotal: number) {
      //console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
      if (loadParagraph) {
        loadParagraph.textContent = "Loading " + itemsLoaded + "/" + itemsTotal + " items";
      }

    };

    this.loadingManager.onProgress = function (_url: string, itemsLoaded: number, itemsTotal: number) {
      //console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
      //console.log(itemsLoaded/itemsTotal * 100);
      loadPercent = itemsLoaded / itemsTotal * 100;
      if (bar && loadParagraph) {
        bar.style.width = width + (loadPercent - width) + "%";
        loadParagraph.textContent = "Loading " + itemsLoaded + "/" + itemsTotal + " items";
      }

    };

    this.loadingManager.onError = function (_url) {
      //console.log('There was an error loading ' + url);
      if (loadParagraph) {
        loadParagraph.textContent = "Error loading :(";
      }

    };
  }

  // *****RESPONSIVENESS AND RENDERING*****
  resizeRendererToDisplaySize(renderer: WebGLRenderer) {
    const canvas = renderer.domElement;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }


  run(/*bodyPairs: { rigidBody: RigidBody, mesh: Mesh }[]*/) {
    let gameLoop = () => {
      if (this.resizeRendererToDisplaySize(this.renderer)) {
        const canvas = this.renderer.domElement;
        this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
        this.camera.updateProjectionMatrix();
      }
      if (!this.immobile) {
        // update physics
        this.world.step();
        // update controls and player position
        this.wasd.con(this.camPair, 0.2, this.characterController);
      }
      const itemSelect = this.camItemSelect.itemHover(this.camera, this.scene, this.crossHairs, this.interactiveItems);
      this.viewing = itemSelect.immobile
      const lockCon = itemSelect.lock
      if(this.viewing){
        this.controls.unlock();
        this.immobile = true;
      }
      if(lockCon){
        this.controls.lock();
      }
      
      // render scene
      this.renderer.render(this.scene, this.camera);

      /* // debug physics colliders
      let buffers = this.world.debugRender();
      if(this.lines){
        this.lines.geometry.setAttribute('position', new BufferAttribute(buffers.vertices, 3));
        this.lines.geometry.setAttribute('color', new BufferAttribute(buffers.colors, 4));
      }*/
      setTimeout(gameLoop, 16);
    };
    gameLoop();
  }
}

RAPIER.init().then(() => {
  new MainApp();
})
