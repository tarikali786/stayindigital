import { motion } from "framer-motion";
import WhyChoose from "./why-choose";

const About = () => {
  return (
    <section className=" py-10 text-white  common-padding ">
      {/* About Us Section */}
      <div className="flex flex-col justify-center items-center text-center  px-6">
        <h2 className="text-xl font-bold text-white">About Us</h2>
        <h3 className="md:text-3xl  text-2xl font-bold my-3 text-[#716af2]">
          Who We Are
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed">
          ITechDigit is a forward-thinking digital marketing company dedicated
          to empowering individuals and businesses in navigating the
          fast-evolving digital landscape. Our mission is to provide top-notch
          digital marketing solutions, bridging the gap between creativity and
          strategy. With a focus on delivering value-driven services, we equip
          working professionals, job seekers, and students with the skills and
          insights needed to excel in today's digital economy. Join us on the
          journey of digital transformation and stay connected to the future of
          marketing.
        </p>
      </div>

      <WhyChoose />
    </section>
  );
};

export default About;
