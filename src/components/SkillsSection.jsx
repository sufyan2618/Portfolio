import { useState, useEffect, useMemo, memo } from "react";
import { cn } from "@/lib/utils";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const skills = [
  // Frontend
  { name: "React.js", category: "frontend", icon: "react.png" },
  { name: "Next.js", category: "frontend", icon: "next.webp" },
  { name: "React Native", category: "frontend", icon: "react.png" },
  { name: "JavaScript", category: "frontend", icon: "javaScript.png" },
  { name: "Redux", category: "frontend", icon: "redux.webp" },
  { name: "TypeScript", category: "frontend", icon: "typeScript.png" },
  { name: "Tailwind CSS", category: "frontend", icon: "tailwind.png" },
  { name: "HTML", category: "frontend", icon: "html.webp" },
  { name: "CSS", category: "frontend", icon: "css.webp" },
  { name: "Zustand", category: "frontend", icon: "zustand.svg" },

  // Backend
  { name: "Node.js", category: "backend", icon: "node.png" },
  { name: "Express.js", category: "backend", icon: "express.png" },
  { name: "FastAPI", category: "backend", icon: "fastapi.webp" },
  { name: "Python", category: "backend", icon: "python.png" },
  { name: "MongoDB", category: "backend", icon: "mongodb.png" },
  { name: "PostgreSQL", category: "backend", icon: "postgres.png" },
  { name: "GraphQL", category: "backend", icon: "GraphQL.webp" },
  { name: "Redis", category: "backend", icon: "Redis.png" },
  { name: "Socket.io", category: "backend", icon: "socket.io.png" },
  { name: "Bull", category: "backend", icon: "bull.webp" },
  { name: "Stripe", category: "backend", icon: "stripe.webp" },

  // Cloud & DevOps
  { name: "Docker", category: "cloud", icon: "Docker.png" },
  { name: "NGINX", category: "cloud", icon: "nginx.webp" },
  { name: "GitHub Actions", category: "cloud", icon: "github-actions.webp" },
  { name: "Digital Ocean", category: "cloud", icon: "Digital Ocean.webp" },
  { name: "AWS", category: "cloud", icon: "AWS.webp" },
  { name: "Supabase", category: "cloud", icon: "supabase-logo-icon.png" },
  { name: "Firebase", category: "cloud", icon: "firebase.png" },

  // Tools & Libraries
  { name: "Git", category: "tools", icon: "git.png" },
  { name: "GitHub", category: "tools", icon: "github.png" },
  { name: "VS Code", category: "tools", icon: "vs-code.webp" },
  { name: "Postman", category: "tools", icon: "postman.png" },
  { name: "Swagger", category: "tools", icon: "swagger.webp" },
  { name: "Jira", category: "tools", icon: "Jira.webp" },
  { name: "Convex", category: "tools", icon: "convex.png" },
  { name: "Gemini AI", category: "tools", icon: "gemini.webp" },
  { name: "SQLAlchemy", category: "tools", icon: "SQLAlchemy.webp" },
];

const categories = [
  { id: "all", name: "All Skills", icon: Code },
  { id: "frontend", name: "Frontend", icon: Code },
  { id: "backend", name: "Backend", icon: Database },
  { id: "cloud", name: "Cloud & DevOps", icon: Cloud },
  { id: "tools", name: "Tools & Libraries", icon: Wrench },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
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

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const filteredSkills = useMemo(
    () => skills.filter(
      (skill) => activeCategory === "all" || skill.category === activeCategory
    ),
    [activeCategory]
  );

  return (
    <section
      id="skills"
      className="relative py-20 px-4 overflow-hidden bg-black"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto max-w-7xl relative z-10 h-full flex flex-col justify-center py-16">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">My</span>
            <span className="text-gradient-animate">
              {" "}
              Skills
            </span>
          </h2>

          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies spanning frontend, backend, cloud infrastructure, and development tools.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mx-auto mt-6 animate-shimmer" />
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-5 py-2.5 rounded-md font-medium text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105",
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-2 border-emerald-500 shadow-glow-emerald"
                    : "bg-gray-900 text-gray-400 border border-gray-800 hover:border-emerald-600 hover:text-emerald-400"
                )}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-emerald-600 hover:shadow-glow-emerald transition-all duration-300 hover:scale-110 hover:-rotate-3 animate-bounce-in"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Skill Content */}
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 flex items-center justify-center">
                  {typeof skill.icon === "string" &&
                  !skill.icon.includes(".") ? (
                    <span className="text-3xl">{skill.icon}</span>
                  ) : (
                    <img
                      src={`/${skill.icon}`}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                    />
                  )}
                </div>

                <h3 className="font-semibold text-white text-sm">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div
          className={`flex flex-wrap justify-center items-center gap-12 mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center animate-scale-in" style={{ animationDelay: '600ms' }}>
            <div className="text-3xl font-bold text-gradient-animate">
              {skills.length}+
            </div>
            <div className="text-sm text-gray-400 mt-1">Technologies</div>
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-emerald-600 to-teal-600"></div>
          <div className="text-center animate-scale-in" style={{ animationDelay: '700ms' }}>
            <div className="text-3xl font-bold text-gradient-animate">
              1+
            </div>
            <div className="text-sm text-gray-400 mt-1">Years Experience</div>
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-emerald-600 to-teal-600"></div>
          <div className="text-center animate-scale-in" style={{ animationDelay: '800ms' }}>
            <div className="text-3xl font-bold text-gradient-animate">
              10+
            </div>
            <div className="text-sm text-gray-400 mt-1">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};
