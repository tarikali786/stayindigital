import HomeAbout from "@/component/page/home/about";
import HomeCourses from "@/component/page/home/course";
import HomeHero from "@/component/page/home/hero";
import HomeServices from "@/component/page/home/service";
import WhyTrust from "@/component/page/home/why-trust";

export default function HeroSection() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <WhyTrust />
      <HomeCourses />
    </>
  );
}
