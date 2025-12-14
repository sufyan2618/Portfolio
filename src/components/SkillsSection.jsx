import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { skills, skillCategories } from "@/lib/data";

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4">
            <span className="text-white">My</span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-teal-500">
              {" "}
              Skills
            </span>
          </h2>

          <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies spanning frontend, backend, cloud infrastructure, and development tools.
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-emerald-600 to-teal-600 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105 backdrop-blur-md",
                  activeCategory === category.id
                    ? "bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/20"
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
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-teal-500">
              {skills.length}+
            </div>
            <div className="text-sm text-gray-400 mt-1">Technologies</div>
          </div>
          <div className="w-px h-12 bg-linear-to-b from-emerald-600/50 to-teal-600/50"></div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-teal-500">
              1+
            </div>
            <div className="text-sm text-gray-400 mt-1">Years Experience</div>
          </div>
          <div className="w-px h-12 bg-linear-to-b from-emerald-600/50 to-teal-600/50"></div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-teal-500">
              10+
            </div>
            <div className="text-sm text-gray-400 mt-1">Projects Completed</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

