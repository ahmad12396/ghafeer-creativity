
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Award, Users, Code } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Years Experience', value: '3+' },
    { icon: Users, label: 'Students Taught', value: '100+' },
    { icon: Award, label: 'Projects Completed', value: '15+' }
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src="https://i.postimg.cc/SNy3Q0w8/1726489994153.jpg"
                alt="Ghafeer Ahmad About"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl">
                <Award size={32} />
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center bg-secondary border-none">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                Who I Am?
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  I am a dedicated Computer Science student and educator from Pakistan, passionate about 
                  bridging the gap between traditional learning and modern technology. My journey began 
                  with a deep love for programming and has evolved into a mission to teach and inspire 
                  the next generation of developers.
                </p>
                <p>
                  With expertise in multiple programming languages including Python, C++, and C, 
                  I specialize in building robust applications and teaching fundamental computer science 
                  concepts. My approach combines discipline in code with creativity in design, 
                  ensuring both functionality and aesthetic appeal.
                </p>
                <p>
                  Beyond programming, I'm skilled in multimedia production using Adobe Premiere Pro, 
                  Photoshop, and Nuke, allowing me to offer comprehensive digital solutions. 
                  I believe in the power of education and strive to make complex concepts accessible 
                  to students from grades 9-12.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">🎓 Education First</h4>
                  <p className="text-muted-foreground">Teaching as a noble mission to empower others</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">💻 Innovation</h4>
                  <p className="text-muted-foreground">Tradition meets technology in perfect harmony</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">🎯 Excellence</h4>
                  <p className="text-muted-foreground">Discipline in code, creativity in design</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">🌱 Growth</h4>
                  <p className="text-muted-foreground">Lifelong learner, always evolving</p>
                </div>
              </div>
            </div>

            <Button 
              className="glow-effect flex items-center gap-2"
              onClick={() => {
                window.open('https://i.postimg.cc/kG3fdr8V/Ghafeer-CV.png', '_blank');
              }}
            >
              <Download size={18} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
