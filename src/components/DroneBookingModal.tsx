import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/agroData';

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
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare professional WhatsApp message in Urdu and English
    const message = `*السلام علیکم Kissan Agro Traders!*
🚁 *ڈرون اسپرے بکنگ کی درخواست:*
---------------------------------------
👤 *کسان کا نام (Name):* ${name || 'نامعلوم'}
📱 *موبائل نمبر (Mobile):* ${phone || 'فراہم نہیں کیا گیا'}
📍 *گاؤں / علاقہ (Village/Area):* ${village || 'کوٹ ادو'}
🌾 *فصل (Crop):* ${crop || 'فصل'}
📐 *کل رقبہ (Total Acres):* ${acres || '1'} ایکڑ
---------------------------------------
براہ کرم دستیاب تاریخ، شیڈول اور ریٹ کی تصدیق فرما دیں۔ شکریہ!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encoded}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setName('');
    setPhone('');
    setVillage('');
    setCrop('');
    setAcres('');
    setSubmitted(false);
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
        className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8"
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
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shadow-xs">
            <span className="material-symbols-outlined text-[26px]">flight_takeoff</span>
          </div>
          <div>
            <span className="text-[11px] font-bold text-purple-700 uppercase tracking-wider block">
              Precision Drone Mechanization
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-800">
              🚁 Drone Spray Book Karein
            </h3>
            <span className="urdu-text text-xs text-emerald-700 font-bold block" dir="rtl">
              ڈرون اسپرے آن لائن بکنگ فارم
            </span>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h4 className="text-lg font-bold text-slate-800">
              شکریہ! بکنگ کی تفصیلات واٹس ایپ پر تیار ہو چکی ہیں
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
              اگر واٹس ایپ خود بخود نہیں کھلا تو نیچے بٹن دبا کر کسان ایگرو ٹریڈرز کو میسج بھیجیں۔
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>💬 WhatsApp کھولیں اور بھیجیں</span>
              </button>
              <button
                type="button"
                onClick={resetAndClose}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-2xl cursor-pointer"
              >
                بند کریں (Close)
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-slate-500 leading-relaxed">
              براہ کرم اپنی تفصیلات درج کریں۔ سبمٹ کرنے پر تیار شدہ واٹس ایپ میسج اوپن ہوگا جس سے آپ کی بکنگ فوری کنفرم ہو جائے گی۔
            </p>

            {/* 1. Name */}
            <div>
              <label htmlFor="drone-name" className="block text-xs font-bold text-slate-700 mb-1">
                کسان کا نام (Full Name) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-[18px]">
                  person
                </span>
                <input
                  id="drone-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثال: محمد احمد"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                />
              </div>
            </div>

            {/* 2. Mobile Number */}
            <div>
              <label htmlFor="drone-phone" className="block text-xs font-bold text-slate-700 mb-1">
                موبائل نمبر (Mobile Number) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-[18px]">
                  call
                </span>
                <input
                  id="drone-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="مثال: 03001234567"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                />
              </div>
            </div>

            {/* 3. Village / Area */}
            <div>
              <label htmlFor="drone-village" className="block text-xs font-bold text-slate-700 mb-1">
                گاؤں / علاقہ (Village / Area) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-[18px]">
                  location_on
                </span>
                <input
                  id="drone-village"
                  type="text"
                  required
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  placeholder="مثال: چوک سرور شہید، کوٹ ادو، سنوان"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                />
              </div>
            </div>

            {/* 4. Crop & 5. Total Acres */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="drone-crop" className="block text-xs font-bold text-slate-700 mb-1">
                  فصل (Crop) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-[18px]">
                    grass
                  </span>
                  <input
                    id="drone-crop"
                    type="text"
                    required
                    value={crop}
                    onChange={(e) => setCrop(e.target.value)}
                    placeholder="مثال: گندم، کپاس، مکئی، چاول"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="drone-acres" className="block text-xs font-bold text-slate-700 mb-1">
                  کل رقبہ ایکڑ (Total Acres) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-[18px]">
                    square_foot
                  </span>
                  <input
                    id="drone-acres"
                    type="number"
                    min="1"
                    required
                    value={acres}
                    onChange={(e) => setAcres(e.target.value)}
                    placeholder="مثال: 5"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Drone Highlights Badge */}
            <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100 flex items-center justify-between text-xs font-semibold text-purple-900">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px] text-purple-600">bolt</span>
                <span>15 منٹ فی ایکڑ اسپرے سپیڈ</span>
              </span>
              <span className="text-emerald-700 font-bold">0% فصل کا نقصان</span>
            </div>

            {/* Submit Button */}
            <button
              id="drone-booking-submit-btn"
              type="submit"
              className="btn-shimmer w-full py-3.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-extrabold text-sm rounded-2xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>🚁 Drone Spray Book Karein (WhatsApp پر بھیجیں)</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
