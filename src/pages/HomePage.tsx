import React from 'react';
import { PageType, Product, ProductCategory } from '../types';
import { COMPANY_INFO, PRODUCT_DIVISIONS, INDUSTRIES_SERVED, TESTIMONIALS_DATA, FAQ_DATA, COMPANY_ADVANTAGES } from '../data/companyData';
import { SEOHead } from '../components/seo/SEOHead';
import { 
  Phone, 
  FileText, 
  ShieldCheck, 
  Award, 
  Zap, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  HelpCircle,
  Factory,
  Building2,
  Droplets,
  Package,
  Layers,
  Cpu,
  CircleDot,
  Gauge,
  Flame
} from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onPageChange: (page: PageType) => void;
  onSelectCategory?: (category: ProductCategory) => void;
  onOpenQuoteModal: (productName?: string) => void;
  onOpenCallModal: () => void;
  onSelectProduct: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onPageChange,
  onSelectCategory,
  onOpenQuoteModal,
  onOpenCallModal,
}) => {
  const [openFaqId, setOpenFaqId] = React.useState<string>(FAQ_DATA[0].id);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 overflow-x-hidden">
      <SEOHead
        pageName="home"
        title="Fully Automatic Digital Motor Starter With Level Controller and Protection & Fire Material | Madhav Enterprise Vadodara"
        description="Madhav Enterprise is Vadodara's leading manufacturer of Fully Automatic Digital Motor Starters With Level Controller and Protection, Fire Material & Hydrant Valves, Butterfly Valves, and Industrial Pumps in Vasna Road, Diwalipura, Vadodara."
        keywords={[
          'Fully Automatic Digital Motor Starter With Level Controller and Protection',
          'Fire Material Supplier in Vadodara',
          'Water Level Controller Manufacturer in Vadodara',
          'Butterfly Valve Supplier in Vadodara',
          'Sewage Pump Supplier in Vadodara',
          'Pressure Pump Supplier',
          'Submersible Pump Supplier',
          'Fire Fighting Equipment Vadodara',
          'Industrial Equipment Supplier'
        ]}
        extraSchemaData={{ faqs: FAQ_DATA }}
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-neutral-950 flex items-center justify-center overflow-hidden py-16 lg:py-24">
        {/* Large Industrial Background Overlay Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/d/16Tr3OO5GE7S0DeNll8tT9iPp7n-xZQXy"
            alt="Madhav Enterprise Industrial Hero Banner"
            className="w-full h-full object-cover object-center opacity-45 scale-105"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.triedFallback) {
                target.dataset.triedFallback = 'true';
                target.src = 'https://drive.google.com/uc?export=view&id=16Tr3OO5GE7S0DeNll8tT9iPp7n-xZQXy';
              }
            }}
          />
          {/* Dark luxury gradient overlays for crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-[#111111]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/40" />
          <div className="absolute inset-0 industrial-grid-dark opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl space-y-6">
            
            {/* Badge */}
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-[#E86A2D]/20 border border-[#E86A2D]/40 backdrop-blur-md px-4 py-1.5 rounded-full"
              >
                <div className="w-2 h-2 rounded-full bg-[#E86A2D] animate-ping" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A2D]">
                  Vadodara's Trusted Industrial Manufacturer & Supplier
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[1.15] tracking-tight"
              >
                Fully Automatic Digital <span className="text-[#E86A2D] underline decoration-[#E86A2D]/40 underline-offset-8">Motor Starter</span> With Level Controller & Protection and <span className="text-[#E86A2D]">Fire Material</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-medium leading-relaxed"
              >
                {COMPANY_INFO.subheading}. Engineered for heavy industrial plants, chemical processing units, commercial towers, and deep groundwater extraction.
              </motion.p>

              {/* Hero Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-4 flex flex-wrap items-center gap-4"
              >
                {/* Get Quote Button */}
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="inline-flex items-center gap-3 bg-[#E86A2D] hover:bg-[#d0591f] text-white px-8 py-4 rounded-full text-sm font-extrabold transition-all shadow-xl shadow-[#E86A2D]/30 hover:scale-[1.03] active:scale-[0.98] group"
                >
                  <FileText className="w-5 h-5" />
                  <span>Get Factory Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Call Now Button */}
                <button
                  onClick={onOpenCallModal}
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-full text-sm font-extrabold transition-all hover:scale-[1.03]"
                >
                  <Phone className="w-5 h-5 text-[#E86A2D]" />
                  <span>Call Now</span>
                </button>
              </motion.div>

              {/* Key Quick Highlights Ticker */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-neutral-300"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E86A2D]" />
                  <span>100% Tested Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E86A2D]" />
                  <span>Vadodara Supply Hub</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#E86A2D]" />
                  <span>MSME Registered Supplier</span>
                </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* 2. STATS & METRICS TICKER BAR */}
      <section className="bg-[#111111] text-white py-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-3xl md:text-4xl font-display font-extrabold text-[#E86A2D]">15+</p>
              <p className="text-xs text-neutral-400 uppercase font-semibold tracking-wider mt-1">Years Engineering Experience</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-3xl md:text-4xl font-display font-extrabold text-white">2,500+</p>
              <p className="text-xs text-neutral-400 uppercase font-semibold tracking-wider mt-1">Industrial & Commercial Clients</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-3xl md:text-4xl font-display font-extrabold text-[#E86A2D]">100%</p>
              <p className="text-xs text-neutral-400 uppercase font-semibold tracking-wider mt-1">Pressure & Hydro Tested</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-3xl md:text-4xl font-display font-extrabold text-white">24 Hours</p>
              <p className="text-xs text-neutral-400 uppercase font-semibold tracking-wider mt-1">Dispatch Across Gujarat</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW SECTION */}
      <section className="py-20 bg-neutral-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Video Cluster */}
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black">
                <iframe
                  src="https://drive.google.com/file/d/1xXBJV4msT2zOzCz5SFNmN_rRksMzmeYO/preview"
                  title="Madhav Enterprise Video Showcase"
                  className="w-full h-80 sm:h-96 rounded-2xl"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 z-20 bg-[#111111] text-white p-5 rounded-2xl shadow-xl border border-white/20 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#E86A2D] rounded-xl text-white">
                    <Factory className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-white">Vasna Road, Vadodara</p>
                    <p className="text-[11px] text-neutral-400">Direct Manufacturing Unit</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#E86A2D]/10 text-[#E86A2D] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>About Madhav Enterprise</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 leading-tight">
                Engineering Precision Water Control & Heavy Valve Solutions in Vadodara
              </h2>

              <p className="text-sm text-neutral-600 leading-relaxed">
                Established in 2008 in Vadodara, Gujarat, <strong>Madhav Enterprise</strong> has grown into a trusted manufacturer and supplier of fully automatic digital motor starters with level controller and protection, ISI marked fire fighting materials & hydrant valves, butterfly valves, sewage pumps, and booster pressure pumps.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-neutral-800 pt-2">
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E86A2D]" />
                  <span>Microprocessor Based Controllers</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E86A2D]" />
                  <span>Hydro-Tested SS 316 Valves</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E86A2D]" />
                  <span>High Flow Centrifugal Pumps</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E86A2D]" />
                  <span>100% Factory Direct Pricing</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onPageChange('about')}
                  className="inline-flex items-center gap-2 bg-[#111111] hover:bg-neutral-800 text-white px-6 py-3 rounded-full text-xs font-bold transition-all shadow"
                >
                  <span>Learn More About Our Company</span>
                  <ArrowRight className="w-4 h-4 text-[#E86A2D]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3.5 PRODUCT DIVISIONS SHOWCASE */}
      <section className="py-16 bg-[#111111] text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E86A2D]/20 border border-[#E86A2D]/40 text-[#E86A2D] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Package className="w-3.5 h-3.5" />
              <span>Specialized Manufacturing Divisions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              Explore Our 6 Core Product Pages
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              Select any division below to view technical specifications, model catalogs, and direct inquiry forms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_DIVISIONS.map((div) => (
              <motion.div
                key={div.id}
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/10 hover:border-[#E86A2D]/60 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#E86A2D]/15 text-[#E86A2D] flex items-center justify-center group-hover:bg-[#E86A2D] group-hover:text-white transition-colors">
                      {div.id === 'wlc' && <Cpu className="w-6 h-6" />}
                      {div.id === 'valves' && <CircleDot className="w-6 h-6" />}
                      {div.id === 'sewage-pumps' && <Zap className="w-6 h-6" />}
                      {div.id === 'motor-pumps' && <Zap className="w-6 h-6" />}
                      {div.id === 'pipes-fittings' && <Layers className="w-6 h-6" />}
                      {div.id === 'pressure-pumps' && <Gauge className="w-6 h-6" />}
                      {div.id === 'submersible-pumps' && <Droplets className="w-6 h-6" />}
                      {div.id === 'fire-material' && <Flame className="w-6 h-6" />}
                    </div>
                    <span className="text-[10px] font-mono font-extrabold uppercase px-2.5 py-1 rounded-full bg-white/10 text-neutral-300 border border-white/10">
                      Vadodara Hub
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#E86A2D] transition-colors">
                      {div.displayName}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                      {div.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (onSelectCategory) {
                        onSelectCategory(div.category);
                      } else {
                        onPageChange('products');
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E86A2D] hover:text-white transition-colors"
                  >
                    <span>Open Product Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenQuoteModal(div.displayName)}
                    className="text-[11px] font-semibold text-neutral-400 hover:text-white underline decoration-neutral-600"
                  >
                    Get Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E86A2D]/10 text-[#E86A2D] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Vadodara Manufacturing Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900">
              Why Engineers Choose Madhav Enterprise
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              We combine robust mechanical design, electronics testing, and direct factory distribution from Vadodara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_ADVANTAGES.map((adv, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 space-y-3 group"
              >
                <div className="w-12 h-12 bg-[#E86A2D]/10 text-[#E86A2D] group-hover:bg-[#E86A2D] group-hover:text-white rounded-2xl flex items-center justify-center transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-display font-bold text-neutral-900">
                  {adv.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES WE SERVE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E86A2D]/10 text-[#E86A2D] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Factory className="w-3.5 h-3.5" />
              <span>Applications & Industries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900">
              Serving Gujarat’s Industrial Sectors
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Delivering high reliability solutions tailored for Vadodara, Ankleshwar, Halol, and Nandesari GIDC hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_SERVED.map((ind) => (
              <div
                key={ind.id}
                className="relative rounded-3xl overflow-hidden shadow-md group h-72 border border-neutral-200"
              >
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <h3 className="text-xl font-display font-bold text-white">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2">
                    {ind.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {ind.popularProducts.map((p, idx) => (
                      <span key={idx} className="bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E86A2D]/20 text-[#E86A2D] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-[#E86A2D]" />
              <span>Customer Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              Trusted by Regional Engineers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#E86A2D]"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.name}</h4>
                    <p className="text-[10px] text-neutral-400">{t.role}, {t.company}</p>
                    <p className="text-[10px] text-[#E86A2D]">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION SECTION */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E86A2D]/10 text-[#E86A2D] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900">
              Got Questions? We Have Answers.
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-neutral-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                    className="w-full p-5 text-left font-display font-bold text-sm text-neutral-900 flex items-center justify-between gap-4 hover:text-[#E86A2D]"
                  >
                    <span>{faq.question}</span>
                    <span className="text-[#E86A2D] font-extrabold text-lg">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. CONTACT CTA BANNER */}
      <section className="py-16 bg-[#111111] text-white relative overflow-hidden">
        <div className="absolute inset-0 orange-glow opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Need Custom Water Controllers or Valves for Your Plant?
          </h2>
          <p className="text-sm text-neutral-300 max-w-2xl mx-auto">
            Contact our Vadodara engineering hub today. Receive expert advice, technical drawing specifications, and competitive factory pricing.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-[#E86A2D] hover:bg-[#d0591f] text-white px-8 py-4 rounded-full text-xs font-bold transition-all shadow-xl shadow-[#E86A2D]/30"
            >
              Get Instant Manufacturer Quote
            </button>
            <button
              onClick={onOpenCallModal}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full text-xs font-bold transition-all"
            >
              Call {COMPANY_INFO.phonePrimary}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
