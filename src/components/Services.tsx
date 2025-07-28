import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Video, Code, Users, Clock, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Computer Science Tutoring",
      description: "Comprehensive tutoring in C, C++, SQL, and foundational Computer Science concepts for grades 9-12",
      features: [
        "One-on-one personalized sessions",
        "Logic building and problem-solving",
        "Project-based learning approach",
        "Exam preparation and guidance"
      ],
      price: "Starting from ₹500/hour",
      color: "text-blue-400"
    },
    {
      icon: Video,
      title: "Video Editing Services",
      description: "Professional video editing for educational content, promotional videos, and creative projects",
      features: [
        "Adobe Premiere Pro expertise",
        "Advanced effects with Nuke",
        "Color grading and audio sync",
        "Custom animations and transitions"
      ],
      price: "Starting from ₹1000/project",
      color: "text-purple-400"
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Build custom applications and websites tailored to your specific requirements",
      features: [
        "Desktop applications in C++",
        "Web applications with modern tech",
        "Database design and management",
        "System architecture planning"
      ],
      price: "Quote on request",
      color: "text-green-400"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Khan",
      role: "Class 12 Student",
      comment: "Ghafeer's teaching made C++ so much easier to understand. My grades improved significantly!",
      rating: 5
    },
    {
      name: "Sarah Ali",
      role: "Content Creator",
      comment: "Amazing video editing skills! My promotional video looked professional and engaging.",
      rating: 5
    }
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering students and businesses through education, technology, and creative solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 bg-background border-border hover:border-primary transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/10 h-full"
            >
              <div className="space-y-6 h-full flex flex-col">
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors">
                    <service.icon className={`w-8 h-8 ${service.color} group-hover:text-primary transition-colors`} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>

                <p className="text-muted-foreground">{service.description}</p>

                <div className="space-y-3 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mt-auto">
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                  <Button 
                    className="w-full glow-effect" 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Book Session
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">How I Work</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Consultation", desc: "Understanding your needs and goals" },
              { icon: Code, title: "Planning", desc: "Creating a structured approach" },
              { icon: Clock, title: "Execution", desc: "Delivering quality work on time" },
              { icon: Star, title: "Support", desc: "Ongoing guidance and assistance" }
            ].map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">What Students Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-secondary border-none">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground italic">"{testimonial.comment}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;