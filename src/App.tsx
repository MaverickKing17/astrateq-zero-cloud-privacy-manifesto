import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Eye,
  Shield,
  Sliders,
  Sparkles,
  Car,
  Cpu,
  Network,
  Server,
  Compass,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  X,
  Search,
  CheckCircle,
  AlertTriangle,
  Printer,
  Download,
  Copy,
  Share2,
  FileText,
  BookOpen,
  Info,
  Layers,
  MapPin,
  Menu,
  Check,
  ExternalLink,
  ShieldCheck,
  FileDown,
  Globe,
  RotateCcw,
  BookMarked,
  ShieldAlert
} from 'lucide-react';
import {
  PHILOSOPHY_CARDS,
  VIRTUAL_COMPARISONS,
  CONTROL_ASPECTS,
  DRIVER_QUESTIONS,
  APPROACH_PILLARS,
  MYTH_REALITIES,
  COMMITMENT_CARDS,
  RESOURCES,
  FAQ_ITEMS,
  FAQItem,
  ResourceItem,
  PRIVACY_MATTERS_CARDS,
  APPROACH_AIM,
  APPROACH_AVOID,
  PRIVACY_PRINCIPLES
} from './data';
const heroBg = "/src/assets/images/astrateq_hero_1780767332439.png";

export default function App() {
  // Navigation & Scroll Tracking
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Features State
  const [selectedSensor, setSelectedSensor] = useState<string>('sensors');
  const [simulationMode, setSimulationMode] = useState<'local' | 'cloud'>('local');
  const [flippedQuestion, setFlippedQuestion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [faqTopic, setFaqTopic] = useState<string>('All');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  // Modals & Resource center
  const [activeResource, setActiveResource] = useState<ResourceItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Refs for navigation scrolling
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    zerocloud: useRef<HTMLDivElement>(null),
    whyprivacy: useRef<HTMLDivElement>(null),
    beliefs: useRef<HTMLDivElement>(null),
    control: useRef<HTMLDivElement>(null),
    questions: useRef<HTMLDivElement>(null),
    commitments: useRef<HTMLDivElement>(null),
    resources: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null),
    final: useRef<HTMLDivElement>(null),
  };

  // Scroll logic for sticky progress bar and section highlights
  useEffect(() => {
    const handleScroll = () => {
      // Update reading progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // Detect active section
      const scrollPos = window.scrollY + 250;
      let currentSection = 'hero';
      for (const [sectionId, ref] of Object.entries(sectionRefs)) {
        if (ref.current && ref.current.offsetTop <= scrollPos) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const scrollToSection = (sectionId: keyof typeof sectionRefs) => {
    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Functional: Copy Link
  const handleCopyLink = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        showToast("✓ Manifesto URL copied to clipboard");
      })
      .catch(() => {
        showToast("Error copying link to clipboard");
      });
  };

  // Functional: Share Page
  const handleSharePage = () => {
    if (navigator.share) {
      navigator.share({
        title: "Astrateq Gadgets - Zero-Cloud Privacy Manifesto",
        text: "A premium digital publication exploring connected vehicles, privacy, and local-first computing.",
        url: window.location.href,
      })
      .then(() => showToast("Shared successfully"))
      .catch((err) => {
        if (err.name !== 'AbortError') {
          handleCopyLink();
        }
      });
    } else {
      handleCopyLink();
    }
  };

  // Functional: Print Manifesto
  const handlePrint = () => {
    window.print();
  };

  // Functional: Download PDF
  const handleDownloadPDF = () => {
    showToast("Opening system print dashboard. Select 'Save as PDF' to export this publication.");
    setTimeout(() => {
      window.print();
    }, 1000);
  };

  // Filter FAQ items
  const filteredFaqs = FAQ_ITEMS.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTopic = faqTopic === 'All' || item.topic === faqTopic;
    return matchesSearch && matchesTopic;
  });

  const getFaqTopics = () => {
    const topics = new Set<string>();
    FAQ_ITEMS.forEach(item => topics.add(item.topic));
    return ['All', ...Array.from(topics)];
  };

  return (
    <div className="min-h-screen bg-brand-bg text-white relative font-sans selection:bg-brand-accent selection:text-brand-bg" id="manifesto-app">
      
      {/* Search Engine Optimization JSON-LD (Strictly client-side representation in the body element) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://privacy.astrateqgadgets.com/#organization",
              "name": "Astrateq Gadgets",
              "url": "https://privacy.astrateqgadgets.com",
              "logo": "https://privacy.astrateqgadgets.com/assets/logo.png",
              "slogan": "Drive Safer. Drive Smarter."
            },
            {
              "@type": "Article",
              "@id": "https://privacy.astrateqgadgets.com/#article",
              "isPartOf": {
                "@id": "https://privacy.astrateqgadgets.com/#website"
              },
              "headline": "Zero-Cloud Privacy Manifesto - Technology Respecting the Driver",
              "description": "A premium digital handbook detailing the philosophy of on-vehicle isolation, driver agency, and the future of automotive telematics.",
              "publisher": {
                "@id": "https://privacy.astrateqgadgets.com/#organization"
              },
              "author": {
                "@type": "Organization",
                "name": "Astrataq Design and Strategy Group"
              },
              "datePublished": "2026-06-06T17:33:59Z",
              "inLanguage": "en-CA"
            },
            {
              "@type": "FAQPage",
              "mainEntity": FAQ_ITEMS.slice(0, 5).map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          ]
        })}
      </script>

      {/* Reading Progress Bar (Requirement) */}
      <div 
        className="fixed top-0 left-0 h-1 bg-brand-accent z-50 transition-all duration-100 no-print" 
        style={{ width: `${scrollProgress}%` }}
        id="reading-progress-bar"
      />

      {/* Decorative ambient glows */}
      <div className="ambient-glow bg-[#00D4FF] w-[500px] h-[500px] top-[-100px] left-[-200px]" />
      <div className="ambient-glow bg-[#0a3560] w-[600px] h-[600px] bottom-[10%] right-[-100px]" />

      {/* Sticky Navigation (Requirement) */}
      <header className="sticky top-0 bg-brand-bg/90 backdrop-blur-md border-b border-blue-950 z-40 py-3 px-6 transition-all duration-300 no-print" id="sticky-navigation-header">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Branding */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')} id="top-left-logo-branding">
            <div className="relative group select-none shrink-0">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF7000] to-yellow-500 rounded-full blur opacity-40 group-hover:opacity-80 transition duration-500"></div>
              <img 
                src="https://i.ibb.co/Z6hnHx3y/Gemini-Generated-Image-pta8i9pta8i9pta8.png" 
                alt="Logo" 
                className="relative w-10 h-10 rounded-full border border-yellow-500/30 object-cover shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="block font-heading font-bold text-sm tracking-widest text-[#FFFFFF] uppercase">Astrateq</span>
              <span className="block text-[9px] text-[#00D4FF] tracking-wider uppercase">Zero-Cloud Philosophy</span>
            </div>
          </div>

          {/* Desktop Navigation Link Toggles */}
          <nav className="hidden lg:flex items-center gap-1.5 text-xs font-mono">
            {[
              { id: 'whyprivacy', label: 'Why Privacy Matters' },
              { id: 'beliefs', label: 'Drivers Deserve Clarity' },
              { id: 'zerocloud', label: 'What Zero-Cloud Means' },
              { id: 'control', label: 'Driver Control' },
              { id: 'questions', label: 'Common Questions' },
              { id: 'commitments', label: 'Our Commitments' },
              { id: 'resources', label: 'Resources' },
              { id: 'faq', label: 'FAQ' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id as any)}
                className={`px-3 py-1.5 rounded transition-all duration-200 uppercase tracking-wider text-[11px] font-bold ${
                  activeSection === link.id
                    ? 'text-brand-accent bg-[#00D4FF]/10 border border-[#00D4FF]/40'
                    : 'text-gray-400 hover:text-white hover:bg-slate-900/.5 border border-transparent'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Utility Action Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-gray-300 hover:text-brand-accent transition-colors bg-[#0B1F3A]/60 border border-blue-900/30 rounded-md hover:border-[#00D4FF]/50"
              title="Print Manifesto"
              id="btn-print"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopyLink}
              className="p-2 text-gray-300 hover:text-brand-accent transition-colors bg-[#0B1F3A]/60 border border-blue-900/30 rounded-md hover:border-[#00D4FF]/50"
              title="Copy Link"
              id="btn-copy"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              onClick={handleSharePage}
              className="p-2 text-gray-300 hover:text-brand-accent transition-colors bg-[#0B1F3A]/60 border border-blue-900/30 rounded-md hover:border-[#00D4FF]/50 animate-pulse"
              title="Share Publication"
              id="btn-share"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownloadPDF}
              className="ml-1 bg-[#00D4FF] hover:bg-[#00D4FF]/80 text-brand-bg px-4 py-2 rounded font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,212,255,0.2)]"
              id="btn-download"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              PDF Format
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            className="lg:hidden p-2 text-white hover:text-brand-accent bg-slate-900/60 rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-slate-950 mt-2 rounded border border-blue-950 text-sm font-mono"
            >
              <div className="p-4 grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'whyprivacy', label: 'Why Privacy Matters' },
                  { id: 'beliefs', label: 'Drivers Deserve Clarity' },
                  { id: 'zerocloud', label: 'What Zero-Cloud Means' },
                  { id: 'control', label: 'Driver Control' },
                  { id: 'questions', label: 'Common Questions' },
                  { id: 'commitments', label: 'Our Commitments' },
                  { id: 'resources', label: 'Resources' },
                  { id: 'faq', label: 'FAQ' },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id as any)}
                    className="p-2 text-left text-gray-400 hover:text-brand-accent border-b border-blue-950 hover:bg-[#00D4FF]/5 rounded transition-all uppercase text-[10px]"
                  >
                    › {link.label}
                  </button>
                ))}
              </div>
              <div className="p-4 bg-slate-900/80 border-t border-blue-950 flex justify-between items-center gap-2">
                <button 
                  onClick={handleDownloadPDF}
                  className="flex-1 py-2 bg-[#00D4FF] text-brand-bg text-center font-bold uppercase rounded text-[11px]"
                >
                  Download PDF
                </button>
                <button 
                  onClick={handleCopyLink}
                  className="p-2 text-center text-gray-400 hover:text-white bg-slate-950 rounded border border-blue-900"
                >
                  <Copy className="w-4 h-4 mx-auto" />
                </button>
                <button 
                  onClick={handleSharePage}
                  className="p-2 text-center text-gray-400 hover:text-white bg-slate-950 rounded border border-blue-900"
                >
                  <Share2 className="w-4 h-4 mx-auto" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 relative z-10" id="main-content">
        
        {/* =======================================
            SECTION 1: HERO (Luxury interior background, headline, subheadline, supporting copy, primary CTA)
           ======================================= */}
        <section 
          ref={sectionRefs.hero} 
          id="hero-section" 
          className="relative min-h-[85vh] flex items-center justify-center rounded-3xl overflow-hidden border border-blue-950 mb-20 md:mb-28 shadow-xl mt-4"
        >
          {/* Hero background image with sophisticated gradients */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBg} 
              alt="Luxury vehicle interior dashboard" 
              className="w-full h-full object-cover opacity-50 scale-105 select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/85 to-brand-bg/30" />
            <div className="absolute inset-y-0 left-0 w-full md:w-3/4 bg-gradient-to-r from-brand-bg via-brand-bg/40 to-transparent" />
          </div>

          {/* Editorial Content */}
          <div className="relative z-10 max-w-4xl px-8 py-12 md:py-20 lg:px-14 mr-auto w-full">
            
            {/* Animated branding tag */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00D4FF]/10 border border-[#00D4FF]/40 font-mono text-[11px] tracking-widest text-[#00D4FF] uppercase uppercase mb-6"
            >
              <Compass className="w-3.5 h-3.5 animate-spin-slow" />
              Educational Philosophy Publication
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-2xl"
              id="hero-headline"
            >
              Privacy Shouldn’t Be A <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-white">Luxury Feature.</span>
            </motion.h1>

            {/* Subheadline & Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-[#D6DCE5] mb-4 font-normal max-w-2xl leading-relaxed"
            >
              A simple philosophy for a future where vehicles become increasingly intelligent and connected.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm text-gray-400 mb-10 max-w-xl leading-relaxed font-sans"
            >
              Modern vehicles generate more information than ever before. Drivers deserve clarity, transparency, and control over how that information is understood.
            </motion.p>

            {/* CTA action section */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              id="hero-cta-box"
            >
              <button
                onClick={() => scrollToSection('zerocloud')}
                className="bg-gradient-to-r from-[#00D4FF] to-[#00aaff] text-brand-bg px-7 py-3 rounded font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95 shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.55)] transition-all cursor-pointer group"
                id="cta-explore-manifesto"
              >
                Explore The Manifesto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection('resources')}
                className="border border-blue-900/60 bg-[#0B1F3A]/40 text-gray-300 hover:text-[#00D4FF] font-mono text-xs uppercase tracking-wider px-6 py-3 rounded hover:border-[#00D4FF]/40 transition-colors flex items-center justify-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-brand-accent/70" />
                Resource Guides
              </button>
            </motion.div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] text-gray-500 font-mono tracking-widest uppercase select-none animate-bounce no-print">
            Scroll down
            <ChevronDown className="w-4 h-4 text-[#00D4FF]" />
          </div>
        </section>


        {/* =======================================
            SECTION 2: WHAT DOES ZERO-CLOUD MEAN?
           ======================================= */}
        <section 
          ref={sectionRefs.zerocloud} 
          id="zerocloud" 
          className="py-16 border-t border-blue-950 mb-20 scroll-mt-24"
        >
          <div className="grid lg:grid-cols-12 gap-12 items-center" id="zerocloud-grid">
            
            <div className="lg:col-span-5 text-left">
              <span className="font-mono text-xs text-brand-accent tracking-widest uppercase mb-2 block font-bold">Section 01 // Definition & Design Standard</span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight mb-6 uppercase">
                What Does Zero-Cloud Mean?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                To be clinical in our transparency: <strong className="text-white">do not confuse this with a claims sheet.</strong> We do not offer absolute promises that Astrateq accessories are fully disconnected from all networks or completely serverless in every context. Rather, Zero-Cloud is a design philosophy that prioritizes keeping information as close to the driver as reasonably possible.
              </p>
              <div className="bg-[#0B1F3A]/60 border border-[#00D4FF]/30 p-5 rounded-xl mb-6 font-sans shadow-[0_0_15px_rgba(0,212,255,0.15)] flex flex-col justify-start text-left">
                <p className="text-xs italic text-slate-100 leading-relaxed font-medium">
                  &ldquo;Zero-Cloud is a design philosophy that prioritizes keeping information as close to the driver as reasonably possible.&rdquo;
                </p>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans mb-8">
                It guides our engineering choices—demanding that local offline databases handle standard functions and that external networks are treated as opt-in supplements, not automatic default connections.
              </p>

              {/* Selector buttons for Comparison simulator */}
              <div className="flex gap-2.5 font-mono text-xs" id="simulation-mode-selectors">
                <button
                  onClick={() => setSimulationMode('local')}
                  className={`flex-1 py-3 px-4 rounded border uppercase tracking-wider text-center font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    simulationMode === 'local'
                      ? 'bg-[#00D4FF] text-brand-bg border-[#00D4FF]'
                      : 'bg-transparent text-gray-400 border-blue-950 hover:text-white'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  Local Processing
                </button>
                <button
                  onClick={() => setSimulationMode('cloud')}
                  className={`flex-1 py-3 px-4 rounded border uppercase tracking-wider text-center font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    simulationMode === 'cloud'
                      ? 'bg-rose-500/10 text-rose-400 border-rose-500/40'
                      : 'bg-transparent text-gray-400 border-blue-950 hover:text-white'
                  }`}
                >
                  <Network className="w-4 h-4" />
                  Cloud Processing
                </button>
              </div>
            </div>

            {/* Interactive Data Flow Simulator Column */}
            <div className="lg:col-span-7">
              <div className="bg-[#0B1F3A] rounded-2xl border border-blue-900/30 p-6 md:p-8 relative overflow-hidden card-print" id="flow-comparison-simulator">
                
                {/* Visual canvas representing sensor packets */}
                <div className="bg-slate-950/80 rounded-xl p-5 border border-blue-950 mb-6 font-mono text-xs h-60 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Title and indicators */}
                  <div className="flex justify-between items-center z-10">
                    <span className="text-[10px] text-gray-400 tracking-wider uppercase font-bold">Active Schematic Diagram</span>
                    <span className={`px-2 py-0.5 rounded text-[9px] uppercase tracking-widest inline-flex items-center gap-1 font-bold ${
                      simulationMode === 'local' ? 'bg-green-500/10 text-green-400 border border-green-500/30' : 'bg-red-500/10 text-rose-400 border border-rose-500/30'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${simulationMode === 'local' ? 'bg-green-400' : 'bg-rose-500'} animate-ping`}></span>
                      {simulationMode === 'local' ? 'Isolated Edge Node' : 'Broad Server Upload'}
                    </span>
                  </div>

                  {/* Flow Map Visualizer */}
                  <div className="relative flex items-center justify-around flex-grow py-8 z-10" id="data-nodes-flow">
                    
                    {/* Node A: Dashboard Sensors */}
                    <div className="flex flex-col items-center gap-1.5 relative">
                      <div className="w-12 h-12 rounded-full bg-slate-900 border border-blue-900/60 flex items-center justify-center text-brand-accent">
                        <Car className="w-5 h-5 animate-pulse" />
                      </div>
                      <span className="text-[10px] text-gray-300 uppercase text-center font-sans font-bold font-sans">Cabin Sensors</span>
                    </div>

                    {/* Animated Connection Arrow */}
                    <div className="flex-grow max-w-[100px] h-0.5 bg-dashed border-t-2 border-dashed border-blue-900/40 relative flex items-center justify-center">
                      <div className={`absolute w-2.5 h-2.5 rounded-full ${simulationMode === 'local' ? 'bg-brand-accent' : 'bg-rose-400'} animate-ping`} />
                      <div className="font-mono text-[8px] text-slate-400 absolute -top-4 uppercase font-bold">telemetry</div>
                    </div>

                    {/* Simulation Target (Vehicle vs Cloud) */}
                    {simulationMode === 'local' ? (
                      <div className="flex flex-col items-center gap-1.5 relative">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-accent/20 to-slate-900 border-2 border-brand-accent flex items-center justify-center text-brand-accent shadow-[0_0_15px_rgba(0,212,255,0.25)]">
                          <Cpu className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] text-brand-accent uppercase font-bold text-center font-sans">Local OBD-Unit</span>
                        <div className="absolute text-[8px] font-mono text-green-400 bottom-[-16px] uppercase tracking-tight font-bold">Secured physically</div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-1.5 relative">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-rose-500/20 to-slate-900 border-2 border-rose-500 flex items-center justify-center text-rose-400 shadow-[0_0_15px_rgba(239,68,68,0.25)]">
                          <Server className="w-6 h-6 animate-bounce" />
                        </div>
                        <span className="text-[10px] text-rose-400 uppercase font-bold text-center font-sans font-bold">Corporate Cloud</span>
                        <div className="absolute text-[8px] font-mono text-rose-400 bottom-[-16px] uppercase tracking-tight font-bold">Multi-Device exposure</div>
                      </div>
                    )}
                  </div>

                  {/* Summary overlay status */}
                  <div className="border-t border-blue-950 pt-2 flex items-center justify-between text-gray-400 text-[10px] z-10" id="sim-status-footer">
                    <span className="font-sans font-medium">Target: {simulationMode === 'local' ? 'Owner Physical Asset' : 'Central Databases outside CA'}</span>
                    <span className="font-sans font-medium">Status: {simulationMode === 'local' ? '0ms transmission leak' : 'Potential 3rd-party intercept'}</span>
                  </div>
                </div>

                {/* Structured descriptive text */}
                <h4 className="font-heading font-bold text-white text-base mb-2 uppercase text-left">
                  {simulationMode === 'local' ? VIRTUAL_COMPARISONS.local.title : VIRTUAL_COMPARISONS.cloud.title}
                </h4>
                <p className="font-mono text-xs text-[#00D4FF] uppercase tracking-widest mb-4 text-left font-bold">
                  {simulationMode === 'local' ? VIRTUAL_COMPARISONS.local.subtitle : VIRTUAL_COMPARISONS.cloud.subtitle}
                </p>

                <ul className="space-y-2.5 mb-6 text-left" id="simulator-points-list">
                  {(simulationMode === 'local' ? VIRTUAL_COMPARISONS.local.points : VIRTUAL_COMPARISONS.cloud.points).map((point, k) => (
                    <li key={k} className="flex items-start gap-2 text-xs text-white font-sans leading-relaxed">
                      {simulationMode === 'local' ? (
                        <CheckCircle className="w-4 h-4 text-[#00D4FF] mt-0.5 shrink-0" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                      )}
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-4 bg-slate-950/60 rounded-lg text-xs leading-relaxed text-slate-300 font-sans border border-blue-950 select-none text-left">
                  <strong className="text-white block font-mono text-[9px] uppercase tracking-wider mb-1 font-bold">Optimal integration guidelines:</strong>
                  {simulationMode === 'local' ? VIRTUAL_COMPARISONS.local.idealFor : VIRTUAL_COMPARISONS.cloud.idealFor}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* =======================================
            SECTION 3: WHY PRIVACY MATTERS IN EVERYDAY LIFE
           ======================================= */}
        <section 
          ref={sectionRefs.whyprivacy} 
          id="whyprivacy" 
          className="py-16 border-t border-blue-950 mb-20 scroll-mt-24"
        >
          <div className="max-w-3xl mb-12 text-left" id="whyprivacy-title-box">
            <span className="font-mono text-xs text-brand-accent tracking-widest uppercase mb-2 block font-bold">Section 02 // Everyday Life Stories</span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight uppercase">
              Why Privacy Matters In Everyday Life
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-4 leading-relaxed font-sans">
              Vehicular privacy is not a mathematical abstraction. It touches normal, familiar journeys—shielding your domestic details, routines, and quiet commutes without relying on anxiety-provoking claims.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6" id="whyprivacy-cards-grid">
            {PRIVACY_MATTERS_CARDS.map((card, idx) => {
              let IconComp = Car;
              if (card.iconName === 'MapPin') IconComp = MapPin;
              if (card.iconName === 'Shield') IconComp = Shield;
              if (card.iconName === 'Layers') IconComp = Layers;
              if (card.iconName === 'Network') IconComp = Network;

              return (
                <div 
                  key={idx}
                  className="bg-brand-card rounded-2xl p-6 flex flex-col justify-between h-full card-print select-none text-left"
                  id={`whyprivacy-card-${idx}`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#071120] border border-blue-900/40 flex items-center justify-center text-[#00D4FF] mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-white text-base mb-1 uppercase tracking-wide">
                      {card.title}
                    </h3>
                    <p className="font-mono text-[9px] text-[#00D4FF] uppercase tracking-widest mb-3 font-bold">
                      {card.category}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans mt-2">
                      {card.description}
                    </p>
                  </div>
                  
                  <span className="text-[9px] font-mono text-blue-900/80 border-t border-blue-950/60 mt-6 pt-2 block uppercase tracking-wider">
                    Routine Shield
                  </span>
                </div>
              );
            })}
          </div>
        </section>


        {/* =======================================
            SECTION 4: OUR BELIEF (Headline, 4 Philosophy Cards: Transparency, Privacy, Simple Tech, Responsible Innovation)
           ======================================= */}
        <section 
          ref={sectionRefs.beliefs} 
          id="beliefs" 
          className="py-16 border-t border-blue-950 mb-20 scroll-mt-24"
        >
          <div className="max-w-3xl mb-12 text-left" id="beliefs-title-box">
            <span className="font-mono text-xs text-brand-accent tracking-widest uppercase mb-2 block font-bold">Section 03 // Core Values</span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight uppercase">
              Drivers Deserve Clarity.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-4 leading-relaxed font-sans">
              We stand against the passive normalization of surveillance in transportation. These four principles define Astrateq’s design philosophy for vehicle information safety.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" id="philosophy-cards-grid">
            {PHILOSOPHY_CARDS.map((card, idx) => {
              let CardIcon = Eye;
              if (card.iconName === 'ShieldAlert') CardIcon = Shield;
              if (card.iconName === 'Sliders') CardIcon = Sliders;
              if (card.iconName === 'Sparkles') CardIcon = Sparkles;
              
              return (
                <div 
                  key={idx}
                  className="bg-brand-card rounded-2xl p-6 flex flex-col justify-between h-full card-print group text-left"
                  id={`philosophy-card-${idx}`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#071120] border border-blue-900/40 flex items-center justify-center text-[#00D4FF] mb-4 group-hover:bg-[#00D4FF]/5 group-hover:border-[#00D4FF]/50 transition-all">
                      <CardIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-white text-base mb-1.5 uppercase tracking-wide">
                      {card.title}
                    </h3>
                    <p className="font-mono text-[10px] text-brand-accent uppercase tracking-widest mb-3 font-bold">
                      {card.tagline}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans mt-2">
                      {card.description}
                    </p>
                  </div>
                  
                  <span className="text-[10px] font-mono text-blue-900/75 border-t border-blue-950 mt-6 pt-2 block uppercase tracking-widest font-bold">
                    Value Core // {idx + 1}
                  </span>
                </div>
              );
            })}
          </div>

          {/* EDUCATIONAL CALLOUT BOX CTA */}
          <div className="bg-[#0B1F3A]/40 border border-[#00D4FF]/30 rounded-2xl p-8 md:p-10 mb-16 relative overflow-hidden shadow-[0_0_15px_rgba(0,212,255,0.1)] flex flex-col md:flex-row items-center justify-between gap-6 text-left" id="educational-callout-panel">
            <div className="max-w-xl text-left">
              <span className="font-mono text-[10px] text-[#00D4FF] uppercase tracking-widest block mb-2 font-bold">Understanding Your Diagnostics</span>
              <h3 className="text-xl md:text-2xl font-heading font-extrabold text-white mb-3 uppercase tracking-tight">
                Want To Better Understand Your Vehicle?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Vehicles utilize dynamic, distinct connectivity pathways. Discovering which local diagnostics reports and computer networks are active on your model is the first step toward cabin privacy sovereignty. Read our detailed, transparent guide explaining compatibility, diagnostic wireframes, and safety protocols fully.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <a 
                href="https://guides.astrateqgadgets.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00D4FF] text-[#071120] font-mono text-xs font-bold uppercase tracking-wider rounded shadow-[0_0_15px_rgba(0,212,255,0.25)] hover:bg-[#00D4FF]/90 transition-all cursor-pointer text-center font-bold"
                id="btn-educational-cta"
              >
                Read Compatibility Guide
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* TWO-COLUMN DESIGN: WHAT WE AIM TO DO vs WHAT WE AVOID */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-16" id="beliefs-aim-avoid-grid">
            
            {/* Column 1: Aims */}
            <div className="bg-[#0B1F3A]/20 border border-[#00D4FF]/20 rounded-2xl p-6 md:p-8 card-print text-left" id="approach-pillar-aim-block">
              <div className="flex items-center gap-2.5 mb-6">
                <CheckCircle className="text-emerald-400 w-5 h-5 flex-shrink-0" />
                <h3 className="font-heading font-bold text-white text-lg uppercase tracking-wide">What We Aim To Do</h3>
              </div>
              <p className="text-xs text-slate-400 font-sans italic mb-6">
                We believe in providing proactive transparency and absolute clarity about vehicle computing signals:
              </p>
              <div className="grid gap-4">
                {APPROACH_AIM.map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-left font-sans text-xs">
                    <span className="font-mono text-[#00D4FF] mt-0.5 select-none font-bold">✓</span>
                    <div>
                      <strong className="text-white block font-heading text-xs uppercase mb-0.5">{item.title}</strong>
                      <p className="text-[11px] text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Avoids */}
            <div className="bg-[#0B1F3A]/20 border border-[#00D4FF]/20 rounded-2xl p-6 md:p-8 card-print text-left" id="approach-pillar-avoid-block">
              <div className="flex items-center gap-2.5 mb-6">
                <AlertTriangle className="text-rose-400 w-5 h-5 flex-shrink-0" />
                <h3 className="font-heading font-bold text-white text-lg uppercase tracking-wide">What We Avoid</h3>
              </div>
              <p className="text-xs text-slate-400 font-sans italic mb-6">
                To build authentic corporate trust, we refuse standard deceptive practices and manipulative setups:
              </p>
              <div className="grid gap-4">
                {APPROACH_AVOID.map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-left font-sans text-xs">
                    <span className="font-mono text-rose-400 mt-0.5 select-none font-bold">✗</span>
                    <div>
                      <strong className="text-white block font-heading text-xs uppercase mb-0.5">{item.title}</strong>
                      <p className="text-[11px] text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* THE ASTRATEQ PRIVACY PRINCIPLES */}
          <div className="mt-16 text-center" id="privacy-principles-block">
            <span className="font-mono text-xs text-brand-accent tracking-widest uppercase mb-2 block font-bold">System Verification Blueprints</span>
            <h3 className="text-2xl md:text-4xl font-heading font-extrabold text-white tracking-tight mb-4 uppercase">
              The Astrateq Privacy Principles
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mb-10 max-w-2xl mx-auto font-sans leading-relaxed text-slate-300">
              These six core parameters define how our design divisions formulate product ideas, build code schemas, and preserve driver protection values at the blueprint stage.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {PRIVACY_PRINCIPLES.map((principle, idx) => {
                let PrincipleIcon = Eye;
                if (principle.iconName === 'Sliders') PrincipleIcon = Sliders;
                if (principle.iconName === 'ShieldCheck') PrincipleIcon = ShieldCheck;
                if (principle.iconName === 'Cpu') PrincipleIcon = Cpu;
                if (principle.iconName === 'Layers') PrincipleIcon = Layers;
                if (principle.iconName === 'Car') PrincipleIcon = Car;

                return (
                  <div 
                    key={idx}
                    className="bg-brand-card rounded-2xl p-6 flex flex-col justify-between h-full card-print group hover:scale-[1.01] transition-all"
                    id={`principles-card-${idx}`}
                  >
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-[#071120] border border-blue-900/40 flex items-center justify-center text-[#00D4FF] mb-4 group-hover:bg-[#00D4FF]/5 group-hover:border-[#00D4FF]/50 transition-all">
                        <PrincipleIcon className="w-5 h-5 text-brand-accent" />
                      </div>
                      <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wide mb-1">
                        {principle.title}
                      </h4>
                      <p className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest mb-3 font-bold">
                        {principle.subtitle}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans mt-2">
                        {principle.description}
                      </p>
                    </div>

                    <span className="text-[10px] font-mono text-blue-900/60 border-t border-blue-950 mt-6 pt-2 block uppercase tracking-widest font-bold">
                      Engineering Metric {idx + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* =======================================
            SECTION 5: WHO SHOULD CONTROL VEHICLE INFORMATION? (Headline, aspects: Awareness, Consent, Understanding, Choice, Transparency)
           ======================================= */}
        <section 
          ref={sectionRefs.control} 
          id="control" 
          className="py-16 border-t border-blue-950 mb-20 scroll-mt-24"
        >
          <div className="max-w-3xl mb-12" id="control-title-box">
            <span className="font-mono text-xs text-brand-accent tracking-widest uppercase mb-2">Section 04 // Driver Agency</span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              The Driver Should Remain In The Conversation.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed font-sans">
              Data sovereignty should not be a secondary compromise. When vehicles process location, speed, or system mechanics, our editorial standards demand five foundational gates to maintain driver agency:
            </p>
          </div>

          {/* Large layout editorial grid representing aspects */}
          <div className="grid md:grid-cols-5 gap-6" id="control-aspects-grid">
            {CONTROL_ASPECTS.map((aspect, k) => (
              <div 
                key={k}
                className="bg-slate-950/40 border border-blue-950 p-6 rounded-2xl flex flex-col justify-between h-full hover:border-[#00D4FF]/20 transition-colors card-print select-none"
                id={`control-aspect-${aspect.title.toLowerCase()}`}
              >
                <div>
                  <div className="font-mono text-[10px] text-brand-accent-secondary uppercase tracking-widest mb-3 border-b border-blue-950/60 pb-2 flex items-center justify-between">
                    <span>Gate 0{k+1}</span>
                    <span className="bg-[#00D4FF]/10 text-brand-accent px-1.5 py-0.5 rounded text-[8px] uppercase">{aspect.tag}</span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-2 uppercase">
                    {aspect.title}
                  </h3>
                  <p className="text-xs text-brand-accent-secondary mb-3 leading-relaxed font-sans font-medium">
                    {aspect.summary}
                  </p>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-sans">
                    {aspect.detail}
                  </p>
                </div>
                
                <span className="text-[8px] font-mono text-blue-900/60 mt-6 block uppercase tracking-wider">
                  Sovereignty Gate // Active
                </span>
              </div>
            ))}
          </div>
        </section>


        {/* =======================================
            SECTION 6: QUESTIONS EVERY DRIVER SHOULD ASK (6 Premium Flip/Toggle cards)
           ======================================= */}
        <section 
          ref={sectionRefs.questions} 
          id="questions" 
          className="py-16 border-t border-blue-950 mb-20 scroll-mt-24"
        >
          <div className="text-center max-w-2xl mx-auto mb-14" id="questions-title-box">
            <span className="font-mono text-xs text-brand-accent tracking-widest uppercase mb-2">Section 05 // Inquiry Blueprint</span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Questions Every Driver Should Ask.
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-3 font-sans">
              Before purchasing a diagnostic tool, activating an application, or syncing your mobile device to a cockpit dashboard, verify these six core vectors. Click on any card below to reveal its operational context:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="driver-questions-grid">
            {DRIVER_QUESTIONS.map((item) => {
              const isExpanded = flippedQuestion === item.id;
              return (
                <div 
                  key={item.id}
                  onClick={() => setFlippedQuestion(isExpanded ? null : item.id)}
                  className={`bg-[#0B1F3A] border rounded-2xl p-6 cursor-pointer transition-all duration-300 relative select-none flex flex-col justify-between min-h-[220px] shadow-sm hover:shadow-md ${
                    isExpanded 
                      ? 'border-[#00D4FF] bg-gradient-to-br from-[#0B1F3A] to-[#0d264a]' 
                      : 'border-blue-900/20 hover:border-blue-900/40'
                  }`}
                  id={`driver-question-card-${item.id}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[9px] text-brand-accent uppercase tracking-wider">Query Parameter // {item.id}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-900 border border-blue-900/60 text-[10px] text-brand-accent flex items-center justify-center">
                        ?
                      </span>
                    </div>
                    
                    <h3 className="font-heading font-semibold text-white text-sm mb-3 leading-snug">
                      &ldquo;{item.question}&rdquo;
                    </h3>

                    {/* Collapsible toggle info */}
                    <AnimatePresence initial={false}>
                      {isExpanded ? (
                        <motion.div 
                          className="space-y-2.5 pt-2 border-t border-blue-950"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div>
                            <strong className="block text-[8px] font-mono text-brand-accent-secondary uppercase tracking-widest mb-0.5">Why It Matters:</strong>
                            <p className="text-[11px] text-slate-300 leading-relaxed font-sans">{item.whyItMatters}</p>
                          </div>
                          <div>
                            <strong className="block text-[8px] font-mono text-brand-accent uppercase tracking-widest mb-0.5">Our Philosophy Concept:</strong>
                            <p className="text-[11px] text-[#00D4FF] leading-relaxed font-sans italic">{item.theReality}</p>
                          </div>
                        </motion.div>
                      ) : (
                        <p className="text-xs text-gray-400 font-sans line-clamp-2 mt-4 leading-relaxed">
                          {item.whyItMatters}
                        </p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="text-[9px] font-mono text-[#00D4FF] flex items-center gap-1 mt-6 border-t border-blue-950/60 pt-2 uppercase tracking-wide select-none">
                    <span>{isExpanded ? 'Collapse Insight' : 'Expand Editorial Context'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* =======================================
            SECTION 9: OUR COMMITMENTS (Headline, premium commitment cards)
           ======================================= */}
          <section 
            ref={sectionRefs.commitments} 
            id="commitments" 
            className="py-16 border-t border-blue-950 mb-20 scroll-mt-24"
          >
            <div className="max-w-3xl mb-12 font-sans" id="commitments-title-box">
              <span className="font-mono text-xs text-brand-accent tracking-widest uppercase mb-2">Section 08 // Operational Code</span>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Our Commitments
              </h2>
              <p className="text-[#D6DCE5] text-sm sm:text-base mt-2">
                We design with restraint. In our pursuit toward maximum transparent on-vehicle isolation, we strive to:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="commitments-grid">
              {COMMITMENT_CARDS.map((item, key) => (
                <div 
                  key={key} 
                  className="bg-[#0B1F3A] border border-blue-900/15 hover:border-[#00D4FF]/40 rounded-2xl p-6 transition-colors card-print select-none"
                  id={`commitment-card-${key}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#00D4FF]/10 text-brand-accent px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-widest">Strive Point // 0{key+1}</span>
                    <ShieldCheck className="w-4 h-4 text-brand-accent" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-white text-base mb-1 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[9px] text-[#D6DCE5] tracking-widest uppercase mb-3">
                    Objective: {item.objective}
                  </p>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed pt-2 border-t border-blue-950/60">
                    {item.action}
                  </p>
                </div>
              ))}
            </div>
          </section>





        {/* =======================================
            SECTION 11: PRIVACY RESOURCE CENTER (Educational booklet portal modal)
           ======================================= */}
        <section 
          ref={sectionRefs.resources} 
          id="resources" 
          className="py-16 border-t border-blue-950 mb-20 scroll-mt-24"
        >
          <div className="text-center max-w-2xl mx-auto mb-12" id="resources-title-box">
            <span className="font-mono text-xs text-brand-accent tracking-widest uppercase mb-2">Section 10 // Education Hub</span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Privacy Resource Center
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-3 font-sans">
              Read our educational guidelines and diagnostics wireframes to master the intersection of automotive systems and consumer data protection. Click to review:
            </p>
          </div>

          {/* Cards for available resources */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" id="resources-cards-inner">
            {RESOURCES.map((res) => (
              <div 
                key={res.id}
                onClick={() => setActiveResource(res)}
                className="bg-[#0B1F3A] border border-blue-900/15 hover:border-[#00D4FF]/40 rounded-2xl p-6 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,212,255,0.06)] flex flex-col justify-between h-full select-none text-left"
                id={`resource-item-${res.id}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-mono text-[9px] text-[#00D4FF] uppercase tracking-wider">{res.type}</span>
                    <span className="text-[10px] text-gray-500 font-mono">{res.readTime}</span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-sm mb-3 uppercase tracking-wide leading-snug group-hover:text-[#00D4FF]">
                    {res.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed font-sans mb-4">
                    {res.description}
                  </p>
                </div>

                <div className="text-xs font-mono text-brand-accent flex items-center justify-between border-t border-blue-950 pt-3 mt-6 select-none uppercase text-[10px]">
                  <span>Open Companion Guide</span>
                  <BookMarked className="w-3.5 h-3.5 text-brand-accent stroke-[2.5]" />
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Reader Modal Overlay */}
          <AnimatePresence>
            {activeResource && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 no-print overflow-hidden"
              >
                <motion.div 
                  initial={{ scale: 0.95, y: 15 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 15 }}
                  className="bg-[#0B1F3A] border border-blue-900/40 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl relative"
                >
                  {/* Close icon */}
                  <button 
                    onClick={() => setActiveResource(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 border border-blue-900/50 text-gray-400 hover:text-white hover:border-[#00D4FF] transition-all z-20"
                    title="Close Reader"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Document header */}
                  <div className="p-6 md:p-8 bg-slate-950 border-b border-blue-950 flex flex-col pt-8">
                    <div className="inline-flex items-center gap-2 font-mono text-[10px] text-brand-accent uppercase tracking-widest mb-2.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      Digital Repository Guide // Verified
                    </div>
                    <h3 className="text-lg md:text-xl font-heading font-extrabold text-white uppercase tracking-tight pr-8">
                      {activeResource.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mt-2 font-mono">
                      <span>{activeResource.type}</span>
                      <span>•</span>
                      <span>{activeResource.readTime}</span>
                    </div>
                  </div>

                  {/* Document container */}
                  <div className="p-6 md:p-8 overflow-y-auto text-sm text-gray-300 leading-relaxed font-sans space-y-4 max-h-[50vh] prose prose-invert prose-blue select-all selection:bg-brand-accent selection:text-brand-bg-950 scrollbar-thin">
                    <div className="whitespace-pre-wrap font-sans text-xs sm:text-sm">
                      {activeResource.contentMarkup}
                    </div>
                  </div>

                  {/* Document footer controls */}
                  <div className="p-5 bg-slate-950/80 border-t border-blue-950 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
                    <span className="text-[10px] text-gray-500 uppercase">Document Asset: astrateq-{activeResource.id}.pdf</span>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <button
                        onClick={handlePrint}
                        className="flex-1 sm:flex-initial bg-slate-900 border border-blue-950 hover:border-brand-accent hover:text-brand-accent text-white px-4 py-2 rounded text-[11px] font-bold uppercase transition-colors"
                      >
                        Print Guide
                      </button>
                      <button 
                        onClick={() => {
                          showToast(`✓ Document astrateq-${activeResource.id}.pdf text generated in memory.`);
                          setActiveResource(null);
                        }}
                        className="flex-1 sm:flex-initial bg-[#00D4FF] text-brand-bg hover:opacity-90 px-4 py-2 rounded text-[11px] font-bold uppercase"
                      >
                        Acknowledge Read
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>


        {/* =======================================
            SECTION 12: FAQ (Accordion including 20 premium entries, search and topic tabs)
           ======================================= */}
        <section 
          ref={sectionRefs.faq} 
          id="faq" 
          className="py-16 border-t border-blue-950 mb-20 scroll-mt-24"
        >
          <div className="max-w-3xl mb-12 font-sans" id="faq-title-box">
            <span className="font-mono text-xs text-brand-accent tracking-widest uppercase mb-2">Section 11 // System Handbook FAQ</span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Browse our clinical answers to 20 detailed parameters covering connectivity networks, local computing isolation, and user-privacy frameworks.
            </p>
          </div>

          {/* Search bar & filter pill bar */}
          <div className="bg-[#0B1F3A] rounded-2xl border border-blue-900/25 p-5 md:p-6 mb-8 space-y-4 no-print" id="faq-controls">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
              <input
                type="text"
                placeholder="Search vehicular privacy topics, diagnostic definitions, or software principles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 text-white rounded-lg pl-10 pr-4 py-3 text-xs sm:text-sm border border-blue-950 focus:border-[#00D4FF] outline-none font-sans"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5" id="faq-topic-filters">
              {getFaqTopics().map((topic) => (
                <button
                  key={topic}
                  onClick={() => setFaqTopic(topic)}
                  className={`px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider border transition-all ${
                    faqTopic === topic
                      ? 'border-[#00D4FF] bg-[#00D4FF]/15 text-[#00D4FF] font-bold'
                      : 'border-blue-950 bg-slate-950/60 text-gray-400 hover:text-white'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-3" id="faq-accordion-list">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isExpanded = expandedFaq === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className="bg-slate-950/40 border border-blue-950/70 rounded-xl overflow-hidden transition-all hover:bg-slate-950/60 flex flex-col card-print"
                    id={`faq-item-${faq.id}`}
                  >
                    <button
                      onClick={() => setExpandedFaq(isExpanded ? null : faq.id)}
                      className="w-full text-left p-5 flex items-start justify-between gap-4 font-sans focus:outline-none"
                    >
                      <div>
                        {/* Topic tag */}
                        <span className="font-mono text-[9px] text-brand-accent uppercase tracking-widest mb-1.5 block">
                          Parameter {faq.id.toString().padStart(2, '0')} // {faq.topic}
                        </span>
                        <h4 className="font-heading font-semibold text-white text-xs sm:text-sm uppercase tracking-wide leading-snug">
                          {faq.question}
                        </h4>
                      </div>
                      <span className="p-1 rounded bg-[#0B1F3A] border border-blue-900/40 text-brand-accent mt-1 shrink-0">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed font-sans border-t border-blue-950 select-text">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 text-sm text-gray-500 font-mono border border-blue-950 rounded-xl bg-slate-950/20">
                No articles match your query. Try searching for "local", "GPS", or "Canada".
              </div>
            )}
          </div>
        </section>


        {/* =======================================
            SECTION 13: FINAL MESSAGE (Headline, supporting copy, final CTAs)
           ======================================= */}
        <section 
          ref={sectionRefs.final} 
          id="final" 
          className="py-16 border-t border-blue-950 mb-10 text-center scroll-mt-24"
        >
          <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-b from-[#0B1F3A] to-slate-950 border border-blue-900/20 p-8 md:p-14 relative overflow-hidden" id="final-cta-card">
            
            {/* Ambient visual overlay */}
            <div className="ambient-glow bg-[#00D4FF] w-96 h-96 top-[-100px] left-1/3 opacity-10" />

            <div className="relative z-10 max-w-2xl mx-auto">
              
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#00D4FF]/10 border border-[#00D4FF]/30 font-mono text-[10px] tracking-widest text-[#00D4FF] uppercase mb-6 select-none">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-accent stroke-[2.5]" />
                In integrity we stand
              </div>

              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-6">
                Technology Should Work For Drivers.
              </h2>
              
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-sans mb-4">
                The future of vehicle intelligence should be built on trust, transparency, and informed decision-making. At Astrateq Gadgets, we believe drivers deserve to understand the technology around them—not be overwhelmed by it.
              </p>

              <p className="text-xs text-brand-accent-secondary italic leading-relaxed font-sans mb-10 max-w-lg mx-auto">
                No unrequested cloud channels. No hidden telemetry licensing. Just elegant, secure local diagnostics that keep you in absolute command of your driveway.
              </p>

              {/* Action grid */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono" id="final-cta-buttons">
                <a 
                  href="https://astrateqgadgets.com" 
                  className="w-full sm:w-auto bg-[#00D4FF] text-brand-bg hover:opacity-95 px-7 py-3 rounded font-mono font-bold uppercase tracking-wider inline-flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                  id="final-btn-astrateq"
                >
                  Explore Astrateq Gadgets
                  <ExternalLink className="w-4 h-4" />
                </a>
                
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className="w-full sm:w-auto text-gray-400 hover:text-white px-6 py-3 rounded border border-blue-950 bg-slate-950/40 hover:border-[#00D4FF]/40 ml-0 transition-all font-mono uppercase tracking-wider flex items-center justify-center gap-1.5"
                  id="final-btn-return"
                >
                  <RotateCcw className="w-4 h-4 text-white" />
                  Return To Home
                </button>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Elegant publication footer */}
      <footer className="border-t border-blue-950 bg-slate-950/80 backdrop-blur-md py-12 px-6 text-xs text-gray-500 font-mono relative z-20" id="manifesto-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col gap-1 text-center md:text-left select-none">
            <span className="text-white font-bold tracking-widest uppercase">ASTRATEQ GADGETS</span>
            <span className="text-[10px] text-gray-500">Design strategists & privacy advocates. Manufactured responsibly in Canada.</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-[10px] select-none text-brand-accent" id="footer-links">
            <span className="hover:underline cursor-pointer" onClick={() => scrollToSection('zerocloud')}>Manifesto</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer" onClick={() => scrollToSection('resources')}>Guides</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer" onClick={() => scrollToSection('faq')}>FAQ Center</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer" onClick={() => scrollToSection('commitments')}>Commitments</span>
          </div>

          <div className="text-center md:text-right text-[10px] text-gray-600 flex flex-col gap-0.5 select-none font-mono">
            <span>© 2026 Astrateq Gadgets. All rights reserved.</span>
            <span>PIPEDA & Quebec Law 25 compliance layout format.</span>
          </div>
        </div>
      </footer>

      {/* Floating Interactive Toast System */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 bg-[#0B1F3A]/95 backdrop-blur border border-[#00D4FF] text-[#00D4FF] px-4 py-3 rounded-xl shadow-lg z-50 flex items-center gap-2 font-mono text-[11px] font-bold max-w-sm selection:bg-transparent"
          >
            <Info className="w-4 h-4 flex-shrink-0 animate-bounce" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bright Tangerine Up Arrow (Scroll to Top) in the Bottom-Right Corner */}
      <div className="fixed bottom-6 right-6 z-40 no-print" id="floating-tangerine-back-to-top">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF7000] hover:bg-[#FF851A] text-slate-950 border-2 border-white/20 transition-all cursor-pointer group shadow-[0_0_20px_rgba(255,112,0,0.5)] hover:shadow-[0_0_30px_rgba(255,112,0,0.9)] active:scale-95"
          title="Back to Top"
        >
          <ChevronUp className="w-7 h-7 text-slate-950 stroke-[3] group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
