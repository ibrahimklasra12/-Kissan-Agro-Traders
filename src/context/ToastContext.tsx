import React, { createContext, useContext, useState, useCallback } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastContextType {
  showToast: (type: ToastType, title: string, message?: string, duration?: number) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (type: ToastType, title: string, message?: string, duration = 3500) => {
      const id = `${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
      const newToast: ToastMessage = { id, type, title, message, duration };

      setToasts((prev) => [...prev.slice(-3), newToast]); // Keep maximum 4 toasts at a time

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }
    },
    [removeToast]
  );

  const getIcon = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'check_circle';
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      case 'info':
      default:
        return 'info';
    }
  };

  const getColors = (type: ToastType) => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-emerald-900/95 text-white border-emerald-400/50',
          iconBg: 'bg-emerald-500 text-white',
          accent: 'border-emerald-400',
        };
      case 'error':
        return {
          bg: 'bg-rose-900/95 text-white border-rose-400/50',
          iconBg: 'bg-rose-500 text-white',
          accent: 'border-rose-400',
        };
      case 'warning':
        return {
          bg: 'bg-amber-900/95 text-white border-amber-400/50',
          iconBg: 'bg-amber-500 text-slate-950',
          accent: 'border-amber-400',
        };
      case 'info':
      default:
        return {
          bg: 'bg-slate-900/95 text-white border-slate-600',
          iconBg: 'bg-blue-500 text-white',
          accent: 'border-blue-400',
        };
    }
  };

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}

      {/* Floating Toasts Container (Safe-area aware, bottom-right on desktop, top-center on mobile so bottom nav is never covered) */}
      <div
        id="toast-notification-container"
        className="fixed top-20 sm:top-auto sm:bottom-6 sm:right-6 left-4 right-4 sm:left-auto z-50 flex flex-col gap-2.5 pointer-events-none max-w-sm mx-auto sm:mx-0 w-auto"
        aria-live="polite"
      >
        {toasts.map((toast) => {
          const colors = getColors(toast.type);
          return (
            <div
              key={toast.id}
              className={`pointer-events-auto flex items-start gap-3 p-3.5 rounded-2xl shadow-xl backdrop-blur-md border ${colors.bg} animate-in fade-in slide-in-from-top-4 sm:slide-in-from-bottom-4 duration-300 transition-all`}
              role="alert"
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${colors.iconBg} shadow-xs`}>
                <span className="material-symbols-outlined text-[18px]">{getIcon(toast.type)}</span>
              </div>

              <div className="flex-1 min-w-0 pr-1">
                <h4 className="text-xs sm:text-sm font-black leading-tight tracking-tight">
                  {toast.title}
                </h4>
                {toast.message && (
                  <p className="text-[11px] sm:text-xs text-white/85 mt-0.5 leading-relaxed">
                    {toast.message}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                className="text-white/60 hover:text-white p-1 rounded-lg transition-colors cursor-pointer shrink-0"
                aria-label="Close notification"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
