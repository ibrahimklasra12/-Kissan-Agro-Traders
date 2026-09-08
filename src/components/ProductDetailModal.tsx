import React, { useEffect } from 'react';
import { Product } from '../types';
import { BUSINESS_INFO } from '../data/agroData';
import { useInquiryCart } from '../context/InquiryCartContext';
import { useLanguage } from '../context/LanguageContext';
import { getProductWhatsAppUrl } from '../utils/whatsapp';
import { FavoriteButton } from './FavoriteButton';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { addToInquiry, items } = useInquiryCart();
  const { isUrdu, language } = useLanguage();

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  if (!product) return null;

  const currentCartItem = items.find((item) => item.product.id === product.id);
  const whatsappUrl = getProductWhatsAppUrl(product, language);

  return (
    <div
      id="product-detail-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        id="product-detail-modal-container"
        className="bg-white max-w-lg md:max-w-xl w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 my-auto relative animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full">
              <span className="material-symbols-outlined text-[14px]">eco</span>
              <span>{isUrdu ? product.categoryUrdu : product.categoryLabel}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Favorite Button in Header */}
            <FavoriteButton productId={product.id} size="sm" showLabel />

            <button
              id="modal-close-btn"
              type="button"
              onClick={onClose}
              aria-label="Close product modal"
              className="w-8 h-8 rounded-full bg-white hover:bg-slate-200/80 flex items-center justify-center text-slate-500 hover:text-slate-800 border border-slate-200/60 transition-colors cursor-pointer shadow-2xs"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto px-5 py-4 space-y-4">
          {/* Large Product Image */}
          <div className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl bg-slate-50 overflow-hidden border border-slate-100 shadow-inner flex items-center justify-center">
            <img
              src={product.imageUrl}
              alt={product.imageAlt}
              className="w-full h-full object-contain sm:object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Badges */}
            <div className={`absolute top-3 ${isUrdu ? 'right-3' : 'left-3'} bg-white/95 backdrop-blur-md text-emerald-800 text-xs px-3 py-1 rounded-full border border-emerald-200/80 font-extrabold shadow-xs`}>
              {product.badge}
            </div>
            <div className={`absolute top-3 ${isUrdu ? 'left-3' : 'right-3'} bg-emerald-900/90 backdrop-blur-md text-amber-300 text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-xs`}>
              <span className="material-symbols-outlined text-[14px]">verified</span>
              <span>{isUrdu ? '100% اصل پروڈکٹ' : '100% Genuine'}</span>
            </div>
          </div>

          {/* Product Titles */}
          <div>
            <div className="flex items-baseline justify-between gap-2">
              <h3 id="modal-product-title" className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {isUrdu ? product.nameUrdu || product.name : product.name}
              </h3>
              <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/50">
                {isUrdu ? product.tagline : product.taglineEnglish || product.tagline}
              </span>
            </div>
          </div>

          {/* Product Description */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-slate-500 mb-1.5">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">description</span>
              <span>{isUrdu ? 'تفصیل و فصل کی رہنمائی' : 'Description & Crop Guidance'}</span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {isUrdu ? product.descriptionUrdu : product.descriptionEnglish || product.descriptionUrdu}
            </p>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60 flex items-center gap-2 text-emerald-900 font-semibold">
              <span className="material-symbols-outlined text-[18px] text-emerald-600">verified_user</span>
              <span>{isUrdu ? 'حکومتی سرٹیفائیڈ اور اصل' : 'Government Certified'}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60 flex items-center gap-2 text-emerald-900 font-semibold">
              <span className="material-symbols-outlined text-[18px] text-emerald-600">local_shipping</span>
              <span>{isUrdu ? 'مفت ڈیلیوری کوٹ ادو' : 'Free Delivery in Kot Addu'}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-100/80 border border-slate-200/70 flex items-center gap-2 text-slate-700 font-semibold">
              <span className="material-symbols-outlined text-[18px] text-slate-600">psychology</span>
              <span>{isUrdu ? 'مفت زرعی مشورہ دستیاب' : 'Free Crop Advisory'}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-100/80 border border-slate-200/70 flex items-center gap-2 text-slate-700 font-semibold">
              <span className="material-symbols-outlined text-[18px] text-slate-600">inventory</span>
              <span>{isUrdu ? 'تازہ برانڈڈ اسٹاک' : 'Fresh Branded Stock'}</span>
            </div>
          </div>
        </div>

        {/* Modal Action Buttons Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-white space-y-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Action 1: Add to Inquiry */}
            <button
              id={`modal-add-to-inquiry-${product.id}`}
              type="button"
              onClick={() => addToInquiry(product, 1)}
              className="w-full py-3 px-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300/80 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-2xs"
            >
              <span className="material-symbols-outlined text-[18px] text-emerald-700">add_shopping_cart</span>
              <span>
                {currentCartItem
                  ? isUrdu
                    ? `انکوائری میں شامل (${currentCartItem.quantity})`
                    : `In Cart (${currentCartItem.quantity})`
                  : isUrdu
                  ? '➕ انکوائری میں شامل کریں'
                  : '➕ Add to Inquiry'}
              </span>
            </button>

            {/* Action 2: WhatsApp Product Inquiry */}
            <a
              id={`modal-whatsapp-inquiry-${product.id}`}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full py-3 px-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-95 border border-green-400/40 text-center"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>{isUrdu ? '💬 واٹس ایپ پر معلومات لیں' : '💬 Inquire on WhatsApp'}</span>
            </a>
          </div>

          <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-slate-400">pin_drop</span>
            <span>
              {isUrdu
                ? `مدینہ چوک بائی پاس، کوٹ ادو • ہیلپ لائن: ${BUSINESS_INFO.phone}`
                : `Madina Chowk Bypass, Kot Addu • Helpline: ${BUSINESS_INFO.phone}`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
