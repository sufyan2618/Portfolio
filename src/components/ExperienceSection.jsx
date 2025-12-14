import { Briefcase, Calendar, MapPin, ArrowRight, Building2, Code2, Users, Award, ChevronDown, Zap, TrendingUp } from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { experiences } from "@/lib/data";

const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

export const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section 
      id="experience" 
      className="relative min-h-screen py-20 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4">
            <span className="text-white">Professional</span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-teal-500"> Journey</span>
          </h2>
          
          <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
            Building scalable solutions and innovative products across the full stack
          </p>
          
          <div className="w-20 h-1 bg-linear-to-r from-emerald-600 to-teal-600 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-emerald-600/20 via-teal-600/40 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Date Badge - Desktop centered */}
                <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 z-20">
                  <div className="bg-black/50 backdrop-blur-md border-2 border-emerald-600 rounded-full px-6 py-2 shadow-lg shadow-emerald-500/20">
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
                    <div className="relative w-6 h-6 rounded-full bg-linear-to-br from-emerald-600 to-teal-600 shadow-lg shadow-emerald-500/50 border-4 border-black" />
                  </div>
                </div>

                {/* Content Card - Alternating sides on desktop */}
                <div className={`pt-16 md:pt-20 pb-8 md:pb-12 ml-20 md:ml-0 md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  
                  {/* Date Badge - Mobile only */}
                  <div className="md:hidden mb-4 inline-block">
                    <div className="bg-white/5 backdrop-blur-md border border-emerald-600/50 rounded-lg px-4 py-2">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-emerald-400">{experience.startDate}</span>
                        <span className="text-gray-500">→</span>
                        <span className="font-bold text-teal-400">{experience.endDate}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">{experience.period}</span>
                      </div>
                    </div>
                  </div>

                  <TiltCard className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-500 group perspective-1000">
                
                {/* Compact Header */}
                <div className="relative p-5 border-b border-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-emerald-600/5 via-teal-600/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-start gap-3">
                    {/* Company Icon */}
                    <div className="p-2.5 rounded-lg bg-linear-to-br from-emerald-600 to-teal-600 shrink-0 shadow-lg shadow-emerald-500/20">
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
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/50 rounded-full text-[10px] text-emerald-400 font-semibold animate-pulse whitespace-nowrap">
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
                          className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-gray-400 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300"
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
                  <AnimatePresence>
                    {expandedId === experience.id && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-white/10 space-y-4">
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
                                  className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-gray-400 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300"
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                  </TiltCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

