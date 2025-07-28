import { Card } from '@/components/ui/card';
import { Code, Database, Palette, GraduationCap, Brain, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-blue-400",
      skills: ["Python", "C++", "C", "SQL"]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "text-green-400",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      title: "Database & Backend",
      icon: Database,
      color: "text-purple-400",
      skills: ["SQL Server", "Database Design", "Data Management", "System Architecture"]
    },
    {
      title: "Creative Tools",
      icon: Palette,
      color: "text-pink-400",
      skills: ["Adobe Premiere Pro", "Photoshop", "Nuke", "Video Editing"]
    },
    {
      title: "Teaching & Mentoring",
      icon: GraduationCap,
      color: "text-yellow-400",
      skills: ["Computer Science Education", "Logic Building", "Curriculum Design", "Student Mentoring"]
    },
    {
      title: "Emerging Technologies",
      icon: Brain,
      color: "text-cyan-400",
      skills: ["Machine Learning", "AI Fundamentals", "Data Analysis", "Research"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skillset spanning programming, design, education, and emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:border-primary transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors`}>
                    <category.icon className={`w-8 h-8 ${category.color} group-hover:text-primary transition-colors`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-foreground font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Overview */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-secondary border-none">
            <h3 className="text-2xl font-semibold mb-6">Technical Proficiency</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-muted-foreground">Programming Languages</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-muted-foreground">Students Taught</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;