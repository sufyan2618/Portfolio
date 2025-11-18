import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import resume from "../assets/Sufyan_Liaqat_FullStack_Engineer.pdf"

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen  flex items-center justify-center overflow-hidden bg-gray-950"
    >
      {/* Animated background elements - smaller */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-64 h-64 opacity-20 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, #06b6d4 50%, #ec4899 100%)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            right: '10%',
          }}
        />
        <div 
          className="absolute w-56 h-56 opacity-15 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            bottom: '20%',
            left: '15%',
            animationDelay: '1s',
          }}
        />
        
        {/* Reduced floating particles */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-purple-400/20 animate-ping"
              size={Math.random() * 4 + 2}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center h-screen py-16">
          
          {/* Left Content - Much Smaller */}
          <div className="space-y-4 lg:pl-12   text-center lg:text-left order-2 lg:order-1">
            {/* Greeting - Smaller */}
            <div className={`space-y-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-purple-400 font-medium text-sm tracking-wide">
                👋 Hello, I'm
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                <span className="text-white">Sufyan</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient">
                  Liaqat
                </span>
              </h1>
            </div>

            {/* Role & Description - Much Smaller */}
            <div className={`space-y-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-200 mb-2">
                  Full-Stack Developer &
                  <span className="text-cyan-400"> Software Engineer</span>
                </h2>
                
                <p className="text-sm text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                  I craft exceptional digital experiences using the 
                  <span className="text-purple-400 font-semibold"> MERN Stack</span>, <span className="text-pink-400 font-semibold">React Native</span>, and 
                  <span className="text-cyan-400 font-semibold"> FastAPI</span>. 
                  Passionate about building scalable, performant, and production-ready applications.
                </p>
              </div>  

              {/* Tech Stack Pills - Smaller */}
              <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                {['React', 'Node.js', 'MongoDB', 'TypeScript', 'FastAPI', 'React Native', 'Expo'].map((tech, index) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full text-xs text-gray-300 hover:border-purple-400/50 hover:text-purple-400 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons - Smaller */}
            <div className={`flex flex-col sm:flex-row gap-2 justify-center lg:justify-start transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a
                href="#projects"
                className="group relative px-5 py-2.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <a
                href="#contact"
                className="group px-5 py-2.5 border-2 border-gray-700 hover:border-purple-400 rounded-full font-semibold text-gray-300 hover:text-white text-sm transition-all duration-300 hover:bg-gray-800/50 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center gap-2">
                  <Mail size={14} />
                  Get In Touch
                </span>
              </a>
            </div>

            {/* Social Links - Repositioned and Smaller */}
            <div className={`flex gap-3 justify-center lg:justify-start mb-8 lg:mb-0 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { icon: Github, href: " https://github.com/sufyan2618", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sufyanliaqat2", label: "LinkedIn" },
                { icon: Download, href: resume, label: "Resume", download: true },
              ].map(({ icon: Icon, href, label, download }) => (
                <a
                  key={label}
                  href={href}
                  {...(download ? { download: true } : {})}
                  className="group p-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full hover:border-purple-400/50 hover:bg-gray-700/50 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
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
                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
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
