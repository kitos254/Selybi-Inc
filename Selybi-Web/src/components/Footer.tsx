import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUp, MapPin, Phone, Send } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about" },
      { name: "Careers", href: "/contact" },
      { name: "News & Blog", href: "/projects" }
    ],
    services: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Apps", href: "/services/mobile-development" },
      { name: "Cloud Solutions", href: "/services/cloud-solutions" },
      { name: "API Development", href: "/services/api-development" }
    ],
    resources: [
      { name: "Documentation", href: "/projects" },
      { name: "Help Center", href: "/contact" },
      { name: "Case Studies", href: "/projects" },
      { name: "Contact Support", href: "/contact" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/contact" },
      { name: "Terms of Service", href: "/contact" },
      { name: "Cookie Policy", href: "/contact" },
      { name: "GDPR", href: "/contact" }
    ]
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/selybi-corp/", label: "LinkedIn" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@selybi_2025", label: "TikTok" },
    { icon: Mail, href: "mailto:contact@selybi.com", label: "Email" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-slate-400">
                Get the latest insights on software development and technology trends.
              </p>
            </div>
            <div className="flex w-full max-w-md gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white placeholder:text-slate-500"
              />
              <Button className="bg-primary hover:bg-primary/90 px-6">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img 
                src="/Selybi_Logo.png" 
                alt="Selybi Logo" 
                className="h-10 w-10" 
              />
              <span className="text-2xl font-bold text-gradient">Selybi</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Building innovative software solutions that empower businesses and transform 
              digital experiences. We build the future, one line of code at a time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Global - Remote First Company</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contact@selybi.com" className="hover:text-white transition-colors">
                  contact@selybi.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+254715246912" className="hover:text-white transition-colors">
                  +254 715 246 912
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Selybi. All rights reserved. Crafted with precision and passion.
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
            >
              Back to Top
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
