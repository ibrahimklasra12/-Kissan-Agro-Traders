import React from 'react';
import { BUSINESS_INFO } from '../data/agroData';

export const Footer: React.FC = () => {
  return (
    <footer id="site-footer" className="bg-slate-900 text-slate-400 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold">
                <span className="material-symbols-outlined text-[20px]">eco</span>
              </div>
              <span className="text-base font-extrabold text-white tracking-tight">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="urdu-text text-sm font-bold text-emerald-400 mb-3" dir="rtl">
              {BUSINESS_INFO.urduName} - {BUSINESS_INFO.tagline}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Providing certified agri-inputs and high-efficiency drone spray mechanization to farmers across Kot Addu and surrounding areas.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>100% Genuine Certified Dealer</span>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Products / مصنوعات
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  Pesticides &amp; Insecticides (کیڑے مار ادویات)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  Organic &amp; Mineral Fertilizers (کھادیں)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  Certified Hybrid Seeds (مصدقہ بیج)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Agricultural Drone Spray (ڈرون اسپرے)
                </a>
              </li>
              <li>
                <a href="#offers" className="hover:text-emerald-400 transition-colors">
                  Seasonal Protection Bundles (خصوصی پیکجز)
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation / فوری روابط
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">Home (مرکزی صفحہ)</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">Product Showcase</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Drone Spray Booking</a>
              </li>
              <li>
                <a href="#offers" className="hover:text-emerald-400 transition-colors">Seasonal Packages</a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">About Kissan Agro</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">Store Location &amp; Map</a>
              </li>
            </ul>
          </div>

          {/* Store Contacts */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Kot Addu Hub / پتہ اور رابطہ
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-emerald-400 shrink-0 mt-0.5">location_on</span>
                <div>
                  <div>Kot Addu Bypass, Madina Chowk, Punjab, Pakistan</div>
                  <div className="urdu-text text-[11px] text-slate-500 mt-0.5" dir="rtl">
                    کوٹ ادو بائی پاس، مدینہ چوک
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-emerald-400 shrink-0">call</span>
                <a href={BUSINESS_INFO.telLink} className="hover:text-white font-semibold transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-emerald-400 shrink-0">chat</span>
                <a
                  href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold transition-colors"
                >
                  WhatsApp: +92 342 6400074
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Ibrahim Klasra Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-300 font-bold">
              Made by Ibrahim Klasra
            </span>
            <span>•</span>
            <span className="urdu-text text-emerald-400 font-medium" dir="rtl">
              کوٹ ادو، پنجاب، پاکستان
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
