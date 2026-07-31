import React from 'react';
import { Building, FlaskConical, Droplets, Shirt, Sprout, Utensils } from 'lucide-react';

interface ProductIndustriesProps {
  industries?: string[];
}

export const ProductIndustries: React.FC<ProductIndustriesProps> = ({ industries = [] }) => {
  const defaultIndustries = [
    'Chemical & Pharmaceutical',
    'Textile & Dyeing Mills',
    'Water & Effluent Treatment (ETP/STP)',
    'Commercial Real Estate & Towers',
    'Agriculture & Farm Irrigation'
  ];

  const displayIndustries = industries.length > 0 ? industries : defaultIndustries;

  return (
    <div className="bg-neutral-50 p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#E86A2D] text-white rounded-xl flex items-center justify-center font-bold text-xs">
          IND
        </div>
        <h3 className="text-lg font-display font-bold text-neutral-900">
          Industries Relying On This Equipment
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-1">
        {displayIndustries.map((ind, idx) => (
          <div
            key={idx}
            className="bg-white p-3.5 rounded-2xl border border-neutral-200 text-center space-y-1 shadow-2xs hover:border-[#E86A2D] transition-colors"
          >
            <span className="text-xs font-bold text-neutral-800 block truncate">
              {ind}
            </span>
            <span className="text-[10px] text-neutral-400 font-medium block">
              GIDC Standard
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
