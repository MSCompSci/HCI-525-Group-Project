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
    const renderer = new THREE.WebGLRenderer({ canvas });
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
    const intensity = 1;
    let light = new THREE.DirectionalLight(color, intensity);
    light.position.set(100, 100, 100);
    light.target.position.set(0,0,0);
    light.castShadow = true;
    scene.add(light);

    light = new THREE.AmbientLight(0x404040);
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
    const floor = new BUILDING.Floor(scene, 50, 90, 0.2, 
        'assets/Floor/Substance_Graph_BaseColor.jpg', 
        'assets/Floor/Substance_Graph_Roughness.jpg', 
        'assets/Floor/Substance_Graph_Height.jpg', 
        'assets/Floor/Substance_Graph_AmbientOcclusion.jpg');

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



