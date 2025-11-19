import { Briefcase, Calendar, MapPin, ArrowRight, Building2, Code2, Users, Award, ChevronDown, Zap, TrendingUp } from "lucide-react";
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
    endDate: "Present",
    period: "8 months",
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
    endDate: "Apr 2025",
    period: "5 months",
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
  const [expandedItems, setExpandedItems] = useState({});

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

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section 
      id="experience" 
      className="relative min-h-screen py-20 overflow-hidden bg-black"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Professional</span>
            <span className="text-gradient-animate"> Journey</span>
          </h2>
          
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Building scalable solutions and innovative products across the full stack
          </p>
          
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mx-auto mt-6 animate-shimmer" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-600/20 via-teal-600/40 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Date Badge - Desktop centered */}
                <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 z-20">
                  <div className="bg-gray-900 border-2 border-emerald-600 rounded-full px-6 py-2 shadow-glow-emerald">
                    <div className="text-center">
                      <div className="text-xs font-bold text-emerald-400">{experience.startDate}</div>
                      <div className="text-[10px] text-gray-400">to</div>
                      <div className="text-xs font-bold text-teal-400">{experience.endDate}</div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node with pulsing effect */}
                <div className="absolute left-8 md:left-1/2 top-24 transform -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 w-6 h-6 rounded-full bg-emerald-600/30 animate-ping" />
                    <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 shadow-glow-emerald border-4 border-black" />
                  </div>
                </div>

                {/* Content Card - Alternating sides on desktop */}
                <div className={`pt-16 md:pt-20 pb-8 md:pb-12 ml-20 md:ml-0 md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  
                  {/* Date Badge - Mobile only */}
                  <div className="md:hidden mb-4 inline-block">
                    <div className="bg-gray-900 border border-emerald-600/50 rounded-lg px-4 py-2">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-emerald-400">{experience.startDate}</span>
                        <span className="text-gray-500">→</span>
                        <span className="font-bold text-teal-400">{experience.endDate}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">{experience.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 border border-gray-800 rounded-xl overflow-hidden hover:border-emerald-600 hover:shadow-glow-emerald transition-all duration-500 group animate-scale-in">
                
                {/* Header Section with gradient background */}
                <div className="relative p-6 sm:p-8 border-b border-gray-800/50 overflow-hidden">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-teal-600/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      {/* Company Icon with glow */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                        <div className="relative p-3 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 animate-float">
                          <Building2 className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Role with status badge */}
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                            {experience.role}
                          </h3>
                          {experience.isActive && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/50 rounded-full text-xs text-emerald-400 font-semibold animate-glow-pulse">
                              <Zap className="w-3 h-3 animate-pulse" />
                              Currently Working
                            </span>
                          )}
                        </div>

                        {/* Company name with emphasis */}
                        <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-3">
                          {experience.company}
                        </div>

                        {/* Meta information */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400">
                          <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                          </span>
                          <span className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-xs font-medium">
                            <Calendar className="w-3.5 h-3.5" />
                            {experience.period}
                          </span>
                          <span className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-xs font-medium">
                            {experience.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  
                  {/* Enhanced Tab Navigation */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['overview', 'responsibilities', 'technologies', 'achievements'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => handleTabChange(experience.id, tab)}
                        className={`relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                          activeTab[experience.id] === tab
                            ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-glow-emerald'
                            : 'text-gray-400 hover:text-white bg-gray-800/50 border border-gray-700 hover:border-emerald-600/50'
                        }`}
                      >
                        {activeTab[experience.id] === tab && (
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg blur opacity-50 -z-10" />
                        )}
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
                      <div className="space-y-2 animate-fade-in">
                        {experience.responsibilities.slice(0, expandedItems[experience.id] ? undefined : 4).map((responsibility, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/60 border border-gray-800 hover:border-emerald-600/30 transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                            <div className="p-1 rounded bg-gradient-to-br from-emerald-600/20 to-teal-600/20 mt-0.5">
                              <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <span className="text-gray-300 text-sm leading-relaxed flex-1">{responsibility}</span>
                          </div>
                        ))}
                        {experience.responsibilities.length > 4 && (
                          <button
                            onClick={() => toggleExpand(experience.id)}
                            className="mt-4 text-sm text-emerald-400 hover:text-emerald-300 flex items-center gap-2 font-medium transition-colors"
                          >
                            {expandedItems[experience.id] ? 'Show less' : `Show ${experience.responsibilities.length - 4} more responsibilities`}
                            <ChevronDown className={`w-4 h-4 transition-transform ${expandedItems[experience.id] ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>
                    )}

                    {/* Technologies Tab */}
                    {activeTab[experience.id] === 'technologies' && (
                      <div className="animate-fade-in">
                        <div className="flex flex-wrap gap-2.5">
                          {experience.technologies.map((tech, idx) => (
                            <span 
                              key={tech}
                              className="px-4 py-2 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-emerald-500 hover:text-emerald-400 hover:shadow-glow-emerald transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 font-medium animate-bounce-in cursor-default"
                              style={{ animationDelay: `${idx * 20}ms` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements Tab */}
                    {activeTab[experience.id] === 'achievements' && (
                      <div className="grid gap-3 animate-fade-in">
                        {experience.achievements.map((achievement, idx) => (
                          <div key={idx} className="relative p-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-transparent border border-gray-700 hover:border-teal-600/50 transition-all duration-300 group animate-fade-in overflow-hidden" style={{ animationDelay: `${idx * 80}ms` }}>
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative flex items-start gap-3">
                              <div className="p-1.5 rounded-lg bg-gradient-to-br from-teal-600/20 to-emerald-600/20 mt-0.5">
                                <TrendingUp className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
                              </div>
                              <span className="text-gray-300 text-sm leading-relaxed flex-1">{achievement}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
