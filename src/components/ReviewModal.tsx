import React, { useState } from 'react';
import { CustomerReview } from './CustomerReviews';
import { useToast } from '../context/ToastContext';
import { useLanguage } from '../context/LanguageContext';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewAdded?: (newReview: CustomerReview) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  onReviewAdded,
}) => {
  const { isUrdu } = useLanguage();
  const { showToast } = useToast();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cropOrService, setCropOrService] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [reviewText, setReviewText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const trimmedName = name.trim();
    const trimmedReview = reviewText.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setValidationError(isUrdu ? 'برائے مہربانی اپنا نام درج کریں۔' : 'Please enter your name.');
      return;
    }

    if (!trimmedReview || trimmedReview.length < 5) {
      setValidationError(
        isUrdu
          ? 'برائے مہربانی اپنی رائے یا کمنٹ کم از کم چند الفاظ میں درج کریں۔'
          : 'Please write at least a few words in your review.'
      );
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newReview: CustomerReview = {
        id: `user-rev-${Date.now()}`,
        farmerName: trimmedName,
        location: phone ? (isUrdu ? `رابطہ: ${phone}` : `Phone: ${phone}`) : (isUrdu ? 'کسان / کسٹمر' : 'Farmer / Customer'),
        cropOrService: cropOrService.trim() || (isUrdu ? 'عام زرعی سروس' : 'General Farm Service'),
        rating,
        reviewUrdu: trimmedReview,
        reviewEnglish: trimmedReview,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        verified: false,
      };

      // Save to localStorage
      try {
        const existing = localStorage.getItem('kissan_user_reviews');
        const list: CustomerReview[] = existing ? JSON.parse(existing) : [];
        list.unshift(newReview);
        localStorage.setItem('kissan_user_reviews', JSON.stringify(list));
      } catch (err) {
        console.warn('LocalStorage save failed:', err);
      }

      // Notify parent & dispatch custom event
      if (onReviewAdded) {
        onReviewAdded(newReview);
      }
      window.dispatchEvent(new CustomEvent('kissan-review-added', { detail: newReview }));

      setIsSubmitting(false);
      setIsSuccess(true);
      showToast(
        'success',
        isUrdu ? 'شکریہ! رائے موصول ہو گئی' : 'Thank You! Review Received',
        isUrdu ? 'آپ کی قیمتی رائے کامیابی سے محفوظ ہو گئی ہے!' : 'Your feedback has been saved successfully!'
      );

      setTimeout(() => {
        setIsSuccess(false);
        setName('');
        setPhone('');
        setCropOrService('');
        setRating(5);
        setReviewText('');
        onClose();
      }, 2000);
    }, 600);
  };

  return (
    <div
      id="review-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isSubmitting) onClose();
      }}
    >
      <div
        id="review-modal-content"
        dir={isUrdu ? 'rtl' : 'ltr'}
        className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 max-w-lg w-full border border-slate-200 dark:border-slate-700 shadow-2xl relative my-auto animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col justify-between overflow-y-auto"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          disabled={isSubmitting}
          className={`absolute top-4 ${isUrdu ? 'left-4' : 'right-4'} w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer`}
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {isSuccess ? (
          <div className="py-10 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 shadow-inner">
              <span className="material-symbols-outlined text-[36px] animate-bounce">check_circle</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-800 dark:text-white mb-2">
              {isUrdu ? 'شکریہ! آپ کی رائے مل گئی' : 'Thank You! Review Received'}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm leading-relaxed">
              {isUrdu
                ? 'کسان ایگرو ٹریڈرز پر آپ کے اعتماد کا شکریہ۔ آپ کا ریویو کامیابی سے محفوظ ہو چکا ہے۔'
                : 'Thank you for trusting Kissan Agro Traders. Your review has been saved successfully.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Modal Title & Intro */}
            <div className={`text-center ${isUrdu ? 'sm:text-right pl-8' : 'sm:text-left pr-8'}`}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200/60 dark:border-amber-800/60">
                <span className="material-symbols-outlined text-[16px] text-amber-600 dark:text-amber-400">rate_review</span>
                <span>{isUrdu ? 'صارفین کی رائے' : 'Customer Feedback'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight flex items-center gap-2">
                <span>{isUrdu ? '⭐ اپنی رائے کا اظہار کریں' : '⭐ Share Your Feedback'}</span>
              </h2>
              <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-400 font-semibold mt-1">
                {isUrdu
                  ? 'کسان ایگرو ٹریڈرز کی ادویات، کھاد یا ڈرون سروس کے بارے میں اپنی قیمتی رائے دیں۔'
                  : 'Share your authentic experience regarding our medicines, fertilizers, seeds, or drone service.'}
              </p>
            </div>

            {validationError && (
              <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">error</span>
                <span>{validationError}</span>
              </div>
            )}

            {/* Field: Naam */}
            <div>
              <label htmlFor="review-name-input" className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                {isUrdu ? 'آپ کا نام' : 'Your Name'} <span className="text-rose-500">*</span>
              </label>
              <input
                id="review-name-input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={isUrdu ? 'مثال: ملک ساجد، چوہدری طارق، محمد افضل' : 'e.g. Malik Sajid, Chaudhry Tariq'}
                className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Field: Mobile (optional) & Crop/Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="review-phone-input" className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                  {isUrdu ? 'موبائل نمبر (اختیاری)' : 'Mobile (Optional)'}
                </label>
                <input
                  id="review-phone-input"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0300-XXXXXXX"
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-400"
                />
              </div>
              <div>
                <label htmlFor="review-service-input" className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                  {isUrdu ? 'فصل یا سروس' : 'Crop or Service'}
                </label>
                <input
                  id="review-service-input"
                  type="text"
                  value={cropOrService}
                  onChange={(e) => setCropOrService(e.target.value)}
                  placeholder={isUrdu ? 'مثال: کپاس، گندم، ڈرون اسپرے' : 'e.g. Cotton, Wheat, Drone Spray'}
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Field: Rating (Interactive Stars) */}
            <div>
              <span className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                {isUrdu ? 'ریٹنگ:' : 'Rating:'}
              </span>
              <div className="flex items-center gap-1.5 p-2 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 w-fit" dir="ltr">
                {[1, 2, 3, 4, 5].map((star) => {
                  const isFilled = (hoverRating ?? rating) >= star;
                  return (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(null)}
                      className="p-1 text-amber-400 hover:scale-115 active:scale-95 transition-transform cursor-pointer"
                      title={`${star} Stars`}
                    >
                      <span className="material-symbols-outlined text-[24px] fill-current">
                        {isFilled ? 'star' : 'star_border'}
                      </span>
                    </button>
                  );
                })}
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300 ml-2">
                  {rating} / 5 Stars
                </span>
              </div>
            </div>

            {/* Field: Aap ki Rai */}
            <div>
              <label htmlFor="review-text-input" className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                {isUrdu ? 'آپ کی رائے' : 'Your Review'} <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="review-text-input"
                rows={3}
                required
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder={
                  isUrdu
                    ? 'کسان ایگرو ٹریڈرز کی خدمات، ادویات کے نتائج یا ویب سائٹ کے بارے میں اپنی سچی رائے لکھیں...'
                    : 'Write your honest feedback about our products, delivery, or drone service...'
                }
                className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-400 leading-relaxed resize-none"
              />
            </div>

            {/* Transparent Note regarding local save */}
            <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-emerald-600 dark:text-emerald-400">info</span>
              <span>
                {isUrdu
                  ? 'آپ کا ریویو ڈیوائس پر محفوظ ہو کر فوری طور پر کسٹمر ریویوز میں ظاہر ہو جائے گا۔'
                  : 'Your review will be saved on your device and instantly appear in customer reviews.'}
              </span>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex items-center gap-3">
              <button
                id="submit-review-btn"
                type="submit"
                disabled={isSubmitting}
                className="flex-1 btn-shimmer inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-extrabold py-3 px-5 rounded-2xl transition-all duration-200 active:scale-95 shadow-md disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{isUrdu ? 'محفوظ ہو رہا ہے...' : 'Submitting...'}</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>{isUrdu ? 'ریویو بھیجیں' : 'Submit Review'}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
