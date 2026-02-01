import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, User, LogOut, ArrowRight } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20' 
        : 'bg-white'
    }`}>
      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/Selybi_Logo.png" 
              alt="Selybi Logo" 
              className="h-9 w-9 transition-transform group-hover:scale-105" 
            />
            <span className="text-2xl font-semibold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Selybi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative py-2 font-medium transition-colors duration-200 ${
                  location.pathname === link.href
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : "text-slate-700 hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="font-medium flex items-center gap-2 text-slate-700">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <span>{user?.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={logout}
                    className="flex items-center text-red-600 focus:text-red-600"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                className="font-medium bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group" 
                asChild
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - Slide in from right */}
      <div 
        className={`lg:hidden fixed top-16 lg:top-20 right-0 h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col px-6 py-6">
          <div className="flex-1 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block px-4 py-4 rounded-xl font-medium text-lg transition-colors ${
                  location.pathname === link.href
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Auth Buttons */}
          <div className="pt-6 mt-6 border-t border-gray-100 space-y-3">
            {isAuthenticated ? (
              <>
                <div className="px-4 py-2 text-sm text-gray-500">
                  Signed in as <span className="font-medium text-gray-900">{user?.name}</span>
                </div>
                <Button variant="ghost" className="w-full justify-start font-medium" asChild>
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    <User className="mr-2 h-4 w-4" /> Dashboard
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start font-medium text-red-600 border-red-200 hover:bg-red-50"
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </Button>
              </>
            ) : (
              <Button className="w-full font-medium bg-gray-900 hover:bg-gray-800 rounded-full py-6 text-base" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>

          {/* Footer in mobile menu */}
          <div className="pt-6 mt-auto border-t border-gray-100">
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-3">
              <Link to="/privacy-policy" onClick={() => setIsOpen(false)} className="hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" onClick={() => setIsOpen(false)} className="hover:text-gray-900 transition-colors">
                Terms & Conditions
              </Link>
            </div>
            <p className="text-center text-xs text-gray-400">
              © {new Date().getFullYear()} Selybi. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-16 lg:top-20 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
