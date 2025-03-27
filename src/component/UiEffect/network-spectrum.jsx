"use client";

import { useEffect, useRef, useState } from "react";

export default function SpectralBackground() {
  const canvasRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const glowIntensityRef = useRef(0); // Current glow intensity
  const targetGlowRef = useRef(0); // Target glow intensity
  const glowDirectionRef = useRef(1); // 1 for increasing, -1 for decreasing
  const rotationRef = useRef(0);
  const animationFrameRef = useRef(0);
  const lastScrollTimeRef = useRef(0);

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

    // Increase node count for a denser network
    const nodeCount = Math.min(
      Math.max(40, Math.floor(window.innerWidth / 40)),
      80
    );
    const nodes = [];

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Make the network more vertical by adjusting the distribution
    const networkWidth = Math.min(canvas.width * 0.5, 600);
    const networkHeight = Math.min(canvas.height * 0.8, 800);
    const networkDepth = 300; // Depth for 3D effect

    const createGradientColor = (index) => {
      const ratio = index / nodeCount;

      // Colors from the image: blue -> purple -> pink
      if (ratio < 0.5) {
        // Blue to purple transition (first half)
        const r = Math.floor(30 + (110 - 30) * (ratio * 2));
        const g = Math.floor(144 + (73 - 144) * (ratio * 2));
        const b = Math.floor(255 + (200 - 255) * (ratio * 2));
        return `rgb(${r}, ${g}, ${b})`;
      } else {
        // Purple to pink transition (second half)
        const adjustedRatio = (ratio - 0.5) * 2;
        const r = Math.floor(110 + (190 - 110) * adjustedRatio);
        const g = Math.floor(73 + (60 - 73) * adjustedRatio);
        const b = Math.floor(200 + (180 - 200) * adjustedRatio);
        return `rgb(${r}, ${g}, ${b})`;
      }
    };

    // Use a seeded random for consistent initial layout
    const randomSeed = (seed) => {
      let value = seed % 2147483647;
      if (value <= 0) value += 2147483646;
      return () => (value = (value * 16807) % 2147483647) / 2147483647;
    };

    const seededRandom = randomSeed(12345);

    // Create nodes in a vertical elliptical pattern
    for (let i = 0; i < nodeCount; i++) {
      // Position nodes in a vertical elliptical pattern
      const angle = (i / nodeCount) * Math.PI * 2;

      // Make y-axis taller than x-axis for vertical orientation
      const x =
        Math.cos(angle) * (networkWidth / 2) * (0.3 + seededRandom() * 0.7);
      const y =
        Math.sin(angle) * (networkHeight / 2) * (0.3 + seededRandom() * 0.7);

      // Add z-coordinate for 3D rotation
      const z = (seededRandom() * 2 - 1) * networkDepth;

      // Ensure minimum radius is large enough to prevent gradient issues
      const radius = 3 + seededRandom() * 7;
      const color = createGradientColor(i);

      nodes.push({
        x: centerX + x,
        y: centerY + y,
        z,
        initialX: x,
        initialY: y,
        initialZ: z,
        radius,
        color,
        connections: [],
      });
    }

    // Create connections between nodes
    for (let i = 0; i < nodes.length; i++) {
      const connectionCount = 2 + Math.floor(seededRandom() * 3);
      const potentialConnections = [...Array(nodes.length).keys()]
        .filter((j) => j !== i)
        .map((j) => ({
          index: j,
          distance: Math.sqrt(
            Math.pow(nodes[i].x - nodes[j].x, 2) +
              Math.pow(nodes[i].y - nodes[j].y, 2) +
              Math.pow(nodes[i].z - nodes[j].z, 2)
          ),
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, connectionCount)
        .map((conn) => conn.index);

      nodes[i].connections = potentialConnections;
    }

    // Handle scroll events to trigger glow effect
    const handleScroll = () => {
      setIsScrolling(true);
      lastScrollTimeRef.current = Date.now();
    };

    window.addEventListener("scroll", handleScroll);

    // Animation function for 3D rotation and rendering
    const animate = () => {
      // Check if scrolling has stopped
      const currentTime = Date.now();
      if (isScrolling && currentTime - lastScrollTimeRef.current > 500) {
        setIsScrolling(false);
        glowIntensityRef.current = 0; // Stop glow effect suddenly
      }

      // Gradually adjust glow intensity when scrolling
      if (isScrolling) {
        if (glowDirectionRef.current === 1) {
          // Increase glow intensity
          glowIntensityRef.current = Math.min(
            glowIntensityRef.current + 0.02,
            1
          );
          if (glowIntensityRef.current >= 1) {
            glowDirectionRef.current = -1; // Start decreasing after reaching max
          }
        } else {
          // Decrease glow intensity
          glowIntensityRef.current = Math.max(
            glowIntensityRef.current - 0.02,
            0
          );
          if (glowIntensityRef.current <= 0) {
            glowDirectionRef.current = 1; // Restart glow effect
          }
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Increment rotation angle (slow continuous rotation)
      rotationRef.current += 0.002;

      // Apply 3D rotation to all nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Apply rotation around Y axis (horizontal rotation)
        const cosY = Math.cos(rotationRef.current);
        const sinY = Math.sin(rotationRef.current);

        // 3D rotation formulas
        const rotatedX = node.initialX * cosY + node.initialZ * sinY;
        const rotatedZ = -node.initialX * sinY + node.initialZ * cosY;

        // Update node position with rotation
        node.x = centerX + rotatedX;
        node.z = rotatedZ;

        // Perspective projection (nodes further away appear smaller)
        const scale = Math.max(0.2, 1000 / (1000 + node.z));
        const projectedX = centerX + (node.x - centerX) * scale;
        const projectedY = centerY + node.initialY * scale;

        // Store projected coordinates for rendering
        node.x = projectedX;
        node.y = projectedY;
      }

      // Sort nodes by z-coordinate for proper depth rendering
      const sortedNodes = [...nodes].sort((a, b) => a.z - b.z);

      // Draw connections
      for (const node of sortedNodes) {
        for (const connectionIndex of node.connections) {
          const connectedNode = nodes[connectionIndex];

          // Skip connections that would cross too much of the z-space
          if (Math.abs(node.z - connectedNode.z) > networkDepth * 0.7) continue;

          // Calculate opacity based on z-position and glow
          const zFactor = Math.min(
            1,
            (node.z + networkDepth) / (networkDepth * 2)
          );
          const opacity = Math.max(
            0.05,
            zFactor * (0.2 + glowIntensityRef.current * 0.6)
          );

          // Draw connection line
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);

          // Create gradient for the line
          const gradient = ctx.createLinearGradient(
            node.x,
            node.y,
            connectedNode.x,
            connectedNode.y
          );
          gradient.addColorStop(0, node.color);
          gradient.addColorStop(1, connectedNode.color);

          ctx.strokeStyle = gradient;
          ctx.globalAlpha = opacity;
          ctx.lineWidth = 1 + glowIntensityRef.current * 0.5;
          ctx.stroke();
        }
      }

      // Draw nodes with glow effect
      for (const node of sortedNodes) {
        // Calculate node size based on z-position (perspective)
        const perspectiveScale = Math.max(0.2, 1000 / (1000 + node.z));
        const scaledRadius = Math.max(1, node.radius * perspectiveScale);

        // Calculate opacity based on z-position
        const zFactor = Math.min(
          1,
          (node.z + networkDepth) / (networkDepth * 2)
        );

        // Draw glow effect
        if (glowIntensityRef.current > 0) {
          const glowRadius = Math.max(
            2,
            scaledRadius * (3 + glowIntensityRef.current * 2)
          );
          const glowOpacity = zFactor * glowIntensityRef.current * 0.7;

          try {
            const glow = ctx.createRadialGradient(
              node.x,
              node.y,
              0.5, // Minimum inner radius of 0.5
              node.x,
              node.y,
              glowRadius
            );
            glow.addColorStop(0, node.color);
            glow.addColorStop(1, "rgba(0,0,0,0)");

            ctx.beginPath();
            ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
            ctx.fillStyle = glow;
            ctx.globalAlpha = glowOpacity;
            ctx.fill();
          } catch (error) {
            // Fallback if gradient creation fails
            ctx.beginPath();
            ctx.arc(node.x, node.y, scaledRadius * 3, 0, Math.PI * 2);
            ctx.fillStyle = node.color + "40"; // 25% opacity
            ctx.globalAlpha = glowOpacity;
            ctx.fill();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, scaledRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = zFactor * (0.7 + glowIntensityRef.current * 0.3);
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      // Continue animation
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isScrolling]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-[#100922]" />
  );
}
