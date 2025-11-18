import { useState, useEffect } from "react";
import React from "react";
import { cn } from "@/lib/utils";
import { Code, Database, Cloud, Wrench, Sparkles, Star, Zap } from "lucide-react";

const skills = [
  // Frontend
  { name: "React.js", category: "frontend", icon: "react.png" },
  { name: "Next.js", category: "frontend", icon: "next.png" },
  { name: "React Native", category: "frontend", icon: "react.png" },
  { name: "Expo", category: "frontend", icon: "expo.png" },
  { name: "JavaScript", category: "frontend", icon: "javaScript.png" },
  { name: "TypeScript", category: "frontend", icon: "typeScript.png" },
  { name: "Tailwind CSS", category: "frontend", icon: "tailwind.png" },
  { name: "HTML", category: "frontend", icon: "html.png" },
  { name: "CSS", category: "frontend", icon: "css.png" },
  { name: "EJS", category: "frontend", icon: "ejs.png" },
  { name: "Zustand", category: "frontend", icon: "zustand.png" },

  // Backend
  { name: "Node.js", category: "backend", icon: "node.png" },
  { name: "Express.js", category: "backend", icon: "express.png" },
  { name: "FastAPI", category: "backend", icon: "fastapi.png" },
  { name: "Python", category: "backend", icon: "python.png" },
  { name: "MongoDB", category: "backend", icon: "mongodb.png" },
  { name: "PostgreSQL", category: "backend", icon: "postgres.png" },
  { name: "SQL", category: "backend", icon: "sql.png" },
  { name: "GraphQL", category: "backend", icon: "GraphQL.webp" },
  { name: "Redis", category: "backend", icon: "Redis.png" },
  { name: "Socket.io", category: "backend", icon: "socket.io.png" },
  { name: "Bull", category: "backend", icon: "bull.png" },
  { name: "Stripe", category: "backend", icon: "stripe.png" },

  // Cloud & DevOps
  { name: "Docker", category: "cloud", icon: "Docker.png" },
  { name: "NGINX", category: "cloud", icon: "nginx.png" },
  { name: "CI/CD", category: "cloud", icon: "cicd.png" },
  { name: "GitHub Actions", category: "cloud", icon: "github-actions.png" },
  { name: "Digital Ocean", category: "cloud", icon: "digitalocean.png" },
  { name: "AWS", category: "cloud", icon: "AWS.webp" },
  { name: "Supabase", category: "cloud", icon: "supabase-logo-icon.png" },
  { name: "Firebase", category: "cloud", icon: "firebase.png" },
  { name: "Cloudinary", category: "cloud", icon: "cloudinary.png" },

  // Tools & Libraries
  { name: "Git", category: "tools", icon: "git.png" },
  { name: "GitHub", category: "tools", icon: "github.png" },
  { name: "VS Code", category: "tools", icon: "vscode.png" },
  { name: "Postman", category: "tools", icon: "postman.png" },
  { name: "Swagger", category: "tools", icon: "swagger.webp" },
  { name: "Jira", category: "tools", icon: "jira.png" },
  { name: "Convex", category: "tools", icon: "convex.png" },
  { name: "Gemini AI", category: "tools", icon: "gemini.png" },
  { name: "SQLAlchemy", category: "tools", icon: "sqlalchemy.png" },
  { name: "Alembic", category: "tools", icon: "alembic.png" },
];

const categories = [
  { id: "all", name: "All Skills", icon: Sparkles },
  { id: "frontend", name: "Frontend", icon: Code },
  { id: "backend", name: "Backend", icon: Database },
  { id: "cloud", name: "Cloud & DevOps", icon: Cloud },
  { id: "tools", name: "Tools & Libraries", icon: Wrench },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
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

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (section) observer.unobserve(section);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="relative py-16 px-4 overflow-hidden bg-gray-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-80 h-80 opacity-15 blur-3xl animate-pulse"
          style={{
            background:
              "radial-gradient(circle, #8b5cf6 0%, #06b6d4 50%, #ec4899 100%)",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            top: "5%",
            right: "10%",
          }}
        />
        <div
          className="absolute w-72 h-72 opacity-10 blur-3xl animate-pulse"
          style={{
            background:
              "radial-gradient(circle, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)",
            transform: `translate(${mousePosition.x * -0.01}px, ${
              mousePosition.y * -0.01
            }px)`,
            bottom: "10%",
            left: "5%",
            animationDelay: "1s",
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <Star
              key={i}
              className="absolute text-purple-400/20 animate-ping"
              size={Math.random() * 6 + 4}
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

      <div className="container mx-auto max-w-7xl relative z-10 h-full flex flex-col justify-center py-16">
        {/* Section Header */}
        <div
          className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
            <span className="text-purple-400 font-medium text-sm tracking-wider uppercase">
              Technical Expertise
            </span>
            <Zap className="w-5 h-5 text-cyan-400 animate-pulse delay-1000" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">My</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient">
              {" "}
              Skills
            </span>
          </h2>

          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies spanning frontend, backend, cloud infrastructure, and development tools.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-1000 delay-200 ${
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
                  "group relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 overflow-hidden",
                  activeCategory === category.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                )}
              >
                {activeCategory === category.id && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-full blur-sm"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                  </>
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {category.name}
                </span>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isVisible ? "fadeInUp 0.6s ease-out forwards" : "",
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 rounded-xl blur-lg transition-all duration-300" />

              {/* Main Card */}
              <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 group-hover:border-gray-600/70 transition-all duration-300 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full blur-xl" />
                </div>

                {/* Skill Header */}
                <div className="relative flex items-center gap-3">
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {typeof skill.icon === "string" &&
                    !skill.icon.includes(".") ? (
                      <span>{skill.icon}</span>
                    ) : (
                      <img
                        src={`/${skill.icon}`}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white text-base group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300 truncate">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div
          className={`flex flex-wrap justify-center items-center gap-8 mt-12 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {skills.length}+
            </div>
            <div className="text-xs text-gray-400">Technologies</div>
          </div>
          <div className="w-px h-8 bg-gray-700"></div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              1+
            </div>
            <div className="text-xs text-gray-400">Years Experience</div>
          </div>
          <div className="w-px h-8 bg-gray-700"></div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              10+
            </div>
            <div className="text-xs text-gray-400">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};
