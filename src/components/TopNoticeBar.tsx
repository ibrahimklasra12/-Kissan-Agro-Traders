import React from 'react';
import { BUSINESS_INFO } from '../data/agroData';
import { ShopStatusBadge } from './ShopStatusBadge';

export const TopNoticeBar: React.FC = () => {
  return (
    <div id="top-notice-bar" className="bg-slate-900 text-slate-400 py-1.5 px-4 text-xs font-medium border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <ShopStatusBadge showHours />
          <span className="hidden sm:inline-block text-slate-700">|</span>
          <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
            <span className="material-symbols-outlined text-[15px]">location_on</span>
            <span>Kot Addu Bypass, Madina Chowk</span>
          </span>
          <span className="hidden sm:inline-block text-slate-700">|</span>
          <a
            id="top-bar-tel-link"
            className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            href={BUSINESS_INFO.telLink}
          >
            <span className="material-symbols-outlined text-[15px]">call</span>
            <span>{BUSINESS_INFO.phone}</span>
          </a>
        </div>
        <div className="flex items-center gap-2.5 urdu-text text-xs text-slate-300 ml-auto sm:ml-0" dir="rtl">
          <a
            id="top-bar-whatsapp-link"
            href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('السلام علیکم! کسان ایگرو ٹریڈرز، مجھے زرعی رہنمائی درکار ہے۔')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 font-bold"
          >
            <span className="material-symbols-outlined text-[15px] text-emerald-400">chat</span>
            <span>24/7 واٹس ایپ ہیلپ لائن</span>
          </a>
        </div>
      </div>
    </div>
  );
};
