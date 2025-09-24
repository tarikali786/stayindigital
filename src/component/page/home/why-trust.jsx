"use client";

import { motion } from "framer-motion";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Img1 from "../../../../public/5I.webp";
import Image from "next/image";

const WhyTrust = () => {
  return (
    <section className="py-16 mt-16 common-padding  text-white relative    w-full ">
      <div className="   text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl  md:text-3xl font-semibold text-white"
        >
          Why Trust Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/90 max-w-2xl mx-auto mt-3 "
        >
          For us, it’s about making an impact, which is why people choose us.
        </motion.p>
      </div>

      <div className="   mt-16  flex flex-col md:flex-row   gap-8">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative md:w-1/2 h-[48vh]"
        >
          <Image
            src={Img1}
            alt="Trust Image"
            className="w-full h-full fill object-fill rounded-xl"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            loading="lazy"
          />
        </motion.div>

        {/* Bullet Points */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=" space-y-4 md:w-1/2 "
        >
          <li className="flex items-center gap-2">
            <TaskAltIcon className="text-primary" /> Proven Results: We
            implement strategies which include social media, SEO, web design,
            email marketing, and others which rely on your data and metrics to
            help your business grow.
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <TaskAltIcon className="text-primary" /> Custom Focused: We involve
            you because your aims are our objectives, hence we continually
            listen, adjust, inform and take you along every step of the journey.
          </li>
          <li className="flex items-center gap-2">
            <TaskAltIcon className="text-primary" /> Expert Team: You name it
            from developers, designers, marketers and copywriters, we have
            skilled people who are well coordinated and work to provide the best
            solutions possible.
          </li>
          <li className="flex items-center gap-2">
            <TaskAltIcon className="text-primary" />
            Flexible & Reliable: Need to change or adjust timelines or plans? We
            got it with no questions asked.
          </li>
        </motion.ul>
      </div>

      {/* Floating Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="  md:absolute md:-bottom-10 md:left-[45%] bg-white text-black p-8  md:mt-0 mt-6 rounded-lg shadow-lg md:max-w-lg"
      >
        <p className="">
          Clear Communication: We use no jargon and always explain everything in
          detail as to why it is important to help you, so you are kept informed
          on what is going on.
        </p>
      </motion.div>
    </section>
  );
};

export default WhyTrust;
