import React, {useState, useEffect} from "react";
import NavbarW from "./Navbar";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ClickableBox2 from "./ClickableBox2";
import Footer from "./Footer";
import FilterBox from "./FilterBox";
import PieChart from "./PieChart";

import text from '../images/text.png';
import code from '../images/code.png';  
import image from '../images/image.png';
import video3d from '../images/video3d.png';
import music from '../images/music.png';
import voice from '../images/music.png';


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
        images={[code, image, voice, music, video3d, text]}
        onClick={handleFaceClick}
    />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

function AnotherPage () {
  
  const [backendData, setBackendData]= useState([{}])

  useEffect(() => {
    axios.get('/api/by-content-type/Code')
        .then(response => {
            setBackendData(response.data); // Directly using response.data
        })
        .catch(error => {
            console.error('There was a problem with the axios operation:', error);
        });
}, []);


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