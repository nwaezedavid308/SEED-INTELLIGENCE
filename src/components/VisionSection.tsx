import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ChevronDown,
  ChevronUp,
  Target,
  Compass,
  Zap,
  TrendingUp,
  ShieldCheck,
  Award,
  Layers,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface VisionSectionProps {
  onEngageClick: () => void;
}

export default function VisionSection({ onEngageClick }: VisionSectionProps) {
  const [manifestoExpanded, setManifestoExpanded] = useState<boolean>(false);

  const MANIFESTO_POINTS = [
    {
      num: '01',
      title: 'Plain Words Over Buzzwords',
      text: 'We never use confusing marketing terms to sound smart. We speak like real human beings, explain what we are doing, and show you exactly what your investment brings in.'
    },
    {
      num: '02',
      title: 'Made For You, Not Copied',
      text: 'Every logo, website, and graphic is made from scratch for your specific business. We never cut corners or use recycled templates.'
    },
    {
      num: '03',
      title: 'Real Customers Over Vanity Likes',
      text: 'Social media likes do not pay your bills. We care about what matters most: real phone calls, messages, inquiries, and paying customers.'
    },
    {
      num: '04',
      title: 'Built Around What You Need',
      text: 'Every business is at a different stage. We only suggest what will truly help you grow right now—no unnecessary extras or bloated packages.'
    },
    {
      num: '05',
      title: 'Start Strong, Even From Zero',
      text: 'You do not need a huge following to get started. With clear messaging, clean visuals, and targeted ads, you can start winning customers right away.'
    },
    {
      num: '06',
      title: 'Quick Replies & Reliable Work',
      text: 'We respond fast, deliver what we promised on time, and keep you in the loop every step of the way. Honest communication always comes first.'
    }
  ];

  const SEED_PILLARS = [
    {
      icon: Target,
      step: '01',
      title: 'Branding & Visual Identity',
      desc: 'We create custom logos, color palettes, brand guidelines, and print materials so your business looks professional, established, and trustworthy.'
    },
    {
      icon: Layers,
      step: '02',
      title: 'Websites & Media',
      desc: 'We build fast, mobile-friendly websites and produce punchy videos and animations that explain what you sell in seconds.'
    },
    {
      icon: TrendingUp,
      step: '03',
      title: 'Smart Offline & Online Campaigns',
      desc: 'We launch targeted digital ads and strategic offline marketing (billboards, street banners, activations) to win customers everywhere.'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#050806] border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
            <span className="font-mono text-[9px] text-[#a7f3d0] uppercase tracking-[0.2em] font-bold">
              WHAT WE STAND FOR
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            Creative Work. <br />
            <span className="text-gradient-green font-extrabold">Real Customer Sales.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Most businesses struggle not because their product is bad, but because people simply have not heard of them yet. We make sure you get noticed, earn trust, and win more customers.
          </p>
        </div>

        {/* 3 Core Growth Framework Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {SEED_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#080d0b] border border-white/5 hover:border-[#10b981]/30 transition-all group space-y-4 relative overflow-hidden"
              >
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] group-hover:bg-[#10b981] group-hover:text-black transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-black text-gray-600 group-hover:text-[#10b981] transition-colors">
                    {pillar.step}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#10b981] transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* THE AGENCY PRINCIPLES - Single Button Collapsible Component */}
        <div id="manifesto-card" className="rounded-3xl bg-gradient-to-br from-[#0c1410] via-[#090e0b] to-[#040605] border border-[#10b981]/25 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#10b981]/15 border border-[#10b981]/30">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                <span className="font-mono text-[9px] text-[#a7f3d0] uppercase tracking-[0.2em] font-bold">
                  OUR PROMISES
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Our Core Principles
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                Why we believe in simple words, honest pricing, and focusing strictly on real customer sales.
              </p>
            </div>

            {/* The Single Button that Expands / Collapses the Principles */}
            <button
              id="manifesto-toggle-btn"
              onClick={() => setManifestoExpanded(!manifestoExpanded)}
              className="self-start md:self-center px-6 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider bg-[#10b981] hover:bg-[#34d399] text-black transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center space-x-2 cursor-pointer shrink-0"
            >
              <span>{manifestoExpanded ? 'Hide Our Principles' : 'Read Our Principles'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${manifestoExpanded ? 'rotate-180' : 'rotate-0'}`} />
            </button>
          </div>

          {/* Expandable Manifesto Content */}
          <AnimatePresence>
            {manifestoExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pt-8 mt-8 border-t border-white/10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MANIFESTO_POINTS.map((point) => (
                      <div
                        key={point.num}
                        className="p-6 rounded-2xl bg-[#070b09]/90 border border-white/5 space-y-3 relative overflow-hidden group hover:border-[#10b981]/30 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-black text-[#10b981] tracking-wider block">
                            {point.num} // PRINCIPLE
                          </span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]/60" />
                        </div>
                        <h4 className="font-display text-base font-extrabold text-white uppercase tracking-wide group-hover:text-[#10b981] transition-colors">
                          {point.title}
                        </h4>
                        <p className="font-sans text-xs text-gray-400 leading-relaxed">
                          {point.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      onClick={onEngageClick}
                      className="text-xs font-sans font-bold text-[#10b981] hover:underline inline-flex items-center space-x-1.5 cursor-pointer"
                    >
                      <span>Ready to work together? Let's talk</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setManifestoExpanded(false)}
                      className="text-xs font-mono text-gray-400 hover:text-[#10b981] transition-colors flex items-center space-x-1.5 cursor-pointer"
                    >
                      <ChevronUp className="w-3.5 h-3.5" />
                      <span>Close</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
