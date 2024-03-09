import './App.css';
import Box from './components/Box';
import { Canvas } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import './components/Navbar'
import NavbarW from './components/Navbar';
import ClickableBox from './components/ClickableBox';
import { AmbientLight } from 'three';
import ClickableBox2 from './components/ClickableBox';

export default function App() {
  return (
    <>
      <NavbarW />
      <Canvas className="canvas" style={{height:'1000px'}} >
        <OrbitControls enableZoom={false} enablePan={false}/>
        
        <ClickableBox />
      </Canvas>
    </>
  );
}

