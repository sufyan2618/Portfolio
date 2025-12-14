import { Code, Smartphone, Brain, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import resume from "../assets/Sufyan_Liaqat_FullStack_Engineer.pdf"
import { aboutSkills } from "@/lib/data";

export const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="relative min-h-screen py-20 px-4 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4">
            <span className="text-white">About</span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-teal-500"> Me</span>
          </h2>
          
          <div className="w-20 h-1 bg-linear-to-r from-emerald-600 to-teal-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Content - About Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            
            {/* Main Description Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-300 shadow-lg">
                
                <h3 className="text-xl font-heading text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Software Engineering Student & Developer
                </h3>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    As a passionate software engineering student from <span className="text-emerald-400 font-semibold">Lahore, Punjab</span>, 
                    I'm dedicated to crafting innovative digital solutions that solve real-world problems.
                  </p>
                  
                  <p>
                    I believe in clean code, elegant design, and user-centered thinking. Whether building web applications, 
                    mobile apps, or cloud solutions, I approach each project with <span className="text-emerald-400 font-semibold">creativity</span> and 
                    <span className="text-emerald-400 font-semibold"> precision</span>.
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {['React', 'Node.js', 'MongoDB', 'Express', 'React Native', 'FastAPI', 'Python'].map((tech, index) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300 hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-110"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="group px-6 py-3 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-md font-semibold text-white transition-all duration-300 text-center shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a
                href={resume} 
                download
                className="px-6 py-3 border border-white/20 hover:border-emerald-500 hover:bg-emerald-500/10 backdrop-blur-md rounded-md font-semibold text-emerald-400 hover:text-teal-400 transition-all duration-300 text-center hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  Download CV
                  <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Skills Cards */}
          <div className="space-y-4">
            {aboutSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-5 hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                    <div className="flex items-start gap-4">
                      {/* Icon Container */}
                      <div className="p-3 rounded-lg bg-linear-to-br from-emerald-600 to-teal-600 shrink-0 shadow-lg shadow-emerald-500/20">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold text-white mb-2">
                          {skill.title}
                        </h4>
                        <p className="text-gray-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

