import CourseHero from "@/component/page/courses/hero";
import Porttitor from "@/component/page/courses/porttitor";
import Posuere from "@/component/page/courses/posuere";
import Service from "@/component/page/courses/service";
import Testimonials from "@/component/page/courses/testimonial";
import React from "react";

const Courses = () => {
  return (
    <div>
      <CourseHero />
      <Service />
      <Porttitor />
      <Posuere />
      <Testimonials />
    </div>
  );
};

export default Courses;
