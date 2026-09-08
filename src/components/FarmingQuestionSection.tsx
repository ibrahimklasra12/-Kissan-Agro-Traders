import React from 'react';
import { FarmingQuestionForm } from './FarmingQuestionForm';
import { BUSINESS_INFO } from '../data/agroData';
import { useLanguage } from '../context/LanguageContext';

interface FarmingQuestionSectionProps {
  onOpenConsultation?: () => void;
}

export const FarmingQuestionSection: React.FC<FarmingQuestionSectionProps> = () => {
  const { isUrdu } = useLanguage();

  return (
    <section id="farming-question-section" dir={isUrdu ? 'rtl' : 'ltr'} className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Informational Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 px-3.5 py-1.5 rounded-full text-emerald-800 dark:text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px] text-emerald-600">contact_support</span>
            <span>{isUrdu ? 'مفت زرعی رہنمائی و مشورہ' : 'Free Agricultural Q&A'}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            {isUrdu ? 'فصل کا سوال پوچھیں اور ماہر نسخہ پائیں' : 'Ask Any Farming Question & Get Expert Advice'}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {isUrdu
              ? 'گندم، مکئی، کپاس، باغات یا سبزیوں میں کسی بھی بیماری، کیڑے یا جڑی بوٹی کی علامات دیکھیں تو فوراً فارم پر کریں یا براہِ راست واٹس ایپ پر کسان ایگرو ٹریڈرز سے رابطہ کریں۔'
              : 'If you notice signs of crop disease, pest infestation, or weed problems in wheat, cotton, corn, orchards, or vegetables, submit your query here or connect directly via WhatsApp.'}
          </p>

          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>{isUrdu ? '100% مفت اور فوری رہنمائی' : '100% Free & Prompt Expert Guidance'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
              <span className="material-symbols-outlined text-[18px]">psychology</span>
              <span>{isUrdu ? 'تجربہ کار زرعی ماہرین کا تجویز کردہ اسپرے' : 'Scientifically Recommended Dosages & Sprays'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
              <span className="material-symbols-outlined text-[18px]">local_shipping</span>
              <span>{isUrdu ? 'کوٹ ادو اور ملحقہ دیہات میں مفت فارم ڈیلیوری' : 'Free Farm Delivery Across Kot Addu'}</span>
            </div>
          </div>

          {/* Quick Call Out Banner */}
          <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between gap-3 shadow-sm">
            <div>
              <div className="text-[11px] text-slate-400">
                {isUrdu ? 'ہیلپ لائن پر براہِ راست بات کریں' : 'Call Direct On Helpline'}
              </div>
              <div className="text-base font-black text-emerald-400" dir="ltr">{BUSINESS_INFO.phone}</div>
            </div>
            <a
              href={BUSINESS_INFO.telLink}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              <span>{isUrdu ? 'کال کریں' : 'Call Now'}</span>
            </a>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-7">
          <FarmingQuestionForm />
        </div>
      </div>
    </section>
  );
};
