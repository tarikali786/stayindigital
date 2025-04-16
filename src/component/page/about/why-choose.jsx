"use client";
import React from "react";
import { motion } from "framer-motion";
const items = [
  {
    cardTitle: "Customized Solutions",
    cardDetailedText:
      "We tailor our strategies to meet your specific business goals and needs.",
  },
  {
    cardTitle: "Expert Team",
    cardDetailedText:
      "Our professionals have extensive experience and expertise in various aspects of digital marketing.",
  },
  {
    cardTitle: "Layout Option",
    cardDetailedText:
      "We focus on delivering measurable results and ensuring your marketing efforts translate into real growth.",
  },
  {
    cardTitle: "Transparent Reporting",
    cardDetailedText:
      "Receive regular updates and detailed reports on your campaigns’ performance.",
  },
  {
    cardTitle: "Client-Centric Approach",
    cardDetailedText:
      "We prioritize your needs and work collaboratively to achieve your business objectives.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhyChoose = () => {
  return (
    <div className="w-full py-16 flex justify-center items-center">
      <div className="max-w-4xl w-full px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#716af2]">
          Why Choose Stay In Digital?
        </h3>

        <motion.div
          className="relative border-l-4 border-[#716af2] pl-6 space-y-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              {/* Dot */}
              <span className="absolute -left-3.5 top-1/2 h-2  bg-[#716af2] rounded-full border-4 border-white shadow-md"></span>

              {/* Card Content */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.cardTitle}
                </h4>
                <p className="text-sm text-gray-600">{item.cardDetailedText}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChoose;
