import React, { useState } from 'react';

interface Temporary404ViewProps {
  onBypass?: () => void;
}

export const Temporary404View: React.FC<Temporary404ViewProps> = ({ onBypass }) => {
  const [showAdminHelper, setShowAdminHelper] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#202124] flex flex-col justify-between font-sans selection:bg-neutral-200">
      <title>404 Not Found</title>

      {/* Main Authentic 404 Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="space-y-2">
            <h1 className="text-7xl sm:text-9xl font-mono font-extrabold tracking-tight text-neutral-800">
              404
            </h1>
            <div className="h-1 w-16 bg-neutral-300 mx-auto my-4 rounded-full" />
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-800">
              404 Not Found
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-mono">
            The requested URL was not found on this server.
          </p>

          <p className="text-xs text-neutral-400 font-mono">
            Additionally, a 404 Not Found error was encountered while trying to use an ErrorDocument to handle the request.
          </p>

          <div className="pt-6 border-t border-neutral-200">
            <p className="text-[11px] text-neutral-400 font-mono">
              Server: nginx/1.24.0 • Port 443
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Owner/Admin Quick Controls */}
      <div className="p-4 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 border-t border-neutral-200/60 bg-neutral-100/60">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="font-mono text-[11px] text-neutral-600">
            Status: 404 Error Mode Active (Temporarily Enabled)
          </span>
        </div>

        <div className="flex items-center gap-3">
          {onBypass && (
            <button
              onClick={onBypass}
              className="text-[11px] text-neutral-600 hover:text-neutral-900 underline font-medium cursor-pointer transition-colors"
              title="Click to preview the live website"
            >
              [ Preview Live Website ]
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
