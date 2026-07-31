import React from 'react';
import { ProductCategory, Product } from '../../types';
import { PRODUCT_DIVISIONS } from '../../data/companyData';
import { Filter } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  products: Product[];
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  products,
}) => {
  const getCategoryCount = (cat: ProductCategory) => {
    if (cat === 'All') return products.length;
    return products.filter((p) => p.category === cat).length;
  };

  const getLabel = (cat: ProductCategory) => {
    if (cat === 'All') return 'All Products';
    const div = PRODUCT_DIVISIONS.find((d) => d.category === cat);
    return div ? div.displayName : cat;
  };

  const categoriesList: ProductCategory[] = [
    'All',
    'Water Level Controller',
    'Industrial Valve',
    'Motor Pump',
    'Pipes & Fittings',
    'Pressure Pump',
    'Submersible Pump',
  ];

  return (
    <div className="bg-white p-3 sm:p-4 rounded-2xl border border-neutral-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
        <div className="flex items-center gap-2 text-neutral-800 text-xs font-bold uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5 text-[#E86A2D]" />
          <span>Product Pages & Divisions</span>
        </div>
        <span className="text-[11px] text-neutral-400 font-medium">
          Select Page
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {categoriesList.map((cat) => {
          const isSelected = selectedCategory === cat;
          const count = getCategoryCount(cat);

          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                isSelected
                  ? 'bg-[#111111] text-white shadow-md shadow-neutral-900/20 scale-[1.02]'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-neutral-900'
              }`}
            >
              <span>{getLabel(cat)}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                  isSelected
                    ? 'bg-[#E86A2D] text-white'
                    : 'bg-neutral-200 text-neutral-600'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
