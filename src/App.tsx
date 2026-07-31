import React, { useState, useEffect } from 'react';
import { PageType, Product, ProductCategory } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { QuoteModal } from './components/QuoteModal';
import { CallNowModal } from './components/CallNowModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { AdminLoginModal } from './components/auth/AdminLoginModal';
import { useFirestoreData } from './hooks/useFirestoreData';
import { COMPANY_INFO, PRODUCTS_DATA } from './data/companyData';
import { generateSlug } from './lib/seo';
import { MessageSquare, Phone, ArrowUp, RefreshCw, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');

  // Firestore Sync Data
  const {
    products: firestoreProducts,
    loading: firestoreLoading,
    error: firestoreError,
    retry: retryFirestore,
  } = useFirestoreData();

  // Modals state
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProductName, setQuoteProductName] = useState('');

  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const [selectedDetailProduct, setSelectedDetailProduct] = useState<Product | null>(null);

  // Sync state from URL hash for deep linking, browser back/forward buttons, and standalone product URLs
  useEffect(() => {
    const syncStateFromHash = () => {
      const hash = window.location.hash || '#/';

      // 1. Individual Product URL: e.g. #/product?id=wlc-9000d or #/product/wlc-9000d
      if (hash.includes('/product?') || hash.includes('/product/')) {
        let targetIdOrSlug = '';
        if (hash.includes('id=')) {
          targetIdOrSlug = new URLSearchParams(hash.split('?')[1] || '').get('id') || '';
        } else if (hash.includes('/product/')) {
          targetIdOrSlug = hash.split('/product/')[1]?.split('?')[0] || '';
        }

        if (targetIdOrSlug) {
          const found = PRODUCTS_DATA.find(
            (p) =>
              p.id.toLowerCase() === targetIdOrSlug.toLowerCase() ||
              generateSlug(p.name) === targetIdOrSlug ||
              p.modelNumber.toLowerCase() === targetIdOrSlug.toLowerCase()
          );
          if (found) {
            setSelectedDetailProduct(found);
            setCurrentPage('products');
            return;
          }
        }
      }

      // 2. Products Catalog URL: e.g. #/products or #/products?category=Industrial%20Valve
      if (hash.includes('/products')) {
        setCurrentPage('products');
        setSelectedDetailProduct(null);
        if (hash.includes('category=')) {
          const cat = new URLSearchParams(hash.split('?')[1] || '').get('category');
          if (cat) {
            setSelectedCategory(decodeURIComponent(cat) as ProductCategory);
          } else {
            setSelectedCategory('All');
          }
        } else {
          setSelectedCategory('All');
        }
        return;
      }

      // 3. About Page URL: #/about
      if (hash.includes('/about')) {
        setCurrentPage('about');
        setSelectedDetailProduct(null);
        return;
      }

      // 4. Contact Page URL: #/contact
      if (hash.includes('/contact')) {
        setCurrentPage('contact');
        setSelectedDetailProduct(null);
        return;
      }

      // 5. Default Home Page URL: #/ or #/home
      if (hash.includes('/home') || hash === '#/' || hash === '#' || hash === '') {
        setCurrentPage('home');
        setSelectedDetailProduct(null);
        return;
      }
    };

    syncStateFromHash();
    window.addEventListener('hashchange', syncStateFromHash);
    return () => window.removeEventListener('hashchange', syncStateFromHash);
  }, []);

  // Modal handlers
  const handleOpenQuoteModal = (productName: string = '') => {
    setQuoteProductName(productName);
    setIsQuoteModalOpen(true);
  };

  const handleOpenCallModal = () => {
    setIsCallModalOpen(true);
  };

  // Central page change handler
  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    setSelectedDetailProduct(null);
    if (page === 'products') {
      const hashStr = selectedCategory && selectedCategory !== 'All' 
        ? `#/products?category=${encodeURIComponent(selectedCategory)}` 
        : '#/products';
      if (window.location.hash !== hashStr) {
        window.location.hash = hashStr;
      }
    } else {
      const hashStr = page === 'home' ? '#/' : `#/${page}`;
      if (window.location.hash !== hashStr) {
        window.location.hash = hashStr;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select Product handler with URL hash sync
  const handleSelectProduct = (product: Product) => {
    setSelectedDetailProduct(product);
    setCurrentPage('products');
    const hashStr = `#/product?id=${product.id}`;
    if (window.location.hash !== hashStr) {
      window.location.hash = hashStr;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select Category handler with URL hash sync
  const handleSelectCategory = (cat: ProductCategory) => {
    setSelectedCategory(cat);
    setSelectedDetailProduct(null);
    setCurrentPage('products');
    const hashStr = cat === 'All' ? '#/products' : `#/products?category=${encodeURIComponent(cat)}`;
    if (window.location.hash !== hashStr) {
      window.location.hash = hashStr;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-[#E86A2D]/20 selection:text-[#E86A2D]">
      
      {/* Sticky Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onSelectCategory={handleSelectCategory}
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenCallModal={handleOpenCallModal}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Firestore Error Alert & Retry Bar if Network/Firebase Delay Occurs */}
      {firestoreError && (
        <div className="bg-amber-500 text-neutral-900 px-4 py-2.5 text-xs font-bold flex items-center justify-between border-b border-amber-600">
          <div className="flex items-center gap-2 max-w-7xl mx-auto w-full">
            <AlertTriangle className="w-4 h-4 text-neutral-950 shrink-0" />
            <span>Firestore Connection Warning: {firestoreError}</span>
            <button
              onClick={retryFirestore}
              className="ml-auto bg-neutral-950 hover:bg-neutral-800 text-white px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Retry Sync</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Dynamic View with Animated Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <HomePage
                onPageChange={handlePageChange}
                onSelectCategory={handleSelectCategory}
                onOpenQuoteModal={handleOpenQuoteModal}
                onOpenCallModal={handleOpenCallModal}
                onSelectProduct={handleSelectProduct}
              />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <AboutPage
                onPageChange={handlePageChange}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            </motion.div>
          )}

          {currentPage === 'products' && (
            <motion.div
              key="products"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ProductsPage
                onPageChange={handlePageChange}
                onOpenQuoteModal={handleOpenQuoteModal}
                onSelectProduct={handleSelectProduct}
                selectedProduct={selectedDetailProduct}
                selectedCategory={selectedCategory}
                onSelectCategory={handleSelectCategory}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ContactPage
                onPageChange={handlePageChange}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            </motion.div>
          )}

          {currentPage === '404' && (
            <motion.div
              key="404"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <NotFoundPage
                onGoHome={() => handlePageChange('home')}
                onSelectCategory={(cat) => {
                  handleSelectCategory(cat);
                }}
                onSearchProduct={(q) => {
                  setSearchQuery(q);
                  handlePageChange('products');
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onPageChange={handlePageChange}
        onSelectCategory={handleSelectCategory}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Floating Action Buttons (WhatsApp & Quick Call) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Madhav%20Enterprise%20team,%20I%20want%20to%20inquire%20about%20your%20industrial%20products.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-900/30 hover:scale-110 transition-transform group"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 md:w-7 md:h-7" />
        </a>

        <button
          onClick={handleOpenCallModal}
          className="w-12 h-12 md:w-14 md:h-14 bg-[#E86A2D] hover:bg-[#d0591f] text-white rounded-full flex items-center justify-center shadow-xl shadow-[#E86A2D]/30 hover:scale-110 transition-transform"
          title="Call Sales Team"
        >
          <Phone className="w-6 h-6 md:w-7 md:h-7" />
        </button>
      </div>

      {/* Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProductName={quoteProductName}
      />

      <CallNowModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />

      <AdminLoginModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />

      <ProductDetailModal
        product={selectedDetailProduct}
        onClose={() => setSelectedDetailProduct(null)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

    </div>
  );
}

