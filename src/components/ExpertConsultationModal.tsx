import React, { useEffect } from 'react';
import { FarmingQuestionForm } from './FarmingQuestionForm';
import { BUSINESS_INFO } from '../data/agroData';

interface ExpertConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExpertConsultationModal: React.FC<ExpertConsultationModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="expert-consultation-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="expert-consultation-title"
    >
      <div
        id="expert-consultation-modal-container"
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 my-auto relative animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-emerald-900 to-teal-950 text-white shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/30 text-emerald-300 flex items-center justify-center border border-emerald-400/40">
              <span className="material-symbols-outlined text-[20px]">psychology_alt</span>
            </div>
            <div>
              <h3 id="expert-consultation-title" className="text-base font-black tracking-tight leading-tight">
                ماہر زرعی مشورہ / Expert Consultation
              </h3>
              <p className="text-[11px] text-emerald-300">
                Kissan Agro Traders • Kot Addu
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close consultation modal"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6">
          <FarmingQuestionForm isModal onSuccess={onClose} />

          {/* Quick WhatsApp Alternative */}
          <div className="mt-4 pt-4 border-t border-slate-100 text-center">
            <span className="text-xs text-slate-400 block mb-2">یا براہ راست واٹس ایپ پر سلام بھیجیں:</span>
            <a
              id="expert-modal-quick-whatsapp"
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('السلام علیکم! کسان ایگرو ٹریڈرز، مجھے زرعی رہنمائی اور ادویات سے متعلق ماہرانہ مشورہ درکار ہے۔')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-green-500 hover:bg-green-600 text-white text-xs font-bold shadow-xs transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-[17px]">chat</span>
              <span>💬 ون ٹیپ واٹس ایپ چیٹ (Direct WhatsApp)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
