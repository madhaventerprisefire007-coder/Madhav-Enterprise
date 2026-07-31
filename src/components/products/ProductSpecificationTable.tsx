import React from 'react';
import { TechnicalSpec } from '../../types';
import { FileText, CheckCircle, ShieldCheck } from 'lucide-react';

interface ProductSpecificationTableProps {
  specs: TechnicalSpec[];
  modelNumber: string;
  material?: string;
  category: string;
}

export const ProductSpecificationTable: React.FC<ProductSpecificationTableProps> = ({
  specs,
  modelNumber,
  material,
  category,
}) => {
  return (
    <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-[#111111] text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-[#E86A2D] text-white rounded-xl flex items-center justify-center font-bold text-xs">
            SPEC
          </div>
          <div>
            <h3 className="text-base font-display font-bold text-white">
              Technical Specifications Sheet
            </h3>
            <p className="text-xs text-neutral-400">
              Tested according to ISO & Indian Standards (IS)
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-xs font-mono text-neutral-200">
          <ShieldCheck className="w-3.5 h-3.5 text-[#E86A2D]" />
          <span>Model: {modelNumber}</span>
        </div>
      </div>

      {/* Specification Table */}
      <div className="divide-y divide-neutral-100">
        <div className="grid grid-cols-12 p-4 bg-neutral-50 text-xs font-bold text-neutral-500 uppercase tracking-wider">
          <div className="col-span-5 sm:col-span-4">Parameter</div>
          <div className="col-span-7 sm:col-span-8">Technical Specification Value</div>
        </div>

        {/* Material Row */}
        {material && (
          <div className="grid grid-cols-12 p-4 text-xs hover:bg-amber-50/50 transition-colors">
            <div className="col-span-5 sm:col-span-4 font-bold text-neutral-900 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#E86A2D]" />
              <span>Construction Material</span>
            </div>
            <div className="col-span-7 sm:col-span-8 font-medium text-neutral-800">
              {material}
            </div>
          </div>
        )}

        {/* Dynamic Specs Rows */}
        {specs.map((spec, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-12 p-4 text-xs transition-colors ${
              idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50/60'
            } hover:bg-neutral-100/80`}
          >
            <div className="col-span-5 sm:col-span-4 font-bold text-neutral-900 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E86A2D]" />
              <span>{spec.label}</span>
            </div>
            <div className="col-span-7 sm:col-span-8 font-medium text-neutral-700 leading-relaxed">
              {spec.value}
            </div>
          </div>
        ))}

        {/* Category Standard Row */}
        <div className="grid grid-cols-12 p-4 text-xs bg-neutral-50/40">
          <div className="col-span-5 sm:col-span-4 font-bold text-neutral-900 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-neutral-400" />
            <span>Product Family</span>
          </div>
          <div className="col-span-7 sm:col-span-8 font-medium text-neutral-800">
            {category} (Madhav Enterprise Verified Grade)
          </div>
        </div>
      </div>
    </div>
  );
};
