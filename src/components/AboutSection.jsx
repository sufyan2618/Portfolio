import { Briefcase, Code, Smartphone, Brain, Star, Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import resume from "../assets/Sufyan_Liaqat_FullStack_Engineer.pdf"

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      if (section) observer.unobserve(section);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack development with MERN stack, creating scalable web applications.",
      gradient: "from-purple-500 to-blue-500",
      delay: "delay-100"
    },
    {
      icon: Smartphone,
      title: "Android Development",
      description: "Native Android apps using Flutter and Dart with modern UI/UX principles.",
      gradient: "from-blue-500 to-cyan-500",
      delay: "delay-200"
    },
    {
      icon: Brain,
      title: "AI/ML Enthusiast",
      description: "Implementing intelligent solutions with cutting-edge AI technologies.",
      gradient: "from-cyan-500 to-pink-500",
      delay: "delay-300"
    }
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen py-16 px-4 overflow-hidden bg-gray-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-72 h-72 opacity-10 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, #06b6d4 50%, #ec4899 100%)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '70%',
          }}
        />
        <div 
          className="absolute w-64 h-64 opacity-8 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            bottom: '20%',
            left: '10%',
            animationDelay: '1s',
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-purple-400/20 animate-ping"
              size={Math.random() * 4 + 3}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-3">
            <Star className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-purple-400 font-medium text-sm tracking-wider uppercase">Get to know me</span>
            <Star className="w-4 h-4 text-cyan-400 animate-pulse delay-1000" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-white">About</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient"> Me</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          
          {/* Left Content - About Text */}
          <div className={`space-y-5 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Main Description Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-xl p-5 group-hover:border-purple-400/50 transition-all duration-300">
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Software Engineering Student & Developer
                </h3>

                <div className="space-y-3 text-gray-300 leading-relaxed text-sm">
                  <p>
                    As a passionate software engineering student from <span className="text-purple-400 font-semibold">Lahore, Punjab</span>, 
                    I'm dedicated to crafting innovative digital solutions that solve real-world problems.
                  </p>
                  
                  <p>
                    I believe in clean code, elegant design, and user-centered thinking. Whether building web applications, 
                    mobile apps, or exploring AI possibilities, I approach each project with <span className="text-cyan-400 font-semibold">creativity</span> and 
                    <span className="text-pink-400 font-semibold"> precision</span>.
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {['React', 'Node.js', 'MongoDB', 'Express', 'Flutter', 'Python'].map((tech, index) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 rounded-full text-xs text-gray-300 hover:border-purple-400/50 hover:text-purple-400 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="group relative px-5 py-2.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <a
                href={resume} 
                download
                className="group px-5 py-2.5 border-2 border-gray-700 hover:border-purple-400 rounded-full font-semibold text-gray-300 hover:text-white text-sm transition-all duration-300 hover:bg-gray-800/50 backdrop-blur-sm text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Download CV
                  <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right Content - Skills Cards */}
          <div className={`space-y-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-300 hover:scale-105 ${skill.delay} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-10 rounded-xl blur-lg transition-all duration-300`} />
                  
                  {/* Main Card */}
                  <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 group-hover:border-gray-600/70 transition-all duration-300 overflow-hidden">
                    
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                      <div className={`w-full h-full bg-gradient-to-br ${skill.gradient} rounded-full blur-xl`} />
                    </div>

                    <div className="relative flex items-start gap-3">
                      {/* Icon Container */}
                      <div className={`relative p-3 rounded-lg bg-gradient-to-br ${skill.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-20 rounded-lg blur group-hover:opacity-30 transition-opacity duration-300`} />
                        <Icon className="relative w-5 h-5 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          {skill.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
