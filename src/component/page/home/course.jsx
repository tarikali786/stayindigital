"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";
import Img from "../../../../public/1I.webp";
import Img2 from "../../../../public/2I.webp";
import Img3 from "../../../../public/3I.webp";
import Img4 from "../../../../public/4I.webp";
import Img5 from "../../../../public/5I.webp";
import Img6 from "../../../../public/7I.webp";
import Img7 from "../../../../public/8I.webp";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import ButtonCard from "@/component/common/button";
import { useEffect, useState } from "react";
import { HeaderData } from "@/data/data";
import Link from "next/link";

const Courses = [
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
      "Transform your digital presence and unlock new opportunities with our expert-led SEO Courses.",
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

export const HomeCourses = () => {
  const isMd = useMediaQuery("(min-width:768px)");
  const isSm = useMediaQuery("(min-width:640px)");
  const courses = HeaderData.find((item) => item.name === "Courses");

  return (
    <section className="py-20  text-white">
      <div className=" mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-bold">Courses</h2>
          <h3 className="md:text-3xl text-2xl font-bold my-3 text-primary">
            Courses We Provide!
          </h3>
        </motion.div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          // slidesPerView={2.5}
          slidesPerView={isSm ? 2.5 : isMd ? 2 : 1}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={2000} // Smooth scrolling effect
          className=" mx-auto"
        >
          {courses?.items?.map((course, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-100 overflow-hidden border border-gray-800 rounded-4xl flex flex-col items-center hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <Link href={course?.link}>
                  <div className="xl:h-[60vh] w-full md:h-[50vh] sm:h-[30vh] h-[30vh] relative ">
                    <Image
                      src={course?.bannerImage}
                      alt="img"
                      loading="lazy"
                      className=" object-fill"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                    />
                  </div>
                  <div className=" text-center py-8 px-6">
                    <h4 className="  sm:text-2xl md:text-3xl text-xl font-bold mb-2 text-black">
                      {course.name}
                    </h4>
                    <p className="text-gray-500 text-sm line-clamp-1">
                      {course.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center mt-10">
        <ButtonCard title="See All Courses" link="/courses" />
      </div>
    </section>
  );
};

export default HomeCourses;
