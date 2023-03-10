import RAPIER from "@dimforge/rapier3d-compat";
import {
    Camera,
    Vector3,
} from "three";

class WASDController {
    prevKeyState: {w:boolean,a:boolean,s:boolean,d:boolean};
    camDirV: Vector3;
    camDirVNegative: Vector3;
    camDirVLR: Vector3;
    desiredMovement: Vector3;
    yaxis: Vector3;
    constructor(dom:Document) {
        this.prevKeyState = { // key states
            w: false,
            a: false,
            s: false,
            d: false
        };
        // wasd event listeners
        this.addListeners(this.prevKeyState, dom);
        // vectors for this.con
        this.camDirV = new Vector3;
        this.camDirVNegative = new Vector3;
        this.camDirVLR = new Vector3;
        this.desiredMovement = new Vector3;
        this.yaxis = new Vector3(0,1,0);
    }
    addListeners(prevKeyState:{w:boolean,a:boolean,s:boolean,d:boolean}, dom:Document) {
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
    con(camPair:{cam: Camera, col:RAPIER.Collider, bod:RAPIER.RigidBody}, speed:number, characterController: RAPIER.KinematicCharacterController) { // wasd control function
        // get direction camera is facing in world coords
        camPair.cam.getWorldDirection(this.camDirV); // this.camDirV vector is always magnitude of 1

        // get angle between camera direction and +x axis for left and right strafe movement
        let theta = 0;
        theta = Math.atan2(this.camDirV.x, this.camDirV.z); 

        // set camera direction vector with constant height
        this.camDirV.normalize()
        this.camDirV.y = 0;

        // set/reset desired movement
        this.desiredMovement.set(0,0,0)

        // move camera in correct direction
        if (this.prevKeyState.w === true) {// move forward 
            // add to desired movement in the direction the camera is facing
            this.desiredMovement.addScaledVector(this.camDirV, speed); 
        }
        if (this.prevKeyState.s === true) {// move back
            //create inverse of the direction the camera is facing
            this.camDirVNegative.set(-this.camDirV.x, 0,  -this.camDirV.z)
            // add to desired movement opposite from the direction the camera is facing
            this.desiredMovement.addScaledVector(this.camDirVNegative, speed);

        }
        if (this.prevKeyState.a === true) {
            this.camDirVLR.set(speed, 0, 0) // set left-right vector to speed variable along x axis
            // rotate left-right movement vector on y axis by the angle between the direction
            // the camera is facing and the +x axis (theta)
            this.camDirVLR.applyAxisAngle(this.yaxis, theta) 
            // add to desired movement to the relative left of the camera
            this.desiredMovement.addScaledVector(this.camDirVLR, 1);
          
        }
        if (this.prevKeyState.d === true) {
            this.camDirVLR.set(-speed, 0, 0)// set left-right vector to speed variable along x axis
            // rotate left-right movement vector on y axis by the angle between the direction
            // the camera is facing and the +x axis (theta)
            this.camDirVLR.applyAxisAngle(this.yaxis, theta)
            // add to desired movement to the relative right of the camera
            this.desiredMovement.addScaledVector(this.camDirVLR, 1);
        }
        // compute possible movement vector taking colliders into account
        characterController.computeColliderMovement(camPair.col, this.desiredMovement)
        // aquire computation results
        const correctedMovement = characterController.computedMovement()

        // set corrected movement translation to current position + corrected movement
        correctedMovement.x = camPair.cam.position.x + correctedMovement.x
        correctedMovement.y = camPair.cam.position.y
        correctedMovement.z = camPair.cam.position.z + correctedMovement.z
        // update camera and rigidbody positions
        camPair.cam.position.set(correctedMovement.x, correctedMovement.y, correctedMovement.z)
        camPair.bod.setNextKinematicTranslation(correctedMovement)
    }

};

export default WASDController;