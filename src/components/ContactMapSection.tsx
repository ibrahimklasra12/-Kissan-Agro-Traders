import React from 'react';
import { BUSINESS_INFO } from '../data/agroData';

export const ContactMapSection: React.FC = () => {
  const mapImgUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCJoz_X0nmnXeJCoiE6NncIEN8OsBPda3B4MxtPmC7_QKChm3XKiicwmOhoi-qqBLlHCArM4DcAtpezy3l3cwKlOtbaAMwJ7DAro4SU5zd0MOM3pmhqaDkyKdY3BBJZ6Ng5Q0YuAnRXSZ61CB0P_h9hlBPLdZuMN3iQxQ52TAbVBJ9T4uh8ktrFnZEeOmMNMJVwAT-FuSWHrQYQ7ucxABilWbGMmS7JCjJ_V9btYVkSP66_7CAGSi3-';

  return (
    <section id="contact" className="py-12 lg:py-16 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact Information Block */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                <span>Reach Out Today</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mt-1 mb-2 tracking-tight">
                Contact &amp; Farm Advisory
              </h2>
              <p className="urdu-text text-xl sm:text-2xl font-bold text-emerald-700 mb-6" dir="rtl">
                رابطہ کریں اور زرعی مشورہ حاصل کریں
              </p>

              <div className="space-y-6">
                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">location_on</span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm sm:text-base">Physical Store Location</div>
                    <div className="text-xs sm:text-sm text-slate-500 mt-0.5">{BUSINESS_INFO.address}</div>
                    <div className="urdu-text text-xs text-emerald-700 font-bold mt-1" dir="rtl">
                      {BUSINESS_INFO.addressUrdu}
                    </div>
                  </div>
                </div>

                {/* Phone Call Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">call</span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm sm:text-base">Direct Line</div>
                    <a
                      id="contact-phone-link"
                      href={BUSINESS_INFO.telLink}
                      className="text-base sm:text-lg font-bold text-slate-800 hover:text-emerald-700 mt-0.5 block transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <div className="text-xs text-slate-500">Available 7 days a week for urgent spray requests</div>
                  </div>
                </div>

                {/* WhatsApp Chat Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">chat</span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm sm:text-base">WhatsApp Agro Support</div>
                    <a
                      id="contact-whatsapp-link"
                      href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, I have an inquiry.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-bold text-green-600 hover:text-green-700 mt-0.5 block transition-colors"
                    >
                      +92 342 6400074
                    </a>
                    <div className="text-xs text-slate-500">Send photos of crop pests for immediate dosage advice</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Contact Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-3">
              <a
                id="contact-action-whatsapp"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white text-xs sm:text-sm font-bold py-3.5 px-5 rounded-2xl transition-all active:scale-95 shadow-sm"
                href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, I need direct assistance.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp کریں</span>
              </a>
              <a
                id="contact-action-call"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold py-3.5 px-5 rounded-2xl transition-colors"
                href={BUSINESS_INFO.telLink}
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Map Card & Route Directions */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Store Directions</span>
                  <h3 className="text-lg font-bold text-slate-800">Kot Addu Hub Location</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                  Easy Access
                </span>
              </div>

              {/* Simulated Map Container */}
              <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={mapImgUrl}
                  alt="Stylized road map layout of Kot Addu Bypass and Madina Chowk junction in Punjab Pakistan"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Location Floating Marker */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-slate-900/90 text-white p-3 rounded-2xl shadow-xl border border-white/15 flex items-center gap-3 animate-bounce backdrop-blur-md">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold">
                      <span className="material-symbols-outlined text-[18px]">storefront</span>
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm">KISSAN AGRO TRADERS</div>
                      <div className="text-xs text-slate-300">Madina Chowk, Kot Addu</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directions Guide */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-800 text-xs sm:text-sm flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">directions_car</span>
                    <span>Via Kot Addu Bypass</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Easily reachable for tractor trollies and supply vehicles right on main highway.
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-800 text-xs sm:text-sm flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">near_me</span>
                    <span>Landmark</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Madina Chowk crossing, prominent signage visible on approach.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <a
                id="get-directions-btn"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl transition-colors"
                href="https://www.google.com/maps/search/?api=1&query=Kot+Addu+Bypass,+Madina+Chowk,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px] text-emerald-600">directions</span>
                <span>Get Directions / رہنمائی حاصل کریں</span>
              </a>

              <a
                id="open-in-google-maps"
                className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 text-xs sm:text-sm font-bold hover:underline"
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Open in Google Maps / راستہ دیکھیں</span>
                <span className="material-symbols-outlined text-[17px]">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
