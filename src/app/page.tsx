import ContactSection from "@/components/sections/Contact";
import HeroIntro from "@/components/sections/HeroIntro";
import HerosSec from "@/components/sections/HerosSec";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <HerosSec />
      <HeroIntro />
      <Projects />
      <ContactSection />
    </>
  );
}
