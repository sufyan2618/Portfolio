import { Briefcase, Calendar, MapPin, ArrowRight, Building2, Code2, Users, Award } from "lucide-react";
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
    companyType: "SaaS Development"
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
    companyType: "Freelance/Contract"
  }
];

export const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    
    // Initialize active tabs for each experience
    const initialTabs = {};
    experiences.forEach(exp => {
      initialTabs[exp.id] = 'overview';
    });
    setActiveTab(initialTabs);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleTabChange = (expId, tab) => {
    setActiveTab(prev => ({ ...prev, [expId]: tab }));
  };

  return (
    <section 
      id="experience" 
      className="relative min-h-screen py-20 px-4 overflow-hidden bg-black"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Work</span>
            <span className="text-gradient-animate"> Experience</span>
          </h2>
          
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Over 1 year of professional experience in full-stack development, building scalable SaaS products and modern web applications.
          </p>
          
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mx-auto mt-6 animate-shimmer" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Main Card */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-emerald-600 hover:shadow-glow-emerald transition-all duration-300 hover:scale-[1.02] animate-fade-in">
                
                {/* Header Section */}
                <div className="p-6 sm:p-8 border-b border-gray-800">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    
                    {/* Company Info */}
                    <div className="flex items-start gap-4">
                      {/* Company Logo/Icon */}
                      <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 flex-shrink-0 animate-float">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold text-white">
                            {experience.role}
                          </h3>
                          {experience.isActive && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-500/20 border border-emerald-500/50 rounded-md text-xs text-emerald-400 animate-glow-pulse">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                              Active
                            </span>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1 font-semibold text-emerald-400">
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
                          <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-md text-xs text-gray-300">
                            {experience.type}
                          </span>
                          <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-md text-xs text-gray-300">
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
                  <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-800 pb-4">
                    {['overview', 'responsibilities', 'technologies', 'achievements'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => handleTabChange(experience.id, tab)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                          activeTab[experience.id] === tab
                            ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-2 border-emerald-500 shadow-glow-emerald scale-105'
                            : 'text-gray-400 hover:text-emerald-400 bg-gray-800 border border-gray-700 hover:border-emerald-600'
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
                          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-emerald-600 hover:shadow-glow-emerald transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-2 mb-2">
                              <Users className="w-4 h-4 text-emerald-400" />
                              <span className="text-sm font-semibold text-white">Team Collaboration</span>
                            </div>
                            <p className="text-gray-400 text-sm">Working with cross-functional teams on enterprise SaaS solutions</p>
                          </div>
                          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-teal-600 hover:shadow-glow-teal transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-2 mb-2">
                              <Code2 className="w-4 h-4 text-teal-400" />
                              <span className="text-sm font-semibold text-white">Full-Stack Development</span>
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
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                            <ArrowRight className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
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
                              className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-gray-300 hover:border-emerald-500 hover:text-emerald-400 hover:shadow-glow-emerald transition-all duration-300 hover:scale-110 animate-bounce-in"
                              style={{ animationDelay: `${idx * 30}ms` }}
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
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                            <Award className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
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
