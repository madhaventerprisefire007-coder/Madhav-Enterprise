import React from 'react';
import { Award, ShieldCheck, TrendingUp, Clock, Check } from 'lucide-react';

interface ProductBenefitsProps {
  benefits?: string[];
}

export const ProductBenefits: React.FC<ProductBenefitsProps> = ({ benefits = [] }) => {
  const defaultBenefits = [
    'Substantially lowers operational downtime and maintenance expenses',
    'Increases hydraulic efficiency and prevents energy loss',
    'Backed by Madhav Enterprise 12 to 24 Months Warranty',
    'Direct factory replacement parts readily available in Vadodara'
  ];

  const displayBenefits = benefits.length > 0 ? benefits : defaultBenefits;

  return (
    <div className="bg-gradient-to-br from-[#111111] via-neutral-900 to-black text-white p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden space-y-5">
      <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-[#E86A2D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center gap-2.5 relative z-10">
        <div className="w-9 h-9 bg-[#E86A2D] text-white rounded-xl flex items-center justify-center">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-display font-extrabold text-white">
            Key Industrial Benefits
          </h3>
          <p className="text-xs text-neutral-400">
            Why engineers prefer this product for continuous industrial use
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
        {displayBenefits.map((benefit, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
          >
            <div className="w-6 h-6 bg-[#E86A2D]/20 text-[#E86A2D] rounded-full flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs text-neutral-200 font-medium leading-relaxed">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
