import React from "react";
import NavbarW from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ClickableBox2 from "./ClickableBox2";
import Footer from "./Footer";

import franky from '../images/franky.webp';
import musashi from '../images/musashi.jpg';
import toji from '../images/toji.webp';
import guts from '../images/guts.webp';
import ichen from '../images/ichen.jpeg';
import chopper from '../images/chopper.jpg';




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
        images={[franky, musashi, toji, guts, ichen, chopper]}
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
        <div class="justify-center text-white text-center">
          <h1>Another Page</h1>
          <p>Another page content eghsrgdfhgpwojgdfñhjgsdfg</p>
          <p>Another page content eghsrgdfhgpwojgdfñhjgsdfg</p>
          <p>Another page content eghsrgdfhgpwojgdfñhjgsdfg</p>
          <p>Another page content eghsrgdfhgpwojgdfñhjgsdfg</p>
          <p>Another page content eghsrgdfhgpwojgdfñhjgsdfg</p>
          <p>Another page content eghsrgdfhgpwojgdfñhjgsdfg</p>
          <p>Another page content eghsrgdfhgpwojgdfñhjgsdfg</p>
          <p>Another page content eghsrgdfhgpwojgdfñhjgsdfg</p>
          <p>Another page content eghsrgdfhgpwojgdfñhjgsdfg</p>
          <p>Another page content eghsrgdfhgpwojgdfñhjgsdfg</p>
          <p>Another page content eghsrgdfhgpwojgdfñhjgsdfg</p>
          <p>Another page content eghsrgdfhgpwojgdfñhjgsdfg</p>
          <p>Another page content eghsrgdfhgpwojgdfñhjgsdfg</p>
          <p>Another page content eghsrgdfhgpwojgdfñhjgsdfg</p>
          <p>Another page content eghsrgdfhgpwojgdfñhjgsdfg</p>
          <p>Another page content eghsrgdfhgpwojgdfñhjgsdfg</p>

        </div>
        <Footer />
      </div>
    );
    
    
  };
  
  export default AnotherPage;