import React, { useState } from 'react';
import { Product } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { 
  X, 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Tag, 
  Sliders, 
  Wrench, 
  MessageSquare,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenQuoteModal: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenQuoteModal
}) => {
  const [downloading, setDownloading] = useState(false);

  if (!product) return null;

  const handleDownloadDatasheet = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert(`Technical Spec Sheet for ${product.name} (${product.modelNumber}) generated. Direct PDF sent to print buffer.`);
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Image Banner */}
          <div className="relative h-64 md:h-80 w-full overflow-hidden bg-neutral-900">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-4 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-[#E86A2D] text-white text-[10px] uppercase font-extrabold px-3 py-1 rounded-full tracking-wider">
                  {product.category}
                </span>
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1 rounded-full">
                  Model: {product.modelNumber}
                </span>
                {product.rating && (
                  <span className="bg-amber-500 text-neutral-950 font-bold text-[10px] px-2.5 py-1 rounded-full">
                    ★ {product.rating}
                  </span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white">
                {product.name}
              </h2>
              <p className="text-xs md:text-sm text-neutral-300 mt-1 max-w-xl">
                {product.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto space-y-6">
            {/* Overview */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Product Description & Engineering Overview
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E86A2D]" />
                <span>Key Technical Advantages</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {product.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-xs font-medium text-neutral-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-[#E86A2D]" />
                <span>Technical Specifications</span>
              </h3>
              <div className="border border-neutral-200 rounded-2xl overflow-hidden text-xs">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {product.specs.map((spec, idx) => (
                      <tr 
                        key={idx} 
                        className={idx % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}
                      >
                        <td className="py-2.5 px-4 font-bold text-neutral-700 border-r border-neutral-200 w-1/3">
                          {spec.label}
                        </td>
                        <td className="py-2.5 px-4 text-neutral-900 font-medium">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                    {product.material && (
                      <tr className="bg-amber-50/50">
                        <td className="py-2.5 px-4 font-bold text-neutral-800 border-r border-neutral-200">
                          Body Material / Grade
                        </td>
                        <td className="py-2.5 px-4 text-neutral-900 font-bold">
                          {product.material}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Industrial Applications */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-[#E86A2D]" />
                <span>Target Industry Applications</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, idx) => (
                  <span 
                    key={idx}
                    className="bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    • {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="bg-neutral-50 border-t border-neutral-200 p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={handleDownloadDatasheet}
              disabled={downloading}
              className="inline-flex items-center gap-2 border border-neutral-300 hover:border-neutral-400 bg-white text-neutral-800 px-4 py-2.5 rounded-full text-xs font-bold transition-all w-full sm:w-auto justify-center"
            >
              <Download className={`w-4 h-4 ${downloading ? 'animate-bounce text-[#E86A2D]' : ''}`} />
              <span>{downloading ? 'Generating PDF...' : 'Download Technical Spec Sheet'}</span>
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Madhav%20Enterprise,%20I%20would%20like%20details%20and%20pricing%20for%20${encodeURIComponent(product.name)}%20(Model:%20${product.modelNumber}).`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-full text-xs font-bold transition-colors w-1/2 sm:w-auto"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal(product.name);
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#E86A2D] hover:bg-[#d0591f] text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-md shadow-[#E86A2D]/20 w-1/2 sm:w-auto"
              >
                <FileText className="w-4 h-4" />
                <span>Get Instant Quote</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
