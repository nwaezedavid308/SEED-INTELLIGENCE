import { Check, X, ShieldCheck, Sparkles, Send, ArrowRight } from 'lucide-react';

interface WhyUsSectionProps {
  onEngage: () => void;
}

export default function WhyUsSection({ onEngage }: WhyUsSectionProps) {
  const COMPARISONS = [
    {
      ordinary: 'Posting random pictures on social media and hoping for luck.',
      seed: 'Building clear websites, videos, and ads that turn visitors into paying customers.',
      outcome: 'You get real customer calls and messages instead of empty likes.'
    },
    {
      ordinary: 'Charging expensive monthly fees with no clear list of what is delivered.',
      seed: 'Clear pricing, weekly progress updates, and agreed deadlines for every task.',
      outcome: 'You always know what you are paying for and when it will be finished.'
    },
    {
      ordinary: 'Using the same recycled templates for every client.',
      seed: 'Designing custom logos, websites, and videos made specifically for your brand.',
      outcome: 'Your business looks unique, trustworthy, and stands out immediately.'
    },
    {
      ordinary: 'Using complicated marketing buzzwords to explain poor results.',
      seed: 'Explaining everything in plain, simple, everyday English.',
      outcome: 'Zero confusion, easy decisions, and complete clarity on your growth.'
    }
  ];

  return (
    <section id="why-us" className="relative py-24 bg-[#060a08] border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
            <span className="font-mono text-[9px] text-[#a7f3d0] uppercase tracking-[0.2em] font-bold">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            How Other Agencies Work vs. <br />
            <span className="text-gradient-green font-extrabold">How We Work.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            We believe in honest work and real results. Here is what makes working with us different.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="space-y-4">
          {COMPARISONS.map((comp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#090e0b] border border-white/5 hover:border-[#10b981]/25 transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-lg"
            >
              {/* Ordinary Agency */}
              <div className="lg:col-span-5 flex items-start space-x-3 text-left">
                <div className="w-7 h-7 rounded-full bg-red-500/10 border border-red-500/25 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                  <X className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-red-400 font-bold block">
                    Other Agencies
                  </span>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed">
                    {comp.ordinary}
                  </p>
                </div>
              </div>

              {/* Seed Intelligenze */}
              <div className="lg:col-span-5 flex items-start space-x-3 text-left border-t lg:border-t-0 lg:border-l border-white/5 pt-4 lg:pt-0 lg:pl-6">
                <div className="w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#10b981] font-bold block">
                    The Seed Intelligenze Way
                  </span>
                  <p className="font-sans text-xs text-white font-medium leading-relaxed">
                    {comp.seed}
                  </p>
                </div>
              </div>

              {/* Result */}
              <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l border-white/5 pt-4 lg:pt-0 lg:pl-6 text-left">
                <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 font-bold block mb-1">
                  What You Get
                </span>
                <p className="font-sans text-[11px] text-[#a7f3d0] leading-snug">
                  {comp.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 text-center">
          <button
            onClick={onEngage}
            className="px-8 py-4 rounded-full bg-[#10b981] hover:bg-[#34d399] text-black font-sans text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] cursor-pointer inline-flex items-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>Start Your Project With Us</span>
          </button>
        </div>

      </div>
    </section>
  );
}
