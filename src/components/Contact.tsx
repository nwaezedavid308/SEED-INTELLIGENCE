import { useState, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Check, Mail, Phone, Clock, Sparkles, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';

interface ContactProps {
  initialCategory?: string;
}

export default function Contact({ initialCategory }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: initialCategory || 'branding',
    budget: '$1,000 - $3,000',
    timeline: 'Within 2-4 weeks',
    description: '',
  });

  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, projectType: initialCategory }));
    }
  }, [initialCategory]);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const serviceOptions = [
    { id: 'branding', label: 'Branding & Visual Identity' },
    { id: 'online-campaigns', label: 'Smart Online Marketing Campaigns' },
    { id: 'offline-campaigns', label: 'Smart Offline Marketing Campaigns' },
    { id: 'web', label: 'Website or Landing Page' },
    { id: 'video', label: 'Videos & Social Reels' },
    { id: 'motion', label: 'Animations & Explainers' },
    { id: 'social', label: 'Social Media Management' },
    { id: 'full-suite', label: 'All-in-One Online & Offline Marketing' },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const selectedServiceLabel = serviceOptions.find(s => s.id === formData.projectType)?.label || formData.projectType;

    const message = `*NEW PROJECT INQUIRY - SEED INTELLIGENZE*
----------------------------------------
*Name*: ${formData.name}
*Company*: ${formData.company || 'Not specified'}
*Email*: ${formData.email}
*Phone/WhatsApp*: ${formData.phone || 'Not specified'}
*Service Needed*: ${selectedServiceLabel}
*Budget*: ${formData.budget}
*Timeline*: ${formData.timeline}
*Project Details*: ${formData.description}`;

    const whatsappUrl = `https://wa.me/2348110607341?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 900);
  };

  return (
    <section id="engage" className="relative py-24 bg-[#050806] overflow-hidden border-t border-[#10b981]/10">
      {/* Visual background accents */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] radial-glow opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#10b981]/15 border border-[#10b981]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
            <span className="font-mono text-[9px] text-[#a7f3d0] uppercase tracking-[0.2em] font-bold">
              START A PROJECT
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            Tell Us What <br className="hidden sm:inline" />
            <span className="text-gradient-green font-extrabold">You Want to Build.</span>
          </h2>
          <p className="font-sans text-sm text-gray-400 leading-relaxed">
            Tell us about your business, what you sell, and what you need. We will reply within 12 hours with a clear plan, simple timeline, and exact price.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Commitments */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-[#080d0b] border border-white/5 space-y-6">
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">
                Direct Contact
              </h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                Prefer to speak directly? Call, message on WhatsApp, or email us anytime.
              </p>

              <div className="space-y-3 pt-2 font-sans text-xs">
                {/* Primary WhatsApp / Call Line */}
                <a
                  href="https://wa.me/2348110607341"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-[#10b981]/10 border border-white/5 hover:border-[#10b981]/30 transition-all text-gray-300 hover:text-white group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#10b981]/20 flex items-center justify-center text-[#10b981] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-gray-500">WhatsApp & Phone Calls</span>
                    <span className="font-semibold text-white group-hover:text-[#10b981] transition-colors">+234 811 060 7341</span>
                  </div>
                </a>

                {/* Additional Phone 1: 07066080648 */}
                <a
                  href="tel:07066080648"
                  className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-[#10b981]/10 border border-white/5 hover:border-[#10b981]/30 transition-all text-gray-300 hover:text-white group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#10b981]/20 flex items-center justify-center text-[#10b981] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-gray-500">Direct Line</span>
                    <span className="font-semibold text-white group-hover:text-[#10b981] transition-colors">07066080648</span>
                  </div>
                </a>

                {/* Additional Phone 2: 08163743310 */}
                <a
                  href="tel:08163743310"
                  className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-[#10b981]/10 border border-white/5 hover:border-[#10b981]/30 transition-all text-gray-300 hover:text-white group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#10b981]/20 flex items-center justify-center text-[#10b981] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-gray-500">Direct Line</span>
                    <span className="font-semibold text-white group-hover:text-[#10b981] transition-colors">08163743310</span>
                  </div>
                </a>

                {/* Email Address: seedintelligenze@gmail.com */}
                <a
                  href="mailto:seedintelligenze@gmail.com"
                  className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-[#10b981]/10 border border-white/5 hover:border-[#10b981]/30 transition-all text-gray-300 hover:text-white group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#10b981]/20 flex items-center justify-center text-[#10b981] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono uppercase text-gray-500">Email Us Directly</span>
                    <span className="font-semibold text-white group-hover:text-[#10b981] transition-colors truncate block">seedintelligenze@gmail.com</span>
                  </div>
                </a>
              </div>

              {/* Guarantees */}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="flex items-center space-x-2.5 text-xs text-gray-400">
                  <Clock className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>12-Hour response guaranteed</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>Clear pricing, no hidden fees</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-gray-400">
                  <Sparkles className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>Made specifically for your business</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Engagement Form */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#090e0b] border border-white/10 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <form id="project-intake-form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-medium">
                          Your Name <span className="text-[#10b981]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Johnson"
                          className="w-full px-4 py-3 bg-[#050806] border border-white/10 focus:border-[#10b981] rounded-xl text-white text-xs outline-none transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-medium">
                          Business Email <span className="text-[#10b981]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 bg-[#050806] border border-white/10 focus:border-[#10b981] rounded-xl text-white text-xs outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone / WhatsApp */}
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-medium">
                          WhatsApp / Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 bg-[#050806] border border-white/10 focus:border-[#10b981] rounded-xl text-white text-xs outline-none transition-colors"
                        />
                      </div>

                      {/* Company Name */}
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-medium">
                          Company / Brand Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Apex Ventures"
                          className="w-full px-4 py-3 bg-[#050806] border border-white/10 focus:border-[#10b981] rounded-xl text-white text-xs outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-medium">
                        Primary Service Needed <span className="text-[#10b981]">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {serviceOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => setFormData({ ...formData, projectType: opt.id })}
                            className={`p-2.5 rounded-xl border text-left font-sans text-xs transition-all cursor-pointer ${
                              formData.projectType === opt.id
                                ? 'border-[#10b981] bg-[#10b981]/15 text-white font-semibold shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                                : 'border-white/10 bg-[#050806] text-gray-400 hover:border-white/20 hover:text-white'
                            }`}
                          >
                            <span className="line-clamp-1">{opt.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-medium">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 bg-[#050806] border border-white/10 focus:border-[#10b981] rounded-xl text-white text-xs outline-none transition-colors"
                        >
                          <option value="Under $1,000">Under $1,000</option>
                          <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                          <option value="$3,000 - $7,000">$3,000 - $7,000</option>
                          <option value="$7,000 - $15,000">$7,000 - $15,000</option>
                          <option value="$15,000+">$15,000+ (Full Ongoing Marketing)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-medium">
                          Desired Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-4 py-3 bg-[#050806] border border-white/10 focus:border-[#10b981] rounded-xl text-white text-xs outline-none transition-colors"
                        >
                          <option value="Immediately (Urgent)">Immediately (Urgent)</option>
                          <option value="Within 2-4 weeks">Within 2-4 weeks</option>
                          <option value="Within 1-2 months">Within 1-2 months</option>
                          <option value="Flexible / Planning stage">Flexible / Planning stage</option>
                        </select>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-medium">
                        Tell Us About Your Project <span className="text-[#10b981]">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Tell us what you want to build or grow, who your customers are, and what you want to achieve..."
                        className="w-full px-4 py-3 bg-[#050806] border border-white/10 focus:border-[#10b981] rounded-xl text-white text-xs outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 rounded-xl bg-[#10b981] hover:bg-[#34d399] text-black font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] cursor-pointer disabled:opacity-50"
                      >
                        {submitting ? (
                          <span>Sending Your Message...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message & Chat With Us</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center mx-auto text-[#10b981]">
                      <Check className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight">
                        Message Sent!
                      </h3>
                      <p className="font-sans text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out! We've prepared your message for WhatsApp. We'll reply within 12 hours with a clear plan and price for your project.
                      </p>
                    </div>
                    <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                      <a
                        href="https://wa.me/2348110607341"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-[#10b981] text-black font-sans text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center space-x-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat on WhatsApp</span>
                      </a>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-3 rounded-full border border-white/10 text-gray-300 hover:text-white font-sans text-xs font-semibold uppercase tracking-wider"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
