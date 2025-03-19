import Testimonials from "@/component/page/cources/testimonial";
import ServiceHero from "@/component/page/service/hero";
import OurClient from "@/component/page/service/porttitor";
import Service from "@/component/page/service/service";
import React from "react";

const Services = () => {
  return (
    <div>
      <ServiceHero />
      <Service />
      <OurClient />
      <Testimonials />
    </div>
  );
};

export default Services;
