import React from 'react'
import {useFrame } from '@react-three/fiber';
import {useRef} from 'react';


const Cube=({position, size, color})=>{

    const ref = useRef();
    const [isClicked, setIsClicked] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    const handleOnClick = (faceIndex) => {
        console.log('Clicked face', faceIndex);
    };

    useFrame((state,delta)=>{
    ref.current.rotation.x += 0.1*delta;
    ref.current.rotation.y += 0.1*delta;
    ref.current.rotation.z += 0.1*delta;
})

    return(
        <mesh 
        rotation ={[90,0,20]} 
        ref={ref}
        position={position}
        onClick={()=>setIsClicked(!isClicked)}
        scale={isClicked ? [2,2,2]:[1,1,1]}
        onScroll={()=>setIsScrolled(!isScrolled)}

        >
            <boxGeometry attach="geometry" args={[2,2,2]}/>
            <meshBasicMaterial attach="material"/>
        </mesh>
    );
} 

export default function Box(){

    return(

        <Cube position={[0,0,0]} size={[3,3,3]} color={'#FF0000'}/>
    )
}