import { Link } from "react-router-dom";
import { 
  Globe, 
  Smartphone, 
  Bot, 
  Code2, 
  Database, 
  Shield,
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Clock,
  Award,
  Headphones,
  Lightbulb,
  Target,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions built from the ground up to meet your specific business requirements and drive operational efficiency.",
      features: ["Full-stack development", "Legacy system modernization", "API integration", "Scalable architecture"],
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Modern, responsive web applications that deliver exceptional user experiences across all devices and screen sizes.",
      features: ["Progressive Web Apps", "E-commerce platforms", "Content management systems", "Real-time applications"],
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth on iOS and Android.",
      features: ["iOS & Android development", "Cross-platform solutions", "App Store optimization", "Mobile-first design"],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Bot,
      title: "AI & Machine Learning",
      description: "Intelligent automation and AI-powered features to enhance your business processes and improve decision-making.",
      features: ["Machine learning models", "Natural language processing", "Computer vision", "Predictive analytics"],
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: Database,
      title: "Cloud & Backend",
      description: "Robust, scalable backend infrastructure and cloud solutions to power your applications with reliability.",
      features: ["Cloud migration", "Microservices architecture", "Database optimization", "DevOps automation"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Comprehensive security solutions and ongoing maintenance to keep your systems protected and running smoothly.",
      features: ["Security audits", "Penetration testing", "24/7 monitoring", "Regular updates"],
      gradient: "from-slate-600 to-slate-800"
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Discovery",
      description: "We dive deep into understanding your business goals, challenges, and technical requirements."
    },
    {
      number: "02",
      icon: Target,
      title: "Strategy",
      description: "Our team creates a comprehensive roadmap with clear milestones and deliverables."
    },
    {
      number: "03",
      icon: Code2,
      title: "Development",
      description: "Using agile methodologies, we build your solution with regular updates and feedback loops."
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support to ensure continued success."
    },
  ];

  const stats = [
    { value: "100+", label: "Projects Completed", icon: Award },
    { value: "50+", label: "Happy Clients", icon: Users },
    { value: "99%", label: "Client Satisfaction", icon: Zap },
    { value: "24/7", label: "Support Available", icon: Headphones },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(107,114,128,0.3),transparent)]" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Zap className="w-4 h-4 text-gray-300" />
              <span className="text-sm font-medium text-white/90">Professional Software Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Services That Drive{" "}
              <span className="text-gray-400">
                Your Success
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              From concept to deployment, we deliver end-to-end software solutions 
              that transform your business and exceed expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg"
                asChild
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-semibold px-8 py-6 text-lg border-gray-600 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/projects">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 text-white" viewBox="0 0 1440 80" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Software Solutions
            </h2>
            <p className="text-lg text-slate-600">
              We offer a full range of development services to bring your vision to life, 
              from initial concept to final deployment and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-4">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-slate-600">
              Our proven development process ensures your project is delivered on time, 
              within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-x-8" />
                )}
                
                <div className="text-center">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white mb-6 shadow-lg shadow-primary/25">
                    <span className="text-2xl font-bold">{step.number}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-slate-600">
              We leverage the latest technologies and frameworks to build robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "React", "Node.js", "TypeScript", "Python", "AWS", "Azure",
              "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "Flutter", "Swift"
            ].map((tech, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 text-center border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="font-medium text-slate-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's discuss your project and create a solution that transforms your business. 
            Get a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gray-900 text-white hover:bg-gray-800 font-semibold px-8 py-6 text-lg"
              asChild
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-semibold px-8 py-6 text-lg border-gray-300 text-gray-900 hover:bg-gray-100"
              asChild
            >
              <Link to="/projects">
                View Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
