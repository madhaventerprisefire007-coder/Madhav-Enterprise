import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';

interface ProductFeaturesProps {
  features: string[];
}

export const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#E86A2D]/10 text-[#E86A2D] rounded-xl flex items-center justify-center">
          <Zap className="w-4 h-4" />
        </div>
        <h3 className="text-lg font-display font-bold text-neutral-900">
          Key Features & Operational Engineering
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-3.5 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-neutral-200 transition-all"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-xs font-semibold text-neutral-800 leading-relaxed">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
