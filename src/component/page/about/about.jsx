"use client";
import Image from "next/image";
import { motion } from "framer-motion";


const About = () => {
  return (
    <section className="bg-black text-white  common-padding ">
      {/* About Us Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col justify-center items-center text-center  px-6"
      >
        <h2 className="text-xl font-bold text-white">About Us</h2>
        <h3 className="text-4xl font-bold my-3 text-[#716af2]">Who We Are</h3>
        <p className="text-gray-400 text-lg leading-relaxed">
          We are a team of passionate innovators dedicated to crafting
          high-quality digital solutions. Our expertise lies in web development,
          digital marketing, SEO, and branding, helping businesses grow and
          succeed in the digital world.
        </p>
        <p className="text-gray-400 text-lg mt-4">
          Join us on this journey and let’s build something amazing together.
        </p>
      </motion.div>

      {/* Why Choose Us Section */}
      <div className="relative py-16 text-center">
        <h2 className="text-lg font-bold text-white">About Us</h2>
        <h3 className="text-4xl font-bold my-3 text-[#716af2]">
          Why Choose ITechDigit?
        </h3>

        {/* Background with Network Design */}
        <div className="relative w-full h-[500px] bg-[url('/networkbg.png')] bg-cover bg-center">
          {/* Team Icons */}
          <div className="absolute top-[10%] left-[40%]">
            <Image
              src="/team.png"
              alt="Team"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="absolute top-[40%] left-[20%]">
            <Image
              src="/team-icon.png"
              alt="Team"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="absolute top-[50%] left-[60%]">
            <Image
              src="/team-icon.png"
              alt="Team"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="absolute bottom-[10%] left-[30%]">
            <Image
              src="/team-icon.png"
              alt="Team"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default About;
