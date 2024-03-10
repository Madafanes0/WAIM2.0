import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom'
import luffy from '../images/luffy.jpg';
import musashi from '../images/musashi.jpg';
import toji from '../images/toji.webp';
import guts from '../images/guts.webp';
import ichen from '../images/ichen.jpeg';
import bork from '../images/bork.jpeg';

const ClickableBox = () => {
    const meshRef = useRef();
    const navigate= useNavigate();

    //images for the Box
    const texture1 = new THREE.TextureLoader().load(luffy);
    const texture2= new THREE.TextureLoader().load(musashi);
    const texture3= new THREE.TextureLoader().load(toji);
    const texture4= new THREE.TextureLoader().load(guts);
    const texture5= new THREE.TextureLoader().load(ichen);
    const texture6= new THREE.TextureLoader().load(bork);
    
    //making it material for use
    const material = new THREE.MeshBasicMaterial({ map: texture1 });
    const material2= new THREE.MeshBasicMaterial({ map: texture2 });
    const material3= new THREE.MeshBasicMaterial({ map: texture3 });
    const material4= new THREE.MeshBasicMaterial({ map: texture4 });
    const material5= new THREE.MeshBasicMaterial({ map: texture5 });
    const material6= new THREE.MeshBasicMaterial({ map: texture6 });
    
    //defining the figure
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    //asssing the material to the figure
    const mesh = new THREE.Mesh(geometry, [material, material2, material3, material4, material5, material6]);

    //animation for movemnet in y
    useFrame(() => {
        meshRef.current.rotation.y += 0.0015;
    });

    return (
        <Suspense fallback={null}>
            <primitive
                ref={meshRef}
                object={mesh}
                onClick={(event) => {
                    const intersections = event.intersections;
                    if (intersections.length > 0) {
                        const faceIndex = intersections[0].faceIndex;
                        //adding switch case for the faceIndex, for some reason idk why each face has 2 [0,1,2,3,4,5,6,7,8,9,10,11]
                        switch(faceIndex){
                            case 0 :{
                                console.log('UwU 1');
                                navigate('/another-page') 
                                break;
                            }
                            case 1 :{
                                console.log('UwU 1');
                                navigate('/another-page')  
                                break;
                            } 
                
                            case 2 :{
                                console.log('UwU 2');
                                break;
                            }
                            case 3 :{
                                console.log('UwU 2');
                                break;
                            }
                            case 4 :{
                                console.log('UwU 3');
                                break;
                            }
                            case 5 :{
                                console.log('UwU 3');
                                break;
                            }
                            case 6 :{
                                console.log('UwU 4');
                                break;
                            }
                            case 7 :{
                                console.log('UwU 4');
                                break;
                            }
                            case 8 :{
                                console.log('UwU 5');
                                break;
                            }
                            case 9 :{
                                console.log('UwU 5');
                                break;
                            }
                            case 10 :{
                                console.log('UwU 6');
                                break;
                            }   
                            case 11 :{
                                console.log('UwU 6');
                                break;
                            }
                            default :{
                                
                            }
                            }
                    }
                }}
            />
        </Suspense>
    );
};

export default ClickableBox;
