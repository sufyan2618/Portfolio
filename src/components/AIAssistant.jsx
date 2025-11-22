import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Terminal, Cpu, Zap, ChevronRight, Command, Minimize2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, experiences, projects, aboutSkills } from '@/lib/data';

// --- Typewriter Effect Component ---
const TypewriterText = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setDisplayedText('');
    
    const intervalId = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText((prev) => prev + text.charAt(indexRef.current));
        indexRef.current += 1;
      } else {
        clearInterval(intervalId);
        if (onComplete) onComplete();
      }
    }, 20); // Typing speed

    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{displayedText}</span>;
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      type: 'bot', 
      text: "SYSTEM ONLINE. I am the Neural Interface for this portfolio. I can navigate the site, explain projects, or just chat. How can I assist?",
      isTyping: false 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isProcessing]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  // --- Knowledge Base & Actions ---
  const executeAction = (action) => {
    if (!action) return;
    
    switch(action) {
      case 'SCROLL_PROJECTS':
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'SCROLL_SKILLS':
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'SCROLL_EXPERIENCE':
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'SCROLL_CONTACT':
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'SCROLL_ABOUT':
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'OPEN_GITHUB':
        window.open('https://github.com/sufyan2618', '_blank');
        break;
      default:
        break;
    }
  };

  const processQuery = (query) => {
    const lower = query.toLowerCase();
    
    // --- Dynamic Data Search ---

    // 1. Project Search
    const foundProject = projects.find(p => 
      lower.includes(p.title.toLowerCase()) || 
      p.tags.some(t => lower.includes(t.toLowerCase()))
    );

    if (foundProject && (lower.includes('project') || lower.includes('app') || lower.includes('built') || lower.includes('show'))) {
      return {
        text: `Found project: ${foundProject.title}.\n\n${foundProject.description}\n\nTech Stack: ${foundProject.tags.join(', ')}.`,
        action: 'SCROLL_PROJECTS',
        suggestions: ['View Demo', 'GitHub Repo', 'Other projects']
      };
    }

    // 2. Skill Search
    const foundSkill = skills.find(s => lower.includes(s.name.toLowerCase()));
    if (foundSkill) {
      return {
        text: `Yes, I am proficient in ${foundSkill.name}. It is part of my ${foundSkill.category} stack.`,
        action: 'SCROLL_SKILLS',
        suggestions: [`Other ${foundSkill.category} skills`, 'Show all skills']
      };
    }

    // 3. Experience Search
    const foundJob = experiences.find(e => 
      lower.includes(e.company.toLowerCase()) || 
      lower.includes(e.role.toLowerCase())
    );
    if (foundJob) {
      return {
        text: `At ${foundJob.company}, I worked as a ${foundJob.role} (${foundJob.duration}).\n\nKey achievement: ${foundJob.achievements[0]}`,
        action: 'SCROLL_EXPERIENCE',
        suggestions: ['Tell me more', 'Next role']
      };
    }

    // --- General Commands ---

    // Navigation Commands
    if (lower.includes('project') || lower.includes('work') || lower.includes('portfolio')) {
      return {
        text: `Accessing Project Archives... I have ${projects.length} featured projects on display, ranging from ${projects[0].category} to ${projects[projects.length-1].category}.`,
        action: 'SCROLL_PROJECTS',
        suggestions: [projects[0].title, projects[1].title, 'Show all']
      };
    }
    if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech')) {
      const topSkills = skills.slice(0, 5).map(s => s.name).join(', ');
      return {
        text: `Scanning Technical Capabilities... \n\nTotal Technologies: ${skills.length}+\nTop Skills: ${topSkills}...\n\nNavigating to Skills Matrix.`,
        action: 'SCROLL_SKILLS',
        suggestions: ['Backend skills?', 'Frontend tools?']
      };
    }
    if (lower.includes('experience') || lower.includes('job') || lower.includes('history')) {
      const currentJob = experiences.find(e => e.isActive);
      return {
        text: `Retrieving Professional Records... \n\nCurrent Role: ${currentJob.role} at ${currentJob.company}.\nTotal Experience: 1+ Years.\n\nMoving to Experience Timeline.`,
        action: 'SCROLL_EXPERIENCE',
        suggestions: [`What do you do at ${currentJob.company}?`, 'Previous jobs']
      };
    }
    if (lower.includes('contact') || lower.includes('email') || lower.includes('hire') || lower.includes('reach')) {
      return {
        text: "Opening Communication Channels. You can send a message directly through the form below.",
        action: 'SCROLL_CONTACT',
        suggestions: ['Copy email address', 'GitHub profile']
      };
    }
    if (lower.includes('github') || lower.includes('code') || lower.includes('repo')) {
      return {
        text: "Redirecting to GitHub Repository mainframe...",
        action: 'OPEN_GITHUB',
        suggestions: ['Show Projects', 'Back to site']
      };
    }

    // Casual / Meta
    if (lower.includes('who are you') || lower.includes('identity')) {
      return {
        text: "I am the Neural Interface V2.0 for this portfolio. I have full access to Sufyan's professional data including 8+ projects and 20+ skills.",
        suggestions: ['What can you do?', 'Who created you?']
      };
    }
    if (lower.includes('created') || lower.includes('maker') || lower.includes('author')) {
      return {
        text: "I was architected by Sufyan Liaqat, a Full Stack Engineer specializing in scalable web solutions.",
        action: 'SCROLL_ABOUT',
        suggestions: ['See his skills', 'Contact him']
      };
    }
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
      return {
        text: "System Ready. Greetings, User. I can tell you about my projects, skills, or work experience. What would you like to know?",
        suggestions: ['Show me projects', 'What are your skills?', 'Contact info']
      };
    }
    if (lower.includes('help')) {
      return {
        text: "Available Commands:\n- 'Projects': View work\n- 'Skills': Tech stack\n- 'Experience': Work history\n- 'Contact': Get in touch\n- 'GitHub': View code",
        suggestions: ['Projects', 'Skills', 'Contact']
      };
    }

    // Default
    return {
      text: "Command not recognized in local database. Try asking about 'Projects', 'Skills', or 'Experience'.",
      suggestions: ['Show Projects', 'List Skills', 'Help']
    };
  };

  const handleSend = async (text = inputValue) => {
    if (!text.trim()) return;

    const userMsgId = Date.now();
    setMessages(prev => [...prev, { id: userMsgId, type: 'user', text: text }]);
    setInputValue('');
    setIsProcessing(true);

    // Simulate "Thinking" time
    const delay = Math.random() * 800 + 600;
    
    setTimeout(() => {
      const response = processQuery(text);
      const botMsgId = Date.now() + 1;
      
      setMessages(prev => [...prev, { 
        id: botMsgId, 
        type: 'bot', 
        text: response.text,
        action: response.action,
        suggestions: response.suggestions,
        isTyping: true // Start typing effect
      }]);
      
      setIsProcessing(false);
      
      // Execute action after a slight delay to let user read
      if (response.action) {
        setTimeout(() => executeAction(response.action), 1000);
      }
    }, delay);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 group ${
          isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'bg-black border border-emerald-500/50 text-emerald-400'
        }`}
      >
        <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping"></div>
        <Cpu size={28} className="relative z-10 group-hover:animate-spin-slow" />
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '60px' : '500px',
              width: isMinimized ? '300px' : 'min(90vw, 400px)'
            }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 bg-black/90 backdrop-blur-xl border border-emerald-500/30 rounded-lg shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col overflow-hidden font-mono"
          >
            {/* Header */}
            <div 
              className="p-3 bg-emerald-950/30 border-b border-emerald-500/20 flex justify-between items-center cursor-pointer"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              <div className="flex items-center gap-2 text-emerald-400">
                <Terminal size={16} />
                <span className="text-xs font-bold tracking-widest">NEURAL_LINK_V2</span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
                  className="text-emerald-500/50 hover:text-emerald-400 p-1"
                >
                  {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                  className="text-emerald-500/50 hover:text-red-400 p-1 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Main Content Area (Hidden when minimized) */}
            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-emerald-900/50 scrollbar-track-transparent">
                  {messages.map((msg) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={msg.id}
                      className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                      <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 border ${
                        msg.type === 'user' 
                          ? 'bg-blue-950/30 border-blue-500/30 text-blue-400' 
                          : 'bg-emerald-950/30 border-emerald-500/30 text-emerald-400'
                      }`}>
                        {msg.type === 'user' ? <User size={14} /> : <Bot size={14} />}
                      </div>
                      
                      <div className="flex flex-col gap-2 max-w-[80%]">
                        <div className={`p-3 rounded text-sm border backdrop-blur-sm ${
                          msg.type === 'user' 
                            ? 'bg-blue-900/10 text-blue-100 border-blue-500/20 rounded-tr-none' 
                            : 'bg-emerald-900/10 text-emerald-100 border-emerald-500/20 rounded-tl-none'
                        }`}>
                          {msg.type === 'bot' && msg.isTyping ? (
                            <TypewriterText text={msg.text} />
                          ) : (
                            <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                          )}
                        </div>
                        
                        {/* Suggestions Chips */}
                        {msg.type === 'bot' && msg.suggestions && (
                          <div className="flex flex-wrap gap-2 mt-1">
                            {msg.suggestions.map((suggestion, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleSend(suggestion)}
                                className="text-[10px] px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded hover:bg-emerald-500/20 hover:border-emerald-500/40 text-emerald-400 transition-all"
                              >
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  
                  {isProcessing && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 rounded bg-emerald-950/30 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                        <Bot size={14} />
                      </div>
                      <div className="bg-emerald-900/10 p-3 rounded rounded-tl-none border border-emerald-500/20 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse"></span>
                        <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse delay-75"></span>
                        <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse delay-150"></span>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-3 bg-black/40 border-t border-emerald-500/20">
                  <div className="flex gap-2 relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500/50">
                      <ChevronRight size={14} />
                    </div>
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter command..."
                      className="flex-1 bg-emerald-950/10 border border-emerald-500/20 rounded pl-8 pr-4 py-2.5 text-sm text-emerald-100 placeholder-emerald-700/30 focus:outline-none focus:border-emerald-500/50 focus:bg-emerald-950/20 transition-all font-mono"
                    />
                    <button
                      onClick={() => handleSend()}
                      disabled={!inputValue.trim() || isProcessing}
                      className="p-2.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded hover:bg-emerald-500/20 hover:shadow-[0_0_10px_rgba(16,185,129,0.2)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
