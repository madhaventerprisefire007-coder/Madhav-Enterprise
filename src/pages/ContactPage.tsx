import React, { useState } from 'react';
import { PageType } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { SEOHead } from '../components/seo/SEOHead';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Building2, 
  Factory, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

interface ContactPageProps {
  onPageChange: (page: PageType) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onPageChange, onOpenQuoteModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'General Product Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 pb-20">
      <SEOHead
        pageName="contact"
        title="Contact Madhav Enterprise Vadodara | Phone, Address & Inquiries"
        description="Contact Madhav Enterprise at C-10 Gaurav Park, Diwalipura, Vasna Road, Vadodara, Gujarat 390007. Call +91 70417 72780 / +91 99240 40633 for Water Level Controllers, Valves & Pumps."
        keywords={[
          'Contact Madhav Enterprise Vadodara',
          'Water Level Controller Phone Number Vadodara',
          'Butterfly Valve Supplier Address Diwalipura',
          'Madhav Enterprise Email Vasna Road'
        ]}
      />
      
      {/* Page Header */}
      <section className="bg-[#111111] text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#E86A2D]/20 border border-[#E86A2D]/40 text-[#E86A2D] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-4 h-4" />
            <span>Vadodara, Gujarat Head Office</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Contact Madhav Enterprise Vadodara
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Get in touch with our team at Diwalipura, Vasna Road, Vadodara. We provide immediate technical consultations, product inquiries, quotes, and customer support.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E86A2D] text-white rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">Direct Sales Hotline</h3>
                  <p className="text-xs text-neutral-500">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="pl-15 space-y-1">
                <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="block text-lg font-bold text-[#111111] hover:text-[#E86A2D] transition-colors">
                  {COMPANY_INFO.phonePrimary}
                </a>
                <a href={`tel:${COMPANY_INFO.phoneSecondary}`} className="block text-lg font-bold text-[#111111] hover:text-[#E86A2D] transition-colors">
                  {COMPANY_INFO.phoneSecondary}
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#111111] text-white rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">Email Inquiry</h3>
                  <p className="text-xs text-neutral-500">Official RFQ & Quotations</p>
                </div>
              </div>
              <p className="text-sm font-bold text-neutral-800 pl-15">
                <a href={`mailto:${COMPANY_INFO.emailSales}`} className="hover:text-[#E86A2D] transition-colors">
                  {COMPANY_INFO.emailSales}
                </a>
              </p>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E86A2D]/10 text-[#E86A2D] rounded-2xl flex items-center justify-center shrink-0">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">Office & Unit Address</h3>
                  <p className="text-xs text-neutral-500">Vadodara, Gujarat, India</p>
                </div>
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed pl-15">
                {COMPANY_INFO.fullAddress}
              </p>
            </div>

            {/* WhatsApp Quick Chat */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Madhav%20Enterprise%20team,%20I%20am%20contacting%20you%20from%20your%20website.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-emerald-600 text-white rounded-3xl shadow-lg hover:bg-emerald-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-6 h-6" />
                <div>
                  <p className="text-xs font-medium text-emerald-100">Instant Chat</p>
                  <p className="text-sm font-bold">Connect on WhatsApp</p>
                </div>
              </div>
              <span className="text-xs font-bold bg-white/20 px-3 py-1.5 rounded-full">
                Chat Now
              </span>
            </a>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200 shadow-sm">
            
            <div className="mb-6">
              <h2 className="text-2xl font-display font-extrabold text-neutral-900">
                Send an Direct Industrial Inquiry
              </h2>
              <p className="text-xs text-neutral-600 mt-1">
                Fill out the form below. Our technical engineering desk in Vadodara will respond within 2 working hours.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Inquiry Received!</h3>
                <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                  Thank you, <strong className="text-neutral-900">{formData.name}</strong>. Your inquiry has been routed to our Vadodara engineering team.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#111111] text-white text-xs font-bold px-6 py-2.5 rounded-full"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Suresh Shah"
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
                      placeholder="e.g. Chemical Process Plant"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
                  >
                    <option value="Water Level Controller">Water Level Controller Requirement</option>
                    <option value="Butterfly Valves">Butterfly Valves (Wafer / Cast Iron / SS)</option>
                    <option value="Pumps">Motor & Submersible Pumps</option>
                    <option value="Pressure Booster System">Hydro-Pneumatic Pressure Booster</option>
                    <option value="Pipes & Fittings">CPVC / UPVC Pipes & Fittings</option>
                    <option value="Factory Visit">Vadodara Factory Visit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Your Requirements / Technical Specs *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your fluid type, HP rating, pipe size, voltage specification, or custom requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E86A2D] hover:bg-[#d0591f] text-white py-3.5 rounded-2xl text-xs font-bold transition-all shadow-md shadow-[#E86A2D]/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message</span>
                </button>

              </form>
            )}

          </div>

        </div>

        {/* Google Map Section Container */}
        <div className="mt-12 bg-white rounded-3xl p-6 border border-neutral-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#E86A2D]" />
              <h3 className="text-base font-display font-bold text-neutral-900">
                Madhav Enterprise - Diwalipura, Vasna Road Location
              </h3>
            </div>
            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#E86A2D] hover:underline flex items-center gap-1 bg-[#E86A2D]/10 px-3.5 py-1.5 rounded-full"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-inner">
            <iframe
              title="Madhav Enterprise Google Map Location"
              src={COMPANY_INFO.mapEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </section>

    </div>
  );
};
