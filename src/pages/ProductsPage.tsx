import React, { useState } from 'react';
import { ProductCategory, Product, PageType } from '../types';
import { PRODUCTS_DATA, PRODUCT_DIVISIONS } from '../data/companyData';
import { Breadcrumb } from '../components/products/Breadcrumb';
import { CategoryFilter } from '../components/products/CategoryFilter';
import { ProductSearch } from '../components/products/ProductSearch';
import { ProductCard } from '../components/products/ProductCard';
import { ProductDetailsView } from '../components/products/ProductDetailsView';
import { SEOHead } from '../components/seo/SEOHead';
import { generateSlug, BASE_URL } from '../lib/seo';
import { Package, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductsPageProps {
  onPageChange: (page: PageType) => void;
  onOpenQuoteModal: (productName?: string) => void;
  onSelectProduct: (product: Product) => void;
  selectedProduct?: Product | null;
  selectedCategory?: ProductCategory;
  onSelectCategory?: (category: ProductCategory) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onPageChange,
  onOpenQuoteModal,
  onSelectProduct,
  selectedProduct,
  selectedCategory: propCategory,
  onSelectCategory: propOnSelectCategory,
  searchQuery,
  setSearchQuery
}) => {
  const [internalCategory, setInternalCategory] = useState<ProductCategory>(propCategory || 'All');
  const [internalSelectedProduct, setInternalSelectedProduct] = useState<Product | null>(selectedProduct || null);

  const activeCategory = propCategory !== undefined ? propCategory : internalCategory;

  // Sync internal selected product if prop changes
  React.useEffect(() => {
    setInternalSelectedProduct(selectedProduct || null);
  }, [selectedProduct]);

  // Sync category if prop changes
  React.useEffect(() => {
    if (propCategory !== undefined) {
      setInternalCategory(propCategory);
    }
  }, [propCategory]);

  const handleSelectProductItem = (product: Product) => {
    setInternalSelectedProduct(product);
    onSelectProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryFilterSelect = (cat: ProductCategory) => {
    if (propOnSelectCategory) {
      propOnSelectCategory(cat);
    } else {
      setInternalCategory(cat);
    }
    setInternalSelectedProduct(null);
  };

  const currentDivision = PRODUCT_DIVISIONS.find((d) => d.category === activeCategory);

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate dynamic SEO parameters
  const isDetail = !!internalSelectedProduct;
  const currentTitle = isDetail
    ? (internalSelectedProduct.slug === 'fire-material-supplier-vadodara'
        ? `Fire Material Supplier in Vadodara | Madhav Enterprise and Automation`
        : (internalSelectedProduct.slug === 'fully-automatic-digital-motor-starter-with-level-controller-and-protection' || internalSelectedProduct.slug === 'reliable-water-pumping-system-vadodara')
        ? `Fully Automatic Digital Motor Starter with Level Controller and Protection in Vadodara | Madhav Enterprise and Automation`
        : `${internalSelectedProduct.name} - ${
            internalSelectedProduct.category === 'Butterfly Valve'
              ? 'Butterfly Valve Supplier'
              : internalSelectedProduct.category === 'Sewage Pump'
              ? 'Sewage Pump Supplier'
              : internalSelectedProduct.category === 'Fire Material'
              ? 'Fire Fighting Material Supplier'
              : internalSelectedProduct.category + ' Manufacturer & Supplier'
          } Vadodara`)
    : currentDivision
    ? (currentDivision.category === 'Butterfly Valve'
        ? `Butterfly Valve Supplier in Vadodara | Madhav Enterprise and Automation`
        : currentDivision.category === 'Sewage Pump'
        ? `Sewage Pump Supplier in Vadodara | Madhav Enterprise and Automation`
        : `${currentDivision.displayName} Manufacturer & Supplier in Vadodara | Madhav Enterprise and Automation`)
    : 'Industrial Water Level Controllers, Valves & Pumps Catalog Vadodara';

  const currentDesc = isDetail
    ? `${internalSelectedProduct.description.slice(0, 155)}... Buy ${internalSelectedProduct.name} directly from Madhav Enterprise and Automation Vadodara.`
    : currentDivision
    ? (currentDivision.category === 'Butterfly Valve' || currentDivision.category === 'Sewage Pump'
        ? `Explore premier ${currentDivision.displayName} supplied by Madhav Enterprise and Automation in Vadodara, Gujarat. Get instant industrial quotes & specs.`
        : `Explore premier ${currentDivision.displayName} manufactured and supplied by Madhav Enterprise and Automation in Vadodara, Gujarat. Get instant industrial quotes & specs.`)
    : 'Complete catalog of Automatic Water Level Controllers, Butterfly Valves, Sewage Pumps & Booster Systems in Vadodara.';

  const canonicalPath = isDetail
    ? (internalSelectedProduct.slug
        ? `${BASE_URL}/${internalSelectedProduct.slug}`
        : `${BASE_URL}/product/${generateSlug(internalSelectedProduct.name)}`)
    : activeCategory !== 'All'
    ? `${BASE_URL}/products/${generateSlug(activeCategory)}`
    : `${BASE_URL}/products`;

  // If a product is selected, render the complete Product Details View!
  if (internalSelectedProduct) {
    return (
      <div className="min-h-screen bg-neutral-50/50">
        <SEOHead
          pageName="product"
          title={currentTitle}
          description={currentDesc}
          canonicalUrl={canonicalPath}
          keywords={[
            internalSelectedProduct.name,
            internalSelectedProduct.category,
            internalSelectedProduct.modelNumber,
            ...(internalSelectedProduct.seoKeywords || []),
            'Water Level Controller Manufacturer in Vadodara',
            'Butterfly Valve Supplier in Vadodara',
            'Sewage Pump Supplier in Vadodara',
            'Pressure Pump Supplier',
            'Submersible Pump Supplier'
          ]}
          extraSchemaData={internalSelectedProduct}
        />
        <ProductDetailsView
          product={internalSelectedProduct}
          allProducts={PRODUCTS_DATA}
          onPageChange={onPageChange}
          onSelectProduct={handleSelectProductItem}
          onOpenQuoteModal={onOpenQuoteModal}
          onCategoryFilterClick={handleCategoryFilterSelect}
        />
      </div>
    );
  }

  // Otherwise, render the complete Products Listing Page
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 pb-20">
      <SEOHead
        pageName="product"
        title={currentTitle}
        description={currentDesc}
        canonicalUrl={canonicalPath}
        keywords={[
          'Water Level Controller Manufacturer in Vadodara',
          'Butterfly Valve Supplier in Vadodara',
          'Sewage Pump Supplier in Vadodara',
          'Pressure Pump Supplier',
          'Submersible Pump Supplier'
        ]}
      />
      
      {/* Page Header Banner */}
      <section className="bg-[#111111] text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#E86A2D]/20 border border-[#E86A2D]/40 text-[#E86A2D] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Package className="w-4 h-4" />
            <span>{currentDivision ? currentDivision.shortTitle : 'Industrial Range Catalog'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            {currentDivision 
              ? (currentDivision.category === 'Butterfly Valve' 
                  ? 'Butterfly Valve Supplier in Vadodara' 
                  : currentDivision.category === 'Sewage Pump'
                  ? 'Sewage Pump Supplier in Vadodara'
                  : `${currentDivision.displayName} Manufacturer & Supplier in Vadodara`) 
              : 'Products & Industrial Equipment Range in Vadodara'}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {currentDivision ? currentDivision.description : 'High precision Automatic Water Level Controllers, Heavy Duty Industrial Valves, Sewage Dewatering Pumps, Hydro-Pneumatic Boosters, and Borewell Submersibles in Vadodara, Gujarat.'}
          </p>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        
        {/* Breadcrumb Navigation */}
        <div className="bg-white rounded-2xl px-4 py-1 border border-neutral-200/80 shadow-2xs">
          <Breadcrumb
            onPageChange={onPageChange}
            category={activeCategory}
            onCategoryClick={handleCategoryFilterSelect}
          />
        </div>

        {/* Category Filters Bar */}
        <CategoryFilter
          selectedCategory={activeCategory}
          onSelectCategory={handleCategoryFilterSelect}
          products={PRODUCTS_DATA}
        />

        {/* Instant Search Bar */}
        <ProductSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          resultCount={filteredProducts.length}
          totalCount={PRODUCTS_DATA.length}
        />

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-neutral-200 space-y-3 shadow-sm">
            <Package className="w-12 h-12 text-neutral-400 mx-auto" />
            <h3 className="text-lg font-bold text-neutral-800">No products match your search criteria</h3>
            <p className="text-xs text-neutral-500">
              Try searching for "WLC", "valve", "SS 316", "submersible", "CPVC", or "booster".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleCategoryFilterSelect('All');
              }}
              className="bg-[#111111] hover:bg-neutral-800 text-white px-6 py-2.5 rounded-full text-xs font-bold mt-2 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={handleSelectProductItem}
                onOpenQuoteModal={onOpenQuoteModal}
              />
            ))}
          </div>
        )}

      </section>

    </div>
  );
};

