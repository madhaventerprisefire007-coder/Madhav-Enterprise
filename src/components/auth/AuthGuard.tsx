import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { ShieldAlert, Lock, Loader2 } from 'lucide-react';

interface AuthGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * AuthGuard component: Ensures only authenticated admin users can view enclosed components.
 * Visitors and unauthenticated users are presented with an access restriction screen.
 */
export const AuthGuard: React.FC<AuthGuardProps> = ({ children, fallback }) => {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center bg-neutral-50 p-8 rounded-3xl">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-[#E86A2D] animate-spin" />
          <p className="text-xs font-bold text-neutral-600">Verifying Admin Credentials...</p>
        </div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="min-h-[450px] flex items-center justify-center bg-neutral-900 text-white p-6 rounded-3xl border border-neutral-800 shadow-2xl">
        <div className="max-w-md text-center space-y-4">
          <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mx-auto border border-red-500/20">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-display font-extrabold text-white">
            Restricted Admin Portal Access
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed">
            This area requires authenticated administrator privileges. Unauthorized visitors are restricted from accessing administrative controls or sensitive datasets.
          </p>
          <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-[11px] font-mono text-neutral-300">
            Status: Visitor Access Blocked (Admin Login Required)
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
