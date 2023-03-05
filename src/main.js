// coordinate system: y is vertical,
//x and z are ground plane
import { PointerLockControls } from '../vendor/examples/jsm/controls/PointerLockControls.js';
import { ControllerScript } from './ControllerScript.js';
import { CamCollisionBox } from './CollisionScript.js';
import {LoadingManager, 
    TextureLoader, 
    RepeatWrapping, 
    Mesh, 
    PlaneGeometry, 
    MeshStandardMaterial, 
    PCFSoftShadowMap,
    sRGBEncoding,
    WebGLRenderer,
    PerspectiveCamera,
    Scene,
    DirectionalLight,
    AmbientLight,
    CubeTextureLoader,
    BoxGeometry,
    Vector3,
    Quaternion,
} from '../vendor/build/three.module.js';
import { GLTFLoader } from '../vendor/examples/jsm/loaders/GLTFLoader.js';
import * as ENABLE3D from '../vendor/build/enable3d.ammoPhysics.0.25.3.min.js';

class MainApp {
    constructor() {

        // *****HTML References*****
        const canvas = document.querySelector('#c');

        // renderer and shadows
        this.renderer = new WebGLRenderer({ canvas, antialias: true });
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = PCFSoftShadowMap;
        this.renderer.outputEncoding = sRGBEncoding;
        this.renderer.gammaOutput = true;
        this.renderer.gammaFactor = 2.2;
        
        // camera
        const fov = 65;
        const aspect = 2;
        const near = 0.1;
        const far = 150;
        this.camera = new PerspectiveCamera(fov, aspect, near, far);
        this.camera.position.set(0,5,0);

        // scene
        this.scene = new Scene();

        // lighting
        const color = 0xFFFFFF;
        const intensity = 0.8;
        let light = new DirectionalLight(color, intensity);
        light.position.set(-50, 70, -20);
        light.target.position.set(0, 0, 0);
        light.castShadow = true;
        light.shadow.mapSize.width = 2048;
        light.shadow.mapSize.height = 2048;
        light.shadow.camera.near = 0.1;
        light.shadow.camera.far = 500.0;
        light.shadow.camera.near = 0.5;
        light.shadow.camera.far = 500.0;
        light.shadow.camera.left = 100;
        light.shadow.camera.right = -100;
        light.shadow.camera.top = 100;
        light.shadow.camera.bottom = -100;
        this.scene.add(light);
        light = new AmbientLight(0x404040, 1);
        this.scene.add(light);
        
        // loading manager
        this.loadingManager = new LoadingManager();

        // ***CONTROLS***
        this.controls = new PointerLockControls(this.camera, document.body); // new pointer controls for camera
        this.wasd = new ControllerScript(document, this.camera); // new wasd controls for movement
        
        // immobilize controls on startup
        this.immobile = true;
        instructions.addEventListener('click', this.lockControls.bind(this));
        this.controls.addEventListener('lock', this.removeControlBlock.bind(this));
        this.controls.addEventListener('unlock', this.addControlBlock.bind(this));
        this.scene.add(this.controls.getObject());

        this.physics = new ENABLE3D.AmmoPhysics(this.scene);
        this.physics.debug.enable(true)
    }

    lockControls(){
        this.controls.lock();
    }

    removeControlBlock(){
        instructions.style.display = 'none';
        blocker.style.display = 'none';
        this.immobile = false;
    }

    addControlBlock(){
        blocker.style.display = 'block';
        instructions.style.display = '';
        this.immobile = true;
    }

    init() {
        const blocker = document.getElementById('blocker');
        const instructions = document.getElementById('instructions');
        const loadScreen = document.getElementById('load-screen');
        const bar = document.getElementById("bar-fill");
        const loadParagraph = document.getElementById("resource-load");



        // Loading
        let loadPercent;
        let width = 1;

        // create world
        const floorW = 50;
        const floorL = 89;
        const wallHeight = 25;
        const wallText = {
            base: 'assets/Wall/marble_01_1k/marble_01_diff_1k.jpg',
            rough: 'assets/Wall/marble_01_1k/marble_01_rough_1k.jpg',
            ao: 'assets/Wall/marble_01_1k/marble_01_ao_1k.jpg',
            disp: 'assets/Wall/marble_01_1k/marble_01_disp_1k.png'
        }
        const floorText = {
            map: 'assets/Floor/Stone_Floor_004_SD/Substance_Graph_BaseColor.jpg',
            dispmap: 'assets/Floor/Stone_Floor_004_SD/Substance_Graph_Height.jpg',
            roughmap: 'assets/Floor/Stone_Floor_004_SD/Substance_Graph_Roughness.jpg',
            aomap: 'assets/Floor/Stone_Floor_004_SD/Substance_Graph_AmbientOcclusion.jpg'
        }
        const world = new World(this.loadingManager);

        Promise.all([world.skybox(),
            world.floor(floorW, floorL, 0.6, floorText.map, floorText.dispmap, floorText.roughmap, floorText.aomap),
            world.wall(floorW, wallHeight, 1, 0.6, false, false, wallText.base, wallText.rough, wallText.ao, wallText.disp),
            world.wall(floorW, wallHeight, 1, 0.6, false, false, wallText.base, wallText.rough, wallText.ao, wallText.disp),
            world.wall(floorL, wallHeight, 1, 0.6, false, false, wallText.base, wallText.rough, wallText.ao, wallText.disp),
            world.wall(floorL, wallHeight, 1, 0.6, false, false, wallText.base, wallText.rough, wallText.ao, wallText.disp),
            world.gltfModel('assets/Ceiling/Ratatouille - Skylight/Ratatouille - Skylight.gltf', .15, .15, .15, 0, wallHeight, 0, -Math.PI / 2, false),
            world.gltfModel('../assets/Statues/Pieta.gltf', 1, 1, 1, -3, 2, -3, -Math.PI, true), // pieta
            world.gltfModel('../assets/Statues/Madonna.gltf', 1, 1, 1, 5, 2, 5, -Math.PI, true), // madonna
            world.gltfModel('../assets/Statues/Duke.gltf', 1, 1, 1, 3, 2, 3, -Math.PI, true), // duke
            world.gltfModel('../assets/Statues/David.gltf', 1, 1, 1, 2, 2, 2, -Math.PI, true), // david
            world.gltfModel('../assets/Statues/Angel.gltf', 1, 1, 1, 0, 2, 0, -Math.PI, true), //angel
            world.gltfModel('../assets/Statues/Crouch.gltf', 1, 1, 1, -.5, 2.5, -.5, -Math.PI, true) //crouching boy
            ]).then(models => {
                // skybox
                const sky = models[0]; 

                // floor
                const floor = models[1]; 

                // walls
                const wall1 = models[2]; 
                wall1.translateZ(floorL / 2 - 0.5);

                const wall2 = models[3];
                wall2.translateZ(-(floorL / 2 - 0.5));

                const wall3 = models[4];
                wall3.translateX(floorW / 2 - 0.5);
                wall3.rotateY(-Math.PI / 2);

                const wall4 = models[5];
                wall4.translateX(-(floorW / 2 - 0.5));
                wall4.rotateY(-Math.PI / 2);


                //ceiling
                const skylight = models[6];

                //statues
                const pieta = models[7];
                const madonna = models[8];
                const duke = models[9];
                const david = models[10];
                const angel = models[11];
                const crouchingBoy = models[12];

                // add to scene
                this.scene.background = sky;

                this.scene.add(floor);
                this.scene.add(wall1);
                this.scene.add(wall2);
                this.scene.add(wall3);
                this.scene.add(wall4);
                this.scene.add(skylight);

                this.scene.add(pieta);
                this.scene.add(madonna);
                this.scene.add(duke);
                this.scene.add(david);
                this.scene.add(angel);
                this.scene.add(crouchingBoy);

                
                
                //complete loading bar
                loadPercent = 100;
                bar.style.width = width + (loadPercent - width) + "%";
                loadParagraph.textContent = "Loading complete"

                //remove loading overlay
                loadScreen.style.display = 'none';
                instructions.style.display = '';
                blocker.style.display = 'block';
                
                // start redering
                //console.log("loaded assets");
                this.prevRender=null;
                this.render();
        })




        //LOADING MANAGER
        this.loadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
            //console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
            loadParagraph.textContent = "Loading " + itemsLoaded + "/" + itemsTotal + " items";
        };

        this.loadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
            //console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
            //console.log(itemsLoaded/itemsTotal * 100);
            loadPercent = itemsLoaded / itemsTotal * 100;
            bar.style.width = width + (loadPercent - width) + "%";
            loadParagraph.textContent = "Loading " + itemsLoaded + "/" + itemsTotal + " items";
        };

        this.loadingManager.onError = function (url) {
            //console.log('There was an error loading ' + url);
            loadParagraph.textContent = "Error loading :(";
        };
    }


        // *****RESPONSIVENESS AND RENDERING*****
        resizeRendererToDisplaySize(renderer) { // function from https://threejs.org/manual/#en/responsive
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if (needResize) {
                renderer.setSize(width, height, false);
            }
            return needResize;
        }

        render() {
            
            if (this.resizeRendererToDisplaySize(this.renderer)) { // if loop from https://threejs.org/manual/#en/responsive
                const canvas = this.renderer.domElement;
                this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
                this.camera.updateProjectionMatrix();
            }
            requestAnimationFrame((delta)=>{
                if(this.prevRender===null){
                    this.prevRender = delta;
                }
                if (this.immobile === false) { //only allow controls if pointer is locked in browser
                    this.wasd.con(this.camera, 0.05);
                }
                this.timeDelta(delta - this.prevRender);
                this.renderer.render(this.scene, this.camera);
                this.render();
                this.prevRender = delta;
            });
        }

        timeDelta(d){ // based off of https://github.com/simondevyoutube/ThreeJS_Tutorial_BasicPhysics/blob/main/main.js
            const ds = d * 0.001;
        }
}

class World{
    constructor(loadMan){
        this.cubeLoad = new CubeTextureLoader(loadMan);
        this.textureLoader = new TextureLoader(loadMan);
        this.GLTFLoader = new GLTFLoader(loadMan);
    }

    textureWrap (texts,w,l){
        let repL = l/10;
        let repW = w/10;
        for (const val of Object.values(texts)){
            val.wrapS = RepeatWrapping;
            val.wrapT  = RepeatWrapping;
            val.repeat.set(repW, repL);
        }
    }

    skybox(){
        const texture = this.cubeLoad.loadAsync([
            'assets/Skybox/px.png',
            'assets/Skybox/nx.png',
            'assets/Skybox/py.png',
            'assets/Skybox/ny.png',
            'assets/Skybox/pz.png',
            'assets/Skybox/nz.png',
        ]);
        return texture;
    }

    floor(w, l, roughnum, map, dispmap, roughmap, aomap){
        return new Promise(resolve =>{
            const textures = [
                this.textureLoader.loadAsync(map),
                this.textureLoader.loadAsync(dispmap),
                this.textureLoader.loadAsync(roughmap),
                this.textureLoader.loadAsync(aomap)
            ];
            Promise.all(textures).then(texts=>{
                this.textureWrap(texts, w, l);
                const floor = new Mesh(new PlaneGeometry(w, l), new MeshStandardMaterial(
                    {
                        map: texts[0],
                        displacementMap: texts[1],
                        roughnessMap: texts[2],
                        roughness: roughnum,
                        aoMap: texts[3],
                    }
                ));
                floor.rotation.x = -Math.PI / 2;
                floor.castShadow = false;
                floor.receiveShadow = true;
                resolve(floor)
            })
        })
    }
    wall(w, h, d, roughnum, shadowCast, shadowRec,  map, roughmap, aomap, dispmap){
        return new Promise(resolve =>{
            const textures = [
                this.textureLoader.loadAsync(map),
                this.textureLoader.loadAsync(dispmap),
                this.textureLoader.loadAsync(roughmap),
                this.textureLoader.loadAsync(aomap)
            ];
            Promise.all(textures).then(texts=>{
                this.textureWrap(texts, w, h);
                const wall = new Mesh(
                    new BoxGeometry(w, h, d), 
                    new MeshStandardMaterial(
                        {
                            map: texts[0],
                            displacementMap: texts[1],
                            roughnessMap: texts[2],
                            roughness: roughnum,
                            aoMap: texts[3],
                        }
                ));
                wall.castShadow = shadowCast;
                wall.receiveShadow = shadowRec;
                wall.translateY(h/2+.45);
                resolve(wall)
            })
        })
    }
    gltfModel(model, scaleX, scaleY, scaleZ, posX, posY, posZ, rotation, shadowCast){
        return new Promise(resolve =>{
            const mod = this.GLTFLoader.loadAsync(model);
            //console.log(mod)
            Promise.all([mod]).then(gltf=>{
                const loadedGLTF = gltf[0];
                //console.log(loadedGLTF)
                loadedGLTF.scene.scale.set(scaleX, scaleY, scaleZ); 
                loadedGLTF.scene.position.set(posX,posY,posZ);
                loadedGLTF.scene.rotateY(rotation);
                loadedGLTF.scene.traverse( function( node ) {
                    if ( node.isMesh ) { 
                        if ( node.isMesh || node.isLight ) node.castShadow = shadowCast;
                    }
    
                });
                resolve(loadedGLTF.scene)
            })
        })
    }
}




// call app
let APP_ = null;
window.addEventListener('DOMContentLoaded', async () => {
      APP_ = new MainApp();
      APP_.init();
  });

