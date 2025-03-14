import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {
    isLoggedIn,
    logout
  } = useAuth();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  if (!isLoggedIn) return null;
  const navigationLinks = [{
    name: "Home",
    path: "/home"
  }, {
    name: "Features",
    path: "/features"
  }, {
    name: "Testimonials",
    path: "/testimonials"
  }, {
    name: "Pricing",
    path: "/pricing"
  }, {
    name: "AI Features",
    path: "/ai-features"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 py-4 bg-gray-50">
        <div className="flex justify-between items-center">
          <Link to="/home" className="text-xl md:text-2xl font-bold text-gradient" onClick={closeMenu}>
            SNS Course
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map(link => <Link key={link.name} to={link.path} className={`text-sm font-medium transition-colors hover:text-sns-purple ${location.pathname === link.path ? 'text-sns-blue' : 'text-gray-700'}`}>
                {link.name}
              </Link>)}
            <button onClick={logout} className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-600 transition-colors">
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navigationLinks.map(link => <Link key={link.name} to={link.path} className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-sns-blue' : 'text-gray-700'}`} onClick={closeMenu}>
                  {link.name}
                </Link>)}
              <button onClick={() => {
            closeMenu();
            logout();
          }} className="flex items-center gap-2 text-sm font-medium text-red-500">
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;