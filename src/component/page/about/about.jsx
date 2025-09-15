import { motion } from "framer-motion";
import WhyChoose from "./why-choose";

const About = () => {
  return (
    <section className=" py-10 text-white  common-padding ">
      {/* About Us Section */}
      <div className="flex flex-col justify-center items-center text-center  px-6">
        <h1 className="text-xl font-bold text-white">About Us</h1>
        <h2 className="md:text-3xl  text-2xl font-bold my-3 text-[#716af2]">
          Who We Are
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          We're a leading mobile app developer known for delivering top-notch,
          budget-friendly solutions. Our goal is to create digital products and
          services that bring people together and simplify life. Besides app
          development, we provide expert IT services and clever digital
          marketing solutions to help businesses expand online. Supported by a
          team of capable tech experts, we build secure, dependable, and
          groundbreaking systems using cutting-edge technologies. Whether you
          need custom software SEO social media marketing, or website
          design—we're your go-to partner for all tech and digital needs. Each
          new project gives us a chance to learn, expand, and test the
          boundaries of what we can achieve.
        </p>
      </div>

      <WhyChoose />
    </section>
  );
};

export default About;
