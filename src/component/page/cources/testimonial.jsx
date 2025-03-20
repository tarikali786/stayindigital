"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

const testimonials = [
  {
    name: "Maya Bailey",
    role: "Client",
    text: "Morbi ornare velit vitae felis commodo, at blandit est vestibulum. Mauris quam arcu, facilisis ut vestibulum sit amet, pellentesque in metus. Aenean pharetra mauris ac sem",
  },
  {
    name: "Alonzo Torres",
    role: "Client",
    text: "Morbi ornare velit vitae felis commodo, at blandit est vestibulum. Mauris quam arcu, facilisis ut vestibulum sit amet, pellentesque in metus. Aenean pharetra mauris ac sem",
  },
  {
    name: "Derek Wolzman",
    role: "Client",
    text: "Morbi ornare velit vitae felis commodo, at blandit est vestibulum. Mauris quam arcu, facilisis ut vestibulum sit amet, pellentesque in metus. Aenean pharetra mauris ac sem",
  },
  {
    name: "Maya Bailey",
    role: "Client",
    text: "Morbi ornare velit vitae felis commodo, at blandit est vestibulum. Mauris quam arcu, facilisis ut vestibulum sit amet, pellentesque in metus. Aenean pharetra mauris ac sem",
  },
  {
    name: "Alonzo Torres",
    role: "Client",
    text: "Morbi ornare velit vitae felis commodo, at blandit est vestibulum. Mauris quam arcu, facilisis ut vestibulum sit amet, pellentesque in metus. Aenean pharetra mauris ac sem",
  },
  {
    name: "Derek Wolzman",
    role: "Client",
    text: "Morbi ornare velit vitae felis commodo, at blandit est vestibulum. Mauris quam arcu, facilisis ut vestibulum sit amet, pellentesque in metus. Aenean pharetra mauris ac sem",
  },
];

export default function Testimonials() {
  const isMd = useMediaQuery("(min-width:768px)");
  const isSm = useMediaQuery("(min-width:640px)");
  return (
    <section className="py-16 bg-gray-50 text-center common-padding">
      <h3 className="text-lg text-black/70 font-semibold">Testimonials</h3>
      <h2 className="text-4xl font-bold text-primary my-3">What People Say</h2>
      <p className="max-w-2xl mx-auto text-gray-600">
        Morbi ornare velit vitae felis commodo, at blandit est vestibulum.
        Mauris quam arcu, facilisis ut vestibulum sit amet.
      </p>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={isMd ? 3 : isSm ? 2 : 1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className="mt-10  mx-auto max-h-7xl"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className=" cursor-grab pb-12">
            <motion.div
              className="relative p-6 rounded-lg max-w-sm text-left shadow-lg flex flex-col justify-between bg-white text-gray-700 mx-auto"
              whileHover={{ scale: 1.05 }}
            >
              <p className="relative z-10">{testimonial.text}</p>
              <span className="absolute right-5 top-5 text-7xl opacity-20">
                `"`
              </span>
              <div className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full border border-gray-300 flex-shrink-0"></div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-indigo-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
