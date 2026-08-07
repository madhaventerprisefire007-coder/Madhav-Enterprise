import React, { useState } from 'react';
import { Product, PageType, ProductCategory } from '../../types';
import { Breadcrumb } from './Breadcrumb';
import { ProductGallery } from './ProductGallery';
import { ProductSpecificationTable } from './ProductSpecificationTable';
import { ProductFeatures } from './ProductFeatures';
import { ProductBenefits } from './ProductBenefits';
import { ProductApplications } from './ProductApplications';
import { ProductIndustries } from './ProductIndustries';
import { RelatedProducts } from './RelatedProducts';
import { EnquiryForm } from './EnquiryForm';
import { COMPANY_INFO, COMPANY_ADVANTAGES } from '../../data/companyData';
import { 
  Download, 
  MessageSquare, 
  Phone, 
  FileText, 
  ArrowLeft, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Factory, 
  Clock, 
  MapPin, 
  Share2, 
  Sparkles,
  Video,
  Play,
  Cpu,
  Maximize2,
  X
} from 'lucide-react';
import { motion } from 'motion/react';

interface ProductDetailsViewProps {
  product: Product;
  allProducts: Product[];
  onPageChange: (page: PageType) => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
  onCategoryFilterClick?: (category: ProductCategory) => void;
}

export const ProductDetailsView: React.FC<ProductDetailsViewProps> = ({
  product,
  allProducts,
  onPageChange,
  onSelectProduct,
  onOpenQuoteModal,
  onCategoryFilterClick,
}) => {
  const [catalogueDownloaded, setCatalogueDownloaded] = useState(false);
  const [isDiagramModalOpen, setIsDiagramModalOpen] = useState(false);

  const handleDownloadCatalogue = () => {
    setCatalogueDownloaded(true);
    setTimeout(() => {
      alert(`Technical Data Sheet / Catalogue for "${product.name}" download initiated. (Placeholder PDF)`);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 pb-20">
      
      {/* Large Hero Banner */}
      <section className="bg-[#111111] text-white pt-8 pb-14 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-dark opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          
          {/* Breadcrumb inside Banner */}
          <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-1.5 backdrop-blur-md inline-block">
            <Breadcrumb
              onPageChange={onPageChange}
              category={product.category}
              productName={product.name}
              onCategoryClick={onCategoryFilterClick}
            />
          </div>

          {/* Back button & Action */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => onPageChange('products')}
              className="inline-flex items-center gap-2 text-xs font-bold text-neutral-300 hover:text-[#E86A2D] bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Products Catalog</span>
            </button>

            <span className="text-xs font-mono text-neutral-400">
              Model No: <strong className="text-white">{product.modelNumber}</strong>
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-2 max-w-4xl pt-2">
            <div className="inline-flex items-center gap-2 bg-[#E86A2D] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              {product.category}
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              {product.name}
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 font-medium leading-relaxed max-w-3xl">
              {product.subtitle}
            </p>
          </div>

          {/* Quick CTA row in Banner */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            <button
              onClick={() => onOpenQuoteModal(product.name)}
              className="bg-[#E86A2D] hover:bg-[#d0591f] text-white px-6 py-3 rounded-full text-xs font-bold transition-all shadow-lg shadow-[#E86A2D]/30 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Request Direct Factory Quote</span>
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Madhav%20Enterprise%20team,%20I%20am%20interested%20in%20your%20product%20${encodeURIComponent(product.name)}%20(Model:%20${product.modelNumber}).%20Please%20send%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-full text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-emerald-900/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phonePrimary}`}
              className="bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full text-xs font-bold transition-all border border-white/20 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E86A2D]" />
              <span>Call Sales: {COMPANY_INFO.phonePrimary}</span>
            </a>

            <button
              onClick={handleDownloadCatalogue}
              className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 px-5 py-3 rounded-full text-xs font-bold transition-all border border-neutral-700 flex items-center gap-2 ml-auto"
            >
              <Download className="w-4 h-4 text-neutral-400" />
              <span>{catalogueDownloaded ? 'Catalogue Downloaded' : 'Download Spec Sheet (PDF)'}</span>
            </button>
          </div>

        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Gallery & Core Details */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Product Gallery with Zoom & Thumbnails */}
            <div className="bg-white p-4 sm:p-6 rounded-3xl border border-neutral-200 shadow-sm">
              <ProductGallery
                mainImage={product.image}
                galleryImages={product.galleryImages}
                productName={product.name}
              />
            </div>

            {/* Product Description */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-4">
              <h3 className="text-xl font-display font-extrabold text-neutral-900 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#E86A2D] rounded-full" />
                Product Overview & Description
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {product.description}
              </p>
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 font-medium flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#E86A2D] shrink-0 mt-0.5" />
                <span>
                  <strong>Madhav Enterprise Quality Guarantee:</strong> Manufactured & tested under strict quality norms in Vadodara, Gujarat. Guaranteed performance with complete test certificates.
                </span>
              </div>
            </div>

            {/* Product Demonstration Video Section */}
            {product.videoEmbedUrl && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-xl font-display font-extrabold text-neutral-900 flex items-center gap-2">
                    <span className="w-2 h-6 bg-[#E86A2D] rounded-full" />
                    <Video className="w-5 h-5 text-[#E86A2D]" />
                    <span>Working & Demonstration Video</span>
                  </h3>
                  <span className="bg-[#E86A2D]/10 text-[#E86A2D] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Play className="w-3 h-3 fill-current" />
                    <span>Live Product Video</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600">
                  Watch the live working video demonstration of the Madhav Enterprise Automatic Water Level Controller.
                </p>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 shadow-lg">
                  <iframe
                    src={product.videoEmbedUrl}
                    title={`${product.name} Demonstration Video`}
                    className="w-full h-full border-0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {/* Open Door View & Wiring Diagram Section */}
            {product.wiringDiagramUrl && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-xl font-display font-extrabold text-neutral-900 flex items-center gap-2">
                    <span className="w-2 h-6 bg-[#E86A2D] rounded-full" />
                    <Cpu className="w-5 h-5 text-[#E86A2D]" />
                    <span>Open Door View, Wiring Diagram & Terminal Connections</span>
                  </h3>
                  <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Installation Schema</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600">
                  Internal component architecture, open door view, and step-by-step terminal block connections guide for electrical installation.
                </p>

                <div className="relative group rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-900/5 p-3 sm:p-4">
                  <img
                    src={product.wiringDiagramUrl}
                    alt={`${product.name} Open Door View & Wiring Diagram`}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[520px] object-contain mx-auto rounded-xl shadow-sm bg-white cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
                    onClick={() => setIsDiagramModalOpen(true)}
                  />
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-neutral-500 font-medium">
                      Click diagram to open high-resolution view
                    </span>
                    <button
                      onClick={() => setIsDiagramModalOpen(true)}
                      className="bg-[#111111] hover:bg-[#E86A2D] text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-md"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View Full Resolution</span>
                    </button>
                  </div>
                </div>

                {/* Lightbox / Fullscreen Modal for Wiring Diagram */}
                {isDiagramModalOpen && (
                  <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md p-4 sm:p-8 flex flex-col items-center justify-center">
                    <div className="relative max-w-5xl w-full bg-white rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
                      <div className="flex items-center justify-between border-b pb-3">
                        <h4 className="text-base sm:text-lg font-bold text-neutral-900 flex items-center gap-2">
                          <Cpu className="w-5 h-5 text-[#E86A2D]" />
                          <span>{product.name} - Open Door View & Wiring Diagram</span>
                        </h4>
                        <button
                          onClick={() => setIsDiagramModalOpen(false)}
                          className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex justify-center p-2 bg-neutral-100 rounded-2xl border border-neutral-200 overflow-auto">
                        <img
                          src={product.wiringDiagramUrl}
                          alt={`${product.name} Full Diagram`}
                          referrerPolicy="no-referrer"
                          className="max-h-[75vh] w-auto object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Technical Specification Table */}
            <ProductSpecificationTable
              specs={product.specs}
              modelNumber={product.modelNumber}
              material={product.material}
              category={product.category}
            />

            {/* Key Features */}
            <ProductFeatures features={product.keyFeatures} />

            {/* Industrial Benefits */}
            <ProductBenefits benefits={product.benefits} />

            {/* Target Applications */}
            <ProductApplications applications={product.applications} />

            {/* Industries Using This Product */}
            <ProductIndustries industries={product.industries} />

            {/* Why Choose Madhav Enterprise */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-[#E86A2D] text-white rounded-xl flex items-center justify-center font-bold text-xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-neutral-900">
                    Why Choose Madhav Enterprise Vadodara
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Trusted industrial supplier with over 16+ years of technical experience
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COMPANY_ADVANTAGES.map((adv, idx) => (
                  <div key={idx} className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-1.5">
                    <h4 className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{adv.title}</span>
                    </h4>
                    <p className="text-[11px] text-neutral-600 leading-relaxed pl-5">
                      {adv.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Sidebar with Quote Form & Contact Options */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Embedded Quote / RFQ Form */}
            <div className="sticky top-24 space-y-6">
              <EnquiryForm productName={product.name} />

              {/* Direct Call & WhatsApp Contact Card */}
              <div className="bg-[#111111] text-white p-6 rounded-3xl shadow-lg space-y-4 border border-neutral-800">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Factory className="w-4 h-4 text-[#E86A2D]" />
                    <span>Vadodara Sales Engineering Desk</span>
                  </h4>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    Open Now
                  </span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  Need immediate technical sizing, pipe fitting assistance, or bulk GIDC industrial quotes? Contact our engineers directly.
                </p>

                <div className="space-y-2.5 pt-1">
                  <a
                    href={`tel:${COMPANY_INFO.phonePrimary}`}
                    className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-colors text-xs font-bold border border-white/10"
                  >
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#E86A2D]" />
                      <span>{COMPANY_INFO.phonePrimary}</span>
                    </div>
                    <span className="text-[10px] text-neutral-400">Direct Call</span>
                  </a>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Madhav%20Enterprise,%20I%20need%20details%20for%20${encodeURIComponent(product.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl transition-colors text-xs font-bold"
                  >
                    <div className="flex items-center gap-2.5">
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </div>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">Instant</span>
                  </a>
                </div>

                <div className="text-[11px] text-neutral-400 pt-2 border-t border-neutral-800 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#E86A2D] shrink-0" />
                  <span className="truncate">C-10 Gaurav Park, Diwalipura, Vasna Road, Vadodara</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <RelatedProducts
            currentProduct={product}
            allProducts={allProducts}
            onSelectProduct={onSelectProduct}
            onOpenQuoteModal={onOpenQuoteModal}
          />
        </div>

      </section>

    </div>
  );
};
