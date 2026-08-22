import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { X, Lock, Mail, Key, LogIn, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose }) => {
  const { signInWithEmail, signInWithGoogle, user, isAdmin, signOutUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      await signInWithEmail(email, password);
      onClose();
    } catch (err: any) {
      setError(err?.message || 'Invalid admin credentials');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setIsSubmitting(true);
    try {
      await signInWithGoogle();
      onClose();
    } catch (err: any) {
      setError(err?.message || 'Google authentication failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-2xl text-white"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#E86A2D]/10 text-[#E86A2D] rounded-2xl flex items-center justify-center border border-[#E86A2D]/20">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-white">
                Admin Authentication
              </h3>
              <p className="text-xs text-neutral-400">
                Secure Firebase Auth Portal
              </p>
            </div>
          </div>

          {user ? (
            <div className="space-y-4 bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
              <p className="text-xs text-neutral-300">
                Signed in as <strong className="text-white">{user.email}</strong>
              </p>
              <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30">
                {isAdmin ? 'Administrator Privileges Active' : 'Authenticated User'}
              </div>
              <button
                onClick={async () => {
                  await signOutUser();
                  onClose();
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-neutral-300 mb-1">
                  Admin Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-3 text-neutral-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="madhaventerprise.fire007@gmail.com"
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#E86A2D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Key className="w-4 h-4 absolute left-3.5 top-3 text-neutral-500" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#E86A2D]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#E86A2D] hover:bg-[#d0591f] disabled:opacity-50 text-white font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#E86A2D]/20"
              >
                <LogIn className="w-4 h-4" />
                <span>{isSubmitting ? 'Authenticating...' : 'Sign In as Admin'}</span>
              </button>

              <div className="relative my-4 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-800" />
                </div>
                <span className="relative bg-neutral-900 px-3 text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                  OR
                </span>
              </div>

              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isSubmitting}
                className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors border border-neutral-700 flex items-center justify-center gap-2"
              >
                <span>Continue with Google</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
