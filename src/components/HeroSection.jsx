import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import resume from "../assets/Sufyan_Liaqat_FullStack_Engineer.pdf"

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 lg:pl-12 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-2">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-emerald-400 font-medium text-sm tracking-wide uppercase"
              >
                Full-Stack Developer
              </motion.p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Sufyan</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
                  Liaqat
                </span>
              </h1>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0 backdrop-blur-sm bg-black/30 p-3 rounded-lg border border-white/10">
                Specialized in <span className="text-emerald-400 font-semibold">MERN Stack</span>, <span className="text-emerald-400 font-semibold">React Native</span>, and <span className="text-emerald-400 font-semibold">FastAPI</span>. 
                Building scalable, production-ready applications with modern 3D interfaces.
              </p>
            </motion.div>  

            {/* Tech Stack Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {['React', 'Node.js', 'MongoDB', 'TypeScript', 'FastAPI', 'React Native', 'Three.js'].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-xs text-gray-300 hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-full font-semibold text-white text-sm transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  View My Work
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <a
                href="#contact"
                className="px-6 py-2.5 border border-white/20 hover:border-emerald-500 hover:bg-emerald-500/10 backdrop-blur-md rounded-full font-semibold text-white text-sm transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/sufyan2618", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sufyanliaqat2", label: "LinkedIn" },
                { icon: Download, href: resume, label: "Resume", download: true },
              ].map(({ icon: Icon, href, label, download }) => (
                <a
                  key={label}
                  href={href}
                  {...(download ? { download: true } : {})}
                  className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:border-emerald-500 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-gray-400 hover:text-emerald-400 transition-colors duration-300" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Glassmorphic Circle Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 backdrop-blur-xl animate-pulse" />
              
              {/* Photo container */}
              <div className="relative z-10 w-full h-full p-2">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-emerald-500/20">
                  <img
                    src='./hero.webp'
                    alt="Sufyan Liaqat"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating Orbs */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-10 h-10 bg-emerald-500/30 rounded-full blur-xl" 
              />
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 w-14 h-14 bg-teal-500/30 rounded-full blur-xl" 
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex flex-col items-center z-20"
      >
        <span className="text-[10px] text-gray-400 mb-2 tracking-widest uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 text-emerald-400" />
      </motion.div>
    </section>
  );
};

