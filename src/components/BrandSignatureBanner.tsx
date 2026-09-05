import React from 'react';
import { BUSINESS_INFO } from '../data/agroData';
import { KissanLogo } from './KissanLogo';

export const BrandSignatureBanner: React.FC = () => {
  return (
    <section
      id="brand-signature"
      className="relative overflow-hidden bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white py-12 sm:py-16 border-y border-emerald-500/30"
    >
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Brand Monogram / Logo */}
        <div className="inline-flex justify-center items-center mb-4">
          <KissanLogo size={52} animated={false} />
        </div>

        {/* Brand Title */}
        <h3 className="text-xs sm:text-sm uppercase tracking-widest font-black text-emerald-300 mb-2">
          {BUSINESS_INFO.name} • مدینہ چوک کوٹ ادو
        </h3>

        {/* Primary Urdu Brand Signature Banner Heading */}
        <h2
          className="urdu-text text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-normal mb-3 drop-shadow-sm"
          dir="rtl"
        >
          کسان کی ترقی ہماری اولین ترجیح
        </h2>

        {/* Subtext */}
        <p className="text-amber-300 font-bold text-sm sm:text-base tracking-widest uppercase mb-4">
          Quality • Trust • Service
        </p>

        <p className="text-emerald-100/80 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-6">
          Original Agricultural Inputs, Certified Field Diagnostics, and Modern Aerial Sprays for Every Farmer in Pakistan.
        </p>

        {/* Verified Pillars */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-semibold text-emerald-200">
          <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full border border-white/15">
            <span className="material-symbols-outlined text-[15px] text-amber-300">verified</span>
            100% Genuine
          </span>
          <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full border border-white/15">
            <span className="material-symbols-outlined text-[15px] text-amber-300">local_shipping</span>
            Free Farm Delivery
          </span>
          <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full border border-white/15">
            <span className="material-symbols-outlined text-[15px] text-amber-300">flight_takeoff</span>
            Drone Sprays
          </span>
        </div>
      </div>
    </section>
  );
};
