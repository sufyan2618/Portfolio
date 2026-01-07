import { Suspense, lazy, useState, useEffect } from "react";

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
  <div className="min-h-[20vh] bg-transparent flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-emerald-500/50 border-t-emerald-500 rounded-full animate-spin"></div>
  </div>
);

export const Home = () => {
  const [isPageReady, setIsPageReady] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Mark page as ready after initial render
    setIsPageReady(true);
    
    // Stagger the content reveal for smooth animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`min-h-screen text-foreground overflow-x-hidden transition-opacity duration-500 ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Navbar - Always loaded (critical) */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero - Always loaded (above the fold) */}
        <HeroSection />
        
        {/* Professional Journey Flow - Load only when page is ready */}
        {isPageReady && (
          <>
            <Suspense fallback={<SectionLoader />}>
              <AboutSection />
            </Suspense>
            
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
          </>
        )}
      </main>

      {/* Footer - Lazy loaded */}
      {isPageReady && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
    </div>
  );
};
