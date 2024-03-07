import React from 'react'

export default function Box(){
    return(
    <mesh rotation ={[90,0,20]}>
        <dodecahedronGeometry attach="geometry" args={[3,0]}/>
        <meshLambertMaterial attach="material" color="blue"/>
    </mesh>
    );
}
