import { motion } from 'motion/react';
import {
  Send,
  FolderOpen,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Target,
  Award,
  Users,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { STATS } from '../data';

interface HeroSectionProps {
  onNavigateSection: (sectionId: string) => void;
}

export default function HeroSection({ onNavigateSection }: HeroSectionProps) {
  const TICKER_ITEMS = [
    'Branding & Visual Identity',
    'Smart Online Marketing Campaigns',
    'Smart Offline Marketing Campaigns',
    'Fast Websites & Landing Pages',
    'Short Videos & Social Reels',
    'Animations & Explainer Videos',
    'Social Media Management',
    'From Zero to Known Brand',
  ];

  const CLIENT_LOGOS = [
    'NEXA DYNAMICS',
    'CHRONO LAB',
    'AURA STUDIOS',
    'APEX GLOBAL',
    'ECOGROW ORGANIC',
    'VORTEX MEDIA',
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#050806]">
      {/* Background radial lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] radial-glow opacity-30 z-0 pointer-events-none" />
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 mb-8 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
          <span className="font-mono text-[9px] sm:text-[10px] text-[#a7f3d0] tracking-[0.25em] uppercase font-bold">
            SEED INTELLIGENZE · BRANDING & SMART MARKETING
          </span>
        </motion.div>

        {/* Main Headline - Natural, Human, Crystal Clear */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-[1.08] mb-6 max-w-5xl mx-auto"
        >
          We Help Your Business <br />
          <span className="text-gradient-green font-black">Stand Out & Win Customers.</span>
        </motion.h1>

        {/* Subtitle - Conversational, Human, Direct */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          We build memorable branding, design fast websites, and run smart offline and online marketing campaigns that bring in paying customers. No confusing buzzwords. Just honest work that helps you grow.
        </motion.p>

        {/* THE 2 CORE CALLS TO ACTION */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 max-w-xl mx-auto"
        >
          {/* Action 1: Engage us */}
          <button
            id="hero-engage-btn"
            onClick={() => onNavigateSection('engage')}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-sans text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#10b981] hover:bg-[#34d399] text-black transition-all shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] cursor-pointer inline-flex items-center justify-center space-x-2.5 group"
          >
            <Send className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
            <span>Engage us</span>
          </button>

          {/* Action 2: View our works */}
          <button
            id="hero-view-works-btn"
            onClick={() => onNavigateSection('works')}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-sans text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#0c140f] hover:bg-[#121e17] text-white border border-white/15 hover:border-[#10b981]/50 transition-all cursor-pointer inline-flex items-center justify-center space-x-2.5 group shadow-lg"
          >
            <FolderOpen className="w-4 h-4 text-[#10b981] group-hover:scale-110 transition-transform" />
            <span>View our works</span>
          </button>
        </motion.div>

        {/* Stat Highlights with Lucide Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10"
        >
          {STATS.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="font-display font-black text-xl sm:text-2xl text-white block">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Client Recognition Strip */}
        <div className="pt-12 max-w-4xl mx-auto">
          <span className="font-mono text-[9px] text-gray-500 uppercase tracking-[0.25em] block mb-4">
            TRUSTED BY REAL BUSINESSES & GROWING BRANDS
          </span>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 opacity-60 hover:opacity-100 transition-opacity">
            {CLIENT_LOGOS.map((name, i) => (
              <span key={i} className="font-display text-xs sm:text-sm font-extrabold text-gray-300 tracking-[0.18em]">
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Infinite Horizontal Capabilities Ticker - Zero Emojis, Pure Lucide Sparkles */}
      <div className="relative w-full overflow-hidden select-none pt-12 mt-8 z-10 border-b border-white/5 bg-[#060a08]">
        <div className="w-full bg-[#10b981]/5 border-y border-[#10b981]/25 py-3 overflow-hidden">
          <div className="flex whitespace-nowrap w-max animate-marquee-left">
            <div className="flex space-x-10 px-6 items-center">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="flex space-x-10 items-center">
                  {TICKER_ITEMS.map((item, itemIdx) => (
                    <span key={itemIdx} className="font-display font-bold text-gray-300 hover:text-white text-xs tracking-[0.2em] uppercase flex items-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-[#10b981] mr-3" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
            {/* Duplicated for seamless loop */}
            <div className="flex space-x-10 px-6 items-center" aria-hidden="true">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="flex space-x-10 items-center">
                  {TICKER_ITEMS.map((item, itemIdx) => (
                    <span key={itemIdx} className="font-display font-bold text-gray-300 hover:text-white text-xs tracking-[0.2em] uppercase flex items-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-[#10b981] mr-3" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee CSS */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marqueeLeftHero {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-marquee-left {
            animation: marqueeLeftHero 40s linear infinite;
          }
        `}} />
      </div>

    </section>
  );
}
