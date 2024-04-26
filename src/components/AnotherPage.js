import React, {useState, useEffect} from "react";
import NavbarW from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ClickableBox2 from "./ClickableBox2";
import Footer from "./Footer";
import FilterBox from "./FilterBox";
import PieChart from "./PieChart";
import data from "./data.json"

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

function AnotherPage () {
  
  const [backendData, setBackendData]= useState([{}])

  useEffect(()=>{

    fetch('/api').then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      setBackendData(data);
  })
  .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
  });
    
  },[] )


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
        <FilterBox />
        <PieChart data={data}/>
        <Footer />
      </div>
    );
    
    
  };
  
  export default AnotherPage;