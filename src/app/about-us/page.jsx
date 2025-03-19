import About from "@/component/page/about/about";
import Creativity from "@/component/page/about/creativity";
import AboutHero from "@/component/page/about/hero";
import Team from "@/component/page/about/our-team";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <About />
      <Team />
      <Creativity />
    </div>
  );
};

export default AboutUs;
