import {
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowRight,
  CheckCircle,
  Github,
  Linkedin,
  Instagram,
  Facebook
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  // Social links with Lucide icons
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/sufyan2618", 
      label: "GitHub", 
      color: "hover:text-white"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/sufyanliaqat2", 
      label: "LinkedIn", 
      color: "hover:text-blue-400"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/sufyan_liaquat1/", 
      label: "Instagram", 
      color: "hover:text-pink-400"
    },
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/sufyan.liaquat.73", 
      label: "Facebook", 
      color: "hover:text-blue-500"
    },
  ];

  return (
    <section 
      id="contact" 
      className="relative py-20 px-4 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4">
            <span className="text-white">Get In</span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-teal-500"> Touch</span>
          </h2>
          
          <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'm always excited to discuss new opportunities 
            and bring innovative ideas to life. Let's create something amazing together!
          </p>
          
          <div className="w-20 h-1 bg-linear-to-r from-emerald-600 to-teal-600 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            
            {/* Contact Information Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-5 hover:border-emerald-600 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon Container */}
                      <div className="p-3 rounded-lg bg-linear-to-br from-emerald-600 to-teal-600 shrink-0 shadow-lg shadow-emerald-500/20">
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
                  </motion.div>
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
                      className={`p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-md hover:border-emerald-600 hover:bg-emerald-600/20 transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-teal-600 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-500">
                
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
                      className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 backdrop-blur-sm"
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
                      className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 backdrop-blur-sm"
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
                      className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none backdrop-blur-sm"
                      placeholder="Hello! I'd love to discuss a project with you..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full px-6 py-3 bg-linear-to-r from-emerald-600 to-teal-600 hover:shadow-lg hover:shadow-emerald-500/40 rounded-md font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105",
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

