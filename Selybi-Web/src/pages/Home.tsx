import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  Smartphone, 
  Code2, 
  Database, 
  Cloud, 
  Settings,
  Star,
  Quote,
  Users,
  Award,
  Zap,
  Shield,
  Clock,
  Headphones,
  TrendingUp,
  Target
} from "lucide-react";

const Home = () => {
  // Services data
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Build stunning, responsive websites and web applications that engage your audience and drive conversions.",
      features: ["React & Next.js", "Custom CMS", "E-commerce"],
      color: "primary"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Create powerful native and cross-platform mobile applications for iOS and Android devices.",
      features: ["React Native", "iOS & Android", "App Store Optimization"],
      color: "emerald"
    },
    {
      icon: Code2,
      title: "Custom Software",
      description: "Develop tailored software solutions that solve your unique business challenges and streamline operations.",
      features: ["Enterprise Solutions", "SaaS Platforms", "Integration"],
      color: "primary"
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Design and optimize databases for maximum performance, security, and scalability.",
      features: ["SQL & NoSQL", "Data Migration", "Performance Tuning"],
      color: "emerald"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Deploy and manage cloud infrastructure with AWS, Azure, and Google Cloud platforms.",
      features: ["AWS & Azure", "DevOps", "Auto-scaling"],
      color: "primary"
    },
    {
      icon: Settings,
      title: "API Development",
      description: "Build robust, scalable APIs that power your applications and enable seamless integrations.",
      features: ["REST & GraphQL", "Microservices", "Documentation"],
      color: "emerald"
    },
  ];

  // Stats data
  const stats = [
    { number: "100+", label: "Projects Delivered", icon: TrendingUp },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "99%", label: "Client Satisfaction", icon: Award },
    { number: "24/7", label: "Support Available", icon: Headphones },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "Selybi transformed our entire digital presence. Their team delivered a cutting-edge platform that exceeded our expectations and helped us grow 3x in just one year.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateCorp",
      content: "The mobile app Selybi built for us has received outstanding reviews from our users. Their attention to detail and technical expertise is truly remarkable.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, GrowthLabs",
      content: "Working with Selybi was a game-changer for our startup. They understood our vision perfectly and delivered a product that our customers absolutely love.",
      rating: 5,
    },
  ];

  // Why choose us data
  const whyChooseUs = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "We follow agile methodologies to deliver your projects on time without compromising quality."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Security is built into everything we do. Your data and systems are always protected."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our dedicated support team is always available to help you whenever you need assistance."
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "We focus on delivering solutions that drive real business results and ROI for our clients."
    },
  ];

  // Process steps
  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and requirements through in-depth consultations."
    },
    {
      step: "02",
      title: "Planning",
      description: "Our team creates a detailed roadmap with timelines, milestones, and deliverables for your project."
    },
    {
      step: "03",
      title: "Development",
      description: "We build your solution using industry best practices, keeping you updated throughout the process."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support to ensure continued success."
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

        {/* Services Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-4">Our Services</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Everything You Need to{" "}
                <span className="text-gray-600">Succeed Online</span>
              </h2>
              <p className="text-lg text-gray-600">
                From concept to launch, we provide comprehensive software development services 
                tailored to help your business thrive in the digital age.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span key={feature} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800" asChild>
                <Link to="/services">
                  Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="text-white">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm font-medium mb-4">Why Choose Us</div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Your Success is Our{" "}
                  <span className="text-gray-600">Priority</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're not just developers – we're your technology partners. Our team is committed 
                  to delivering solutions that make a real difference in your business.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {whyChooseUs.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Image/Illustration placeholder */}
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 p-8 lg:p-12">
                  <div className="w-full h-full rounded-2xl bg-white shadow-xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                        <Award className="w-10 h-10 text-gray-700" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Certified Excellence</h3>
                      <p className="text-gray-600">
                        Industry-recognized standards and best practices in every project we deliver.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">99%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-4">Our Process</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                How We Bring Your{" "}
                <span className="text-gray-600">Vision to Life</span>
              </h2>
              <p className="text-lg text-gray-600">
                Our proven methodology ensures smooth project delivery from concept to launch, 
                keeping you informed and involved every step of the way.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0" />
                  )}
                  
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gray-100 mb-6">
                      <span className="text-3xl font-bold text-gray-900">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm font-medium mb-4">Testimonials</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What Our{" "}
                <span className="text-gray-600">Clients Say</span>
              </h2>
              <p className="text-lg text-gray-600">
                Don't just take our word for it – hear from some of our satisfied clients 
                about their experience working with Selybi.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200" />
                    <p className="text-gray-700 relative z-10 pl-4">"{testimonial.content}"</p>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-700">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-gray-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals. Get a free consultation 
              and quote for your next project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-lg"
                asChild
              >
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-700 text-white hover:bg-gray-800 font-semibold px-8 py-6 text-lg"
                asChild
              >
                <Link to="/projects">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  );
};

export default Home;
