import React from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import NavbarW from './components/Navbar';
import ClickableBox from './components/ClickableBox';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnotherPage from './components/AnotherPage';

import ClickableBox2 from './components/ClickableBox2';
import { useNavigate } from 'react-router-dom'
import luffy from './images/luffy.jpg';
import musashi from './images/musashi.jpg';
import toji from './images/toji.webp';
import guts from './images/guts.webp';
import ichen from './images/ichen.jpeg';
import bork from './images/bork.jpeg';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
        <>
          <NavbarW />
          <Canvas className="canvas" style={{ height: '700px' }}>
            <OrbitControls enableZoom={false} enablePan={false} />
            <CanvasContent />
          </Canvas>
        </>} />
        <Route path="/another-page" element={<AnotherPage />} />
      </Routes>
    </Router>
  );
}

const CanvasContent = () => {
  const navigate = useNavigate();

  const handleFaceClick = (faceIndex) => {
    switch (faceIndex) {
      case 0:
      case 1:
        console.log('UwU 1');
        navigate('/another-page');
        break;
      case 2:
      case 3:
        console.log('UwU 2');
        break;
      case 4:
      case 5:
        console.log('UwU 3');
        break;
      case 6:
      case 7:
        console.log('UwU 4');
        break;
      case 8:
      case 9:
        console.log('UwU 5');
        break;
      case 10:
      case 11:
        console.log('UwU 6');
        break;
      default:
        break;
    }
  };

  return (
    <ClickableBox2
      size={[3, 3, 3]}
      rotationSpeed={0.0015}
      images={[luffy, musashi, toji, guts, ichen, bork]}
      onClick={handleFaceClick}
    />
  );
};
