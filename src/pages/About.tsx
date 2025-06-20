
import Navbar from "@/components/Navbar";
import { MapPin, Code, Heart, Mountain, Award, Coffee, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "JavaScript/TypeScript", "React.js", "Node.js", "Python",
    "SQL", "MongoDB", "Express.js", "Git", "AWS", "Docker", "CSS", "HTML","C","C++","Java","GraphQL"
  ];

  const highlights = [
    { icon: Code, title: "Clean Code", desc: "Writing maintainable code" },
    { icon: Heart, title: "Problem Solver", desc: "Love tackling challenges" },
    { icon: Mountain, title: "Nature Lover", desc: "Inspired by mountains" },
    { icon: Coffee, title: "Coffee Enthusiast", desc: "Fueled by caffeine" }
  ];

  return (
    <div className="min-h-screen bg-black mesh-bg">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text-primary">About Me</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate developer from the serene landscapes of Himachal Pradesh
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
                alt="Coding workspace"
                className="rounded-2xl shadow-2xl hover-lift"
              />
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center mb-6">
                <MapPin className="text-green-400 mr-3" size={28} />
                <span className="text-xl font-semibold text-white">Himachal Pradesh, India</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Born and raised in the beautiful state of Himachal Pradesh, I bring the same dedication 
                and attention to detail that characterizes my homeland to my work as a full-stack developer. 
                Currently pursuing my education at IIIT Hyderabad while building impactful digital solutions.
              </p>
              
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                My journey in technology started with curiosity and has evolved into a passion for creating 
                seamless user experiences and robust backend systems. I believe in writing clean, efficient 
                code and staying updated with the latest industry trends.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div 
                    key={item.title}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                  >
                    <item.icon className="text-green-400" size={20} />
                    <div>
                      <span className="text-white font-medium block">{item.title}</span>
                      <span className="text-gray-400 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="mb-16 card-gradient hover-lift animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Technical Arsenal</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-gradient-to-r from-green-500/20 to-blue-500/20 px-4 py-3 rounded-xl text-center font-medium text-white hover:from-green-500/30 hover:to-blue-500/30 transition-all duration-300 hover-lift border border-gray-700/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <h2 className="text-3xl font-bold mb-8 text-white">Education & Experience</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-gradient hover-lift">
                <CardContent className="p-6">
                  <GraduationCap className="text-green-400 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold mb-3 text-white">IIIT Hyderabad</h3>
                  <div className="space-y-2 text-gray-300">
                    <p className="font-medium">BTech in Computer Science</p>
                    <p className="font-medium">MS by Research in Natural Sciences</p>
                    <p className="text-sm text-gray-400">Currently Pursuing</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-gradient hover-lift">
                <CardContent className="p-6">
                  <Code className="text-blue-400 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold mb-3 text-white">Professional Development</h3>
                  <p className="text-gray-300">
                    Continuously learning and implementing modern development practices, 
                    with experience in full-stack development and cloud technologies.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-gradient hover-lift">
                <CardContent className="p-6">
                  <GraduationCap className="text-green-400 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold mb-3 text-white">PM SHRI Senior Secondary School</h3>
                  <div className="space-y-2 text-gray-300">
                    <p className="font-medium">Senior Secondary</p>
                    <p className="font-medium">Scored 98.6% in class 12th</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-gradient hover-lift">
                <CardContent className="p-6">
                  <GraduationCap className="text-green-400 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold mb-3 text-white">Mount Carmel Sr. Sec. School</h3>
                  <div className="space-y-2 text-gray-300">
                    <p className="font-medium">class 1st to 10th </p>
                    <p className="font-medium">Scored 97.6% in class 10th</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
