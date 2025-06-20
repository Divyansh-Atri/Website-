
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Github, Send, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      value: "Himachal Pradesh, India",
      color: "text-green-400"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Telangana (IIIT Hyderabad), India",
      color: "text-green-400"
    },
    {
      icon: Mail,
      title: "Email",
      value: "divyansh.atri@research.iiit.ac.in",
      color: "text-blue-400"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      color: "text-purple-400"
    }
  ];

  return (
    <div className="min-h-screen bg-black mesh-bg">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text-primary">Get In Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Let's connect and create something amazing together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h2 className="text-3xl font-bold mb-8 text-white">Let's Start a Conversation</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 hover-lift">
                    <div className={`p-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 ${info.color}`}>
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">{info.title}</h3>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4 mb-8">
                <a 
                  href="https://www.linkedin.com/in/divyansh-atri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-r from-blue-600/20 to-blue-700/20 hover:from-blue-600/30 hover:to-blue-700/30 rounded-xl transition-all duration-300 hover-lift border border-blue-500/30"
                >
                  <Linkedin size={28} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                </a>
                <a 
                  href="https://github.com/divyansh-atri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-r from-gray-700/20 to-gray-800/20 hover:from-gray-600/30 hover:to-gray-700/30 rounded-xl transition-all duration-300 hover-lift border border-gray-500/30"
                >
                  <Github size={28} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="mailto:divyansh.atri@research.iiit.ac.in"
                  className="group p-4 bg-gradient-to-r from-green-600/20 to-green-700/20 hover:from-green-600/30 hover:to-green-700/30 rounded-xl transition-all duration-300 hover-lift border border-green-500/30"
                >
                  <Mail size={28} className="text-green-400 group-hover:text-green-300 transition-colors" />
                </a>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
                <div className="flex items-center mb-3">
                  <MessageCircle className="text-green-400 mr-3" size={24} />
                  <h3 className="font-bold text-lg text-white">Ready to Work Together?</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm always excited to take on new challenges and collaborate on innovative projects. 
                  Whether you need a full-stack developer or want to discuss an idea, I'd love to hear from you!
                </p>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <form
                action="https://wa.me/919999999999"
                method="get"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-4 bg-gradient-to-r from-green-600/20 to-green-700/20 p-6 rounded-xl border border-green-500/30 mb-8 hover:from-green-600/30 hover:to-green-700/30 transition-all duration-300 hover-lift"
                onSubmit={e => {
                  e.preventDefault();
                  const name = (e.currentTarget.elements.namedItem('wa_name') as HTMLInputElement)?.value || '';
                  const message = (e.currentTarget.elements.namedItem('wa_message') as HTMLInputElement)?.value || '';
                  const url = `https://wa.me/919999999999?text=${encodeURIComponent(
                    `Hi, my name is ${name}.\n${message}`
                  )}`;
                  window.open(url, '_blank', 'noopener,noreferrer');
                }}
              >
                <div className="flex items-center space-x-4 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    className="text-green-400"
                  >
                    <circle cx="16" cy="16" r="16" fill="#25D366" />
                    <path
                      d="M23.5 18.5c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.5-.2-.7.2-.2.3-.8 1.2-1 1.4-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.5-2.2-2.9-.2-.4 0-.6.2-.8.2-.2.3-.4.5-.6.2-.2.2-.4.3-.7.1-.2 0-.5-.1-.7-.1-.2-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5-.2 0-.5 0-.7 0-.2 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.3 0 1.9 1.4 3.7 1.6 4 .2.3 2.7 4.2 6.6 5.7.9.3 1.6.5 2.1.6.9.1 1.7.1 2.3.1.7 0 2.3-.7 2.6-1.5.3-.8.3-1.5.2-1.6-.1-.1-.4-.2-.8-.4z"
                      fill="#fff"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-white text-lg">WhatsApp</h3>
                    <p className="text-gray-300">Send me a message directly on WhatsApp</p>
                  </div>
                </div>
                <div>
                  <label htmlFor="wa_name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    id="wa_name"
                    name="wa_name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-gray-800/30 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label htmlFor="wa_message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="wa_message"
                    name="wa_message"
                    required
                    rows={3}
                    placeholder="Type your message"
                    className="w-full bg-gray-800/30 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block"
                  >
                    <path
                      d="M2 21l21-9-21-9v7l15 2-15 2v7z"
                      fill="currentColor"
                    />
                  </svg>
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
