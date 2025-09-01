import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, TrendingUp } from "lucide-react";
import edoraPreview from "@/assets/edora-preview.jpg";

const Projects = () => {
  const projectStats = [
    { icon: Users, label: "Active Users", value: "10K+" },
    { icon: TrendingUp, label: "Performance Boost", value: "300%" },
    { icon: Calendar, label: "Development Time", value: "8 Months" }
  ];

  const upcomingProjects = [
    {
      title: "Healthcare Management System",
      description: "Comprehensive patient management platform with AI-powered diagnostics.",
      status: "In Development",
      tech: ["React", "Node.js", "AI/ML", "HIPAA Compliant"]
    },
    {
      title: "E-Commerce Platform",
      description: "Next-generation shopping experience with AR product visualization.",
      status: "Planning Phase",
      tech: ["Next.js", "AR/VR", "Blockchain", "Cloud Native"]
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time financial data analysis with predictive market insights.",
      status: "Design Phase",
      tech: ["React", "Python", "Machine Learning", "Real-time Data"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-navy-medium/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our flagship projects and innovative solutions that have transformed businesses and empowered users.
          </p>
        </div>

        {/* Featured Project - Edora */}
        <div className="mb-20">
          <div className="glass-card p-8 lg:p-12 hover-scale transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  ⭐ Flagship Product
                </div>
                
                <h3 className="text-4xl font-bold">
                  <span className="text-glow">Edora</span>
                </h3>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  An advanced educational platform that revolutionizes online learning through AI-powered personalization, 
                  interactive content delivery, and comprehensive analytics for educators and students.
                </p>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      "AI-Powered Learning Paths",
                      "Real-time Collaboration",
                      "Advanced Analytics Dashboard",
                      "Mobile-First Design",
                      "Multi-Language Support",
                      "Gamified Learning Experience"
                    ].map((feature) => (
                      <li key={feature} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "TypeScript", "Node.js", "AI/ML", "Cloud"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="hero" size="lg" className="group">
                  Learn More About Edora
                  <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-xl hover-glow transition-all duration-300">
                  <img 
                    src={edoraPreview} 
                    alt="Edora Educational Platform Interface"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/20 to-transparent"></div>
                </div>

                {/* Project Stats */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {projectStats.map((stat) => (
                    <div key={stat.label} className="glass-card p-4 text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 mb-2">
                        <stat.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-lg font-bold text-gradient">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Projects */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Upcoming <span className="text-gradient">Projects</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
              <div 
                key={project.title}
                className="glass-card p-6 hover-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-3">
                    {project.status}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-muted text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Let's collaborate to create the next breakthrough solution that will define your industry.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;