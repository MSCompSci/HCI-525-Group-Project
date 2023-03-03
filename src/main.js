// coordinate system: y is vertical,
 //x and z are ground plane

import * as THREE from '../vendor/build/three.module.js';
import * as BUILDING from './Building.js';
import { PointerLockControls } from '../vendor/examples/jsm/controls/PointerLockControls.js';
import { ControllerScript } from './ControllerScript.js';
import { CamCollisionBox } from './CollisionScript.js';
import { GLTFLoader } from '../vendor/examples/jsm/loaders/GLTFLoader.js';

function main() {

    // *****SCENE SETUP*****
    const canvas = document.querySelector('#c');

    // renderer and shadows
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;

    // camera
    const fov = 65;
    const aspect = 2; 
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.y = 3;
    camera.position.z = 0;
    camera.position.x = 0;

     // ***CONTROLS***
     const controls = new PointerLockControls( camera, document.body ); // new pointer controls for camera
     const wasd = new ControllerScript(document, camera); // new wasd controls for movement
    
     // player collision
    const camBox = new CamCollisionBox(camera);

    // Modified from https://github.com/mrdoob/three.js/blob/master/examples/misc_controls_pointerlock.html
    const blocker = document.getElementById( 'blocker' );
    let immobile = true; // immobilize wasd on startup
    const instructions = document.getElementById( 'instructions' );
    function addListeners(){
        instructions.addEventListener( 'click', function () {
            controls.lock();
        } );
        controls.addEventListener( 'lock', function () {
            instructions.style.display = 'none';
            blocker.style.display = 'none';
            immobile = false;
        } );
        controls.addEventListener( 'unlock', function () {
            blocker.style.display = 'block';
            instructions.style.display = '';
            immobile = true;
        } );
    }
    // end modified section

    
    // scene
    const scene = new THREE.Scene();
    addListeners();
    scene.add( controls.getObject() );

    // Loading
    const loadScreen = document.getElementById('load-screen');
    const bar = document.getElementById("bar-fill");
    const loadParagraph = document.getElementById("resource-load");
    let loadPercent;
    let width = 1;
    // loading managers
    const loadingManager = new THREE.LoadingManager();
    
    // lighting
    const color = 0xFFFFFF;
    const intensity = 0.8;
    let light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-50, 70, -20);
    light.target.position.set(0,0,0);
    light.castShadow = true;
    scene.add(light);
    light = new THREE.AmbientLight(0x404040, 1);
    scene.add(light);

    // skybox
    {
        const loader = new THREE.CubeTextureLoader(loadingManager);
        const texture = loader.load([
            'assets/Skybox/px.png',
            'assets/Skybox/nx.png',
            'assets/Skybox/py.png',
            'assets/Skybox/ny.png',
            'assets/Skybox/pz.png',
            'assets/Skybox/nz.png',
        ]);
        scene.background = texture;
    }


    //**********BUILDING**********

    // *****FLOOR*****
    const floorW = 50;
    const floorL = 90;
    const wallHeight = 15;
    const floor = new BUILDING.Floor(scene, loadingManager, floorW, floorL, 0.6,
        'assets/Floor/Stone_Floor_004_SD/Substance_Graph_BaseColor.jpg',
        'assets/Floor/Stone_Floor_004_SD/Substance_Graph_Height.jpg',  
        'assets/Floor/Stone_Floor_004_SD/Substance_Graph_Roughness.jpg', 
        'assets/Floor/Stone_Floor_004_SD/Substance_Graph_AmbientOcclusion.jpg'
        ); 
    // *****CEILING*****
   /* const ceiling = new BUILDING.Ceiling(scene, loadingManager, floorW, floorL, 0.6,
        'assets/Ceiling/Concrete_Ceiling_002_SD/Concrete_Ceiling_002_basecolor.jpg',
        'assets/Ceiling/Concrete_Ceiling_002_SD/Concrete_Ceiling_002_height.png',  
        'assets/Ceiling/Concrete_Ceiling_002_SD/Concrete_Ceiling_002_roughness.jpg', 
        'assets/Ceiling/Concrete_Ceiling_002_SD/Concrete_Ceiling_002_ambientOcclusion.jpg',
        'assets/Ceiling/Concrete_Ceiling_002_SD/Concrete_Ceiling_002_normal.jpg'
        );
    ceiling.floor.translateZ(-wallHeight); */


    // *****WALLS*****
    const walls = [
            new BUILDING.Wall( scene, loadingManager, floorW, wallHeight, 1, 0.95,
            'assets/Wall/marble_01_4k/marble_01_diff_4k.jpg', 
            'assets/Wall/marble_01_4k/marble_01_rough_4k.jpg', 
            'assets/Wall/marble_01_4k/marble_01_ao_4k.jpg',
            'assets/Wall/marble_01_4k/marble_01_disp_4k.png'
            ),
            new BUILDING.Wall( scene, loadingManager, floorW, wallHeight, 1, 0.95,
                'assets/Wall/marble_01_4k/marble_01_diff_4k.jpg', 
                'assets/Wall/marble_01_4k/marble_01_rough_4k.jpg', 
                'assets/Wall/marble_01_4k/marble_01_ao_4k.jpg',
                'assets/Wall/marble_01_4k/marble_01_disp_4k.png'
            ),
            new BUILDING.Wall( scene, loadingManager, floorL, wallHeight, 1, 0.95,
                'assets/Wall/marble_01_4k/marble_01_diff_4k.jpg', 
                'assets/Wall/marble_01_4k/marble_01_rough_4k.jpg', 
                'assets/Wall/marble_01_4k/marble_01_ao_4k.jpg',
                'assets/Wall/marble_01_4k/marble_01_disp_4k.png'
            ),

            new BUILDING.Wall( scene, loadingManager, floorL, wallHeight, 1, 0.95,
                'assets/Wall/marble_01_4k/marble_01_diff_4k.jpg', 
                'assets/Wall/marble_01_4k/marble_01_rough_4k.jpg', 
                'assets/Wall/marble_01_4k/marble_01_ao_4k.jpg',
                'assets/Wall/marble_01_4k/marble_01_disp_4k.png'
            )
    ];

    // wall positions
    walls[0].wall.translateZ(floorL/2-0.5);
    walls[1].wall.translateZ(-(floorL/2-0.5));
    walls[2].wall.translateX(floorW/2-0.5);
    walls[2].wall.rotateY(-Math.PI / 2);
    walls[3].wall.translateX(-(floorW/2-0.5));
    walls[3].wall.rotateY(-Math.PI / 2);

    //*****ITEMS*****
    const crouchingBoy = new BUILDING.GLTFModel(scene, loadingManager, '../assets/Statues/Crouch.gltf', 1, 1, 1, -.5,2.5,-.5,-Math.PI);
    const angel = new BUILDING.GLTFModel(scene, loadingManager, '../assets/Statues/Angel.gltf', 1, 1, 1, 0, 2, 0,-Math.PI);
    const david = new BUILDING.GLTFModel(scene, loadingManager, '../assets/Statues/David.gltf', 1, 1, 1, 2, 2, 2,-Math.PI);
    const duke = new BUILDING.GLTFModel(scene, loadingManager, '../assets/Statues/Duke.gltf', 1, 1, 1, 3, 2, 3,-Math.PI);
    const madonna = new BUILDING.GLTFModel(scene, loadingManager, '../assets/Statues/Madonna.gltf', 1, 1, 1, 5, 2, 5,-Math.PI);
    const pieta = new BUILDING.GLTFModel(scene, loadingManager, '../assets/Statues/Pieta.gltf', 1, 1, 1, -3, 2, -3,-Math.PI);
    
    //crouchingBoy.castShadow = true;
    //*****COLLISION*****
    const collidableObj = [
        walls[0].wall,
        walls[1].wall,
        walls[2].wall,
        walls[3].wall
    ];
    const collidables = camBox.setCollidables(collidableObj);




    //LOADING MANAGER
    loadingManager.onStart = function ( url, itemsLoaded, itemsTotal ) {
        //console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
        loadParagraph.textContent = "Loading " + itemsLoaded + "/" + itemsTotal + " items";
    };
    
    loadingManager.onLoad = function ( ) {
        loadScreen.style.display = 'none';
        instructions.style.display = '';
        blocker.style.display = 'block';
        //console.log( 'Loading complete!');
        loadParagraph.textContent = "Loading complete"
    };
    
    
    loadingManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
        //console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
        //console.log(itemsLoaded/itemsTotal * 100);
        loadPercent = itemsLoaded/itemsTotal * 100;
        bar.style.width = width + (loadPercent - width) + "%";
        loadParagraph.textContent = "Loading " + itemsLoaded + "/" + itemsTotal + " items";
    };
    
    loadingManager.onError = function ( url ) {
        console.log( 'There was an error loading ' + url );
        loadParagraph.textContent = "Error loading :(";
    };







    // *****RESPONSIVENESS AND RENDERING*****
    function resizeRendererToDisplaySize(renderer) { // function from https://threejs.org/manual/#en/responsive
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

    function render() { 

        if (resizeRendererToDisplaySize(renderer)) { // if loop from https://threejs.org/manual/#en/responsive
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

            if (immobile === false){ //only allow controls if pointer is locked in browser
                let [colls, colStatus] = camBox.updateCollision(collidables, camera);
                //console.log(colls);
                wasd.con(camera, 0.05, colls, colStatus);
                
                
            }
            renderer.render(scene, camera);
            
        

        requestAnimationFrame(render);


    }

    requestAnimationFrame(render);
}

main();



