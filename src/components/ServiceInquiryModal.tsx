import React, { useState, useEffect } from 'react';
import { useToast } from '../context/ToastContext';

interface ServiceInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ServiceInquiryModal: React.FC<ServiceInquiryModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Business Website',
}) => {
  const { showToast } = useToast();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [service, setService] = useState(defaultService);
  const [projectType, setProjectType] = useState('New Project');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !mobile.trim()) {
      showToast('error', 'نام اور موبائل نمبر درج کریں');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      const waText = `🌐 *Website Development Inquiry — Ibrahim Klasra*
━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${name.trim()}
📱 *Mobile:* ${mobile.trim()}
🛠️ *Service Required:* ${service}
📁 *Project Type:* ${projectType}
💬 *Message / Requirements:* ${message.trim() || 'Need a modern website for my business.'}
━━━━━━━━━━━━━━━━━━━━
Inquiry from Kissan Agro Traders website`;

      const creatorWaUrl = `https://wa.me/923007157733?text=${encodeURIComponent(waText)}`;
      window.open(creatorWaUrl, '_blank', 'noopener,noreferrer');

      showToast('success', 'انکوائری تیار ہے!', 'Ibrahim Klasra کے واٹس ایپ پر چیٹ اوپن ہو رہی ہے...');
      onClose();
    }, 500);
  };

  return (
    <div
      id="service-inquiry-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-inquiry-modal-title"
    >
      <div
        id="service-inquiry-modal-container"
        className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200 my-auto relative animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white shrink-0 border-b border-emerald-800/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white font-black flex items-center justify-center shadow-md">
              <span>IK</span>
            </div>
            <div>
              <h3 id="service-inquiry-modal-title" className="text-base font-black tracking-tight leading-tight">
                Build Your Website / اپنی ویب سائٹ بنوائیں
              </h3>
              <p className="text-[11px] text-emerald-300">
                Ibrahim Klasra • Freelance Web Creator
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close inquiry modal"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 overflow-y-auto">
          <div>
            <label htmlFor="service-name-input" className="block text-xs font-bold text-slate-700 mb-1">
              آپ کا نام / Your Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="service-name-input"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="مثال: محمد احمد"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            />
          </div>

          <div>
            <label htmlFor="service-mobile-input" className="block text-xs font-bold text-slate-700 mb-1">
              موبائل نمبر / Mobile Number <span className="text-rose-500">*</span>
            </label>
            <input
              id="service-mobile-input"
              type="tel"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="0300-1234567"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            />
          </div>

          <div>
            <label htmlFor="service-select" className="block text-xs font-bold text-slate-700 mb-1">
              مطلوبہ سروس / Service Required
            </label>
            <select
              id="service-select"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden bg-white"
            >
              <option value="Business Website">Business Website (کاروباری ویب سائٹ)</option>
              <option value="PWA / Installable Web App">PWA / Installable Web App (موبائل ایپ جیسی ویب سائٹ)</option>
              <option value="UI/UX Design">UI/UX Design (ڈیزائننگ)</option>
              <option value="Landing Page">Landing Page (پروڈکٹ پیج)</option>
              <option value="Website Maintenance">Website Maintenance (اسپیڈ و دیکھ بھال)</option>
            </select>
          </div>

          <div>
            <label htmlFor="project-type-select" className="block text-xs font-bold text-slate-700 mb-1">
              پروجیکٹ کی نوعیت / Project Type
            </label>
            <select
              id="project-type-select"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden bg-white"
            >
              <option value="New Project">New Project (بالکل نیا پروجیکٹ)</option>
              <option value="Redesign / Upgrade">Redesign / Upgrade (موجودہ ویب سائٹ بہتر کرنی ہے)</option>
              <option value="Consultation">Consultation (مشورہ لینا ہے)</option>
            </select>
          </div>

          <div>
            <label htmlFor="service-message-input" className="block text-xs font-bold text-slate-700 mb-1">
              مختصر پیغام یا ضرورت / Message (اختیاری)
            </label>
            <textarea
              id="service-message-input"
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اپنے بزنس یا ویب سائٹ کے بارے میں بتائیں..."
              className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-shimmer w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-black shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isLoading ? (
              <span>بھیجا جا رہا ہے...</span>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Ibrahim Klasra کو واٹس ایپ کریں</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
