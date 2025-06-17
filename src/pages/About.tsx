
import Navbar from "@/components/Navbar";
import { MapPin, Code, Heart, Mountain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "JavaScript/TypeScript", "React.js", "Node.js", "Python",
    "SQL", "MongoDB", "Express.js", "Git", "AWS", "Docker"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate developer from the serene landscapes of Himachal Pradesh
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
                alt="Coding workspace"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="text-blue-600 mr-2" size={24} />
                <span className="text-lg font-semibold text-gray-700">Himachal Pradesh, India</span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Born and raised in the beautiful state of Himachal Pradesh, I bring the same dedication 
                and attention to detail that characterizes my homeland to my work as a full-stack developer. 
                Currently pursuing my education while building impactful digital solutions.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey in technology started with curiosity and has evolved into a passion for creating 
                seamless user experiences and robust backend systems. I believe in writing clean, efficient 
                code and staying updated with the latest industry trends.
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Code className="text-blue-600 mr-2" size={20} />
                  <span className="text-gray-700">Clean Code Advocate</span>
                </div>
                <div className="flex items-center">
                  <Heart className="text-red-500 mr-2" size={20} />
                  <span className="text-gray-700">Problem Solver</span>
                </div>
                <div className="flex items-center">
                  <Mountain className="text-green-600 mr-2" size={20} />
                  <span className="text-gray-700">Nature Lover</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-16">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Technical Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-lg text-center font-medium text-gray-700 hover:from-blue-200 hover:to-purple-200 transition-colors"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Education & Experience</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Current Studies</h3>
                  <p className="text-gray-600">
                    Pursuing higher education while actively developing real-world projects 
                    and contributing to open-source initiatives.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Professional Development</h3>
                  <p className="text-gray-600">
                    Continuously learning and implementing modern development practices, 
                    with experience in full-stack development and cloud technologies.
                  </p>
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
