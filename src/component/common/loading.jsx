"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingRipple() {
  const [rotation, setRotation] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Create continuous rotation effect
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Outer rotating circles */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {[...Array(5)].map((_, index) => {
            const angle = (index * (360 / 5) + rotation) % 360;
            const x = 50 * Math.cos((angle * Math.PI) / 180);
            const y = 50 * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.div
                key={`outer-${index}`}
                className={`absolute rounded-full ${
                  index % 2 === 0 ? "bg-blue-500/70" : "bg-purple-500/70"
                }`}
                style={{
                  width: "16px",
                  height: "16px",
                  left: `calc(50% + ${x}px - 8px)`,
                  top: `calc(50% + ${y}px - 8px)`,
                  filter: "blur(0.5px)",
                }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.4,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </motion.div>

        {/* Ripple effect */}
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={`ripple-${index}`}
            className={`absolute rounded-full ${
              index % 2 === 0 ? "bg-blue-400/40" : "bg-purple-400/40"
            }`}
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{
              opacity: [0, 0.5, 0.2, 0],
              scale: [0.1, 0.5, 0.9, 1.2],
              rotate: [0, 90, 180, 270],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              times: [0, 0.3, 0.7, 1],
            }}
            style={{
              width: "120px",
              height: "120px",
              filter: "blur(1px)",
            }}
          />
        ))}

        {/* Inner rotating circles */}
        <motion.div
          className="absolute w-24 h-24"
          animate={{ rotate: -360 }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {[...Array(3)].map((_, index) => {
            const angle = (index * (360 / 3) + rotation * 2) % 360;
            const x = 20 * Math.cos((angle * Math.PI) / 180);
            const y = 20 * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.div
                key={`inner-${index}`}
                className={`absolute rounded-full ${
                  index % 2 === 0 ? "bg-purple-600/80" : "bg-blue-600/80"
                }`}
                style={{
                  width: "10px",
                  height: "10px",
                  left: `calc(50% + ${x}px - 5px)`,
                  top: `calc(50% + ${y}px - 5px)`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.5,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </motion.div>

        {/* Center element */}
        <div className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-md">
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"
            animate={{
              scale: [0.9, 1.05, 0.9],
              rotate: 360,
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
              rotate: {
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
