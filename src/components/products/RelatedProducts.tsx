import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';
import { Sparkles, ArrowRight } from 'lucide-react';

interface RelatedProductsProps {
  currentProduct: Product;
  allProducts: Product[];
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  currentProduct,
  allProducts,
  onSelectProduct,
  onOpenQuoteModal,
}) => {
  // Find products in the same category excluding the current product
  let related = allProducts.filter(
    (p) => p.category === currentProduct.category && p.id !== currentProduct.id
  );

  // If not enough in same category, fill with other featured products
  if (related.length < 3) {
    const extra = allProducts.filter(
      (p) => p.id !== currentProduct.id && !related.some((r) => r.id === p.id)
    );
    related = [...related, ...extra].slice(0, 3);
  } else {
    related = related.slice(0, 3);
  }

  if (related.length === 0) return null;

  return (
    <div className="space-y-6 pt-6 border-t border-neutral-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E86A2D] uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Category Matching</span>
          </div>
          <h3 className="text-2xl font-display font-extrabold text-neutral-900">
            Related Industrial Equipment
          </h3>
        </div>
        <p className="text-xs text-neutral-500 max-w-xs">
          Explore complementary valves, controllers, and pumps in the {currentProduct.category} range.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelectProduct={onSelectProduct}
            onOpenQuoteModal={onOpenQuoteModal}
          />
        ))}
      </div>
    </div>
  );
};
