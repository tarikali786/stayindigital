import HomeAbout from "@/component/page/home/about";
import HomeCources from "@/component/page/home/course";
import HomeHero from "@/component/page/home/hero";
import HomeServices from "@/component/page/home/service";
import WhyTrust from "@/component/page/home/why-trust";
import Testimonials from "../component/page/cources/testimonial";
import SpectralBackground from "@/component/UiEffect/network-spectrum";
import Technology from "@/component/page/home/technology";

export default function HeroSection() {
  return (
    <div className="z-30">
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <WhyTrust />
      <HomeCources />
      <Technology />
      <Testimonials />
      <SpectralBackground />
    </div>
  );
}
