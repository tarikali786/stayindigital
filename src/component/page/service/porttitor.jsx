"use client";

import { motion } from "framer-motion";
import ImageComponent from "../../common/ImageComponent";
import Img from "../../../../public/1 I.jpg";
import Img2 from "../../../../public/2 I.jpg";
import Img3 from "../../../../public/3 I.jpg";

const Cources = [
  {
    img: Img,
    title: "NeoTech Solutions",
  },
  {
    img: Img2,
    title: "ShopEase",
  },
  {
    img: Img3,
    title: "WellnessPro Clinics",
  },
];

export const OurClient = () => {
  return (
    <section className="py-20  text-white global-bg">
      <div className="  common-padding mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="md:text-3xl  text-2xl font-bold my-3 text-primary">
            OUR CLIENTS
          </h3>
          <p className="max-w-4xl m-auto text-white/80">
            At [Your Company Name], we’re proud to have partnered with a diverse
            portfolio of clients, helping them achieve significant growth across
            digital platforms. Our clients range from Tech Innovators like
            NeoTech Solutions, who saw remarkable SEO results, to e-commerce
            brands like Trendify Online, where we boosted sales with targeted
            advertising campaigns. We’ve had the pleasure of enhancing the
            digital presence of Prime Realty Group, developing dynamic websites
            that convert visitors into clients, and working with Glamour Vogue,
            where our social media management elevated their brand recognition.
            From Vision Studios, where we brought stunning visuals to life with
            professional video editing and VFX, to LearnHub Academy, where we
            optimized their online learning platform, our clients trust us to
            deliver creative, results-driven solutions across all areas of
            digital marketing and content creation.
          </p>
        </motion.div>

        {/* Course Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:gap-10 md:gap-6 gap-4"
        >
          {Cources.map((course, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
              }}
              className=" bg-secondry p-8 border border-gray-800  rounded-lg  flex flex-col items-center  hover:border-primary  hover:shadow-md shadow-white transition-all duration-300"
            >
              <ImageComponent cardCss="w-full h-[26vh] " />
              <h4 className=" text-center font-bold mb-2 text-white mt-6 ">
                {course.title}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurClient;
