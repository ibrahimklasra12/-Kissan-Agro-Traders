import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/agroData';
import { useToast } from '../context/ToastContext';

interface FarmingQuestionFormProps {
  onSuccess?: () => void;
  className?: string;
  isModal?: boolean;
}

export const FarmingQuestionForm: React.FC<FarmingQuestionFormProps> = ({
  onSuccess,
  className = '',
  isModal = false,
}) => {
  const { showToast } = useToast();
  const [farmerName, setFarmerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [village, setVillage] = useState('');
  const [crop, setCrop] = useState('');
  const [question, setQuestion] = useState('');
  const [optionalNote, setOptionalNote] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Field validation
    if (!farmerName.trim()) {
      setErrorMessage('براہ کرم اپنا نام درج کریں (Please enter your name)');
      return;
    }
    if (!mobileNumber.trim() || mobileNumber.trim().length < 10) {
      setErrorMessage('درست موبائل نمبر درج کریں (Please enter a valid mobile number)');
      return;
    }
    if (!village.trim()) {
      setErrorMessage('اپنے گاؤں یا علاقے کا نام درج کریں (Please enter your village/area)');
      return;
    }
    if (!crop.trim()) {
      setErrorMessage('فصل کا نام درج کریں (Please specify your crop)');
      return;
    }
    if (!question.trim()) {
      setErrorMessage('اپنا زرعی سوال درج کریں (Please enter your question)');
      return;
    }

    setIsLoading(true);

    // Smooth transition simulation for optimal user feedback
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);

      // Generate structured WhatsApp message
      const message = `🌾 *کسان ایگرو ٹریڈرز — زرعی رہنمائی و سوال*
━━━━━━━━━━━━━━━━━━━━
👤 *کسان کا نام:* ${farmerName.trim()}
📱 *موبائل نمبر:* ${mobileNumber.trim()}
📍 *گاؤں / علاقہ:* ${village.trim()}
🌱 *فصل:* ${crop.trim()}
❓ *زرعی سوال:* ${question.trim()}
${optionalNote.trim() ? `📝 *اضافی نوٹ:* ${optionalNote.trim()}\n` : ''}━━━━━━━━━━━━━━━━━━━━
مدینہ چوک بائی پاس، کوٹ ادو`;

      showToast('success', 'سوال تیار ہے!', 'WhatsApp پر ماہر مشورے کے لیے اوپن ہو رہا ہے...');

      const whatsappUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;

      // Open WhatsApp directly without external server
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      if (onSuccess) {
        setTimeout(onSuccess, 1800);
      }
    }, 600);
  };

  const handleReset = () => {
    setFarmerName('');
    setMobileNumber('');
    setVillage('');
    setCrop('');
    setQuestion('');
    setOptionalNote('');
    setIsSuccess(false);
    setErrorMessage('');
  };

  return (
    <div
      className={`rounded-3xl p-5 sm:p-7 transition-all duration-300 ${
        isModal
          ? 'bg-white'
          : 'bg-white border border-emerald-200/80 shadow-lg shadow-emerald-950/5'
      } ${className}`}
    >
      {/* Header */}
      <div className="mb-5 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-1.5 border border-emerald-200/60">
          <span className="material-symbols-outlined text-[16px] text-emerald-600">contact_support</span>
          <span>Farming Question Form</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          زرعی سوال پوچھیں / Ask Farming Question
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          اپنی فصل، بیماری، کھاد یا دوائی سے متعلق سوال درج کریں۔ ماہرین فوری واٹس ایپ رہنمائی فراہم کریں گے۔
        </p>
      </div>

      {isSuccess ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <span className="material-symbols-outlined text-[36px]">check_circle</span>
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900">آپ کا سوال کامیابی سے تیار ہو گیا ہے!</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              اگر واٹس ایپ خود بخود اوپن نہیں ہوئی تو نیچے والے بٹن پر کلک کریں۔
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
            >
              نیا سوال پوچھیں (Ask Another)
            </button>
            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full sm:w-auto px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>واٹس ایپ اوپن کریں</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Error Banner */}
          {errorMessage && (
            <div
              className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2 animate-shake"
              role="alert"
            >
              <span className="material-symbols-outlined text-[18px] text-rose-600 shrink-0">error</span>
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* 1. Farmer Name */}
            <div>
              <label htmlFor="farmer-name-input" className="block text-xs font-extrabold text-slate-700 mb-1">
                کسان کا نام / Farmer Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-[18px]">person</span>
                </span>
                <input
                  id="farmer-name-input"
                  type="text"
                  required
                  value={farmerName}
                  onChange={(e) => setFarmerName(e.target.value)}
                  placeholder="مثال: محمد ساجد یا ملک طارق"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-slate-50/50 hover:bg-white"
                />
              </div>
            </div>

            {/* 2. Mobile Number */}
            <div>
              <label htmlFor="farmer-mobile-input" className="block text-xs font-extrabold text-slate-700 mb-1">
                موبائل نمبر / Mobile Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                </span>
                <input
                  id="farmer-mobile-input"
                  type="tel"
                  required
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="0300-1234567"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-slate-50/50 hover:bg-white"
                />
              </div>
            </div>

            {/* 3. Village / Area */}
            <div>
              <label htmlFor="farmer-village-input" className="block text-xs font-extrabold text-slate-700 mb-1">
                گاؤں / علاقہ / Village / Area <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                </span>
                <input
                  id="farmer-village-input"
                  type="text"
                  required
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  placeholder="کوٹ ادو، سنوان، چوک سرور شہید وغیرہ"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-slate-50/50 hover:bg-white"
                />
              </div>
            </div>

            {/* 4. Crop */}
            <div>
              <label htmlFor="farmer-crop-input" className="block text-xs font-extrabold text-slate-700 mb-1">
                فصل / Crop <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-[18px]">eco</span>
                </span>
                <input
                  id="farmer-crop-input"
                  type="text"
                  required
                  value={crop}
                  onChange={(e) => setCrop(e.target.value)}
                  placeholder="گندم، کپاس، مکئی، دھان، باغات"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-slate-50/50 hover:bg-white"
                />
              </div>
            </div>
          </div>

          {/* 5. Farming Question */}
          <div>
            <label htmlFor="farmer-question-input" className="block text-xs font-extrabold text-slate-700 mb-1">
              زرعی سوال / Farming Question <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="farmer-question-input"
              required
              rows={3}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="مثال: فصل پر جڑی بوٹی یا کیڑے کا حملہ ہوا ہے، کون سی دوا اور کتنا ڈوز تجویز کرتے ہیں؟"
              className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-slate-50/50 hover:bg-white resize-none"
            />
          </div>

          {/* 6. Optional Note */}
          <div>
            <label htmlFor="farmer-note-input" className="block text-xs font-extrabold text-slate-700 mb-1">
              اضافی نوٹ / Optional Note (اختیاری)
            </label>
            <input
              id="farmer-note-input"
              type="text"
              value={optionalNote}
              onChange={(e) => setOptionalNote(e.target.value)}
              placeholder="رقبہ، پچھلا اسپرے یا کوئی خاص ضرورت"
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-slate-50/50 hover:bg-white"
            />
          </div>

          {/* Submit Button */}
          <button
            id="submit-farming-question-btn"
            type="submit"
            disabled={isLoading}
            className="btn-shimmer w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-black text-sm shadow-md hover:shadow-emerald-600/30 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
                <span>سوال تیار ہو رہا ہے...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[20px]">send</span>
                <span>WhatsApp پر سوال بھیجیں (Submit to WhatsApp)</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
