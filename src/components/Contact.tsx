import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MessageCircle, MapPin, Send, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmedmghafeer@gmail.com",
      href: "mailto:ahmedmghafeer@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 314 4989724",
      href: "tel:+923144989724"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat Now",
      href: "https://wa.me/923144989724"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pakistan",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ahmad12396', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ghafeer', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/ghafeer.ahmad.96', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/ghafeer.ahmad.96', label: 'Facebook' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init('WyU9k9o84N_JmU7fu');
      
      // Send email using EmailJS
      await emailjs.send(
        'service_z8yg636', // Your service ID
        'template_eu6mgvo', // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Ghafeer Ahmad',
        }
      );
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project or have questions about my services? 
            Let's connect and discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-background border-border">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or question..."
                  required
                  rows={6}
                  className="bg-secondary border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button type="submit" className="w-full glow-effect">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-secondary hover:bg-primary/10 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">{info.label}</div>
                      <div className="text-muted-foreground text-sm">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect on Social Media</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-lg group"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <a href="https://wa.me/923144989724" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle size={18} className="mr-3" />
                    Start WhatsApp Chat
                  </Button>
                </a>
                <a href="tel:+923144989724">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone size={18} className="mr-3" />
                    Call Directly
                  </Button>
                </a>
                <a href="mailto:ahmedmghafeer@gmail.com">
                  <Button variant="outline" className="w-full justify-start">
                    <Mail size={18} className="mr-3" />
                    Send Email
                  </Button>
                </a>
              </div>
            </div>

            {/* Availability */}
            <Card className="p-6 bg-secondary border-none">
              <h4 className="font-semibold mb-3">Availability</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>By appointment</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                <p className="text-sm text-primary font-medium">
                  Usually responds within 2-4 hours during business hours
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;