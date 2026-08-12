import React, { useState } from 'react';
import { Maximize2, CheckCircle2, ShieldCheck, ZoomIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductGalleryProps {
  mainImage: string;
  galleryImages?: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  mainImage,
  galleryImages = [],
  productName,
}) => {
  // Combine main image and additional gallery images without duplicates
  const images = Array.from(new Set([mainImage, ...(galleryImages || [])]));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentImage = images[selectedImageIndex] || mainImage;

  return (
    <div className="space-y-4">
      {/* Main Image Container */}
      <div className="relative rounded-3xl overflow-hidden border border-neutral-200 bg-white shadow-xs group">
        
        {/* Main Display Image */}
        <div
          className="relative h-80 sm:h-96 md:h-[420px] overflow-hidden cursor-zoom-in"
          onClick={() => setIsLightboxOpen(true)}
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
        >
          <img
            src={currentImage}
            alt={`${productName} view ${selectedImageIndex + 1}`}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-contain p-2 sm:p-4 transition-transform duration-500 ${
              isZoomed ? 'scale-125 origin-center' : 'scale-100'
            }`}
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80";
            }}
          />

          {/* Hover Overlay Hint */}
          <div className="absolute inset-0 bg-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="bg-white/95 text-neutral-900 text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border border-neutral-200">
              <ZoomIn className="w-4 h-4 text-[#E86A2D]" />
              Click to Expand Full Resolution
            </span>
          </div>

          {/* Top Floating Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="bg-white/90 backdrop-blur-md text-neutral-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-neutral-200 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E86A2D]" />
              Quality Tested
            </span>
          </div>

          {/* Bottom Right Expand Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(true);
            }}
            className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-neutral-800 p-2.5 rounded-2xl border border-neutral-200 shadow-md backdrop-blur-md transition-colors"
            title="Full Screen Lightbox"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Thumbnail Selection Bar */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImageIndex(idx)}
              className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                selectedImageIndex === idx
                  ? 'border-[#E86A2D] ring-2 ring-[#E86A2D]/30 scale-105'
                  : 'border-neutral-200 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain p-1 bg-slate-50"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 p-3 rounded-full transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="max-w-5xl max-h-[85vh] relative rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage}
                alt={productName}
                className="max-w-full max-h-[85vh] object-contain mx-auto"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-1.5 rounded-full text-xs font-bold backdrop-blur-md">
                {productName} — Image {selectedImageIndex + 1} of {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
