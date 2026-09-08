import React from 'react';
import { BUSINESS_INFO } from '../data/agroData';
import { KissanLogo } from './KissanLogo';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { isUrdu } = useLanguage();

  return (
    <footer id="site-footer" dir={isUrdu ? 'rtl' : 'ltr'} className="bg-slate-900 text-slate-400 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="shrink-0">
                <KissanLogo size={44} animated={false} />
              </div>
              <span className="text-base font-extrabold text-white tracking-tight">
                {isUrdu ? BUSINESS_INFO.urduName : BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-sm font-bold text-emerald-400 mb-3">
              {isUrdu ? `${BUSINESS_INFO.urduName} — ${BUSINESS_INFO.tagline}` : `${BUSINESS_INFO.name} — ${BUSINESS_INFO.englishTagline}`}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              {isUrdu
                ? 'کوٹ ادو اور مضافاتی علاقوں کے کسان بھائیوں کے لیے مصدقہ زرعی ادویات، معیاری کھادیں، ہائبرڈ بیج اور جدید ترین ڈرون اسپرے سروس۔'
                : 'Providing certified agricultural inputs, premium fertilizers, hybrid seeds, and high-efficiency drone spray mechanization to farmers across Kot Addu and surrounding areas.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>{isUrdu ? '100% تصدیق شدہ اصل زرعی ڈیلر' : '100% Genuine Certified Dealer'}</span>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {isUrdu ? 'اہم مصنوعات و خدمات' : 'Core Products & Services'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  {isUrdu ? 'کیڑے مار و فنگس کش ادویات' : 'Pesticides & Fungicides'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  {isUrdu ? 'نامیاتی و کیمیائی کھادیں' : 'Organic & Mineral Fertilizers'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  {isUrdu ? 'مصدقہ ہائبرڈ بیج' : 'Certified Hybrid Seeds'}
                </a>
              </li>
              <li>
                <a href="#drone-spray-section" className="hover:text-emerald-400 transition-colors">
                  {isUrdu ? 'زرعی ڈرون اسپرے سروس' : 'Agricultural Drone Spray Service'}
                </a>
              </li>
              <li>
                <a href="#offers" className="hover:text-emerald-400 transition-colors">
                  {isUrdu ? 'موسمی حفاظتی پیکجز و آفرز' : 'Seasonal Crop Protection Packages'}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {isUrdu ? 'فوری روابط' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">
                  {isUrdu ? 'مرکزی صفحہ (ہوم)' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  {isUrdu ? 'مصنوعات کی فہرست' : 'Product Showcase'}
                </a>
              </li>
              <li>
                <a href="#crop-advisory" className="hover:text-emerald-400 transition-colors">
                  {isUrdu ? 'مفت زرعی مشورہ' : 'Free Crop Advisory'}
                </a>
              </li>
              <li>
                <a href="#drone-spray-section" className="hover:text-emerald-400 transition-colors">
                  {isUrdu ? 'ڈرون اسپرے بکنگ' : 'Drone Spray Booking'}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-400 transition-colors">
                  {isUrdu ? 'کسانوں کے تاثرات' : 'Customer Reviews'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  {isUrdu ? 'دکان لوکیشن و نقشہ' : 'Store Location & Map'}
                </a>
              </li>
            </ul>
          </div>

          {/* Store Contacts */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {isUrdu ? 'پتہ اور ہیلپ لائن' : 'Address & Helpline'}
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-emerald-400 shrink-0 mt-0.5">location_on</span>
                <div>
                  <div className="text-slate-300 font-medium">
                    {isUrdu ? BUSINESS_INFO.addressUrdu : BUSINESS_INFO.address}
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
                  href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(isUrdu ? 'السلام علیکم کسان ایگرو ٹریڈرز' : 'Salam Kissan Agro Traders')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold transition-colors"
                >
                  WhatsApp: +92 342 6400074
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="material-symbols-outlined text-[18px] text-emerald-400 shrink-0">schedule</span>
                <span>{isUrdu ? `اوقات: ${BUSINESS_INFO.openingHoursUrdu}` : `Hours: ${BUSINESS_INFO.openingHours}`}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Ibrahim Klasra Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {isUrdu ? BUSINESS_INFO.urduName : BUSINESS_INFO.name}. {isUrdu ? 'جملہ حقوق محفوظ ہیں۔' : 'All rights reserved.'}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-300 font-bold">
              {isUrdu ? 'ویب ڈیزائنر: ابراہیم کلاسرا' : 'Designed & Developed by Ibrahim Klasra'}
            </span>
            <span>•</span>
            <span className="text-emerald-400 font-medium">
              {isUrdu ? 'کوٹ ادو، پنجاب، پاکستان' : 'Kot Addu, Punjab, Pakistan'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
