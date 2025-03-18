import HomeCourses from "@/component/home/course";
import Hero from "@/component/home/hero";
import HomeServices from "@/component/home/service";

export default function HeroSection() {
  return (
    <>
      <Hero />
      <HomeServices />
      <HomeCourses />
    </>
  );
}
