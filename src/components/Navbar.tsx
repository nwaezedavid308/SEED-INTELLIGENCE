import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, FolderOpen, Send } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onNavigateSection?: (sectionId: string) => void;
}

export default function Navbar({ onNavigateSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['hero', 'about', 'services', 'works', 'why-us', 'faq', 'engage'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'works', label: 'Works' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#050806]/95 backdrop-blur-md border-b border-[#10b981]/15 shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
          : 'py-5 bg-gradient-to-b from-[#050806]/90 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <button
          id="logo-btn"
          onClick={() => scrollToSection('hero')}
          className="cursor-pointer text-left focus:outline-none"
        >
          <Logo />
        </button>

        {/* Desktop Single-Page Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                id={`nav-link-${link.id}`}
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-sans text-xs uppercase tracking-wider transition-colors cursor-pointer py-1 font-semibold ${
                  isActive
                    ? 'text-[#10b981]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* The 2 Core CTAs on Desktop */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            id="nav-view-works-btn"
            onClick={() => scrollToSection('works')}
            className="px-4 py-2 rounded-full font-sans text-xs tracking-wider uppercase font-semibold text-gray-300 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer inline-flex items-center space-x-1.5"
          >
            <FolderOpen className="w-3.5 h-3.5 text-[#10b981]" />
            <span>View Works</span>
          </button>

          <button
            id="nav-engage-btn"
            onClick={() => scrollToSection('engage')}
            className="px-5 py-2 rounded-full font-sans text-xs tracking-wider uppercase font-bold bg-[#10b981] hover:bg-[#34d399] text-black transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] cursor-pointer inline-flex items-center space-x-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Engage Us</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6 text-[#10b981]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#070c09] border-b border-[#10b981]/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left font-sans text-sm uppercase tracking-wider text-gray-300 hover:text-[#10b981] py-2 border-b border-white/5 cursor-pointer font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => scrollToSection('works')}
              className="w-full py-3 rounded-xl border border-white/15 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/5 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <FolderOpen className="w-4 h-4 text-[#10b981]" />
              <span>View Works</span>
            </button>
            <button
              onClick={() => scrollToSection('engage')}
              className="w-full py-3 rounded-xl bg-[#10b981] text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Engage Us for a Job</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
