"use client";

import { useEffect, useRef, useState } from "react";

export default function CylindricalSpectrum() {
  const canvasRef = useRef(null);
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const nodeCount = 50;
    const radius = Math.min(canvas.width, canvas.height) * 0.4;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const nodes = [];

    // Generate colors across a spectrum
    const colors = ["#37B6FF", "#8F78FF", "#FF20E0", "#FF9900", "#00FF99"];

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      nodes.push({ x, y, color: colors[i % colors.length] });
    }

    let rotation = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      ctx.translate(-centerX, -centerY);

      // Draw connections
      ctx.globalAlpha = 0.2;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j += Math.floor(Math.random() * 3 + 1)) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = nodes[i].color;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Draw nodes with glow effect
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        if (scrollCount > 0) {
          ctx.save();
          ctx.globalAlpha = Math.min(0.04 + scrollCount * 0.02, 0.8);
          ctx.beginPath();
          ctx.arc(node.x, node.y, 8 + scrollCount * 2, 0, Math.PI * 2);
          ctx.fillStyle = node.color;
          ctx.fill();
          ctx.restore();
        }
      }

      ctx.restore();
      rotation += 0.002;
      requestAnimationFrame(animate);
    };
    animate();

    const handleScroll = () => {
      setScrollCount((prev) => (prev < 20 ? prev + 1 : 4)); // Loop back after 20
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollCount]);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-black" />;
}
