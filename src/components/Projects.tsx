import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Play, Code2, Database, Globe, Video } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "2048 Game",
      description: "Classic 2048 puzzle game implemented in C++ with advanced algorithms and smooth gameplay mechanics.",
      image: "https://i.postimg.cc/Fs6kfFfL/1726490143109.jpg",
      category: "Game Development",
      icon: Code2,
      technologies: ["C++", "Algorithms", "Game Logic"],
      featured: true
    },
    {
      title: "Chess Game",
      description: "Full-featured chess game with AI opponent, move validation, and tournament mode capabilities.",
      image: "https://i.postimg.cc/6TxsSGjZ/ChessSet.jpg",
      category: "Game Development",
      icon: Code2,
      technologies: ["C++", "AI Logic", "Game Theory"],
      featured: true
    },
    {
      title: "School Management System",
      description: "Comprehensive management system for educational institutions with student, teacher, and course management.",
      image: "https://i.postimg.cc/XY7309NK/images.png",
      category: "Software Development",
      icon: Database,
      technologies: ["C++", "File Handling", "Data Structures"],
      featured: true
    },
    {
      title: "Hospital Management System",
      description: "Database-driven system for managing patient records, appointments, and medical staff information.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop",
      category: "Database Management",
      icon: Database,
      technologies: ["SQL", "Database Design", "System Architecture"]
    },
    {
      title: "Medical Chatbot",
      description: "AI-powered chatbot providing basic medical information and appointment scheduling assistance.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=300&fit=crop",
      category: "AI & Machine Learning",
      icon: Code2,
      technologies: ["Python", "NLP", "Machine Learning"]
    },
    {
      title: "Shopping Website",
      description: "Modern e-commerce platform with responsive design, product catalog, and user-friendly interface.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      category: "Web Development",
      icon: Globe,
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      title: "Educational Video Series",
      description: "Comprehensive video tutorials on programming fundamentals, edited with professional quality.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      category: "Video Production",
      icon: Video,
      technologies: ["Premiere Pro", "Nuke", "Educational Content"]
    },
    {
      title: "Brand Identity Designs",
      description: "Creative poster and logo designs for various clients using modern design principles.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      category: "Graphic Design",
      icon: Video,
      technologies: ["Photoshop", "Design Theory", "Branding"]
    }
  ];

  const categories = ["All", "Game Development", "Software Development", "Web Development", "Database Management", "AI & Machine Learning", "Video Production", "Graphic Design"];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning software development, game design, web applications, and creative projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Featured Work</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" className="opacity-90">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="default" className="opacity-90">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold">{project.title}</h4>
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="pt-2">
                    <Badge variant="outline" className="text-primary border-primary">
                      {project.category}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.slice(3).map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <project.icon className="w-5 h-5 text-white bg-black/50 p-1 rounded" />
                  </div>
                </div>
                
                <div className="p-4 space-y-3">
                  <h4 className="font-semibold text-sm">{project.title}</h4>
                  <p className="text-muted-foreground text-xs line-clamp-2">{project.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-secondary border-none">
            <h3 className="text-2xl font-semibold mb-4">Have a Project in Mind?</h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate and bring your ideas to life with quality code and creative solutions.
            </p>
            <Button 
              className="glow-effect"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Project
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;