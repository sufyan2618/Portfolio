import { Briefcase, Calendar, MapPin, ArrowRight, Building2, Star, Sparkles, Code2, Users, Award } from "lucide-react";
import { useEffect, useState } from "react";

const experiences = [
  {
    id: 1,
    company: "BugMonks",
    logo: "/bug-monks.jpg",
    role: "Junior Full Stack Developer",
    location: "Onsite - Lahore, Pakistan",
    duration: "April 2025 - Present",
    startDate: "Apr 2025",
    type: "Full-time",
    description: "Working on multiple enterprise-level SaaS projects, contributing to both frontend and backend development. Built production-grade applications serving 2000+ active users with focus on scalability, performance optimization, and modern architecture patterns.",
    responsibilities: [
      "Developed a full-stack real estate analysis platform that scrapes and analyzes rental data from apartments.com, calculating Cap Rate, DSCR, CFBT, and other key financial metrics using Bull queues for background processing",
      "Built a LinkedIn email marketing tool with web scraping capabilities and bulk campaign automation for lead generation",
      "Implemented secure authentication systems, payment integrations (Stripe), and interactive admin dashboards serving 2k+ active users",
      "Optimized MongoDB and PostgreSQL database queries, reducing API response times by 30% through indexing and query optimization",
      "Deployed applications using Docker, NGINX reverse proxy, and CI/CD pipelines on Digital Ocean and AWS",
      "Collaborated with cross-functional teams using Agile methodologies and version control with Git/GitHub"
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "FastAPI", "Bull", "GraphQL", "Redis", "TypeScript", "Docker", "NGINX", "AWS", "Digital Ocean", "Stripe", "Git", "Postman", "Swagger", "Jira"],
    achievements: [
      "Successfully delivered multiple production-grade features within tight deadlines for enterprise SaaS platforms",
      "Reduced API response times by 30% through database optimization and caching strategies",
      "Built applications serving 2000+ active users with 99.9% uptime",
      "Implemented scalable microservices architecture using Node.js and FastAPI"
    ],
    isActive: true,
    companyType: "SaaS Development",
    gradient: "from-purple-500 to-cyan-500"
  },
  {
    id: 2,
    company: "Freelance",
    logo: "/freelance-icon.png",
    role: "Full Stack Developer",
    location: "Remote",
    duration: "December 2024 - April 2025",
    startDate: "Dec 2024",
    type: "Contract",
    description: "Delivered end-to-end web applications for multiple clients, focusing on e-commerce solutions, AI-powered SaaS platforms, and production-grade deployments with modern DevOps practices.",
    responsibilities: [
      "Developed a feature-rich e-commerce web application with user authentication, shopping cart, order management, and integrated payment system using Stripe and MongoDB",
      "Built an AI-powered SaaS platform that conducts user interviews via chat and generates personalized biographies using Gemini API and Node.js backend",
      "Implemented responsive UI/UX using React.js, Tailwind CSS, and modern design patterns for optimal user experience",
      "Deployed production-grade applications on Digital Ocean with Docker containerization, NGINX reverse proxy, and automated CI/CD pipelines using GitHub Actions",
      "Integrated third-party APIs including payment gateways, AI services, and cloud storage solutions",
      "Managed full project lifecycle from requirements gathering to deployment and maintenance"
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Docker", "NGINX", "Tailwind CSS", "Stripe", "Gemini API", "Digital Ocean", "GitHub Actions", "Redis", "Cloudinary", "EJS"],
    achievements: [
      "Successfully delivered multiple client projects on time with 100% client satisfaction",
      "Implemented production-ready CI/CD pipelines reducing deployment time by 70%",
      "Built scalable applications handling thousands of concurrent users",
      "Gained hands-on experience with modern DevOps practices and cloud infrastructure"
    ],
    isActive: false,
    companyType: "Freelance/Contract",
    gradient: "from-cyan-500 to-pink-500"
  }
];

export const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('experience');
    if (section) observer.observe(section);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Initialize active tabs for each experience
    const initialTabs = {};
    experiences.forEach(exp => {
      initialTabs[exp.id] = 'overview';
    });
    setActiveTab(initialTabs);
    
    return () => {
      if (section) observer.unobserve(section);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleTabChange = (expId, tab) => {
    setActiveTab(prev => ({ ...prev, [expId]: tab }));
  };

  return (
    <section 
      id="experience" 
      className="relative min-h-screen py-16 px-4 overflow-hidden bg-gray-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-72 h-72 opacity-10 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, #06b6d4 50%, #ec4899 100%)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '15%',
            left: '75%',
          }}
        />
        <div 
          className="absolute w-64 h-64 opacity-8 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            bottom: '25%',
            left: '5%',
            animationDelay: '1s',
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
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
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-3">
            <Briefcase className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-purple-400 font-medium text-sm tracking-wider uppercase">Professional Journey</span>
            <Building2 className="w-4 h-4 text-cyan-400 animate-pulse delay-1000" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Work</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient"> Experience</span>
          </h2>
          
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Over 1 year of professional experience in full-stack development, building scalable SaaS products and modern web applications.
          </p>
          
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${experience.gradient} opacity-0 group-hover:opacity-10 rounded-xl blur-lg transition-all duration-300`} />
              
              {/* Main Card */}
              <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-xl overflow-hidden group-hover:border-gray-600/70 transition-all duration-300">
                
                {/* Header Section */}
                <div className="p-6 sm:p-8 border-b border-gray-700/50">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    
                    {/* Company Info */}
                    <div className="flex items-start gap-4">
                      {/* Company Logo/Icon */}
                      <div className={`relative p-3 rounded-lg bg-gradient-to-br ${experience.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-20 rounded-lg blur group-hover:opacity-30 transition-opacity duration-300`} />
                        <Building2 className="relative w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                            {experience.role}
                          </h3>
                          {experience.isActive && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-xs text-green-400">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                              Active
                            </span>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1 font-semibold text-purple-400">
                            <Building2 className="w-4 h-4" />
                            {experience.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {experience.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-xs text-cyan-400">
                            {experience.type}
                          </span>
                          <span className="px-2 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-xs text-purple-400">
                            {experience.companyType}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  
                  {/* Tab Navigation */}
                  <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-700/50 pb-4">
                    {['overview', 'responsibilities', 'technologies', 'achievements'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => handleTabChange(experience.id, tab)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          activeTab[experience.id] === tab
                            ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/50 text-purple-400'
                            : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="min-h-[200px]">
                    
                    {/* Overview Tab */}
                    {activeTab[experience.id] === 'overview' && (
                      <div className="space-y-4 animate-fade-in">
                        <p className="text-gray-300 leading-relaxed text-base">
                          {experience.description}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 mt-6">
                          <div className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                            <div className="flex items-center gap-2 mb-2">
                              <Users className="w-4 h-4 text-purple-400" />
                              <span className="text-sm font-semibold text-purple-400">Team Collaboration</span>
                            </div>
                            <p className="text-gray-400 text-sm">Working with cross-functional teams on enterprise SaaS solutions</p>
                          </div>
                          <div className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                            <div className="flex items-center gap-2 mb-2">
                              <Code2 className="w-4 h-4 text-cyan-400" />
                              <span className="text-sm font-semibold text-cyan-400">Full-Stack Development</span>
                            </div>
                            <p className="text-gray-400 text-sm">End-to-end development of features and integrations</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Responsibilities Tab */}
                    {activeTab[experience.id] === 'responsibilities' && (
                      <div className="space-y-3 animate-fade-in">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/30 transition-colors duration-300">
                            <ArrowRight className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm leading-relaxed">{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies Tab */}
                    {activeTab[experience.id] === 'technologies' && (
                      <div className="animate-fade-in">
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <span 
                              key={tech}
                              className="px-3 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg text-sm text-gray-300 hover:border-purple-400/50 hover:text-purple-400 transition-all duration-300 cursor-default"
                              style={{ animationDelay: `${idx * 50}ms` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements Tab */}
                    {activeTab[experience.id] === 'achievements' && (
                      <div className="space-y-3 animate-fade-in">
                        {experience.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/30 transition-colors duration-300">
                            <Award className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
