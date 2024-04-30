import React from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import NavbarW from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnotherPage from './components/AnotherPage';
import Footer from './components/Footer';
import Login from './components/Login';

import ClickableBox2 from './components/ClickableBox2';
import { useNavigate } from 'react-router-dom'
import logo3 from './images/descargar.jpg';
import text from './images/text.png';
import academy from './images/academy.png';
import wize3 from './images/wize3.png';
import wize4 from './images/wize4.jpg';
import aimg from './images/ai.webp';
import code from './images/code.png';
import image from './images/image.png';
import { rotate } from 'three/examples/jsm/nodes/Nodes.js';
//import background from './images/background.jpg';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
        <>
          <NavbarW />
          <Canvas className="canvas" style={{ height: '700px'/*, backgroundImage: `url(${s})`*/}}>
            <OrbitControls enableZoom={false} enablePan={false} />
            <CanvasContent />

          </Canvas>
          <Footer />
        </>} />
        <Route path="/another-page/:type" element={<AnotherPage />} />
        <Route path='*'>404 Not Found</Route>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

const CanvasContent = () => {
  const navigate = useNavigate();

  const handleFaceClick = (faceIndex) => {
    let route = '/another-page/';
    switch (faceIndex) {
      case 0:
      case 1:
        console.log('Video');
        navigate(route + 'video');
        break;
      case 2:
      case 3:
        console.log('Image');
        navigate(route + 'image');
        break;
      case 4:
      case 5:
        console.log('Music');
        navigate(route + 'music');
        break;
      case 6:
      case 7:
        console.log('Code');
        navigate(route + 'code');
        break;
      case 8:
        console.log('Voice');
        navigate(route + 'voice');
        break;
      case 9:
        console.log('3D');
        navigate(route + '3D');
        break;
      case 10:
      case 11:
        console.log('Text');
        navigate(route + 'text');
        break;
      default:
        break;
    }
  };

  return (
    <ClickableBox2
      size={[3, 3, 3]}
      rotationSpeed={0.0015}
      images={[logo3, image, aimg, code, wize3, text]}
      onClick={handleFaceClick}
    />
  );
};
