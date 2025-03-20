"use client";

import { useEffect, useState, useRef } from "react";

export default function WaterBubbleEffect() {
  const [bubbleExists, setBubbleExists] = useState(true); // Start with bubble existing
  const [bubbleSize, setBubbleSize] = useState(100);
  const [bubblePosition, setBubblePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [isPopping, setIsPopping] = useState(false);
  const nextIdRef = useRef(1);

  // Initialize bubble position on page load
  useEffect(() => {
    // Set initial position to center of screen
    setBubblePosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
  }, []);

  // Handle click to pop or create bubble
  const handleClick = () => {
    if (bubbleExists) {
      // Pop the bubble
      setIsPopping(true);

      // Create particles
      const newParticles = [];
      const particleCount = Math.floor(bubbleSize / 10);

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1 + Math.random() * 3;
        newParticles.push({
          id: nextIdRef.current++,
          x: bubblePosition.x,
          y: bubblePosition.y,
          size: 3 + Math.random() * 7,
          speedX: Math.cos(angle) * speed,
          speedY: Math.sin(angle) * speed,
          opacity: 1,
        });
      }

      setParticles((prev) => [...prev, ...newParticles]);

      // Remove the bubble after animation
      setTimeout(() => {
        setBubbleExists(false);
        setIsPopping(false);
      }, 300);
    } else {
      // Create a new bubble at click position
      setBubbleExists(true);
      setBubbleSize(100); // Reset to initial size
    }
  };

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (bubbleExists && !isPopping) {
        setBubblePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [bubbleExists, isPopping]);

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update bubble size based on scroll
  useEffect(() => {
    if (bubbleExists && !isPopping) {
      const scrollFactor = 1 + scrollY / 500;
      const newSize = Math.min(100 * scrollFactor, 400); // Max size 1000px
      setBubbleSize(newSize);
    }
  }, [scrollY, bubbleExists, isPopping]);

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return;

    const animateParticles = () => {
      setParticles(
        (prev) =>
          prev
            .map((particle) => ({
              ...particle,
              x: particle.x + particle.speedX,
              y: particle.y + particle.speedY,
              speedY: particle.speedY + 0.1, // Gravity
              opacity: particle.opacity - 0.02,
            }))
            .filter((particle) => particle.opacity > 0) // Remove faded particles
      );
    };

    const animationId = requestAnimationFrame(animateParticles);
    return () => cancelAnimationFrame(animationId);
  }, [particles]);

  // Generate random border radius for organic bubble shape
  const getBubbleShape = () => {
    // Create an organic, non-circular shape with varying border-radius values
    const tl = 40 + Math.random() * 30;
    const tr = 40 + Math.random() * 30;
    const br = 40 + Math.random() * 30;
    const bl = 40 + Math.random() * 30;

    return `${tl}% ${tr}% ${br}% ${bl}%`;
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none z-10"
      onClick={handleClick}
      style={{ pointerEvents: "all" }}
    >
      {/* Render bubble */}
      {bubbleExists && (
        <div
          className={`absolute transition-transform duration-300 ${
            isPopping ? "scale-0 opacity-0" : ""
          }`}
          style={{
            left: bubblePosition.x - bubbleSize / 2,
            top: bubblePosition.y - bubbleSize / 2,
            width: bubbleSize,
            height: bubbleSize,
            borderRadius: getBubbleShape(),
            background:
              "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.5), rgba(173, 216, 230, 0.4))",
            boxShadow:
              "inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 15px rgba(0, 150, 255, 0.3)",
            transform: `scale(${isPopping ? 0 : 1})`,
            transition:
              "width 0.3s, height 0.3s, left 0.3s, top 0.3s, transform 0.3s, opacity 0.3s",
          }}
        >
          {/* Bubble highlight/reflection */}
          <div
            className="absolute rounded-full bg-white/0"
            style={{
              width: "30%",
              height: "20%",
              left: "20%",
              top: "20%",
              transform: "rotate(-45deg)",
            }}
          />
        </div>
      )}

      {/* Render particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(173, 216, 230, 0.6))",
            boxShadow: "0 0 3px rgba(255, 255, 255, 0.8)",
          }}
        />
      ))}
    </div>
  );
}
