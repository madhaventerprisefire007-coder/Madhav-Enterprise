import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { submitEnquiry } from '../../lib/firestore/enquiries';

interface EnquiryFormProps {
  productName: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ productName }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    mobile: '',
    email: '',
    city: 'Vadodara',
    productName: productName || 'General Inquiry',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitEnquiry({
        customerName: formData.name,
        company: formData.company || 'N/A',
        phone: formData.mobile,
        email: formData.email,
        product: formData.productName,
        message: `City: ${formData.city} | ${formData.message}`,
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Error saving enquiry to Firestore:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-md space-y-6">
      <div className="border-b border-neutral-100 pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E86A2D] uppercase tracking-wider mb-1">
          <FileText className="w-3.5 h-3.5" />
          <span>Quick Factory RFQ</span>
        </div>
        <h3 className="text-xl font-display font-extrabold text-neutral-900">
          Request Direct Quote / Specification Sheet
        </h3>
        <p className="text-xs text-neutral-500 mt-1">
          Fill out this form to receive technical pricing, tax invoice quote, and lead times from our Vadodara engineering desk.
        </p>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4"
        >
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-neutral-900">Enquiry Submitted Successfully!</h4>
          <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
            Thank you, <strong className="text-neutral-900">{formData.name}</strong>. Our Vadodara sales team will send the official quotation for <strong className="text-[#E86A2D]">{formData.productName}</strong> to <strong className="text-neutral-900">{formData.email}</strong> within 2 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-[#111111] text-white text-xs font-bold px-6 py-2.5 rounded-full"
          >
            Submit Another Requirement
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Auto Filled Product Name Field */}
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Product Selected (Auto Filled)
            </label>
            <input
              type="text"
              value={formData.productName}
              readOnly
              className="w-full bg-neutral-100 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs font-bold text-neutral-800 cursor-not-allowed focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh Patel"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                placeholder="e.g. Apex Chemicals Ltd"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
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
                className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              City / Location *
            </label>
            <input
              type="text"
              placeholder="e.g. Vadodara, Ankleshwar, Ahmedabad..."
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Quantity & Requirements / Specs *
            </label>
            <textarea
              rows={3}
              placeholder="Specify required quantity, pipe size, voltage rating, or delivery timeline..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#E86A2D] hover:bg-[#d0591f] disabled:opacity-50 text-white py-3.5 rounded-2xl text-xs font-bold transition-all shadow-md shadow-[#E86A2D]/20 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? 'Submitting to Factory...' : 'Submit Quotation Request'}</span>
          </button>

          <p className="text-[11px] text-neutral-400 text-center flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Privacy Guaranteed. Direct Vadodara GIDC Factory Quotes.</span>
          </p>

        </form>
      )}
    </div>
  );
};
