import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/agroData';
import { CropAdvisoryModal } from './CropAdvisoryModal';

interface CropAdvisorySectionProps {
  onOpenAdvisoryModal?: () => void;
}

export const CropAdvisorySection: React.FC<CropAdvisorySectionProps> = ({ onOpenAdvisoryModal }) => {
  const [isInternalModalOpen, setIsInternalModalOpen] = useState(false);

  const handleOpen = () => {
    if (onOpenAdvisoryModal) {
      onOpenAdvisoryModal();
    } else {
      setIsInternalModalOpen(true);
    }
  };

  return (
    <section id="crop-advisory" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-emerald-500/30">
        {/* Ambient Decorative Blurs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 px-3.5 py-1.5 rounded-full text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">psychology_alt</span>
              <span>Dedicated Agricultural Guidance</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              🌾 Fasal Ke Liye Behtar Mashwara
            </h2>

            <p className="text-emerald-100/90 text-sm sm:text-base max-w-2xl leading-relaxed">
              Apni fasal ke liye agricultural guidance hasil karein. Hamare tajarbekar زرعی ماہرین se keeron, bimariyon aur behtar paidawar ke liye mufeed mushwara lain.
            </p>

            <div className="urdu-text text-sm sm:text-base text-emerald-200/90 bg-emerald-950/60 p-4 rounded-2xl border border-emerald-500/20 max-w-2xl leading-relaxed" dir="rtl">
              فصل میں سنڈی، سفید مکھی، بیماری، یا کھاد کے درست تناسب کے بارے میں پریشان نہ ہوں۔ کسان ایگرو ٹریڈرز کا عملہ آپ کی رہنمائی کے لیے ہر وقت تیار ہے۔
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-emerald-200 font-medium">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-300 text-[18px]">verified</span>
                <span>Muft زرعی مشورہ</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-300 text-[18px]">bolt</span>
                <span>Fawri WhatsApp Jawab</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="material-symbols-outlined text-amber-300 text-[18px]">science</span>
                <span>Tajweez Karda Chemical</span>
              </div>
            </div>
          </div>

          {/* Right Action Card */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            {/* Primary Requested Button: 📸 Crop Problem Photo Inquiry */}
            <button
              id="crop-photo-inquiry-btn"
              type="button"
              onClick={handleOpen}
              className="btn-shimmer w-full py-4 px-6 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 hover:from-emerald-300 hover:to-green-300 text-slate-950 font-black text-sm sm:text-base rounded-2xl shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer border border-emerald-200/80"
            >
              <span className="material-symbols-outlined text-[24px] text-slate-950">photo_camera</span>
              <span>📸 Crop Problem Photo Inquiry</span>
            </button>

            {/* Requested Button: 🌱 Crop Advisory */}
            <button
              id="crop-advisory-open-btn"
              type="button"
              onClick={handleOpen}
              className="w-full py-3.5 px-5 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md shadow-xs"
            >
              <span className="material-symbols-outlined text-[20px] text-emerald-300">psychology_alt</span>
              <span>🌱 Crop Advisory (مشورہ فارم)</span>
            </button>

            {/* Direct Quick WhatsApp */}
            <a
              id="crop-advisory-direct-wa"
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Assalam o Alaikum! Mujhe Crop Advisory chahiye. Kissan Agro Traders se agricultural guidance darkar hai.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-emerald-950/80 hover:bg-emerald-950 border border-emerald-500/40 text-emerald-300 hover:text-white font-bold text-xs rounded-2xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[17px] text-emerald-400">chat</span>
              <span>Direct WhatsApp Chat</span>
            </a>

            {/* Phone Call */}
            <a
              id="crop-advisory-direct-call"
              href={BUSINESS_INFO.telLink}
              className="w-full py-2.5 px-3 text-emerald-300/80 hover:text-white font-medium text-xs transition-colors flex items-center justify-center gap-1.5 text-center"
            >
              <span className="material-symbols-outlined text-[15px]">call</span>
              <span>Helpline: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      <CropAdvisoryModal
        isOpen={isInternalModalOpen}
        onClose={() => setIsInternalModalOpen(false)}
      />
    </section>
  );
};
