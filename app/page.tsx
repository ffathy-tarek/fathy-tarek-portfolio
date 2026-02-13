import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { EducationSection } from "@/components/education-section";
import { SkillsSection } from "@/components/skills-section";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
import { CTASection } from "@/components/cta-section";
import { ThankYouSection } from "@/components/thank-you-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <CTASection />
        <ThankYouSection />
      </main>
      <Footer />
    </>
  );
}
