import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import vertexAI from '../logos/vertexAI.webp';
import codey from '../logos/codey.png';
import sageMaker from '../logos/sageMaker.png';
import visionAI from '../logos/visionAI.png';
import amazonRekognition from '../logos/amazonRekognition.png';
import googleGemini from '../logos/googleGemini.webp';
import textToSpeech from '../logos/textToSpeech.png';
import krisp from '../logos/krisp.png';
import suno from '../logos/suno.png';
import musicGen from '../logos/musicGen.png';
import videoAI from '../logos/videoAI.png';
import amazonPolly from '../logos/amazonPolly.png';
import synesthesia from '../logos/synesthesia.png';
import azureKinect from '../logos/azureKinect.png';

const imageMap = {
    'vertexAI.webp': vertexAI,
    'codey.png': codey,
    'sageMaker.png': sageMaker,
    'visionAI.png': visionAI,
    'amazonRekognition.png': amazonRekognition,
    'googleGemini.png': googleGemini,
    'textToSpeech.png': textToSpeech,
    'krisp.png': krisp,
    'suno.png': suno,
    'musicGen.png': musicGen,
    'videoAI.png': videoAI,
    'amazonPolly.png': amazonPolly,
    'synesthesia.png': synesthesia,
    'azureKinect.png': azureKinect
};

function PieChart({ data, backendData }) {
    const ref = useRef();
    const tooltipRef = useRef();
  
    useEffect(() => {
      if (!data) return;
  
      const width = 928;
      const height = width;
      const radius = width / 6;
  
      const svg = d3.select(ref.current)
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .style("font", "10px sans-serif");
  
      svg.selectAll("*").remove();
  
      const hierarchy = d3.hierarchy(data)
        .sum(d => d.value)
        .sort((a, b) => b.value - a.value);
  
      const partition = d3.partition()
        .size([2 * Math.PI, hierarchy.height + 1]);
  
      const root = partition(hierarchy);
  
      const arc = d3.arc()
        .startAngle(d => d.x0)
        .endAngle(d => d.x1)
        .innerRadius(d => d.y0 * radius)
        .outerRadius(d => d.y1 * radius)
        .padAngle(0.0); // This creates a small gap between sections
  
      svg.append("g")
        .selectAll("path")
        .data(root.descendants().slice(1))
        .join("path")
        .attr("d", arc)
        .attr("fill", "#203459") // Dark blue-grey color for the sections
        .attr("stroke", "#991212") // Black borders around each section
        .attr("stroke-width", 2) // Width of the border
        .style("stroke-linejoin", "round") // Smooths the corners of the stroke
        .attr("fill-opacity", 0.85);
  
      // Tooltip logic using backendData
      root.descendants().slice(1).forEach(d => {
        const arcHeight = (d.y1 - d.y0) * radius; // Calculate the height of the segment
        let imageSize = Math.min(60, arcHeight / 2); // Determine the size of the image, but not larger than 60px
        const centroid = arc.centroid(d);
      
        d.data.images.forEach((img, index) => {
          const totalHeight = d.data.images.length * imageSize;
          let imageYPosition = centroid[1] - totalHeight / 2 + index * imageSize;
          const imageElement = svg.append("image")
          .attr("xlink:href", imageMap[img])
          .attr("x", centroid[0] - imageSize / 2)
          .attr("y", imageYPosition)
          .attr("width", imageSize+40)
          .attr("height", imageSize+40);
    
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