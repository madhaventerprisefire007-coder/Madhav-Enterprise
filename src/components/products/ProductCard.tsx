import React from 'react';
import { Product } from '../../types';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, FileText, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onOpenQuoteModal,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
    >
      <div>
        {/* Card Header & Image */}
        <div className="relative h-52 sm:h-56 bg-neutral-900 overflow-hidden cursor-pointer" onClick={() => onSelectProduct(product)}>
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80";
            }}
          />
          
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
            <span className="bg-[#111111]/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
              {product.category}
            </span>
            {product.rating && (
              <span className="bg-amber-500 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                <Star className="w-3 h-3 fill-current" />
                <span>{product.rating}</span>
              </span>
            )}
          </div>

          {/* Bottom Overlay Info inside Image */}
          <div className="absolute bottom-3 left-3 right-3 z-10 text-white space-y-0.5">
            <span className="text-[10px] font-mono text-neutral-300 uppercase tracking-widest block">
              Model: {product.modelNumber}
            </span>
            <h3 className="text-base font-display font-extrabold text-white leading-tight drop-shadow-sm group-hover:text-[#E86A2D] transition-colors line-clamp-1">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {/* Subtitle / Short Description */}
          <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Material & Key Feature Bullet Highlights */}
          <div className="space-y-2 pt-1 border-t border-neutral-100">
            {product.material && (
              <div className="flex items-center gap-1.5 text-[11px] text-neutral-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E86A2D] shrink-0" />
                <span className="truncate"><strong>Material:</strong> {product.material}</span>
              </div>
            )}

            <div className="space-y-1">
              {product.keyFeatures.slice(0, 2).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-[11px] text-neutral-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Compact Preview */}
          {product.specs && product.specs.length > 0 && (
            <div className="bg-neutral-50 rounded-xl p-2.5 border border-neutral-200/80 grid grid-cols-2 gap-2 text-[10px]">
              <div>
                <span className="text-neutral-400 block font-medium">{product.specs[0].label}</span>
                <span className="text-neutral-800 font-bold truncate block">{product.specs[0].value}</span>
              </div>
              {product.specs[1] && (
                <div>
                  <span className="text-neutral-400 block font-medium">{product.specs[1].label}</span>
                  <span className="text-neutral-800 font-bold truncate block">{product.specs[1].value}</span>
                </div>
              )}
            </div>
          )}

        </div>
      </div>

      {/* Card Action Buttons Footer */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-2.5">
        <button
          onClick={() => onSelectProduct(product)}
          className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-bold py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1 group/btn"
        >
          <span>Read More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={() => onOpenQuoteModal(product.name)}
          className="w-full bg-[#E86A2D] hover:bg-[#d0591f] text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Get Quote</span>
        </button>
      </div>
    </motion.div>
  );
};
