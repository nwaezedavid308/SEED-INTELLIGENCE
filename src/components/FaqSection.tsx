import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Sparkles, MessageSquare } from 'lucide-react';
import { FAQS } from '../data';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#050806] border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#10b981]" />
            <span className="font-mono text-[9px] text-[#a7f3d0] uppercase tracking-[0.2em] font-bold">
              COMMON QUESTIONS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
            Frequently Asked Questions.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-400 mt-3 leading-relaxed">
            Everything you need to know about working with us, our timelines, and how we help your business grow.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#080d0b] border-[#10b981]/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
                    : 'bg-[#080d0b]/70 border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-display text-sm sm:text-base font-bold text-white uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#10b981] bg-[#10b981]/15' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5">
                        <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center text-xs text-gray-400 font-sans">
          <span>Have a custom requirement? </span>
          <a
            href="https://wa.me/2348110607341"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#10b981] font-bold hover:underline inline-flex items-center space-x-1"
          >
            <span>Ask us directly on WhatsApp</span>
            <MessageSquare className="w-3.5 h-3.5 inline ml-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
