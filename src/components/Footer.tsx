import { Mail, Phone, ArrowUp, Send, FolderOpen, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigateSection?: (sectionId: string) => void;
}

export default function Footer({ onNavigateSection }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="app-footer" className="bg-[#030604] border-t border-white/5 pt-16 pb-12 relative overflow-hidden text-gray-400">
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand Vision */}
          <div className="md:col-span-5 space-y-4">
            <button
              id="footer-logo"
              onClick={scrollToTop}
              className="cursor-pointer text-left focus:outline-none"
            >
              <Logo />
            </button>
            <p className="font-sans text-xs text-gray-400 max-w-sm leading-relaxed">
              Seed Intelligenze is a branding and marketing agency. We craft distinctive branding, build fast websites, produce engaging media, and run smart offline and online marketing campaigns that bring in paying customers.
            </p>
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono text-[#10b981]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>No Complicated Buzzwords // Real Results</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-[10px] text-[#10b981] uppercase tracking-widest font-bold block">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-sans">
              <button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left">About Us</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left">Services</button>
              <button onClick={() => scrollToSection('works')} className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left">Our Works</button>
              <button onClick={() => scrollToSection('why-us')} className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left">Why Us</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left">FAQ</button>
            </div>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-[10px] text-[#10b981] uppercase tracking-widest font-bold block">
              Contact Us
            </span>
            <div className="space-y-2 text-xs font-sans">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#10b981] shrink-0" />
                <a id="footer-email-link" href="mailto:seedintelligenze@gmail.com" className="cursor-pointer hover:text-[#10b981] transition-colors truncate">
                  seedintelligenze@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#10b981] shrink-0" />
                <a id="footer-phone-link" href="https://wa.me/2348110607341" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-[#10b981] transition-colors">
                  +234 811 060 7341 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#10b981] shrink-0" />
                <a id="footer-phone-alt1-link" href="tel:07066080648" className="cursor-pointer hover:text-[#10b981] transition-colors">
                  07066080648
                </a>
                <span className="text-gray-600">•</span>
                <a id="footer-phone-alt2-link" href="tel:08163743310" className="cursor-pointer hover:text-[#10b981] transition-colors">
                  08163743310
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <button
                onClick={() => scrollToSection('engage')}
                className="px-4 py-2 rounded-lg bg-[#10b981] text-black font-sans text-xs font-bold uppercase tracking-wider inline-flex items-center space-x-1.5 hover:bg-[#34d399] transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Engage Us</span>
              </button>
              <button
                onClick={() => scrollToSection('works')}
                className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 font-sans text-xs font-semibold uppercase tracking-wider inline-flex items-center space-x-1.5 hover:text-white hover:border-white/20 transition-all cursor-pointer"
              >
                <FolderOpen className="w-3.5 h-3.5 text-[#10b981]" />
                <span>View Works</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Seed Intelligenze. All rights reserved.
          </p>

          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-[#10b981] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
