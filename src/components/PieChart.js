import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import VertexAI from '../logos/VertexAI.webp'; // Import image
import Codey from '../logos/codey.png'; // Import another image

function PieChart({ data }) {
  const ref = useRef();

  useEffect(() => {
    if (!data) return;

    const width = 928;
    const height = width;
    const radius = width / 6;

    // Use a blue color scale that interpolates based on node depth
    const color = d3.scaleSequential([0, 3], d3.interpolateBlues);

    const hierarchy = d3.hierarchy(data)
      .sum(d => d.value)
      .sort((a, b) => b.value - a.value);
    const root = d3.partition()
      .size([2 * Math.PI, hierarchy.height + 1])
      (hierarchy);

    root.each(d => d.current = d);

    const arc = d3.arc()
      .startAngle(d => d.x0)
      .endAngle(d => d.x1)
      .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
      .padRadius(radius * 1.5)
      .innerRadius(d => d.y0 * radius)
      .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1));

    const svg = d3.select(ref.current)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .style("font", "10px sans-serif");

    svg.selectAll("*").remove();

    const path = svg.append("g")
      .selectAll("path")
      .data(root.descendants().slice(1))
      .join("path")
        .attr("fill", d => color(d.depth))
        .attr("d", d => arc(d.current));

    // Append images to each arc section
    svg.append("g")
      .selectAll("image")
      .data(root.descendants().slice(1))
      .enter().append("image")
        .attr("xlink:href", d => {
          // Return the corresponding imported image based on the data
          switch(d.data.name) {
            case "Branch1":
              return VertexAI;
            case "Branch2":
              return VertexAI;
            case "Branch3":
              return Codey;
            default:
              return "";
          }
        })
        .attr("x", d => arc.centroid(d)[0] - 20) // Center the image on the arc
        .attr("y", d => arc.centroid(d)[1] - 20)
        .attr("width", 40)
        .attr("height", 40);

    path.filter(d => d.children)
        .style("cursor", "pointer")
        .on("click", clicked);

    function clicked(event, p) {
      event.stopPropagation();
      root.each(d => d.target = {
        x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
        x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
        y0: Math.max(0, d.y0 - p.depth),
        y1: Math.max(0, d.y1 - p.depth)
      });

      const t = svg.transition().duration(750);
      path.transition(t)
          .tween("data", d => {
            const i = d3.interpolate(d.current, d.target);
            return t => d.current = i(t);
          })
          .attrTween("d", d => () => arc(d.current));
    }

  }, [data]);

  return <svg ref={ref} style={{ width: '100%', height: 'auto', maxWidth: '928px' }} />;
}

export default PieChart;
