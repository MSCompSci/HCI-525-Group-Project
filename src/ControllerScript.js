import {Vector3, 
    CircleGeometry, 
    MeshBasicMaterial, 
    Mesh,
    Scene
} from "../vendor/build/three.module.js";

class ControllerScript {
    constructor(dom, camera) {
        const prevKeyState = { // key states
            w: false,
            a: false,
            s: false,
            d: false
        };
        // camera crossHairs
        const crossHairsGeo = new CircleGeometry( .0035, 16 );
        const crossHairsMat = new MeshBasicMaterial( { color: 0xe6e6e6} );
        crossHairsMat.transparent = true;
        crossHairsMat.opacity = 0.45;
        const crossHairs = new Mesh( crossHairsGeo, crossHairsMat );
        crossHairs.position.set(0,0,-.5);
        camera.add(crossHairs);

        // wasd event listeners
        this.eventListeners = addListeners();
        function addListeners(){
            dom.addEventListener("keydown", function onPress(e) { // listen for key presses
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
        
            dom.addEventListener("keyup", function onUp(e){ // listen for key releases
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
    }

        this.con = function (camera, speed, collisionV, collision){ // wasd control function

            // get direction camera is facing in world coords
            let camDirRaw = new Vector3;
            //const antiCol = collisionV.negate();
            collisionV.negate();
            //console.log("anticol",collisionV);
            //console.log(collision);
            
            camera.getWorldDirection(camDirRaw);
            collisionV.x = collisionV.x.toPrecision(3);
            collisionV.z = collisionV.z.toPrecision(3);
            
            // account for x and y getting super small when looking directly up or down
            if ((camDirRaw.x < .0001)&&(camDirRaw.x > -.0001)){
                camDirRaw.x = .0002;

            }
            if ((camDirRaw.z < .0001)&&(camDirRaw.z > -.0001)){
                camDirRaw.z = .0002;

            }
            
            // set camera direction vector with constant height
            let camDir = new Vector3(camDirRaw.x, -0 ,camDirRaw.z);


            // move camera in correct direction
            if (prevKeyState.w === true){

                camDir.addScaledVector(collisionV, 1)
                camDir.x = camDir.x.toPrecision(2);
                camDir.z = camDir.z.toPrecision(2);
                camera.position.addScaledVector(camDir, speed);
            }
            if (prevKeyState.s === true){
                camDir.addScaledVector(collisionV, 1)
                camDir.x = camDir.x.toPrecision(2);
                camDir.z = camDir.z.toPrecision(2);
                camera.position.addScaledVector(camDir.negate(), speed);

            }
            if (prevKeyState.a === true){
                if (collision===false){
                    camera.translateX(-(speed));
                }
            }
            if (prevKeyState.d === true){
                if (collision===false){
                    camera.translateX(speed);
                }
            }
            
        }
            
    }};
    
export { ControllerScript };