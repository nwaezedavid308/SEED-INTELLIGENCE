import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Video,
  Camera,
  Compass,
  ArrowUpRight,
  Check,
  Award,
  Users,
  FileText,
  Monitor,
  Mail
} from 'lucide-react';
import { SERVICES } from '../data';

const PILLARS = [
  'Brand Strategy & Audits',
  'Content & Media Systems',
  'AI Marketing Setup',
  'Performance & Funnels'
] as const;

type PillarType = typeof PILLARS[number];

export default function Services() {
  const [activePillar, setActivePillar] = useState<PillarType>('Brand Strategy & Audits');
  const [activeService, setActiveService] = useState<string>(
    SERVICES.find(s => s.pillar === 'Brand Strategy & Audits')?.id || SERVICES[0].id
  );
  const [hoveredPill, setHoveredPill] = useState<PillarType | null>(null);

  // Map icon strings to Lucide icon components
  const iconMap: { [key: string]: any } = {
    Award: <Award className="w-5 h-5 text-black" />,
    Compass: <Compass className="w-5 h-5 text-black" />,
    Users: <Users className="w-5 h-5 text-black" />,
    FileText: <FileText className="w-5 h-5 text-black" />,
    Sparkles: <Sparkles className="w-5 h-5 text-black" />,
    Monitor: <Monitor className="w-5 h-5 text-black" />,
    Mail: <Mail className="w-5 h-5 text-black" />,
    Video: <Video className="w-5 h-5 text-black" />,
    Camera: <Camera className="w-5 h-5 text-black" />,
  };

  const handlePillarChange = (pillar: PillarType) => {
    setActivePillar(pillar);
    const firstInPillar = SERVICES.find(s => s.pillar === pillar);
    if (firstInPillar) {
      setActiveService(firstInPillar.id);
    }
  };

  const servicesInPillar = SERVICES.filter(s => s.pillar === activePillar);
  const currentService = SERVICES.find(s => s.id === activeService) || servicesInPillar[0] || SERVICES[0];

  return (
    <section id="services" className="relative py-24 bg-[#060a08] overflow-hidden border-t border-[#10b981]/5">
      {/* Background visual styling */}
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />
      <div className="absolute left-10 top-1/4 w-[350px] h-[350px] radial-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Reference Design 5 Style Header with Bold Pills */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-[#10b981] uppercase font-bold mb-4 block">
            Capabilities Ecosystem
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight uppercase mb-8">
            Strategic Pillars
          </h2>

          {/* Pillar Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {PILLARS.map((pillar) => (
              <button
                id={`pillar-pill-${pillar.toLowerCase().replace(/\s+/g, '-')}`}
                key={pillar}
                onClick={() => handlePillarChange(pillar)}
                onMouseEnter={() => setHoveredPill(pillar)}
                onMouseLeave={() => setHoveredPill(null)}
                className={`px-6 py-3.5 rounded-full font-display text-xs sm:text-sm font-bold tracking-wider uppercase border-2 transition-all cursor-pointer ${
                  activePillar === pillar
                    ? 'bg-[#10b981] text-black border-[#10b981] shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                    : hoveredPill === pillar
                    ? 'bg-[#10b981]/15 text-[#10b981] border-[#10b981]/50 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                    : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'
                }`}
              >
                {pillar}
              </button>
            ))}
          </div>
        </div>

        {/* Content Panel: Blends Reference Design 5 and 6 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-start">
          
          {/* Left Side: Services List in Selected Pillar */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-4">
              {activePillar} Packages
            </span>
            <div className="space-y-2">
              {servicesInPillar.map((srv) => {
                const isActive = activeService === srv.id;
                return (
                  <button
                    id={`service-list-item-${srv.id}`}
                    key={srv.id}
                    onClick={() => setActiveService(srv.id)}
                    className={`w-full text-left p-6 rounded-2xl transition-all border cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-[#0b120f]/80 border-[#10b981]/30 shadow-[0_4px_25px_rgba(16,185,129,0.05)]'
                        : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.01]'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Round colored badge */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-[#10b981]' : 'bg-white/5 group-hover:bg-white/10'
                      }`}>
                        {isActive ? (
                          iconMap[srv.iconName] || <Sparkles className="w-5 h-5 text-black" />
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-[#10b981]" />
                        )}
                      </div>
                      <span className={`font-display text-base font-bold transition-colors ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`}>
                        {srv.title}
                      </span>
                    </div>

                    <ArrowUpRight className={`w-5 h-5 transition-all ${
                      isActive ? 'text-[#10b981] rotate-45 scale-110' : 'text-gray-600'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: High-Fidelity Focused Department Info Card with animation */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-12 rounded-3xl bg-[#090e0c] border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden"
              >
                {/* Visual Glow Spotlight */}
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#10b981]/15 rounded-full blur-[60px]" />

                {/* Header info */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#10b981] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    {iconMap[currentService.iconName] || <Sparkles className="w-5 h-5 text-black" />}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#10b981] tracking-widest uppercase">
                      {currentService.pillar}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {currentService.title}
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-base text-gray-400 mb-8 leading-relaxed">
                  {currentService.description}
                </p>

                {/* Sub-capabilities listed with elegant checkmarks */}
                <div className="mb-8">
                  <span className="font-mono text-[11px] text-[#10b981] uppercase tracking-wider block mb-4">
                    Core Focus & Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentService.details.map((detail, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-white/[0.02] p-3 rounded-xl border border-white/[0.02]">
                        <div className="w-5 h-5 rounded bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#10b981]" />
                        </div>
                        <span className="font-sans text-xs text-gray-300 leading-tight">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack used tags */}
                <div>
                  <span className="font-mono text-[11px] text-gray-500 uppercase tracking-wider block mb-3">
                    Production Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentService.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded bg-white/5 border border-white/10 font-mono text-[10px] text-[#a7f3d0] uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
