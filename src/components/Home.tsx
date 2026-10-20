import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  ArrowRight,
  Play,
  Camera,
  Sparkles,
  Award,
  ShieldCheck,
  Zap,
  PlayCircle,
  Eye,
  AlertCircle,
  RefreshCw,
  Layers,
  CheckCircle2,
  FileText,
  Send,
  HelpCircle,
  Activity,
  ArrowRightLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Phone,
  Check,
  Users
} from 'lucide-react';
import Logo from './Logo';

interface HomeProps {
  onNavigate: (page: string, params?: { category?: string }) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  // Simulated Show Player Episode states
  const [activeEpisode, setActiveEpisode] = useState<number>(0);
  const [showNotification, setShowNotification] = useState<string | null>(null);
  const [manifestoExpanded, setManifestoExpanded] = useState<boolean>(false);

  const COMPETITIVE_DIFFERENCE = [
    {
      ordinary: 'Post random pictures and wait.',
      seed: 'Build strategic campaigns that convert viewers into paying clients.',
      benefit: 'Focus on actual sales and growth instead of just empty likes.'
    },
    {
      ordinary: 'Charge high fees with zero transparency.',
      seed: 'Deliver clear services, simple packages, and honest reports.',
      benefit: 'You always know exactly what you are paying for and the results you get.'
    },
    {
      ordinary: 'Use generic templates for every brand.',
      seed: 'Design custom websites, logos, and content for your specific business type.',
      benefit: 'Your brand stands out and looks highly professional and unique.'
    },
    {
      ordinary: 'Hide behind complex marketing jargon.',
      seed: 'Explain everything in simple, clear, and easy English.',
      benefit: 'No confusing talk, just direct strategies and real growth.'
    }
  ];

  const SEED_STEPS = [
    {
      letter: 'S',
      title: 'Study Your Market',
      meaning: 'We research your target buyers, study what your competitors are doing, and find out what makes your business unique.',
      questions: ['Who are your best customers and where do they hang out online?', 'What can your brand offer that competitors cannot?']
    },
    {
      letter: 'E',
      title: 'Establish Your Message',
      meaning: 'We design your brand style, select colors, package your offers clearly, and write simple, friendly, and persuasive text.',
      questions: ['What clear benefits make your services trusted?', 'How can your offers be presented simply so buying is easy?']
    },
    {
      letter: 'E',
      title: 'Execute the Marketing',
      meaning: 'We build your fast custom website, design social media content calendars, shoot premium videos, and set up newsletters.',
      questions: ['How can we create content that keeps people watching?', 'Are we guiding interested profile visitors to book a call?']
    },
    {
      letter: 'D',
      title: 'Deliver Clear Results',
      meaning: 'We monitor how many visitors click, track client inquiries from ads, and refine our designs to get you the best results.',
      questions: ['Which marketing channels are bringing you the most sales?', 'How can we increase your booking rate and keep customers buying?']
    }
  ];

  const EPISODES = [
    {
      title: 'The New Attention Economy',
      season: 'Season 1',
      episode: 'Episode 01',
      description: 'Why modern businesses must think and operate like media companies, and how to build a private audience asset.',
      duration: '45 mins',
      guest: 'Founder, Seed Intelligenze'
    },
    {
      title: 'Why Your Content Gets Likes But No Sales',
      season: 'Season 1',
      episode: 'Episode 02',
      description: 'Breaking down the massive structural gap between audience engagement and commercial customer conversion.',
      duration: '38 mins',
      guest: 'Lead Growth Operator'
    },
    {
      title: 'AI Will Not Save a Weak Brand',
      season: 'Season 2',
      episode: 'Episode 01',
      description: 'Why core positioning and creative taste matter more than ever in an era of infinite synthetic noise.',
      duration: '52 mins',
      guest: 'AI Workflow Architect'
    }
  ];

  const CLIENTS = [
    { name: 'Nexa Dynamics', logo: 'NEXA DYNAMICS' },
    { name: 'Chrono Lab', logo: 'CHRONO.LAB' },
    { name: 'AURA Magazine', logo: 'AURA MAG' },
    { name: 'Vanguard Arch', logo: 'VANGUARD' },
    { name: 'Grid Sound', logo: 'GRID.SOUND' },
  ];

  const setNotification = (message: string) => {
    setShowNotification(message);
    setTimeout(() => setShowNotification(null), 5000);
  };

  return (
    <div id="landing-page-root" className="relative min-h-screen bg-[#050806] text-white selection:bg-[#10b981] selection:text-black">
      {/* Toast Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm p-4 rounded-2xl bg-dark-emerald border border-mint-glow text-white shadow-2xl flex items-center space-x-3"
          >
            <div className="w-8 h-8 rounded-full bg-intelligence-green/20 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-mint-glow" />
            </div>
            <p className="font-sans text-xs font-semibold leading-normal">{showNotification}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid overlay background */}
      <div className="absolute inset-0 grid-overlay opacity-25 z-0 pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative pt-32 pb-20 overflow-hidden flex flex-col justify-center min-h-[90vh]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] radial-glow-strong opacity-35 z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Tagline & Brand Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-intelligence-green/10 border border-intelligence-green/30 mb-8 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-mint-glow" />
            <span className="font-mono text-[10px] text-[#a7f3d0] tracking-[0.2em] uppercase font-bold">
              Marketing + Media + AI = Growth
            </span>
          </motion.div>

          {/* Core Visual Promise */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-8 uppercase"
          >
            We take brands from<br />
            <span className="text-gradient-green">Zero to Big Audience.</span>
          </motion.h1>

          {/* Action-Driving Call to Action Array */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={() => onNavigate('brief')}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-sans text-xs font-extrabold tracking-widest uppercase bg-intelligence-green text-black hover:bg-mint-glow transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(124,255,199,0.55)] flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <span>Book Growth Audit</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            
            <a
              href="#showcase-show"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-sans text-xs font-extrabold tracking-widest uppercase bg-white/5 border border-white/10 hover:border-intelligence-green/50 text-white hover:bg-intelligence-green/5 transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <PlayCircle className="w-4 h-4 text-mint-glow" />
              <span>Watch The Show</span>
            </a>
          </motion.div>

          {/* Credentials Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-8 border-t border-white/5 max-w-4xl mx-auto"
          >
            <span className="font-mono text-[9px] text-gray-500 uppercase tracking-[0.2em] block mb-6">
              RECOGNIZED FOR BOLD WORLD-CLASS THINKING
            </span>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
              {CLIENTS.map((client, idx) => (
                <span key={idx} className="font-display font-extrabold text-white text-xs sm:text-sm tracking-[0.2em]">
                  {client.logo}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1.5. MOVING TAPE TICKER SYSTEM */}
      <div className="relative w-full overflow-hidden select-none py-12 z-10 my-6">
        <div className="w-[112%] -left-[6%] relative -rotate-6 scale-[1.03] space-y-4 bg-[#050806]/60 py-6 border-y border-white/5">
          {/* Tape 1 - Brighter Neon Green & White (Left-moving) */}
          <div className="w-full bg-[#00ff66]/5 border-y border-[#00ff66]/35 py-3.5 overflow-hidden">
            <div className="flex whitespace-nowrap w-max animate-marquee-left">
              <div className="flex space-x-12 px-6">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <span key={idx} className="font-display font-black text-white text-[11px] sm:text-xs tracking-[0.25em] uppercase flex items-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff66] mr-4" /> BRANDING
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff66] mx-4" /> WEBSITES & DESIGN
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff66] mx-4" /> DIGITAL MARKETING
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff66] mx-4" /> VIDEO PRODUCTION
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff66] mx-4" /> MOTION GRAPHICS
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff66] mx-4" /> PAID ADVERTISING
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff66] mx-4" /> EMAIL NEWSLETTERS
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff66] mx-4" /> <span className="text-[#00ff66] drop-shadow-[0_0_12px_rgba(0,255,102,1)] font-extrabold">ZERO TO BIG AUDIENCE</span>
                  </span>
                ))}
              </div>
              {/* Duplicated for seamless scrolling */}
              <div className="flex space-x-12 px-6" aria-hidden="true">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <span key={idx} className="font-display font-black text-white text-[11px] sm:text-xs tracking-[0.25em] uppercase flex items-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff66] mr-4" /> BRANDING
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff66] mx-4" /> WEBSITES & DESIGN
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff66] mx-4" /> DIGITAL MARKETING
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff66] mx-4" /> VIDEO PRODUCTION
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff66] mx-4" /> MOTION GRAPHICS
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff66] mx-4" /> PAID ADVERTISING
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff66] mx-4" /> EMAIL NEWSLETTERS
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff66] mx-4" /> <span className="text-[#00ff66] drop-shadow-[0_0_12px_rgba(0,255,102,1)] font-extrabold">ZERO TO BIG AUDIENCE</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tape 2 - Dark Deep Seed (Right-moving) */}
          <div className="w-full bg-[#0a140f] border-y border-[#00ff66]/20 py-3.5 overflow-hidden">
            <div className="flex whitespace-nowrap w-max animate-marquee-right">
              <div className="flex space-x-12 px-6">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <span key={idx} className="font-mono text-[10px] text-gray-300 tracking-[0.25em] uppercase flex items-center shrink-0">
                    <Sparkles className="w-3 h-3 text-[#00ff66] mr-4" /> <span className="text-[#00ff66] font-black">SEED INTELLIGENCES</span>
                    <Sparkles className="w-3 h-3 text-[#00ff66] mx-4" /> UNIQUE BRANDING SOLUTIONS
                    <Sparkles className="w-3 h-3 text-[#00ff66] mx-4" /> DIGITAL MARKETING AGENCY
                    <Sparkles className="w-3 h-3 text-[#00ff66] mx-4" /> FROM ZERO TO BIG AUDIENCE
                    <Sparkles className="w-3 h-3 text-[#00ff66] mx-4" /> CREATIVE SERVICES & STRATEGY
                  </span>
                ))}
              </div>
              {/* Duplicated for seamless scrolling */}
              <div className="flex space-x-12 px-6" aria-hidden="true">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <span key={idx} className="font-mono text-[10px] text-gray-300 tracking-[0.25em] uppercase flex items-center shrink-0">
                    <Sparkles className="w-3 h-3 text-[#00ff66] mr-4" /> <span className="text-[#00ff66] font-black">SEED INTELLIGENCES</span>
                    <Sparkles className="w-3 h-3 text-[#00ff66] mx-4" /> UNIQUE BRANDING SOLUTIONS
                    <Sparkles className="w-3 h-3 text-[#00ff66] mx-4" /> DIGITAL MARKETING AGENCY
                    <Sparkles className="w-3 h-3 text-[#00ff66] mx-4" /> FROM ZERO TO BIG AUDIENCE
                    <Sparkles className="w-3 h-3 text-[#00ff66] mx-4" /> CREATIVE SERVICES & STRATEGY
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS for seamless keyframe marquee loops */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marqueeLeftCustom {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          @keyframes marqueeRightCustom {
            0% { transform: translate3d(-50%, 0, 0); }
            100% { transform: translate3d(0, 0, 0); }
          }
          .animate-marquee-left {
            animation: marqueeLeftCustom 40s linear infinite;
          }
          .animate-marquee-right {
            animation: marqueeRightCustom 45s linear infinite;
          }
        `}} />
      </div>



      {/* 3. THE SOLUTION SECTION - Connected Growth Systems */}
      <section id="solution" className="relative py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs tracking-[0.25em] text-intelligence-green uppercase font-bold block mb-4">
              Our Process
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
              Simple & Professional <span className="text-gradient-green font-black">Digital Marketing</span>
            </h2>
            <p className="font-sans text-gray-400 text-sm leading-relaxed">
              We believe marketing should be unique to your business. Our services are designed specifically for your brand type to help you reach a big audience and get real sales.
            </p>
          </div>

          {/* Solution Grid comparing Seed to ordinary agencies */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="p-8 rounded-3xl bg-[#0b100d] border border-white/5 hover:border-intelligence-green/20 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-intelligence-green/10 flex items-center justify-center border border-intelligence-green/20">
                <Layers className="w-5 h-5 text-mint-glow" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                1. Custom Strategy
              </h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                We learn about your business and create a simple plan to help you find and connect with your local or global customers.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0b100d] border border-white/5 hover:border-intelligence-green/20 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-intelligence-green/10 flex items-center justify-center border border-intelligence-green/20">
                <Camera className="w-5 h-5 text-mint-glow" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                2. Professional Assets
              </h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                We design memorable logos, build fast websites that work seamlessly on mobile, make clean videos, and write clear messaging that people trust.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0b100d] border border-white/5 hover:border-intelligence-green/20 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-intelligence-green/10 flex items-center justify-center border border-intelligence-green/20">
                <Zap className="w-5 h-5 text-mint-glow" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                3. Lead Generation
              </h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                We create and post weekly social media content and run online ads to get you more customer inquiries and sales.
              </p>
            </div>
          </div>

          {/* Ordinary vs Seed Comparison Table */}
          <div className="bg-[#070b09] border border-white/5 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="font-display text-base font-extrabold text-white uppercase tracking-wider mb-8 text-center sm:text-left">
              The Seed Intelligenze Competitive Advantage
            </h3>
            <div className="divide-y divide-white/5">
              {COMPETITIVE_DIFFERENCE.map((diff, index) => (
                <div key={index} className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                  <div className="lg:col-span-4 flex items-center space-x-3">
                    <span className="font-mono text-xs text-red-400 line-through shrink-0 flex items-center gap-1.5"><span className="text-red-400 font-bold">X</span> Ordinary Agency Says:</span>
                    <span className="font-sans text-xs text-gray-500 italic">{diff.ordinary}</span>
                  </div>
                  <div className="lg:col-span-5 flex items-center space-x-3">
                    <span className="font-mono text-xs text-mint-glow font-bold shrink-0 flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#10b981]" /> Seed Intelligenze Says:</span>
                    <span className="font-display font-extrabold text-xs text-white uppercase tracking-wide">{diff.seed}</span>
                  </div>
                  <div className="lg:col-span-3 text-left">
                    <p className="font-sans text-[11px] text-gray-400 leading-relaxed">{diff.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE SEED GROWTH ENGINE STAGE */}
      <section id="engine-methodology" className="relative py-24 border-t border-white/5 bg-[#070b09]">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-6">
              <span className="font-mono text-xs tracking-[0.25em] text-intelligence-green uppercase font-bold block">
                Our Proprietary Framework
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
                The SEED <br />
                <span className="text-gradient-green font-black">Growth Engine.</span>
              </h2>
              <p className="font-sans text-sm text-gray-400 leading-relaxed">
                We believe in structure over luck. Our unified strategy moves logically through four proprietary phases to guarantee clear message engineering and conversion.
              </p>
              
              <button
                onClick={() => onNavigate('brief')}
                className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-intelligence-green hover:text-white transition-colors cursor-pointer group"
              >
                <span>Run your brand through the engine</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Steps Timeline Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SEED_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0b100d] border border-white/5 hover:border-intelligence-green/20 transition-all space-y-4 shadow-lg group relative overflow-hidden"
                >
                  {/* Watermark letter */}
                  <span className="absolute top-2 right-4 font-display font-black text-6xl text-white/5 group-hover:text-intelligence-green/10 transition-colors pointer-events-none select-none">
                    {step.letter}
                  </span>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-intelligence-green/10 border border-intelligence-green/20 flex items-center justify-center font-mono text-xs font-bold text-mint-glow">
                      0{idx + 1}
                    </div>
                    <h3 className="font-display font-extrabold text-sm uppercase text-white tracking-wide">
                      {step.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-gray-400 leading-relaxed">
                    {step.meaning}
                  </p>

                  <div className="pt-3 border-t border-white/5 space-y-2">
                    <span className="font-mono text-[9px] text-[#10b981] font-bold uppercase block tracking-wider">
                      Critical Diagnostic:
                    </span>
                    <ul className="space-y-1.5">
                      {step.questions.map((q, qidx) => (
                        <li key={qidx} className="font-sans text-[10px] text-gray-500 flex items-start space-x-1.5">
                          <span className="text-intelligence-green shrink-0 mt-0.5">•</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. THE SHOWCASE SHOW - Content IP Spotlight */}
      <section id="showcase-show" className="relative py-24 border-t border-white/5">
        <div className="absolute top-1/2 left-10 w-[450px] h-[450px] radial-glow opacity-25 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Show Meta left side */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs tracking-[0.25em] text-intelligence-green uppercase font-bold block">
                Flagship Content IP
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
                The Seed Intelligenze <span className="text-gradient-green font-black">Content Universe</span>
              </h2>
              <p className="font-sans text-sm text-gray-400 leading-relaxed">
                Our flagship show explores how founders, designers, and growth marketers use AI intelligently, engineer world-class campaigns, and build systems to win attention in crowded markets.
              </p>

              {/* Show Segments checklist */}
              <div className="space-y-3 pt-3">
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block font-bold">
                  RECURRING SEGMENTS:
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs font-sans">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Award className="w-3.5 h-3.5 text-mint-glow" />
                    <span>Attention Audit</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Zap className="w-3.5 h-3.5 text-mint-glow" />
                    <span>AI Growth Lab</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Play className="w-3.5 h-3.5 text-mint-glow" />
                    <span>Brand Surgery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Users className="w-3.5 h-3.5 text-mint-glow" />
                    <span>Founder Room</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('exhibition')}
                  className="px-6 py-3 rounded-full font-sans text-xs font-bold uppercase bg-intelligence-green text-black hover:bg-mint-glow transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>Browse Episodes</span>
                </button>
              </div>
            </div>

            {/* Immersive player simulation on the right */}
            <div className="lg:col-span-7">
              <div className="bg-[#0b100d] border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                {/* Simulated video frame */}
                <div className="relative aspect-video rounded-2xl bg-black overflow-hidden flex items-center justify-center border border-white/5 mb-6 group">
                  {/* Simulated cover image depending on active episode */}
                  <img
                    src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80"
                    alt="Talkshow video cover"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-85" />
                  
                  {/* Play circle */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                    <button
                      onClick={() => setNotification(`Streaming simulation started: "Playing S1: Episode ${activeEpisode + 1}"`)}
                      className="w-16 h-16 rounded-full bg-intelligence-green text-black flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer"
                    >
                      <Play className="w-7 h-7 fill-black ml-1" />
                    </button>
                    <span className="font-mono text-[9px] text-[#10b981] uppercase tracking-[0.2em] font-black bg-black/60 px-3 py-1 rounded-full">
                      CLICK TO PLAY PREVIEW
                    </span>
                  </div>

                  {/* Floating episode tag */}
                  <span className="absolute top-4 left-4 font-mono text-[9px] text-white bg-red-500 px-2.5 py-1 rounded-md uppercase font-extrabold tracking-widest animate-pulse">
                    ● SEASON EXCLUSIVES
                  </span>
                </div>

                {/* Playlist control switcher */}
                <div className="space-y-3">
                  <span className="font-mono text-[9px] text-gray-500 tracking-widest uppercase block font-bold">
                    SELECT EPISODE ANGLE:
                  </span>
                  
                  <div className="space-y-2">
                    {EPISODES.map((ep, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveEpisode(idx)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                          activeEpisode === idx
                            ? 'bg-deep-seed-green/40 border-intelligence-green text-white'
                            : 'bg-[#070b09]/60 border-white/5 text-gray-400 hover:border-white/10'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="font-mono text-xs text-intelligence-green font-black">
                            0{idx + 1}
                          </span>
                          <div>
                            <span className="block font-display font-bold text-xs uppercase tracking-wide leading-none">{ep.title}</span>
                            <span className="block font-sans text-[10px] text-gray-400 mt-1">{ep.guest} • {ep.duration}</span>
                          </div>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform ${activeEpisode === idx ? 'text-mint-glow rotate-90' : 'text-gray-600'}`} />
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>



      {/* 6. THE AGENCY MANIFESTO - Collapsed to one button */}
      <section id="manifesto" className="relative py-20 border-t border-white/5 bg-[#050806]">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0b120e] via-[#080d0b] to-[#040605] border border-[#10b981]/25 relative overflow-hidden shadow-2xl">
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
                  Our core founding convictions: Why real marketing is built on simple strategy, honest communication, and actual customer conversions.
                </p>
              </div>

              {/* The Single Button that Expands / Collapses the Manifesto */}
              <button
                id="home-manifesto-toggle-btn"
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
                      <div className="p-6 rounded-2xl bg-[#090e0c]/90 border border-white/5 space-y-3 relative overflow-hidden group hover:border-[#10b981]/30 transition-all">
                        <span className="font-mono text-xs font-black text-[#10b981] tracking-wider block">
                          01 // PRINCIPLE
                        </span>
                        <h3 className="font-display text-base font-extrabold text-white uppercase tracking-wide group-hover:text-[#10b981] transition-colors">
                          Truth Over Jargon
                        </h3>
                        <p className="font-sans text-xs text-gray-400 leading-relaxed">
                          We reject high-sounding buzzwords, confusing metrics, and opaque retainers. We communicate in plain English, clearly define our deliverables, and maintain total transparency on budgets and real results.
                        </p>
                      </div>

                      <div className="p-6 rounded-2xl bg-[#090e0c]/90 border border-white/5 space-y-3 relative overflow-hidden group hover:border-[#10b981]/30 transition-all">
                        <span className="font-mono text-xs font-black text-[#10b981] tracking-wider block">
                          02 // PRINCIPLE
                        </span>
                        <h3 className="font-display text-base font-extrabold text-white uppercase tracking-wide group-hover:text-[#10b981] transition-colors">
                          Craft Over Templates
                        </h3>
                        <p className="font-sans text-xs text-gray-400 leading-relaxed">
                          Every logo, responsive website, motion clip, and social post must be built with intentional artistic and typographic craft. We reject low-effort templates and cookie-cutter designs.
                        </p>
                      </div>

                      <div className="p-6 rounded-2xl bg-[#090e0c]/90 border border-white/5 space-y-3 relative overflow-hidden group hover:border-[#10b981]/30 transition-all">
                        <span className="font-mono text-xs font-black text-[#10b981] tracking-wider block">
                          03 // PRINCIPLE
                        </span>
                        <h3 className="font-display text-base font-extrabold text-white uppercase tracking-wide group-hover:text-[#10b981] transition-colors">
                          Sales Over Empty Likes
                        </h3>
                        <p className="font-sans text-xs text-gray-400 leading-relaxed">
                          Impressions and vanity metrics mean nothing if your business does not grow. We engineer marketing systems focused strictly on customer inquiries, booked calls, and direct client revenue.
                        </p>
                      </div>

                      <div className="p-6 rounded-2xl bg-[#090e0c]/90 border border-white/5 space-y-3 relative overflow-hidden group hover:border-[#10b981]/30 transition-all">
                        <span className="font-mono text-xs font-black text-[#10b981] tracking-wider block">
                          04 // PRINCIPLE
                        </span>
                        <h3 className="font-display text-base font-extrabold text-white uppercase tracking-wide group-hover:text-[#10b981] transition-colors">
                          Tailored for Your Model
                        </h3>
                        <p className="font-sans text-xs text-gray-400 leading-relaxed">
                          Every business is unique. We examine your customer journey and design a custom marketing plan containing only the exact services that make commercial sense for your specific brand type.
                        </p>
                      </div>

                      <div className="p-6 rounded-2xl bg-[#090e0c]/90 border border-white/5 space-y-3 relative overflow-hidden group hover:border-[#10b981]/30 transition-all">
                        <span className="font-mono text-xs font-black text-[#10b981] tracking-wider block">
                          05 // PRINCIPLE
                        </span>
                        <h3 className="font-display text-base font-extrabold text-white uppercase tracking-wide group-hover:text-[#10b981] transition-colors">
                          Zero to Big Audience
                        </h3>
                        <p className="font-sans text-xs text-gray-400 leading-relaxed">
                          Starting with zero followers is an opportunity, not a limitation. With disciplined positioning, engaging video assets, and structured paid campaigns, any brand can reach a large, loyal audience.
                        </p>
                      </div>

                      <div className="p-6 rounded-2xl bg-[#090e0c]/90 border border-white/5 space-y-3 relative overflow-hidden group hover:border-[#10b981]/30 transition-all">
                        <span className="font-mono text-xs font-black text-[#10b981] tracking-wider block">
                          06 // PRINCIPLE
                        </span>
                        <h3 className="font-display text-base font-extrabold text-white uppercase tracking-wide group-hover:text-[#10b981] transition-colors">
                          Human Trust First
                        </h3>
                        <p className="font-sans text-xs text-gray-400 leading-relaxed">
                          Tools and modern platforms are powerful amplifiers, but genuine human connection, authentic storytelling, and reliable service are what keep clients buying again and again.
                        </p>
                      </div>
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
      </section>

      {/* 7. THE FINAL COMMERCIAL BANNER - Conversion Close */}
      <section id="commercial-close" className="relative py-24 border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow opacity-30 z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <span className="font-mono text-xs tracking-[0.25em] text-[#10b981] uppercase font-bold block">
            The Next Step
          </span>
          
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none">
            Stop posting randomly.<br />
            <span className="text-gradient-green">Start building intelligence.</span>
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to install a world-class attention and conversion engine in your organization? Book a 30-minute Growth Intelligence Audit directly with our specialists.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
            <button
              onClick={() => onNavigate('brief')}
              className="w-full py-4 px-8 rounded-full bg-intelligence-green text-black hover:bg-mint-glow font-sans text-xs font-extrabold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] cursor-pointer"
            >
              Book 30-Min Audit
            </button>
            
            <a
              href="https://wa.me/2348110607341"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-8 rounded-full bg-[#0b100d] border border-white/10 hover:border-intelligence-green/30 text-white font-sans text-xs font-extrabold tracking-widest uppercase transition-all cursor-pointer flex items-center justify-center space-x-2"
            >
              <Zap className="w-4 h-4 text-[#10b981]" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>

          <div className="flex justify-center items-center gap-6 text-xs text-gray-500 font-mono pt-4">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#10b981]" /> 0811 060 7341</span>
          </div>
        </div>
      </section>

    </div>
  );
}
