import { ArrowRight, ExternalLink, Github, Star, Sparkles, Eye, Code2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "AI Voice Assistant",
    description: "Voice-activated AI assistant web app built with MERN stack featuring natural speech interaction and real-time responses.",
    image: "/projects/assistant.webp",
    tags: ["React", "Node.js", "MongoDB", "Gemini AI", "Web Speech API"],
    demoUrl: "https://nova-voices.onrender.com/",
    githubUrl: "https://github.com/sufyan2618/Nova-Voices",
    featured: true,
    category: "AI / MERN Stack"
  },
  {
    id: 2,
    title: "Devnity AI Code Editor",
    description: "AI-powered Code Editor built with React and Next.js, having Convex for database and Gemini AI for error correction ",
    image: "/projects/editor.webp",
    tags: ["React", "Next.js", "Tailwind CSS", "Convex", "Gemini AI"],
    demoUrl: "https://devnity-livid.vercel.app/",
    githubUrl: "https://github.com/sufyan2618/Devnity",
    featured: true,
    category: "AI / Web Development"
  },
  {
    id: 4,
    title: "Modern Portfolio Website",
    description: "Stunning dark-themed portfolio website with advanced animations, glassmorphism effects, and responsive design.",
    image: "/projects/portfolio.webp",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://sufyanliaqat.me",
    githubUrl: "https://github.com/sufyan2618/Portfolio",
    featured: true,
    category: "Frontend / Web Development"
  },
  {
    id: 3,
    title: "Linkit: A Chat App",
    description: " Real-time chat application built with React, Node.js, and Socket.IO featuring user authentication, file sharing .",
    image: "/projects/chatapp.webp",
    tags: ["React", "Tailwind CSS", "Node.js", "Socket.IO", "Express"],
    demoUrl: "https://chat-app-mv76.onrender.com",
    githubUrl: "https://github.com/sufyan2618/Chat-App",
    featured: true,
    category: "Web Development"
  },
  
    {
      id: 5,
      title: "Wrap VPN",
      description: "Wrap VPN is a secure, cross-platform VPN app built with Flutter, featuring OVPN support, Supabase authentication, and a custom Android VPN engine.",
      image: "/projects/vpn.webp",
      tags: ["Flutter", "Dart", "Supabase", "OVPN", "Android", "iOS"],
      demoUrl: "https://github.com/sufyan2618/vpn_app",
      githubUrl: "https://github.com/sufyan2618/vpn_app",
      featured: true,
      category: "Cross-Platform App / Flutter"  
    },
  {
    id: 6,
    title: "E-commerce with AI Chatbot",
    description: "Full-featured e-commerce platform with user authentication, admin panel and a custom chatbot built with NLP.js.",
    image: "/projects/lals.webp",
    tags: ["React", "Node.js", "Express", "MongoDB", "NLP.js"],
    demoUrl: "https://lals-m9p7.onrender.com",
    githubUrl: "https://github.com/sufyan2618/Lals",
    featured: true,
    category: "Full Stack / AI"
  },
];

export const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="projects" 
      className="relative min-h-screen flex items-start justify-center overflow-hidden bg-gray-950 px-4 py-8"
    >
      {/* Animated background elements - reduced size */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-72 h-72 opacity-15 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, #06b6d4 50%, #ec4899 100%)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '20%',
            right: '10%',
          }}
        />
        <div 
          className="absolute w-64 h-64 opacity-10 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            bottom: '10%',
            left: '5%',
            animationDelay: '1s',
          }}
        />

        {/* Reduced floating particles */}
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

      <div className="container mx-auto max-w-7xl relative z-10 h-full flex flex-col justify-center py-12">
        {/* Section Header - reduced spacing */}
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-3">
            <Code2 className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-purple-400 font-medium text-sm tracking-wider uppercase">My Work</span>
            <Code2 className="w-4 h-4 text-cyan-400 animate-pulse delay-1000" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Featured</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient"> Projects</span>
          </h2>
          
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects showcasing expertise in full-stack development, 
            AI integration, and modern web technologies.
          </p>
          
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Projects Container - reduced spacing */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Scroll Navigation - smaller */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-3">
              <button
                onClick={scrollLeft}
                className="group p-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full hover:border-purple-400/50 hover:bg-gray-700/50 transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 rotate-180 transition-colors duration-300" />
              </button>
              <button
                onClick={scrollRight}
                className="group p-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full hover:border-purple-400/50 hover:bg-gray-700/50 transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </button>
            </div>
            
            <div className="text-xs text-gray-400">
              Scroll to explore → 
            </div>
          </div>

          {/* Horizontal Scrolling Projects - smaller cards */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-3"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative flex-none w-72 sm:w-80 transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible ? 'slideInRight 0.8s ease-out forwards' : '',
                }}
              >
                {/* Featured Badge - smaller */}
                {project.featured && (
                  <div className="absolute -top-1 -right-1 z-20">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full p-1.5 animate-pulse">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                  </div>
                )}

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 rounded-xl blur-lg transition-all duration-300" />
                
                {/* Main Card - smaller */}
                <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-xl overflow-hidden group-hover:border-gray-600/70 transition-all duration-300">
                  
                  {/* Image Container - smaller */}
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Actions - smaller */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900/80 backdrop-blur-sm border border-gray-600/50 rounded-full hover:border-purple-400/50 hover:bg-purple-500/20 transition-all duration-300 group/btn"
                      >
                        <Eye className="w-4 h-4 text-gray-300 group-hover/btn:text-purple-400 transition-colors duration-300" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900/80 backdrop-blur-sm border border-gray-600/50 rounded-full hover:border-cyan-400/50 hover:bg-cyan-500/20 transition-all duration-300 group/btn"
                      >
                        <Github className="w-4 h-4 text-gray-300 group-hover/btn:text-cyan-400 transition-colors duration-300" />
                      </a>
                    </div>

                    {/* Category Badge - smaller */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-gray-900/80 backdrop-blur-sm border border-gray-600/50 rounded-full text-xs text-purple-400 font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content - reduced padding */}
                  <div className="p-4">
                    {/* Tags - smaller */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-0.5 bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 rounded-full text-xs text-gray-300 hover:border-purple-400/50 hover:text-purple-400 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 rounded-full text-xs text-gray-400">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Title - smaller */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Description - smaller */}
                    <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Links - smaller spacing */}
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex gap-2">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                        >
                          <ExternalLink size={16} />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        >
                          <Github size={16} />
                        </a>
                      </div>
                      
                      <div className="text-xs text-gray-500">
                        0{index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center mt-12 mb-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <a
        href="https://github.com/sufyan2618"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
      >
        <span className="relative z-10">Explore All Projects on GitHub</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
    </div>
  </div>
</section>
  );
};
