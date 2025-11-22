import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Terminal, Cpu, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "SYSTEM ONLINE. I am the Neural Interface for this portfolio. Accessing data banks... Ready for queries." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const generateResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    
    // Enhanced Logic Pattern Matching
    if (lowerQuery.includes('skill') || lowerQuery.includes('stack') || lowerQuery.includes('tech')) {
      return "Scanning technical capabilities... \n\n• Frontend: React, Three.js, Tailwind, Framer Motion\n• Backend: Node.js, Express\n• Tools: Vite, Git, Vercel\n\nProficiency level: HIGH.";
    }
    if (lowerQuery.includes('project') || lowerQuery.includes('work') || lowerQuery.includes('built')) {
      return "Accessing project archives... \n\nFeatured projects include high-performance 3D web apps and interactive interfaces. Scroll to the 'Projects' sector for visual data.";
    }
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('hire')) {
      return "Communication channels open. \n\nYou can transmit a message via the Contact form below, or reach out directly via email. I am programmed to facilitate connections.";
    }
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
      return "Greetings, User. Identity verified. How may I assist your exploration of this digital space?";
    }
    if (lowerQuery.includes('who are you') || lowerQuery.includes('ai') || lowerQuery.includes('real')) {
      return "I am a Level 1 Simulated Intelligence. While I lack a GPT backend (for now), I am fully integrated into this portfolio's React ecosystem to guide you.";
    }
    if (lowerQuery.includes('joke')) {
      return "Why did the React component feel sad? Because it didn't have any state. *Beep boop*";
    }
    
    return "Query not recognized in local database. Please rephrase or ask about: Skills, Projects, or Contact info.";
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { type: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI processing with random delay
    const delay = Math.random() * 1000 + 500;
    
    setTimeout(() => {
      const responseText = generateResponse(userMessage.text);
      const botResponse = { type: 'bot', text: responseText };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, delay);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Trigger Button with "Crazy" Glow */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 group ${
          isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'bg-black border border-emerald-500 text-emerald-400'
        }`}
      >
        <Cpu size={28} className="group-hover:animate-spin-slow" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
        </span>
      </motion.button>

      {/* Chat Interface - Cyberpunk Style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 50, scale: 0.9, rotateX: 10 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[380px] h-[500px] max-h-[80vh] bg-black/95 backdrop-blur-xl border border-emerald-500/50 rounded-lg shadow-[0_0_50px_rgba(16,185,129,0.2)] flex flex-col overflow-hidden font-mono"
          >
            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-20 z-10"></div>

            {/* Header */}
            <div className="p-4 bg-emerald-900/20 border-b border-emerald-500/30 flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-emerald-500/5 animate-pulse"></div>
              <div className="flex items-center gap-3 text-emerald-400 z-10">
                <div className="p-1.5 bg-emerald-500/20 rounded border border-emerald-500/50">
                  <Bot size={18} />
                </div>
                <div>
                  <span className="block text-xs text-emerald-600 font-bold tracking-widest">SYSTEM</span>
                  <span className="font-bold text-sm tracking-wider text-emerald-300">NEURAL_LINK_V2</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-emerald-500/70 hover:text-emerald-400 transition-colors z-10 hover:rotate-90 duration-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-emerald-900/50 scrollbar-track-transparent relative">
              {messages.map((msg, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.type === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={idx}
                  className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 border ${
                    msg.type === 'user' 
                      ? 'bg-blue-900/20 border-blue-500/50 text-blue-400' 
                      : 'bg-emerald-900/20 border-emerald-500/50 text-emerald-400'
                  }`}>
                    {msg.type === 'user' ? <User size={14} /> : <Zap size={14} />}
                  </div>
                  <div className={`p-3 rounded max-w-[80%] text-sm border backdrop-blur-sm ${
                    msg.type === 'user' 
                      ? 'bg-blue-900/10 text-blue-100 border-blue-500/30 rounded-tr-none' 
                      : 'bg-emerald-900/10 text-emerald-100 border-emerald-500/30 rounded-tl-none shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                  }`}>
                    <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded bg-emerald-900/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center shrink-0">
                    <Zap size={14} />
                  </div>
                  <div className="bg-emerald-900/10 p-3 rounded rounded-tl-none border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse"></span>
                    <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse delay-75"></span>
                    <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse delay-150"></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black/60 border-t border-emerald-500/30 backdrop-blur-md">
              <div className="flex gap-2 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter command..."
                  className="flex-1 bg-emerald-900/5 border border-emerald-500/30 rounded px-4 py-3 text-sm text-emerald-100 placeholder-emerald-700/50 focus:outline-none focus:border-emerald-500/80 focus:bg-emerald-900/10 transition-all font-mono"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="p-3 bg-emerald-600/20 text-emerald-400 border border-emerald-500/50 rounded hover:bg-emerald-500/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="text-[10px] text-emerald-800 mt-2 text-center uppercase tracking-widest">
                System Status: Online // Latency: 12ms
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
