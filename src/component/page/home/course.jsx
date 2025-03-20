"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";
import ImageComponent from "../../common/ImageComponent";
import Img from "../../../../public/1 I.jpg";
import Img2 from "../../../../public/2 I.jpg";
import Img3 from "../../../../public/3 I.jpg";
import Img4 from "../../../../public/4 I.jpg";
import Img5 from "../../../../public/5 I.jpg";
import Img6 from "../../../../public/7 I.jpg";
import Img7 from "../../../../public/8 I.jpg";
import Image from "next/image";

const Cources = [
  {
    img: Img,
    title: "Social Media Management",
    description:
      "Ready to transform your social media presence and connect with your audience like never before?",
  },
  {
    img: Img2,
    title: "Search Engine Optimization",
    description:
      "Transform your digital presence and unlock new opportunities with our expert-led SEO Cources.",
  },
  {
    img: Img3,
    title: "Artificial Intelligence",
    description:
      "AI is transforming industries and shaping the future of technology.",
  },
  {
    img: Img4,
    title: "Website Development",
    description:
      "Build dynamic, user-friendly websites with our expert course.",
  },
  {
    img: Img5,
    title: "Graphic Design",
    description:
      "Enhance your creative skills with professional graphic design training.",
  },
  {
    img: Img6,
    title: "Content Management",
    description: "Learn effective content strategies to boost your brand.",
  },
  {
    img: Img7,
    title: "Professional Video Editing",
    description: "Master video editing skills to create high-quality videos.",
  },
];

export const HomeCources = () => {
  return (
    <section className="py-20 global-bg text-white">
      <div className=" mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-bold">Cources</h2>
          <h3 className="md:text-3xl text-2xl font-bold my-3 text-primary">
            Cources We Provide!
          </h3>
        </motion.div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={2.5}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={2000} // Smooth scrolling effect
          className=" mx-auto"
        >
          {Cources.map((course, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-100 overflow-hidden border border-gray-800 rounded-4xl flex flex-col items-center hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <Image  src={course.img} alt="img" loading="lazy" className="h-[60vh]  " />
                <div className=" text-center py-8 px-6">
                  <h4 className="  text-3xl font-bold mb-2 text-black">
                    {course.title}
                  </h4>
                  <p className="text-gray-500 text-sm line-clamp-1">
                    {course.description}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCources;
