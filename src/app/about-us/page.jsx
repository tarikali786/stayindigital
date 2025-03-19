import About from "@/component/page/about/about";
import AboutHero from "@/component/page/about/hero";
import Team from "@/component/page/about/team";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <About />
      <Team/>
    </div>
  );
};

export default AboutUs;
