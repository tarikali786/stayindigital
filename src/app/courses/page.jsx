import CoursesList from "@/component/page/courses/coursesList";
import CourseHero from "@/component/page/courses/hero";
import Porttitor from "@/component/page/courses/porttitor";
import Posuere from "@/component/page/courses/posuere";
import Testimonials from "@/component/page/courses/testimonial";
import React from "react";

export const metadata = {
  title: "Courses | Stayindigital",
  description:
    "Explore our courses: SEO, Social Media, Web Development, AI, Graphic Design, Content Management, and more.",
  alternates: { canonical: "/courses" },
  openGraph: {
    title: "Courses | Stayindigital",
    description:
      "Explore our courses: SEO, Social Media, Web Development, AI, Graphic Design, Content Management, and more.",
    url: "https://stayindigital.com/courses",
    images: [
      { url: "/StayLogo.png", width: 1200, height: 630, alt: "Stayindigital" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Courses | Stayindigital",
    description:
      "Explore our courses: SEO, Social Media, Web Development, AI, Graphic Design, Content Management, and more.",
    images: ["/StayLogo.png"],
  },
};

const Courses = () => {
  return (
    <div>
      <CourseHero />
      <CoursesList />
      <Porttitor />
      <Posuere />
      <Testimonials />
    </div>
  );
};

export default Courses;
