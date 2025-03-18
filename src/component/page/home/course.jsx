"use client";

import { motion } from "framer-motion";
import ImageComponent from "../../common/ImageComponent";

const courses = [
  {
    title: "Social Media Management",
    description:
      "Ready to transform your social media presence and connect with your audience like never before? Contact us to learn more about our Social Media Management services and how we can help your business thrive in the digital age.",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Transform your digital presence and unlock new opportunities with our expert-led SEO courses. Whether you're looking to enhance your personal skills or boost your business’s online performance, our courses provide the knowledge and tools you need to succeed.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Artificial Intelligence (AI) is transforming industries and shaping the future of technology. Whether you’re a tech enthusiast, a professional looking to advance your career, or a business aiming to leverage AI, our comprehensive AI courses provide the knowledge and skills needed to excel in this dynamic field.",
  },
  {
    title: "Website Development",
    description:
      "Build dynamic, user-friendly websites from the ground up with our Website Developer course—your gateway to mastering the art of web design and coding.",
  },
  {
    title: "Graphic Design",
    description:
      "Choosing a graphic designer course is a step towards a dynamic and fulfilling career. Whether you’re looking to start from scratch or refine your existing skills, the right course can provide you with the tools, knowledge, and opportunities to succeed in the vibrant field of graphic design.",
  },
  {
    title: "Content Management",
    description:
      "Transform your approach to managing digital content and achieve impactful results with our expert-led course. Whether you're seeking to launch a new career, advance your existing role, or improve your content management strategies, our course provides the knowledge and tools you need to succeed.",
  },
  {
    title: "Professional Video Editing",
    description:
      "Transform your video editing skills and create stunning, professional-quality videos with our expert-led course. Whether you’re looking to enhance your current skills or start a new career, our Professional Video Editing course provides the tools and knowledge you need to succeed.",
  },
  {
    title: "Podcast Creation",
    description:
      "Embark on your podcasting adventure with the confidence that you have the knowledge and skills to succeed. Our Podcast Creation course is designed to equip you with everything you need to create, produce, and promote a successful podcast.",
  },

  {
    title: "Advertising Campaigne",
    description:
      "Transform your approach to advertising and drive impactful results with our expert-led Ad Campaign course. Whether you’re looking to enhance your skills, advance your career, or achieve your business objectives, our course provides the tools and knowledge you need to succeed.",
  },
  {
    title: "Performance Marketing",
    description:
      "Choosing a Performance Marketing course equips you with the skills and knowledge to drive effective, data-driven marketing campaigns. By mastering performance metrics, leveraging key platforms, and staying updated with industry trends, you’ll be well-prepared to excel in a dynamic and results-oriented field.",
  },
  {
    title: "Personality Development",
    description:
      "Invest in yourself and take the first step towards a more confident, capable, and charismatic you. Discover the difference that our Personality Development Course can make in your life and unlock a future full of possibilities.",
  },
  {
    title: "Search Engine Marketing",
    description:
      "Choosing a Search Engine Marketing course equips you with the skills and knowledge to excel in the competitive field of search advertising. By mastering key platforms, optimizing campaigns, and staying updated with industry trends, you'll be well-prepared to drive impactful results and advance your career in SEM.",
  },
];

export const HomeCourses = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="common-padding mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-xl font-bold ">Courses</h2>
          <h3 className="text-4xl font-bold my-3 text-primary">
            Courses We Provide!
          </h3>
        </motion.div>

        {/* Course Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 md:gap-6 gap-4"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="bg-gray-100 border border-gray-800 rounded-lg  flex flex-col items-center  hover:border-primary  hover:shadow-md shadow-white transition-all duration-300"
            >
              <ImageComponent cardCss="h-[26vh] w-full" />
              <div className="p-5">
                <h4 className="text-lg text-center font-bold mb-2 text-black ">
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

export default HomeCourses;
