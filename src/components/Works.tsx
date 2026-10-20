import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  Eye,
  X,
  Calendar,
  Tag,
  Sparkles,
  ArrowRight,
  FolderOpen,
  Send,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

interface WorksProps {
  onEngageSimilar: (category: string) => void;
}

export default function Works({ onEngageSimilar }: WorksProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    { id: 'brand-strategy', label: 'Branding' },
    { id: 'marketing-campaigns', label: 'Offline & Online Campaigns' },
    { id: 'performance-funnels', label: 'Websites & Digital' },
    { id: 'content-media', label: 'Video & Social' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const handleEngageClick = (category: string) => {
    setSelectedItem(null);
    onEngageSimilar(category);
  };

  return (
    <section id="works" className="relative py-24 bg-[#050806] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 mb-4">
            <FolderOpen className="w-3.5 h-3.5 text-[#10b981]" />
            <span className="font-mono text-[9px] text-[#a7f3d0] uppercase tracking-[0.2em] font-bold">
              OUR WORK
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            Recent Projects & <br />
            <span className="text-gradient-green font-extrabold">Real Results.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Real brands we helped design, launch, and grow. Click any project to see what we built and how it helped.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full font-sans text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#10b981] text-black shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group rounded-3xl bg-[#090e0b] border border-white/5 hover:border-[#10b981]/40 overflow-hidden transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1 shadow-lg"
            >
              {/* Media Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={item.src}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('unsplash.com')) {
                      target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80';
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                />
                
                {/* Media Type Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[9px] text-white uppercase tracking-wider font-bold inline-flex items-center space-x-1.5">
                    {item.mediaType === 'video' ? (
                      <>
                        <Play className="w-2.5 h-2.5 text-[#10b981] fill-[#10b981]" />
                        <span>Video Asset</span>
                      </>
                    ) : (
                      <>
                        <Tag className="w-2.5 h-2.5 text-[#10b981]" />
                        <span>{item.subCategory}</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#050806]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 rounded-full bg-[#10b981] text-black font-sans text-xs font-bold uppercase tracking-wider inline-flex items-center space-x-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </div>
                </div>
              </div>

              {/* Project Card Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                    <span className="text-[#10b981] font-bold">{item.client || 'Agency Client'}</span>
                    <span>{item.year}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-white uppercase tracking-wide group-hover:text-[#10b981] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-sans font-bold text-[#10b981]">
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Bottom Prompt for Works */}
        <div className="mt-16 text-center p-8 rounded-3xl bg-[#080d0b] border border-white/5 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="font-display text-base font-bold text-white uppercase">Like What You See?</h4>
            <p className="font-sans text-xs text-gray-400">Let's build something just as clean and effective for your business.</p>
          </div>
          <button
            onClick={() => handleEngageClick('branding')}
            className="px-6 py-3 rounded-full bg-[#10b981] hover:bg-[#34d399] text-black font-sans text-xs font-bold uppercase tracking-wider shrink-0 transition-all cursor-pointer inline-flex items-center space-x-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Start Your Project</span>
          </button>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090e0b] border border-[#10b981]/30 shadow-2xl p-6 sm:p-8 space-y-6 relative text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Media */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/10 relative">
                {selectedItem.mediaType === 'video' && selectedItem.videoUrl ? (
                  <video
                    src={selectedItem.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('unsplash.com')) {
                        target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80';
                      }
                    }}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Narrative Content */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#10b981]/15 text-[#10b981] font-mono text-[10px] uppercase tracking-wider font-bold">
                    {selectedItem.subCategory}
                  </span>
                  <span className="font-mono text-xs text-gray-500">Client: {selectedItem.client}</span>
                  <span className="font-mono text-xs text-gray-500">• Year: {selectedItem.year}</span>
                </div>

                <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight">
                  {selectedItem.title}
                </h3>

                <p className="font-sans text-sm text-gray-300 leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                    <span>Completed on time with zero hidden costs</span>
                  </div>

                  <button
                    onClick={() => handleEngageClick(selectedItem.category)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#10b981] hover:bg-[#34d399] text-black font-sans text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center space-x-2 cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Work With Us on a Project Like This</span>
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
