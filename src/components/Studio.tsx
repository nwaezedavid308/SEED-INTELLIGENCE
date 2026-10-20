import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, ChevronDown, ChevronUp, Award, Users, RefreshCw, Zap, ShieldAlert, FileText, ArrowRight } from 'lucide-react';
import { FAQS, WHY_US_FEATURES } from '../data';

interface StudioProps {
  onNavigate: (page: string) => void;
}

export default function Studio({ onNavigate }: StudioProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [manifestoExpanded, setManifestoExpanded] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const MANIFESTO_POINTS = [
    {
      num: '01',
      title: 'Truth Over Jargon',
      text: 'We reject high-sounding buzzwords, confusing metrics, and opaque retainers. We communicate in plain English, clearly define our deliverables, and maintain total transparency on budgets and real results.'
    },
    {
      num: '02',
      title: 'Craft Over Generic Templates',
      text: 'Every logo, responsive website, motion clip, and social post must be built with intentional artistic and typographic craft. We reject low-effort templates and cookie-cutter designs.'
    },
    {
      num: '03',
      title: 'Sales Over Empty Likes',
      text: 'Impressions and vanity metrics mean nothing if your business does not grow. We engineer marketing systems focused strictly on customer inquiries, booked calls, and direct client revenue.'
    },
    {
      num: '04',
      title: 'Tailored for Your Business Model',
      text: 'Every business is unique. We examine your customer journey and design a custom marketing plan containing only the exact services that make commercial sense for your specific brand type.'
    },
    {
      num: '05',
      title: 'Zero to Big Audience',
      text: 'Starting with zero followers is an opportunity, not a limitation. With disciplined positioning, engaging video assets, and structured paid campaigns, any brand can reach a large, loyal audience.'
    },
    {
      num: '06',
      title: 'Human Trust First',
      text: 'Tools and modern platforms are powerful amplifiers, but genuine human connection, authentic storytelling, and reliable service are what keep clients buying again and again.'
    }
  ];

  const CORE_VALUES = [
    {
      icon: Award,
      title: 'Clear English & Strategy',
      description: 'We do not hide behind complex marketing words. We speak simply and clearly, focusing only on strategies that bring you real business results.'
    },
    {
      icon: Users,
      title: 'Tailored for Your Brand Type',
      description: 'Whether you are a startup, shop, or enterprise, we build a customized marketing plan designed specifically for your brand type.'
    },
    {
      icon: RefreshCw,
      title: 'End-to-End Systems',
      description: 'We handle everything from your brand identity and website design to daily social media, motion animations, and email sequences.'
    }
  ];

  return (
    <section id="page-studio" className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-overlay opacity-25 z-0 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] radial-glow opacity-25 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs tracking-[0.25em] text-[#10b981] uppercase font-bold block">
              OUR AGENCY
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.12]">
              We Take Brands <br />
              From Zero To <br />
              <span className="text-gradient-green">Big Audience.</span>
            </h1>
            <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
              Seed Intelligenze is a branding and marketing agency. We help businesses build a strong identity, run smart offline and online marketing campaigns, and turn people into loyal paying customers.
            </p>
            <p className="font-sans text-sm text-gray-400 leading-relaxed">
              We craft distinctive branding, build fast websites, manage social media profiles, produce commercial video ads, animate motion graphics, and execute high-impact offline and online campaigns. No complex marketing buzzwords—just honest work and real results.
            </p>
          </div>

          {/* Right Bento Accent Card */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#090e0c] to-[#050806] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#10b981]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#10b981]/15 transition-all" />
            
            <span className="font-mono text-xs tracking-[0.2em] text-[#10b981] uppercase font-bold block mb-6">
              CORE SPECIFICATIONS
            </span>

            <div className="space-y-5">
              {WHY_US_FEATURES.map((feat) => (
                <div key={feat.id} className="flex items-start space-x-3.5 group-hover:translate-x-1 transition-transform">
                  <div className="w-5 h-5 rounded-md bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#10b981]" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm text-gray-300 font-medium">
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block">CREATIVE LAB</span>
                <span className="font-sans text-xs text-white font-bold">seedintelligenze@gmail.com</span>
              </div>
              <button
                onClick={() => onNavigate('brief')}
                className="p-3 rounded-2xl bg-[#10b981] hover:bg-[#34d399] text-black transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Agency Manifesto Section - Collapsed by default to one button */}
        <div id="manifesto-section" className="mb-24">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0b120e] via-[#090e0c] to-[#050806] border border-[#10b981]/25 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#10b981]/15 border border-[#10b981]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
                  <span className="font-mono text-[9px] text-[#a7f3d0] uppercase tracking-[0.2em] font-bold">
                    AGENCY PHILOSOPHY
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  The Seed Intelligenze Manifesto
                </h2>
                <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Our founding convictions on why real marketing is built on simple strategy, honest communication, and commercial growth. Click below to explore the manifesto.
                </p>
              </div>

              {/* The Single Button that Expands / Collapses the Manifesto */}
              <button
                id="manifesto-toggle-btn"
                onClick={() => setManifestoExpanded(!manifestoExpanded)}
                className="self-start md:self-center px-6 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider bg-[#10b981] hover:bg-[#34d399] text-black transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center space-x-2 cursor-pointer shrink-0"
              >
                <span>{manifestoExpanded ? 'Collapse Manifesto' : 'Expand Agency Manifesto'}</span>
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
                          className="p-6 rounded-2xl bg-[#090e0c]/90 border border-white/5 space-y-3 relative overflow-hidden group hover:border-[#10b981]/30 transition-all"
                        >
                          <span className="font-mono text-xs font-black text-[#10b981] tracking-wider block">
                            {point.num} // PRINCIPLE
                          </span>
                          <h3 className="font-display text-base font-extrabold text-white uppercase tracking-wide group-hover:text-[#10b981] transition-colors">
                            {point.title}
                          </h3>
                          <p className="font-sans text-xs text-gray-400 leading-relaxed">
                            {point.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        onClick={() => setManifestoExpanded(false)}
                        className="text-xs font-mono text-gray-400 hover:text-[#10b981] transition-colors flex items-center space-x-1 cursor-pointer"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                        <span>Collapse Manifesto Details</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Core Pillars / Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.2em] text-[#10b981] uppercase font-bold block mb-4">
              STUDIO PILLARS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
              Our Professional Ethics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#090e0c]/90 border border-white/5 space-y-4 hover:border-[#10b981]/25 transition-all shadow-xl group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center transition-colors group-hover:bg-[#10b981]/20">
                    <IconComp className="w-5 h-5 text-[#10b981]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#10b981] transition-colors">
                    {val.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Accordion FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs tracking-[0.2em] text-[#10b981] uppercase font-bold block mb-4">
              QUESTIONS & PROTOCOLS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/5 bg-[#090e0c]/80 overflow-hidden transition-all duration-300"
                >
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex justify-between items-center cursor-pointer hover:bg-[#1b2621]/15 transition-colors"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-white tracking-wide uppercase group-hover:text-[#10b981] transition-colors pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#10b981] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>

                  {/* Accordion Content Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-white/5"
                      >
                        <div className="p-6 bg-[#070b09]/50 font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
