import React, { useState, useEffect, useRef } from 'react';
import { PageType, ProductCategory, Product } from '../types';
import { COMPANY_INFO, PRODUCT_DIVISIONS, PRODUCTS_DATA } from '../data/companyData';
import { Logo } from './Logo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  FileText, 
  MessageSquare, 
  Clock, 
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Search,
  Package,
  Layers,
  Cpu,
  CircleDot,
  Zap,
  Gauge,
  Droplets,
  Sparkles,
  Flame
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
  onSelectCategory?: (category: ProductCategory) => void;
  onSelectProduct?: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
  onOpenCallModal: () => void;
  onOpenAdminModal?: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onPageChange,
  onSelectCategory,
  onSelectProduct,
  onOpenQuoteModal,
  onOpenCallModal,
  onOpenAdminModal,
  searchQuery,
  setSearchQuery
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const motorStarterProduct = PRODUCTS_DATA.find(
    (p) =>
      p.id === 'fully-automatic-digital-motor-starter-with-level-controller-and-protection' ||
      p.slug === 'fully-automatic-digital-motor-starter-with-level-controller-and-protection' ||
      p.id === 'reliable-water-pumping-system-vadodara' ||
      p.slug === 'reliable-water-pumping-system-vadodara'
  );

  const fireMaterialProduct = PRODUCTS_DATA.find(
    (p) => p.id === 'fire-material-supplier-vadodara' || p.slug === 'fire-material-supplier-vadodara'
  );

  const handleOpenMotorStarter = () => {
    if (motorStarterProduct && onSelectProduct) {
      onSelectProduct(motorStarterProduct);
    } else {
      onPageChange('products');
    }
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenFireMaterial = () => {
    if (fireMaterialProduct && onSelectProduct) {
      onSelectProduct(fireMaterialProduct);
    } else {
      onPageChange('products');
    }
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products & Divisions' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (page: PageType) => {
    onPageChange(page);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (cat: ProductCategory) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    } else {
      onPageChange('products');
    }
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      {/* Top Contact Bar */}
      <div className="bg-[#111111] text-white text-xs py-2 px-4 border-b border-white/10 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6 text-neutral-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E86A2D]" />
              <strong className="text-white font-medium">Diwalipura, Vasna Road, Vadodara, Gujarat</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E86A2D]" />
              <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Quality Assured Manufacturer</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href={`mailto:${COMPANY_INFO.emailSales}`} 
              className="flex items-center gap-1.5 text-neutral-300 hover:text-[#E86A2D] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#E86A2D]" />
              <span>{COMPANY_INFO.emailSales}</span>
            </a>
            <a 
              href={`tel:${COMPANY_INFO.phonePrimary}`} 
              className="flex items-center gap-1.5 text-white font-semibold hover:text-[#E86A2D] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E86A2D]" />
              <span>{COMPANY_INFO.phonePrimary}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Madhav%20Enterprise%20team,%20I%20have%20an%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600/90 hover:bg-emerald-600 text-white px-2.5 py-0.5 rounded text-[11px] font-medium transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'glass-card shadow-lg py-2.5 bg-white/95 backdrop-blur-md border-b border-neutral-200' 
            : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-neutral-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-none group"
            aria-label="Madhav Enterprise Home"
          >
            <Logo showTagline={false} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              if (item.id === 'products') {
                return (
                  <div key={item.id} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => handleNavClick('products')}
                      onMouseEnter={() => setProductsDropdownOpen(true)}
                      className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? 'text-[#E86A2D] bg-[#E86A2D]/10'
                          : 'text-neutral-800 hover:text-[#E86A2D] hover:bg-neutral-100/80'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsDropdownOpen ? 'rotate-180 text-[#E86A2D]' : ''}`} />
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E86A2D] rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>

                    {/* Products & Divisions Dropdown Menu */}
                    <AnimatePresence>
                      {productsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-2 w-88 bg-white rounded-2xl shadow-2xl border border-neutral-200 py-3 px-2.5 z-50 overflow-hidden"
                          onMouseLeave={() => setProductsDropdownOpen(false)}
                        >
                          <div className="px-3 py-1.5 border-b border-neutral-100 mb-1 flex items-center justify-between">
                            <span className="text-[11px] font-extrabold text-[#E86A2D] uppercase tracking-wider flex items-center gap-1.5">
                              <Package className="w-3.5 h-3.5" />
                              <span>Product Divisions & Pages</span>
                            </span>
                            <span className="text-[10px] text-neutral-400 font-medium">Select to View</span>
                          </div>

                          <div className="space-y-1">
                            {/* Fire Material Supplier in Vadodara (Specialized Solution Page) */}
                            <button
                              onClick={handleOpenFireMaterial}
                              className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-orange-50/90 transition-colors flex items-start gap-3 group border border-transparent hover:border-orange-200"
                            >
                              <div className="w-8 h-8 rounded-lg bg-red-500/15 text-red-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                <Flame className="w-4 h-4" />
                              </div>
                              <div className="space-y-0.5 flex-1">
                                <div className="flex items-center justify-between">
                                  <p className="text-xs font-bold text-neutral-900 group-hover:text-[#E86A2D] transition-colors leading-tight">
                                    Fire Material Supplier
                                  </p>
                                  <span className="text-[9px] bg-red-100 text-red-600 font-bold px-1.5 py-0.5 rounded">
                                    Vadodara
                                  </span>
                                </div>
                                <p className="text-[10px] text-neutral-500 line-clamp-1">
                                  ISI marked hydrant valves, sprinklers, hose reels & fire safety material.
                                </p>
                              </div>
                            </button>

                            {/* Fully Automatic Digital Motor Starter (Specialized Solution Page) */}
                            <button
                              onClick={handleOpenMotorStarter}
                              className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-orange-50/90 transition-colors flex items-start gap-3 group border border-transparent hover:border-orange-200"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#E86A2D]/15 text-[#E86A2D] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#E86A2D] group-hover:text-white transition-colors">
                                <Cpu className="w-4 h-4" />
                              </div>
                              <div className="space-y-0.5 flex-1">
                                <div className="flex items-center justify-between">
                                  <p className="text-xs font-bold text-neutral-900 group-hover:text-[#E86A2D] transition-colors leading-tight">
                                    Fully Automatic Digital Motor Starter
                                  </p>
                                  <span className="text-[9px] bg-orange-100 text-[#E86A2D] font-bold px-1.5 py-0.5 rounded">
                                    Vadodara
                                  </span>
                                </div>
                                <p className="text-[10px] text-neutral-500 line-clamp-1">
                                  With level controller, auto restart & complete motor protection.
                                </p>
                              </div>
                            </button>

                            {/* Standard Product Divisions */}
                            {PRODUCT_DIVISIONS.filter((div) => div.id !== 'fire-material').map((div) => (
                              <button
                                key={div.id}
                                onClick={() => handleCategoryClick(div.category)}
                                className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-neutral-100/90 transition-colors flex items-start gap-3 group"
                              >
                                <div className="w-8 h-8 rounded-lg bg-[#E86A2D]/10 text-[#E86A2D] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#E86A2D] group-hover:text-white transition-colors">
                                  {div.id === 'wlc' && <Cpu className="w-4 h-4" />}
                                  {div.id === 'valves' && <CircleDot className="w-4 h-4" />}
                                  {div.id === 'motor-pumps' && <Zap className="w-4 h-4" />}
                                  {div.id === 'pipes-fittings' && <Layers className="w-4 h-4" />}
                                  {div.id === 'pressure-pumps' && <Gauge className="w-4 h-4" />}
                                  {div.id === 'submersible-pumps' && <Droplets className="w-4 h-4" />}
                                </div>
                                <div className="space-y-0.5">
                                  <p className="text-xs font-bold text-neutral-900 group-hover:text-[#E86A2D] transition-colors leading-tight">
                                    {div.displayName}
                                  </p>
                                  <p className="text-[10px] text-neutral-500 line-clamp-1">
                                    {div.description}
                                  </p>
                                </div>
                              </button>
                            ))}
                          </div>

                          <div className="pt-2 mt-2 border-t border-neutral-100 text-center">
                            <button
                              onClick={() => handleCategoryClick('All')}
                              className="text-xs font-bold text-[#E86A2D] hover:underline inline-flex items-center gap-1"
                            >
                              <span>View All Products Catalog</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-[#E86A2D] bg-[#E86A2D]/10'
                      : 'text-neutral-800 hover:text-[#E86A2D] hover:bg-neutral-100/80'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E86A2D] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Quick Search Toggle */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-neutral-100 rounded-full border border-neutral-300 px-3 py-1.5 w-48 sm:w-60 transition-all">
                  <Search className="w-4 h-4 text-neutral-500 mr-2 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search valves, pumps..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (currentPage !== 'products') {
                        onPageChange('products');
                      }
                    }}
                    className="w-full text-xs bg-transparent border-none focus:outline-none text-neutral-800"
                    autoFocus
                  />
                  <button 
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="text-neutral-400 hover:text-neutral-700 ml-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setSearchOpen(true);
                    if (currentPage !== 'products') {
                      onPageChange('products');
                    }
                  }}
                  className="p-2 text-neutral-600 hover:text-[#E86A2D] hover:bg-neutral-100 rounded-full transition-colors"
                  title="Search products"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Admin Login Button */}
            {onOpenAdminModal && (
              <button
                onClick={onOpenAdminModal}
                className="p-2 text-neutral-600 hover:text-[#E86A2D] hover:bg-neutral-100 rounded-full transition-colors"
                title="Admin Authentication Portal"
              >
                <ShieldCheck className="w-4 h-4" />
              </button>
            )}

            {/* Call Now Button */}
            <button
              onClick={onOpenCallModal}
              className="inline-flex items-center gap-2 border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-900 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-sm hover:border-neutral-400"
            >
              <Phone className="w-3.5 h-3.5 text-[#E86A2D]" />
              <span>Call Now</span>
            </button>

            {/* Get Quote Primary Orange CTA */}
            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 bg-[#E86A2D] hover:bg-[#d0591f] text-white px-5 py-2 rounded-full text-xs font-bold transition-all shadow-md shadow-[#E86A2D]/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Get Quote</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-[#E86A2D] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-sm"
            >
              Get Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-800 hover:bg-neutral-100 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-neutral-200 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {/* Search Bar Mobile */}
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Search products, model numbers..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (currentPage !== 'products') {
                      onPageChange('products');
                    }
                  }}
                  className="w-full text-xs bg-neutral-100 border border-neutral-300 rounded-xl px-4 py-2.5 pl-9 focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
                />
                <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
              </div>

              {/* Navigation Items */}
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <div key={item.id} className="space-y-1">
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                        currentPage === item.id
                          ? 'bg-[#E86A2D]/10 text-[#E86A2D]'
                          : 'text-neutral-800 hover:bg-neutral-100'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </button>

                    {/* Sub-list of product pages when item is products */}
                    {item.id === 'products' && (
                      <div className="pl-3 pr-1 py-2 space-y-1 bg-neutral-50 rounded-xl border border-neutral-200/60 my-1">
                        {/* Special Featured Pages in Mobile */}
                        <button
                          onClick={handleOpenFireMaterial}
                          className="w-full text-left p-2 rounded-lg bg-red-50 hover:bg-red-100/70 border border-red-200 transition-colors flex items-center justify-between text-red-600 font-bold text-xs mb-1"
                        >
                          <span className="flex items-center gap-1.5 line-clamp-1">
                            <Flame className="w-3.5 h-3.5 text-red-600 shrink-0" />
                            <span>Fire Material Supplier (Vadodara)</span>
                          </span>
                          <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.5 rounded font-bold shrink-0">
                            Vadodara
                          </span>
                        </button>

                        <button
                          onClick={handleOpenMotorStarter}
                          className="w-full text-left p-2 rounded-lg bg-orange-50 hover:bg-orange-100/70 border border-[#E86A2D]/30 transition-colors flex items-center justify-between text-[#E86A2D] font-bold text-xs mb-1"
                        >
                          <span className="flex items-center gap-1.5 line-clamp-1">
                            <Cpu className="w-3.5 h-3.5 text-[#E86A2D] shrink-0" />
                            <span>Fully Automatic Digital Motor Starter (Vadodara)</span>
                          </span>
                          <span className="text-[9px] bg-[#E86A2D] text-white px-1.5 py-0.5 rounded font-bold shrink-0">
                            Starter
                          </span>
                        </button>

                        <p className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 px-1 pt-1">
                          Product Categories:
                        </p>
                        {PRODUCT_DIVISIONS.filter((div) => div.id !== 'fire-material').map((div) => (
                          <button
                            key={div.id}
                            onClick={() => handleCategoryClick(div.category)}
                            className="w-full text-left px-2 py-1.5 text-xs font-semibold text-neutral-700 hover:text-[#E86A2D] hover:bg-neutral-100 rounded-lg transition-colors flex items-center justify-between"
                          >
                            <span className="line-clamp-1">{div.displayName}</span>
                            <ChevronRight className="w-3 h-3 text-neutral-400 shrink-0" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Direct Actions Mobile */}
              <div className="pt-3 border-t border-neutral-100 grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCallModal();
                  }}
                  className="flex items-center justify-center gap-2 border border-neutral-300 bg-white py-2.5 rounded-xl text-xs font-bold text-neutral-900"
                >
                  <Phone className="w-4 h-4 text-[#E86A2D]" />
                  <span>Call Now</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="flex items-center justify-center gap-2 bg-[#E86A2D] text-white py-2.5 rounded-xl text-xs font-bold shadow-md shadow-[#E86A2D]/20"
                >
                  <FileText className="w-4 h-4" />
                  <span>Get Quote</span>
                </button>
              </div>

              {/* Contact info snippet */}
              <div className="mt-4 pt-3 border-t border-neutral-100 text-[11px] text-neutral-600 space-y-1">
                <p className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E86A2D]" />
                  <span>Diwalipura, Vasna Road, Vadodara</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#E86A2D]" />
                  <span>{COMPANY_INFO.emailSales}</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
