import { Link } from "react-router-dom";
import { 
  Globe, 
  Smartphone, 
  Bot, 
  Code2, 
  Database, 
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions built from the ground up to meet your specific business requirements and drive operational efficiency.",
      features: ["Full-stack development", "Legacy system modernization", "API integration", "Scalable architecture"],
      color: "primary"
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Modern, responsive web applications that deliver exceptional user experiences across all devices and screen sizes.",
      features: ["Progressive Web Apps", "E-commerce platforms", "Content management systems", "Real-time applications"],
      color: "emerald"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that engage users and drive business growth on iOS and Android.",
      features: ["iOS & Android development", "Cross-platform solutions", "App Store optimization", "Mobile-first design"],
      color: "primary"
    },
    {
      icon: Bot,
      title: "AI Solutions",
      description: "Intelligent automation and AI-powered features to enhance your business processes and improve decision-making.",
      features: ["Machine learning models", "Natural language processing", "Computer vision", "Predictive analytics"],
      color: "emerald"
    },
    {
      icon: Database,
      title: "Cloud & Backend",
      description: "Robust, scalable backend infrastructure and cloud solutions to power your applications with reliability.",
      features: ["Cloud migration", "Microservices architecture", "Database optimization", "DevOps automation"],
      color: "primary"
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Comprehensive security audits and ongoing maintenance to keep your software secure and up-to-date.",
      features: ["Security assessments", "Performance monitoring", "Regular updates", "24/7 support"],
      color: "emerald"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="badge-primary mb-4">What We Offer</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We offer comprehensive software development services to help businesses innovate, 
            scale, and succeed in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card-hover p-8 group"
            >
              <div className={`${service.color === 'primary' ? 'feature-icon' : 'feature-icon-accent'} mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary to-indigo-600 rounded-3xl p-8 lg:p-12 text-center text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your ideas to life with cutting-edge technology 
              and exceptional craftsmanship.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              asChild
            >
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
