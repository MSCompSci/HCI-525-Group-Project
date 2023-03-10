import { CubeTextureLoader, LoadingManager, TextureLoader,  RepeatWrapping, Mesh, BoxGeometry, MeshStandardMaterial } from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

class World{
    cubeLoad: CubeTextureLoader;
    textureLoader: TextureLoader;
    GLTFLoader: any;

    constructor(loadMan: LoadingManager){
        this.cubeLoad = new CubeTextureLoader(loadMan);
        this.textureLoader = new TextureLoader(loadMan);
        this.GLTFLoader = new GLTFLoader(loadMan);
    }

    textureWrap (texts:Array<any>,w:number,l:number){
        let repL = l/10;
        let repW = w/10;
        for (const val of Object.values(texts)){
            val.wrapS = RepeatWrapping;
            val.wrapT  = RepeatWrapping;
            val.repeat.set(repW, repL);
        }
    }

    skybox(){
        const texture = this.cubeLoad.loadAsync([
            '../assets/Skybox/px.png',
            '../assets/Skybox/nx.png',
            '../assets/Skybox/py.png',
            '../assets/Skybox/ny.png',
            '../assets/Skybox/pz.png',
            '../assets/Skybox/nz.png',
        ]);
        return texture;
    }

    floor(w:number, l:number, roughnum:number, map:string, roughmap:string, aomap:string){
        return new Promise(resolve =>{
            const textures = [
                this.textureLoader.loadAsync(map),
                this.textureLoader.loadAsync(roughmap),
                this.textureLoader.loadAsync(aomap)
            ];
            Promise.all(textures).then(texts=>{
                this.textureWrap(texts, w, l);
                const floor = new Mesh(new BoxGeometry(w, 1, l), new MeshStandardMaterial(
                    {
                        map: texts[0],
                        roughnessMap: texts[1],
                        roughness: roughnum,
                        aoMap: texts[2],
                    }
                ));
                floor.castShadow = false;
                floor.receiveShadow = true;
                resolve(floor)
            })
        })
    }
    wall(w:number, h:number, d:number, roughnum:number, shadowCast:boolean, shadowRec:boolean,  map:string, roughmap:string, aomap:string){
        return new Promise(resolve =>{
            const textures = [
                this.textureLoader.loadAsync(map),
                this.textureLoader.loadAsync(roughmap),
                this.textureLoader.loadAsync(aomap)
            ];
            Promise.all(textures).then(texts=>{
                this.textureWrap(texts, w, h);
                const wall = new Mesh(
                    new BoxGeometry(w, h, d), 
                    new MeshStandardMaterial(
                        {
                            map: texts[0],
                            roughnessMap: texts[1],
                            roughness: roughnum,
                            aoMap: texts[2],
                        }
                ));
                wall.castShadow = shadowCast;
                wall.receiveShadow = shadowRec;
                wall.translateY(h/2+.45);
                resolve(wall)
            })
        })
    }
    gltfModel(model:string, scale:number, posX:number, posY:number, posZ:number, rotation:number, shadowCast:boolean){
        return new Promise(resolve =>{
            const mod = this.GLTFLoader.loadAsync(model);
            //console.log(mod)
            Promise.all([mod]).then(gltf=>{
                const loadedGLTF = gltf[0];
                //console.log(loadedGLTF)
                loadedGLTF.scene.scale.set(scale, scale, scale); 
                loadedGLTF.scene.position.set(posX,posY,posZ);
                loadedGLTF.scene.rotateY(rotation);
                loadedGLTF.scene.traverse( function( node:any ) {
                    if ( node.isMesh ) { 
                        if ( node.isMesh || node.isLight ) node.castShadow = shadowCast;
                    }
    
                });
                resolve(loadedGLTF.scene)
            })
        })
    }
}

export default World;