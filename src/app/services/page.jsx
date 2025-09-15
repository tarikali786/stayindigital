import Testimonials from "@/component/page/courses/testimonial";
import ServiceHero from "@/component/page/service/hero";
import OurClient from "@/component/page/service/porttitor";
import Service from "@/component/page/service/service";
import React from "react";

export const metadata = {
  title: "Services | Stayindigital",
  description:
    "IT solutions and digital marketing services: SEO, Social Media, Web Development, Advertising Campaigns and more in Chennai.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Stayindigital",
    description:
      "IT solutions and digital marketing services: SEO, Social Media, Web Development, Advertising Campaigns and more in Chennai.",
    url: "https://stayindigital.com/services",
    images: [
      { url: "/StayLogo.png", width: 1200, height: 630, alt: "Stayindigital" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Stayindigital",
    description:
      "IT solutions and digital marketing services: SEO, Social Media, Web Development, Advertising Campaigns and more in Chennai.",
    images: ["/StayLogo.png"],
  },
};

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
