
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Code, Lightbulb, BookOpen, Zap, Rocket } from "lucide-react";

const Projects = () => {
  const currentFocus = [
    {
      title: "Full-Stack Development",
      description: "Currently learning and building applications with React, Node.js, and modern web technologies. Focusing on creating responsive and user-friendly interfaces.",
      icon: Code,
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      status: "In Progress"
    },
    {
      title: "Data Structures & Algorithms",
      description: "Strengthening problem-solving skills through DSA practice and competitive programming. Working on optimization and efficient code solutions.",
      icon: Lightbulb,
      technologies: ["C++", "Python", "Problem Solving", "Optimization"],
      status: "Ongoing"
    },
    {
      title: "Machine Learning Exploration",
      description: "Exploring the intersection of computer science and natural sciences through ML projects. Currently studying various algorithms and their applications.",
      icon: BookOpen,
      technologies: ["Python", "TensorFlow", "Data Analysis", "Research"],
      status: "Learning"
    },
    {
      title: "Open Source Contributions",
      description: "Planning to contribute to open source projects to gain real-world experience and collaborate with the developer community.",
      icon: Github,
      technologies: ["Git", "Collaboration", "Code Review", "Documentation"],
      status: "Planning"
    }
  ];

  const upcomingProjects = [
    "Personal Portfolio Website Enhancement",
    "Task Management Application",
    "Weather Dashboard with API Integration",
    "Social Media Analytics Tool"
  ];

  return (
    <div className="min-h-screen bg-black mesh-bg">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text-primary">My Journey</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Currently building my skills and working on exciting projects as a student developer
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {currentFocus.map((item, index) => (
              <Card 
                key={item.title} 
                className="card-gradient hover-lift transition-all duration-300 animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <item.icon className="text-green-400" size={32} />
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-green-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                      {item.status}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="card-gradient hover-lift animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Rocket className="text-blue-400 mr-3" size={28} />
                  Upcoming Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingProjects.map((project, index) => (
                    <div 
                      key={project}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                    >
                      <Zap className="text-yellow-400" size={16} />
                      <span className="text-gray-300">{project}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient hover-lift animate-fade-in-up" style={{animationDelay: '1s'}}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <BookOpen className="text-green-400 mr-3" size={28} />
                  Learning Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20">
                    <h3 className="font-semibold text-white mb-2">Advanced Full-Stack Development</h3>
                    <p className="text-gray-300 text-sm">Mastering modern frameworks and best practices</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                    <h3 className="font-semibold text-white mb-2">Research & Development</h3>
                    <p className="text-gray-300 text-sm">Bridging computer science with natural sciences</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                    <h3 className="font-semibold text-white mb-2">Industry Experience</h3>
                    <p className="text-gray-300 text-sm">Gaining practical experience through internships</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center animate-fade-in-up" style={{animationDelay: '1.2s'}}>
            <div className="card-gradient p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-white">Let's Build Something Together!</h2>
              <p className="text-gray-300 mb-8 text-lg">
                I'm always excited to collaborate on new projects and learn from experienced developers. 
                Feel free to reach out if you have any interesting opportunities!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 text-lg rounded-xl hover-lift transition-all duration-300">
                  <Github className="mr-2" size={20} />
                  View GitHub Profile
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-green-500 hover:bg-green-500/10 px-8 py-3 text-lg rounded-xl hover-lift transition-all duration-300">
                  <Code className="mr-2" size={20} />
                  Connect With Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
