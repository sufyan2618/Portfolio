import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-black/50 backdrop-blur-md border-b border-white/10"
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
              <div className="relative w-full h-full rounded-full border-2 border-white/10 group-hover:border-emerald-500 transition-all duration-300 overflow-hidden">
                <img
                  src="/logo.webp"
                  className="w-full h-full object-cover"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="relative">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-teal-500">
                Sufyan
              </span>
              <span className="text-lg text-gray-400 ml-2 group-hover:text-emerald-400 transition-colors duration-300 hidden sm:inline">
                Portfolio
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeSection === item.name
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                )}
                onMouseEnter={() => setActiveSection(item.name)}
              >
                {activeSection === item.name && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-linear-to-r from-emerald-600 to-teal-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-emerald-400 hover:border-emerald-600 transition-all duration-300 z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-xl pt-24 px-4"
          >
            <div className="flex flex-col items-center space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full max-w-xs py-4 rounded-xl bg-white/5 border border-white/10 text-lg font-medium text-gray-300 hover:text-white hover:bg-emerald-600/20 hover:border-emerald-500/50 transition-all duration-300"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

