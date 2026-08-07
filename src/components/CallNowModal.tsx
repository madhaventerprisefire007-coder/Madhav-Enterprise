import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { X, Phone, MessageSquare, Clock, MapPin, CheckCircle2, User, Send, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CallNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallNowModal: React.FC<CallNowModalProps> = ({ isOpen, onClose }) => {
  const [callbackRequested, setCallbackRequested] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackRequested(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#111111] text-white p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-white bg-white/10 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 text-[#E86A2D] text-xs font-bold uppercase tracking-wider mb-1">
              <Phone className="w-3.5 h-3.5" />
              <span>Vadodara Sales & Support Hotline</span>
            </div>
            <h3 className="text-xl font-display font-bold text-white">
              Connect with Madhav Enterprise
            </h3>
            <p className="text-xs text-neutral-300 mt-1">
              Speak directly with our technical application engineer.
            </p>
          </div>

          <div className="p-6 space-y-4">
            {/* Call Action Card */}
            <a
              href={`tel:${COMPANY_INFO.phonePrimary}`}
              className="flex items-center justify-between p-4 bg-[#111111] text-white rounded-2xl hover:bg-neutral-800 transition-all shadow-md group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E86A2D] flex items-center justify-center text-white shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Direct Factory Phone</p>
                  <p className="text-base font-bold tracking-wide text-white group-hover:text-[#E86A2D] transition-colors">
                    {COMPANY_INFO.phonePrimary}
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold bg-white/10 group-hover:bg-[#E86A2D] text-white px-3 py-1.5 rounded-full transition-colors">
                Call Now
              </span>
            </a>

            {/* WhatsApp Action Card */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Madhav%20Enterprise%20Vadodara,%20I%20want%20to%20inquire%20about%20your%20products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-emerald-50 border border-emerald-200 rounded-2xl hover:bg-emerald-100/70 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-emerald-800 font-medium">Instant WhatsApp Chat</p>
                  <p className="text-sm font-bold text-emerald-950">
                    Online (Avg Response 5 min)
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold bg-emerald-600 text-white px-3 py-1.5 rounded-full group-hover:bg-emerald-700 transition-colors">
                Chat
              </span>
            </a>

            {/* Instant Callback Form */}
            <div className="pt-2 border-t border-neutral-200">
              <p className="text-xs font-bold text-neutral-800 mb-2">
                Or Request an Instant Call Back:
              </p>

              {callbackRequested ? (
                <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-center text-xs text-emerald-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                  <p className="font-bold">Callback Scheduled!</p>
                  <p className="text-[11px] text-emerald-700 mt-0.5">
                    Our engineer will call <strong className="text-neutral-900">{phone}</strong> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#E86A2D]"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#111111] hover:bg-neutral-800 text-white py-2 rounded-xl text-xs font-bold transition-colors"
                  >
                    Request Instant Callback
                  </button>
                </form>
              )}
            </div>

            {/* Footer location info */}
            <div className="text-[11px] text-neutral-500 pt-2 flex items-center justify-between border-t border-neutral-100">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#E86A2D]" />
                <span>Vasna Road, Diwalipura, Vadodara</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#E86A2D]" />
                <span>9 AM - 7 PM</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
