import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Smartphone, Globe, ShoppingCart, Database, Briefcase, Building2, Star, Quote } from "lucide-react";

const ProjectsPage = () => {
  const inHouseProjects = [
    {
      title: "Edora",
      category: "Educational Platform",
      description: "An advanced educational platform that revolutionizes online learning through AI-powered personalization and interactive content delivery.",
      tech: ["React", "TypeScript", "Node.js", "AI/ML", "Cloud"],
      features: ["AI-Powered Learning Paths", "Real-time Collaboration", "Advanced Analytics", "Mobile-First Design"],
      link: "https://edora.selybi.com",
      favicon: "https://edora.selybi.com/edoraLogo.png"
    },
    {
      title: "LizaLab AI",
      category: "AI Data Annotation",
      description: "A powerful data annotation platform designed for training AI models. Streamline your machine learning workflows with precise labeling tools and quality assurance features.",
      tech: ["React", "Python", "TensorFlow", "AWS", "PostgreSQL"],
      features: ["Image & Text Annotation", "Quality Assurance Tools", "Team Collaboration", "Export to ML Formats"],
      link: "https://lizalab.selybi.com/",
      favicon: "https://lizalab.selybi.com/lizalabLogo.png"
    },
  ];

  const externalProjects = [
    {
      title: "E-Commerce Solutions",
      description: "Custom online stores with seamless payment integration, inventory management, and analytics dashboards.",
      icon: ShoppingCart,
      tech: ["Next.js", "Stripe", "Cloud Native"]
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android with intuitive user experiences.",
      icon: Smartphone,
      tech: ["React Native", "Flutter", "Swift"]
    },
    {
      title: "Enterprise Software",
      description: "Scalable business solutions including CRM, ERP, and custom management systems.",
      icon: Building2,
      tech: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "Database Solutions",
      description: "Robust database design, migration, and optimization services for high-performance applications.",
      icon: Database,
      tech: ["PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "Web Applications",
      description: "Modern, responsive web applications built with the latest technologies and best practices.",
      icon: Globe,
      tech: ["React", "TypeScript", "Tailwind"]
    },
    {
      title: "Business Automation",
      description: "Custom automation tools to streamline workflows and improve operational efficiency.",
      icon: Briefcase,
      tech: ["Python", "APIs", "Cloud"]
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Solutions",
      company: "TechFlow Solutions",
      content: "Selybi transformed our entire digital infrastructure. Their expertise in custom software development and attention to detail exceeded our expectations.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Founder & CEO",
      company: "InnovateLab",
      content: "Working with Selybi was a game-changer for our startup. They delivered a scalable web application that perfectly matched our vision.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Thompson",
      role: "Director of Innovation",
      company: "FutureTech Corp",
      content: "The mobile app Selybi developed for us has received outstanding user feedback. Their team's professionalism and commitment to quality was exceptional.",
      rating: 5,
      avatar: "ET"
    },
    {
      name: "David Park",
      role: "VP of Technology",
      company: "DataDrive Analytics",
      content: "Selybi's cloud solutions and backend architecture have significantly improved our system performance. Their ongoing support ensures we run flawlessly.",
      rating: 5,
      avatar: "DP"
    },
    {
      name: "Lisa Wang",
      role: "Product Manager",
      company: "EduTech Innovations",
      content: "The educational platform built by Selybi has transformed how our students learn. Engagement has increased by 300%. Truly exceptional work!",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "James Anderson",
      role: "Chief Digital Officer",
      company: "NextGen Solutions",
      content: "Selybi's AI-powered analytics dashboard provides insights we never had before. Their ability to understand complex requirements is remarkable.",
      rating: 5,
      avatar: "JA"
    }
  ];

  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-4">Our Work</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-gray-600">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Showcasing our flagship projects and innovative solutions that have transformed businesses and empowered users.
            </p>
          </div>

          {/* In-House Projects Section */}
          <div className="mb-20">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              In-House <span className="text-gray-600">Products</span>
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {inHouseProjects.map((project) => (
                <a 
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-gray-900 hover:shadow-2xl transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden group-hover:bg-gray-900 transition-colors">
                          <img 
                            src={project.favicon} 
                            alt={`${project.title} icon`}
                            className="w-8 h-8 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 group-hover:text-black">{project.title}</h4>
                          <p className="text-gray-500 text-sm">{project.category}</p>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-gray-600">
                            <div className="w-1 h-1 bg-gray-900 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium group-hover:bg-gray-900 group-hover:text-white transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* External Projects Section */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Client <span className="text-gray-600">Projects</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {externalProjects.map((project) => (
                <div 
                  key={project.title}
                  className="group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    <project.icon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800" asChild>
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-4">Testimonials</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="text-gray-600">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from the companies and leaders who have experienced the Selybi difference.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name}
                className="bg-white rounded-2xl border border-gray-200 p-8 relative hover:shadow-lg transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-gray-200" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
                  <div className="text-gray-600">On-Time Delivery</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;