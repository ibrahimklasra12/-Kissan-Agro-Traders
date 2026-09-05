import React from 'react';
import { useInquiryCart } from '../context/InquiryCartContext';

export const InquiryToast: React.FC = () => {
  const { toastMessage, setIsDrawerOpen } = useInquiryCart();

  if (!toastMessage) return null;

  return (
    <div
      id="inquiry-toast"
      className="fixed top-20 right-4 z-50 bg-slate-900/95 text-white px-4 py-3 rounded-2xl shadow-xl border border-emerald-500/40 flex items-center gap-3 animate-in fade-in slide-in-from-top-3 duration-200"
      role="status"
    >
      <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-[16px] text-white">check</span>
      </div>
      <span className="text-xs font-bold">{toastMessage}</span>
      <button
        type="button"
        onClick={() => setIsDrawerOpen(true)}
        className="ml-2 text-xs font-extrabold text-emerald-400 hover:text-emerald-300 underline cursor-pointer"
      >
        View Cart
      </button>
    </div>
  );
};
