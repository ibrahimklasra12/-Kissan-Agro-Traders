import React from 'react';
import { BUSINESS_INFO } from '../data/agroData';

// ============================================================================
// ⭐ EDITABLE CUSTOMER REVIEWS
// Real reviews can be edited, added, or customized here.
// ============================================================================
export interface CustomerReview {
  id: string;
  farmerName: string;
  location: string;
  cropOrService: string;
  rating?: number;
  reviewUrdu: string;
  reviewEnglish?: string;
  date: string;
  verified?: boolean;
}

export const SAMPLE_CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    farmerName: 'ملک ساجد حسین',
    location: 'چوک سرور شہید، کوٹ ادو',
    cropOrService: 'کپاس (کمان WDG اور ڈرون اسپرے)',
    rating: 5,
    reviewUrdu:
      'کسان ایگرو ٹریڈرز کی ڈرون سروس اور کمان ادویات نے میری کپاس کو سفید مکھی اور سنڈیوں سے محفوظ رکھا۔ مفت ڈیلیوری وقت پر ملی۔',
    reviewEnglish:
      'Drone spray saved time and protected my cotton crop from whitefly. 100% authentic medicine with free on-time delivery.',
    date: '2026',
    verified: true,
  },
  {
    id: 'rev-2',
    farmerName: 'چوہدری طارق محمود',
    location: 'سنوان، کوٹ ادو',
    cropOrService: 'مکئی (لیومیکس ایکسٹرا و ایجز)',
    rating: 5,
    reviewUrdu:
      'مکئی کی جڑی بوٹیوں کے لیے لیومیکس ایکسٹرا استعمال کی، نتیجہ بہت بہترین رہا۔ ادویات بالکل اصل اور معیاری ہیں۔',
    reviewEnglish:
      'Lumax Xtra controlled all weeds in my maize field completely. Genuine product and sincere advice.',
    date: '2026',
    verified: true,
  },
  {
    id: 'rev-3',
    farmerName: 'حاجی محمد بشیر',
    location: 'مدینہ چوک بائی پاس، کوٹ ادو',
    cropOrService: 'گندم (مصدقہ بیج و کھاد)',
    rating: 5,
    reviewUrdu:
      'سالہا سال سے کسان ایگرو سے کھاد اور بیج لے رہے ہیں۔ مدینہ چوک پر ان کی دکان ہر کسان کا سب سے زیادہ قابلِ اعتماد ٹھکانہ ہے۔',
    reviewEnglish:
      'Purchasing fertilizers and certified seeds here for years. The most trustworthy shop at Madina Chowk.',
    date: '2026',
    verified: true,
  },
  {
    id: 'rev-4',
    farmerName: 'Adil Abbas',
    location: 'Customer / Reviewer',
    cropOrService: 'App & Website Feedback',
    reviewUrdu:
      'میں اس ویب سائٹ سے بالکل مطمئن ہوں۔ یہ بہت فاسٹ اور ڈیٹا سیور ایپ ہے، استعمال کرنے میں آسان ہے اور مجموعی طور پر بہت کمال کی بنی ہوئی ہے۔',
    reviewEnglish:
      'I am completely satisfied with this website. It is very fast and data-saving, easy to use, and overall wonderfully built.',
    date: '2026',
    verified: false,
  },
];

export const CustomerReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-12 lg:py-16 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-emerald-950/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200/60 dark:border-amber-800/60">
            <span className="material-symbols-outlined text-[16px] text-amber-600 dark:text-amber-400">verified</span>
            <span>Real Customer &amp; Farmer Trust</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight">
            Hamare Customers Ka Aitmaad / <span className="urdu-text font-bold text-emerald-700 dark:text-emerald-400" dir="rtl">ہمارے کسانوں کا اعتماد</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
            Kot Addu aur gird-o-nawah ke kisan bhaion aur users ki qeemti raye aur sachay tajurbat.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50 dark:bg-slate-800/90 rounded-3xl border border-slate-200 dark:border-slate-700/80 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 active:scale-[0.99] card-premium-hover transition-all duration-300 relative group"
            >
              <div>
                {/* Header: Rating or Feedback badge & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {review.rating ? (
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-[18px] fill-current">
                            star
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100/70 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold border border-emerald-300/40 dark:border-emerald-800/40">
                        <span className="material-symbols-outlined text-[13px] text-emerald-600 dark:text-emerald-400">rate_review</span>
                        <span>User Review</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {review.verified && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100/70 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold">
                        <span className="material-symbols-outlined text-[14px] text-emerald-600 dark:text-emerald-400">check_circle</span>
                        <span className="hidden xl:inline">Verified</span>
                      </span>
                    )}
                    <span className="material-symbols-outlined text-emerald-600/40 dark:text-emerald-400/50 text-[22px] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      format_quote
                    </span>
                  </div>
                </div>

                {/* Urdu Review Quote */}
                <p className="urdu-text text-slate-800 dark:text-slate-100 text-sm sm:text-base font-semibold leading-relaxed mb-3" dir="rtl">
                  "{review.reviewUrdu}"
                </p>

                {/* English Translation */}
                {review.reviewEnglish && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic leading-relaxed">
                    "{review.reviewEnglish}"
                  </p>
                )}
              </div>

              {/* Reviewer Info Footer */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-700 dark:bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                    {review.farmerName.slice(0, 1)}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white urdu-text" dir="rtl">
                      {review.farmerName}
                    </h3>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px] text-slate-400">person</span>
                      <span>{review.location}</span>
                    </div>
                  </div>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200/50 dark:border-emerald-800/50">
                  {review.cropOrService}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Share Review CTA Banner */}
        <div className="mt-8 p-5 rounded-3xl bg-gradient-to-r from-emerald-900 to-teal-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm border border-emerald-500/30">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-amber-300 shrink-0">
              <span className="material-symbols-outlined text-[24px]">rate_review</span>
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base">
                Kia aap ne Kissan Agro Traders se khareedari ya Drone service li hai?
              </div>
              <div className="text-xs text-emerald-200/90 urdu-text" dir="rtl">
                اپنی قیمتی رائے اور کمنٹ ہمارے ساتھ واٹس ایپ پر شیئر کریں
              </div>
            </div>
          </div>

          <a
            href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, I want to share my review/feedback about your service.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-2xl shadow-xs transition-all whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Share Your Review</span>
          </a>
        </div>
      </div>
    </section>
  );
};
