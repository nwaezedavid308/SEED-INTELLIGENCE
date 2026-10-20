import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Video,
  Camera,
  Compass,
  CheckCircle2,
  ArrowRight,
  Layers,
  Workflow,
  Award,
  Users,
  FileText,
  Monitor,
  Mail
} from 'lucide-react';
import { SERVICES } from '../data';

interface CapabilitiesProps {
  onNavigate: (page: string) => void;
}

export default function Capabilities({ onNavigate }: CapabilitiesProps) {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id);

  // Icon mapper
  const getIcon = (name: string, className: string) => {
    switch (name) {
      case 'Award':
        return <Award className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'FileText':
        return <FileText className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Monitor':
        return <Monitor className={className} />;
      case 'Mail':
        return <Mail className={className} />;
      case 'Video':
        return <Video className={className} />;
      case 'Camera':
        return <Camera className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  const selectedService = SERVICES.find(srv => srv.id === activeTab) || SERVICES[0];

  return (
    <section id="page-capabilities" className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-overlay opacity-25 z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[550px] h-[550px] radial-glow opacity-30 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-[#10b981] uppercase font-bold block mb-4">
            Agency Capabilities
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight uppercase mb-6">
            Our Core <br />
            <span className="text-gradient-green font-black">Marketing Capabilities</span>
          </h1>
          <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed">
            We combine smart marketing strategy, high-quality media production, and practical AI systems to help your business grow. Explore our core services below.
          </p>
        </div>

        {/* Dual Split Layout: Left Tabs selection, Right Detailed panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Navigation Tabs (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            {SERVICES.map((srv) => (
              <button
                key={srv.id}
                onClick={() => setActiveTab(srv.id)}
                className={`w-full p-6 rounded-3xl text-left border transition-all flex items-start space-x-4 cursor-pointer relative overflow-hidden group ${
                  activeTab === srv.id
                    ? 'bg-[#090e0c]/90 border-[#10b981]/45 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-[#0b100d]/50'
                }`}
              >
                {/* Active gradient slide */}
                {activeTab === srv.id && (
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#10b981]" />
                )}

                {/* Animated icon wrapper */}
                <div className={`p-3 rounded-2xl border transition-all ${
                  activeTab === srv.id
                    ? 'bg-[#10b981]/15 border-[#10b981]/30 text-[#10b981]'
                    : 'bg-white/5 border-white/10 text-gray-400 group-hover:text-white group-hover:border-white/20'
                }`}>
                  {getIcon(srv.iconName, "w-6 h-6")}
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-[#10b981]/80 uppercase tracking-widest block">
                    {srv.pillar}
                  </span>
                  <h3 className="font-display text-base font-bold text-white uppercase tracking-wide group-hover:text-[#10b981] transition-colors leading-tight">
                    {srv.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-400 leading-normal line-clamp-2">
                    {srv.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Detailed Panel (Col 7) */}
          <div className="lg:col-span-7 bg-[#090e0c]/85 border border-white/5 rounded-3xl p-8 sm:p-10 shadow-2xl relative min-h-[500px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/5 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Selected Service Identity */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.2em] text-[#10b981] uppercase font-bold block mb-1">
                      {selectedService.pillar}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                      {selectedService.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedService.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="font-mono text-[9px] tracking-wider text-white bg-white/[0.04] border border-white/15 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sub narrative block */}
                <div className="space-y-4">
                  <h4 className="font-mono text-xs text-[#10b981] uppercase tracking-[0.15em] font-bold">
                    Service Description
                  </h4>
                  <p className="font-sans text-sm text-gray-300 leading-relaxed">
                    {selectedService.description} We design and execute these strategies carefully to make sure they connect your brand directly to your ideal customers.
                  </p>
                </div>

                {/* Deliverable Checklists */}
                <div className="space-y-4">
                  <h4 className="font-mono text-xs text-[#10b981] uppercase tracking-[0.15em] font-bold">
                    Key Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedService.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                        <span className="font-sans text-xs text-gray-300 leading-tight">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-3 text-gray-500">
                    <Workflow className="w-4 h-4 text-[#10b981]" />
                    <span className="font-mono text-[11px] uppercase tracking-wider">
                      Seamless Integration
                    </span>
                  </div>

                  <button
                    onClick={() => onNavigate('brief')}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-[#10b981] text-black hover:bg-[#34d399] text-xs font-bold font-sans tracking-wider uppercase transition-all flex items-center justify-center space-x-2 group cursor-pointer"
                  >
                    <span>Initiate Campaign Brief</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

        {/* Dynamic Studio Pipeline Section */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-[#090e0c]/60 border border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] radial-glow opacity-20 pointer-events-none" />
          
          <div className="mb-10 text-center">
            <span className="font-mono text-xs tracking-[0.25em] text-[#10b981] uppercase font-bold block mb-2">
              Our Methodology
            </span>
            <h3 className="font-display text-2xl font-black text-white uppercase">
              The SEED Growth Engine
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Step S */}
            <div className="space-y-4">
              <span className="font-mono text-2xl font-black text-[#10b981]">S</span>
              <h4 className="font-display text-base font-bold text-white uppercase tracking-wide">
                Sense the Market
              </h4>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                We research your target audience, study your competitors, and understand customer psychology to find what is really happening in your market.
              </p>
            </div>

            {/* Step E */}
            <div className="space-y-4">
              <span className="font-mono text-2xl font-black text-[#10b981]">E</span>
              <h4 className="font-display text-base font-bold text-white uppercase tracking-wide">
                Engineer the Message
              </h4>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                We make your brand message clear, design your service packages, write your website words, and outline high-performing campaign scripts.
              </p>
            </div>

            {/* Step E */}
            <div className="space-y-4">
              <span className="font-mono text-2xl font-black text-[#10b981]">E</span>
              <h4 className="font-display text-base font-bold text-white uppercase tracking-wide">
                Execute the Media System
              </h4>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                We create high-impact, professional content for your brand: social media videos, informative newsletters, paid ads, and simple landing pages.
              </p>
            </div>

            {/* Step D */}
            <div className="space-y-4">
              <span className="font-mono text-2xl font-black text-[#10b981]">D</span>
              <h4 className="font-display text-base font-bold text-white uppercase tracking-wide">
                Deepen the Data
              </h4>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                We track the numbers that matter: reach, clicks, booked calls, and real sales. We then repeat what works best to keep growing.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
