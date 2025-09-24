"use client";

import ButtonCard from "@/component/common/button";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
const HomeHero = () => {
  return (
    <div className="relative min-h-[50vh]  md:py-0 sm:py-4 py-8 md:min-h-[60vh] lg:h-[84vh] w-full overflow-hidden flex justify-center items-center">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a3f847c] to-[#0a3f8483] z-10"></div>

      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
        <track
          kind="captions"
          src="/home-hero.vtt"
          srcLang="en"
          label="English"
          default
        />
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="sm:text-2xl text-xl md:text-4xl font-bold text-white sm:mb-4 mb-2"
          >
            BECOME A DIGITAL MARKETING EXPERT
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-100 md:my-8 sm:my-3 my-2 text-sm sm:text-[16px] "
          >
            Ready to take your Digital Marketing to the next level? Discover our
            cutting-edge training programs and dominate from Zero to Hero.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-xl"
          >
            <TypeAnimation
              sequence={[
                "Web Development",
                1000,
                "Mobile App Development",
                1000,
                "Software Development",
                1000,
                "eCommerce Development",
                1000,
              ]}
              speed={50}
              className="text-white md:text-6xl  sm:text-3xl text-xl font-semibold"
              repeat={Infinity}
              cursor={false}
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <ButtonCard title="Get Started" link="/contact" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
