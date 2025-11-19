import { Code, Smartphone, Brain, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import resume from "../assets/Sufyan_Liaqat_FullStack_Engineer.pdf"

export const AboutSection = () => {
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

    const section = document.getElementById('about');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skills = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable web applications with MERN stack, serving 2000+ active users.",
      delay: "delay-100"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile apps using React Native and Expo with modern UI/UX.",
      delay: "delay-200"
    },
    {
      icon: Brain,
      title: "DevOps & Cloud",
      description: "Deploying production applications with Docker, CI/CD, and cloud infrastructure.",
      delay: "delay-300"
    }
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen py-20 px-4 overflow-hidden bg-black"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">About</span>
            <span className="text-gradient-animate"> Me</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mx-auto animate-shimmer" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Content - About Text */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Main Description Card */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300 shadow-elegant">
                
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Software Engineering Student & Developer
                </h3>

                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    As a passionate software engineering student from <span className="text-white font-semibold">Lahore, Punjab</span>, 
                    I'm dedicated to crafting innovative digital solutions that solve real-world problems.
                  </p>
                  
                  <p>
                    I believe in clean code, elegant design, and user-centered thinking. Whether building web applications, 
                    mobile apps, or cloud solutions, I approach each project with <span className="text-white font-semibold">creativity</span> and 
                    <span className="text-white font-semibold"> precision</span>.
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {['React', 'Node.js', 'MongoDB', 'Express', 'React Native', 'FastAPI', 'Python'].map((tech, index) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-md text-xs text-gray-300 hover:border-emerald-500 hover:text-emerald-400 hover:shadow-glow-emerald transition-all duration-300 hover:scale-110 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="group px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-md font-semibold text-white transition-all duration-300 text-center shadow-glow-emerald hover:shadow-glow-teal hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a
                href={resume} 
                download
                className="px-6 py-3 border-2 border-emerald-600 hover:border-teal-500 hover:bg-emerald-950 rounded-md font-semibold text-emerald-400 hover:text-teal-400 transition-all duration-300 text-center hover:scale-105"
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
                  className={`bg-gray-900 border border-gray-800 rounded-lg p-5 hover:border-emerald-600 hover:shadow-glow-emerald transition-all duration-300 hover:scale-105 ${skill.delay} ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                    <div className="flex items-start gap-4">
                      {/* Icon Container */}
                      <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 flex-shrink-0 animate-float">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold text-white mb-2">
                          {skill.title}
                        </h4>
                        <p className="text-gray-400 leading-relaxed">
                          {skill.description}
                        </p>
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
