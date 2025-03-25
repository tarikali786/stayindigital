"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Backendtechnologies,
  DatabaseTechnology,
  PlateFormTechnology,
  Webtechnologies,
} from "@/data/data";

const Technology = () => {
  return (
    <section className="text-center py-12 common-padding ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="sm:text-4xl text-2xl text-primary font-bold">
          Technology Expertise
        </h2>
        <p className="md:text-[16px] text-sm  my-3 text-white/60">
          It thrills us to deliver the trendy solutions using the latest tech.
        </p>
      </motion.div>

      <div className="pt-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="sm:text-3xl text-xl text-white font-bold">Web Front-End</h2>
        </motion.div>
        <div className="flex justify-center sm:gap-16 gap-8 flex-wrap">
          {Webtechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="  "
            >
              <div className="sm:size-26 size-20 sm:p-4 p-3 bg-gray-200 mb-3  rounded-3xl shadow-2xl flex  justify-center items-center">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <p className="text-lg  text-white/80">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="sm:pt-22 pt-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="sm:text-3xl text-xl text-white font-bold">Back-End</h2>
        </motion.div>
        <div className="flex justify-center sm:gap-16 gap-8 flex-wrap">
          {Backendtechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="  "
            >
              <div className="sm:size-26 size-20 sm:p-4 p-3 bg-gray-200 mb-3  rounded-3xl shadow-2xl flex  justify-center items-center">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <p className="text-lg  text-white/80">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center md:gap-22 sm:gap-16 gap-10  sm:pt-22 pt-16 flex-wrap">
        {PlateFormTechnology.map((group, groupIndex) => (
          <div key={group.category} className="text-center">
            <h3 className="sm:text-3xl text-xl font-bold text-white mb-8">
              {group.category}
            </h3>
            <div className="flex sm:gap-16 gap-8 justify-center flex-wrap">
              {group.techs.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="  "
                >
                  <div className="sm:size-26 size-20 sm:p-4 p-3 bg-gray-200 mb-3  rounded-3xl shadow-2xl flex  justify-center items-center">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                  <p className="text-lg text-white/80">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center md:gap-22 sm:gap-16 gap-10  sm:pt-22 pt-16 flex-wrap">
        {DatabaseTechnology.map((group, groupIndex) => (
          <div key={group.category} className="text-center">
            <h3 className="sm:text-3xl text-xl font-bold text-white mb-8">
              {group.category}
            </h3>
            <div className="flex  sm:gap-16 gap-8 justify-center flex-wrap">
              {group.techs.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="  "
                >
                  <div className="sm:size-26 size-20 sm:p-4 p-3 bg-gray-200 mb-3  rounded-3xl shadow-2xl flex  justify-center items-center">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={"100%"}
                      height={"100%"}
                      loading="lazy"
                    />
                  </div>
                  <p className="text-lg  text-white/80">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
