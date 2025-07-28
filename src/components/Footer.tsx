import { Github, Linkedin, Instagram, Facebook, Heart, Code, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/ahmad12396', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ghafeer', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/ghafeer.ahmad.96', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/ghafeer.ahmad.96', label: 'Facebook' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'C++ Programming', href: '#services' },
    { name: 'SQL Database', href: '#services' },
    { name: 'Video Editing', href: '#services' },
    { name: 'Web Development', href: '#services' }
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Ghafeer<span className="text-primary">Ahmad</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Computer Science Educator, Software Developer, and Creative Professional. 
              Passionate about teaching and building innovative solutions.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-lg"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:ahmedmghafeer@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail size={16} />
                <span>ahmedmghafeer@gmail.com</span>
              </a>
              <a
                href="tel:+923144989724"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone size={16} />
                <span>+92 314 4989724</span>
              </a>
              <div className="text-sm text-muted-foreground">
                <p>Available Monday-Friday</p>
                <p>9:00 AM - 6:00 PM (PKT)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Ghafeer Ahmad. Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>and</span>
              <Code size={16} className="text-primary" />
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <span className="text-muted-foreground">
                Built with React & TailwindCSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;