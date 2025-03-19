"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1); // Default active testimonial

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h3 className="text-lg text-black/70 font-semibold">Testimonials</h3>
      <h2 className="text-4xl font-bold text-primary my-3">What People Say</h2>
      <p className="max-w-2xl mx-auto text-gray-600">
        Morbi ornare velit vitae felis commodo, at blandit est vestibulum.
        Mauris quam arcu, facilisis ut vestibulum sit amet.
      </p>

      {/* Testimonials List */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`relative p-6 rounded-lg max-w-sm text-left shadow-lg flex flex-col justify-between transition-all duration-300 ${
              activeIndex === index
                ? "bg-indigo-500 text-white"
                : "bg-white text-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <p className="relative z-10">{testimonial.text}</p>
            <span className="absolute right-5 top-5 text-7xl opacity-20">{`"`}</span>
            <div className="flex items-center mt-6">
              <div className="w-12 h-12 rounded-full border border-gray-300 flex-shrink-0"></div>
              <div className="ml-4">
                <p
                  className={`font-bold ${
                    activeIndex === index ? "text-white" : "text-gray-900"
                  }`}
                >
                  {testimonial.name}
                </p>
                <p
                  className={`text-sm ${
                    activeIndex === index ? "text-gray-200" : "text-indigo-500"
                  }`}
                >
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dots for selection */}
      <div className="mt-8 flex justify-center space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-2  cursor-pointer  rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-indigo-500" : "bg-gray-300"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
