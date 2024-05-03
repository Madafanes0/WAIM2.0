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
      "name": "",
      "value": 100,
      "images": ["vertexAI.webp"]
    },
    {
      "name": "",
      "value": 100,
      "images": ["codey.png"]
    },
    {
      "name": "",
      "value": 100,
      "images": ["sageMaker.png"] 
    }
  ]
};

const dataImage = {
  "name": "root",
  "children": [
    {
      "name": "",
      "value": 100,
      "images": ["visionAI.png"]
    },
    {
      "name": "",
      "value": 100,
      "images": ["amazonRekognition.png"]
    },
    {
      "name": "",
      "value": 100,
      "images": ["googleGemini.png"]
    }
  ]
};

const dataVoice = {
  "name": "root",
  "children": [
    {
      "name": "",
      "value": 100,
      "images": ["textToSpeech.png"]
    },
    {
      "name": "",
      "value": 100,
      "images": ["amazonLex.png"]
    },
    {
      "name": "",
      "value": 100,
      "images": ["krisp.png"]
    }
  ]
};

const dataMusic = {
  "name": "root",
  "children": [
    {
      "name": "",
      "value": 100,
      "images": ["suno.png"]
    },
    {
      "name": "",
      "value": 100,
      "images": ["musicGen.png"]
    }
  ]
};

const dataVideo = {
  "name": "root",
  "children": [
    {
      "name": "",
      "value": 100,
      "images": ["videoAI.png"]
    },
    {
      "name": "",
      "value": 100,
      "images": ["amazonPolly.png"]
    },
    {
      "name": "",
      "value": 100,
      "images": ["synesthesia.png"]
    }
  ]
};

const data3D = {
  "name": "root",
  "children": [
    {
      "name": "",
      "value": 100,
      "images": ["azureKinect.png"]
    }
  ]
};

const dataText = {
  "name": "root",
  "children": [
    {
      "name": "Foundation Models",
      "value": 50,
      "images": ["palM2.png", "azureDatabricks.png"]
    },
    {
      "name": "Cloud Services",
      "value": 100,
      "images": ["chirp.webp", "autoML.png", "NaturalLanguageAI.png", "speechToText.png", "transaltionAI.png","amazonBedrock.png", "azureAIDocIntelligence.png", "azureMachineLearning.png", "azureCognitiveSearch.webp", "llamaIndex.png"]
    },
    {
      "name": "Applications",
      "value": 150,
      "images": ["dialogflow.png", "amazonComprehend.png", "Kendra.png", "amazonCodewhisperer.png", "azureBotService.png", "quillbot.webp", "jenni.png", "octane.png", "quickchatAI.png", "quizgecko.png", "quotifyAI.png", "perplexityAI.png"]
    },
    {
      "name": "Data and Integration Services",
      "value": 50,
      "images": ["amazonTextract.png"]
    }
  ]
};



function AnotherPage () {
  
  const [backendData, setBackendData]= useState([{}])
  const { type } = useParams(); 
  useEffect(() => {
    axios.get(`/api/by-content-type/${type}`)
        .then(response => {
            setBackendData(response.data); // Directly using response.data
        })
        .catch(error => {
            console.error('There was a problem with the axios operation:', error);
        });
}, [type]);

  const renderContent = () => {
    switch (type) {
      case 'Code':
        return (
          <>
          <div class="flex justify-center items-center h-screen">
          <PieChart data={dataCode} backendData={backendData}/>
          </div>
          <h1>Code</h1>
          </>)
      case 'Image':
        return (
          <>
          <div class="flex justify-center items-center h-screen">
          <PieChart data={dataImage} backendData={backendData}/>
          </div>
          <h1>Image</h1>
          </>)
      case 'Voice':
        return (
          <>
          <div class="flex justify-center items-center h-screen">
          <PieChart data={dataVoice} backendData={backendData}/>
          </div>
          <h1>Voice</h1>
          </>)
      case 'Music':
        return (
          <>
          <div class="flex justify-center items-center h-screen">
          <PieChart data={dataMusic} backendData={backendData}/>
          </div>
          <h1>Music</h1>
          </>)
      case 'Video':
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
      case 'Text':
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
        <Canvas className="canvas" style={{ height: "100", width: '300px'}}>
        
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