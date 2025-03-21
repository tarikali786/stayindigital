"use client";

import { useEffect, useRef, useState } from "react";

export default function HorizontalSpectrumStarGlow() {
  const canvasRef = useRef(null);

  // This state toggles the glow on/off
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 1) INITIAL CANVAS SETUP
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 2) CREATE A FIXED NETWORK OF NODES (shape doesn't change later)
    const nodeCount = 30;
    const nodes = [];

    // Horizontal distribution: from 10% to 90% of screen width
    const leftMargin = 0.1 * window.innerWidth;
    const rightMargin = 0.9 * window.innerWidth;
    // Vertical center + random band for variation
    const verticalCenter = window.innerHeight / 2;
    const verticalBand = 0.4 * window.innerHeight; // Adjust to make it taller/shorter

    // Simple color interpolation from blue -> purple -> pink
    function interpolateColor(ratio) {
      // clamp ratio
      ratio = Math.max(0, Math.min(ratio, 1));

      const leftColor = [55, 182, 255]; // #37B6FF
      const midColor = [143, 120, 255]; // #8F78FF
      const rightColor = [255, 32, 224]; // #FF20E0

      if (ratio < 0.5) {
        const localRatio = ratio / 0.5;
        const r = leftColor[0] + (midColor[0] - leftColor[0]) * localRatio;
        const g = leftColor[1] + (midColor[1] - leftColor[1]) * localRatio;
        const b = leftColor[2] + (midColor[2] - leftColor[2]) * localRatio;
        return `rgb(${r}, ${g}, ${b})`;
      } else {
        const localRatio = (ratio - 0.5) / 0.5;
        const r = midColor[0] + (rightColor[0] - midColor[0]) * localRatio;
        const g = midColor[1] + (rightColor[1] - midColor[1]) * localRatio;
        const b = midColor[2] + (rightColor[2] - midColor[2]) * localRatio;
        return `rgb(${r}, ${g}, ${b})`;
      }
    }

    // Generate nodes in a horizontal line
    for (let i = 0; i < nodeCount; i++) {
      const ratio = i / (nodeCount - 1);
      // X from left to right
      const x = leftMargin + ratio * (rightMargin - leftMargin);
      // Y is random around center
      const yOffset = (Math.random() - 0.5) * verticalBand;
      const y = verticalCenter + yOffset;

      const radius = 3 + Math.random() * 5;
      const color = interpolateColor(ratio);

      nodes.push({
        x,
        y,
        radius,
        color,
        connections: [],
      });
    }

    // Connect each node to a few neighbors
    const maxConnections = 3;
    for (let i = 0; i < nodeCount; i++) {
      const node = nodes[i];
      // Forward neighbors
      let possibleIndices = [];
      for (let offset = 1; offset <= 4; offset++) {
        const neighborIndex = i + offset;
        if (neighborIndex < nodeCount) {
          possibleIndices.push(neighborIndex);
        }
      }
      // Shuffle, pick a few
      possibleIndices.sort(() => Math.random() - 0.5);
      possibleIndices = possibleIndices.slice(0, maxConnections);

      // Back neighbors
      let behindIndices = [];
      for (let offset = 1; offset <= 2; offset++) {
        const neighborIndex = i - offset;
        if (neighborIndex >= 0) {
          behindIndices.push(neighborIndex);
        }
      }

      node.connections = [...possibleIndices, ...behindIndices];
    }

    // 3) SCROLL HANDLER: ONLY CHANGES GLOW STATE, NOTHING ELSE
    let scrollTimeout;
    function handleScroll() {
      setIsScrolling(true);

      // If no scroll for 300ms, we consider scrolling finished
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 300);
    }
    window.addEventListener("scroll", handleScroll);

    // 4) ANIMATION LOOP
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // a) Draw connections
      for (const node of nodes) {
        for (const connectionIndex of node.connections) {
          const connectedNode = nodes[connectionIndex];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);

          // Gradient line from node color to connectedNode color
          const gradient = ctx.createLinearGradient(
            node.x,
            node.y,
            connectedNode.x,
            connectedNode.y
          );
          gradient.addColorStop(0, node.color);
          gradient.addColorStop(1, connectedNode.color);

          ctx.strokeStyle = gradient;
          // Only brighter if user is currently scrolling
          ctx.globalAlpha = isScrolling ? 0.7 : 0.3;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      // b) Draw nodes
      for (const node of nodes) {
        // Base circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, 2 * Math.PI);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 1;
        ctx.fill();

        // Extra glow only while scrolling
        if (isScrolling) {
          // Outer ring
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.5, 0, 2 * Math.PI);
          ctx.fillStyle = node.color;
          ctx.globalAlpha = 0.4;
          ctx.fill();

          // Star glow
          ctx.save();
          ctx.globalCompositeOperation = "lighter";
          ctx.beginPath();

          const glowRadius = node.radius * 6;
          const starGlow = ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            glowRadius
          );
          starGlow.addColorStop(0, "rgba(255,255,255,0.8)");
          starGlow.addColorStop(0.2, node.color);
          starGlow.addColorStop(1, "rgba(255,255,255,0)");

          ctx.fillStyle = starGlow;
          ctx.globalAlpha = 0.6;
          ctx.arc(node.x, node.y, glowRadius, 0, 2 * Math.PI);
          ctx.fill();
          ctx.restore();
        }
      }

      requestAnimationFrame(animate);
    }
    animate();

    // 5) CLEANUP
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isScrolling]);

  // Canvas always the same shape, only glow toggles
  return (
    <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-[#07040f]" />
  );
}
