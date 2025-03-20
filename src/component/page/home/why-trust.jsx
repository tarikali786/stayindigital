"use client";

import { motion } from "framer-motion";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Img1 from "../../../../public/5 I.jpg";
import ImageComponent from "@/component/common/ImageComponent";

const WhyTrust = () => {
  return (
    <section className="py-16 mt-16 common-padding bg-black text-white relative   overflow-hidden w-full ">
      <div className="   text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl  md:text-3xl font-semibold text-primary"
        >
          Why Trust Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mt-3 "
        >
          Results-Driven Digital Solutions – Elevate Your Brand with Expert
          Social Media, SEO, Web Design & More.
        </motion.p>
      </div>

      <div className="   mt-16  flex flex-col md:flex-row   gap-8">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative md:w-1/2"
        >
          <ImageComponent src={Img1} alt="Trust Image" />
        </motion.div>

        {/* Bullet Points */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=" space-y-4 md:w-1/2 "
        >
          <li className="flex items-center gap-2">
            <TaskAltIcon className="text-primary" /> Only 15 students per batch
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <TaskAltIcon className="text-primary" /> Flexible classing
          </li>
          <li className="flex items-center gap-2">
            <TaskAltIcon className="text-primary" /> Learn in your comfortable
            language
          </li>
          <li className="flex items-center gap-2">
            <TaskAltIcon className="text-primary" /> Re-Schedule Class available
            for any reason
          </li>
        </motion.ul>
      </div>

      {/* Floating Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="  md:absolute md:bottom-0 md:left-[45%] bg-white text-black p-8  md:mt-0 mt-6 rounded-lg shadow-lg md:max-w-lg"
      >
        <p className="">
          Why trust us? Because we don’t just market—we create impact. From
          Social Media and Content Marketing to SEO, Website Development, Email
          Campaigns, and Graphic Design, we craft strategies that drive real
          results. Partner with us and let’s build something extraordinary!
        </p>
      </motion.div>
    </section>
  );
};

export default WhyTrust;
