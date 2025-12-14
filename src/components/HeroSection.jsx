import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import resume from "../assets/Sufyan_Liaqat_FullStack_Engineer.pdf"

const Typewriter = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(text.substring(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, 100);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return <span className="font-mono">{displayText}<span className="animate-pulse text-emerald-400">_</span></span>;
};

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 perspective-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-5 lg:pl-12 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-2.5">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-emerald-400 font-medium text-xs sm:text-sm tracking-[0.3em] uppercase font-mono"
              >
                <Typewriter text="Full-Stack Developer" delay={0.5} />
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-[0.9] tracking-tight">
                <motion.span 
                  className="text-white inline-block"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  style={{ 
                    textShadow: '0 0 40px rgba(16, 185, 129, 0.3), 0 0 80px rgba(16, 185, 129, 0.1)',
                    fontWeight: 800
                  }}
                >
                  Sufyan
                </motion.span>
                <br />
                <motion.span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 inline-block relative"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  style={{ 
                    fontWeight: 900,
                    filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.5))'
                  }}
                >
                  Liaqat
                </motion.span>
              </h1>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <p className="relative text-sm text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0 backdrop-blur-sm bg-black/30 p-3.5 rounded-lg border border-white/10">
                Specialized in <span className="text-emerald-400 font-semibold">MERN Stack</span>, <span className="text-emerald-400 font-semibold">React Native</span>, and <span className="text-emerald-400 font-semibold">FastAPI</span>. 
                Building scalable, production-ready applications with modern 3D interfaces.
              </p>
            </motion.div>  

            {/* Tech Stack Pills with Float Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-1.5 justify-center lg:justify-start"
            >
              {['React', 'Node.js', 'MongoDB', 'TypeScript', 'FastAPI', 'React Native', 'Three.js'].map((tech, index) => (
                <motion.span 
                  key={tech}
                  whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
                  className="px-2.5 py-0.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] text-gray-300 hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-2.5 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-full font-semibold text-white text-sm transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
              >
                <span className="flex items-center justify-center gap-2">
                  View My Work
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 border border-white/20 hover:border-emerald-500 hover:bg-emerald-500/10 backdrop-blur-md rounded-full font-semibold text-white text-sm transition-all duration-300"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-2.5 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/sufyan2618", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sufyanliaqat2", label: "LinkedIn" },
                { icon: Download, href: resume, label: "Resume", download: true },
              ].map(({ icon: Icon, href, label, download }) => (
                <motion.a
                  key={label}
                  href={href}
                  {...(download ? { download: true } : {})}
                  whileHover={{ y: -5, color: "#34d399" }}
                  className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:border-emerald-500 hover:bg-emerald-500/20 text-gray-400 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Photo with 3D Tilt */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="relative order-1 lg:order-2 flex justify-center perspective-1000"
          >
            <motion.div 
              style={{ y: y2 }}
              className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
            >
              {/* Glassmorphic Circle Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 backdrop-blur-xl animate-pulse" />
              
              {/* Photo container */}
              <motion.div 
                // whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative z-10 w-full h-full p-2 cursor-pointer"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-emerald-500/20 relative group">
                  <div className="absolute inset-0 bg-emerald-500/20 opacity-0 transition-opacity duration-300 z-20"></div>
                  <img
                    src='./hero.webp'
                    alt="Sufyan Liaqat"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="eager"
                  />
                </div>
              </motion.div>

              {/* Floating Orbs */}
              <motion.div 
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-10 h-10 bg-emerald-500/30 rounded-full blur-xl" 
              />
              <motion.div 
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 w-14 h-14 bg-teal-500/30 rounded-full blur-xl" 
              />
            </motion.div>
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

