import AboutHeroSection from "../components/about-page/AboutHeroSection";
import HeroSection from "../components/about-page/AboutHeroSection";
import Socials from "../components/about-page/Socials";
import TeamMembers from "../components/about-page/TeamMembers";
import AboutUsCard from "../components/about-page/TeamMembers";
import BaguetteCard from "../components/BaguetteCard";

export default function About() {
  return (
    <>
      <AboutHeroSection />
      <TeamMembers />
      <Socials />
    </>
  );
}
