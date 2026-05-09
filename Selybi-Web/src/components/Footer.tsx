import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUp, MapPin, Phone, Send, Cpu } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { apiClient } from "@/lib/api";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = newsletterEmail.trim();
    if (!email) {
      toast({ title: "Email required", description: "Please enter your email to subscribe.", variant: "destructive" });
      return;
    }
    setIsSubscribing(true);
    try {
      await apiClient.subscribeNewsletter(email);
      toast({ title: "You're on the list!", description: "We'll keep you updated on AI infrastructure and LizaLab." });
      setNewsletterEmail("");
    } catch (error: any) {
      toast({ title: "Subscription failed", description: error.message || "Please try again later.", variant: "destructive" });
    } finally {
      setIsSubscribing(false);
    }
  };

  const footerLinks = {
    platform: [
      { name: "LizaLab Platform", href: "/platform" },
      { name: "Image Annotation", href: "/platform" },
      { name: "Text Annotation", href: "/platform" },
      { name: "Video & Audio", href: "/platform" },
    ],
    company: [
      { name: "About Selybi", href: "/about" },
      { name: "Our Team", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Projects", href: "/projects" },
    ],
    solutions: [
      { name: "AI Systems Dev", href: "/solutions" },
      { name: "Data Annotation", href: "/solutions" },
      { name: "Custom Software", href: "/solutions" },
      { name: "Industries", href: "/industries" },
    ],
    resources: [
      { name: "Contact Us", href: "/contact" },
      { name: "Start a Project", href: "/contact" },
      { name: "Privacy Policy", href: "/contact" },
      { name: "Terms of Service", href: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/selybi-corp/", label: "LinkedIn" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@selybi_2025", label: "TikTok" },
    { icon: Mail, href: "mailto:inquiries@selybi.com", label: "Email" },
  ];

  return (
    <footer className="text-gray-800" style={{ background: '#f8fafc', borderTop: '1px solid #e5e7eb' }}>
      {/* Newsletter Section */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="h-4 w-4 text-blue-500" />
                <span className="text-xs font-semibold tracking-widest uppercase text-blue-500">AI Insights</span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Stay Ahead in AI Infrastructure</h3>
              <p className="text-gray-500 text-sm">Updates on LizaLab, data annotation, and AI systems.</p>
            </div>
            <form className="flex w-full max-w-sm gap-2" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="your@email.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2.5 rounded-xl focus:outline-none transition-colors text-sm text-gray-800 placeholder:text-gray-400"
                style={{
                  background: '#ffffff',
                  border: '1px solid #d1d5db',
                }}
              />
              <Button className="bg-gray-900 hover:bg-black text-white px-4 rounded-xl" type="submit" disabled={isSubscribing}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <img src="/Selybi_Logo.png" alt="Selybi" className="w-8 h-8 rounded-full object-cover" />
              <span className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Selybi</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              AI systems company & data infrastructure provider. Powering intelligent systems from data to deployment through LizaLab.
            </p>

            {/* Pipeline pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs text-gray-500 mb-6">
              <span>Data</span>
              <span className="text-blue-500">→</span>
              <span>LizaLab</span>
              <span className="text-blue-500">→</span>
              <span>AI Systems</span>
            </div>

            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-2.5 text-gray-500 text-sm">
                <MapPin className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                <span>Global — Remote First</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-500 text-sm">
                <Mail className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                <a href="mailto:inquiries@selybi.com" className="hover:text-gray-900 transition-colors">inquiries@selybi.com</a>
              </div>
              <div className="flex items-center gap-2.5 text-gray-500 text-sm">
                <Phone className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                <a href="tel:+254715246912" className="hover:text-gray-900 transition-colors">+254 715 246 912</a>
              </div>
            </div>

            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-400 hover:scale-110 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-gray-900">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-gray-900">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-gray-900">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-gray-900">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Selybi Inc. Building the infrastructure for AI.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-400 hover:text-gray-900 text-xs transition-colors group"
            >
              Back to Top
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
