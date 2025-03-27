"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "@mui/material";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
// import useMediaQuery from "@mui/material/useMediaQuery";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

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
    <section className="py-16  text-center common-padding">
      <h3 className="text-lg text-black/70 font-semibold">Testimonials</h3>
      <h2 className="text-4xl font-bold text-primary my-3">What People Say</h2>
      <p className="max-w-2xl mx-auto text-white/80">
        Morbi ornare velit vitae felis commodo, at blandit est vestibulum.
        Mauris quam arcu, facilisis ut vestibulum sit amet.
      </p>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={isSm ? 3 : isMd ? 2 : 1}
        centeredSlides={true}
        spaceBetween={40}
        // slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mt-10"
      >
        {testimonials?.map((testimonial, index) => (
          <SwiperSlide key={index} className="pb-10">
            <div className="relative p-6 bg-white rounded-lg  max-w-sm text-center shadow-lg flex flex-col justify-between  text-gray-700 mx-auto">
              <div className="flex flex-col items-center  mt-6">
                <div className="size-20 text-3xl bg-primary text-white  font-semibold mb-2 rounded-full border border-gray-300 flex-shrink-0 flex items-center justify-center">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-indigo-500 ">{testimonial.role}</p>
                </div>
              </div>
              <p className="relative z-10 mt-2">{testimonial.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
