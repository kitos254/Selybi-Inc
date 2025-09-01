import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true); // new state for banner
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed mx-auto rounded-b-lg max-w-7xl top-0 left-0 right-0 z-50 bg-cyan-950/30 backdrop-blur-lg border-b border-border/20">
      {/* Edora Banner */}
      {showBanner && (
        <div>
          <div className="w-full rounded-lg flex items-center justify-between shadow-sm px-4 py-2">
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
          {/* line break (spacing below banner) */}
          <div className="border border-white/20" />
        </div>
      )}

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gradient">Selybi</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium transition-colors duration-300 ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-border/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
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
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
