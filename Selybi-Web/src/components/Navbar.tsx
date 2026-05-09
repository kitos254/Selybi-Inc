import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const NAV_BG = "#ffffff";
const NAV_BORDER = "#e5e7eb";

const navLinks = [
  { name: "Platform", href: "/platform" },
  { name: "Solutions", href: "/solutions" },
  { name: "Projects", href: "/projects" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: NAV_BG, borderBottom: `1px solid ${NAV_BORDER}` }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <img src="/Selybi_Logo.png" alt="Selybi" className="w-8 h-8 rounded-full object-cover" />
            <span className="text-gray-900 font-semibold text-base tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Selybi
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-3.5 py-1.5 text-sm rounded-md transition-colors duration-150"
                style={{
                  color: isActive(link.href) ? '#111827' : '#6b7280',
                  fontWeight: isActive(link.href) ? 500 : 400,
                }}
                onMouseEnter={e => {
                  if (!isActive(link.href)) (e.currentTarget as HTMLElement).style.color = '#111827';
                }}
                onMouseLeave={e => {
                  if (!isActive(link.href)) (e.currentTarget as HTMLElement).style.color = '#6b7280';
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ── Desktop Right ── */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-full text-gray-500 hover:text-gray-900 transition-colors text-sm">
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-700">
                      {user?.name?.charAt(0)}
                    </div>
                    <ChevronDown className="h-3.5 w-3.5 opacity-40" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44">
                  <DropdownMenuItem asChild>
                    <Link to="/" className="flex items-center gap-2 text-sm">
                      <User className="h-3.5 w-3.5" /> Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="flex items-center gap-2 text-sm text-red-600 focus:text-red-600">
                    <LogOut className="h-3.5 w-3.5" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium text-white transition-all hover:opacity-90"
                style={{ background: '#111827' }}
              >
                Get in touch
              </Link>
            )}
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        className={`lg:hidden fixed top-16 right-0 h-[calc(100dvh-4rem)] w-72 transform transition-transform duration-300 ease-in-out z-40 flex flex-col`}
        style={{
          background: '#ffffff',
          borderLeft: `1px solid ${NAV_BORDER}`,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="flex-1 flex flex-col px-4 py-5 overflow-y-auto">
          <div className="space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: isActive(link.href) ? '#111827' : '#6b7280',
                  background: isActive(link.href) ? '#f3f4f6' : 'transparent',
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-5 border-t space-y-3" style={{ borderColor: NAV_BORDER }}>
            {isAuthenticated ? (
              <>
                <p className="px-4 text-xs text-white/40">Signed in as <span className="text-white/70 font-medium">{user?.name}</span></p>
                <button
                  onClick={() => { logout(); setIsOpen(false); }}
                  className="w-full flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </>
            ) : (
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full py-2.5 rounded-full text-sm font-medium text-white transition-all hover:opacity-90"
                style={{ background: '#111827' }}
              >
                Get in touch
              </Link>
            )}
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">© {new Date().getFullYear()} Selybi Inc.</p>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 z-30 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
