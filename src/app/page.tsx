import { BirthdayPackagesSection } from "@/components/sections/birthday-packages";
import { EventsSection } from "@/components/sections/events";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { GallerySection } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { LocationSection } from "@/components/sections/location";
import { MenuSection } from "@/components/sections/menu";
import { PromotionsSection } from "@/components/sections/promotions";
import { SocialProofSection } from "@/components/sections/social-proof";
import { SportsSection } from "@/components/sections/sports";
import { WeeklyExperienceSection } from "@/components/sections/weekly-experience";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyCta } from "@/components/layout/sticky-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EventsSection />
        <WeeklyExperienceSection />
        {/* <PromotionsSection /> */}
        <BirthdayPackagesSection />
        {/* <MenuSection /> */}
        <SportsSection />
        {/* <SocialProofSection /> */}
        <GallerySection />
        <LocationSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
