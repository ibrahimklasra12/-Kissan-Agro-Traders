import React from 'react';
import { BUSINESS_INFO } from '../data/agroData';

interface CategoryHighlightsProps {
  onSelectCategory: (category: 'all' | 'pesticides' | 'fertilizers' | 'seeds' | 'drone') => void;
  onOpenDroneBooking?: () => void;
  onOpenCropAdvisory?: () => void;
}

export const CategoryHighlights: React.FC<CategoryHighlightsProps> = ({
  onSelectCategory,
  onOpenDroneBooking,
  onOpenCropAdvisory,
}) => {
  return (
    <section id="services-highlight" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200/60">
          <span className="material-symbols-outlined text-[16px] text-emerald-600">agriculture</span>
          <span>Comprehensive Agro Solutions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
          🌾 Hamari Services / <span className="urdu-text font-bold text-emerald-700" dir="rtl">ہماری سروسز</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-2">
          Top-tier crop protection, soil nourishment, certified seeds, precision drone sprays, doorstep free delivery, aur mufeed crop advisory.
        </p>
      </div>

      {/* 6-Pillar Interactive Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* 1. 🌱 Pesticides */}
        <div
          id="cat-card-pesticides"
          className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-emerald-400 group transition-all duration-300"
        >
          <div>
            <div className="h-28 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl mb-4 flex items-center justify-center text-orange-600 overflow-hidden border border-orange-100/80">
              <span className="material-symbols-outlined text-[40px] transition-transform duration-500 group-hover:scale-120 group-hover:rotate-6">pest_control</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">🌱 Pesticides</span>
              <span className="urdu-text text-xs text-slate-400" dir="rtl">حفاظتی ادویات</span>
            </div>
            <h3 className="font-extrabold text-slate-800 text-lg mt-1 group-hover:text-emerald-800 transition-colors">Pesticides</h3>
            <h4 className="urdu-text text-emerald-700 text-base font-bold" dir="rtl">
              کیڑے مار ادویات
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              Targeted solutions against stem borers, sucking pests, weeds, and fungal diseases for cotton, wheat, rice, and sugarcane.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, what is the price and availability of Pesticides for crops?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full py-2.5 px-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-xs font-bold text-center transition-all duration-300 flex items-center justify-between shadow-xs hover:shadow-md border border-green-400/40 active:scale-95"
            >
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>WhatsApp for Price</span>
              </div>
              <span className="urdu-text text-[11px]" dir="rtl">ریٹ معلوم کریں</span>
            </a>
            <div className="flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-emerald-50/90 text-emerald-800 text-[11px] font-bold">
              <span>🚚 Free Delivery (مفت ڈیلیوری)</span>
            </div>
            <button
              type="button"
              onClick={() => {
                onSelectCategory('pesticides');
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-2 bg-slate-100 hover:bg-emerald-700 hover:text-white rounded-xl text-xs font-semibold text-slate-700 text-center transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              <span>View Pesticides Catalog</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* 2. 🌾 Fertilizers */}
        <div
          id="cat-card-fertilizers"
          className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-emerald-400 group transition-all duration-300"
        >
          <div>
            <div className="h-28 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl mb-4 flex items-center justify-center text-blue-600 overflow-hidden border border-blue-100/80">
              <span className="material-symbols-outlined text-[40px] transition-transform duration-500 group-hover:scale-120 group-hover:rotate-6">compost</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">🌾 Fertilizers</span>
              <span className="urdu-text text-xs text-slate-400" dir="rtl">زرخیزی مٹی</span>
            </div>
            <h3 className="font-extrabold text-slate-800 text-lg mt-1 group-hover:text-emerald-800 transition-colors">Fertilizers</h3>
            <h4 className="urdu-text text-emerald-700 text-base font-bold" dir="rtl">
              کھادیں و بایو فارمولیشن
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              Certified macro &amp; micro nutrients, potash, chelated zinc, amino acids, and bio-organic stimulants tailored for soil vitality.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, what is the price and availability of Fertilizers?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full py-2.5 px-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-xs font-bold text-center transition-all duration-300 flex items-center justify-between shadow-xs hover:shadow-md border border-green-400/40 active:scale-95"
            >
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>WhatsApp for Price</span>
              </div>
              <span className="urdu-text text-[11px]" dir="rtl">ریٹ معلوم کریں</span>
            </a>
            <div className="flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-emerald-50/90 text-emerald-800 text-[11px] font-bold">
              <span>🚚 Free Delivery (مفت ڈیلیوری)</span>
            </div>
            <button
              type="button"
              onClick={() => {
                onSelectCategory('fertilizers');
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-2 bg-slate-100 hover:bg-emerald-700 hover:text-white rounded-xl text-xs font-semibold text-slate-700 text-center transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              <span>View Fertilizers Catalog</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* 3. 🌻 Seeds */}
        <div
          id="cat-card-seeds"
          className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-emerald-400 group transition-all duration-300"
        >
          <div>
            <div className="h-28 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl mb-4 flex items-center justify-center text-emerald-700 overflow-hidden border border-emerald-100/80">
              <span className="material-symbols-outlined text-[40px] transition-transform duration-500 group-hover:scale-120 group-hover:rotate-6">grain</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">🌻 Seeds</span>
              <span className="urdu-text text-xs text-slate-400" dir="rtl">اعلیٰ بیج</span>
            </div>
            <h3 className="font-extrabold text-slate-800 text-lg mt-1 group-hover:text-emerald-800 transition-colors">Premium Seeds</h3>
            <h4 className="urdu-text text-emerald-700 text-base font-bold" dir="rtl">
              مصدقہ ہائبرڈ بیج
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              Germination-guaranteed certified seeds for hybrid rice, pearl millet, cotton varieties, and high-yielding field crops.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, what is the price and availability of Certified Seeds?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full py-2.5 px-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-xs font-bold text-center transition-all duration-300 flex items-center justify-between shadow-xs hover:shadow-md border border-green-400/40 active:scale-95"
            >
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>WhatsApp for Price</span>
              </div>
              <span className="urdu-text text-[11px]" dir="rtl">ریٹ معلوم کریں</span>
            </a>
            <div className="flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-emerald-50/90 text-emerald-800 text-[11px] font-bold">
              <span>🚚 Free Delivery (مفت ڈیلیوری)</span>
            </div>
            <button
              type="button"
              onClick={() => {
                onSelectCategory('seeds');
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-2 bg-slate-100 hover:bg-emerald-700 hover:text-white rounded-xl text-xs font-semibold text-slate-700 text-center transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              <span>View Certified Seeds</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* 4. 🚁 Drone Spray */}
        <div
          id="cat-card-drone"
          className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-purple-400 group transition-all duration-300"
        >
          <div>
            <div className="h-28 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl mb-4 flex items-center justify-center text-purple-600 overflow-hidden border border-purple-100/80">
              <span className="material-symbols-outlined text-[40px] transition-transform duration-500 group-hover:scale-120 group-hover:rotate-6">flight_takeoff</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600">🚁 Drone Spray</span>
              <span className="urdu-text text-xs text-slate-400" dir="rtl">ڈرون اسپرے</span>
            </div>
            <h3 className="font-extrabold text-slate-800 text-lg mt-1 group-hover:text-purple-900 transition-colors">Drone Spray</h3>
            <h4 className="urdu-text text-emerald-700 text-base font-bold" dir="rtl">
              جدید زرعی اسپرے
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              Fast, uniform aerial application saving 30% chemical and up to 90% water with ZERO crop trampling across Kot Addu.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              id="cat-drone-book-btn"
              type="button"
              onClick={() => {
                if (onOpenDroneBooking) {
                  onOpenDroneBooking();
                } else {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-shimmer w-full py-2.5 px-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold text-center transition-all duration-300 flex items-center justify-between shadow-xs hover:shadow-md border border-purple-400/40 active:scale-95 cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">flight_takeoff</span>
                <span>🚁 Book Drone Spray</span>
              </div>
              <span className="urdu-text text-[11px]" dir="rtl">بک کریں</span>
            </button>
            <div className="flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-purple-50 text-purple-800 text-[11px] font-bold border border-purple-200/50">
              <span>🚁 15-20 Mins / Acre Coverage</span>
            </div>
            <a
              href="#services"
              className="w-full py-2 bg-slate-100 hover:bg-purple-600 hover:text-white rounded-xl text-xs font-semibold text-slate-700 text-center transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              <span>Explore Drone Fleet</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* 5. 🚚 Free Delivery */}
        <div
          id="cat-card-delivery"
          className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-emerald-400 group transition-all duration-300"
        >
          <div>
            <div className="h-28 bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl mb-4 flex items-center justify-center text-emerald-700 overflow-hidden border border-emerald-100/80">
              <span className="material-symbols-outlined text-[40px] transition-transform duration-500 group-hover:scale-120 group-hover:rotate-6">local_shipping</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">🚚 Free Delivery</span>
              <span className="urdu-text text-xs text-slate-400" dir="rtl">مفت ترسیل</span>
            </div>
            <h3 className="font-extrabold text-slate-800 text-lg mt-1 group-hover:text-emerald-800 transition-colors">Free Delivery</h3>
            <h4 className="urdu-text text-emerald-700 text-base font-bold" dir="rtl">
              مفت فارم ڈیلیوری
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              Order pesticides, fertilizers, or seeds directly to your farm or dera with 100% free delivery across Kot Addu and surrounding tehsils.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, I want to order products with Free Delivery to my farm.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full py-2.5 px-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-xs font-bold text-center transition-all duration-300 flex items-center justify-between shadow-xs hover:shadow-md border border-green-400/40 active:scale-95"
            >
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>WhatsApp Order</span>
              </div>
              <span className="urdu-text text-[11px]" dir="rtl">آرڈر کریں</span>
            </a>
            <div className="flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-emerald-50/90 text-emerald-800 text-[11px] font-bold">
              <span>🚚 100% Free Doorstep Delivery</span>
            </div>
            <a
              href={BUSINESS_INFO.telLink}
              className="w-full py-2 bg-slate-100 hover:bg-emerald-700 hover:text-white rounded-xl text-xs font-semibold text-slate-700 text-center transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">call</span>
              <span>Call Helpline: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* 6. 🌱 Crop Advisory (Requested 6th Service) */}
        <div
          id="cat-card-advisory"
          className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-emerald-500 group transition-all duration-300"
        >
          <div>
            <div className="h-28 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl mb-4 flex items-center justify-center text-emerald-800 overflow-hidden border border-emerald-200/80">
              <span className="material-symbols-outlined text-[40px] transition-transform duration-500 group-hover:scale-120 group-hover:rotate-6">psychology_alt</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">🌱 Crop Advisory</span>
              <span className="urdu-text text-xs text-slate-400" dir="rtl">زرعی رہنمائی</span>
            </div>
            <h3 className="font-extrabold text-slate-800 text-lg mt-1 group-hover:text-emerald-800 transition-colors">Crop Advisory</h3>
            <h4 className="urdu-text text-emerald-700 text-base font-bold" dir="rtl">
              فصل کے لیے مفت مشورہ
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              Fasal ki bimari, keeron ke hamle, aur paidawar badhane ke liye Kissan Agro Traders ke mahireen se barah-e-rast mashwara hasil karein.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              id="cat-advisory-btn"
              type="button"
              onClick={() => {
                if (onOpenCropAdvisory) {
                  onOpenCropAdvisory();
                } else {
                  document.getElementById('crop-advisory')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-shimmer w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold text-center transition-all duration-300 flex items-center justify-between shadow-xs hover:shadow-md border border-emerald-500/40 active:scale-95 cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">psychology_alt</span>
                <span>🌱 Crop Advisory</span>
              </div>
              <span className="urdu-text text-[11px]" dir="rtl">مشورہ حاصل کریں</span>
            </button>
            <div className="flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-emerald-50/90 text-emerald-800 text-[11px] font-bold">
              <span>🌾 Free Expert Consultation</span>
            </div>
            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Assalam o Alaikum! Mujhe Crop Advisory chahiye. Kissan Agro Traders se agricultural guidance darkar hai.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-slate-100 hover:bg-emerald-700 hover:text-white rounded-xl text-xs font-semibold text-slate-700 text-center transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">chat</span>
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
