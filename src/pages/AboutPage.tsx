import React from 'react';
import { PageType } from '../types';
import { COMPANY_INFO, PRODUCT_DIVISIONS } from '../data/companyData';
import { SEOHead } from '../components/seo/SEOHead';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Factory, 
  Wrench, 
  MapPin, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Eye,
  Microscope,
  Zap,
  Flame,
  Cpu,
  Gauge,
  Droplets,
  CircleDot,
  Phone,
  Clock,
  Shield,
  HelpCircle
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutPageProps {
  onPageChange: (page: PageType) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onPageChange, onOpenQuoteModal }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <SEOHead
        pageName="about"
        title="About Us | Water Level Controller & Fire Material Supplier in Vadodara | Madhav Enterprise"
        description="Madhav Enterprise and Automation (Vadodara) is Gujarat's trusted manufacturer & supplier of Fully Automatic Digital Panel Starters, Water Level Controllers, Fire Fighting Material, Hydrant Valves, Butterfly Valves & Pumps since 2008."
        keywords={[
          'About Madhav Enterprise and Automation Vadodara',
          'Water Level Controller Manufacturer Vadodara',
          'Fully Automatic Digital Panel Starter with Level Controller',
          'Fire Material Supplier Vadodara',
          'Fire Fighting Equipment Gujarat',
          'Fire Hydrant Valve Manufacturer Vadodara',
          'Butterfly Valve Supplier Diwalipura Vasna Road',
          'Submersible Pump Supplier Vadodara',
          'Pressure Booster Pump Gujarat',
          'Sewage Dewatering Pump Vadodara'
        ]}
      />
      
      {/* Header Hero Banner */}
      <section className="bg-[#111111] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E86A2D]/20 border border-[#E86A2D]/40 text-[#E86A2D] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Building2 className="w-4 h-4" />
            <span>Vadodara, Gujarat • Engineering & Supply Excellence Since 2008</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            About Madhav Enterprise and Automation
          </h1>
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed max-w-3xl mx-auto">
            Gujarat’s premier manufacturer and trusted industrial supplier specializing in <strong className="text-white font-semibold">Fully Automatic Digital Panel Starters with Water Level Controllers</strong>, certified <strong className="text-[#E86A2D] font-semibold">Fire Fighting Materials</strong>, Industrial Butterfly Valves, Submersible Pumps, and Hydro-Pneumatic Pressure Booster Systems.
          </p>
        </div>
      </section>

      {/* Main Story & History with Official Clean Logo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#E86A2D]/10 text-[#E86A2D] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Factory className="w-3.5 h-3.5" />
                <span>Our Manufacturing Legacy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 leading-tight">
                Engineering Reliable Water Automation & Life Safety Solutions Since 2008
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Headquartered at Vasna Road, Diwalipura in Vadodara, <strong>Madhav Enterprise and Automation</strong> was established under the visionary leadership of <strong>Madhavji K. Javiya</strong> to engineer robust, high-performance automation and fluid management hardware for residential complexes, industrial plants, chemical zones, and municipal utilities across Gujarat.
              </p>

              <p className="text-sm text-neutral-600 leading-relaxed">
                What began as a specialized engineering unit for digital pump motor starters has evolved into an integrated manufacturing and distribution hub for precision <strong>Automatic Water Level Controllers</strong>, complete <strong>Fire Fighting Safety Materials (Hydrants, Hoses, Sprinklers)</strong>, <strong>Heavy-duty Butterfly Valves</strong>, <strong>Submersible Pumps</strong>, <strong>Pressure Boosters</strong>, and <strong>Sewage Dewatering Pumps</strong>.
              </p>

              <div className="pt-2 grid grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 text-center sm:text-left">
                  <p className="text-2xl font-display font-extrabold text-[#E86A2D]">15+ Years</p>
                  <p className="text-xs text-neutral-600 mt-0.5">Industry Experience</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 text-center sm:text-left">
                  <p className="text-2xl font-display font-extrabold text-[#111111]">2,500+</p>
                  <p className="text-xs text-neutral-600 mt-0.5">Satisfied Clients</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 text-center sm:text-left">
                  <p className="text-2xl font-display font-extrabold text-[#E86A2D]">12 Hours</p>
                  <p className="text-xs text-neutral-600 mt-0.5">Gujarat Dispatch</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="w-full min-h-[340px] bg-white rounded-3xl border border-neutral-200 shadow-xl p-8 sm:p-14 flex items-center justify-center transition-all duration-300 hover:shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/d/1hWnzMb53ymJux2aTUhpXNc9zUog5Hbr1"
                  alt="Madhav Enterprise and Automation Logo"
                  className="max-h-60 sm:max-h-72 w-auto max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://drive.google.com/uc?export=view&id=1hWnzMb53ymJux2aTUhpXNc9zUog5Hbr1";
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE FOCUS SECTION 1: WATER LEVEL CONTROLLERS & PANEL STARTERS */}
      <section className="py-20 bg-neutral-50 border-t border-neutral-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-600 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>Flagship Product Innovation</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 leading-tight">
                Fully Automatic Digital Panel Starters &amp; Water Level Controllers
              </h2>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                Our <strong>Fully Automatic Digital Water Level Controller with Panel Starter</strong> is Gujarat’s most dependable solution for preventing water overflow, eliminating dry-run motor burnouts, and automating underground sump to overhead tank water transfer without human intervention.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-neutral-200">
                  <CheckCircle2 className="w-5 h-5 text-[#E86A2D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Intelligent Microprocessor Automation</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">Automatically turns ON pump when overhead tank is low and turns OFF when full, with simultaneous underground sump level sensing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-neutral-200">
                  <CheckCircle2 className="w-5 h-5 text-[#E86A2D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Comprehensive Electrical &amp; Dry-Run Protection</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">Equipped with built-in high/low voltage cutoff, overload trip, single phasing protection, and instant dry-run shutoff.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-neutral-200">
                  <CheckCircle2 className="w-5 h-5 text-[#E86A2D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Maintenance-Free Corrosion-Proof Sensors</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">Supplied with heavy-duty PVC magnetic float switches and stainless steel magnetic sensors immune to salt, scaling, and oxidation.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onPageChange('products')}
                  className="bg-[#111111] hover:bg-neutral-800 text-white px-6 py-3 rounded-full text-xs font-bold transition-all inline-flex items-center gap-2"
                >
                  <span>Explore Water Level Controllers</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenQuoteModal('Fully Automatic Digital Panel Starter with Level Controller')}
                  className="bg-[#E86A2D] hover:bg-[#d0591f] text-white px-6 py-3 rounded-full text-xs font-bold transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>Get Controller Price Quote</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-neutral-900">Water Controller Lineup</h3>
                      <p className="text-xs text-neutral-500">Single Phase &amp; 3-Phase Industrial Panels</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Top Seller</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                    <p className="text-xs font-bold text-neutral-900">Single Phase Panels</p>
                    <p className="text-xs text-neutral-600 mt-1">0.5 HP to 3.0 HP submersible &amp; monoblock pumps for homes &amp; apartments.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                    <p className="text-xs font-bold text-neutral-900">3-Phase Industrial Panels</p>
                    <p className="text-xs text-neutral-600 mt-1">3.0 HP to 30.0 HP heavy motor starters with digital ampere &amp; volt meters.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                    <p className="text-xs font-bold text-neutral-900">Float Switch Automation</p>
                    <p className="text-xs text-neutral-600 mt-1">Non-toxic PVC float switches suitable for RO plants, sewage &amp; raw water.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                    <p className="text-xs font-bold text-neutral-900">Automatic Timer &amp; Cyclic Panels</p>
                    <p className="text-xs text-neutral-600 mt-1">Programmable real-time timer controllers for industrial process batches.</p>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
                  <strong>Vadodara Service Guarantee:</strong> Tested rigorously for Gujarat water hardness and fluctuating voltage conditions with a comprehensive 12-month manufacturer replacement warranty.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE FOCUS SECTION 2: FIRE FIGHTING MATERIALS & SAFETY EQUIPMENT */}
      <section className="py-20 bg-[#0f0f0f] text-white relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-dark opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center">
                      <Flame className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Fire Material Inventory</h3>
                      <p className="text-xs text-neutral-400">ISI Marked &amp; GIDC Factory Approved</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-red-500/20 border border-red-500/40 text-red-400 px-3 py-1 rounded-full">Safety Certified</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-neutral-800/60 border border-neutral-700/60">
                    <p className="text-xs font-bold text-white">Fire Hydrant Landing Valves</p>
                    <p className="text-xs text-neutral-400 mt-1">Gunmetal &amp; Stainless Steel single/double outlet landing valves (IS: 5290).</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-neutral-800/60 border border-neutral-700/60">
                    <p className="text-xs font-bold text-white">Fire Hose Reels &amp; Hoses</p>
                    <p className="text-xs text-neutral-400 mt-1">30m swinging hose reel drums, RRL canvas hose pipes &amp; quick-action nozzles.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-neutral-800/60 border border-neutral-700/60">
                    <p className="text-xs font-bold text-white">Fire Sprinkler Systems</p>
                    <p className="text-xs text-neutral-400 mt-1">Pendent, upright &amp; sidewall 68°C / 93°C brass automatic sprinkler heads.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-neutral-800/60 border border-neutral-700/60">
                    <p className="text-xs font-bold text-white">Fire Extinguishers &amp; Accessories</p>
                    <p className="text-xs text-neutral-400 mt-1">ABC Powder, CO2, Clean Agent, Foam Extinguishers, branch pipes &amp; coupling sets.</p>
                  </div>
                </div>

                <div className="p-4 bg-red-950/40 rounded-2xl border border-red-800/40 text-xs text-red-200 leading-relaxed">
                  <strong>Industrial Compliance:</strong> Engineered to meet Gujarat Fire Safety Authority and National Building Code (NBC) norms for commercial towers, factories, and warehouses.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 text-red-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Flame className="w-4 h-4" />
                <span>Life &amp; Asset Protection Equipment</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight">
                Certified Fire Fighting Material &amp; Safety Equipment Supplier in Vadodara
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Madhav Enterprise and Automation is Vadodara’s trusted vendor for <strong>high-reliability fire fighting materials and fire hydrant infrastructure</strong>. We supply contractors, EPC developers, GIDC chemical plants, and commercial buildings across Vadodara, Halol, Savli, Ankleshwar, and Bharuch.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-neutral-300">
                    <strong className="text-white">Hydrostatic Pressure Tested:</strong> Every fire hydrant valve and hose assembly is pressure tested to 21 kg/cm² for guaranteed performance in emergency scenarios.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-neutral-300">
                    <strong className="text-white">Complete GIDC Fire NOC Compliance:</strong> Supplies complete packages for plant Fire NOC approvals, including hydrant risers, branch pipes, and alarm check valves.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-neutral-300">
                    <strong className="text-white">Same-Day Urgent Supply:</strong> Ready stock available at our Vadodara warehouse for emergency replacement and project commissioning deadlines.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onPageChange('products')}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-xs font-bold transition-all shadow-lg shadow-red-600/30 inline-flex items-center gap-2"
                >
                  <span>View Fire Materials Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenQuoteModal('Fire Material & Hydrant Valves')}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full text-xs font-bold transition-all inline-flex items-center gap-2"
                >
                  <span>Inquire for Fire Safety Package</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMPLETE PRODUCT SPECTRUM (ALL PRODUCT LINES COVERED FOR SEO) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#E86A2D]/10 text-[#E86A2D] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Complete Industrial Spectrum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900">
              Our Complete Industrial Product Range
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Madhav Enterprise and Automation delivers engineered solutions across six key industrial divisions for high-demand municipal, commercial, and industrial requirements in Gujarat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Water Level Controllers */}
            <div className="bg-neutral-50 rounded-3xl p-6 border border-neutral-200 hover:border-[#E86A2D] transition-all hover:shadow-lg space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-neutral-900">Water Level Controllers &amp; Starter Panels</h3>
                <p className="text-xs text-neutral-600 leading-relaxed mt-2">
                  Microprocessor automated digital overhead tank &amp; underground sump level controllers with dry-run protection, voltage monitoring, and magnetic float sensors.
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-neutral-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E86A2D]" /> Single Phase &amp; 3-Phase Starter Panels</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E86A2D]" /> High/Low Voltage &amp; Phase Failure Cutoff</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E86A2D]" /> Magnetic Float Switch &amp; SS Probes</li>
                </ul>
              </div>
              <button 
                onClick={() => onPageChange('products')} 
                className="text-xs font-bold text-[#E86A2D] hover:text-[#d0591f] inline-flex items-center gap-1.5 pt-2"
              >
                <span>View Products</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 2. Fire Material & Safety Equipment */}
            <div className="bg-neutral-50 rounded-3xl p-6 border border-neutral-200 hover:border-red-500 transition-all hover:shadow-lg space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-neutral-900">Fire Material &amp; Safety Equipment</h3>
                <p className="text-xs text-neutral-600 leading-relaxed mt-2">
                  ISI marked fire hydrant valves, swinging fire hose reels, branch pipes, automatic sprinkler heads, and commercial fire extinguishers.
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-neutral-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-red-500" /> Gunmetal &amp; SS 304 Hydrant Landing Valves</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-red-500" /> RRL Canvas Fire Hoses &amp; Reel Drums</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-red-500" /> NBC &amp; GIDC Fire NOC Compliant Hardware</li>
                </ul>
              </div>
              <button 
                onClick={() => onPageChange('products')} 
                className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1.5 pt-2"
              >
                <span>View Products</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3. Butterfly Valves & Flow Control */}
            <div className="bg-neutral-50 rounded-3xl p-6 border border-neutral-200 hover:border-[#E86A2D] transition-all hover:shadow-lg space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#E86A2D] flex items-center justify-center mb-4">
                  <CircleDot className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-neutral-900">Butterfly Valves &amp; Flow Control</h3>
                <p className="text-xs text-neutral-600 leading-relaxed mt-2">
                  Wafer type cast iron, ductile iron, and SS 316 disc butterfly valves with EPDM/PTFE liners for chemical, HVAC, and water distribution lines.
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-neutral-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E86A2D]" /> PN10 / PN16 / Class 150 Ratings</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E86A2D]" /> Hand Lever &amp; Gear Operated Variants</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E86A2D]" /> 100% Zero-Leakage Hydro Tested</li>
                </ul>
              </div>
              <button 
                onClick={() => onPageChange('products')} 
                className="text-xs font-bold text-[#E86A2D] hover:text-[#d0591f] inline-flex items-center gap-1.5 pt-2"
              >
                <span>View Products</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 4. Submersible Pumps */}
            <div className="bg-neutral-50 rounded-3xl p-6 border border-neutral-200 hover:border-[#E86A2D] transition-all hover:shadow-lg space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-neutral-900">Submersible Pumps</h3>
                <p className="text-xs text-neutral-600 leading-relaxed mt-2">
                  High-efficiency stainless steel deep borewell submersibles (V4 / V6) and openwell submersible pumps for agriculture, factories, and residential societies.
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-neutral-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E86A2D]" /> High Head &amp; High Discharge Impellers</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E86A2D]" /> 100% Copper Winding &amp; Sand Guard</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E86A2D]" /> Single &amp; Three Phase Configurations</li>
                </ul>
              </div>
              <button 
                onClick={() => onPageChange('products')} 
                className="text-xs font-bold text-[#E86A2D] hover:text-[#d0591f] inline-flex items-center gap-1.5 pt-2"
              >
                <span>View Products</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 5. Hydro-Pneumatic Pressure Booster Pumps */}
            <div className="bg-neutral-50 rounded-3xl p-6 border border-neutral-200 hover:border-[#E86A2D] transition-all hover:shadow-lg space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <Gauge className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-neutral-900">Pressure Booster Systems</h3>
                <p className="text-xs text-neutral-600 leading-relaxed mt-2">
                  Automatic hydro-pneumatic multi-stage booster pump sets with pressure tanks and digital sensors for constant water tap pressure in high-rise towers and bungalows.
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-neutral-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E86A2D]" /> Constant High Water Pressure Guarantee</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E86A2D]" /> Automatic Pressure Switch &amp; VFD Control</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E86A2D]" /> Low Noise Multi-Stage SS Construction</li>
                </ul>
              </div>
              <button 
                onClick={() => onPageChange('products')} 
                className="text-xs font-bold text-[#E86A2D] hover:text-[#d0591f] inline-flex items-center gap-1.5 pt-2"
              >
                <span>View Products</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 6. Sewage & Dewatering Pumps */}
            <div className="bg-neutral-50 rounded-3xl p-6 border border-neutral-200 hover:border-[#E86A2D] transition-all hover:shadow-lg space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-neutral-900">Sewage &amp; Dewatering Pumps</h3>
                <p className="text-xs text-neutral-600 leading-relaxed mt-2">
                  Heavy-duty non-clog cutter and grinder submersible pumps for sewage treatment plants (STP), basement dewatering, and industrial effluent transfer.
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-neutral-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E86A2D]" /> Solid Handling Non-Clog Vortex Impellers</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E86A2D]" /> Cast Iron &amp; SS 304 Submersible Motor</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E86A2D]" /> Double Mechanical Silicon Carbide Seal</li>
                </ul>
              </div>
              <button 
                onClick={() => onPageChange('products')} 
                className="text-xs font-bold text-[#E86A2D] hover:text-[#d0591f] inline-flex items-center gap-1.5 pt-2"
              >
                <span>View Products</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-[#E86A2D]/10 text-[#E86A2D] rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-neutral-900">Our Mission</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                To deliver uncompromising quality, energy-efficient water level controllers, certified fire fighting equipment, and precision butterfly valves that safeguard pump investments, eliminate water wastage, and protect human life and industrial assets across Gujarat and India.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-[#111111]/10 text-[#111111] rounded-2xl flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-neutral-900">Our Vision</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                To be Gujarat’s most trusted single-source industrial flow control and life safety supplier, recognized for continuous innovation in smart digital automation, zero-leakage metallurgical engineering, and customer-first technical support.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Quality Control & Testing Protocol */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E86A2D]/10 text-[#E86A2D] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Microscope className="w-3.5 h-3.5" />
              <span>Zero Defect Quality Assurance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900">
              Our 4-Stage Quality Rigor
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Every unit dispatched from Madhav Enterprise and Automation Vadodara undergoes strict quality verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-200 space-y-3">
              <span className="text-[#E86A2D] font-mono font-bold text-lg">01</span>
              <h3 className="text-base font-bold text-neutral-900">Raw Material Inspection</h3>
              <p className="text-xs text-neutral-600">Spectro analysis of SS 316 / CF8M chemical composition, flame-retardant ABS enclosures, and high-grade copper windings.</p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-200 space-y-3">
              <span className="text-[#E86A2D] font-mono font-bold text-lg">02</span>
              <h3 className="text-base font-bold text-neutral-900">Electronics Calibration</h3>
              <p className="text-xs text-neutral-600">Microprocessor logic, voltage surge protection, and dry-run float switch sensors undergo 100+ cycle simulations.</p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-200 space-y-3">
              <span className="text-[#E86A2D] font-mono font-bold text-lg">03</span>
              <h3 className="text-base font-bold text-neutral-900">Hydrostatic Pressure Test</h3>
              <p className="text-xs text-neutral-600">Butterfly valves and fire hydrant landing valves are hydro-tested at 1.5x nominal pressure rating for bubble-tight sealing.</p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-200 space-y-3">
              <span className="text-[#E86A2D] font-mono font-bold text-lg">04</span>
              <h3 className="text-base font-bold text-neutral-900">Final Packing &amp; Dispatch</h3>
              <p className="text-xs text-neutral-600">Packaged with factory test certificates, wiring schematics, and 12-month manufacturer warranty documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO FAQ SECTION */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#E86A2D]/10 text-[#E86A2D] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900">
              Common Questions About Our Products &amp; Services
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-neutral-200">
              <h3 className="text-sm sm:text-base font-bold text-neutral-900">
                Where is Madhav Enterprise and Automation located in Vadodara?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                Our main office and supply center is located at <strong>C-10, Gaurav Park, Diwalipura, Vasna Road, Vadodara- 390007, Gujarat, India</strong>. We supply products directly across Vadodara city, Savli GIDC, Halol, Nandesari, Ankleshwar, Bharuch, Ahmedabad, Surat, and all over Gujarat.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-neutral-200">
              <h3 className="text-sm sm:text-base font-bold text-neutral-900">
                How does the Automatic Water Level Controller with Panel Starter work?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                Our automatic water level controller constantly monitors water levels in both underground sumps (source) and overhead tanks (destination). When the overhead tank is empty and water is available in the sump, it starts the pump automatically. When the overhead tank is full or if the underground sump runs dry, it turns the pump off instantly, protecting your motor from dry-run burnout.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-neutral-200">
              <h3 className="text-sm sm:text-base font-bold text-neutral-900">
                What fire fighting materials do you supply for industrial and commercial projects?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                We supply ISI-marked single &amp; double outlet fire hydrant landing valves, 30-meter swinging fire hose reel drums, synthetic RRL canvas hoses, gunmetal branch pipes with nozzles, automatic fire sprinklers (pendent &amp; upright), fire butterfly valves, and portable fire extinguishers (ABC dry powder &amp; CO2). All materials meet Gujarat Fire Safety Authority and NBC standards.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-neutral-200">
              <h3 className="text-sm sm:text-base font-bold text-neutral-900">
                What is the turnaround time for dispatch across Gujarat?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                For in-stock water level controllers, fire hydrant valves, butterfly valves, and standard submersible pumps, we offer express <strong>12-Hour dispatch</strong> across Vadodara and major Gujarat industrial hubs including Ahmedabad, Surat, Rajkot, Bharuch, and Vapi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantage & CTA Section */}
      <section className="py-16 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#E86A2D]/20 text-[#E86A2D] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Vadodara Industrial Corridor Advantage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Partner with Vadodara’s Trusted Flow Control &amp; Fire Safety Expert
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Contact <strong>Madhavji K. Javiya</strong> and our technical engineering team at Vasna Road, Diwalipura, Vadodara for custom bulk supply quotations, product catalogs, technical datasheets, and immediate emergency dispatch.
              </p>
              <div className="flex flex-wrap gap-4 pt-1 text-xs text-neutral-300">
                <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="flex items-center gap-2 hover:text-[#E86A2D] transition-colors">
                  <Phone className="w-4 h-4 text-[#E86A2D]" />
                  <span>{COMPANY_INFO.phonePrimary} / {COMPANY_INFO.phoneSecondary}</span>
                </a>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E86A2D]" />
                  <span>{COMPANY_INFO.workingHours}</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right space-y-3">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full sm:w-auto bg-[#E86A2D] hover:bg-[#d0591f] text-white px-8 py-4 rounded-full text-xs font-bold transition-all shadow-lg shadow-[#E86A2D]/30 inline-flex items-center justify-center gap-2"
              >
                <span>Request Factory Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-neutral-400 text-center lg:text-right">
                Direct Vadodara Factory Dispatch • 100% Genuine Certified Stock
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

