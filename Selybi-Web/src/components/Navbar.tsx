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
  const isHomePage = location.pathname === "/";
  const isTransparent = isHomePage && !isScrolled;
  const mobileSidebarGlassStyle = {
    backdropFilter: 'blur(14px) saturate(145%)',
    WebkitBackdropFilter: 'blur(14px) saturate(145%)',
    backgroundColor: isHomePage ? 'rgba(15, 23, 42, 0.36)' : 'rgb(255, 255, 255)',
  };
  const activeTabClass = isHomePage
    ? "text-emerald-900 font-bold text-[1.03rem] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-900"
    : "text-primary font-bold text-[1.03rem] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary";

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
      isTransparent
        ? 'bg-transparent'
        : 'bg-white/10 backdrop-blur-[16px] shadow-[0_12px_36px_rgba(2,6,23,0.2)] ring-1 ring-white/25'
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
            <span className={`text-2xl font-semibold ${isTransparent ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>Selybi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative py-2 font-medium transition-colors duration-200 ${
                  location.pathname === link.href
                    ? activeTabClass
                    : `${isTransparent ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-primary'} after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`
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
                  <Button variant="ghost" className={`font-medium flex items-center gap-2 ${isTransparent ? 'text-white hover:bg-white/10 hover:text-white' : 'text-slate-700'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isTransparent ? 'bg-white/15' : 'bg-primary/10'}`}>
                      <User className={`h-4 w-4 ${isTransparent ? 'text-white' : 'text-primary'}`} />
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
                className={`relative overflow-hidden font-medium px-6 rounded-full border border-white/40 bg-white/18 backdrop-blur-md transition-all duration-300 group before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-white/70 before:content-[''] after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-b after:from-white/20 after:to-transparent after:opacity-60 after:content-[''] shadow-[0_8px_18px_rgba(2,6,23,0.22),inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(255,255,255,0.33)] hover:bg-emerald-500/24 hover:border-emerald-300/70 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(4,120,87,0.3),inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-1px_0_rgba(255,255,255,0.45)] active:translate-y-0 active:shadow-[0_6px_14px_rgba(4,120,87,0.24),inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(255,255,255,0.33)] ${
                  isTransparent ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-primary'
                }`}
                asChild
              >
                <Link to="/contact">
                  <span className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-emerald-400/0 via-emerald-300/70 to-emerald-400/0 transition-transform duration-700 ease-out group-hover:translate-x-[120%]" />
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="relative z-10 ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${isTransparent ? 'text-white hover:bg-white/15' : 'text-slate-700 hover:bg-slate-100'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div className={`w-full transition-all duration-300 ${isTransparent ? 'px-4 sm:px-6 lg:px-8' : 'px-0'}`}>
        <div className={`h-px animate-divider-center-out transition-colors duration-300 ${isTransparent ? 'bg-white/85' : 'bg-white/65'}`} />
      </div>

      {/* Mobile Navigation - Slide in from right */}
      <div 
        className={`lg:hidden fixed top-16 lg:top-20 right-0 h-[calc(100dvh-4rem)] lg:h-[calc(100dvh-5rem)] w-full max-w-sm transform transition-transform duration-300 ease-in-out z-40 rounded-bl-3xl backdrop-blur-[14px] ${
          isHomePage
            ? 'border-l border-white/20 shadow-2xl'
            : 'bg-white shadow-2xl'
        } ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={mobileSidebarGlassStyle}
      >
        <div className="h-full flex flex-col px-6 py-6">
          <div className="flex-1 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block px-4 py-4 rounded-xl font-medium text-lg transition-colors ${
                  location.pathname === link.href
                    ? isHomePage
                      ? "text-white bg-white/20"
                      : "text-gray-900 bg-gray-100"
                    : isHomePage
                      ? "text-white/90 hover:bg-white/10 hover:text-white"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Auth Buttons */}
          <div className={`pt-6 mt-6 border-t space-y-3 ${isHomePage ? 'border-white/20' : 'border-gray-100'}`}>
            {isAuthenticated ? (
              <>
                <div className={`px-4 py-2 text-sm ${isHomePage ? 'text-white/75' : 'text-gray-500'}`}>
                  Signed in as <span className={`font-medium ${isHomePage ? 'text-white' : 'text-gray-900'}`}>{user?.name}</span>
                </div>
                <Button variant="ghost" className={`w-full justify-start font-medium ${isHomePage ? 'text-white hover:bg-white/10 hover:text-white' : ''}`} asChild>
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    <User className="mr-2 h-4 w-4" /> Dashboard
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className={`w-full justify-start font-medium ${isHomePage ? 'text-red-200 border-white/25 bg-white/5 hover:bg-white/10 hover:text-red-100' : 'text-red-600 border-red-200 hover:bg-red-50'}`}
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </Button>
              </>
            ) : (
              <Button className={`group relative w-full overflow-hidden rounded-full border py-6 text-base font-medium backdrop-blur-md transition-all duration-300 before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-white/70 before:content-[''] after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-b after:from-white/20 after:to-transparent after:opacity-60 after:content-[''] hover:bg-emerald-500/24 hover:border-emerald-300/70 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(4,120,87,0.3),inset_0_1px_0_rgba(255,255,255,0.55)] ${
                isHomePage
                  ? 'border-white/30 bg-white/14 text-white shadow-[0_8px_18px_rgba(2,6,23,0.3),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(255,255,255,0.28)] hover:text-white'
                  : 'border-white/40 bg-white/18 text-gray-700 shadow-[0_8px_18px_rgba(2,6,23,0.22),inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(255,255,255,0.35)] hover:text-gray-900'
              }`} asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <span className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-emerald-400/0 via-emerald-300/70 to-emerald-400/0 transition-transform duration-700 ease-out group-hover:translate-x-[120%]" />
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="relative z-10 ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>

          {/* Footer in mobile menu */}
          <div className={`pt-6 mt-auto border-t ${isHomePage ? 'border-white/20' : 'border-gray-100'}`}>
            <div className={`flex items-center justify-center gap-4 text-sm mb-3 ${isHomePage ? 'text-white/75' : 'text-gray-500'}`}>
              <Link to="/privacy-policy" onClick={() => setIsOpen(false)} className={`transition-colors ${isHomePage ? 'hover:text-white' : 'hover:text-gray-900'}`}>
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" onClick={() => setIsOpen(false)} className={`transition-colors ${isHomePage ? 'hover:text-white' : 'hover:text-gray-900'}`}>
                Terms & Conditions
              </Link>
            </div>
            <p className={`text-center text-xs ${isHomePage ? 'text-white/60' : 'text-gray-400'}`}>
              © {new Date().getFullYear()} Selybi. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div 
          className={`lg:hidden fixed inset-0 top-16 lg:top-20 z-30 backdrop-blur-[6px] ${isHomePage ? 'bg-black/40' : 'bg-black/28'}`}
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
