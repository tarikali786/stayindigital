"use client";

import ButtonCard from "@/component/common/button";
import { motion } from "framer-motion";
const HomeHero = () => {
  return (
    <div className="relative min-h-[50vh] hero-section md:min-h-[60vh] lg:h-[84vh] w-full overflow-hidden flex justify-center items-center">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a3f847c] to-[#0a3f8483] z-10"></div>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="z-30 px-2 md:absolute md:left-10 left-4 lg:left-[48%] lg:-mt-16 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="sm:text-3xl text-2xl md:text-4xl font-bold text-white mb-4"
          >
            BECOME A DIGITAL MARKETING EXPERT
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-100 my-8 "
          >
            Ready to take your Digital Marketing to the next level?
            <br />
            Discover our cutting-edge training programs and dominate from Zero
            to Hero.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <ButtonCard title="Get Started" />

            <button className="border-white rounded-md border px-4 py-2 cursor-pointer text-white hover:bg-white/10">
              How It Works
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="md:absolute border-t-1 border-white/80 pt-10 hidden bottom-2 lg:bottom-10 left-1/2 transform -translate-x-1/2 md:flex gap-6 z-40 ">
        {["DIGITAL MARKETING", "IT SERVICES", "VFX", "E-COMMERCE"].map(
          (item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
              className="border-2 border-white flex items-center justify-center  text-white  font-semibold px-6 py-4 min-w-44 max-w-52 text-center rounded-lg bg-black/60 backdrop-blur-md shadow-lg hover:bg-white hover:text-black transition"
            >
              {item}
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default HomeHero;
