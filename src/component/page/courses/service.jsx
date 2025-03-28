"use client";

import { motion } from "framer-motion";
import { HeaderData } from "@/data/data";
import Image from "next/image";
import ButtonCard from "@/component/common/button";



export const Service = () => {
  const CourcesCategory = HeaderData.find((item) => item.name === "Courses");

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
          <h2 className="text-lg font-bold text-white/60 ">Courses</h2>
          <h3 className="md:text-3xl  text-2xl font-bold my-3 text-primary">
            Courses We Provide !
          </h3>
          <p className="max-w-2xl m-auto text-white/70">
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
          {CourcesCategory?.items?.map((course, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
              }}
              className="bg-gray-100  border border-gray-800  rounded-lg  flex flex-col items-center  hover:border-primary  hover:shadow-md shadow-white transition-all duration-300"
            >
              <div className="h-[26vh]">
                <Image
                  src={course?.image}
                  alt={course?.name}
                  priority
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-5">
                <h4 className=" text-center font-bold mb-6 text-black ">
                  {course.name}
                </h4>
                {/* <p className="text-gray-500 text-sm">{course.description}</p> */}
                <ButtonCard link={course?.link} title="Know more" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
