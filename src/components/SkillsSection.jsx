import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Code, Database, Cloud, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  const filteredSkills = useMemo(
    () => skills.filter(
      (skill) => activeCategory === "all" || skill.category === activeCategory
    ),
    [activeCategory]
  );

  return (
    <section
      id="skills"
      className="relative py-20 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10 h-full flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">My</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
              {" "}
              Skills
            </span>
          </h2>

          <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies spanning frontend, backend, cloud infrastructure, and development tools.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105 backdrop-blur-md",
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/20"
                    : "bg-white/5 text-gray-300 border border-white/10 hover:border-emerald-500 hover:text-emerald-400"
                )}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateX: 10, 
                  rotateY: 10,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-emerald-500/50 transition-colors duration-200 group perspective-1000"
              >
                {/* Skill Content */}
                <div className="flex flex-col items-center gap-3 text-center transform transition-transform duration-300 group-hover:translate-z-10">
                  <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                    {typeof skill.icon === "string" &&
                    !skill.icon.includes(".") ? (
                      <span className="text-3xl">{skill.icon}</span>
                    ) : (
                      <img
                        src={`/${skill.icon}`}
                        alt={skill.name}
                        className="w-10 h-10 object-contain drop-shadow-lg"
                      />
                    )}
                  </div>

                  <h3 className="font-semibold text-white text-sm group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-12 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
              {skills.length}+
            </div>
            <div className="text-sm text-gray-400 mt-1">Technologies</div>
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-emerald-600/50 to-teal-600/50"></div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
              1+
            </div>
            <div className="text-sm text-gray-400 mt-1">Years Experience</div>
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-emerald-600/50 to-teal-600/50"></div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
              10+
            </div>
            <div className="text-sm text-gray-400 mt-1">Projects Completed</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

