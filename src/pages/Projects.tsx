
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, Star, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather conditions, forecasts, and weather maps using real-time API data.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media metrics with data visualization and reporting capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      technologies: ["React", "D3.js", "Python", "Flask", "MySQL"],
      github: "#",
      live: "#",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-black mesh-bg">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text-primary">My Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my work, featuring full-stack applications and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className={`card-gradient hover-lift transition-all duration-300 animate-fade-in-up relative ${
                  project.featured ? 'ring-2 ring-green-500/30' : ''
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {project.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-full">
                    <Star className="text-white" size={16} />
                  </div>
                )}
                
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm rounded-full p-2">
                      <Code className="text-green-400" size={20} />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                    {project.title}
                    {project.featured && <Zap className="text-yellow-400" size={18} />}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center border-gray-600 text-gray-300 hover:text-white hover:border-green-500 hover:bg-green-500/10 transition-all duration-300"
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex items-center bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="card-gradient p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-white">More Projects Coming Soon!</h2>
              <p className="text-gray-300 mb-8 text-lg">
                I'm constantly working on new projects and learning new technologies. 
                Check back regularly for updates!
              </p>
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 text-lg rounded-xl hover-lift transition-all duration-300">
                <Github className="mr-2" size={20} />
                View All on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
