import './App.css';
import Box from './components/Box';
import { Canvas } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import './components/Navbar'
import Example from './components/Navbar';
import ClickableBox from './components/ClickableBox';
import { AmbientLight } from 'three';

export default function App() {
  return (
    <>
      <Example />
      <Canvas className="canvas" style={{height:'600px'}} >
        <OrbitControls enableZoom={false} enablePan={false}/>
        
        <ambientLight intensity={0.5}/>
        <directionalLight intensity={0.5} position={[-2,5,2]}/>
        <directionalLight intensity={2} position={[5,1,5]}/>
        <directionalLight intensity={1} position={[-10,-5,-10]}/>
        <ClickableBox />
      </Canvas>
    </>
  );
}

