import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import vertexAI from '../logos/vertexAI.webp';
import codey from '../logos/codey.png';
import sageMaker from '../logos/sageMaker.png';
import visionAI from '../logos/visionAI.png';
import amazonRekognition from '../logos/amazonRekognition.png';
import googleGemini from '../logos/googleGemini.webp';
import textToSpeech from '../logos/textToSpeech.png';
import amazonLex from '../logos/amazonLex.png';
import krisp from '../logos/krisp.png';
import suno from '../logos/suno.png';
import musicGen from '../logos/musicGen.png';
import videoAI from '../logos/videoAI.png';
import amazonPolly from '../logos/amazonPolly.png';
import synesthesia from '../logos/synesthesia.png';
import azureKinect from '../logos/azureKinect.png';
import palM2 from '../logos/palM2.png';
import chirp from '../logos/chirp.webp';
import autoML from '../logos/autoML.png';
import naturalLanguage from '../logos/naturalLanguage.png';
import speechToText from '../logos/speechToText.png';
import translationAI from '../logos/translationAI.png';
import dialogflow from '../logos/dialogflow.png';
import amazonComprehend from '../logos/amazonComprehend.png';
import amazonKendra from '../logos/amazonKendra.png';
import amazonTextract from '../logos/amazonTextract.png';
import amazonBedrock from '../logos/amazonBedrock.png';
import amazonCodewhisperer from '../logos/amazonCodewhisperer.png';
import azureAIDocIntelligence from '../logos/azureAIDocIntelligence.png';
import azureMachineLearning from '../logos/azureMachineLearning.png';
import azureCognitiveSearch from '../logos/azureCognitiveSearch.webp';
import azureBotService from '../logos/azureBotService.png';
import azureDatabricks from '../logos/azureDatabricks.png';
import azureOpenAI from '../logos/azureOpenAI.png';
import quillbot from '../logos/quillbot.webp';
import jenni from '../logos/jenni.png';
import llamaIndex from '../logos/llamaIndex.png';
import octane from '../logos/octane.png';
import quickchatAI from '../logos/quickchatAI.png';
import quizgecko from '../logos/quizgecko.png';
import quotifyAI from '../logos/quotifyAI.png';

const imageMap = {
    'vertexAI.webp': vertexAI,
    'codey.png': codey,
    'sageMaker.png': sageMaker,
    'visionAI.png': visionAI,
    'amazonRekognition.png': amazonRekognition,
    'googleGemini.png': googleGemini,
    'textToSpeech.png': textToSpeech,
    'amazonLex.png': amazonLex,
    'krisp.png': krisp,
    'suno.png': suno,
    'musicGen.png': musicGen,
    'videoAI.png': videoAI,
    'amazonPolly.png': amazonPolly,
    'synesthesia.png': synesthesia,
    'azureKinect.png': azureKinect,
    'palM2.png': palM2,
    'chirp.webp': chirp,
    'autoML.png': autoML,
    'naturalLanguage.png': naturalLanguage,
    'speechToText.png': speechToText,
    'translationAI.png': translationAI,
    'dialogflow.png': dialogflow,
    'amazonComprehend.png': amazonComprehend,
    'amazonKendra.png': amazonKendra,
    'amazonTextract.png': amazonTextract,
    'amazonBedrock.png': amazonBedrock,
    'amazonCodewhisperer.png': amazonCodewhisperer,
    'azureAIDocIntelligence.png': azureAIDocIntelligence,
    'azureMachineLearning.png': azureMachineLearning,
    'azureCognitiveSearch.webp': azureCognitiveSearch,
    'azureBotService.png': azureBotService,
    'azureDatabricks.png': azureDatabricks,
    'azureOpenAI.png': azureOpenAI,
    'quillbot.webp': quillbot,
    'jenni.png': jenni,
    'llamaIndex.png': llamaIndex,
    'octane.png': octane,
    'quickchatAI.png': quickchatAI,
    'quizgecko.png': quizgecko,
    'quotifyAI.png': quotifyAI
};

function PieChart({ data, backendData }) {
    const ref = useRef();
    const tooltipRef = useRef();
  
    useEffect(() => {
      if (!data) return;
  
      const width = 928;
      const height = width;
      const radius = width / 2.5;
  
      const svg = d3.select(ref.current)
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .style("font", "10px sans-serif");
  
      svg.selectAll("*").remove();
  
      const hierarchy = d3.hierarchy(data)
        .sum(d => d.value)
        .sort((a, b) => b.value - a.value);
  
      const partition = d3.partition()
        .size([2 * Math.PI, radius]);
  
      const root = partition(hierarchy);
  
      const arc = d3.arc()
        .startAngle(d => d.x0)
        .endAngle(d => d.x1)
        .innerRadius(d => radius / 5)
        .outerRadius(d => radius);
  
      svg.append("g")
        .selectAll("path")
        .data(root.descendants().slice(1))
        .join("path")
        .attr("d", arc)
        .attr("fill", d => "#203459")
        .attr("stroke", "#991212")
        .attr("stroke-width", 2);
  
      const placedImages = [];
  
      root.descendants().slice(1).forEach(d => {
        const angleMargin = 0.2; // Prevents touching the lines
        const startAngle = d.x0 + angleMargin;
        const endAngle = d.x1 - angleMargin;
        const innerRadius = radius / 5 + 40; // Buffer for inner radius
        const outerRadius = radius - 70; // Buffer for outer radius
  
        d.data.images.forEach(img => {
          let attempts = 20;
          let placed = false;
  
          while (!placed && attempts > 0) {
            const randomAngle = Math.random() * (endAngle - startAngle) + startAngle;
            const randomRadius = Math.random() * (outerRadius - innerRadius) + innerRadius;
            const imageSize = Math.min(25, (outerRadius - innerRadius) / 3);
            const x = randomRadius * Math.sin(randomAngle);
            const y = -randomRadius * Math.cos(randomAngle);
  
            // Check for collisions
            const collision = placedImages.some(p => {
              return Math.sqrt((p.x - x) ** 2 + (p.y - y) ** 2) < p.size + imageSize;
            });
  
            if (!collision) {
              placedImages.push({ x, y, size: imageSize });
              const imageElement = svg.append("image")
                .attr("xlink:href", imageMap[img])
                .attr("x", x - imageSize / 2)
                .attr("y", y - imageSize / 2)
                .attr("width", imageSize+30)
                .attr("height", imageSize+30);
  
              // Adding tooltip functionality based on backendData
              imageElement.on("mouseenter", function(event) {
                const matchingData = backendData.find(item => item.toolName.replace(/\s/g, '').toLowerCase() === img.replace('.webp', '').replace('.png', '').toLowerCase());
                const tooltipHtml = matchingData ?
                  `<strong>${matchingData.toolName}</strong><br>${matchingData.toolDescription}` :
                  `No detailed data available for ${img}`;
  
                d3.select(tooltipRef.current)
                  .style("left", `${event.pageX + 10}px`)
                  .style("top", `${event.pageY + 10}px`)
                  .style("visibility", "visible")
                  .html(tooltipHtml);
              }).on("mouseleave", function() {
                d3.select(tooltipRef.current)
                  .style("visibility", "hidden");
              });
  
              placed = true;
            }
  
            attempts--;
          }
        });
      });
    }, [data, backendData]);
  
    return (
      <>
        <svg ref={ref} style={{ width: '100%', height: 'auto', maxWidth: '928px' }} />
        <div ref={tooltipRef} className="tooltip" style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', backgroundColor: 'white', border: '1px solid black', padding: '5px', zIndex: 10 }} />
      </>
    );
  }
  
  export default PieChart;