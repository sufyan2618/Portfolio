import { cn } from "@/lib/utils";
import { Menu, X, Sparkles, Zap, Code2 } from "lucide-react";
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Animated background particles and gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute w-96 h-96 opacity-20 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, #06b6d4 50%, #ec4899 100%)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '-12rem',
            right: '-12rem',
          }}
        />
        <div
          className="absolute w-96 h-96 opacity-15 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            bottom: '-12rem',
            left: '-12rem',
            animationDelay: '1s',
          }}
        />
      </div>

      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-700 ease-out",
          isScrolled
            ? "py-2 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/30 shadow-2xl shadow-purple-500/5"
            : "py-4 bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">

          {/* Logo with advanced animations */}
          <a
            className="relative group flex items-center space-x-3 z-10"
            href="#hero"
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
              <div className="relative w-full h-full rounded-full border border-gray-700/50 group-hover:border-purple-400/50 transition-all duration-300 overflow-hidden">
                <img
                  src="/logo.png"
                  className="w-full h-full object-cover"
                  alt="Logo"
                />
              </div>
            </div>


            <div className="relative">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient">
                Sufyan
              </span>
              <span className="text-lg text-gray-400 ml-2 group-hover:text-gray-300 transition-colors duration-300 hidden sm:inline">
                Portfolio
              </span>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          </a>

          {/* Desktop Navigation with glassmorphism */}
          <div className="hidden md:flex items-center space-x-2 bg-gray-900/30 backdrop-blur-xl rounded-full px-6 py-3 border border-gray-700/50 shadow-lg shadow-purple-500/10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group",
                  activeSection === item.name
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                )}
                onMouseEnter={() => setActiveSection(item.name)}
              >
                {activeSection === item.name && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-full blur-sm"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                  </>
                )}
                <span className="relative z-10">{item.name}</span>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative p-3 rounded-full bg-gray-900/50 backdrop-blur-md border border-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 group"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative z-10">
              {isMenuOpen ? (
                <X size={20} className="transform rotate-90 transition-transform duration-300" />
              ) : (
                <Menu size={20} className="transform rotate-0 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 z-40 md:hidden transition-all duration-500 ease-out",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-gray-950/95 backdrop-blur-xl"></div>

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>

          {/* Menu Content */}
          <div className="relative flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={cn(
                  "relative group text-2xl sm:text-3xl font-medium text-gray-300 hover:text-white transition-all duration-500",
                  "transform hover:scale-110 px-8 py-4 rounded-2xl backdrop-blur-sm",
                  "border border-gray-700/30 hover:border-purple-400/50 bg-gray-900/20 hover:bg-gray-900/40"
                )}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMenuOpen ? 'fadeInUp 0.6s ease-out forwards' : '',
                }}
              >
                <span className="relative z-10 bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-cyan-400">
                  {item.name}
                </span>

                {/* Animated underline */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-500"></div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </a>
            ))}

            {/* Close hint */}
            <div className="absolute bottom-8 text-gray-500 text-sm animate-pulse">
              Tap anywhere to close
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
