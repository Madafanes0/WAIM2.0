import React, {useState, useEffect} from "react";
import NavbarW from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ClickableBox2 from "./ClickableBox2";
import Footer from "./Footer";
import FilterBox from "./FilterBox";
import PieChart from "./PieChart";

import logo3 from '../images/descargar.jpg';
import text from '../images/text.png';
import wize3 from '../images/wize3.png';
import aimg from '../images/ai.webp';
import code from '../images/code.png';  
import image from '../images/image.png';


const data = {
  "name": "root",
  "children": [
    {
      "name": "Branch1",
      "value": 200,
      "images": ["VertexAI.webp", "codey.png", "sageMaker.png"]
    },
    {
      "name": "Branch2",
      "value": 100,
      "images": ["VertexAI.webp"]
    },
    {
      "name": "Branch3",
      "value": 100,
      "images": []  // Ensure even empty arrays are present if no images
    }
  ]
};



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

    fetch('/api/by-content-type/Code').then(response => {
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
        <div class="flex justify-center items-center h-screen">
        <PieChart data={data} backendData={backendData}/>
        </div>
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
        
        <Footer />
      </div>
    );
    
    
  };
  
  export default AnotherPage;