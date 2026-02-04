import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4 border-b' : 'bg-transparent py-6'}`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-all duration-300">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold font-heading tracking-tight text-white group-hover:text-blue-100 transition-colors">
            Conversing<span className="text-blue-500">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-white ${location.pathname === link.path ? 'text-white' : 'text-slate-400'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link to="/contact" className="btn btn-primary px-6 py-2.5 text-sm shadow-lg shadow-blue-500/20">
            Get an AI Agent
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 top-[var(--header-height)] bg-black/98 z-40 md:hidden flex flex-col p-8 gap-6 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-3xl font-bold text-white hover:text-blue-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          className="btn btn-primary w-full justify-center mt-6 py-4 text-lg shadow-lg shadow-blue-500/20"
          onClick={() => setIsOpen(false)}
        >
          Get an AI Agent
        </Link>
      </div>

      <style>{`
        nav {
          height: var(--header-height);
          display: flex;
          align-items: center;
        }
        .bg-primary-color {
          background-color: var(--primary-color);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
