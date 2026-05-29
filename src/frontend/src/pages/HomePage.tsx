import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { DailyMenuSection } from "@/components/DailyMenuSection";
import { FooterSection } from "@/components/FooterSection";
import { GallerySection } from "@/components/GallerySection";
import { HeroSection } from "@/components/HeroSection";
import { MenuSection } from "@/components/MenuSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <DailyMenuSection />
      <GallerySection />
      <WhyChooseUsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
