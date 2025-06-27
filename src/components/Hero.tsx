
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black mesh-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Image with enhanced styling */}
          <div className="mb-8 relative">
            <div className="relative inline-block">
              <img
                src="/divyanshnew.jpg"
                alt="Divyansh Atri"
                className="w-40 h-40 rounded-full mx-auto border-4 border-green-500/30 shadow-2xl animate-glow"
              />
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-full">
                <Sparkles className="text-white" size={20} />
              </div>
            </div>
          </div>
          
          {/* Enhanced name display */}
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-black mb-4">
              <span className="block gradient-text-primary animate-gradient">
                DIVYANSH
              </span>
              <span className="block gradient-text-secondary animate-gradient" style={{animationDelay: '1s'}}>
                ATRI
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-2 text-lg text-gray-400 mb-4">
              <MapPin size={20} className="text-green-400" />
              <span>Himachal Pradesh, India</span>
            </div>
          </div>
          
          {/* Animated role text */}
          <div className="mb-6">
            <p className="text-2xl md:text-3xl font-bold text-white mb-2">
              Full Stack Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences from the beautiful hills of Himachal Pradesh. 
              Passionate about <span className="text-green-400 font-semibold">React</span>, 
              <span className="text-blue-400 font-semibold"> Node.js</span>, and 
              <span className="text-purple-400 font-semibold"> modern web technologies</span>.
            </p>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl hover-lift transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-700 text-gray-300 hover:text-white hover:border-green-500 hover:bg-green-500/10 px-8 py-4 text-lg font-semibold rounded-xl hover-lift transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              View My Work
            </Button>
          </div>

          {/* Social links with enhanced styling */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://www.linkedin.com/in/divyansh-atri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 bg-gray-800/50 hover:bg-blue-600/20 rounded-xl transition-all duration-300 hover-lift border border-gray-700 hover:border-blue-500"
            >
              <Linkedin size={28} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <a 
              href="https://github.com/divyansh-atri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 bg-gray-800/50 hover:bg-gray-600/20 rounded-xl transition-all duration-300 hover-lift border border-gray-700 hover:border-gray-500"
            >
              <Github size={28} className="text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="mailto:divyansh.atri@research.iiit.ac.in"
              className="group p-4 bg-gray-800/50 hover:bg-green-600/20 rounded-xl transition-all duration-300 hover-lift border border-gray-700 hover:border-green-500"
            >
              <Mail size={28} className="text-gray-400 group-hover:text-green-400 transition-colors" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-gray-500" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
