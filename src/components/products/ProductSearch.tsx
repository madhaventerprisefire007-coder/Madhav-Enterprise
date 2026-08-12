import React from 'react';
import { Search, X, Sparkles } from 'lucide-react';

interface ProductSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  resultCount: number;
  totalCount: number;
}

export const ProductSearch: React.FC<ProductSearchProps> = ({
  searchQuery,
  setSearchQuery,
  resultCount,
  totalCount,
}) => {
  return (
    <div className="bg-white p-3.5 rounded-2xl border border-neutral-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="relative w-full sm:w-80 md:w-96">
        <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search by product name, model (e.g. WLC, SS 316, V3)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-10 pr-9 py-2.5 text-xs text-neutral-900 font-medium placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#E86A2D] focus:border-transparent transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-1"
            title="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <div className="flex items-center gap-2 text-xs text-neutral-500 w-full sm:w-auto justify-between sm:justify-end">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#E86A2D]" />
          <span>
            Showing <strong className="text-neutral-900">{resultCount}</strong> of{' '}
            {totalCount} products
          </span>
        </div>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-[#E86A2D] font-bold text-xs hover:underline ml-2"
          >
            Reset Search
          </button>
        )}
      </div>
    </div>
  );
};
