import { Link } from "react-router-dom";
import { Globe, Smartphone, Bot, Code2, Database, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions built from the ground up to meet your specific business requirements.",
      features: ["Full-stack development", "Legacy system modernization", "API integration", "Scalable architecture"]
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Modern, responsive web applications that deliver exceptional user experiences across all devices.",
      features: ["Progressive Web Apps", "E-commerce platforms", "Content management systems", "Real-time applications"]
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      features: ["iOS & Android development", "Cross-platform solutions", "App Store optimization", "Mobile-first design"]
    },
    {
      icon: Bot,
      title: "AI Solutions",
      description: "Intelligent automation and AI-powered features to enhance your business processes and decision-making.",
      features: ["Machine learning models", "Natural language processing", "Computer vision", "Predictive analytics"]
    },
    {
      icon: Database,
      title: "Cloud & Backend",
      description: "Robust, scalable backend infrastructure and cloud solutions to power your applications.",
      features: ["Cloud migration", "Microservices architecture", "Database optimization", "DevOps automation"]
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Comprehensive security audits and ongoing maintenance to keep your software secure and up-to-date.",
      features: ["Security assessments", "Performance monitoring", "Regular updates", "24/7 support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-navy-medium/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive software development services to help businesses innovate, scale, and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glass-card p-8 hover-glow transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-electric to-cyan-glow mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="glow" className="w-full group">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can bring your ideas to life with cutting-edge technology and exceptional craftsmanship.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;