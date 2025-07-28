import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram, Facebook, MessageCircle, Phone } from 'lucide-react';
import profileImage from '@/assets/ghafeer-profile.jpg';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/ahmad12396', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ghafeer', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/ghafeer.ahmad.96', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/ghafeer.ahmad.96', label: 'Facebook' }
  ];

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center">
      <div className="max-w-7xl mx-auto section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg">WELCOME TO MY WORLD</p>
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm <span className="text-primary">Ghafeer Ahmad</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Computer Science Educator | Software & Design Enthusiast | Lifelong Learner
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              I have been working in education and technology since 2021. I am proficient in programming, 
              design, and passionate about teaching the next generation of developers.
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-muted-foreground">CONNECT WITH ME</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-lg"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-muted-foreground">BEST SKILL ON</p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="default" 
                  className="glow-effect animate-glow"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore My Work
                </Button>
                <a href="https://wa.me/03144989724" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="flex items-center gap-2">
                    <MessageCircle size={18} />
                    WhatsApp
                  </Button>
                </a>
                <a href="tel:03144989724">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Phone size={18} />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary glow-effect">
                <img 
                  src={profileImage} 
                  alt="Ghafeer Ahmad - Computer Science Educator"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-full animate-glow">
                <MessageCircle size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;