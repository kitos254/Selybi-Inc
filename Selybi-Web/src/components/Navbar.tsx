import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-development" },
    { name: "Database Administration", href: "/services/database-administration" },
    { name: "Cloud Solutions", href: "/services/cloud-solutions" },
    { name: "DevOps & CI/CD", href: "/services/devops" },
    { name: "API Development", href: "/services/api-development" },
    { name: "Software Consulting", href: "/services/consulting" },
    { name: "Maintenance & Support", href: "/services/maintenance" },
  ];

  const projectLinks = [
    { name: "In-House Projects", href: "/projects/inhouse" },
    { name: "External Projects", href: "/projects/external" },
    { name: "Mobile Apps", href: "/projects/mobile-apps" },
    { name: "Websites", href: "/projects/websites" },
    { name: "Desktop Apps", href: "/projects/desktop-apps" },
    { name: "E-commerce", href: "/projects/ecommerce" },
    { name: "SaaS Platforms", href: "/projects/saas" },
    { name: "API Projects", href: "/projects/api" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navbar Container */}
      <div 
        className={`mx-auto max-w-7xl transition-all duration-300 relative ${
          (isServicesHovered || isProjectsHovered) ? 'rounded-t-lg' : 'rounded-b-lg'
        }`}
        style={{
          background: 'rgba(8, 51, 68, 0.3)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: (isServicesHovered || isProjectsHovered) ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Bottom border sections when dropdown is open - only where dropdown doesn't extend */}
        {isServicesHovered && (
          <>
            {/* Left bottom border - 10% */}
            <div 
              className="absolute bottom-0 left-0 h-px bg-white/10"
              style={{
                width: '10%',
                zIndex: 10,
              }}
            />
            {/* Right bottom border - 30% */}
            <div 
              className="absolute bottom-0 right-0 h-px bg-white/10"
              style={{
                width: '30%',
                zIndex: 10,
              }}
            />
          </>
        )}
        {isProjectsHovered && (
          <>
            {/* Left bottom border - 10% */}
            <div 
              className="absolute bottom-0 left-0 h-px bg-white/10"
              style={{
                width: '10%',
                zIndex: 10,
              }}
            />
            {/* Right bottom border - 30% */}
            <div 
              className="absolute bottom-0 right-0 h-px bg-white/10"
              style={{
                width: '30%',
                zIndex: 10,
              }}
            />
          </>
        )}
        {/* Edora Banner */}
        {showBanner && (
          <div>
            <div className="w-full flex items-center justify-between px-4 py-2">
              <h1 className="text-sm md:text-base italic">
                <a
                  href="https://edora.selybi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Edora{" "}
                </a>
                is now live 🚀
                <span> <Link to="/edora" className="text-indigo-500 hover:underline ml-2">Learn more...</Link></span>
              </h1>
              <button
                onClick={() => setShowBanner(false)}
                className="ml-2 text-gray-200 hover:text-red-500 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="border-t border-white/20" />
          </div>
        )}

        {/* Main Navigation */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gradient">Selybi</h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => {
                  if (link.name === "Services") {
                    return (
                      <div
                        key={link.name}
                        className="relative"
                        onMouseEnter={() => setIsServicesHovered(true)}
                        onMouseLeave={() => setIsServicesHovered(false)}
                      >
                        <Link
                          to={link.href}
                          className={`font-medium transition-colors duration-300 flex items-center gap-1 py-6 ${
                            location.pathname === link.href || location.pathname.startsWith('/services/')
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          }`}
                        >
                          {link.name}
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`} />
                        </Link>
                      </div>
                    );
                  }

                  if (link.name === "Projects") {
                    return (
                      <div
                        key={link.name}
                        className="relative"
                        onMouseEnter={() => setIsProjectsHovered(true)}
                        onMouseLeave={() => setIsProjectsHovered(false)}
                      >
                        <Link
                          to={link.href}
                          className={`font-medium transition-colors duration-300 flex items-center gap-1 py-6 ${
                            location.pathname === link.href || location.pathname.startsWith('/projects/')
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          }`}
                        >
                          {link.name}
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isProjectsHovered ? 'rotate-180' : ''}`} />
                        </Link>
                      </div>
                    );
                  }
                  
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`font-medium transition-colors duration-300 py-6 ${
                        location.pathname === link.href
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="font-medium">
                Login
              </Button>
              <Button className="font-medium">
                Sign Up
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Dropdown - 60% width with 10% left margin and 30% right margin */}
      {isServicesHovered && (
        <div className="mx-auto max-w-7xl relative">
          <div
            className="absolute"
            style={{
              left: '10%',
              width: '60%',
              background: 'rgba(8, 51, 68, 0.3)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderTop: 'none',
              borderRadius: '0 0 0.5rem 0.5rem', // Only bottom corners rounded
              marginTop: '0',
              zIndex: 40,
            }}
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            <div className="px-6 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  to="/services"
                  className="block p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="font-semibold text-primary mb-2 group-hover:text-primary/80">All Services</div>
                  <div className="text-sm text-muted-foreground">View our complete service portfolio</div>
                </Link>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="font-medium text-foreground mb-2 group-hover:text-primary">{service.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {service.name === "Web Development" && "Custom websites & web applications"}
                      {service.name === "Mobile App Development" && "iOS & Android mobile solutions"}
                      {service.name === "Database Administration" && "Database design & optimization"}
                      {service.name === "Cloud Solutions" && "AWS, Azure & cloud infrastructure"}
                      {service.name === "DevOps & CI/CD" && "Automation & deployment pipelines"}
                      {service.name === "API Development" && "RESTful & GraphQL APIs"}
                      {service.name === "Software Consulting" && "Technical strategy & architecture"}
                      {service.name === "Maintenance & Support" && "Ongoing support & updates"}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects Dropdown - 60% width with 10% left margin and 30% right margin */}
      {isProjectsHovered && (
        <div className="mx-auto max-w-7xl relative">
          <div
            className="absolute"
            style={{
              left: '10%',
              width: '60%',
              background: 'rgba(8, 51, 68, 0.3)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderTop: 'none',
              borderRadius: '0 0 0.5rem 0.5rem', // Only bottom corners rounded
              marginTop: '0',
              zIndex: 40,
            }}
            onMouseEnter={() => setIsProjectsHovered(true)}
            onMouseLeave={() => setIsProjectsHovered(false)}
          >
            <div className="px-6 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  to="/projects"
                  className="block p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="font-semibold text-primary mb-2 group-hover:text-primary/80">All Projects</div>
                  <div className="text-sm text-muted-foreground">View our complete project portfolio</div>
                </Link>
                {projectLinks.map((project) => (
                  <Link
                    key={project.name}
                    to={project.href}
                    className="block p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="font-medium text-foreground mb-2 group-hover:text-primary">{project.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {project.name === "In-House Projects" && "Internal company projects & products"}
                      {project.name === "External Projects" && "Client work & commissioned projects"}
                      {project.name === "Mobile Apps" && "iOS & Android applications"}
                      {project.name === "Websites" && "Web applications & corporate sites"}
                      {project.name === "Desktop Apps" && "Cross-platform desktop applications"}
                      {project.name === "E-commerce" && "Online stores & marketplace solutions"}
                      {project.name === "SaaS Platforms" && "Software as a Service solutions"}
                      {project.name === "API Projects" && "Backend services & integrations"}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation - Full width seamless extension */}
      {isOpen && (
        <div className="mx-auto max-w-7xl">
          <div 
            className="md:hidden w-full"
            style={{
              background: 'rgba(8, 51, 68, 0.3)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderTop: 'none',
              borderRadius: '0 0 0.5rem 0.5rem',
              marginTop: '0',
            }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                if (link.name === "Services") {
                  return (
                    <div key={link.name}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`w-full text-left px-3 py-2 transition-colors duration-300 flex items-center justify-between ${
                          location.pathname === link.href || location.pathname.startsWith('/services/')
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`h-4 w-4 transform transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileServicesOpen && (
                        <div className="pl-4 space-y-1">
                          <Link
                            to="/services"
                            className="block px-3 py-2 text-sm text-foreground hover:text-primary transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            All Services
                          </Link>
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="block px-3 py-2 text-sm text-foreground hover:text-primary transition-colors duration-300"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.name === "Projects") {
                  return (
                    <div key={link.name}>
                      <button
                        onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                        className={`w-full text-left px-3 py-2 transition-colors duration-300 flex items-center justify-between ${
                          location.pathname === link.href || location.pathname.startsWith('/projects/')
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`h-4 w-4 transform transition-transform ${mobileProjectsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileProjectsOpen && (
                        <div className="pl-4 space-y-1">
                          <Link
                            to="/projects"
                            className="block px-3 py-2 text-sm text-foreground hover:text-primary transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            All Projects
                          </Link>
                          {projectLinks.map((project) => (
                            <Link
                              key={project.name}
                              to={project.href}
                              className="block px-3 py-2 text-sm text-foreground hover:text-primary transition-colors duration-300"
                              onClick={() => setIsOpen(false)}
                            >
                              {project.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block px-3 py-2 transition-colors duration-300 ${
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" className="w-full font-medium">
                  Login
                </Button>
                <Button className="w-full font-medium">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;