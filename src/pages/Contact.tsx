
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
      icon: Mail,
      title: "Email",
      value: "divyansh.atri@example.com",
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
                  href="mailto:divyansh.atri@example.com"
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

            {/* Contact Form */}
            <Card className="card-gradient hover-lift animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <CardHeader>
                <CardTitle className="text-2xl text-white">Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
                  <p className="text-yellow-300 text-sm">
                    📧 This form is for display purposes only. Please use the email link or social media links to contact me directly.
                  </p>
                </div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      disabled
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full bg-gray-800/30 border-gray-600 text-gray-500 placeholder-gray-500 cursor-not-allowed"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      disabled
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full bg-gray-800/30 border-gray-600 text-gray-500 placeholder-gray-500 cursor-not-allowed"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      disabled
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      className="w-full bg-gray-800/30 border-gray-600 text-gray-500 placeholder-gray-500 cursor-not-allowed"
                    />
                  </div>
                  
                  <Button 
                    type="button" 
                    disabled
                    className="w-full bg-gray-600 text-gray-400 py-3 text-lg font-semibold rounded-xl cursor-not-allowed"
                  >
                    <Send className="mr-2" size={20} />
                    Form Disabled
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
