"use client";

import { motion } from "framer-motion";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Img1 from "../../../../public/4 I.jpg";
import ImageComponent from "@/component/common/ImageComponent";
const HomeAbout = () => {
  return (
    <section className="py-16 common-padding  bg-black text-white   flex flex-col md:flex-row gap-6   overflow-hidden w-full ">
      {/* Image Section */}

      {/* Floating Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className=" bg-white md:w-1/2 w-full text-black p-8  md:mt-0 mt-6 rounded-lg shadow-lg "
      >
        <h2 className="text-2xl md:text-3xl ">About Us</h2>
        <h3 className="text-lg text-primary my-3">We Do with Creativity</h3>
        <p className=" text-gray-600">
          itekdigit is a forward-thinking digital marketing company dedicated to
          empowering individuals and businesses in navigating the fast-evolving
          digital landscape. Our mission is to provide top-notch digital
          marketing solutions, bridging the gap between creativity and strategy.
          With a focus on delivering value-driven services, we equip working
          professionals, job seekers, and students with the skills and insights
          needed to excel in today's digital economy. Join us on the journey of
          digital transformation and stay connected to the future of marketing.
          !
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative md:w-1/2"
      >
        <ImageComponent src={Img1} alt="Trust Image" cardCss=" w-full md:h-[50vh] " />
      </motion.div>
    </section>
  );
};

export default HomeAbout;
