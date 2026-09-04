import React from 'react';
import { BUSINESS_INFO } from '../data/agroData';

interface CategoryHighlightsProps {
  onSelectCategory: (category: 'all' | 'pesticides' | 'fertilizers' | 'seeds' | 'drone') => void;
  onOpenDroneBooking?: () => void;
}

export const CategoryHighlights: React.FC<CategoryHighlightsProps> = ({
  onSelectCategory,
  onOpenDroneBooking,
}) => {
  return (
    <section id="services-highlight" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200/60">
          <span className="material-symbols-outlined text-[16px] text-emerald-600">agriculture</span>
          <span>Comprehensive Agro Solutions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
          🌾 Hamari Services / <span className="urdu-text font-bold text-emerald-700" dir="rtl">ہماری سروسز</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-2">
          Top-tier crop protection, soil nourishment, certified seeds, precision drone sprays, and doorstep free delivery for every farmer.
        </p>
      </div>

      {/* 5-Pillar Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4.5">
        {/* 1. 🌱 Pesticides */}
        <div
          id="cat-card-pesticides"
          className="bg-white rounded-3xl border border-slate-200 p-5 flex flex-col justify-between shadow-xs hover:shadow-md card-premium-hover hover:border-orange-300 group transition-all duration-300"
        >
          <div>
            <div className="h-24 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl mb-4 flex items-center justify-center text-orange-600 overflow-hidden border border-orange-100">
              <span className="material-symbols-outlined text-[34px] transition-transform duration-500 group-hover:scale-115">pest_control</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600">🌱 Pesticides</span>
              <span className="urdu-text text-xs text-slate-400" dir="rtl">حفاظتی ادویات</span>
            </div>
            <h3 className="font-bold text-slate-800 text-base mt-1 group-hover:text-orange-950 transition-colors">Pesticides</h3>
            <h4 className="urdu-text text-emerald-700 text-sm font-bold" dir="rtl">
              کیڑے مار ادویات
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Targeted solutions against stem borers, sucking pests, and fungal diseases for cotton, wheat, and sugarcane.
            </p>
          </div>

          <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, what is the price and availability of Pesticides for crops?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full py-2.5 px-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-xs font-bold text-center transition-all duration-300 flex items-center justify-between shadow-xs hover:shadow-md border border-green-400/40 active:scale-95"
            >
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px]">chat</span>
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
              className="w-full py-1.5 bg-slate-100 hover:bg-emerald-600 hover:text-white rounded-xl text-xs font-semibold text-slate-700 text-center transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              <span>View Products</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* 2. 🌾 Fertilizers */}
        <div
          id="cat-card-fertilizers"
          className="bg-white rounded-3xl border border-slate-200 p-5 flex flex-col justify-between shadow-xs hover:shadow-md card-premium-hover hover:border-blue-300 group transition-all duration-300"
        >
          <div>
            <div className="h-24 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl mb-4 flex items-center justify-center text-blue-600 overflow-hidden border border-blue-100">
              <span className="material-symbols-outlined text-[34px] transition-transform duration-500 group-hover:scale-115">compost</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">🌾 Fertilizers</span>
              <span className="urdu-text text-xs text-slate-400" dir="rtl">زرخیزی مٹی</span>
            </div>
            <h3 className="font-bold text-slate-800 text-base mt-1 group-hover:text-blue-950 transition-colors">Fertilizers</h3>
            <h4 className="urdu-text text-emerald-700 text-sm font-bold" dir="rtl">
              کھادیں و بایو فارمولیشن
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Certified macro &amp; micro nutrients, potash, zinc, and bio-organic stimulants tailored for local soil.
            </p>
          </div>

          <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, what is the price and availability of Fertilizers?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full py-2.5 px-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-xs font-bold text-center transition-all duration-300 flex items-center justify-between shadow-xs hover:shadow-md border border-green-400/40 active:scale-95"
            >
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px]">chat</span>
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
              className="w-full py-1.5 bg-slate-100 hover:bg-emerald-600 hover:text-white rounded-xl text-xs font-semibold text-slate-700 text-center transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              <span>View Fertilizers</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* 3. 🌻 Seeds */}
        <div
          id="cat-card-seeds"
          className="bg-white rounded-3xl border border-slate-200 p-5 flex flex-col justify-between shadow-xs hover:shadow-md card-premium-hover hover:border-emerald-300 group transition-all duration-300"
        >
          <div>
            <div className="h-24 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl mb-4 flex items-center justify-center text-emerald-700 overflow-hidden border border-emerald-100">
              <span className="material-symbols-outlined text-[34px] transition-transform duration-500 group-hover:scale-115">grain</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">🌻 Seeds</span>
              <span className="urdu-text text-xs text-slate-400" dir="rtl">اعلیٰ بیج</span>
            </div>
            <h3 className="font-bold text-slate-800 text-base mt-1 group-hover:text-emerald-950 transition-colors">Premium Seeds</h3>
            <h4 className="urdu-text text-emerald-700 text-sm font-bold" dir="rtl">
              مصدقہ ہائبرڈ بیج
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Germination-guaranteed certified seeds for seasonal wheat varieties, cotton hybrids, and high-yield crops.
            </p>
          </div>

          <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, what is the price and availability of Certified Seeds?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full py-2.5 px-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-xs font-bold text-center transition-all duration-300 flex items-center justify-between shadow-xs hover:shadow-md border border-green-400/40 active:scale-95"
            >
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px]">chat</span>
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
              className="w-full py-1.5 bg-slate-100 hover:bg-emerald-600 hover:text-white rounded-xl text-xs font-semibold text-slate-700 text-center transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              <span>View Certified Seeds</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* 4. 🚁 Drone Spray */}
        <div
          id="cat-card-drone"
          className="bg-white rounded-3xl border border-slate-200 p-5 flex flex-col justify-between shadow-xs hover:shadow-md card-premium-hover hover:border-purple-300 group transition-all duration-300"
        >
          <div>
            <div className="h-24 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl mb-4 flex items-center justify-center text-purple-600 overflow-hidden border border-purple-100">
              <span className="material-symbols-outlined text-[34px] transition-transform duration-500 group-hover:scale-115">flight_takeoff</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">🚁 Drone Spray</span>
              <span className="urdu-text text-xs text-slate-400" dir="rtl">ڈرون اسپرے</span>
            </div>
            <h3 className="font-bold text-slate-800 text-base mt-1 group-hover:text-purple-950 transition-colors">Drone Spray</h3>
            <h4 className="urdu-text text-emerald-700 text-sm font-bold" dir="rtl">
              جدید زرعی اسپرے
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Fast, uniform aerial application saving 30% chemical and up to 90% water with ZERO crop trampling.
            </p>
          </div>

          <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-col gap-2">
            <button
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
                <span className="material-symbols-outlined text-[15px]">event</span>
                <span>Drone Spray Book Karein</span>
              </div>
              <span className="urdu-text text-[11px]" dir="rtl">بک کریں</span>
            </button>
            <div className="flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-purple-50 text-purple-800 text-[11px] font-bold border border-purple-200/50">
              <span>🚁 Fast Aerial Spray</span>
            </div>
            <a
              href="#services"
              className="w-full py-1.5 bg-slate-100 hover:bg-purple-600 hover:text-white rounded-xl text-xs font-semibold text-slate-700 text-center transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              <span>Explore Fleet</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* 5. 🚚 Free Delivery */}
        <div
          id="cat-card-delivery"
          className="bg-white rounded-3xl border border-slate-200 p-5 flex flex-col justify-between shadow-xs hover:shadow-md card-premium-hover hover:border-emerald-400 group transition-all duration-300"
        >
          <div>
            <div className="h-24 bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl mb-4 flex items-center justify-center text-emerald-700 overflow-hidden border border-emerald-100">
              <span className="material-symbols-outlined text-[34px] transition-transform duration-500 group-hover:scale-115">local_shipping</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">🚚 Free Delivery</span>
              <span className="urdu-text text-xs text-slate-400" dir="rtl">مفت ترسیل</span>
            </div>
            <h3 className="font-bold text-slate-800 text-base mt-1 group-hover:text-emerald-950 transition-colors">Free Delivery</h3>
            <h4 className="urdu-text text-emerald-700 text-sm font-bold" dir="rtl">
              مفت فارم ڈیلیوری
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Order pesticides, fertilizers, or hybrid seeds directly to your farm or dera with 100% free delivery across Kot Addu.
            </p>
          </div>

          <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, I want to order products with Free Delivery to my farm.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full py-2.5 px-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-xs font-bold text-center transition-all duration-300 flex items-center justify-between shadow-xs hover:shadow-md border border-green-400/40 active:scale-95"
            >
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px]">chat</span>
                <span>WhatsApp Order</span>
              </div>
              <span className="urdu-text text-[11px]" dir="rtl">آرڈر کریں</span>
            </a>
            <div className="flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-emerald-50/90 text-emerald-800 text-[11px] font-bold">
              <span>🚚 100% Free Doorstep Delivery</span>
            </div>
            <a
              href={BUSINESS_INFO.telLink}
              className="w-full py-1.5 bg-slate-100 hover:bg-emerald-600 hover:text-white rounded-xl text-xs font-semibold text-slate-700 text-center transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">call</span>
              <span>Call: 0342-6400074</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
