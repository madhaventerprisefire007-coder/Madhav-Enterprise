import React, { useState } from 'react';
import { ProductCategory } from '../types';
import { Search, Home, ArrowRight, ShieldCheck, Cpu, CircleDot, Zap, Gauge } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface NotFoundPageProps {
  onGoHome: () => void;
  onSelectCategory?: (category: ProductCategory) => void;
  onSearchProduct?: (query: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onGoHome,
  onSelectCategory,
  onSearchProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() && onSearchProduct) {
      onSearchProduct(searchTerm);
    } else {
      onGoHome();
    }
  };

  const topCategories: { category: ProductCategory; label: string; icon: React.ElementType; desc: string }[] = [
    { category: 'Water Level Controller', label: 'Water Level Controller', icon: Cpu, desc: 'Automatic overhead tank & sump logic panels' },
    { category: 'Butterfly Valve', label: 'Butterfly Valve', icon: CircleDot, desc: 'Cast Iron Wafer & SS Butterfly valves' },
    { category: 'Motor Pump', label: 'Motor Pump', icon: Zap, desc: 'Centrifugal monoblock & open-well induction pumps' },
    { category: 'Pressure Pump', label: 'Pressure Pump', icon: Gauge, desc: 'Hydro-pneumatic pressure booster pumps' },
  ];

  return (
    <div className="min-h-[80vh] bg-neutral-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <SEOHead
        pageName="404"
        title="404 - Page Not Found"
        description="The requested page could not be located on Madhav Enterprise Vadodara website. Search our industrial product catalog."
        noIndex={true}
      />

      <div className="max-w-3xl mx-auto w-full space-y-8 text-center">
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: onGoHome },
            { label: '404 Page Not Found', active: true },
          ]}
        />

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-600 rounded-full border border-red-200 text-xs font-extrabold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>404 - Page Not Found</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
            Looking for Industrial Equipment?
          </h1>

          <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto leading-relaxed">
            The page or URL you requested does not exist or may have been moved. Search our complete product range below.
          </p>
        </div>

        {/* Product Search Form */}
        <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto relative">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 absolute left-4 text-neutral-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Water Level Controllers, Valves, Pumps..."
              className="w-full bg-white border border-neutral-300 rounded-full pl-11 pr-28 py-3.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#E86A2D] focus:ring-2 focus:ring-[#E86A2D]/20 shadow-sm transition-all"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#E86A2D] hover:bg-[#d0591f] text-white px-5 rounded-full text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
            >
              <span>Search</span>
            </button>
          </div>
        </form>

        {/* Top Product Categories */}
        <div className="space-y-4 pt-4">
          <h2 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            Explore Popular Product Categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {topCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <button
                  key={idx}
                  onClick={() => onSelectCategory?.(cat.category)}
                  className="p-4 bg-white rounded-2xl border border-neutral-200 hover:border-[#E86A2D] hover:shadow-md transition-all group flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E86A2D]/10 text-[#E86A2D] flex items-center justify-center shrink-0 group-hover:bg-[#E86A2D] group-hover:text-white transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-neutral-900 group-hover:text-[#E86A2D] transition-colors flex items-center gap-1">
                      <span>{cat.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                      {cat.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6">
          <button
            onClick={onGoHome}
            className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3.5 rounded-full text-xs font-bold transition-all shadow-lg shadow-neutral-900/10 hover:scale-[1.02]"
          >
            <Home className="w-4 h-4 text-[#E86A2D]" />
            <span>Return to Madhav Enterprise Homepage</span>
          </button>
        </div>
      </div>
    </div>
  );
};
