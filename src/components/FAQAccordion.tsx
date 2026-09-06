import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/agroData';

interface FAQItem {
  id: string;
  questionUrdu: string;
  questionEnglish: string;
  answerUrdu: string;
  answerEnglish: string;
}

const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    questionUrdu: 'کیا کسان ایگرو ٹریڈرز کی تمام ادویات اور کھادیں 100% اصل ہیں؟',
    questionEnglish: 'Are all pesticides and fertilizers 100% authentic and government approved?',
    answerUrdu:
      'جی ہاں، بالکل۔ کسان ایگرو ٹریڈرز حکومت پنجاب اور زرعی محکمہ کے باقاعدہ رجسٹرڈ ڈیلر ہیں۔ ہمارے پاس سن کراپ (Suncrop Group) اور دیگر مستند کمپنیوں کا 100% اصل، تازہ اور کمپنی سیل بند اسٹاک دستیاب ہوتا ہے۔ جعلی یا دو نمبری مال کی ہمارے پاس صفر گنجائش ہے۔',
    answerEnglish:
      'Yes, 100%. We are authorized dealers supplying only authentic, sealed batch products from reputable manufacturers like Suncrop Group with zero tolerance for counterfeits.',
  },
  {
    id: 'faq-2',
    questionUrdu: 'مفت فارم ڈیلیوری (Free Farm Delivery) کن علاقوں میں دستیاب ہے؟',
    questionEnglish: 'Which areas qualify for Free Farm Delivery in Kot Addu?',
    answerUrdu:
      'کوٹ ادو شہر، بائی پاس، مدینہ چوک، سنوان، چوک سرور شہید اور ملحقہ دیہات میں زمیندار بھائیوں کے ڈیرے اور کھیت تک مفت ڈیلیوری فراہم کی جاتی ہے۔ واٹس ایپ پر آرڈر لکھوائیں اور مطلوبہ سامان اپنے پاس حاصل کریں۔',
    answerEnglish:
      'Free delivery is offered across Kot Addu city, Bypass, Madina Chowk, Sanawan, Chowk Sarwar Shaheed, and adjacent farmlands directly to your dera or field.',
  },
  {
    id: 'faq-3',
    questionUrdu: 'زرعی ڈرون اسپرے (Agro Drone Spray) کیسے بک کیا جا سکتا ہے؟',
    questionEnglish: 'How do I schedule and book a Drone Spray service?',
    answerUrdu:
      'آپ ویب سائٹ پر موجود "ڈرون اسپرے بک کریں" بٹن یا واٹس ایپ کے ذریعے اپنے رقبے اور فصل کا اندراج کر سکتے ہیں۔ ہماری تجربہ کار ٹیم بیٹری بیک اپ اور مکمل اسپرے یونٹ لے کر شیڈول کے مطابق آپ کے کھیت پہنچ جاتی ہے۔ 25+ ایکڑ کے لیے خصوصی رعایت بھی دستیاب ہے۔',
    answerEnglish:
      'Click the Drone Spray Booking button on our website or contact our WhatsApp with your acreage and crop. Our professional piloting unit arrives on-site with full battery and water logistics.',
  },
  {
    id: 'faq-4',
    questionUrdu: 'مفت زرعی مشورہ (Crop Advisory) اور تصویر سے تشخیص کیسے حاصل کریں؟',
    questionEnglish: 'How does the free Crop Problem Photo Advisory work?',
    answerUrdu:
      'اگر آپ کی فصل پر کوئی بیماری، سنڈی، جڑی بوٹی یا غذائی کمی ظاہر ہو رہی ہو تو موبائل سے صاف تصویر لے کر ہمارے کراپ ایڈوائزری فارم یا براہِ راست واٹس ایپ پر بھیجیں۔ ہمارے زرعی ماہرین فوری خوراک اور اسپرے نسخہ تجویز کریں گے۔',
    answerEnglish:
      'Take a clear photo of the affected crop leaf, pest, or soil condition and submit it via our Crop Advisory modal or direct WhatsApp for instant diagnosis and expert treatment guidance.',
  },
  {
    id: 'faq-5',
    questionUrdu: 'دکان کے اوقات کار اور رابطہ نمبر کیا ہے؟',
    questionEnglish: 'What are the shop operating hours and helpline contact numbers?',
    answerUrdu:
      `ہماری دکان مدینہ چوک بائی پاس کوٹ ادو پر روزانہ صبح 7:00 بجے سے شام 6:30 بجے تک کھلی رہتی ہے۔ ہیلپ لائن ${BUSINESS_INFO.phone} اور واٹس ایپ پر کسان بھائی کسی بھی وقت 24/7 رہنمائی لے سکتے ہیں۔`,
    answerEnglish:
      `Our physical outlet at Madina Chowk, Kot Addu Bypass is open daily from 7:00 AM to 6:30 PM PKT. Our helpline (${BUSINESS_INFO.phone}) and WhatsApp are accessible for farmer inquiries.`,
  },
];

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-12 lg:py-16 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-emerald-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-extrabold uppercase tracking-wider mb-2 border border-emerald-200/60 dark:border-emerald-800/60">
            <span className="material-symbols-outlined text-[16px] text-emerald-600">help</span>
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight">
            عام پوچھے جانے والے سوالات / <span className="urdu-text text-emerald-700 dark:text-emerald-400 font-bold" dir="rtl">رہنمائی و جوابات</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
            کسان ایگرو ٹریڈرز کی خدمات، ڈیلیوری، ڈرون اسپرے اور ادویات کی اصلیت سے متعلق اہم معلومات۔
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-500/60 bg-emerald-50/20 dark:bg-emerald-950/20 shadow-md shadow-emerald-900/5'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 hover:border-slate-300'
                }`}
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer select-none transition-colors"
                >
                  <div className="flex-1 pr-2">
                    <span className="urdu-text text-base sm:text-lg font-bold text-slate-900 dark:text-white block leading-snug" dir="rtl">
                      {faq.questionUrdu}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-0.5 block">
                      {faq.questionEnglish}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-emerald-600 text-white rotate-180'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
                  </div>
                </button>

                {/* Animated Body */}
                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-5 pb-5 pt-1 border-t border-emerald-100/70 dark:border-emerald-900/30 animate-in fade-in duration-200"
                  >
                    <p className="urdu-text text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium mb-2" dir="rtl">
                      {faq.answerUrdu}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {faq.answerEnglish}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Question CTA */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              کوئی اور سوال ہے جو یہاں موجود نہیں؟
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              ہمارے زرعی ماہرین سے براہ راست واٹس ایپ یا فون پر بات کریں۔
            </p>
          </div>
          <a
            href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('السلام علیکم! کسان ایگرو ٹریڈرز، مجھے ایک سوال پوچھنا ہے۔')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[17px]">chat</span>
            <span>واٹس ایپ پر پوچھیں</span>
          </a>
        </div>
      </div>
    </section>
  );
};
