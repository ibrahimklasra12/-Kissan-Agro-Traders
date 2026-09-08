import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/agroData';
import { useLanguage } from '../context/LanguageContext';
import { getDroneBookingUrl } from '../utils/whatsapp';

interface DroneBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DroneBookingModal: React.FC<DroneBookingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [village, setVillage] = useState('');
  const [crop, setCrop] = useState('');
  const [acres, setAcres] = useState('');
  const [error, setError] = useState('');
  const { isUrdu, language } = useLanguage();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Form Validation
    if (!name.trim()) {
      setError(isUrdu ? 'براہِ کرم اپنا نام درج کریں۔' : 'Please enter your name.');
      return;
    }
    if (!phone.trim()) {
      setError(isUrdu ? 'براہِ کرم اپنا موبائل نمبر درج کریں۔' : 'Please enter your mobile number.');
      return;
    }
    if (!village.trim()) {
      setError(isUrdu ? 'براہِ کرم اپنا گاؤں یا علاقہ درج کریں۔' : 'Please enter your village/area.');
      return;
    }
    if (!crop.trim()) {
      setError(isUrdu ? 'براہِ کرم فصل کا نام درج کریں۔' : 'Please enter your crop name.');
      return;
    }
    if (!acres.trim()) {
      setError(isUrdu ? 'براہِ کرم کل رقبہ (ایکڑ) درج کریں۔' : 'Please enter total acres.');
      return;
    }

    setError('');

    // 2. Prepare localized WhatsApp message
    const whatsappUrl = getDroneBookingUrl(
      {
        name: name.trim(),
        phone: phone.trim(),
        village: village.trim(),
        crop: crop.trim(),
        acres: acres.trim(),
        date: new Date().toLocaleDateString(isUrdu ? 'ur-PK' : 'en-PK'),
      },
      language
    );

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    resetAndClose();
  };

  const resetAndClose = () => {
    setName('');
    setPhone('');
    setVillage('');
    setCrop('');
    setAcres('');
    setError('');
    onClose();
  };

  return (
    <div
      id="drone-booking-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={resetAndClose}
    >
      <div
        id="drone-booking-modal"
        dir={isUrdu ? 'rtl' : 'ltr'}
        className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-200 relative my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close X Button */}
        <button
          type="button"
          onClick={resetAndClose}
          className={`absolute top-5 ${isUrdu ? 'left-5' : 'right-5'} w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer`}
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
            <span className="material-symbols-outlined text-[26px]">flight_takeoff</span>
          </div>
          <div>
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
              {isUrdu ? 'جدید زرعی ڈرون اسپرے سروس' : 'Precision Agricultural Drone Spray'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-800">
              {isUrdu ? '🚁 ڈرون اسپرے بکنگ' : '🚁 Drone Spray Booking'}
            </h3>
            <span className="text-xs text-emerald-700 font-bold block">
              {isUrdu ? 'اپنی فصل کا اسپرے اب ڈرون سے کروائیں' : 'Save time and ensure uniform spray coverage'}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-500 mb-5 leading-relaxed">
          {isUrdu
            ? 'نیچے دیے گئے فارم میں اپنی فصل اور رقبہ کی معلومات درج کریں۔ بٹن دبانے پر واٹس ایپ پر بکنگ ریکویسٹ خودکار طور پر تیار ہو جائے گی۔'
            : 'Fill in your crop and field acreage details below. Submitting will prepare your booking request directly in WhatsApp.'}
        </p>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">error</span>
            <span>{error}</span>
          </div>
        )}

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* 1. Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {isUrdu ? '1. آپ کا نام' : '1. Your Name'} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={isUrdu ? 'مثلاً: محمد طارق کلاسرا' : 'e.g. Muhammad Tariq'}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* 2. Mobile Number */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {isUrdu ? '2. موبائل نمبر' : '2. Mobile Number'} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={isUrdu ? 'مثلاً: 0342-6400074' : 'e.g. 0342-6400074'}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* 3. Village / Area */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {isUrdu ? '3. گاؤں / علاقہ' : '3. Village / Area'} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={village}
              onChange={(e) => setVillage(e.target.value)}
              placeholder={isUrdu ? 'مثلاً: کوٹ ادو، مدینہ چوک' : 'e.g. Kot Addu, Madina Chowk'}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* 4. Crop */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {isUrdu ? '4. فصل کا نام' : '4. Crop Name'} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              placeholder={isUrdu ? 'مثلاً: گندم، کپاس، مکئی، کماد یا باغات' : 'e.g. Wheat, Cotton, Corn, Sugarcane'}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* 5. Total Acres */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {isUrdu ? '5. کل رقبہ (ایکڑ)' : '5. Total Acres'} <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min="1"
              step="1"
              required
              value={acres}
              onChange={(e) => setAcres(e.target.value)}
              placeholder={isUrdu ? 'مثلاً: 5 یا 10 ایکڑ' : 'e.g. 5 or 10 Acres'}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              id="drone-booking-submit-btn"
              type="submit"
              className="btn-shimmer w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-sm font-extrabold flex items-center justify-center gap-2 shadow-md hover:shadow-emerald-600/30 transition-all cursor-pointer active:scale-98"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>{isUrdu ? '📲 واٹس ایپ پر بکنگ بھیجیں' : '📲 Send Booking on WhatsApp'}</span>
            </button>
          </div>
        </form>

        {/* Footnote */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>{isUrdu ? 'کسان ایگرو ٹریڈرز ڈرون پائلٹ ہیلپ لائن' : 'Kissan Agro Traders Drone Pilot Helpline'}</span>
          <span className="font-bold text-emerald-700">{BUSINESS_INFO.phone}</span>
        </div>
      </div>
    </div>
  );
};
