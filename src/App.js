import './App.css';
import { Canvas } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import './components/Navbar'
import NavbarW from './components/Navbar';
import ClickableBox from './components/ClickableBox';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    
    <>
      <NavbarW />
      <Canvas className="canvas" style={{height:'700px'}} >
        <OrbitControls enableZoom={false} enablePan={false}/>
        
        <ClickableBox />
      </Canvas>
    </>

  );
}

