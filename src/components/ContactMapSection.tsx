import React from 'react';
import { BUSINESS_INFO } from '../data/agroData';
import { ShopStatusBadge } from './ShopStatusBadge';

// ============================================================================
// 📍 GOOGLE MAPS CONFIGURATION
// You can edit or paste your exact Google Maps pin link below:
// Example: "https://maps.app.goo.gl/your-exact-pin"
// ============================================================================
export const GOOGLE_MAPS_URL =
  'https://maps.google.com/?q=Kot+Addu+Bypass+Madina+Chowk+Pakistan';

export const ContactMapSection: React.FC = () => {
  const mapImgUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCJoz_X0nmnXeJCoiE6NncIEN8OsBPda3B4MxtPmC7_QKChm3XKiicwmOhoi-qqBLlHCArM4DcAtpezy3l3cwKlOtbaAMwJ7DAro4SU5zd0MOM3pmhqaDkyKdY3BBJZ6Ng5Q0YuAnRXSZ61CB0P_h9hlBPLdZuMN3iQxQ52TAbVBJ9T4uh8ktrFnZEeOmMNMJVwAT-FuSWHrQYQ7ucxABilWbGMmS7JCjJ_V9btYVkSP66_7CAGSi3-';

  return (
    <section id="contact" className="py-12 lg:py-16 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200/60">
            <span className="material-symbols-outlined text-[16px] text-emerald-600">storefront</span>
            <span>Direct Visit &amp; 24/7 Helpline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
            Hamari Location &amp; Contact / <span className="urdu-text font-bold text-emerald-700" dir="rtl">ہماری لوکیشن و رابطہ</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Madina Chowk, Kot Addu Bypass par hamari dukan tashreef layein ya direct helpline aur WhatsApp par rabta karein.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Feature 6: Clean Premium Contact Section */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm card-premium-hover flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                <span>Direct Helpline &amp; Farm Advisory</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 mt-1 mb-1 tracking-tight">
                Contact Kissan Agro Traders
              </h3>
              <p className="urdu-text text-lg sm:text-xl font-bold text-emerald-700 mb-6" dir="rtl">
                رابطہ کریں اور زرعی رہنمائی حاصل کریں
              </p>

              <div className="space-y-5">
                {/* 1. 📱 Call Now / Direct Helpline */}
                <div className="flex items-start gap-3.5 group">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 border border-blue-100">
                    <span className="material-symbols-outlined text-[22px]">call</span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                      <span>📱 Call Now (Direct Helpline)</span>
                      <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.2 rounded-full font-bold">24/7</span>
                    </div>
                    <a
                      id="contact-phone-link"
                      href={BUSINESS_INFO.telLink}
                      className="text-base sm:text-lg font-black text-slate-900 hover:text-emerald-700 mt-0.5 block transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <div className="text-xs text-slate-500">Direct call for immediate pesticide and seed booking</div>
                  </div>
                </div>

                {/* 2. 💬 WhatsApp */}
                <div className="flex items-start gap-3.5 group">
                  <div className="w-11 h-11 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 border border-green-100">
                    <span className="material-symbols-outlined text-[22px]">chat</span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">
                      <span>💬 WhatsApp Helpline</span>
                    </div>
                    <a
                      id="contact-whatsapp-link"
                      href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, I have an inquiry.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-black text-green-600 hover:text-green-700 mt-0.5 block transition-colors"
                    >
                      +92 342 6400074
                    </a>
                    <div className="text-xs text-slate-500">Crop disease diagnosis &amp; rate confirmation</div>
                  </div>
                </div>

                {/* 3. 📍 Shop Location */}
                <div className="flex items-start gap-3.5 group">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 border border-emerald-100">
                    <span className="material-symbols-outlined text-[22px]">location_on</span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">📍 Shop Location</div>
                    <div className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">{BUSINESS_INFO.address}</div>
                    <div className="urdu-text text-xs text-emerald-700 font-bold mt-0.5" dir="rtl">
                      {BUSINESS_INFO.addressUrdu}
                    </div>
                  </div>
                </div>

                {/* 4. 🕐 Opening Hours */}
                <div className="flex items-start gap-3.5 group">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 border border-amber-100">
                    <span className="material-symbols-outlined text-[22px]">schedule</span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm flex items-center gap-2">
                      <span>🕐 Opening Hours</span>
                      <ShopStatusBadge />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-700 font-semibold mt-0.5">
                      8:00 AM — 8:00 PM (Daily)
                    </div>
                    <div className="urdu-text text-xs text-slate-500" dir="rtl">
                      ہفتے کے 7 دن کسان بھائیوں کی خدمت میں کھلا ہے (واٹس ایپ ہیلپ لائن 24/7)
                    </div>
                  </div>
                </div>
              </div>

              {/* Free Delivery Preservation Badge */}
              <div className="mt-5 p-3 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-between text-xs font-bold text-emerald-800">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-emerald-600">local_shipping</span>
                  <span>🚚 100% Free Farm Delivery</span>
                </div>
                <span className="urdu-text" dir="rtl">مفت ڈیلیوری</span>
              </div>
            </div>

            {/* Quick Action Contact Buttons */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-3">
              <a
                id="contact-action-whatsapp"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-2xl transition-all duration-200 active:scale-95 shadow-xs hover:shadow-md"
                href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, I need direct assistance.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp کریں</span>
              </a>
              <a
                id="contact-action-call"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold py-3 px-5 rounded-2xl transition-all duration-200 hover:scale-[1.02]"
                href={BUSINESS_INFO.telLink}
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Feature 5: Shop Location & Google Maps Section */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm card-premium-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Physical Store &amp; Coordinates
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-800 flex items-center gap-2">
                    <span>📍 Hamari Location</span>
                    <span className="urdu-text text-emerald-700" dir="rtl">(مدینہ چوک)</span>
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/50">
                  Easy Highway Access
                </span>
              </div>

              {/* 🗺️ Google Maps Area */}
              <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner group">
                <img
                  src={mapImgUrl}
                  alt="Stylized road map layout of Kot Addu Bypass and Madina Chowk junction in Punjab Pakistan"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Location Floating Marker */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-slate-900/95 text-white p-3.5 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-3 animate-bounce backdrop-blur-md">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold shadow-xs">
                      <span className="material-symbols-outlined text-[20px]">storefront</span>
                    </div>
                    <div>
                      <div className="font-black text-xs sm:text-sm tracking-wide">KISSAN AGRO TRADERS</div>
                      <div className="text-[11px] text-emerald-300 font-semibold">📍 Madina Chowk, Kot Addu Bypass</div>
                    </div>
                  </div>
                </div>

                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-bold text-slate-800 border border-slate-200/60 shadow-xs">
                  🗺️ Map Area: Kot Addu Bypass Junction
                </div>
              </div>

              {/* Directions Guide */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-800 text-xs sm:text-sm flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">directions_car</span>
                    <span>Kot Addu Bypass Access</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Direct access on main highway, suitable for tractor trolleys, loaders, and cars.
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-800 text-xs sm:text-sm flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">near_me</span>
                    <span>Famous Landmark</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Madina Chowk crossing, prominent Kissan Agro Traders signage visible.
                  </div>
                </div>
              </div>
            </div>

            {/* 🧭 Get Directions Button (Feature 5) */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <a
                id="get-directions-btn"
                className="btn-shimmer inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-extrabold px-5 py-3 rounded-2xl transition-all shadow-xs hover:shadow-md active:scale-95"
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[19px]">directions</span>
                <span>🧭 Get Directions (راستہ دیکھیں)</span>
              </a>

              <a
                id="open-in-google-maps"
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-emerald-700 text-xs sm:text-sm font-bold hover:underline"
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Open in Google Maps</span>
                <span className="material-symbols-outlined text-[17px]">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
