import React from 'react';
import { BUSINESS_INFO } from '../data/agroData';

export const AboutSection: React.FC = () => {
  const creatorImgUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBggLftPTMSD3oW8j0W1-4NTrXq48JmmjB-iIPzYLc7DAlePBe3fNoNft5vSt5vd0DXEhiuR6osdFU5ieOXtzxp7kSQ4Clo5qlJ0EATQ3jKTKfnZnkaAKZFzLte852qhwxFDBXGzhY70OXU4VzCafDHPysHH683fZLs1XB_KlCCtTrZ1rsiWfvesbqEjc9bpMziP1bMZrIUYwLHs4_HN9RuciTS-qdL-Vpo5g4PHXvj6AW7pIMXihav';

  return (
    <section id="about" className="py-12 lg:py-16 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* About Narrative */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Our Commitment &amp; Heritage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 mt-1 mb-2 tracking-tight">
              {BUSINESS_INFO.name}
            </h2>
            <h3 className="urdu-text text-xl sm:text-2xl font-bold text-emerald-700 mb-4" dir="rtl">
              کسانوں کے ساتھ، بہتر فصلوں کے لیے
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">
              Headquartered at Madina Chowk, Kot Addu Bypass, Kissan Agro Traders serves as an indispensable bridge between leading agricultural scientific innovation and practical field farming. We equip growers with certified inputs and precision equipment that enhance yield while lowering waste.
            </p>
            <p className="urdu-text text-sm sm:text-base text-slate-700 mb-6 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 leading-relaxed shadow-xs" dir="rtl">
              ہماری ترجیح ہے کہ کسان کو بغیر ملاوٹ، تصدیق شدہ کھاد، معیاری بیج اور ادویات مناسب وقت پر دستیاب ہوں۔ ہم جدید ڈرون سروس کے ذریعے خطے کے کسانوں کو دورِ جدید کے تقاضوں سے ہم آہنگ کر رہے ہیں۔
            </p>
            <div className="flex items-center gap-6 pt-4 border-t border-slate-200">
              <div>
                <div className="text-lg sm:text-xl font-extrabold text-slate-800">Kot Addu</div>
                <div className="text-xs text-slate-500 font-medium urdu-text" dir="rtl">مدینہ چوک</div>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div className="text-lg sm:text-xl font-extrabold text-emerald-700">100%</div>
                <div className="text-xs text-slate-500 font-medium">Verified Inputs</div>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div className="text-lg sm:text-xl font-extrabold text-slate-800">On-Call</div>
                <div className="text-xs text-slate-500 font-medium">Farm Advisory</div>
              </div>
            </div>
          </div>

          {/* Craftsman Highlight: Ibrahim Klasra */}
          <div className="lg:col-span-5">
            <div
              id="creator-highlight-card"
              className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-2 border-emerald-500 shadow-xs transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={creatorImgUrl}
                    alt="Portrait of Ibrahim Klasra, Web & Digital Architect"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold transition-colors duration-300 group-hover:text-emerald-600">Digital Partner</p>
                  <h4 className="text-lg sm:text-xl font-extrabold text-slate-800 mt-0.5 transition-colors duration-300 group-hover:text-emerald-800">
                    Ibrahim Klasra
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Web &amp; Digital Architect
                  </p>
                  <div className="urdu-text text-xs text-emerald-700 font-bold mt-1" dir="rtl">
                    ویب سائٹ کے تخلیق کار: ابراہیم کلاسرہ
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-500">
                <p className="leading-relaxed">
                  Dedicated to modernizing Pakistan&apos;s agricultural digital presence with high-performance bilingual design systems, clean architectural clarity, and frictionless WhatsApp commerce.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-slate-700">Made by Ibrahim Klasra</span>
                <span className="material-symbols-outlined text-emerald-600 text-[18px] transition-transform duration-300 group-hover:rotate-12">verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
