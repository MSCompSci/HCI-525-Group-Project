import { Box3, BoxGeometry, Mesh, MeshBasicMaterial, Vector3, Vector2, Ray, CapsuleGeometry } from "../vendor/build/three.module.js";

class CamCollisionBox {
    constructor(camera){
        this.cube = new Mesh(
            new CapsuleGeometry(2.5,2.5,24),
            new MeshBasicMaterial({})
        );
        this.cube.position.set(0,-1,0);
        this.cube.castShadow = false;
        this.cube.receiveShadow = false;
        this.cubeBB = new Box3(new Vector3(), new Vector3());
        this.cubeBB.setFromObject(this.cube);
        camera.add(this.cube);
        this.rayCasters = [

        ];

    }

    updateCollision(boundaryBoxes, camera){
        //console.log("cube",this.cube.position);
        this.cubeBB.copy(this.cube.geometry.boundingBox).applyMatrix4(this.cube.matrixWorld);
        let camV = new Vector3;
        let collisionV = camera.getWorldDirection(camV).negate();
        let coll = false;
        collisionV.y = 0;

        for (const b of boundaryBoxes){
            if (this.cubeBB.intersectsBox(b)){
                //console.log("intersection");
                let camDir = camera.getWorldDirection(new Vector3());
                let intersectCenter = this.cubeBB.intersect(b).getCenter(new Vector3());
                //console.log("inter",intersectCenter);
                let camPos = this.cube.getWorldPosition(new Vector3());
                //console.log("campos",camPos);
                const posDelta = new Vector3(camPos.x.toPrecision(2) - intersectCenter.x.toPrecision(2), 0, camPos.z.toPrecision(2) - intersectCenter.z.toPrecision(2));
                //console.log("posDX", posDelta);
                collisionV.x +=  camDir.x.toPrecision(2) - posDelta.x.toPrecision(2);
                collisionV.z += camDir.z.toPrecision(2) - posDelta.z.toPrecision(2);
                coll = true;
            }


        };
        collisionV.normalize()
        collisionV.x = collisionV.x.toPrecision(3);
        collisionV.z = collisionV.z.toPrecision(3);
        return [collisionV, coll];
    }

    setCollidables(objects){
        let objBBArray = [];
        for (const o of objects){
            let objBB = new Box3(new Vector3(), new Vector3());
            objBB.setFromObject(o)
            objBBArray.push(objBB)
        };
        return objBBArray;

    }

}

export{CamCollisionBox};