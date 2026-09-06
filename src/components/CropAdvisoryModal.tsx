import React, { useState, useRef, useEffect } from 'react';
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
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [infoNotice, setInfoNotice] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Cleanup object URL when modal unmounts or photo changes
    return () => {
      if (photoPreview) {
        URL.revokeObjectURL(photoPreview);
      }
    };
  }, [photoPreview]);

  if (!isOpen) return null;

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate image
    if (!file.type.startsWith('image/')) {
      setError('Barah-e-karam sirf tasweer (Image) select karein.');
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      setError('Tasweer ka size 15MB se kam hona chahiye.');
      return;
    }

    setError('');
    if (photoPreview) {
      URL.revokeObjectURL(photoPreview);
    }

    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const handleRemovePhoto = () => {
    if (photoPreview) {
      URL.revokeObjectURL(photoPreview);
    }
    setPhotoFile(null);
    setPhotoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    const photoAttachedNote = photoFile
      ? `📸 Fasal Ki Tasweer: Customer ne "${photoFile.name}" muntakhab ki hai (WhatsApp chat mein saath share ki ja rahi hai).`
      : '📸 Fasal Ki Tasweer: Tasweer shamil nahi ki gayi.';

    const message = `Assalam o Alaikum! Mujhe Crop Advisory chahiye.

Naam: ${name.trim()}
Mobile: ${phone.trim()}
Village / Area: ${village.trim()}
Crop: ${crop.trim()}
Masla / Zaroorat: ${issue.trim()}
Additional Details: ${details.trim() ? details.trim() : 'N/A'}
${photoAttachedNote}

Kissan Agro Traders se agricultural guidance darkar hai.`;

    // Check if device supports Web Share API with files
    if (photoFile && navigator.canShare && navigator.canShare({ files: [photoFile] })) {
      try {
        await navigator.share({
          files: [photoFile],
          title: 'Crop Problem Photo Inquiry - Kissan Agro Traders',
          text: message,
        });
        resetAndClose();
        return;
      } catch (err: unknown) {
        if ((err as Error)?.name !== 'AbortError') {
          console.warn('Web share failed, proceeding to direct WhatsApp link:', err);
        } else {
          return;
        }
      }
    }

    // Direct WhatsApp fallback
    if (photoFile) {
      setInfoNotice('WhatsApp khul raha hai. Barah-e-karam apni select shuda tasweer WhatsApp chat mein attach karein.');
    }

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encoded}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setTimeout(() => {
      resetAndClose();
    }, 1200);
  };

  const resetAndClose = () => {
    if (photoPreview) {
      URL.revokeObjectURL(photoPreview);
    }
    setName('');
    setPhone('');
    setVillage('');
    setCrop('');
    setIssue('');
    setDetails('');
    setPhotoFile(null);
    setPhotoPreview(null);
    setError('');
    setInfoNotice('');
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
              🌱 Crop Problem Photo Inquiry
            </h3>
            <span className="urdu-text text-xs text-emerald-700 font-bold block" dir="rtl">
              فصل کی بیماری یا کیڑوں کی تصویر بھیجیں اور مفت مشورہ حاصل کریں
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-500 mb-4 leading-relaxed">
          Apni fasal ki bimari, keeron ke hamle ya khad ke intekhab ke liye maloomat darj karein. Fasal ki tasweer attach karke behtar aur fawri hal payein.
        </p>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">error</span>
            <span>{error}</span>
          </div>
        )}

        {infoNotice && (
          <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-amber-600">info</span>
            <span>{infoNotice}</span>
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
              5. Masla / Problem Description (مسئلہ یا بیماری کی تفصیل) <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={2}
              required
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              placeholder="e.g. سنڈی کا حملہ، پتوں پر پیلے دھبے، جڑی بوٹیوں کا خاتمہ"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none"
            />
          </div>

          {/* 6. Crop Problem Photo Upload & Preview - Feature 1 */}
          <div className="bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-200/80">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-extrabold text-emerald-950 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-emerald-700">photo_camera</span>
                <span>📸 Crop Problem Photo (فصل کی تصویر)</span>
              </label>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                Camera / Gallery
              </span>
            </div>

            <p className="text-[11px] text-slate-600 mb-2 leading-tight">
              Kharab pattay ya keeron ki wazeh tasweer select karein taake behtar mashwara diya ja sakay.
            </p>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handlePhotoChange}
              className="hidden"
              id="crop-photo-input"
            />

            {!photoPreview ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-emerald-300 hover:border-emerald-500 rounded-xl p-4 flex flex-col items-center justify-center gap-1.5 bg-white/80 hover:bg-white text-emerald-800 cursor-pointer transition-all duration-200 hover:shadow-xs group"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[22px]">add_a_photo</span>
                </div>
                <div className="text-xs font-bold text-center">
                  <span>Tasweer Muntakhab Karein</span>
                  <span className="urdu-text block text-[11px] text-emerald-700 font-semibold" dir="rtl">
                    کیمرہ یا گیلری سے تصویر منتخب کریں
                  </span>
                </div>
                <span className="text-[10px] text-slate-400">JPG, PNG, WebP (Max 15MB)</span>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-3 border border-emerald-300 shadow-2xs space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                    <img
                      src={photoPreview}
                      alt="Crop problem preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">
                      {photoFile?.name}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {photoFile ? `${(photoFile.size / 1024).toFixed(1)} KB` : ''}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-bold">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span>
                      <span>Tasweer Tayyar Hai</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 py-1.5 px-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[15px]">sync</span>
                    <span>Change Photo</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleRemovePhoto}
                    className="py-1.5 px-2.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[15px]">delete</span>
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 7. Additional Details (Optional) */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              7. Additional Details (اضافی تفصیلات - اختیاری)
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
