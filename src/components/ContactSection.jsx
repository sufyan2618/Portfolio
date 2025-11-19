import {
  Mail,
  MapPin,
  Phone,
  Send,
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
    
    return () => {
      if (section) observer.unobserve(section);
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
      href: "mailto:sufyanliaquat58@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 313 6487106",
      href: "tel:+923136487106"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lahore, Punjab, Pakistan",
      href: "#"
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
      className="relative py-20 px-4 overflow-hidden bg-black"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Get In</span>
            <span className="text-gradient-animate"> Touch</span>
          </h2>
          
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'm always excited to discuss new opportunities 
            and bring innovative ideas to life. Let's create something amazing together!
          </p>
          
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mx-auto mt-6 animate-shimmer" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side - Contact Info */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Contact Information Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900 border border-gray-800 rounded-lg p-5 hover:border-emerald-600 hover:shadow-glow-emerald transition-all duration-300 animate-fade-in"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : '',
                    }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon Container */}
                      <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 flex-shrink-0 animate-float">
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-white mb-1">
                          {info.title}
                        </h4>
                        <a
                          href={info.href}
                          className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                        >
                          {info.value}
                        </a>
                      </div>

                      <ArrowRight className="w-5 h-5 text-gray-600 hover:text-emerald-400 transition-all duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-base font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-900 border border-gray-800 rounded-md hover:border-emerald-600 hover:shadow-glow-emerald transition-all duration-300 hover:scale-110 ${social.color} animate-bounce-in`}
                      style={{ animationDelay: `${index * 100}ms` }}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-teal-600 hover:shadow-glow-teal transition-all duration-500 animate-scale-in">
                
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Send className="w-5 h-5 text-emerald-400" />
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Input */}
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Message Input */}
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
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                      placeholder="Hello! I'd love to discuss a project with you..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:shadow-glow-emerald rounded-md font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105",
                      isSubmitting && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>

                {/* Success Indicator */}
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Usually responds within 24 hours
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
