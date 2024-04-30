import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import VertexAI from '../logos/VertexAI.webp';
import Codey from '../logos/codey.png';
import sageMaker from '../logos/sageMaker.png';

const imageMap = {
  'VertexAI.webp': VertexAI,
  'codey.png': Codey,
  'sageMaker.png': sageMaker
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
      .padAngle(0.01); // This creates a small gap between sections

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
      const centroid = arc.centroid(d);
      d.data.images.forEach((img, index) => {
        const imageElement = svg.append("image")
      .attr("xlink:href", imageMap[img])  // Directly use `img` which should contain the full filename.
      .attr("x", centroid[0] - 20)
      .attr("y", centroid[1] + index * 45 - 20)
      .attr("width", 40)
      .attr("height", 40);


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
  }, [data, backendData]); // Dependency on backendData ensures re-render when data is fetched

  return (
    <>
      <svg ref={ref} style={{ width: '100%', height: 'auto', maxWidth: '928px' }} />
      <div ref={tooltipRef} className="tooltip" style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', backgroundColor: 'white', border: '1px solid black', padding: '5px', zIndex: 10 }} />
    </>
  );
}
            
export default PieChart;