import { PageLoader } from "@/components/PageLoader";
import { Navbar } from "@/components/Navbar";
import { AboutLandingSection } from "@/components/sections/AboutLandingSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* First-load animation skeleton */}
      <PageLoader />

      {/* Sticky navigation with exactly four links & scroll progress */}
      <Navbar />

      <main className="flex min-h-screen flex-col">
        {/* 1. Landing Page & About (id="about") - Features Portrait Pixel Image Showcase */}
        <AboutLandingSection />

        {/* 2. Skills (id="skills") - HR & Technical Skills with zero percentages */}
        <SkillsSection />

        {/* 3. Experience (id="experience") - Leadership, Projects, Certifications & Achievements */}
        <ExperienceSection />

        {/* 4. Contact (id="contact") - Contact Form, Direct Details & Footer */}
        <ContactSection />
      </main>
    </>
  );
}
