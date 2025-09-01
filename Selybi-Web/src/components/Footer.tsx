import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
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
      { name: "Web Development", href: "/services" },
      { name: "Mobile Apps", href: "/services" },
      { name: "AI Solutions", href: "/services" },
      { name: "Cloud Services", href: "/services" }
    ],
    support: [
      { name: "Documentation", href: "/projects" },
      { name: "Help Center", href: "/contact" },
      { name: "Contact Support", href: "/contact" },
      { name: "Status Page", href: "/projects" }
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
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@selybi.com", label: "Email" }
  ];

  return (
    <footer className="relative bg-navy-deep border-t border-border/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-electric/10 to-cyan-glow/10"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gradient mb-4">Selybi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Innovating software solutions that empower businesses and transform digital experiences. 
                  We build the future, one line of code at a time.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-muted/20 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group glow-blue"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 pt-8 border-t border-border/20">
            <div className="glass-card p-8 max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Get the latest insights on software development, AI trends, and Selybi updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
                <Button variant="glow" className="px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-muted-foreground text-sm mb-4 md:mb-0">
                © 2024 Selybi. All rights reserved. Crafted with precision and passion.
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={scrollToTop}
                className="group"
              >
                Back to Top
                <ArrowUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;