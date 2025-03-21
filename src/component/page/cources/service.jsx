"use client";

import { motion } from "framer-motion";
import ImageComponent from "../../common/ImageComponent";
import Img from "../../../../public/1I.jpg";
import Img2 from "../../../../public/2I.jpg";
import Img3 from "../../../../public/3I.jpg";
import Img4 from "../../../../public/4I.jpg";
import Img5 from "../../../../public/5I.jpg";
import Img6 from "../../../../public/7I.jpg";
import Img7 from "../../../../public/8I.jpg";

const Cources = [
  {
    img: Img,
    title: "Social Media Management",
    description:
      "Ready to transform your social media presence and connect with your audience like never before? Contact us to learn more about our Social Media Management services and how we can help your business thrive in the digital age.",
  },
  {
    img: Img2,

    title: "Search Engine Optimization",
    description:
      "Transform your digital presence and unlock new opportunities with our expert-led SEO Cources. Whether you're looking to enhance your personal skills or boost your business’s online performance, our Cources provide the knowledge and tools you need to succeed.",
  },
  {
    img: Img3,

    title: "Artificial Intelligence",
    description:
      "Artificial Intelligence (AI) is transforming industries and shaping the future of technology. Whether you’re a tech enthusiast, a professional looking to advance your career, or a business aiming to leverage AI, our comprehensive AI Cources provide the knowledge and skills needed to excel in this dynamic field.",
  },
  {
    img: Img4,

    title: "Website Development",
    description:
      "Build dynamic, user-friendly websites from the ground up with our Website Developer course—your gateway to mastering the art of web design and coding.",
  },
  {
    img: Img5,

    title: "Graphic Design",
    description:
      "Choosing a graphic designer course is a step towards a dynamic and fulfilling career. Whether you’re looking to start from scratch or refine your existing skills, the right course can provide you with the tools, knowledge, and opportunities to succeed in the vibrant field of graphic design.",
  },
  {
    img: Img6,

    title: "Content Management",
    description:
      "Transform your approach to managing digital content and achieve impactful results with our expert-led course. Whether you're seeking to launch a new career, advance your existing role, or improve your content management strategies, our course provides the knowledge and tools you need to succeed.",
  },
];

export const Service = () => {
  return (
    <section className="py-20  ">
      <div className="common-padding mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-bold text-gray-900 ">Services</h2>
          <h3 className="md:text-3xl  text-2xl font-bold my-3 text-primary">
            Web Development Service
          </h3>
          <p className="max-w-2xl m-auto text-black/70">
            Morbi ornare velit vitae felis commodo, at blandit est vestibulum.
            Mauris quam arcu, facilisis ut vestibulum sit amet, pellentesque in
            metus. Aenean pharetra mauris ac sem faucibus, consectetur
            ullamcorper ex fermentum. Mauris placerat scelerisque pulvinar.
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
              className="bg-gray-100  border border-gray-800  rounded-lg  flex flex-col items-center  hover:border-primary  hover:shadow-md shadow-white transition-all duration-300"
            >
              <ImageComponent
                cardCss="max-h-[26vh]  overflow-hidden"
                src={course?.img}
              />
              <div className="p-5">
                <h4 className=" text-center font-bold mb-2 text-black ">
                  {course.title}
                </h4>
                <p className="text-gray-500 text-sm">{course.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
