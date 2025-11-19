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
  const [expandedId, setExpandedId] = useState(null);

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
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
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
                
                {/* Compact Header */}
                <div className="relative p-5 border-b border-gray-800/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-teal-600/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-start gap-3">
                    {/* Company Icon */}
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 flex-shrink-0">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Role & Company */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-1">
                            {experience.role}
                          </h3>
                          <div className="text-base font-semibold text-emerald-400">
                            {experience.company}
                          </div>
                        </div>
                        {experience.isActive && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/50 rounded-full text-[10px] text-emerald-400 font-semibold animate-glow-pulse whitespace-nowrap">
                            <Zap className="w-2.5 h-2.5" />
                            Active
                          </span>
                        )}
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {experience.location}
                        </span>
                        <span>•</span>
                        <span>{experience.period}</span>
                        <span>•</span>
                        <span>{experience.type}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Compact Content */}
                <div className="p-5">
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {experience.description}
                  </p>

                  {/* Key Highlights - Show first 3 by default */}
                  <div className="space-y-2 mb-4">
                    {experience.responsibilities.slice(0, expandedId === experience.id ? undefined : 3).map((responsibility, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="p-0.5 rounded bg-emerald-600/20 mt-1">
                          <ArrowRight className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span className="flex-1">{responsibility}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack - Compact */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {experience.technologies.slice(0, 8).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-gray-800/50 border border-gray-700 rounded text-[10px] text-gray-400 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {experience.technologies.length > 8 && (
                        <span className="px-2 py-1 text-[10px] text-gray-500">
                          +{experience.technologies.length - 8} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expand/Collapse Button */}
                  {experience.responsibilities.length > 3 && (
                    <button
                      onClick={() => toggleExpand(experience.id)}
                      className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium transition-colors"
                    >
                      {expandedId === experience.id ? 'Show less' : `View all details (${experience.responsibilities.length} highlights)`}
                      <ChevronDown className={`w-3 h-3 transition-transform ${expandedId === experience.id ? 'rotate-180' : ''}`} />
                    </button>
                  )}

                  {/* Expanded Content */}
                  {expandedId === experience.id && (
                    <div className="mt-4 pt-4 border-t border-gray-800 space-y-4 animate-fade-in">
                      {/* All Technologies */}
                      <div>
                        <h4 className="text-xs font-semibold text-white mb-2 flex items-center gap-1">
                          <Code2 className="w-3 h-3 text-emerald-400" />
                          Full Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {experience.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-2 py-1 bg-gray-800/50 border border-gray-700 rounded text-[10px] text-gray-400 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-xs font-semibold text-white mb-2 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-teal-400" />
                          Key Achievements
                        </h4>
                        <div className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                              <div className="w-1 h-1 bg-teal-400 rounded-full mt-1.5" />
                              <span className="flex-1">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
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
