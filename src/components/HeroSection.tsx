import React from 'react';
import { BUSINESS_INFO } from '../data/agroData';
import kissanShopImg from '../assets/images/kissan_shop_real_1788444483844.jpg';
import { IbrahimCompactCard } from './IbrahimCompactCard';
import { LiveWeatherCard } from './LiveWeatherCard';
import { useLanguage } from '../context/LanguageContext';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const HeroSection: React.FC = () => {
  const { isUrdu, language } = useLanguage();
  const shopBgUrl = kissanShopImg || `${import.meta.env.BASE_URL}images/shop.jpg`;
  const heroWhatsappUrl = getGeneralWhatsAppUrl(language);

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
                    {isUrdu
                      ? '🌱 تصدیق شدہ زرعی ادویات و کھادیں | کوٹ ادو، پاکستان'
                      : '🌱 Certified Pesticides & Fertilizers | Kot Addu, Pakistan'}
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="mb-2">
                <h1 className="text-lg sm:text-2xl font-black text-amber-300 tracking-wider uppercase drop-shadow-xs">
                  {BUSINESS_INFO.name}
                </h1>
                <span className="text-xs font-semibold text-emerald-300/90 tracking-wide uppercase">
                  {isUrdu
                    ? 'کسانوں کا قابلِ اعتماد زرعی مرکز • مدینہ چوک کوٹ ادو'
                    : 'Trusted Agricultural Center • Madina Chowk Kot Addu'}
                </span>
              </div>

              {/* Requested Primary Heading */}
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3 drop-shadow-sm ${
                  isUrdu ? 'urdu-text' : 'font-sans'
                }`}
                dir={isUrdu ? 'rtl' : 'ltr'}
              >
                {isUrdu ? 'کسان کی ترقی ہماری اولین ترجیح' : 'Farmer Prosperity is Our Highest Priority'}
              </h2>

              {/* Verified Business Leadership - Clean Text Badge */}
              <div className="inline-flex flex-wrap items-center gap-2.5 bg-black/50 border border-emerald-400/35 backdrop-blur-md px-4 py-2 rounded-2xl mb-5 text-emerald-200 shadow-md transition-transform duration-300 hover:scale-[1.02]">
                <span className="material-symbols-outlined text-[18px] text-amber-400">shield_person</span>
                <span className="text-sm font-extrabold text-white tracking-wide">
                  {isUrdu ? 'محمد طارق کلاسرا (اونر / پروپرائیٹر)' : 'Muhammad Tariq Klasra (Owner)'}
                </span>
                <span className="text-xs text-emerald-300 font-semibold">
                  • {isUrdu ? 'کسان ایگرو ٹریڈرز' : 'Kissan Agro Traders'}
                </span>
              </div>

              {/* Tagline */}
              <p className="text-emerald-100/90 text-sm sm:text-base mb-6 font-normal max-w-2xl leading-relaxed">
                {isUrdu
                  ? 'پاکستان کی زرخیز مٹی اور موسمی حالات کے مطابق اعلیٰ معیار کی زرعی ادویات، کھادیں اور مصدقہ ہائبرڈ بیج۔ کوٹ ادو اور مضافات میں جدید ترین ڈرون اسپرے سروس دستیاب ہے۔'
                  : 'High-quality Pesticides, Fertilizers, and Seeds tailored for Pakistan’s soil. Expert Drone Spray services available across Kot Addu and surrounding areas.'}
              </p>

              {/* Dual CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mb-6">
                <a
                  id="hero-whatsapp-cta"
                  className="btn-shimmer bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 sm:py-4 px-6 rounded-2xl flex items-center justify-between group transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-[1.02] active:scale-95 border border-green-400/40"
                  href={heroWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[22px] transition-transform duration-300 group-hover:rotate-6">chat</span>
                    <span className="text-base sm:text-lg font-bold">
                      {isUrdu ? 'WhatsApp پر رابطہ کریں' : 'Contact on WhatsApp'}
                    </span>
                  </div>
                  <span className="bg-white/20 p-1.5 sm:p-2 rounded-xl group-hover:bg-white/30 transition-all duration-300 group-hover:translate-x-0.5">
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </span>
                </a>
                <a
                  id="hero-call-cta"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 sm:py-4 px-6 rounded-2xl border border-white/20 flex items-center justify-between transition-all duration-300 hover:scale-[1.02] backdrop-blur-md shadow-xs hover:shadow-md"
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-amber-300">near_me</span>
                    <span>{isUrdu ? 'راستہ دیکھیں' : 'Get Directions'}</span>
                  </div>
                  <span className="text-xs text-emerald-200">
                    {isUrdu ? 'مدینہ چوک' : 'Madina Chowk'}
                  </span>
                </a>
              </div>

              {/* Small Ibrahim Klasra Creator Card (Inside Hero Section) */}
              <div className="mb-6">
                <IbrahimCompactCard />
              </div>
            </div>

            {/* Metrics Footer Bar */}
            <div className="relative z-10 pt-5 border-t border-emerald-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-emerald-200">
              <div className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1">
                <span className="material-symbols-outlined text-amber-400 text-[20px]">verified_user</span>
                <span className="font-medium">{isUrdu ? '100% اصل کوالٹی' : '100% Genuine'}</span>
              </div>
              <div className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1">
                <span className="material-symbols-outlined text-amber-400 text-[20px]">psychology_alt</span>
                <span className="font-medium">{isUrdu ? 'مفت زرعی رہنمائی' : 'Crop Advisory'}</span>
              </div>
              <div className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1">
                <span className="material-symbols-outlined text-amber-400 text-[20px]">flight_takeoff</span>
                <span className="font-medium">{isUrdu ? 'جدید ڈرون اسپرے' : 'Drone Sprays'}</span>
              </div>
              <div className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1">
                <span className="material-symbols-outlined text-amber-400 text-[20px]">pin_drop</span>
                <span className="font-medium">{isUrdu ? 'مدینہ چوک کوٹ ادو' : 'Madina Chowk'}</span>
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
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">
                      {isUrdu ? 'زرعی مرکز' : 'Agricultural Station'}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800" dir={isUrdu ? 'rtl' : 'ltr'}>
                      {isUrdu ? 'مدینہ چوک کوٹ ادو' : 'Madina Chowk Kot Addu'}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold transition-transform duration-300 group-hover:scale-110">
                    <span className="material-symbols-outlined text-[20px]">storefront</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 transition-colors duration-200 hover:bg-slate-100/80">
                    <div className="text-xs text-slate-500 font-medium">
                      {isUrdu ? 'دکان کا پتہ:' : 'Physical Location:'}
                    </div>
                    <div className="font-semibold text-slate-800 text-sm mt-0.5">
                      {isUrdu ? BUSINESS_INFO.addressUrdu : BUSINESS_INFO.address}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 transition-colors duration-200 hover:bg-slate-100/80">
                    <div className="text-xs text-slate-500 font-medium">
                      {isUrdu ? 'براہ راست ہیلپ لائن:' : 'Direct Helpline:'}
                    </div>
                    <a href={BUSINESS_INFO.telLink} className="font-bold text-emerald-700 text-base block hover:underline mt-0.5">
                      {BUSINESS_INFO.phone}
                    </a>
                    {/* Free Delivery directly underneath Direct Helpline */}
                    <div className="mt-2 pt-2 border-t border-slate-200/70 flex items-center justify-between">
                      <div className="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                        <span>{isUrdu ? 'مفت ہوم ڈیلیوری' : 'Free Delivery'}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-600">
                        {isUrdu ? 'کوٹ ادو و مضافات' : 'Kot Addu & Surrounding'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-semibold text-emerald-700">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  {isUrdu
                    ? `اوقات: ${BUSINESS_INFO.openingHoursUrdu}`
                    : `Active Time: ${BUSINESS_INFO.openingHours}`}
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                  {isUrdu ? 'کھلا ہے' : 'Open'}
                </span>
              </div>
            </div>

            {/* 🌦️ Live Farm Weather Card (Open-Meteo Real Data) */}
            <LiveWeatherCard />
          </div>
        </div>
      </div>
    </section>
  );
};

