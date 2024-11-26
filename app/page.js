import NavigationBar from "./components/NavigationBar";
import BreadCardCarousel from "./components/BreadCardCarousel";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-page-bg">
      <NavigationBar />
      <HeroSection />
      <BreadCardCarousel />
      <Footer />
    </div>
  );
}
