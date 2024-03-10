import React from "react";
import NavbarW from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ClickableBox2 from "./ClickableBox2";
import luffy from '../images/luffy.jpg';
import musashi from '../images/musashi.jpg';
import toji from '../images/toji.webp';
import guts from '../images/guts.webp';
import ichen from '../images/ichen.jpeg';
import bork from '../images/bork.jpeg';


const CanvasContent = () => {
  //const navigate = useNavigate(); possible if i want to make an alternative to another page 
  const handleFaceClick = (faceIndex) => {
    console.log(faceIndex);
    
  };

  return (
    <>
      <ClickableBox2
        size={[3, 3, 3]}
        rotationSpeed={0.0020}
        images={[luffy, musashi, toji, guts, ichen, bork]}
        onClick={handleFaceClick}
      />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

const AnotherPage = () => {
  
  return (
      <div>
        <NavbarW />
        <Canvas className="canvas" style={{ height: "300px", width: '300px'}}>
          <CanvasContent />
        </Canvas>
      </div>
    );
    
    
  };
  
  export default AnotherPage;