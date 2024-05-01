import React, {useState, useEffect} from "react";
import NavbarW from "./Navbar";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ClickableBox2 from "./ClickableBox2";
import Footer from "./Footer";
import FilterBox from "./FilterBox";
import { useParams } from 'react-router-dom'; 
import PieChart from "./PieChart";

import text from '../images/text.png';
import code from '../images/code.png';  
import image from '../images/image.png';
import video3d from '../images/video3d.png';
import music from '../images/music.png';
import voice from '../images/music.png';


const dataCode = {
  "name": "root",
  "children": [
    {
      "name": "Branch1",
      "value": 100,
      "images": ["vertexAI.webp"]
    },
    {
      "name": "Branch2",
      "value": 100,
      "images": ["codey.png"]
    },
    {
      "name": "Branch3",
      "value": 100,
      "images": ["sageMaker.png"] 
    }
  ]
};

const dataImage = {
  "name": "root",
  "children": [
    {
      "name": "Branch1",
      "value": 100,
      "images": ["visionAI.png"]
    },
    {
      "name": "Branch2",
      "value": 100,
      "images": ["amazonRekognition.png"]
    },
    {
      "name": "Branch3",
      "value": 100,
      "images": ["googleGemini.png"]
    }
  ]
};

const dataVoice = {
  "name": "root",
  "children": [
    {
      "name": "Branch1",
      "value": 100,
      "images": ["textToSpeech.png"]
    },
    {
      "name": "Branch2",
      "value": 100,
      "images": ["amazonLex.png"]
    },
    {
      "name": "Branch3",
      "value": 100,
      "images": ["krisp.png"]
    }
  ]
};

const dataMusic = {
  "name": "root",
  "children": [
    {
      "name": "Branch1",
      "value": 100,
      "images": ["suno.png"]
    },
    {
      "name": "Branch2",
      "value": 100,
      "images": ["musicGen.png"]
    }
  ]
};

const dataVideo = {
  "name": "root",
  "children": [
    {
      "name": "Branch1",
      "value": 100,
      "images": ["videoAI.png", "amazonPolly.png", "synesthesia.png"]
    }
  ]
};

const data3D = {
  "name": "root",
  "children": [
    {
      "name": "Branch1",
      "value": 100,
      "images": ["azureKinect.png"]
    }
  ]
};

const dataText = {
  "name": "root",
  "children": [
    {
      "name": "Branch1",
      "value": 100,
      "images": ["palM2.png", "vertexAI.png", "autoML.png", "naturalLanguage", "speechToText", "transaltionAI", "dialogflow", "amazonComprehend", "amazonKendra",  ]
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

  const { type } = useParams(); 
  const renderContent = () => {
    switch (type) {
      case 'code':
        return (
          <>
          <div class="flex justify-center items-center h-screen">
          <PieChart data={dataCode} backendData={backendData}/>
          </div>
          <h1>Code</h1>
          </>)
      case 'image':
        return (
          <>
          <div class="flex justify-center items-center h-screen">
          <PieChart data={dataImage} backendData={backendData}/>
          </div>
          <h1>Image</h1>
          </>)
      case 'voice':
        return (
          <>
          <div class="flex justify-center items-center h-screen">
          <PieChart data={dataVoice} backendData={backendData}/>
          </div>
          <h1>Voice</h1>
          </>)
      case 'music':
        return (
          <>
          <div class="flex justify-center items-center h-screen">
          <PieChart data={dataMusic} backendData={backendData}/>
          </div>
          <h1>Music</h1>
          </>)
      case 'video':
        return (
          <>
          <div class="flex justify-center items-center h-screen">
          <PieChart data={dataVideo} backendData={backendData}/>
          </div>
          <h1>Video</h1>
          </>)
      case '3D':
        return (
          <>
          <div class="flex justify-center items-center h-screen">
          <PieChart data={data3D} backendData={backendData}/>
          </div>
          <h1>3D</h1>
          </>)
      case 'text':
        return (
          <>
          <div class="flex justify-center items-center h-screen">
          <PieChart data={dataText} backendData={backendData}/>
          </div>
          <h1>Text</h1>
          </>)
      default:
        return <h1>Unknown</h1>;
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