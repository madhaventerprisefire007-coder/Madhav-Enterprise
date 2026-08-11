import React from 'react';
import { PageType, ProductCategory } from '../types';
import { COMPANY_INFO, PRODUCT_DIVISIONS } from '../data/companyData';
import { Logo } from './Logo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight, 
  MessageSquare, 
  Send,
  ExternalLink,
  Award
} from 'lucide-react';

interface FooterProps {
  onPageChange: (page: PageType) => void;
  onSelectCategory?: (category: ProductCategory) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange, onSelectCategory, onOpenQuoteModal }) => {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 font-sans border-t border-white/10 relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 industrial-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-3 rounded-2xl inline-block shadow-md border border-neutral-200">
              <Logo variant="dark" showTagline={true} />
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mt-3">
              Madhav Enterprise is a premier manufacturer and supplier of Automatic Water Level Controllers, Butterfly Valves, Motor Pumps, Submersible Pumps, and High Pressure Piping Systems based in Diwalipura, Vasna Road, Vadodara, Gujarat.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {COMPANY_INFO.certifications.map((cert, idx) => (
                <span 
                  key={idx}
                  className="bg-white/10 text-neutral-300 border border-white/10 text-[10px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1"
                >
                  <Award className="w-3 h-3 text-[#E86A2D]" />
                  <span>{cert}</span>
                </span>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Madhav%20Enterprise%20team,%20I%20have%20an%20industrial%20inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Sales</span>
              </a>

              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center gap-1.5 bg-[#E86A2D] hover:bg-[#d0591f] text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors"
              >
                <span>Request Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider text-[#E86A2D]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button 
                  onClick={() => onPageChange('home')}
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Home Page</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('about')}
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>About Our Factory</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('products')}
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Products Catalog</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('contact')}
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Contact Vadodara Hub</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Range */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider text-[#E86A2D]">
              Our Product Pages
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              {PRODUCT_DIVISIONS.map((div) => (
                <li key={div.id}>
                  <button 
                    onClick={() => {
                      if (onSelectCategory) {
                        onSelectCategory(div.category);
                      } else {
                        onPageChange('products');
                      }
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white text-neutral-300 hover:text-[#E86A2D] transition-colors text-left font-medium flex items-start gap-2 group cursor-pointer"
                  >
                    <span className="text-[#E86A2D] font-bold mt-0.5 group-hover:scale-125 transition-transform">•</span>
                    <span className="group-hover:translate-x-1 transition-transform">{div.displayName}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Vadodara Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider text-[#E86A2D]">
              Vadodara Office & Factory
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E86A2D] shrink-0 mt-0.5" />
                <span className="leading-snug">{COMPANY_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E86A2D] shrink-0" />
                <div className="flex flex-wrap gap-[#E86A2D] gap-x-2">
                  <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="hover:text-[#E86A2D] font-bold">
                    {COMPANY_INFO.phonePrimary}
                  </a>
                  <span>/</span>
                  <a href={`tel:${COMPANY_INFO.phoneSecondary}`} className="hover:text-[#E86A2D] font-bold">
                    {COMPANY_INFO.phoneSecondary}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E86A2D] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.emailSales}`} className="hover:text-[#E86A2D]">
                  {COMPANY_INFO.emailSales}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-400">
                <Clock className="w-4 h-4 text-[#E86A2D] shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="pt-2">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-xl overflow-hidden border border-white/15 h-20 bg-neutral-800 hover:border-[#E86A2D] transition-colors"
              >
                <div className="absolute inset-0 bg-[radial-gradient(#E86A2D_1px,transparent_1px)] [background-size:8px_8px] opacity-20" />
                <div className="relative p-3 flex items-center justify-between h-full">
                  <div>
                    <p className="text-[11px] font-bold text-white group-hover:text-[#E86A2D] transition-colors flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#E86A2D]" />
                      <span>Madhav Enterprise Location</span>
                    </p>
                    <p className="text-[10px] text-neutral-400">Diwalipura, Vasna Road, Vadodara</p>
                  </div>
                  <span className="bg-white/10 group-hover:bg-[#E86A2D] text-white p-2 rounded-lg transition-colors shrink-0">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & SEO Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-neutral-400 gap-4">
          <p>© {new Date().getFullYear()} Madhav Enterprise. All Rights Reserved. Vadodara, Gujarat, India.</p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-1">
            <span className="text-neutral-300">MSME Registered</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-300">Made in India</span>
            <span className="text-neutral-500">•</span>
            <p className="text-neutral-300">
              Designed & Developed by{' '}
              <a
                href="https://www.vibratseo.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E86A2D] hover:underline font-bold transition-colors"
              >
                Vibrat SEO
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
