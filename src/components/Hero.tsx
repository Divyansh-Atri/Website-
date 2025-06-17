
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
              alt="Divyansh Atri"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Divyansh Atri
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Full Stack Developer & Software Engineer
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            From the beautiful hills of Himachal Pradesh, crafting digital experiences with passion and precision. 
            Specializing in React, Node.js, and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3"
            >
              View My Work
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://www.linkedin.com/in/divyansh-atri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/divyansh-atri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:divyansh.atri@example.com"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-gray-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
