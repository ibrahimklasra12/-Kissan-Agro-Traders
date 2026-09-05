import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/agroData';

interface CropAdvisoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CropAdvisoryModal: React.FC<CropAdvisoryModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [village, setVillage] = useState('');
  const [crop, setCrop] = useState('');
  const [issue, setIssue] = useState('');
  const [details, setDetails] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!name.trim()) {
      setError('Barah-e-karam apna naam darj karein (Please enter your name).');
      return;
    }
    if (!phone.trim()) {
      setError('Barah-e-karam apna mobile number darj karein (Please enter mobile number).');
      return;
    }
    if (!village.trim()) {
      setError('Barah-e-karam apna gaon ya ilaqah darj karein (Please enter your village/area).');
      return;
    }
    if (!crop.trim()) {
      setError('Barah-e-karam fasal ka naam darj karein (Please enter crop name).');
      return;
    }
    if (!issue.trim()) {
      setError('Barah-e-karam masla ya zaroorat darj karein (Please describe your crop issue).');
      return;
    }

    setError('');

    // Prepare requested WhatsApp message
    const message = `Assalam o Alaikum! Mujhe Crop Advisory chahiye.

Naam: ${name.trim()}
Mobile: ${phone.trim()}
Village / Area: ${village.trim()}
Crop: ${crop.trim()}
Masla / Zaroorat: ${issue.trim()}
Additional Details: ${details.trim() ? details.trim() : 'N/A'}

Kissan Agro Traders se agricultural guidance darkar hai.`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encoded}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    resetAndClose();
  };

  const resetAndClose = () => {
    setName('');
    setPhone('');
    setVillage('');
    setCrop('');
    setIssue('');
    setDetails('');
    setError('');
    onClose();
  };

  return (
    <div
      id="crop-advisory-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={resetAndClose}
    >
      <div
        id="crop-advisory-modal"
        className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-200 relative my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={resetAndClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
            <span className="material-symbols-outlined text-[26px]">psychology_alt</span>
          </div>
          <div>
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
              Agricultural Guidance • زرعی رہنمائی
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-800">
              🌱 Crop Advisory Form
            </h3>
            <span className="urdu-text text-xs text-emerald-700 font-bold block" dir="rtl">
              فصل کے لیے بہتر زرعی مشورہ حاصل کریں
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-500 mb-5 leading-relaxed">
          Apni fasal ki bimari, keeron ke hamle ya khad ke intekhab ke liye maloomat darj karein. Kissan Agro Traders ke mahir rabta farmayein ge.
        </p>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">error</span>
            <span>{error}</span>
          </div>
        )}

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* 1. Naam */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              1. Naam (آپ کا نام) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Muhammad Tariq"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* 2. Mobile Number */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              2. Mobile Number (موبائل نمبر) <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 0342-6400074"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* 3. Village / Area */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              3. Village / Area (گاؤں / علاقہ) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={village}
              onChange={(e) => setVillage(e.target.value)}
              placeholder="e.g. Kot Addu, Madina Chowk"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* 4. Crop */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              4. Crop (فصل کا نام) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              placeholder="e.g. گندم / کپاس / مکئی / کماد / چاول / باغات"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* 5. Masla / Zaroorat */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              5. Masla / Zaroorat (مسئلہ یا ضرورت) <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={2}
              required
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              placeholder="e.g. سفید مکھی کا حملہ، جڑی بوٹیوں کی تلفی، کھاد کی صحیح مقدار"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none"
            />
          </div>

          {/* 6. Additional Details (Optional) */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              6. Additional Details (اضافی تفصیلات - اختیاری)
            </label>
            <textarea
              rows={2}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Koi mazeed khas wazahat (Optional)"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              id="crop-advisory-submit-btn"
              type="submit"
              className="btn-shimmer w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-sm font-extrabold flex items-center justify-center gap-2 shadow-md hover:shadow-emerald-600/30 transition-all cursor-pointer active:scale-98"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>📲 WhatsApp Par Mashwara Mangwayein</span>
            </button>
          </div>
        </form>

        {/* Footnote */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Kissan Agro Traders Helpline</span>
          <span className="font-bold text-emerald-700">{BUSINESS_INFO.phone}</span>
        </div>
      </div>
    </div>
  );
};
