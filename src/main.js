// Modified from https://threejs.org/manual/#en/backgrounds

// coordinate system: y is vertical,
import * as THREE from '../vendor/build/three.module.js';
import { PointerLockControls } from '../vendor/examples/jsm/controls/PointerLockControls.js';
//import { OrbitControls } from '../vendor/examples/jsm/controls/OrbitControls.js';

function main() {

    // *****SCENE SETUP*****
    const canvas = document.querySelector('#c');
    //const clock = new THREE.Clock();

    // renderer and shadows
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // camera
    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.y = 3;
    camera.position.z = 0;
    camera.position.x = 0;
    
    // scene
    const scene = new THREE.Scene();


    // ***CONTROLS***
    const controls = new PointerLockControls( camera, document.body );

    
    const blocker = document.getElementById( 'blocker' );
    const instructions = document.getElementById( 'instructions' );

    instructions.addEventListener( 'click', function () {

        controls.lock();

    } );

    controls.addEventListener( 'lock', function () {

        instructions.style.display = 'none';
        blocker.style.display = 'none';

    } );

    controls.addEventListener( 'unlock', function () {

        blocker.style.display = 'block';
        instructions.style.display = '';

    } );

    scene.add( controls.getObject() );



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
    function resizeRendererToDisplaySize(renderer) {
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

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            //controls.handleResize();
        }
        //controls.update( clock.getDelta() );
        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}



main();



