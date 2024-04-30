import React from "react";
import NavbarW from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ClickableBox2 from "./ClickableBox2";
import Footer from "./Footer";
import FilterBox from "./FilterBox";
import { useParams } from 'react-router-dom'; 

import logo3 from '../images/descargar.jpg';
import text from '../images/text.png';
import academy from '../images/academy.png';
import wize3 from '../images/wize3.png';
import wize4 from '../images/wize4.jpg';
import aimg from '../images/ai.webp';
import code from '../images/code.png';
import image from '../images/image.png';




const CanvasContent = () => {
  //const navigate = useNavigate(); possible if i want to make an alternative to another page 
  const handleFaceClick = (faceIndex) => {
    console.log(faceIndex);
    
  };

  return (
    <>
      <ClickableBox2
        size={[3, 3, 3]}
        rotationSpeed={0.0015}
        images={[logo3, image, aimg, code, wize3, text]}
        onClick={handleFaceClick}
    />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

const AnotherPage = () => {
  const { type } = useParams();

  const renderContent = () => {
    switch (type) {
      case 'video':
        return (
          <div>
            <h1>Video</h1>
            <p>Video content</p>
          </div>
        );
      case 'image':
        return (
          <div>
            <h1>Image</h1>
            <p>Image content</p>
          </div>
        );
      case 'music':
        return (
          <div>
            <h1>Music</h1>
            <p>Music content</p>
          </div>
        );
      case 'code': 
        return (
          <div>
            <h1>Code</h1>
            <p>Code content</p>
          </div>
        );
      case 'voice':
        return (
          <div>
            <h1>Voice</h1>
            <p>Voice content</p>
          </div>
        );
      case '3D':
        return (
          <div>
            <h1>3D</h1>
            <p>3D content</p>
          </div>
        );
      case 'text':
        return (
          <div>
            <h1>Text</h1>
            <p>Text content</p>
          </div>
        );
      default:
        return (
          <div>
            <h1>Another Page</h1>
            <p>Another page content</p>
          </div>
        );
    }
  };

  return (
      <div>
        <NavbarW />
        <Canvas className="canvas" style={{ height: "300px", width: '300px'}}>
          <CanvasContent />
        </Canvas>
        <div class="justify-center text-black text-center">
          {renderContent()}
        </div>
        <FilterBox />
        <Footer />
      </div>
    );
    
    
  };
  
  export default AnotherPage;