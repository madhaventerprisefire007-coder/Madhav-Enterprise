import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertOctagon, RefreshCw, Phone, Mail, Home } from 'lucide-react';
import { BUSINESS_INFO } from '../../lib/seo';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center p-6 selection:bg-[#E86A2D]/20 selection:text-[#E86A2D]">
          <div className="max-w-xl w-full bg-neutral-800/90 border border-neutral-700/80 rounded-3xl p-8 md:p-10 shadow-2xl space-y-6 text-center">
            <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mx-auto border border-red-500/20">
              <AlertOctagon className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 bg-red-500/20 text-red-400 text-[11px] font-mono font-bold rounded-full uppercase tracking-wider">
                500 Internal Error
              </span>
              <h1 className="text-2xl md:text-3xl font-display font-extrabold text-white">
                Something Unexpected Occurred
              </h1>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-md mx-auto">
                We encountered a system glitch while processing your request. Our technical team in Vadodara has been notified.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 bg-neutral-900/80 rounded-2xl border border-neutral-700/60 text-left font-mono text-[11px] text-red-300/80 overflow-x-auto max-h-32">
                {this.state.error.toString()}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="w-full sm:w-auto bg-[#E86A2D] hover:bg-[#d0591f] text-white px-6 py-3 rounded-2xl text-xs font-bold transition-all shadow-lg shadow-[#E86A2D]/20 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Retry Application</span>
              </button>

              <a
                href="/"
                className="w-full sm:w-auto bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                <span>Return to Homepage</span>
              </a>
            </div>

            <div className="border-t border-neutral-700/60 pt-6 text-xs text-neutral-400 space-y-2">
              <p className="font-bold text-neutral-300">Need Immediate Order Support?</p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center gap-1.5 text-[#E86A2D] hover:underline font-semibold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-1.5 text-neutral-300 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
