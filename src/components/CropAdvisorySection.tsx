import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/agroData';
import { CropAdvisoryModal } from './CropAdvisoryModal';
import { CropCalendarModal } from './CropCalendarModal';
import { PestDiseaseModal } from './PestDiseaseModal';
import { useLanguage } from '../context/LanguageContext';

interface CropAdvisorySectionProps {
  onOpenAdvisoryModal?: () => void;
  onOpenConsultationModal?: () => void;
}

export const CropAdvisorySection: React.FC<CropAdvisorySectionProps> = ({
  onOpenAdvisoryModal,
  onOpenConsultationModal,
}) => {
  const [isInternalModalOpen, setIsInternalModalOpen] = useState(false);
  const [isCropCalendarOpen, setIsCropCalendarOpen] = useState(false);
  const [isPestDiseaseOpen, setIsPestDiseaseOpen] = useState(false);
  const { isUrdu } = useLanguage();

  const handleOpenPhotoAdvisory = () => {
    if (onOpenAdvisoryModal) {
      onOpenAdvisoryModal();
    } else {
      setIsInternalModalOpen(true);
    }
  };

  const defaultWaMessage = isUrdu
    ? 'السلام علیکم! کسان ایگرو ٹریڈرز، مجھے اپنی فصل کے لیے ماہر زرعی مشورہ درکار ہے۔'
    : 'Hello Kissan Agro Traders, I need expert agricultural consultation for my crops.';

  return (
    <section id="crop-advisory" dir={isUrdu ? 'rtl' : 'ltr'} className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-emerald-500/30">
        {/* Ambient Decorative Blurs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 px-3.5 py-1.5 rounded-full text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">psychology_alt</span>
              <span>{isUrdu ? 'مستند زرعی رہنمائی و مشاورتی سہولت' : 'Dedicated Agricultural Guidance & Consultation'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              {isUrdu ? '🌾 فصل کے لیے مفت زرعی مشورہ و رہنمائی' : '🌾 Free Agricultural Advisory & Crop Guidance'}
            </h2>

            <p className="text-emerald-100/90 text-sm sm:text-base max-w-2xl leading-relaxed">
              {isUrdu
                ? 'اپنی فصل کے لیے زرعی رہنمائی حاصل کریں۔ ہمارے تجربہ کار زرعی ماہرین سے کیڑوں، بیماریوں، جڑی بوٹیوں اور کھاد کے درست تناسب پر مفید اور مستند مشورہ لیں۔'
                : 'Get reliable agronomic advice for your crops. Consult our agronomists on pest control, disease management, weed elimination, and optimal fertilizer nutrition.'}
            </p>

            <div className="text-sm sm:text-base text-emerald-200/90 bg-emerald-950/60 p-4 rounded-2xl border border-emerald-500/20 max-w-2xl leading-relaxed">
              {isUrdu
                ? 'فصل میں سنڈی، سفید مکھی، بیماری، یا کھاد کے درست تناسب کے بارے میں پریشان نہ ہوں۔ کسان ایگرو ٹریڈرز کا عملہ آپ کی رہنمائی کے لیے ہر وقت تیار ہے۔'
                : 'Do not worry about pest attacks, whiteflies, fungal issues, or nutrient deficiencies. The Kissan Agro Traders advisory team is here to assist you round the clock.'}
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-emerald-200 font-medium">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-300 text-[18px]">verified</span>
                <span>{isUrdu ? 'مفت زرعی مشورہ' : 'Free Ag Advisory'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-300 text-[18px]">bolt</span>
                <span>{isUrdu ? 'فوری WhatsApp رہنمائی' : 'Instant WhatsApp Guidance'}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="material-symbols-outlined text-amber-300 text-[18px]">science</span>
                <span>{isUrdu ? 'مصدقہ اصل پروڈکٹس' : 'Certified Genuine Products'}</span>
              </div>
            </div>
          </div>

          {/* Right Action Card */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {/* 1. Primary Requested Button: 📸 Crop Problem Photo Inquiry */}
            <button
              id="crop-photo-inquiry-btn"
              type="button"
              onClick={handleOpenPhotoAdvisory}
              className="btn-shimmer w-full py-4 px-5 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 hover:from-emerald-300 hover:to-green-300 text-slate-950 font-black text-sm sm:text-base rounded-2xl shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer border border-emerald-200/80"
            >
              <span className="material-symbols-outlined text-[24px] text-slate-950">photo_camera</span>
              <span>{isUrdu ? '📸 فصل کی بیماری کی تصویر بھیجیں' : '📸 Crop Problem Photo Inquiry'}</span>
            </button>

            {/* 2. Feature: 💬 Expert WhatsApp Consultation */}
            {onOpenConsultationModal && (
              <button
                id="expert-consultation-open-btn"
                type="button"
                onClick={onOpenConsultationModal}
                className="btn-shimmer w-full py-3.5 px-5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2 cursor-pointer shadow-md border border-amber-200"
              >
                <span className="material-symbols-outlined text-[20px] text-slate-950">chat</span>
                <span>{isUrdu ? '💬 ماہر زرعی مشورہ (WhatsApp)' : '💬 Expert WhatsApp Consultation'}</span>
              </button>
            )}

            {/* 3. Crop Advisory Form */}
            <button
              id="crop-advisory-open-btn"
              type="button"
              onClick={handleOpenPhotoAdvisory}
              className="w-full py-3 px-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md shadow-xs"
            >
              <span className="material-symbols-outlined text-[20px] text-emerald-300">psychology_alt</span>
              <span>{isUrdu ? '🌱 زرعی مشورہ فارم' : '🌱 Crop Advisory Form'}</span>
            </button>

            {/* 4. Direct Quick WhatsApp */}
            <a
              id="crop-advisory-direct-wa"
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(defaultWaMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-emerald-950/80 hover:bg-emerald-950 border border-emerald-500/40 text-emerald-300 hover:text-white font-bold text-xs rounded-2xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[17px] text-emerald-400">chat</span>
              <span dir="ltr">{isUrdu ? `واٹس ایپ رابطہ: ${BUSINESS_INFO.phone}` : `Direct WhatsApp: ${BUSINESS_INFO.phone}`}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Dual Cards: 🌾 Crop Calendar & 🐛 Pest & Disease Guide */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* 🌾 Crop Calendar Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[26px]">calendar_today</span>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300">
                {isUrdu ? 'فصل شیڈول' : 'Crop Timeline'}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                {isUrdu ? '🌾 زرعی فصل کیلنڈر (Crop Calendar)' : '🌾 Crop Calendar & Stages'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                {isUrdu
                  ? 'گندم، کپاس، کماد، مکئی اور دھان کی کاشت، بڑھوتری، نگرانی اور برداشت کے تمام اہم مراحل کا تفصیلی شیڈول دیکھیں۔'
                  : 'Explore planting, growth, monitoring, and harvest periods for major regional crops.'}
              </p>
            </div>
          </div>

          <div className="pt-5">
            <button
              id="open-crop-calendar-btn"
              type="button"
              onClick={() => setIsCropCalendarOpen(true)}
              className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>{isUrdu ? 'کیلنڈر دیکھیں اور فصل منتخب کریں' : 'View Crop Calendar'}</span>
            </button>
          </div>
        </div>

        {/* 🐛 Pest & Disease Guide Card with Form Trigger */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/15 text-rose-600 dark:text-rose-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[26px]">pest_control</span>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-700 dark:text-rose-300">
                {isUrdu ? 'تشخیص و علاج' : 'Scouting & Care'}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                {isUrdu ? '🐛 کیڑوں اور بیماریوں کی رہنمائی (Pest & Disease Guide)' : '🐛 Pest & Disease Guide'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                {isUrdu
                  ? 'اپنی فصل کے مسئلے کی تفصیل دینے کے لیے یہاں کلک کریں اور فارم پُر کریں۔'
                  : 'Click here and fill the form to tell us about your crop problem.'}
              </p>
            </div>
          </div>

          <div className="pt-5">
            <button
              id="open-pest-disease-form-btn"
              type="button"
              onClick={() => setIsPestDiseaseOpen(true)}
              className="w-full py-3 px-4 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">assignment</span>
              <span>{isUrdu ? 'یہاں کلک کریں اور فارم پُر کریں' : 'Click & Fill Form'}</span>
            </button>
          </div>
        </div>
      </div>

      <CropAdvisoryModal
        isOpen={isInternalModalOpen}
        onClose={() => setIsInternalModalOpen(false)}
      />

      <CropCalendarModal
        isOpen={isCropCalendarOpen}
        onClose={() => setIsCropCalendarOpen(false)}
      />

      <PestDiseaseModal
        isOpen={isPestDiseaseOpen}
        onClose={() => setIsPestDiseaseOpen(false)}
      />
    </section>
  );
};

