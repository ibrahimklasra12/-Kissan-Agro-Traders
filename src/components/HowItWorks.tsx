import React from 'react';
import { BUSINESS_INFO } from '../data/agroData';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      badge: 'Step 01',
      title: 'Product Choose Karein',
      urduTitle: 'پروڈکٹ یا سروس منتخب کریں',
      description:
        'Hamari website par certified pesticides, fertilizers, hybrid seeds, ya drone spray service dekhein aur apni fasal ki zaroorat ke mutabiq chunain.',
      icon: 'inventory_2',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      step: '02',
      badge: 'Step 02',
      title: 'WhatsApp Par Rabta Karein',
      urduTitle: 'واٹس ایپ پر رابطہ کریں',
      description:
        'Har product card ya helpline par click karein. WhatsApp par auto-filled message ke sath rate aur availability confirmation hasil karein.',
      icon: 'chat',
      color: 'from-green-500 to-emerald-600',
    },
    {
      step: '03',
      badge: 'Step 03',
      title: 'Delivery / Service Receive Karein',
      urduTitle: 'فارم ڈیلیوری یا سروس حاصل کریں',
      description:
        '100% Free Farm Delivery ke sath apna saman seedha deray par mangwayein, ya schedule ke mutabiq drone spray team se spray karwayein.',
      icon: 'local_shipping',
      color: 'from-teal-500 to-emerald-700',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 lg:py-16 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200/60">
            <span className="material-symbols-outlined text-[16px] text-emerald-600">alt_route</span>
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
            Kaise Kaam Karta Hai? / <span className="urdu-text font-bold text-emerald-700" dir="rtl">کیسے کام کرتا ہے؟</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Seedha, aasan aur baghair kisi mushkil ke Kissan Agro Traders se rabta aur farm delivery hasil karein.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Step Number Watermark */}
              <span className="absolute top-4 right-5 text-4xl sm:text-5xl font-black text-slate-100 group-hover:text-emerald-50 transition-colors pointer-events-none select-none">
                {item.step}
              </span>

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110`}>
                    <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                  </div>
                  <span className="text-xs font-extrabold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 mb-1 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>

                <h4 className="urdu-text text-sm font-bold text-emerald-700 mb-3" dir="rtl">
                  {item.urduTitle}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-semibold">
                <span>Free Farmer Assistance</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="mt-10 p-5 rounded-3xl bg-white border border-emerald-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">support_agent</span>
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-800">Koi sawal ya makhsoos spray timing chahiye?</div>
              <div className="text-xs text-slate-500">Hamara staff aap ko mukammal rehnumai faraham kare ga.</div>
            </div>
          </div>

          <a
            href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Assalam o Alaikum Kissan Agro Traders, mujhe rehnumai darkar hai.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-bold rounded-2xl flex items-center gap-2 shadow-xs hover:shadow-md transition-all whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>WhatsApp Par Rabta Karein</span>
          </a>
        </div>
      </div>
    </section>
  );
};
