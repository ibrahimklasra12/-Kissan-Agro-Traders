import React from 'react';
import { BUSINESS_INFO } from '../data/agroData';

export const DroneServicesSection: React.FC = () => {
  const droneActionImg =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBXO7-V_0OnehdWikYDJxgL58_EOd2aFBnvS2yAiSMLSxi6iqwzm-RWaPoLZ5oHCODdAjmeJmR_c3paNMm8dCY9wOiAAp10tnJBq9f-ggLLcrB2nNHOE7GA-i1nCQ9spRK9fJe8V7_UFdLku1dZ0tGkeCGHeExdsricWQ1cLVZmlLh_T5jEmI1yV7C3X6aI1rzHptOFXYnD-0vTwM1lLFiKd2aJO_ktu39-lcJ0fvTDcj8nNIh1NY33';

  return (
    <section id="services" className="py-12 lg:py-16 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Imagery with Drone Action */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-4/3 group">
              <img
                src={droneActionImg}
                alt="Modern precision hexacopter agriculture spray drone hovering above green crop canopy spraying fine mist droplets"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 text-white border border-white/10 flex items-center justify-between shadow-lg transition-transform duration-300 group-hover:translate-y-[-2px]">
                <div>
                  <span className="text-xs text-emerald-400 font-bold">Fast Coverage</span>
                  <div className="text-base sm:text-lg font-extrabold">15-20 Mins / Acre</div>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div>
                  <span className="text-xs text-emerald-400 font-bold">Zero Crop Loss</span>
                  <div className="text-base sm:text-lg font-extrabold">0% Field Trampling</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content & Information */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
              <span className="material-symbols-outlined text-[16px]">flight</span>
              <span>Next-Gen Farm Mechanization</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 mb-2 tracking-tight">
              Drone Spray Service - <span className="urdu-text text-emerald-700" dir="rtl">جدید ڈرون اسپرے سروس</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-500 mb-4 leading-relaxed">
              Uniform droplet distribution, minimal chemical wastage, and rapid coverage for extensive farmland across Kot Addu and adjoining districts.
            </p>

            <p className="urdu-text text-sm sm:text-base text-slate-700 bg-slate-50 p-5 rounded-2xl border border-slate-200 mb-6 leading-relaxed" dir="rtl">
              کھیتوں میں جدید، تیز اور مؤثر ڈرون اسپرے سروس۔ دستی اسپرے کی مشقت اور ادویات کے ضیاع سے نجات۔ پودوں کے اوپر سے نیچے تک مکمل دوا کی رسائی۔
            </p>

            {/* Key Advantages List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-600 text-[22px] mt-0.5">timer</span>
                <div>
                  <div className="font-bold text-slate-800 text-sm">Rapid Turnaround</div>
                  <div className="text-xs text-slate-500">Spray dozens of acres in hours instead of multiple days.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-600 text-[22px] mt-0.5">water_drop</span>
                <div>
                  <div className="font-bold text-slate-800 text-sm">Water &amp; Fuel Savings</div>
                  <div className="text-xs text-slate-500">Ultra-low volume nozzles drastically cut water requirements.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-600 text-[22px] mt-0.5">target</span>
                <div>
                  <div className="font-bold text-slate-800 text-sm">Precision Penetration</div>
                  <div className="text-xs text-slate-500">Propeller downdraft forces mist deep into dense foliage.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-600 text-[22px] mt-0.5">health_and_safety</span>
                <div>
                  <div className="font-bold text-slate-800 text-sm">Safe for Labor</div>
                  <div className="text-xs text-slate-500">Eliminates toxic chemical exposure to field laborers.</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                id="drone-book-whatsapp-btn"
                className="btn-shimmer inline-flex items-center justify-between gap-3 bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-2xl shadow-md hover:shadow-green-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-95 border border-green-400/40"
                href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, what is the price per acre for Drone Spray Service?')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>WhatsApp for Price &amp; Booking</span>
                </div>
                <span className="urdu-text text-xs text-white/90" dir="rtl">ریٹ معلوم کریں</span>
              </a>
              <a
                id="drone-call-pilot-btn"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold px-5 py-3.5 rounded-2xl transition-all duration-200 hover:scale-[1.01]"
                href={BUSINESS_INFO.telLink}
              >
                <span className="material-symbols-outlined text-[20px] text-emerald-700">call</span>
                <span>Call Helpline: +92 342 6400074</span>
              </a>
            </div>

            {/* Free Delivery / Farm Survey Badge directly underneath */}
            <div className="mt-3 inline-flex items-center gap-2 py-1.5 px-3.5 rounded-xl bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-bold">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">local_shipping</span>
              <span>🚚 Free Delivery (مفت فارم معائنہ و ڈیلیوری)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
