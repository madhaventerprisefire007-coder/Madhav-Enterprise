import React from 'react';
import { Factory, Settings2, CheckCircle } from 'lucide-react';

interface ProductApplicationsProps {
  applications: string[];
}

export const ProductApplications: React.FC<ProductApplicationsProps> = ({ applications = [] }) => {
  if (!applications || applications.length === 0) return null;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#111111] text-white rounded-xl flex items-center justify-center">
          <Factory className="w-4 h-4" />
        </div>
        <h3 className="text-lg font-display font-bold text-neutral-900">
          Target Applications & Use Cases
        </h3>
      </div>

      <div className="flex flex-wrap gap-2.5 pt-1">
        {applications.map((app, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 bg-neutral-100 hover:bg-[#E86A2D]/10 hover:text-[#E86A2D] text-neutral-800 text-xs font-bold px-4 py-2.5 rounded-2xl border border-neutral-200/80 transition-colors"
          >
            <CheckCircle className="w-3.5 h-3.5 text-[#E86A2D]" />
            <span>{app}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
