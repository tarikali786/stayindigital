"use client";

import { motion } from "framer-motion";
import { BarChart, Language, Brush, GridView } from "@mui/icons-material";

const services = [
  {
    icon: <BarChart className="text-blue-500 text-5xl" />,
    title: "Social Media Marketing",
    description:
      "Boost your brand’s presence on social media platforms with targeted campaigns that engage and convert.",
  },
  {
    icon: <Language className="text-blue-500 text-5xl" />,
    title: "SEO",
    description:
      "Improve your website’s visibility on search engines and attract organic traffic with our SEO expertise.",
  },
  {
    icon: <Brush className="text-blue-500 text-5xl" />,
    title: "Website Development",
    description:
      "Create a stunning, user-friendly website that reflects your brand’s identity and converts visitors into customers.",
  },
  {
    icon: <GridView className="text-blue-500 text-[100px]" />,
    title: "Graphic Design",
    description:
      "Elevate your brand’s visual identity with professional graphic design services that captivate and inspire.",
  },
];

export default function HomeServices() {
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
          <h2 className="text-xl font-bold text-white">Services</h2>
          <h3 className="text-4xl font-bold my-3 text-primary">
            Service We Provide
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Your brand deserves to be seen, heard, and remembered. Let us craft
            your digital success story with expert marketing, design, and
            content creation.
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
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center hover:border-blue-500 transition-all duration-300"
            >
              <div className="bg-gray-800 p-4 size-16 rounded-full mb-4">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{service.title}</h4>
              <p className="text-gray-400 text-lg">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
