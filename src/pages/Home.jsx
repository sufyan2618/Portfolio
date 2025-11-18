import { Suspense, lazy } from "react";
const Navbar = lazy(() => import("../components/Navbar").then(module => ({ default: module.Navbar })));
const HeroSection = lazy(() => import("../components/HeroSection").then(module => ({ default: module.HeroSection })));
const AboutSection = lazy(() => import("../components/AboutSection").then(module => ({ default: module.AboutSection })));
const SkillsSection = lazy(() => import("../components/SkillsSection").then(module => ({ default: module.SkillsSection })));
const ExperienceSection = lazy(() => import("../components/ExperienceSection").then(module => ({ default: module.ExperienceSection })));
const ProjectsSection = lazy(() => import("../components/ProjectsSection").then(module => ({ default: module.ProjectsSection })));
const ContactSection = lazy(() => import("../components/ContactSection").then(module => ({ default: module.ContactSection })));
const Footer = lazy(() => import("../components/Footer").then(module => ({ default: module.Footer })));

export const Home = () => {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        
        {/* Professional Journey Flow */}
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
