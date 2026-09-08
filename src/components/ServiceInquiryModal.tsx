import React, { useState, useEffect } from 'react';
import { useToast } from '../context/ToastContext';
import { useLanguage } from '../context/LanguageContext';

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
  const { isUrdu } = useLanguage();
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
      showToast('error', isUrdu ? 'نام اور موبائل نمبر درج کریں' : 'Please provide your name and phone number');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      const waText = isUrdu
        ? `🌐 *ویب سائٹ ڈویلپمنٹ انکوائری — ابراہیم کلاسرہ*
━━━━━━━━━━━━━━━━━━━━
👤 *کلائنٹ کا نام:* ${name.trim()}
📱 *موبائل:* ${mobile.trim()}
🛠️ *مطلوبہ سروس:* ${service}
📁 *پروجیکٹ کی نوعیت:* ${projectType}
💬 *تفصیل:* ${message.trim() || 'میرے بزنس کے لیے ایک جدید اور تیز رفتار ویب سائٹ درکار ہے۔'}
━━━━━━━━━━━━━━━━━━━━
کسان ایگرو ٹریڈرز پورٹل کے ذریعے بھیجا گیا`
        : `🌐 *Website Development Inquiry — Ibrahim Klasra*
━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${name.trim()}
📱 *Mobile:* ${mobile.trim()}
🛠️ *Service Required:* ${service}
📁 *Project Type:* ${projectType}
💬 *Message / Requirements:* ${message.trim() || 'Need a modern, fast website for my business.'}
━━━━━━━━━━━━━━━━━━━━
Sent from Kissan Agro Traders website`;

      const creatorWaUrl = `https://wa.me/923007157733?text=${encodeURIComponent(waText)}`;
      window.open(creatorWaUrl, '_blank', 'noopener,noreferrer');

      showToast(
        'success',
        isUrdu ? 'انکوائری تیار ہے!' : 'Inquiry Ready!',
        isUrdu ? 'ابراہیم کلاسرہ کے واٹس ایپ پر چیٹ اوپن ہو رہی ہے...' : 'Opening WhatsApp chat with Ibrahim Klasra...'
      );
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
                {isUrdu ? 'اپنی ویب سائٹ یا ایپ بنوائیں' : 'Build Your Website / App'}
              </h3>
              <p className="text-[11px] text-emerald-300">
                {isUrdu ? 'ابراہیم کلاسرہ • فری لانس ویب کریئٹر' : 'Ibrahim Klasra • Full-Stack Web Creator'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={isUrdu ? 'بند کریں' : 'Close modal'}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 overflow-y-auto">
          <div>
            <label htmlFor="service-name-input" className="block text-xs font-bold text-slate-700 mb-1">
              {isUrdu ? 'آپ کا نام' : 'Your Name'} <span className="text-rose-500">*</span>
            </label>
            <input
              id="service-name-input"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={isUrdu ? 'مثال: محمد احمد' : 'e.g. Muhammad Ahmed'}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            />
          </div>

          <div>
            <label htmlFor="service-mobile-input" className="block text-xs font-bold text-slate-700 mb-1">
              {isUrdu ? 'موبائل یا واٹس ایپ نمبر' : 'Mobile / WhatsApp Number'} <span className="text-rose-500">*</span>
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
              {isUrdu ? 'مطلوبہ سروس' : 'Required Service'}
            </label>
            <select
              id="service-select"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden bg-white"
            >
              <option value="Business Website">{isUrdu ? 'کاروباری ویب سائٹ (Business Website)' : 'Business & Brand Website'}</option>
              <option value="PWA / Installable Web App">{isUrdu ? 'موبائل ایپ جیسی ویب سائٹ (PWA)' : 'PWA / Installable Web Application'}</option>
              <option value="UI/UX Design">{isUrdu ? 'یو آئی / یو ایکس ڈیزائن (UI/UX Design)' : 'UI/UX Mobile First Design'}</option>
              <option value="Landing Page">{isUrdu ? 'پروڈکٹ لینڈنگ پیج (Landing Page)' : 'High Converting Landing Page'}</option>
              <option value="Website Maintenance">{isUrdu ? 'ویب سائٹ اسپیڈ و دیکھ بھال (Maintenance)' : 'Website Maintenance & Optimization'}</option>
            </select>
          </div>

          <div>
            <label htmlFor="project-type-select" className="block text-xs font-bold text-slate-700 mb-1">
              {isUrdu ? 'پروجیکٹ کی نوعیت' : 'Project Type'}
            </label>
            <select
              id="project-type-select"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden bg-white"
            >
              <option value="New Project">{isUrdu ? 'نیا پروجیکٹ شروع کرنا ہے' : 'Start a New Project'}</option>
              <option value="Redesign / Upgrade">{isUrdu ? 'موجودہ ویب سائٹ اپ گریڈ کرنی ہے' : 'Redesign Existing Website'}</option>
              <option value="Consultation">{isUrdu ? 'تکنیکی مشورہ لینا ہے' : 'Technical Consultation'}</option>
            </select>
          </div>

          <div>
            <label htmlFor="service-message-input" className="block text-xs font-bold text-slate-700 mb-1">
              {isUrdu ? 'پیغام یا ضروریات (اختیاری)' : 'Message / Requirements (Optional)'}
            </label>
            <textarea
              id="service-message-input"
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={isUrdu ? 'اپنے کاروبار یا پروجیکٹ کے بارے میں مختصر بتائیں...' : 'Briefly describe your project or requirements...'}
              className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-shimmer w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-black shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isLoading ? (
              <span>{isUrdu ? 'بھیجا جا رہا ہے...' : 'Submitting...'}</span>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>{isUrdu ? 'ابراہیم کلاسرہ کو واٹس ایپ کریں' : 'Send WhatsApp to Ibrahim Klasra'}</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
