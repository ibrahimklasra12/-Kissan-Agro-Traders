import React from 'react';
import { BUSINESS_INFO } from '../data/agroData';

interface CategoryHighlightsProps {
  onSelectCategory: (category: 'all' | 'pesticides' | 'fertilizers' | 'seeds' | 'drone') => void;
}

export const CategoryHighlights: React.FC<CategoryHighlightsProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories-highlight" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* 1. Pesticides */}
        <div
          id="cat-card-pesticides"
          className="bg-white rounded-3xl border border-slate-200 p-5 flex flex-col justify-between shadow-sm card-premium-hover hover:border-orange-200 group"
        >
          <div>
            <div className="h-28 bg-orange-50 rounded-2xl mb-4 flex items-center justify-center text-orange-600 overflow-hidden">
              <span className="material-symbols-outlined text-[36px] transition-transform duration-500 group-hover:scale-115">pest_control</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600">Crop Protection</span>
              <span className="urdu-text text-xs text-slate-400" dir="rtl">حفاظتی ادویات</span>
            </div>
            <h3 className="font-bold text-slate-800 text-lg mt-1 group-hover:text-orange-950 transition-colors">Pesticides</h3>
            <h4 className="urdu-text text-emerald-700 text-base font-bold" dir="rtl">
              فصلوں کی حفاظت
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Targeted solutions against stem borers, sucking pests, and fungal diseases for cotton, wheat, and sugarcane.
            </p>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2">
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
              className="w-full py-1.5 bg-slate-100 hover:bg-emerald-600 hover:text-white rounded-xl text-xs font-semibold text-slate-700 text-center transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              <span>View Products</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* 2. Fertilizers */}
        <div
          id="cat-card-fertilizers"
          className="bg-white rounded-3xl border border-slate-200 p-5 flex flex-col justify-between shadow-sm card-premium-hover hover:border-blue-200 group"
        >
          <div>
            <div className="h-28 bg-blue-50 rounded-2xl mb-4 flex items-center justify-center text-blue-600 overflow-hidden">
              <span className="material-symbols-outlined text-[36px] transition-transform duration-500 group-hover:scale-115">compost</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Soil Vitality</span>
              <span className="urdu-text text-xs text-slate-400" dir="rtl">زرخیزی مٹی</span>
            </div>
            <h3 className="font-bold text-slate-800 text-lg mt-1 group-hover:text-blue-950 transition-colors">Fertilizers</h3>
            <h4 className="urdu-text text-emerald-700 text-base font-bold" dir="rtl">
              بہتر غذائیت، زیادہ پیداوار
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Certified macro & micro nutrients, potash, zinc, and bio-organic stimulants tailored for local soil.
            </p>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2">
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
              className="w-full py-1.5 bg-slate-100 hover:bg-emerald-600 hover:text-white rounded-xl text-xs font-semibold text-slate-700 text-center transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              <span>View Soil Formulas</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* 3. Seeds */}
        <div
          id="cat-card-seeds"
          className="bg-white rounded-3xl border border-slate-200 p-5 flex flex-col justify-between shadow-sm card-premium-hover hover:border-emerald-200 group"
        >
          <div>
            <div className="h-28 bg-emerald-50 rounded-2xl mb-4 flex items-center justify-center text-emerald-700 overflow-hidden">
              <span className="material-symbols-outlined text-[36px] transition-transform duration-500 group-hover:scale-115">grain</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">High Yield</span>
              <span className="urdu-text text-xs text-slate-400" dir="rtl">اعلیٰ کوالٹی</span>
            </div>
            <h3 className="font-bold text-slate-800 text-lg mt-1 group-hover:text-emerald-950 transition-colors">Premium Seeds</h3>
            <h4 className="urdu-text text-emerald-700 text-base font-bold" dir="rtl">
              مصدقہ ہائبرڈ بیج
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Germination-guaranteed certified seeds for seasonal wheat varieties, cotton hybrids, and high-yield crops.
            </p>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2">
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
              className="w-full py-1.5 bg-slate-100 hover:bg-emerald-600 hover:text-white rounded-xl text-xs font-semibold text-slate-700 text-center transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              <span>View Certified Seeds</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* 4. Drone Spray */}
        <div
          id="cat-card-drone"
          className="bg-white rounded-3xl border border-slate-200 p-5 flex flex-col justify-between shadow-sm card-premium-hover hover:border-purple-200 group"
        >
          <div>
            <div className="h-28 bg-purple-50 rounded-2xl mb-4 flex items-center justify-center text-purple-600 overflow-hidden">
              <span className="material-symbols-outlined text-[36px] transition-transform duration-500 group-hover:scale-115">flight_takeoff</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">Precision Tech</span>
              <span className="urdu-text text-xs text-slate-400" dir="rtl">ڈرون اسپرے</span>
            </div>
            <h3 className="font-bold text-slate-800 text-lg mt-1 group-hover:text-purple-950 transition-colors">Drone Services</h3>
            <h4 className="urdu-text text-emerald-700 text-base font-bold" dir="rtl">
              جدید زرعی اسپرے سروس
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Fast, uniform aerial application saving 30% chemical and up to 90% water with ZERO crop trampling.
            </p>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, what are the booking charges and price per acre for Drone Spray?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full py-2.5 px-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-xs font-bold text-center transition-all duration-300 flex items-center justify-between shadow-xs hover:shadow-md border border-green-400/40 active:scale-95"
            >
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>WhatsApp for Price / Booking</span>
              </div>
              <span className="urdu-text text-[11px]" dir="rtl">ریٹ معلوم کریں</span>
            </a>
            <div className="flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-emerald-50/90 text-emerald-800 text-[11px] font-bold">
              <span>🚚 Free Delivery (مفت فارم وزٹ)</span>
            </div>
            <a
              href="#services"
              className="w-full py-1.5 bg-slate-100 hover:bg-emerald-600 hover:text-white rounded-xl text-xs font-semibold text-slate-700 text-center transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              <span>Explore Drone Fleet</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
