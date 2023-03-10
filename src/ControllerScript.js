import { Collider } from "@dimforge/rapier3d";
import {
    Vector2,
    Vector3,
} from "three";

class ControllerScript {
    constructor(dom, physicsWorld) {
        this.prevKeyState = { // key states
            w: false,
            a: false,
            s: false,
            d: false
        };
        // wasd event listeners
        this.eventListeners = this.addListeners(this.prevKeyState, dom);
        this.translation = new Vector3();
        this.theta = 0;
        this.camDirV = new Vector3;
    }
    addListeners(prevKeyState, dom) {
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

        dom.addEventListener("keyup", function onUp(e) { // listen for key releases
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
        })
    }
    con(camera, speed, cameraBody, characterController) { // wasd control function

        // get direction camera is facing in world coords


        camera.getWorldDirection(this.camDirV); // this.camDirV vector is always magnitude of 1
        this.theta = Math.atan2(this.camDirV.x, this.camDirV.z); // angle between camera direction and +x axis

        // set camera direction vector with constant height
        let camDir = new Vector3(this.camDirV.x, 0, this.camDirV.z).normalize(); // camera direction on x z plane
        
        
        let desiredMovement = new Vector3(0,0,0);

        


        // move camera in correct direction
        if (this.prevKeyState.w === true) {
            desiredMovement.addScaledVector(camDir, speed);
        }
        if (this.prevKeyState.s === true) {
            desiredMovement.addScaledVector(new Vector3(-camDir.x, 0, -camDir.z), speed);

        }
        if (this.prevKeyState.a === true) {
            //desiredMovement.translateX(-(speed));
        }
        if (this.prevKeyState.d === true) {
            //desiredMovement.translateX(speed);
        }
        return desiredMovement
        

    }

};

export { ControllerScript };