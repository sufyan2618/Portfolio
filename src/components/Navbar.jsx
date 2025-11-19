import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [savedScrollY, setSavedScrollY] = useState(0);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle navigation click
  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      scrollToSection(href);
    }, 100);
  };

  // Handle opening the menu
  useEffect(() => {
    if (isMenuOpen) {
      const currentScrollY = window.scrollY;
      setSavedScrollY(currentScrollY);

      document.body.style.position = 'fixed';
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    }
  }, [isMenuOpen]);

  // Handle closing the menu - FIXED VERSION
  useEffect(() => {
    if (!isMenuOpen) {
      // Always restore body styles when menu closes
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';

      // Restore scroll position
      requestAnimationFrame(() => {
        window.scrollTo(0, savedScrollY);
      });
    }
  }, [isMenuOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, []);
  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-700 ease-out",
          isScrolled
            ? "py-3 bg-black/90 backdrop-blur-xl border-b border-gray-800 shadow-lg"
            : "py-4 bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">

          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="group flex items-center space-x-3 z-10 cursor-pointer"
          >
            <div className="relative w-10 h-10">
              <div className="relative w-full h-full rounded-full border-2 border-gray-700 group-hover:border-emerald-500 group-hover:shadow-glow-emerald transition-all duration-300 overflow-hidden">
                <img
                  src="/logo.webp"
                  className="w-full h-full object-cover"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="relative">
              <span className="text-2xl font-bold text-gradient-animate">
                Sufyan
              </span>
              <span className="text-lg text-gray-400 ml-2 group-hover:text-emerald-400 transition-colors duration-300 hidden sm:inline">
                Portfolio
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 bg-gray-900 rounded-lg px-6 py-3 border border-gray-800">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer hover:scale-105",
                  activeSection === item.name
                    ? "text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-glow-emerald"
                    : "text-gray-300 hover:text-emerald-400 hover:bg-gray-800"
                )}
                onMouseEnter={() => setActiveSection(item.name)}
              >
                <span className="relative z-10">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-md bg-gray-900 border border-gray-800 text-gray-300 hover:text-emerald-400 hover:border-emerald-600 hover:shadow-glow-emerald transition-all duration-300 z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="relative z-10">
              {isMenuOpen ? (
                <X size={22} className="transform rotate-90 transition-transform duration-300" />
              ) : (
                <Menu size={22} className="transform rotate-0 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl"></div>

          {/* Menu Content */}
          <div className="relative flex flex-col items-center justify-center min-h-full py-20 space-y-6 z-10">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 p-3 rounded-md bg-gray-900 border border-gray-800 text-gray-300 hover:text-white z-20 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>

            {/* Nav Items */}
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                className="text-3xl font-medium text-gray-300 hover:text-white transition-all duration-300 px-8 py-4 rounded-lg border border-gray-800 hover:border-emerald-600 hover:shadow-glow-emerald bg-gray-900 hover:bg-gray-800 cursor-pointer hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                }}
              >
                <span className="text-gradient-animate">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
