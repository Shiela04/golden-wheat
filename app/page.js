import BreadCardCarousel from "./components/BreadCardCarousel";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="bg-page-bg">
      <HeroSection />
      <BreadCardCarousel />
    </div>
  );
}
