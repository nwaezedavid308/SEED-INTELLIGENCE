import {
  Award,
  Monitor,
  Camera,
  Video,
  Users,
  Compass,
  Megaphone,
  Mail,
  Check,
  ArrowRight,
  Sparkles,
  Send
} from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const iconMap: { [key: string]: any } = {
    Award: Award,
    Monitor: Monitor,
    Camera: Camera,
    Video: Video,
    Users: Users,
    Compass: Compass,
    Megaphone: Megaphone,
    Mail: Mail,
  };

  return (
    <section id="services" className="relative py-24 bg-[#060a08] border-t border-white/5 overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] radial-glow opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
            <span className="font-mono text-[9px] text-[#a7f3d0] uppercase tracking-[0.2em] font-bold">
              OUR SERVICES
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            Everything Your Business Needs to <br />
            <span className="text-gradient-green font-extrabold">Stand Out & Grow.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            You can hire us for one specific service or let us handle all your creative and marketing work. Clear pricing, fast delivery, and real results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Award;
            return (
              <div
                key={service.id}
                className="p-8 rounded-3xl bg-[#090e0b] border border-white/5 hover:border-[#10b981]/35 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#10b981]/15 border border-[#10b981]/25 flex items-center justify-center text-[#10b981] group-hover:bg-[#10b981] group-hover:text-black transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {service.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#10b981] transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-sans text-xs text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* What You Get */}
                  <div className="pt-2 space-y-2 border-t border-white/5">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 block font-semibold">
                      What You Get:
                    </span>
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                        <span className="leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct CTA per card */}
                <div className="pt-6 mt-6 border-t border-white/5">
                  <button
                    onClick={() => onSelectService(service.id.replace('srv-', ''))}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-[#10b981] text-gray-300 hover:text-black font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer group/btn"
                  >
                    <span>Choose This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
