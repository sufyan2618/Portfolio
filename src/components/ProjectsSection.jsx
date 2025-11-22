import { ArrowRight, ExternalLink, Github, Star, Eye } from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Real Estate Property Analyzer",
    description: "Comprehensive real estate analysis platform that calculates key investment metrics including CFBT, Cash on Cash Return, DSCR, and Purchase Amount. Features automated rent comparison module that scrapes apartments.com data to provide competitive rental pricing insights for property investments.",
    image: "/projects/real-estate-analyzer.webp",
    tags: ["Node.js", "Bull Queue", "GPT API", "MongoDB", "React", "Web Scraping", "Real Estate"],
    demoUrl: "http://152.70.131.240/",
    githubUrl: "https://github.com/sufyan2618",
    featured: true,
    category: "Full Stack / Real Estate Tech"
  },
  {
    id: 2,
    title: "Online-Identity",
    description: "Create stunning portfolios with Online-Identity, a full-stack MERN application featuring user authentication, data caching, dynamic portfolio creation, and real-time updates.",
    image: "/projects/portfolio_creator.webp",
    tags: ["MERN", "Redis", "Github Action", "Nginx", "Digital Ocean"],
    demoUrl: "https://online-identity.tech",
    githubUrl: "https://github.com/sufyan2618/portfolio_creator",
    featured: true,
    category: "Full Stack / Dev Ops"
  },
  {
    id: 3,
    title: "AI Voice Assistant",
    description: "Voice-activated AI assistant web app built with MERN stack featuring natural speech interaction and real-time responses.",
    image: "/projects/assistant.webp",
    tags: ["React", "Node.js", "MongoDB", "Gemini AI", "Web Speech API"],
    demoUrl: "https://novavoices.sufyanliaqat.me",
    githubUrl: "https://github.com/sufyan2618/Nova-Voices",
    featured: true,
    category: "AI / MERN Stack"
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
    title: "E-commerce with AI Chatbot",
    description: "Full-featured e-commerce platform with user authentication, admin panel and a custom chatbot built with NLP.js.",
    image: "/projects/lals.webp",
    tags: ["React", "Node.js", "Express", "MongoDB", "NLP.js"],
    demoUrl: "https://lals.sufyanliaqat.me",
    githubUrl: "https://github.com/sufyan2618/Lals",
    featured: true,
    category: "Full Stack / AI"
  },
];

export const ProjectsSection = () => {
  const scrollContainerRef = useRef(null);

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
      className="relative min-h-screen flex items-start justify-center overflow-hidden px-4 py-20"
    >
      <div className="container mx-auto max-w-7xl relative z-10 h-full flex flex-col justify-center py-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Featured</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500"> Projects</span>
          </h2>

          <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects showcasing expertise in full-stack development,
            AI integration, and modern web technologies.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Projects Container - reduced spacing */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          {/* Scroll Navigation */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-3">
              <button
                onClick={scrollLeft}
                className="p-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:border-emerald-600 hover:bg-emerald-600/20 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                aria-label="Scroll left"
              >
                <ArrowRight className="w-5 h-5 text-gray-400 hover:text-emerald-400 rotate-180 transition-colors duration-300" />
              </button>
              <button
                onClick={scrollRight}
                className="p-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:border-teal-600 hover:bg-teal-600/20 hover:text-teal-400 transition-all duration-300 hover:scale-110"
                aria-label="Scroll right"
              >
                <ArrowRight className="w-5 h-5 text-gray-400 hover:text-teal-400 transition-colors duration-300" />
              </button>
            </div>

            <div className="text-sm text-gray-400">
              Scroll to explore →
            </div>
          </div>

          {/* Horizontal Scrolling Projects */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-80 sm:w-96 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-500 group"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 z-20">
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full p-2 shadow-lg shadow-emerald-500/50 animate-pulse">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 border border-white/20 rounded-full hover:border-emerald-500 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110"
                      aria-label={`View ${project.title} demo`}
                    >
                      <Eye className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 border border-white/20 rounded-full hover:border-teal-500 hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-110"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1.5 bg-black/50 backdrop-blur-md border border-emerald-500/30 rounded-full text-xs text-emerald-400 font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300 hover:border-teal-500 hover:text-teal-400 transition-all duration-300 hover:scale-110"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-400">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description.length > 120
                      ? `${project.description.substring(0, 120)}...`
                      : project.description}
                  </p>

                  {/* Links */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <div className="flex gap-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-125"
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-teal-400 transition-all duration-300 hover:scale-125"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={18} />
                      </a>
                    </div>

                    <div className="text-sm text-emerald-500 font-semibold">
                      0{index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/sufyan2618"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:shadow-lg hover:shadow-emerald-500/40 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            Explore All Projects on GitHub
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

