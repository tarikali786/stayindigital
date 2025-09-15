import About from "@/component/page/about/about";
import Creativity from "@/component/page/about/creativity";
import AboutHero from "@/component/page/about/hero";
import Team from "@/component/page/about/our-team";
import React from "react";

export const metadata = {
  title: "About Us | Stayindigital",
  description:
    "We are a results-driven digital solutions company in Chennai offering SEO, Social Media, Web Development, and more.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us | Stayindigital",
    description:
      "We are a results-driven digital solutions company in Chennai offering SEO, Social Media, Web Development, and more.",
    url: "https://stayindigital.com/about-us",
    images: [
      { url: "/StayLogo.png", width: 1200, height: 630, alt: "Stayindigital" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Stayindigital",
    description:
      "We are a results-driven digital solutions company in Chennai offering SEO, Social Media, Web Development, and more.",
    images: ["/StayLogo.png"],
  },
};

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
