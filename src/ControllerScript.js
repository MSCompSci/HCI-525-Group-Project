import {Vector3} from '../vendor/build/three.module.js';
class ControllerScript {
    constructor(dom) {
        const prevKeyState = { // key states
            w: false,
            a: false,
            s: false,
            d: false
        };
        this.document = dom;
        this.eventListeners = addListeners();
        function addListeners(){
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
    }

        this.con = function (camera, sp){ // wasd controls

            // get direction camera is facing in world coords
            let camDirRaw = new Vector3;
            const speed = sp; 
            camera.getWorldDirection(camDirRaw);
    
            // account for x and y getting super small when looking directly up or down
            if ((camDirRaw.x < .0001)&&(camDirRaw.x > -.0001)){
                camDirRaw.x = .0002;
            }
            if ((camDirRaw.z < .0001)&&(camDirRaw.z > -.0001)){
                camDirRaw.z = .0002;
            }
    
            // set camera direction vector with constant height
            let camDir = new Vector3(camDirRaw.x, 0 ,camDirRaw.z);
    
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
            
    }};
    
export { ControllerScript };