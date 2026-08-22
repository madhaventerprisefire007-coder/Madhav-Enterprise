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
import { AdminLoginModal } from './components/auth/AdminLoginModal';
import { useFirestoreData } from './hooks/useFirestoreData';
import { COMPANY_INFO, PRODUCTS_DATA, PRODUCT_DIVISIONS } from './data/companyData';
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

  // Sync state from clean URLs for deep linking, browser back/forward buttons, and SEO friendly product URLs
  useEffect(() => {
    const syncStateFromUrl = () => {
      const hash = window.location.hash;
      const pathname = window.location.pathname;
      
      // Determine the route path (if hash exists from an old link, clean it up and replace state)
      let routeStr = pathname;
      if (hash && hash.length > 1) {
        routeStr = hash.replace('#', '');
        // Clean up hash from browser address bar
        if (window.history && window.history.replaceState) {
          window.history.replaceState({}, '', routeStr || '/');
        }
      }

      // 1. Individual Product URL: e.g. /product/panel-with-sensor or /product/reliable-water-pumping-system-vadodara
      if (routeStr.includes('/product/') || routeStr.includes('/product?')) {
        let targetIdOrSlug = '';
        if (routeStr.includes('id=')) {
          targetIdOrSlug = new URLSearchParams(routeStr.split('?')[1] || '').get('id') || '';
        } else if (routeStr.includes('/product/')) {
          targetIdOrSlug = decodeURIComponent(routeStr.split('/product/')[1]?.split('?')[0] || '');
        }

        if (targetIdOrSlug) {
          const targetLower = targetIdOrSlug.toLowerCase();
          const found = PRODUCTS_DATA.find(
            (p) =>
              p.id.toLowerCase() === targetLower ||
              (p.slug && p.slug.toLowerCase() === targetLower) ||
              generateSlug(p.name) === targetLower ||
              p.modelNumber.toLowerCase() === targetLower ||
              (targetLower.includes('reliable-water-pumping') && p.id === 'fully-automatic-digital-motor-starter-with-level-controller-and-protection') ||
              generateSlug(p.category) === targetLower
          );
          if (found) {
            setSelectedDetailProduct(found);
            setCurrentPage('products');
            return;
          }
        }
      }

      // 1b. Direct clean product slug URL (e.g. /fully-automatic-digital-motor-starter-with-level-controller-and-protection)
      const cleanSlug = routeStr.replace(/^\//, '').split('?')[0].toLowerCase();
      if (cleanSlug && !['home', 'about', 'products', 'contact', '404'].includes(cleanSlug)) {
        const foundByDirectSlug = PRODUCTS_DATA.find(
          (p) =>
            p.id.toLowerCase() === cleanSlug ||
            (p.slug && p.slug.toLowerCase() === cleanSlug) ||
            generateSlug(p.name) === cleanSlug ||
            (cleanSlug.includes('reliable-water-pumping') && p.id === 'fully-automatic-digital-motor-starter-with-level-controller-and-protection')
        );
        if (foundByDirectSlug) {
          setSelectedDetailProduct(foundByDirectSlug);
          setCurrentPage('products');
          return;
        }
      }

      // 2. Products Category Catalog URL: e.g. /products/water-level-controller
      if (routeStr.includes('/products')) {
        setCurrentPage('products');
        setSelectedDetailProduct(null);
        let catParam = '';
        if (routeStr.includes('category=')) {
          catParam = new URLSearchParams(routeStr.split('?')[1] || '').get('category') || '';
        } else if (routeStr.includes('/products/')) {
          catParam = decodeURIComponent(routeStr.split('/products/')[1]?.split('?')[0] || '');
        }

        if (catParam) {
          const decodedCat = decodeURIComponent(catParam);
          const foundDivision = PRODUCT_DIVISIONS.find(
            (d) =>
              d.category.toLowerCase() === decodedCat.toLowerCase() ||
              generateSlug(d.category) === decodedCat.toLowerCase() ||
              generateSlug(d.shortTitle) === decodedCat.toLowerCase()
          );
          if (foundDivision) {
            setSelectedCategory(foundDivision.category);
          } else {
            const categories: ProductCategory[] = [
              'All',
              'Water Level Controller',
              'Butterfly Valve',
              'Sewage Pump',
              'Pressure Pump',
              'Submersible Pump'
            ];
            if (decodedCat.toLowerCase() === 'industrial-valve' || decodedCat.toLowerCase() === 'industrial valve') {
              setSelectedCategory('Butterfly Valve');
            } else {
              const directCat = categories.find(
                (c) => c.toLowerCase() === decodedCat.toLowerCase() || generateSlug(c) === decodedCat.toLowerCase()
              );
              setSelectedCategory(directCat || 'All');
            }
          }
        } else {
          setSelectedCategory('All');
        }
        return;
      }

      // 3. About Page URL: /about
      if (routeStr.includes('/about')) {
        setCurrentPage('about');
        setSelectedDetailProduct(null);
        return;
      }

      // 4. Contact Page URL: /contact
      if (routeStr.includes('/contact')) {
        setCurrentPage('contact');
        setSelectedDetailProduct(null);
        return;
      }

      // 5. Default Home Page URL: / or /home
      if (routeStr.includes('/home') || routeStr === '/' || routeStr === '') {
        setCurrentPage('home');
        setSelectedDetailProduct(null);
        return;
      }
    };

    syncStateFromUrl();
    window.addEventListener('hashchange', syncStateFromUrl);
    window.addEventListener('popstate', syncStateFromUrl);
    return () => {
      window.removeEventListener('hashchange', syncStateFromUrl);
      window.removeEventListener('popstate', syncStateFromUrl);
    };
  }, []);

  // Modal handlers
  const handleOpenQuoteModal = (productName: string = '') => {
    setQuoteProductName(productName);
    setIsQuoteModalOpen(true);
  };

  const handleOpenCallModal = () => {
    setIsCallModalOpen(true);
  };

  // Central page change handler (uses Clean URLs with pushState)
  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    setSelectedDetailProduct(null);
    let pathStr = '/';
    if (page === 'products') {
      const catSlug = selectedCategory && selectedCategory !== 'All' ? generateSlug(selectedCategory) : '';
      pathStr = catSlug ? `/products/${catSlug}` : '/products';
    } else if (page !== 'home') {
      pathStr = `/${page}`;
    }

    if (window.location.pathname !== pathStr) {
      window.history.pushState({}, '', pathStr);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select Product handler with Clean URL pushState
  const handleSelectProduct = (product: Product) => {
    setSelectedDetailProduct(product);
    setCurrentPage('products');
    const seoSlug = product.slug || generateSlug(product.name);
    const pathStr = product.slug ? `/${product.slug}` : `/product/${seoSlug}`;
    if (window.location.pathname !== pathStr) {
      window.history.pushState({}, '', pathStr);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select Category handler with Clean URL pushState
  const handleSelectCategory = (cat: ProductCategory) => {
    setSelectedCategory(cat);
    setSelectedDetailProduct(null);
    setCurrentPage('products');
    const catSlug = generateSlug(cat);
    const pathStr = cat === 'All' ? '/products' : `/products/${catSlug}`;
    if (window.location.pathname !== pathStr) {
      window.history.pushState({}, '', pathStr);
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
        onSelectProduct={handleSelectProduct}
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenCallModal={handleOpenCallModal}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

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
        onSelectProduct={handleSelectProduct}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Floating Action Buttons (WhatsApp & Quick Call) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Madhav%20Enterprise%20and%20Automation%20team,%20I%20want%20to%20inquire%20about%20your%20industrial%20products.`}
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

    </div>
  );
}

