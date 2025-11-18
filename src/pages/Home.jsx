import { Suspense, lazy } from "react";

// Eager load critical above-the-fold components
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";

// Lazy load below-the-fold sections with proper module resolution
const AboutSection = lazy(() => 
  import("../components/AboutSection").then(m => ({ default: m.AboutSection }))
);
const SkillsSection = lazy(() => 
  import("../components/SkillsSection").then(m => ({ default: m.SkillsSection }))
);
const ExperienceSection = lazy(() => 
  import("../components/ExperienceSection").then(m => ({ default: m.ExperienceSection }))
);
const ProjectsSection = lazy(() => 
  import("../components/ProjectsSection").then(m => ({ default: m.ProjectsSection }))
);
const ContactSection = lazy(() => 
  import("../components/ContactSection").then(m => ({ default: m.ContactSection }))
);
const Footer = lazy(() => 
  import("../components/Footer").then(m => ({ default: m.Footer }))
);

// Lightweight loading placeholder
const SectionLoader = () => (
  <div className="min-h-[20vh] bg-gray-950 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-purple-500/50 border-t-purple-500 rounded-full animate-spin"></div>
  </div>
);

export const Home = () => {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      {/* Navbar - Always loaded (critical) */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero - Always loaded (above the fold) */}
        <HeroSection />
        
        {/* Below the fold sections - Lazy loaded with Suspense */}
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>
        
        {/* Professional Journey Flow */}
        <Suspense fallback={<SectionLoader />}>
          <SkillsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ExperienceSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ProjectsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </main>

      {/* Footer - Lazy loaded */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};
