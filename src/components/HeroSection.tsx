import React from 'react';
import { BUSINESS_INFO } from '../data/agroData';
import kissanShopImg from '../assets/images/kissan_shop_real_1788444483844.jpg';

export const HeroSection: React.FC = () => {
  const shopBgUrl = kissanShopImg || '/images/shop.jpg';

  return (
    <section
      id="home"
      className="relative bg-slate-50 py-6 sm:py-8 lg:py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Cinematic Emerald Hero Showcase with Real Shop Background */}
          <div className="lg:col-span-8 bg-emerald-950 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl flex flex-col justify-between border border-emerald-700/50 transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(6,78,59,0.35)]">
            {/* Real Shop Photo - Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src={shopBgUrl}
                alt="Kissan Agro Traders Real Storefront at Madina Chowk Kot Addu"
                className="w-full h-full object-cover object-center opacity-75 scale-105 transition-transform duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Subtle dark/green gradient overlay for perfect typography legibility while keeping shop recognizable */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/96 via-emerald-950/90 to-emerald-900/65" />
              <div className="absolute inset-0 bg-radial-at-t from-transparent via-emerald-950/40 to-emerald-950/90" />
            </div>

            {/* Ambient emerald & gold lighting blur orbs */}
            <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-emerald-600/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-16 -left-16 w-80 h-80 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header Badges */}
              <div className="mb-4">
                {/* Quality Agricultural Trust Badge */}
                <div className="inline-flex items-center gap-2 bg-emerald-900/80 border border-emerald-400/40 backdrop-blur-md px-4 py-1.5 rounded-full text-emerald-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                  <span className="material-symbols-outlined text-[18px] text-emerald-300">verified</span>
                  <span className="text-xs sm:text-sm font-semibold tracking-wide">
                    🌱 تصدیق شدہ زرعی ادویات و کھادیں | Kot Addu, Pakistan
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="mb-2">
                <h1 className="text-lg sm:text-2xl font-black text-amber-300 tracking-wider uppercase drop-shadow-xs">
                  {BUSINESS_INFO.name}
                </h1>
                <span className="text-xs font-semibold text-emerald-300/90 tracking-wide uppercase">
                  Trusted Agricultural Center • مدینہ چوک کوٹ ادو
                </span>
              </div>

              {/* Requested Primary Heading */}
              <h2 className="urdu-text text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3 drop-shadow-sm" dir="rtl">
                کسان کی ترقی ہماری اولین ترجیح
              </h2>

              {/* Verified Business Leadership - Clean Text Badge (No Fake/AI Photo) */}
              <div className="inline-flex flex-wrap items-center gap-2.5 bg-black/50 border border-emerald-400/35 backdrop-blur-md px-4 py-2 rounded-2xl mb-5 text-emerald-200 shadow-md transition-transform duration-300 hover:scale-[1.02]">
                <span className="material-symbols-outlined text-[18px] text-amber-400">shield_person</span>
                <span className="text-sm font-extrabold text-white tracking-wide">Muhammad Tariq Klasra (Owner)</span>
                <span className="text-xs text-emerald-300 font-semibold">• Kissan Agro Traders</span>
              </div>

              {/* Tagline */}
              <p className="text-emerald-100/90 text-sm sm:text-base mb-6 font-normal max-w-2xl leading-relaxed">
                High-quality Pesticides, Fertilizers, and Seeds tailored for Pakistan&apos;s soil. Expert Drone Spray services available across Kot Addu and surrounding areas.
              </p>

              {/* Dual CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mb-6">
                <a
                  id="hero-whatsapp-cta"
                  className="btn-shimmer bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 sm:py-4 px-6 rounded-2xl flex items-center justify-between group transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-[1.02] active:scale-95 border border-green-400/40"
                  href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('السلام علیکم! کسان ایگرو ٹریڈرز - Muhammad Tariq Klasra، مجھے زرعی رہنمائی اور ادویات کی معلومات درکار ہیں۔')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[22px] transition-transform duration-300 group-hover:rotate-6">chat</span>
                    <span className="urdu-text text-base sm:text-lg font-bold">WhatsApp پر رابطہ کریں</span>
                  </div>
                  <span className="bg-white/20 p-1.5 sm:p-2 rounded-xl group-hover:bg-white/30 transition-all duration-300 group-hover:translate-x-0.5">
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </span>
                </a>
                <a
                  id="hero-call-cta"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 sm:py-4 px-6 rounded-2xl border border-white/20 flex items-center justify-between transition-all duration-300 hover:scale-[1.02] backdrop-blur-md shadow-xs hover:shadow-md"
                  href="https://maps.google.com/?q=Kot+Addu+Bypass+Madina+Chowk+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-amber-300">near_me</span>
                    <span>Get Directions</span>
                  </div>
                  <span className="urdu-text text-xs text-emerald-200" dir="rtl">مدینہ چوک</span>
                </a>
              </div>
            </div>

            {/* Metrics Footer Bar */}
            <div className="relative z-10 pt-5 border-t border-emerald-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-emerald-200">
              <div className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1">
                <span className="material-symbols-outlined text-amber-400 text-[20px]">verified_user</span>
                <span className="font-medium">100% Genuine</span>
              </div>
              <div className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1">
                <span className="material-symbols-outlined text-amber-400 text-[20px]">psychology_alt</span>
                <span className="font-medium">Crop Advisory</span>
              </div>
              <div className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1">
                <span className="material-symbols-outlined text-amber-400 text-[20px]">flight_takeoff</span>
                <span className="font-medium">Drone Sprays</span>
              </div>
              <div className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1">
                <span className="material-symbols-outlined text-amber-400 text-[20px]">pin_drop</span>
                <span className="font-medium">مدینہ چوک</span>
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4 justify-between">
            {/* Service Station Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-1 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Agricultural Station</span>
                    <h3 className="text-lg font-bold text-slate-800 urdu-text" dir="rtl">مدینہ چوک</h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold transition-transform duration-300 group-hover:scale-110">
                    <span className="material-symbols-outlined text-[20px]">storefront</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 transition-colors duration-200 hover:bg-slate-100/80">
                    <div className="text-xs text-slate-500 font-medium">Physical Location:</div>
                    <div className="font-semibold text-slate-800 text-sm mt-0.5">{BUSINESS_INFO.address}</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 transition-colors duration-200 hover:bg-slate-100/80">
                    <div className="text-xs text-slate-500 font-medium">Direct Helpline:</div>
                    <a href={BUSINESS_INFO.telLink} className="font-bold text-emerald-700 text-base block hover:underline mt-0.5">
                      {BUSINESS_INFO.phone}
                    </a>
                    {/* Free Delivery directly underneath Direct Helpline */}
                    <div className="mt-2 pt-2 border-t border-slate-200/70 flex items-center justify-between">
                      <div className="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                        <span>Free Delivery</span>
                      </div>
                      <span className="urdu-text text-[11px] font-semibold text-emerald-600" dir="rtl">مفت ڈیلیوری</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-semibold text-emerald-700">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  Active Time: 7:00 AM — 6:30 PM
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">Open</span>
              </div>
            </div>

            {/* Digital Partner Card (Strictly Preserved) */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden border-2 border-emerald-500 flex-shrink-0 flex items-center justify-center text-slate-700 font-bold text-xs text-center p-1 transition-transform duration-300 group-hover:scale-105">
                IK
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Digital Partner</p>
                <p className="text-sm font-bold text-slate-800">Made by Ibrahim Klasra</p>
                <p className="text-xs text-slate-500 italic">Empowering local agriculture digitally.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

