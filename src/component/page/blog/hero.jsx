import ButtonCard from "@/component/common/button";
import React from "react";

const Hero = () => {
  return (
    <section className="blog-hero  w-full h-[46vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] flex  rounded-b-4xl sm:rounded-b-[100px] overflow-hidden shadow-md  shadow-white common-padding flex-col justify-center md:text-left text-center  md:items-start items-center ">
      <h1 className="text-white text-5xl">Blog</h1>
      <p className="text-sm max-w-md my-4 text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus,
        inventore voluptatibus cupiditate, consectetur tempora dignissimos
        mollitia praesentium?
      </p>
      <ButtonCard link="/contact" title="Get's Connect" />
    </section>
  );
};

export default Hero;
