import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  Eye,
  X,
  Calendar,
  Users,
  Tag,
  Sparkles,
  ArrowRight,
  Video,
  Camera,
  ChevronLeft,
  ChevronRight,
  FolderOpen,
  Compass
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

interface ExhibitionProps {
  onNavigate: (page: string, params?: { category?: string }) => void;
}

export default function Exhibition({ onNavigate }: ExhibitionProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Group configurations matching Seed Intelligenze Brand & Service Architecture
  const SECTIONS = [
    {
      id: 'brand-strategy',
      label: 'Brand Strategy & Design',
      icon: Tag,
      description: 'Clean logos, professional brand color style books, and unique guidelines.',
      items: GALLERY_ITEMS.filter(item => item.category === 'brand-strategy')
    },
    {
      id: 'content-media',
      label: 'Social Media & Video',
      icon: Video,
      description: 'Complete content plans, engaging graphics, and high-quality commercial video ads.',
      items: GALLERY_ITEMS.filter(item => item.category === 'content-media')
    },
    {
      id: 'performance-funnels',
      label: 'Websites & Advertising',
      icon: Compass,
      description: 'Fast custom websites, direct customer lead generation, and friendly weekly newsletters.',
      items: GALLERY_ITEMS.filter(item => item.category === 'performance-funnels')
    }
  ];

  // Carousel smooth scroll helper
  const handleScroll = (id: string, direction: 'left' | 'right') => {
    const el = document.getElementById(`carousel-${id}`);
    if (el) {
      const scrollAmount = el.clientWidth * 0.75;
      el.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleBriefRedirect = (category: string) => {
    setSelectedItem(null);
    onNavigate('brief', { category });
  };

  return (
    <section id="page-exhibition" className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-[#050806]">
      {/* Grid overlay background */}
      <div className="absolute inset-0 grid-overlay opacity-25 z-0 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] radial-glow opacity-25 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Curated Showcase Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-intelligence-green/10 border border-intelligence-green/20 mb-4"
          >
            <FolderOpen className="w-3.5 h-3.5 text-mint-glow" />
            <span className="font-mono text-[9px] text-[#a7f3d0] tracking-[0.2em] uppercase font-bold">
              SEED PORTFOLIO SHOWCASE
            </span>
          </motion.div>
          
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight uppercase mb-6">
            The Exhibition <br />
            <span className="text-gradient-green font-black">of Mastered Media.</span>
          </h1>
          <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed">
            Browse our completed campaigns and creative works, divided carefully into strategic categories. Each project is designed to captivate attention and drive commercial value.
          </p>
        </div>

        {/* Grouped sections with carousels */}
        <div className="space-y-24">
          {SECTIONS.map((section) => {
            const SectionIcon = section.icon;
            
            return (
              <div key={section.id} className="space-y-6">
                
                {/* Section Header with Carousel Navigation */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-white/5 pb-4">
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center space-x-2.5 text-intelligence-green">
                      <SectionIcon className="w-4.5 h-4.5 text-mint-glow" />
                      <h2 className="font-display font-black text-lg uppercase tracking-wider text-white">
                        {section.label}
                      </h2>
                    </div>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed">
                      {section.description}
                    </p>
                  </div>

                  {/* Slider Control Buttons */}
                  {section.items.length > 0 && (
                    <div className="flex items-center space-x-2.5 self-end shrink-0">
                      <button
                        onClick={() => handleScroll(section.id, 'left')}
                        className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 hover:border-intelligence-green/30 text-gray-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                        aria-label="Scroll left"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleScroll(section.id, 'right')}
                        className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 hover:border-intelligence-green/30 text-gray-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                        aria-label="Scroll right"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Horizontal Scrollable Carousel Container */}
                <div className="relative">
                  {section.items.length > 0 ? (
                    <div
                      id={`carousel-${section.id}`}
                      className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0"
                    >
                      {section.items.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => setSelectedItem(item)}
                          className="w-[280px] sm:w-[340px] shrink-0 snap-start group relative rounded-2xl bg-[#090e0c]/90 border border-white/5 overflow-hidden shadow-xl hover:border-intelligence-green/20 transition-all duration-300 cursor-pointer"
                        >
                          {/* Aspect video media box */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-black flex items-center justify-center">
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            {/* Color grading glass mask */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                            {/* Center interactive trigger icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/35 backdrop-blur-[2px]">
                              <div className="w-11 h-11 rounded-full bg-intelligence-green text-black flex items-center justify-center shadow-lg transition-transform duration-300 scale-75 group-hover:scale-100">
                                {item.mediaType === 'video' ? <Play className="w-4 h-4 fill-black ml-0.5" /> : <Eye className="w-4.5 h-4.5" />}
                              </div>
                            </div>

                            {/* Category Indicator Tag */}
                            <span className="absolute top-3 left-3 font-mono text-[8px] tracking-widest text-mint-glow bg-[#050806]/95 border border-[#10b981]/20 px-2 py-0.5 rounded-full uppercase font-bold">
                              {item.subCategory}
                            </span>
                          </div>

                          {/* Metadata cards */}
                          <div className="p-5">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest leading-none">
                                {item.client}
                              </span>
                              <span className="font-mono text-[9px] text-gray-500">
                                {item.year}
                              </span>
                            </div>
                            <h3 className="font-display text-base font-extrabold text-white uppercase tracking-wide group-hover:text-mint-glow transition-colors leading-tight mb-2">
                              {item.title}
                            </h3>
                            <p className="font-sans text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Fallback empty view */
                    <div className="text-center py-10 bg-[#090e0c]/40 border border-white/5 rounded-2xl">
                      <p className="font-mono text-xs text-gray-600 uppercase tracking-widest">
                        Coming soon: First showreel entries under development.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Full Immersive Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050806]/96 backdrop-blur-md"
          >
            {/* Click backdrop to exit */}
            <div className="absolute inset-0 cursor-default" onClick={() => setSelectedItem(null)} />

            {/* Modal Body Card */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-5xl bg-[#090e0c] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 hover:bg-intelligence-green hover:text-black text-white flex items-center justify-center transition-all cursor-pointer border border-white/10 hover:border-transparent"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Media Viewport left column */}
              <div className="lg:col-span-8 bg-black flex items-center justify-center relative aspect-video lg:aspect-auto lg:h-[75vh]">
                {selectedItem.mediaType === 'video' && selectedItem.videoUrl ? (
                  <div className="w-full h-full relative">
                    <video
                      src={selectedItem.videoUrl}
                      controls
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>

              {/* Sidebar metadata details right column */}
              <div className="lg:col-span-4 p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-[#070b09] overflow-y-auto max-h-[75vh]">
                <div>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-intelligence-green uppercase font-black block mb-2">
                    EXPOSITION BRIEFCASE
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-black text-white leading-tight uppercase mb-4">
                    {selectedItem.title}
                  </h2>
                  <div className="h-0.5 w-12 bg-intelligence-green mb-6" />

                  <p className="font-sans text-xs text-gray-300 leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>

                  {/* Quick fact fields */}
                  <div className="space-y-4 border-t border-b border-white/5 py-5 mb-8">
                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Users className="w-3.5 h-3.5 text-mint-glow" />
                        <span className="font-sans">Client</span>
                      </div>
                      <span className="font-mono text-white font-bold">{selectedItem.client || 'Seed Intelligenze'}</span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Tag className="w-3.5 h-3.5 text-mint-glow" />
                        <span className="font-sans">Category</span>
                      </div>
                      <span className="font-mono text-white font-bold capitalize">{selectedItem.category.replace('-', ' ')}</span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Calendar className="w-3.5 h-3.5 text-mint-glow" />
                        <span className="font-sans">Year</span>
                      </div>
                      <span className="font-mono text-white font-bold">{selectedItem.year}</span>
                    </div>
                  </div>
                </div>

                {/* Dynamic brief transition redirect */}
                <div className="pt-4">
                  <button
                    onClick={() => handleBriefRedirect(selectedItem.category)}
                    className="w-full py-3.5 px-6 rounded-2xl bg-intelligence-green/15 border border-intelligence-green/30 hover:bg-intelligence-green hover:text-black text-intelligence-green transition-all text-xs font-bold font-sans tracking-wider uppercase flex items-center justify-center space-x-2 group cursor-pointer"
                  >
                    <span>Request Similar Production</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
