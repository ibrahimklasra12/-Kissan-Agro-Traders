import React from 'react';
import { SEASONAL_OFFERS, BUSINESS_INFO } from '../data/agroData';

export const OffersSection: React.FC = () => {
  return (
    <section id="offers" className="py-12 lg:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 rounded-3xl p-6 sm:p-8 lg:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Background Ambient Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-800/60 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-emerald-800">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-emerald-800 border border-emerald-600/40 text-emerald-200 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">local_offer</span>
                  محدود مدت کے لیے خصوصی پیشکش (Seasonal Offers)
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-3 tracking-tight">
                  Special Seasonal Packages &amp; Farm Bulk Inquiries
                </h2>
                <p className="text-sm sm:text-base text-emerald-100 max-w-2xl mt-1.5 leading-relaxed font-light">
                  Cost-effective agricultural bundles for cotton and wheat crop cycles in Kot Addu and surrounding tehsils.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  id="offers-main-whatsapp-btn"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-2xl shadow-sm transition-all active:scale-95"
                  href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hello Kissan Agro Traders, I want to inquire about your Special Seasonal Packages.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Inquire on WhatsApp / تفصیلات لیں</span>
                </a>
              </div>
            </div>

            {/* Offers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
              {SEASONAL_OFFERS.map((offer) => (
                <div
                  key={offer.id}
                  id={`offer-card-${offer.id}`}
                  className="bg-emerald-800/40 backdrop-blur-sm rounded-3xl p-6 border border-emerald-700/50 flex flex-col justify-between hover:border-emerald-500/60 transition-all shadow-sm"
                >
                  <div>
                    <div className="text-emerald-300 text-[11px] font-bold uppercase tracking-wider mb-2">
                      {offer.packageNumber}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white">{offer.title}</h3>
                    <p className="urdu-text text-sm text-emerald-100 mb-4 leading-relaxed" dir="rtl">
                      {offer.descriptionUrdu}
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/90 mb-6">
                      {offer.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    id={`offer-link-${offer.id}`}
                    className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 border border-white/10"
                    href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(offer.inquiryMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Order via WhatsApp</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
