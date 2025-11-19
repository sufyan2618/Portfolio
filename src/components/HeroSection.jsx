import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import resume from "../assets/Sufyan_Liaqat_FullStack_Engineer.pdf"

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center h-screen py-16">
          
          {/* Left Content - Much Smaller */}
          <div className="space-y-4 lg:pl-12   text-center lg:text-left order-2 lg:order-1">
            {/* Greeting - Smaller */}
            <div className={`space-y-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 animate-slide-in-left' : 'opacity-0 translate-y-10'}`}>
              <p className="text-emerald-400 font-medium text-sm tracking-wide uppercase animate-shimmer">
                Full-Stack Developer
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-white animate-fade-in">Sufyan</span>
                <br />
                <span className="text-gradient-animate">
                  Liaqat
                </span>
              </h1>
            </div>

            {/* Role & Description - Much Smaller */}
            <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative">
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                  Specialized in <span className="text-white font-semibold">MERN Stack</span>, <span className="text-white font-semibold">React Native</span>, and <span className="text-white font-semibold">FastAPI</span>. 
                  Building scalable, production-ready applications.
                </p>
              </div>  

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {['React', 'Node.js', 'MongoDB', 'TypeScript', 'FastAPI', 'React Native'].map((tech, index) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-md text-xs text-gray-300 hover:border-emerald-500 hover:text-emerald-400 hover:shadow-glow-emerald transition-all duration-300 hover:scale-110 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons - Smaller */}
            <div className={`flex flex-col sm:flex-row gap-3 justify-center lg:justify-start transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0 animate-bounce-in' : 'opacity-0 translate-y-10'}`}>
              <a
                href="#projects"
                className="group px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-md font-semibold text-white text-sm transition-all duration-300 shadow-glow-emerald hover:shadow-glow-teal hover:scale-105"
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
                className="px-6 py-3 border-2 border-emerald-600 hover:border-teal-500 hover:bg-emerald-950 rounded-md font-semibold text-emerald-400 hover:text-teal-400 text-sm transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links - Repositioned and Smaller */}
            <div className={`flex gap-4 justify-center lg:justify-start mb-8 lg:mb-0 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0 animate-scale-in' : 'opacity-0 translate-y-10'}`}>
              {[
                { icon: Github, href: "https://github.com/sufyan2618", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sufyanliaqat2", label: "LinkedIn" },
                { icon: Download, href: resume, label: "Resume", download: true },
              ].map(({ icon: Icon, href, label, download }, index) => (
                <a
                  key={label}
                  href={href}
                  {...(download ? { download: true } : {})}
                  className="p-2.5 bg-gray-900 border border-gray-800 rounded-md hover:border-emerald-500 hover:bg-gray-800 hover:shadow-glow-emerald transition-all duration-300 hover:scale-110 hover:-rotate-6 animate-bounce-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-emerald-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Photo - Much Smaller */}
          <div className={`relative order-1 lg:order-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative max-w-[170px] mx-auto lg:max-w-[280px]">
              
              {/* Animated border rings - smaller */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-1 animate-spin-slow">
                <div className="w-full h-full bg-gray-950 rounded-full" />
              </div>
              
              {/* Glow effects - smaller */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-lg animate-pulse" />
              <div className="absolute inset-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-md animate-pulse delay-1000" />
              
              {/* Photo container */}
              <div className="relative z-10 p-1">
                <div className="relative overflow-hidden rounded-full bg-gradient-to-br from-gray-800 to-gray-900 p-1">
                  <img
                    src='./hero.webp'
                    alt="Sufyan Liaqat - Full Stack Developer"
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover rounded-full hover:grayscale-0 transition-all duration-500 hover:scale-105"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-cyan-900/20 rounded-full" />
                </div>
              </div>

              {/* Floating elements around photo - smaller */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-1000" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-500 rounded-full animate-bounce delay-500" />
              <div className="absolute top-1/2 -left-4 w-2 h-2 bg-pink-500 rounded-full animate-ping" />
            </div>

            {/* Status indicator - smaller */}
            <div className="absolute max-[290px]:mt-8 bottom-1  -right-6 md:right-30 lg:right-1 xl:right-10 flex items-center gap-1.5 bg-gray-900/80 backdrop-blur-sm px-2 py-1 rounded-full border border-gray-700/50">
              <div className="w-1.5 h-1.5 max-[290px]:w-1 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs max-[290px]:text-[10px] text-gray-300">Available for work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator  */}
      <div className="absolute mb-36 lg:mb-0 bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:flex flex-col items-center animate-bounce z-20">
        <span className="text-xs text-gray-400 mb-1">Scroll to explore</span>
        <ArrowDown className="h-5 w-5 text-purple-400" />
      </div>
    </section>
  );
};
