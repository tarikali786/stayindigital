"use client";

import { motion } from "framer-motion";
import ImageComponent from "../../common/ImageComponent";
import Img from "../../../../public/1I.jpg";
import Img2 from "../../../../public/2I.jpg";
import Img3 from "../../../../public/3I.jpg";

const Courses = [
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
    <section className="py-20  text-white ">
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
            We help give your business an edge you have never experienced
            before. All our strategies are built upon studying market trends;
            thus, you will always remain a step ahead. You will always have
            better outcomes and value for your money with us because our data
            driven concepts will ensure you fruitful results. We ensure that new
            tools and technologies are at the heart of all our solutions so they
            are scalable with your business. Let our experts take care of your
            IT and digital footprint while you manage your business with
            absolute certainty.
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
          {Courses.map((course, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
              }}
              className=" bg-secondry p-8 border  border-gray-800  rounded-lg  flex flex-col items-center  hover:border-primary  hover:shadow-md shadow-white transition-all duration-300"
            >
              <div className="h-[26vh]">
                <ImageComponent />
              </div>
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
