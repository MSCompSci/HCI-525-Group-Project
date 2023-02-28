
import {LoadingManager, 
        TextureLoader, 
        RepeatWrapping, 
        Mesh, 
        PlaneGeometry, 
        MeshStandardMaterial, 
        BoxGeometry,
        FrontSide, 
        Group    
    } from '../vendor/build/three.module.js';
import { GLTFLoader } from '../vendor/examples/jsm/loaders/GLTFLoader.js';

class Floor {
    constructor(scene, loadManager, w, l, roughnum, map, dispmap, roughmap, aomap){
        const textureLoader = new TextureLoader(loadManager);
        const textures = {
            map: textureLoader.load(map),
            displacementMap: textureLoader.load(dispmap),
            roughnessMap: textureLoader.load(roughmap),
            aoMap: textureLoader.load(aomap)
        }
        function textureWrap (obj,w,l){
            let repL = l/10;
            let repW = w/10;
            for (const val of Object.values(obj)){
                val.wrapS = RepeatWrapping;
                val.wrapT  = RepeatWrapping;
                val.repeat.set(repW, repL);
            }
        }
        textureWrap(textures, w, l);

        this.floor = new Mesh(new PlaneGeometry(w, l), new MeshStandardMaterial(
            {
                map: textures.map,
                displacementMap: textures.displacementMap,
                roughnessMap: textures.roughnessMap,
                roughness: roughnum,
                aoMap: textures.aoMap
            }
        ));
        this.floor.rotation.x = -Math.PI / 2;
        this.floor.castShadow = false;
        this.floor.receiveShadow = true;
        scene.add(this.floor);
    }
}

class Wall {
    constructor(scene, loadManager, w, h, d, roughnum,  map, roughmap, aomap){
        
        const textureLoader = new TextureLoader(loadManager);
        const textures = {
            map: textureLoader.load(map),
            roughnessMap: textureLoader.load(roughmap),
            aoMap: textureLoader.load(aomap)
        }
        function textureWrap (obj){
            for (const val of Object.values(obj)){
                let repH = h/10;
                let repW = w/10;
                val.wrapS = RepeatWrapping;
                val.wrapT  = RepeatWrapping;
                val.repeat.set(repW, repH);
            }
        }
        textureWrap(textures);
        const material = new MeshStandardMaterial(
            {
                map: textures.map,
                roughnessMap: textures.roughnessMap,
                roughness: roughnum,
                aoMap: textures.aoMap,
                side: FrontSide
            });
        const fillerMaterial = new MeshStandardMaterial({color: 0x000000});
        const wallOuter = new Mesh(new BoxGeometry(w, h, d), material);
        const wallFill = new Mesh(new BoxGeometry(w-.05, h-.05, d-.05), fillerMaterial);
        this.wall = new Group();
        wallOuter.castShadow = true;
        wallFill.castShadow = true;
        wallFill.receiveShadow = false;
        wallOuter.receiveShadow = true;
        this.wall.add(wallFill);
        this.wall.add(wallOuter);
        this.wall.translateY(h/2+.45);
        scene.add(this.wall);
    }
}

class Ceiling {
    constructor(scene, loadManager, w, l, roughnum, map, dispmap, roughmap, aomap, norm){
        const textureLoader = new TextureLoader(loadManager);
        const textures = {
            map: textureLoader.load(map),
            displacementMap: textureLoader.load(dispmap),
            roughnessMap: textureLoader.load(roughmap),
            aoMap: textureLoader.load(aomap),
            norm: textureLoader.load(norm)
        }
        function textureWrap (obj,w,l){
            let repL = l/10;
            let repW = w/10;
            for (const val of Object.values(obj)){
                val.wrapS = RepeatWrapping;
                val.wrapT  = RepeatWrapping;
                val.repeat.set(repW, repL);
            }
        }
        textureWrap(textures, w, l);

        this.floor = new Mesh(new PlaneGeometry(w, l), new MeshStandardMaterial(
            {
                map: textures.map,
                displacementMap: textures.displacementMap,
                roughnessMap: textures.roughnessMap,
                roughness: roughnum,
                aoMap: textures.aoMap,
                normalMap: textures.norm
            }
        ));
        this.floor.rotation.x = (-3*(Math.PI))/2;
        this.floor.castShadow = false;
        this.floor.receiveShadow = false;
        scene.add(this.floor);
    }
}

class LightFixture {
    constructor(scene, model){
        const loader = new GLTFLoader();
        loader.load(model, function(gltf){
            scene.add(gltf.scene);
        }, undefined, function ( error ) {

            console.error( error );
        });
    }
}

export {Floor, Wall, Ceiling, LightFixture};