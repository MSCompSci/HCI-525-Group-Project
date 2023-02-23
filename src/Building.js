import { TextureLoader, RepeatWrapping, Mesh, PlaneGeometry, MeshStandardMaterial, } from '../vendor/build/three.module.js';
class Floor {
    constructor(scene, w, h, roughnum, map, dispmap, roughmap, aomap){
        const textureLoader = new TextureLoader();
        this.textures = {
            map: textureLoader.load(map),
            displacementMap: textureLoader.load(dispmap),
            roughnessMap: textureLoader.load(roughmap),
            aoMap: textureLoader.load(aomap)
        }
        function textureWrap (obj,w,h){
            let repH = h/10;
            let repW = w/10;
            for (const val of Object.values(obj)){
                val.wrapS = RepeatWrapping;
                val.wrapT  = RepeatWrapping;
                val.repeat.set(repW, repH);
            }
        }
        textureWrap(this.textures, w, h);

        this.floor = new Mesh(new PlaneGeometry(w, h), new MeshStandardMaterial(
            {
                map: this.textures.map,
                displacementMap: this.textures.displacementMap,
                roughnessMap: this.textures.roughnessMap,
                roughness: roughnum,
                aoMap: this.textures.aoMap
            }
        ));
        this.floor.rotation.x = -Math.PI / 2;
        this.floor.castShadow = false;
        this.floor.receiveShadow = true;
        scene.add(this.floor);
    }
}
export {Floor};