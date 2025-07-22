import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { MissionSection } from "@/components/mission-section";
import { ProgramsSection } from "@/components/programs-section";
import { InnovationSection } from "@/components/innovation-section";
import { ImpactSection } from "@/components/impact-section";
import { CommunitySection } from "@/components/community-section";
import { TechAreasSection } from "@/components/tech-areas-section";
import { NewsSection } from "@/components/news-section";
import { PartnersSection } from "@/components/partners-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <MissionSection />
        <ProgramsSection />
        <InnovationSection />
        <ImpactSection />
        <CommunitySection />
        <TechAreasSection />
        <NewsSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}
