// coordinate system: y is vertical,
 //x and z are ground plane

import * as THREE from '../vendor/build/three.module.js';
import * as BUILDING from './Building.js';
import { PointerLockControls } from '../vendor/examples/jsm/controls/PointerLockControls.js';
import { ControllerScript } from './ControllerScript.js';


function main() {

    // *****SCENE SETUP*****
    const canvas = document.querySelector('#c');

    // renderer and shadows
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // camera
    const fov = 75;
    const aspect = 2; 
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.y = 3;
    camera.position.z = 0;
    camera.position.x = 0;
    
    // scene
    const scene = new THREE.Scene();

    // lighting
    const color = 0xFFFFFF;
    const intensity = 0.8;
    let light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-50, 70, -20);
    light.target.position.set(0,0,0);
    light.castShadow = true;
    //const helper = new THREE.DirectionalLightHelper( light, 5 );
    //scene.add( helper );
    scene.add(light);

    light = new THREE.AmbientLight(0x404040, 0.9);
    scene.add(light);

    // skybox
    {
        const loader = new THREE.CubeTextureLoader();
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


    // ***CONTROLS***
    const controls = new PointerLockControls( camera, document.body ); // new pointer controls for camera
    const wasd = new ControllerScript(document); // new wasd controls for movement
    let immobile = true; // immobilize wasd on startup

    // Modified from https://github.com/mrdoob/three.js/blob/master/examples/misc_controls_pointerlock.html
    const blocker = document.getElementById( 'blocker' );
    const instructions = document.getElementById( 'instructions' );
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
    scene.add( controls.getObject() );
    // end modified section

    // *****FLOOR*****
    const floorW = 50;
    const floorL = 90;
    const wallHeight = 15;
    const floor = new BUILDING.Floor(scene, floorW, floorL, 0.6,
        'assets/Floor/Stone_Floor_004_SD/Substance_Graph_BaseColor.jpg',
        'assets/Floor/Stone_Floor_004_SD/Substance_Graph_Height.jpg',  
        'assets/Floor/Stone_Floor_004_SD/Substance_Graph_Roughness.jpg', 
        'assets/Floor/Stone_Floor_004_SD/Substance_Graph_AmbientOcclusion.jpg'
        );

    const backWall = new BUILDING.Wall( scene, floorW, wallHeight, 1, 0.95,
        'assets/Wall/Concrete_017_SD/Concrete_017_basecolor.jpg', 
        'assets/Wall/Concrete_017_SD/Concrete_017_roughness.jpg', 
        'assets/Wall/Concrete_017_SD/Concrete_017_ambientOcclusion.jpg'
        );
    backWall.wall.translateZ(floorL/2-0.5);
    const frontWall = new BUILDING.Wall( scene, floorW, wallHeight, 1, 0.95,
        'assets/Wall/Concrete_017_SD/Concrete_017_basecolor.jpg', 
        'assets/Wall/Concrete_017_SD/Concrete_017_roughness.jpg', 
        'assets/Wall/Concrete_017_SD/Concrete_017_ambientOcclusion.jpg'
        );
    frontWall.wall.translateZ(-(floorL/2-0.5));
    const sideWallOne = new BUILDING.Wall( scene, floorL, wallHeight, 1, 0.95,
        'assets/Wall/Concrete_017_SD/Concrete_017_basecolor.jpg', 
        'assets/Wall/Concrete_017_SD/Concrete_017_roughness.jpg', 
        'assets/Wall/Concrete_017_SD/Concrete_017_ambientOcclusion.jpg'
        );
    sideWallOne.wall.translateX(floorW/2-0.5);
    sideWallOne.wall.rotateY(-Math.PI / 2);
    const sideWallTwo = new BUILDING.Wall( scene, floorL, wallHeight, 1, 0.95,
        'assets/Wall/Concrete_017_SD/Concrete_017_basecolor.jpg', 
        'assets/Wall/Concrete_017_SD/Concrete_017_roughness.jpg', 
        'assets/Wall/Concrete_017_SD/Concrete_017_ambientOcclusion.jpg'
        );
    sideWallTwo.wall.translateX(-(floorW/2-0.5));
    sideWallTwo.wall.rotateY(-Math.PI / 2);

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
            wasd.con(camera, 0.05);
        }
        
        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

main();



