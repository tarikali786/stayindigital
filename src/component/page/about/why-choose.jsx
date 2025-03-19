"use client";
import React from "react";
import { Chrono } from "react-chrono";
import { motion } from "framer-motion";
import Img from "../../../../public/6 i.png";

const items = [
  {
    // title: "Step 1",
    cardTitle: "Customized Solutions",
    cardDetailedText:
      "We tailor our strategies to meet your specific business goals and needs.",
  },
  {
    // title: "Step 2",
    cardTitle: "Expert Team ",
    cardDetailedText:
      " Our professionals have extensive experience and expertisein various aspects of digital marketing.",
  },
  {
    // title: "Step 3",
    cardTitle: "Layout Option ",
    cardDetailedText:
      "We focus on delivering measurable results and ensuring yourmarketing efforts translate into real growth.",
  },
  {
    // title: "Step 4",
    cardTitle: "Transparent Reporting ",
    cardDetailedText:
      "Receive regular updates and detailed reports on yourcampaigns’ performance.",
  },
  {
    // title: "Step 5",
    cardTitle: "Client-Centric Approach",
    cardDetailedText:
      "We prioritize your needs and work collaboratively to achieveyour business objectives .",
  },
];

const WhyChoose = () => {
  return (
    <div className="w-full py-14 bg-global ">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col justify-center items-center text-center  px-6"
      >
        <h3 className="md:text-3xl mb-10  text-2xl font-bold my-3 text-[#716af2]">
          Why Choose ITechDigit?
        </h3>
      </motion.div>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        disableToolbar="true"
        cardHeight={"100"}
        borderLessCards={false}
        theme={{
          primary: "#007bff",
          secondary: "#f0f0f0",
          cardBgColor: "#ffffff",
          titleColor: "#000",
        }}
      />
    </div>
  );
};

export default WhyChoose;
