import {
    Camera,
    Vector3,
    Raycaster,
    Mesh,
    Scene,
} from "three";
import data from './object-data.json';

class Selector {
    camDirV: Vector3;
    ray: Raycaster;
    objectName: string;
    clickRegistered: boolean;
    blockerClick: boolean;
    prevDist: number;
    constructor(offset: number) {
        this.camDirV = new Vector3; 
        this.ray = new Raycaster;
        this.ray.near = offset;
        this.ray.far = 10.0;
        this.objectName = ''
        this.clickRegistered = false;
        this.blockerClick = false;
        this.prevDist = 6.5;
        document.addEventListener('click', this.clicked.bind(this)) // add event listener for clicking on item
        const blocker = document.getElementById('item-blocker') 
        if (blocker) {
            blocker.addEventListener('click', this.blockerClicked.bind(this))  // add event listener for clicking on item info to relock controls
        }
    }

    itemHover(cam: Camera, scene: Scene, crossHairs: Mesh, interactiveItems: string[]) {
        cam.getWorldDirection(this.camDirV); // get camera direction
        this.ray.set(cam.position, this.camDirV.normalize()) // set raycast from camera direction
        const intersects = this.ray.intersectObjects(scene.children); //get intersected objects

        let hover = false;
        let immobile = false;
        let lock = false;
        let door = false;

        //get first intersected object
        for (let i = 0; i < intersects.length; i++) {
            this.objectName = intersects[0].object.name;
            const distance = intersects[0].distance;
            //if item is interactive
            if (interactiveItems.indexOf(this.objectName) > -1) {
                crossHairs.scale.set(2, 2, 2); //make crosshair larger
                hover = true; //flag as hovering

                // is the player within range of the door
                if(this.objectName==='doorway'&&distance<6.5){ 
                    let delta = this.prevDist - distance; // diff between distance and previous distance
                    if(delta>0.1){ // if player moves closer
                        door = true; // trigger popup
                        this.prevDist = distance // set new benchmark for activation disstance
                    }
                }
                if(distance>6.5){ // reset previous distance so activation range does not shrink
                    this.prevDist = 6.5;
                }

                // if object clicked or within range of door
                if (this.clickRegistered||door) {
                    this.showPopup(this.objectName) //show popup with info
                    immobile = true; // make player immobile
                }
            }
            else {
                hover = false; //otherwise not hovering
            }
        }
        if (crossHairs.scale.x === 2 && !hover) { // reset crosshairs size
            crossHairs.scale.set(1, 1, 1)
        }
        if(immobile && this.blockerClick){ // hide popup and relock controls on click
            immobile = false;
            lock = true;
            this.hidePopup();
            
        }
        this.clickRegistered = false;
        this.blockerClick = false;
        return {immobile: immobile, lock: lock};
    }

    showPopup(objectName: string) { // show popup with info about item
        const itemBlocker = document.getElementById('item-blocker');
        const itemInfo = document.getElementById('item-info');
        const itemTitle = document.getElementById('item-title');
        const itemDesc = document.getElementById('item-desc');
        const itemYear = document.getElementById('item-year');
        const itemMedium = document.getElementById('item-medium');
        const itemLink = document.getElementById('item-link');
        const itemImage = document.getElementById('item-image');
        // TODO add citations?
        if (itemBlocker && itemInfo && itemTitle && itemDesc && itemYear && itemMedium && itemLink && itemImage) {
            if (data.hasOwnProperty(objectName) ){
                itemTitle.textContent = objectName;
                itemDesc.textContent = data[objectName].desc;
                itemYear.textContent = data[objectName].year;
                itemMedium.textContent = data[objectName].medium;
                itemLink.setAttribute("href", data[objectName].link);
                itemImage.setAttribute("alt", data[objectName].alt);
                itemImage.setAttribute("src", data[objectName].image);
            }
            itemBlocker.style.display = 'block';
            itemInfo.style.display = '';
        }
    }

    hidePopup(){ // hide popup with info about item
        const itemBlocker = document.getElementById('item-blocker');
        const itemInfo = document.getElementById('item-info');
        if (itemInfo && itemBlocker) {
            itemInfo.style.display = 'none';
          itemBlocker.style.display = 'none';
        }
    }

    clicked() { // register click on item
        this.clickRegistered = true;
    }
    blockerClicked() { // register click on blocker to relock controls
        this.blockerClick = true;
    }
}
export default Selector;