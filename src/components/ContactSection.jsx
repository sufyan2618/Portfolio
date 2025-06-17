import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
  Star,
  Sparkles,
  ArrowRight,
  CheckCircle
} from "lucide-react";
// Import Simple Icons from react-icons
import { 
  SiGithub, 
  SiLinkedin, 
  SiInstagram, 
  SiFacebook 
} from 'react-icons/si';
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      if (section) observer.unobserve(section);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch('https://formspree.io/f/xqabbeyp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sufyanliaquat58@gmail.com",
      href: "mailto:sufyanliaquat58@gmail.com",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 313 6487106",
      href: "tel:+923136487106",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lahore, Punjab, Pakistan",
      href: "#",
      gradient: "from-cyan-500 to-pink-500"
    }
  ];

  // Updated social links with Simple Icons
  const socialLinks = [
    { 
      icon: SiGithub, 
      href: "https://github.com/sufyan2618", 
      label: "GitHub", 
      color: "hover:text-white"
    },
    { 
      icon: SiLinkedin, 
      href: "https://www.linkedin.com/in/sufyanliaqat2", 
      label: "LinkedIn", 
      color: "hover:text-blue-400"
    },
    { 
      icon: SiInstagram, 
      href: "https://www.instagram.com/sufyan_liaquat1/", 
      label: "Instagram", 
      color: "hover:text-pink-400"
    },
    { 
      icon: SiFacebook, 
      href: "https://www.facebook.com/sufyan.liaquat.73", 
      label: "Facebook", 
      color: "hover:text-blue-500"
    },
  ];

  return (
    <section 
      id="contact" 
      className="relative py-16 px-4 overflow-hidden bg-gray-950"
    >
      {/* Animated background elements - smaller */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-72 h-72 opacity-15 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, #06b6d4 50%, #ec4899 100%)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '10%',
          }}
        />
        <div 
          className="absolute w-64 h-64 opacity-10 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            bottom: '10%',
            right: '10%',
            animationDelay: '1s',
          }}
        />

        {/* Reduced floating particles */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-purple-400/20 animate-ping"
              size={Math.random() * 4 + 3}
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

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header - reduced spacing */}
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-3">
            <MessageCircle className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-purple-400 font-medium text-sm tracking-wider uppercase">Let's Connect</span>
            <MessageCircle className="w-4 h-4 text-cyan-400 animate-pulse delay-1000" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Get In</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient"> Touch</span>
          </h2>
          
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'm always excited to discuss new opportunities 
            and bring innovative ideas to life. Let's create something amazing together!
          </p>
          
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side - Contact Info - reduced spacing */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Contact Information Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Star className="w-5 h-5 text-purple-400 animate-pulse" />
                Contact Information
              </h3>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="group relative transition-all duration-300 hover:scale-105"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : '',
                    }}
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-20 rounded-lg blur-lg transition-all duration-300`} />
                    
                    {/* Main Card - smaller padding */}
                    <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-lg p-4 group-hover:border-gray-600/70 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        {/* Icon Container - smaller */}
                        <div className={`relative p-3 rounded-lg bg-gradient-to-br ${info.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                          <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-20 rounded-lg blur group-hover:opacity-30 transition-opacity duration-300`} />
                          <Icon className="relative w-5 h-5 text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
                            {info.title}
                          </h4>
                          <a
                            href={info.href}
                            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                          >
                            {info.value}
                          </a>
                        </div>

                        {/* Arrow - smaller */}
                        <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links with Simple Icons - reduced spacing */}
            <div className="pt-4">
        <h4 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          Connect With Me
        </h4>
        <div className="flex gap-3">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-gray-600/70 transition-all duration-300 hover:scale-110 ${social.color}`}
                aria-label={social.label}
              >
                <Icon 
                  className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" 
                />
              </a>
            );
          })}
        </div>
      </div>
          </div>

          {/* Right Side - Contact Form - reduced spacing */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
              
              {/* Form Container - smaller padding */}
              <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 group-hover:border-purple-400/50 transition-all duration-300">
                
                <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                  <Send className="w-5 h-5 text-cyan-400" />
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input - smaller */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:bg-gray-800/70 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Input - smaller */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800/70 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Message Input - smaller */}
                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-400/50 focus:bg-gray-800/70 transition-all duration-300 resize-none"
                      placeholder="Hello! I'd love to discuss a project with you..."
                    />
                  </div>

                  {/* Submit Button - smaller */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "group relative w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25",
                      isSubmitting && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </form>

                {/* Success Indicator - smaller */}
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    Usually responds within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
