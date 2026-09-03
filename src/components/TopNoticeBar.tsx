import React from 'react';
import { BUSINESS_INFO } from '../data/agroData';

export const TopNoticeBar: React.FC = () => {
  return (
    <div id="top-notice-bar" className="bg-slate-900 text-slate-400 py-2 px-4 text-xs font-medium border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            Kot Addu Bypass, Madina Chowk, Pakistan
          </span>
          <span className="hidden sm:inline-block text-slate-700">|</span>
          <a
            id="top-bar-tel-link"
            className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            href={BUSINESS_INFO.telLink}
          >
            <span className="material-symbols-outlined text-[16px]">call</span>
            Direct Line: {BUSINESS_INFO.phone}
          </a>
        </div>
        <div className="flex items-center gap-2 urdu-text text-xs text-slate-400 ml-auto sm:ml-0" dir="rtl">
          <a
            id="top-bar-whatsapp-link"
            href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, I need information about your products.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[15px] text-emerald-400">chat</span>
            <span>فوری آرڈر اور زرعی مشورے کے لیے واٹس ایپ کریں</span>
          </a>
        </div>
      </div>
    </div>
  );
};
