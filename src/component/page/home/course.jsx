"use client";

import { motion } from "framer-motion";
import {
  School,
  Code,
  Brush,
  VideoLibrary,
  Mic,
  ManageSearch,
  TrendingUp,
  Storage,
} from "@mui/icons-material";
import ImageComponent from "../common/ImageComponent";

const courses = [
  {
    icon: <TrendingUp className="text-blue-500 text-5xl" />,
    title: "Social Media Management",
    description:
      "Transform your social media presence and connect with your audience like never before.",
  },
  {
    icon: <ManageSearch className="text-blue-500 text-5xl" />,
    title: "Search Engine Optimization",
    description:
      "Boost your digital presence with expert SEO strategies to enhance your online visibility.",
  },
  {
    icon: <Storage className="text-blue-500 text-5xl" />,
    title: "Artificial Intelligence",
    description:
      "Learn the fundamentals of AI and its applications to shape the future of technology.",
  },
  {
    icon: <Code className="text-blue-500 text-5xl" />,
    title: "Website Development",
    description:
      "Build user-friendly websites from scratch and master the art of web design and coding.",
  },
  {
    icon: <Brush className="text-blue-500 text-5xl" />,
    title: "Graphic Design",
    description:
      "Learn the tools and techniques to create stunning digital art and branding materials.",
  },
  {
    icon: <School className="text-blue-500 text-5xl" />,
    title: "Content Management",
    description:
      "Master content strategies to engage your audience effectively across platforms.",
  },
  {
    icon: <VideoLibrary className="text-blue-500 text-5xl" />,
    title: "Professional Video Editing",
    description:
      "Enhance your video editing skills and create high-quality professional videos.",
  },
  {
    icon: <Mic className="text-blue-500 text-5xl" />,
    title: "Podcast Creation",
    description:
      "Develop the skills to produce and market engaging podcasts successfully.",
  },
];

export default function HomeCourses() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center hover:border-blue-500 transition-all duration-300"
            >
              <ImageComponent />
              <h4 className="text-lg font-bold mb-2">{course.title}</h4>
              <p className="text-gray-400 text-sm">{course.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
