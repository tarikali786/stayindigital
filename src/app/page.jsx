import HomeAbout from "@/component/page/home/about";
import HomeCources from "@/component/page/home/course";
import HomeHero from "@/component/page/home/hero";
import HomeServices from "@/component/page/home/service";
import WhyTrust from "@/component/page/home/why-trust";
import WaterBubbleEffect from "@/component/ui-effect/water-boboul";

export default function HeroSection() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <WhyTrust />
      <HomeCources />
    </>
  );
}
