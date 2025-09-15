import HomeAbout from "@/component/page/home/about";
import HomeCourses from "@/component/page/home/course";
import HomeHero from "@/component/page/home/hero";
import HomeServices from "@/component/page/home/service";
import WhyTrust from "@/component/page/home/why-trust";
import SpectralBackground from "@/component/UiEffect/network-spectrum";
import Technology from "@/component/page/home/technology";
import Testimonials from "@/component/page/courses/testimonial";

export default function HeroSection() {
  return (
    <div className="">
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <WhyTrust />
      <HomeCourses />
      <Technology />
      <Testimonials />
      <SpectralBackground />
    </div>
  );
}
