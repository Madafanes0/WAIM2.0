import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ClickableBox = () => {
    const meshRef = useRef();
    const handleOnClick = (faceIndex) => {
        console.log('Clicked face', faceIndex);
    };


    useFrame(() => {
        // Rotate the box over time
        //meshRef.current.rotation.x += 0.0009;
        meshRef.current.rotation.y += 0.0015;
    });

    return (
        <mesh
        ref={meshRef}
        onClick={(event) => {
            const intersections = event.intersections;
            if (intersections.length > 0) {
                const faceIndex = intersections[0].faceIndex;
                handleOnClick(faceIndex);
            }
            switch(intersections[0].faceIndex){
            case 0 :{
                console.log('UwU 1');
                break;
            }
            case 1 :{
                console.log('UwU 1');
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
            }
            

        }}
    >
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshBasicMaterial color="red"/>
    </mesh>
    
    );
};

export default ClickableBox;
