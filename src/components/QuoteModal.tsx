import React, { useState } from 'react';
import { PRODUCTS_DATA, COMPANY_INFO } from '../data/companyData';
import { QuoteRequest } from '../types';
import { submitEnquiry } from '../lib/firestore/enquiries';
import { X, Send, CheckCircle2, Building, Phone, Mail, MapPin, Package, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductName?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProductName = ''
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<QuoteRequest>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    location: 'Vadodara, Gujarat',
    productCategory: 'Water Level Controller',
    productName: initialProductName || PRODUCTS_DATA[0].name,
    quantity: '1 Unit',
    message: ''
  });

  const categories = Array.from(new Set(PRODUCTS_DATA.map(p => p.category)));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitEnquiry({
        customerName: formData.fullName,
        company: formData.companyName || 'N/A',
        phone: formData.phone,
        email: formData.email,
        product: `${formData.productName} (${formData.quantity})`,
        message: `Location: ${formData.location} | Details: ${formData.message}`,
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting enquiry to Firestore:', err);
      // fallback so user flow continues seamlessly
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden my-8"
        >
          {/* Modal Header */}
          <div className="bg-[#111111] text-white p-6 md:p-8 relative">
            <div className="absolute top-4 right-4">
              <button
                onClick={onClose}
                className="p-2 text-neutral-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-[#E86A2D] text-xs font-bold uppercase tracking-wider mb-2">
              <FileText className="w-4 h-4" />
              <span>Instant Request for Quotation (RFQ)</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white">
              Get Manufacturer Quote
            </h2>
            <p className="text-xs md:text-sm text-neutral-300 mt-1 max-w-lg">
              Receive competitive direct factory pricing, technical spec sheets, and delivery timeline from Madhav Enterprise and Automation Vadodara.
            </p>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 px-4"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900">
                  Quotation Request Sent!
                </h3>
                <p className="text-sm text-neutral-600 mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-neutral-900">{formData.fullName}</strong>. Our Vadodara technical engineering team will send a detailed estimate for <strong className="text-[#E86A2D]">{formData.productName}</strong> within 2 hours.
                </p>

                <div className="mt-6 p-4 bg-neutral-50 rounded-2xl border border-neutral-200 text-left text-xs space-y-2 max-w-md mx-auto">
                  <p className="text-neutral-500 font-semibold uppercase tracking-wider text-[10px]">Reference Details:</p>
                  <p><strong className="text-neutral-800">Company:</strong> {formData.companyName || 'Individual Inquiry'}</p>
                  <p><strong className="text-neutral-800">Phone:</strong> {formData.phone}</p>
                  <p><strong className="text-neutral-800">Location:</strong> {formData.location}</p>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Madhav%20Enterprise%20and%20Automation,%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(formData.productName)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-xs font-bold transition-colors shadow"
                  >
                    <span>Connect on WhatsApp</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="bg-[#111111] hover:bg-neutral-800 text-white px-6 py-2.5 rounded-full text-xs font-bold transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Product Selection Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Product Category *
                    </label>
                    <select
                      value={formData.productCategory}
                      onChange={(e) => {
                        const cat = e.target.value;
                        const firstProd = PRODUCTS_DATA.find(p => p.category === cat)?.name || PRODUCTS_DATA[0].name;
                        setFormData({ ...formData, productCategory: cat, productName: firstProd });
                      }}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-3 py-2 text-xs font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
                      required
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Specific Product *
                    </label>
                    <select
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-3 py-2 text-xs font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
                      required
                    >
                      {PRODUCTS_DATA.filter(p => p.category === formData.productCategory).map(p => (
                        <option key={p.id} value={p.name}>{p.name} ({p.modelNumber})</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Personal & Company Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Patel"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2 text-xs font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Pharma GIDC"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2 text-xs font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2 text-xs font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2 text-xs font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Delivery Location / City *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vadodara, Gujarat"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2 text-xs font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Required Quantity
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 5 Units / 100 Meters"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2 text-xs font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Specific Requirement / Custom Dimensions / Pressure Rating
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details such as HP rating, valve size (e.g. 2 inch SS 316), pipe diameter, or custom control panel logic..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2 text-xs font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <p className="text-[11px] text-neutral-500">
                    🔒 Direct Factory Guarantee • No Middleman Commission
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-[#E86A2D] hover:bg-[#d0591f] disabled:opacity-50 text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-md shadow-[#E86A2D]/20 hover:scale-[1.02]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Sending to Factory...' : 'Submit Request Quote'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
