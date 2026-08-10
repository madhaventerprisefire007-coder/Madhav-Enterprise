import React from 'react';
import { PageType } from '../types';
import { COMPANY_INFO } from '../data/companyData';
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
  Zap
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
        title="About Madhav Enterprise | Industrial Equipment Manufacturer Vadodara"
        description="Learn about Madhav Enterprise - Vadodara's benchmark manufacturer & supplier of Automatic Water Level Controllers, SS Industrial Valves & Pumps located at Diwalipura / Vasna Road, Vadodara."
        keywords={[
          'About Madhav Enterprise Vadodara',
          'Industrial Equipment Manufacturer Gujarat',
          'Water Level Controller Factory Vadodara',
          'Industrial Valve Supplier Diwalipura'
        ]}
      />
      
      {/* Header Banner */}
      <section className="bg-[#111111] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E86A2D]/20 border border-[#E86A2D]/40 text-[#E86A2D] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Building2 className="w-4 h-4" />
            <span>Vadodara, Gujarat Manufacturing Legacy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            About Madhav Enterprise Vadodara
          </h1>
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
            Leading manufacturer and supplier of Automatic Water Level Controllers, Heavy Industrial Valves, Motor Pumps, Submersible Systems, and CPVC Piping based in Vadodara, Gujarat.
          </p>
        </div>
      </section>

      {/* Main Story & History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#E86A2D]/10 text-[#E86A2D] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Factory className="w-3.5 h-3.5" />
                <span>Our Engineering Journey</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 leading-tight">
                Pioneering Water Level Automation & Flow Control Since 2008
              </h2>

              <p className="text-sm text-neutral-600 leading-relaxed">
                Founded in Vadodara—the engineering and industrial capital of Gujarat—<strong>Madhav Enterprise</strong> started with a mission to solve water wastage and pump burnouts across regional manufacturing plants and commercial properties.
              </p>

              <p className="text-sm text-neutral-600 leading-relaxed">
                Over the past 15+ years, we have expanded our product lines to include heavy duty SS 316 ball valves, wafer butterfly valves, high-head centrifugal motor pumps, deep borewell submersible pumps, and industrial CPVC/UPVC piping manifolds.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                  <p className="text-2xl font-display font-extrabold text-[#E86A2D]">15+ Years</p>
                  <p className="text-xs text-neutral-600 mt-0.5">Manufacturing Excellence</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                  <p className="text-2xl font-display font-extrabold text-[#111111]">2,500+</p>
                  <p className="text-xs text-neutral-600 mt-0.5">Satisfied Plants & Clients</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                  alt="Madhav Enterprise Assembly Floor Vadodara"
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs font-mono text-[#E86A2D]">Vadodara Manufacturing Facility</p>
                  <p className="text-base font-bold text-white">State-of-the-Art Electronics & Pressure Testing Lab</p>
                </div>
              </div>
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
              <p className="text-xs text-neutral-600 leading-relaxed">
                To deliver uncompromising quality, energy-efficient water level controllers and industrial valves that safeguard pump investments, eliminate water wastage, and streamline plant operations for industries across Gujarat and India.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-[#111111]/10 text-[#111111] rounded-2xl flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-neutral-900">Our Vision</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                To be Gujarat’s most trusted single-source industrial flow control manufacturer, recognized for innovation in smart water automation, precision metallurgical valve forging, and customer-first technical support.
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
              Our 4-Stage Testing Rigor
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Every unit dispatched from Madhav Enterprise Vadodara undergoes strict quality verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-200 space-y-3">
              <span className="text-[#E86A2D] font-mono font-bold text-lg">01</span>
              <h3 className="text-base font-bold text-neutral-900">Raw Material Inspection</h3>
              <p className="text-xs text-neutral-600">Spectro analysis of SS 316 / CF8M chemical composition and flame-retardant ABS enclosures.</p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-200 space-y-3">
              <span className="text-[#E86A2D] font-mono font-bold text-lg">02</span>
              <h3 className="text-base font-bold text-neutral-900">Electronics Calibration</h3>
              <p className="text-xs text-neutral-600">Micro-controller logic, voltage surge protection, and dry-run sensors undergo 100+ cycle simulations.</p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-200 space-y-3">
              <span className="text-[#E86A2D] font-mono font-bold text-lg">03</span>
              <h3 className="text-base font-bold text-neutral-900">Hydrostatic Pressure Test</h3>
              <p className="text-xs text-neutral-600">Industrial valves are hydro-tested at 1.5x nominal pressure rating to ensure zero bubble-tight leakage.</p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-200 space-y-3">
              <span className="text-[#E86A2D] font-mono font-bold text-lg">04</span>
              <h3 className="text-base font-bold text-neutral-900">Final Packing & Dispatch</h3>
              <p className="text-xs text-neutral-600">Packaged with test certificates, wiring schematics, and 12-month manufacturer warranty documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantage Vadodara */}
      <section className="py-16 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#E86A2D]/20 text-[#E86A2D] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Vadodara Industrial Advantage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Located at the Heart of Gujarat’s Industrial Corridor
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Our manufacturing workshop at Vadodara allows seamless access to national highway networks, enabling express 24-hour delivery of pumps, valves, and water controllers to Ankleshwar, Nandesari, Halol, Ahmedabad, Surat, and across India.
              </p>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <button
                onClick={() => onOpenQuoteModal()}
                className="bg-[#E86A2D] hover:bg-[#d0591f] text-white px-8 py-4 rounded-full text-xs font-bold transition-all shadow-lg shadow-[#E86A2D]/30 inline-flex items-center gap-2"
              >
                <span>Request Factory Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
