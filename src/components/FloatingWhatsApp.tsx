import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/agroData';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      {/* Dismissable or gentle hint tooltip */}
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl border border-slate-700 backdrop-blur-xs animate-in fade-in slide-in-from-right-2 duration-300">
          <span className="urdu-text" dir="rtl">واٹس ایپ پر رابطہ کریں</span>
          <button
            type="button"
            onClick={() => setTooltipVisible(false)}
            className="text-slate-400 hover:text-white ml-1 text-xs cursor-pointer"
            aria-label="Dismiss message"
          >
            ×
          </button>
        </div>
      )}

      {/* Primary Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, I have an inquiry.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp with Kissan Agro Traders"
      >
        {/* Pulse radar ping */}
        <span className="absolute -inset-1 rounded-full bg-green-500/30 animate-ping pointer-events-none opacity-75" />
        <span className="material-symbols-outlined text-[30px] relative z-10">chat</span>
      </a>
    </div>
  );
};
