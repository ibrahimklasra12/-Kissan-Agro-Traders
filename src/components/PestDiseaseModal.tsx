import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getPestDiseaseInquiryUrl, PestDiseaseFormData } from '../utils/whatsapp';

interface PestDiseaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PROBLEM_TYPES = [
  { en: 'Insect / Pest', ur: 'کیڑا / سنڈی / رس چوسنے والے کیڑے' },
  { en: 'Disease', ur: 'بیماری / فنگس / بلائٹ' },
  { en: 'Leaf Problem', ur: 'پتوں کا مسئلہ (پیلاہٹ، مڑنا، دھبے)' },
  { en: 'Growth Problem', ur: 'نشوونما میں کمی / پودے کا قد نہ بڑھنا' },
  { en: 'Nutrient Deficiency Suspected', ur: 'غذائی کمی کا شبہ (زنک، نائٹروجن، وغیرہ)' },
  { en: 'Weed Problem', ur: 'جڑی بوٹیوں کا مسئلہ' },
  { en: 'Other', ur: 'دیگر مسئلہ' },
];

export const PestDiseaseModal: React.FC<PestDiseaseModalProps> = ({ isOpen, onClose }) => {
  const { isUrdu } = useLanguage();

  const [formData, setFormData] = useState<PestDiseaseFormData>({
    name: '',
    phone: '',
    village: '',
    crop: '',
    variety: '',
    acres: '',
    problemType: isUrdu ? PROBLEM_TYPES[0].ur : PROBLEM_TYPES[0].en,
    whenStarted: '',
    symptoms: '',
    affectedArea: '',
    previousSpray: '',
    additionalMessage: '',
  });

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = isUrdu ? 'نام درج کرنا ضروری ہے' : 'Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = isUrdu ? 'موبائل نمبر درج کرنا ضروری ہے' : 'Mobile number is required';
    }
    if (!formData.crop.trim()) {
      newErrors.crop = isUrdu ? 'فصل کا نام درج کریں' : 'Crop name is required';
    }
    if (!formData.symptoms.trim()) {
      newErrors.symptoms = isUrdu ? 'علامات یا مسئلہ مختصراً بیان کریں' : 'Please describe the symptoms';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const url = getPestDiseaseInquiryUrl(
      {
        ...formData,
        hasPhoto: !!photoPreview,
      },
      isUrdu ? 'ur' : 'en'
    );

    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      id="pest-disease-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        dir={isUrdu ? 'rtl' : 'ltr'}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-800 dark:text-slate-100 transition-colors"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/15 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">pest_control</span>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                {isUrdu ? '🐛 کیڑوں اور بیماریوں کی رپورٹ و حل' : '🐛 Pest & Disease Advisory Form'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isUrdu
                  ? 'اپنی فصل کے مسئلے کی تفصیل بتائیں تاکہ کسان ایگرو ماہرین بہترین دوا تجویز کر سکیں'
                  : 'Submit crop symptoms to receive tailored pesticide and treatment recommendations'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-800 dark:hover:text-white bg-slate-200/80 dark:bg-slate-800 rounded-xl transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-5 sm:p-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {isUrdu ? 'کسان کا نام *' : 'Farmer Name *'}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={isUrdu ? 'مثلاً: محمد اکرم' : 'e.g. Muhammad Akram'}
                className={`w-full px-3.5 py-2.5 text-xs bg-slate-100 dark:bg-slate-800 rounded-xl border ${
                  errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
                } focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-white`}
              />
              {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {isUrdu ? 'موبائل نمبر (WhatsApp) *' : 'Mobile / WhatsApp Number *'}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder={isUrdu ? '03001234567' : '03001234567'}
                className={`w-full px-3.5 py-2.5 text-xs bg-slate-100 dark:bg-slate-800 rounded-xl border ${
                  errors.phone ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
                } focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-white`}
              />
              {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Village */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {isUrdu ? 'گاؤں / علاقہ' : 'Village / Area'}
              </label>
              <input
                type="text"
                value={formData.village}
                onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                placeholder={isUrdu ? 'کوٹ ادو، سنوان...' : 'Kot Addu, Sanawan...'}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-white"
              />
            </div>

            {/* Crop */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {isUrdu ? 'فصل کا نام *' : 'Crop Name *'}
              </label>
              <input
                type="text"
                value={formData.crop}
                onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                placeholder={isUrdu ? 'کپاس، گندم، مکئی...' : 'Cotton, Wheat, Maize...'}
                className={`w-full px-3.5 py-2.5 text-xs bg-slate-100 dark:bg-slate-800 rounded-xl border ${
                  errors.crop ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
                } focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-white`}
              />
              {errors.crop && <p className="text-[11px] text-rose-500 mt-1">{errors.crop}</p>}
            </div>

            {/* Variety / Seed */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {isUrdu ? 'ورائٹی یا بیج' : 'Variety / Seed'}
              </label>
              <input
                type="text"
                value={formData.variety}
                onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
                placeholder={isUrdu ? 'مثلاً: بی ایس 15، اکبر...' : 'e.g. Akbar, BS-15...'}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Total Acres */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {isUrdu ? 'کل رقبہ (ایکڑ)' : 'Total Acres'}
              </label>
              <input
                type="text"
                value={formData.acres}
                onChange={(e) => setFormData({ ...formData, acres: e.target.value })}
                placeholder={isUrdu ? 'مثلاً: 5 ایکڑ' : 'e.g. 5 Acres'}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-white"
              />
            </div>

            {/* Problem Type Dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {isUrdu ? 'مسئلے کی نوعیت' : 'Problem Type'}
              </label>
              <select
                value={formData.problemType}
                onChange={(e) => setFormData({ ...formData, problemType: e.target.value })}
                className="w-full px-3 py-2.5 text-xs bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-white"
              >
                {PROBLEM_TYPES.map((pt, idx) => (
                  <option key={idx} value={isUrdu ? pt.ur : pt.en}>
                    {isUrdu ? pt.ur : pt.en}
                  </option>
                ))}
              </select>
            </div>

            {/* When Problem Started */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {isUrdu ? 'مسئلہ کب شروع ہوا' : 'When Problem Started'}
              </label>
              <input
                type="text"
                value={formData.whenStarted}
                onChange={(e) => setFormData({ ...formData, whenStarted: e.target.value })}
                placeholder={isUrdu ? '3 دن پہلے، پچھلے ہفتے...' : '3 days ago, last week...'}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Symptoms Description */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              {isUrdu ? 'فصل کی علامات اور مسئلہ کی تفصیل *' : 'Observed Symptoms & Problem Details *'}
            </label>
            <textarea
              rows={3}
              value={formData.symptoms}
              onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
              placeholder={
                isUrdu
                  ? 'پتے مڑ رہے ہیں، پیلے ہو رہے ہیں، کیڑا لگا ہوا ہے یا تنے پر دھبے نظر آ رہے ہیں...'
                  : 'Describe what you observe on leaves, stems, flowers, or roots...'
              }
              className={`w-full px-3.5 py-2.5 text-xs bg-slate-100 dark:bg-slate-800 rounded-xl border ${
                errors.symptoms ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
              } focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-white`}
            />
            {errors.symptoms && <p className="text-[11px] text-rose-500 mt-1">{errors.symptoms}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Affected Area */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {isUrdu ? 'متاثرہ رقبہ / پھیلاؤ' : 'Affected Area / Spread'}
              </label>
              <input
                type="text"
                value={formData.affectedArea}
                onChange={(e) => setFormData({ ...formData, affectedArea: e.target.value })}
                placeholder={isUrdu ? 'چند پودے، پورا کھیت، یا مخصوص کونہ' : 'Few patches, whole field, or corners'}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-white"
              />
            </div>

            {/* Previous Spray */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {isUrdu ? 'سابقہ اسپرے یا کیمیائی علاج' : 'Previous Spray / Treatment'}
              </label>
              <input
                type="text"
                value={formData.previousSpray}
                onChange={(e) => setFormData({ ...formData, previousSpray: e.target.value })}
                placeholder={isUrdu ? 'جو زہر یا کھاد پچھلے 10 دنوں میں استعمال کی' : 'Any chemical applied in last 10 days'}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Additional Message */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              {isUrdu ? 'اضافی پیغام یا سوال' : 'Additional Message or Question'}
            </label>
            <input
              type="text"
              value={formData.additionalMessage}
              onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
              placeholder={isUrdu ? 'کوئی خاص بات جو آپ بتانا چاہیں...' : 'Any extra details...'}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-white"
            />
          </div>

          {/* Optional Crop Photo with Preview */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-dashed border-slate-300 dark:border-slate-700">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              📸 {isUrdu ? 'فصل / پتے کی تصویر (اختیاری لیکن مفید)' : 'Crop Photo (Optional but Recommended)'}
            </label>

            {photoPreview ? (
              <div className="flex items-center gap-3">
                <img
                  src={photoPreview}
                  alt="Crop preview"
                  className="w-16 h-16 rounded-xl object-cover border border-emerald-500/50"
                />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300 truncate max-w-xs">
                    {photoName}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setPhotoPreview(null);
                      setPhotoName('');
                    }}
                    className="text-[11px] text-rose-500 hover:underline cursor-pointer"
                  >
                    {isUrdu ? 'تصویر ہٹائیں' : 'Remove Photo'}
                  </button>
                </div>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center p-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500/50 cursor-pointer bg-white/50 dark:bg-slate-900/50 transition-colors">
                <span className="material-symbols-outlined text-slate-400 text-[24px]">add_a_photo</span>
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-1">
                  {isUrdu ? 'تصویر منتخب کریں یا کیمرے سے کھینچیں' : 'Click to upload or take a photo'}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-sm rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>{isUrdu ? 'واٹس ایپ پر ماہر کو تفصیل بھیجیں' : 'Send via WhatsApp to Expert'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
