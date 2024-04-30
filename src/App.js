import React from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import NavbarW from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnotherPage from './components/AnotherPage';
import Footer from './components/Footer';
import Login from './components/Login';
import DeleteScreen from './components/DeleteScreen';
import AddScreen from './components/AddScreen';
import ClickableBox2 from './components/ClickableBox2';
import { useNavigate } from 'react-router-dom'

import text from './images/text.png';
import code from './images/code.png';
import image from './images/image.png';
import { rotate } from 'three/examples/jsm/nodes/Nodes.js';
import video3d from './images/video3d.png';
import music from './images/music.png';
import voice from './images/voice.png';

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
        <Route path='/DeleteScreen' element={<DeleteScreen/>}/>
        <Route path='/AddScreen' element={<AddScreen/>}/>
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
        console.log('Code');
        navigate(route + 'code');
        break;
      case 2:
      case 3:
        console.log('Image');
        navigate(route + 'image');
        break;
      case 4:
      case 5:
        console.log('Voice');
        navigate(route + 'voice');
        break;
      case 6:
      case 7:
        console.log('Muisic');
        navigate(route + 'music');
        break;
      case 8:
        console.log('Video');
        navigate(route + 'video');
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
      images={[code, image, voice, music, video3d, text]}
      onClick={handleFaceClick}
    />
  );
};
