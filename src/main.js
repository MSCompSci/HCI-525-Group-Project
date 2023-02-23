// coordinate system: y is vertical,
 //x and z are ground plane

import * as THREE from '../vendor/build/three.module.js';
import { PointerLockControls } from '../vendor/examples/jsm/controls/PointerLockControls.js';

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


    // ***CONTROLS***
    const controls = new PointerLockControls( camera, document.body ); // new pointer controls for camera

    let immobile = true; // immobilize wasd on startup

    const prevKeyState = { // key states
        w: false,
        a: false,
        s: false,
        d: false
    };

    document.addEventListener("keydown", function onPress(e) { // listen for key presses
        if (e.key === "w") {
            prevKeyState.w = true;
        }
        else if (e.key === "a") {
            prevKeyState.a = true;
        }
        else if (e.key === "s") {
            prevKeyState.s = true;
        }
        else if (e.key === "d") {
            prevKeyState.d = true;
        }

    });

    document.addEventListener("keyup", function onUp(e){ // listen for key releases
        if (e.key === "w") {
            prevKeyState.w = false;
        }
        else if (e.key === "a") {
            prevKeyState.a = false;
        }
        else if (e.key === "s") {
            prevKeyState.s = false;
        }
        else if (e.key === "d") {
            prevKeyState.d = false;
        }
    });

    function controller(){ // wasd controls

        // get direction camera is facing in world coords
        let camDirRaw = new THREE.Vector3;
        const speed = 0.06; 
        camera.getWorldDirection(camDirRaw);

        // account for x and y getting super small when looking directly up or down
        if ((camDirRaw.x < .0001)&&(camDirRaw.x > -.0001)){
            camDirRaw.x = .0002;
        }
        if ((camDirRaw.z < .0001)&&(camDirRaw.z > -.0001)){
            camDirRaw.z = .0002;
        }

        // set camera direction vector with constant height
        let camDir = new THREE.Vector3(camDirRaw.x, 0 ,camDirRaw.z);

        // move camera in correct direction
        if (prevKeyState.w === true){
            camera.position.addScaledVector(camDir, speed);
        }
        if (prevKeyState.s === true){
            camDir.x = -(camDir.x);
            camDir.z = -(camDir.z)
            camera.position.addScaledVector(camDir, speed);
        }
        if (prevKeyState.a === true){
            camera.translateX(-(speed));
        }
        if (prevKeyState.d === true){
            camera.translateX(speed);
        }
    }

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



    // *****FLOOR*****

    // floor size
    const floorW = 50;
    const floorH = 90;

    // floor texture and tiling
    const repH = floorW/10;
    const repV = floorH/10;
    const floorTexture = new THREE.TextureLoader();
    const floorBase = floorTexture.load('assets/Floor/Substance_Graph_BaseColor.jpg');
    floorBase.wrapS = THREE.RepeatWrapping;
    floorBase.wrapT = THREE.RepeatWrapping;
    floorBase.repeat.set(repH, repV);
    const floorRough = floorTexture.load('assets/Floor/Substance_Graph_Roughness.jpg');
    floorRough.wrapS = THREE.RepeatWrapping;
    floorRough.wrapT = THREE.RepeatWrapping;
    floorRough.repeat.set(repH, repV);
    const floorHeight = floorTexture.load('assets/Floor/Substance_Graph_Height.jpg');
    floorHeight.wrapS = THREE.RepeatWrapping;
    floorHeight.wrapT = THREE.RepeatWrapping;
    floorHeight.repeat.set(repH, repV);
    const floorAO = floorTexture.load('assets/Floor/Substance_Graph_AmbientOcclusion.jpg');
    floorAO.wrapS = THREE.RepeatWrapping;
    floorAO.wrapT = THREE.RepeatWrapping;
    floorAO.repeat.set(repH, repV);

    // floor mesh and texture assign
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(floorW, floorH), new THREE.MeshStandardMaterial(
        {
            map: floorBase,
            displacementMap: floorHeight,
            roughnessMap: floorRough,
            roughness: 0.2,
            aoMap: floorAO
        }
    ));

    // floor shadows
    floor.castShadow = false;
    floor.receiveShadow = true;

    // floor position
    floor.rotation.x = -Math.PI / 2;

    
    // add floor to scene
    scene.add(floor);

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
            controller();
        }
        
        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

main();



