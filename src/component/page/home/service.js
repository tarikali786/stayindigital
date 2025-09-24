"use client";
import { motion } from "framer-motion";
import { BarChart, Language, Brush, GridView } from "@mui/icons-material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ButtonCard from "@/component/common/button";
import { useState } from "react";
import ModalCard from "@/component/model/model";
import Icon1 from "../../../../public/icon1.webp";
import Icon2 from "../../../../public/icon2.webp";
import Icon3 from "../../../../public/icon3.webp";
import Icon4 from "../../../../public/icon4.webp";
import Image from "next/image";

const services = [
  {
    icon: Icon1, // Increase size
    title: "Social Media Marketing",
    description:
      "Captivate your potential customers and enhance the visibility of your brand on Facebook, Instagram, LinkedIn, and other platforms with strategic advertising that fuels discussions and leads to increased sales.",
  },
  {
    icon: Icon2,
    title: "SEO",
    description:
      "Captivtate the right atuience with our highly effective SEO techniques designed to raise your online visibility and search ranking, ensuring your website receives attention from the most important visitors.",
  },
  {
    icon: Icon3,
    title: "Website Development",
    description:
      "Enjoy a top-notch and pleasing user interface inclusive website that depicts your business, converts prospective customers into loyal patrons.",
  },
  {
    icon: Icon4,
    title: "Graphic Design",
    description:
      "Be it logos or custom advertisement designs, branding materials provide value to your business and ensures it gets the exposure it deserves.",
  },
];

export default function HomeServices() {
  const [open, setOpen] = useState(false);
  return (
    <section className="py-16   relative  bg-gradient-to-b  from-transparent to-blue-200 text-white    min-h-[100vh]  rounded-b-[200px] sm:rounded-b-[70%]">
      <div className=" common-padding mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-xl font-bold text-white">Services</h2>
          <h3 className="md:text-4xl text-3xl font-bold my-3 text-primary">
            Service We Provide
          </h3>
          <p className="text-white/90 max-w-2xl mx-auto ">
            We assist in expanding businesses with user-friendly IT solutions
            and innovative digital marketing.
          </p>
        </motion.div>

        {/* Service Cards */}
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="bg-white rounded-4xl shadow-2xl p-6 flex flex-col items-center text-center  cursor-pointer"
            >
              <div className="p-4 relative md:size-18 size-14  flex items-center justify-center bg-white rounded-full mb-4">
                {/* {service.icon} */}
                <Image
                  src={service.icon}
                  alt="icon"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  loading="lazy"
                  className="object-contain"
                />
              </div>

              <h4 className="text-2xl text-black font-semibold mb-2">
                {service.title}
              </h4>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </motion.div>
          ))}

          <div className="flex justify-center items-center mt-6 col-span-full">
            <ButtonCard title="View All Services" link="services" />
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-10 left-0 right-0  flex justify-center items-center">
        <PlayCircleIcon
          onClick={() => setOpen(!open)}
          className="text-blue-600  animate-bounce cursor-pointer"
          sx={{ fontSize: "80px" }}
        />
      </div>
      {open && <ModalCard open={open} setOpen={setOpen} />}
    </section>
  );
}
