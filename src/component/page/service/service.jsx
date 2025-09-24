"use client";
import { motion } from "framer-motion";
import { HeaderData } from "@/data/data";
import Image from "next/image";
import ButtonCard from "@/component/common/button";

export const Service = () => {
  const serviceCategory = HeaderData.find((item) => item.name === "Services");

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
          <h2 className="text-lg font-bold text-white/90 ">Services</h2>
          <h2 className="md:text-3xl  text-2xl font-bold my-3 text-primary">
            We Provide
          </h2>
          <p className="max-w-2xl m-auto text-white/90">
            We assist in expanding businesses with user-friendly IT solutions
            and innovative digital marketing. Our team implements technology
            tailored for your convenience, from dependable software and network
            support to specialized social media, SEO, and online advertising.
            Leave technology and marketing to us while you concentrate on
            serving your patrons.
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
          {serviceCategory?.items?.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
              }}
              className="bg-gray-100 relative  border border-gray-800  rounded-lg  flex flex-col items-center  hover:border-primary  hover:shadow-md shadow-white transition-all duration-300"
            >
              <div className="w-full relative h-[26vh]">
                <Image
                  src={service?.image}
                  alt={service?.name}
                  priority
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  className="w-full h-full object-fill rounded-lg"
                />
              </div>
              <div className="p-5">
                <h4 className=" text-xl font-bold mb-2 text-primary ">
                  {service.name}
                </h4>
                <p className="text-gray-700 text-sm mb-4 line-clamp-4">
                  {service.subTitle}
                </p>
                <div className="flex justify-center items-center">
                  <ButtonCard link={service?.link} title="Know more" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
