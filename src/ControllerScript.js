import {
    Vector3,
    CircleGeometry,
    MeshBasicMaterial,
    Mesh,
    Quaternion
} from "../vendor/build/three.module.js";

class ControllerScript {
    constructor(dom, camera) {
        this.prevKeyState = { // key states
            w: false,
            a: false,
            s: false,
            d: false
        };
        // camera crossHairs
        const crossHairsGeo = new CircleGeometry(.0035, 16);
        const crossHairsMat = new MeshBasicMaterial({ color: 0xe6e6e6 });
        crossHairsMat.transparent = true;
        crossHairsMat.opacity = 0.45;
        const crossHairs = new Mesh(crossHairsGeo, crossHairsMat);
        crossHairs.position.set(0, 0, -.5);
        camera.add(crossHairs);

        // wasd event listeners
        this.eventListeners = this.addListeners(this.prevKeyState, dom);
        this.rotation = new Quaternion();
        this.translation = new Vector3();
        //this.phi = 0;
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
    con(camera, speed) { // wasd control function

        // get direction camera is facing in world coords


        camera.getWorldDirection(this.camDirV);
        this.theta = Math.atan2(this.camDirV.x, this.camDirV.z);


        // account for x and y getting super small when looking directly up or down
        /*if ((camDirRaw.x < .0001)&&(camDirV.x > -.0001)){
            camDirRaw.x = .0002;

        }
        if ((camDirRaw.z < .0001)&&(camDirV.z > -.0001)){
            camDirRaw.z = .0002;

        }*/

        // set camera direction vector with constant height
        let camDir = new Vector3(this.camDirV.x, -0, this.camDirV.z);


        // move camera in correct direction
        if (this.prevKeyState.w === true) {
            camera.position.addScaledVector(camDir, speed);
        }
        if (this.prevKeyState.s === true) {
            camera.position.addScaledVector(camDir.negate(), speed);

        }
        if (this.prevKeyState.a === true) {
            camera.translateX(-(speed));
        }
        if (this.prevKeyState.d === true) {
            camera.translateX(speed);
        }

    }

};

export { ControllerScript };