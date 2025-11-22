import { ArrowUp, Heart, Coffee, Code, Sparkles, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/sufyan2618", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sufyanliaqat2", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sufyan.li2618@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-black/40 backdrop-blur-xl border-t border-white/10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-teal-900/10 to-emerald-900/10 animate-gradient-shift" />
      
      <div className="container mx-auto max-w-7xl relative z-10 px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 shadow-lg shadow-emerald-500/20">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
                  Sufyan Liaqat
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-Stack Developer crafting exceptional digital experiences with modern technologies. 
                Building the future, one line of code at a time.
              </p>
              <div className="flex items-center gap-2 text-emerald-400 text-sm">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Available for new opportunities</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-emerald-600 to-teal-600 rounded-full" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-emerald-400 transition-all duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-emerald-500 group-hover:w-4 transition-all duration-300 rounded-full" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Section */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-teal-600 to-emerald-600 rounded-full" />
                Connect
              </h3>
              <div className="flex gap-3 mb-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:border-emerald-600 hover:bg-emerald-600/20 transition-all duration-300 hover:scale-110 hover:-rotate-6"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-gray-400 hover:text-emerald-400 transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
              <p className="text-gray-400 text-sm">
                Let's collaborate on something amazing!
              </p>
            </div>
          </div>

          {/* Divider with gradient */}
          <div className="relative my-8">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-black/40 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse delay-150" />
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse delay-300" />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>&copy; {new Date().getFullYear()}</span>
              <span className="text-emerald-500">•</span>
              <span>Sufyan Liaqat</span>
              <span className="text-teal-500">•</span>
              <span>All rights reserved</span>
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Crafted with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-400" />
              <span>in Lahore</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group p-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg hover:shadow-emerald-500/40 hover:scale-110 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={18} className="transform transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Animated bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600" />
    </footer>
  );
};

