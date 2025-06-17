import { ArrowUp, Heart, Coffee, Code } from "lucide-react";
import { useState, useEffect } from "react";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('footer');
    if (footer) observer.observe(footer);
    
    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <footer className="relative bg-gray-950 border-t border-gray-800/30 overflow-hidden">
      {/* Minimal background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-cyan-900/5" />

      <div className="container mx-auto max-w-7xl relative z-10 px-6 py-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Single Row Layout */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Left Side - Brand & Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-400" />
                <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Sufyan.co
                </span>
              </div>
              <span className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} All rights reserved.
              </span>
            </div>

            {/* Center - Made with love */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-400" />
              <span>by Sufyan</span>
            </div>

            {/* Right Side - Back to Top */}
            <button
              onClick={scrollToTop}
              className="group p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/25"
              aria-label="Back to top"
            >
              <ArrowUp size={18} className="transform transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-50" />
    </footer>
  );
};
