import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageType, ProductCategory } from '../../types';

interface BreadcrumbProps {
  onPageChange: (page: PageType) => void;
  category?: ProductCategory;
  productName?: string;
  onCategoryClick?: (category: ProductCategory) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  onPageChange,
  category,
  productName,
  onCategoryClick,
}) => {
  return (
    <nav className="flex items-center flex-wrap text-xs font-medium text-neutral-500 py-3 px-1 gap-1.5">
      <button
        onClick={() => onPageChange('home')}
        className="flex items-center gap-1 hover:text-[#E86A2D] transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </button>

      <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />

      <button
        onClick={() => onPageChange('products')}
        className={`hover:text-[#E86A2D] transition-colors ${!category && !productName ? 'text-[#E86A2D] font-bold' : ''}`}
      >
        Products
      </button>

      {category && category !== 'All' && (
        <>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <button
            onClick={() => {
              if (onCategoryClick) onCategoryClick(category);
              onPageChange('products');
            }}
            className={`hover:text-[#E86A2D] transition-colors ${!productName ? 'text-[#E86A2D] font-bold' : ''}`}
          >
            {category}
          </button>
        </>
      )}

      {productName && (
        <>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span className="text-neutral-900 font-bold truncate max-w-[200px] sm:max-w-xs">
            {productName}
          </span>
        </>
      )}
    </nav>
  );
};
