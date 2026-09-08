import React, { useState, useEffect } from 'react';
import { useInquiryCart } from '../context/InquiryCartContext';
import { useLanguage } from '../context/LanguageContext';
import { getProductCartInquiryUrl } from '../utils/whatsapp';

export const InquiryDrawer: React.FC = () => {
  const {
    items,
    totalCount,
    isDrawerOpen,
    setIsDrawerOpen,
    updateQuantity,
    removeFromInquiry,
    clearInquiry,
    customerDetails,
    setCustomerDetails,
  } = useInquiryCart();

  const { isUrdu, language } = useLanguage();
  const [showCustomerForm, setShowCustomerForm] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen, setIsDrawerOpen]);

  // Lock scroll
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  if (!isDrawerOpen) return null;

  const handleSendWhatsAppInquiry = () => {
    if (items.length === 0) return;

    const whatsappUrl = getProductCartInquiryUrl(items, customerDetails, language);

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="inquiry-drawer-backdrop"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex justify-end transition-opacity duration-300"
      onClick={() => setIsDrawerOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-drawer-title"
    >
      <div
        id="inquiry-drawer-panel"
        className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-slate-200/90 animate-in slide-in-from-right duration-300 relative"
        onClick={(e) => e.stopPropagation()}
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/90 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="inquiry-drawer-title" className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                  {isUrdu ? 'پروڈکٹ انکوائری کارٹ' : 'Product Inquiry Cart'}
                </h2>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-2 py-0.5 rounded-full">
                  {totalCount}
                </span>
              </div>
              <p className="text-xs text-emerald-800 font-bold">
                {isUrdu ? 'منتخب زرعی اشیاء کی انکوائری لسٹ' : 'Selected Agricultural Items Inquiry List'}
              </p>
            </div>
          </div>

          <button
            id="close-inquiry-drawer-btn"
            type="button"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close cart drawer"
            className="w-9 h-9 rounded-full bg-white hover:bg-slate-200/80 flex items-center justify-center text-slate-500 hover:text-slate-800 border border-slate-200 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            /* Empty State */
            <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
              <div className="w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center text-slate-400 mb-4 shadow-inner">
                <span className="material-symbols-outlined text-[38px] text-slate-400">remove_shopping_cart</span>
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-1">
                {isUrdu ? 'آپ کی انکوائری لسٹ خالی ہے' : 'Your Inquiry Cart is Empty'}
              </h3>
              <p className="text-xs text-slate-500 max-w-xs mb-6">
                {isUrdu
                  ? 'اپنی مطلوبہ زرعی ادویات، کھادیں یا بیج تلاش کریں اور "کارٹ میں شامل کریں" پر کلک کریں۔'
                  : 'Find your desired pesticides, fertilizers or seeds and click "Add to Inquiry".'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsDrawerOpen(false);
                  const productsEl = document.getElementById('products');
                  if (productsEl) {
                    productsEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-5 py-2.5 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-extrabold shadow-sm transition-all hover:scale-[1.02] cursor-pointer flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">search</span>
                <span>{isUrdu ? 'پروڈکٹس دیکھیں' : 'Browse Products'}</span>
              </button>
            </div>
          ) : (
            /* Item List */
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {isUrdu ? `منتخب اشیاء (${items.length})` : `Selected Items (${items.length})`}
                </span>
                <button
                  type="button"
                  onClick={clearInquiry}
                  className="text-xs text-rose-600 hover:text-rose-700 font-bold hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[14px]">delete_sweep</span>
                  <span>{isUrdu ? 'لسٹ خالی کریں' : 'Clear Inquiry'}</span>
                </button>
              </div>

              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  id={`inquiry-cart-item-${product.id}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:border-emerald-200 transition-colors"
                >
                  {/* Thumbnail Image */}
                  <div className="w-16 h-16 rounded-xl bg-white overflow-hidden border border-slate-200/70 shrink-0 flex items-center justify-center">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="text-sm font-extrabold text-slate-900 truncate">
                        {isUrdu ? product.nameUrdu || product.name : product.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => removeFromInquiry(product.id)}
                        aria-label={`Remove ${product.name}`}
                        className="text-slate-400 hover:text-rose-600 p-1 rounded-lg transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">close</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-emerald-700 font-bold truncate">
                      {isUrdu ? product.tagline : product.taglineEnglish || product.tagline}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-200/50">
                      <span className="text-[11px] text-slate-400 font-semibold">
                        {isUrdu ? 'تعداد:' : 'Quantity:'}
                      </span>
                      <div className="flex items-center gap-1.5 bg-white px-1.5 py-0.5 rounded-lg border border-slate-200" dir="ltr">
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, -1)}
                          aria-label="Decrease quantity"
                          className="w-6 h-6 rounded-md hover:bg-slate-100 flex items-center justify-center text-slate-600 font-bold transition-colors cursor-pointer"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-xs font-black text-slate-800">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, 1)}
                          aria-label="Increase quantity"
                          className="w-6 h-6 rounded-md hover:bg-slate-100 flex items-center justify-center text-slate-600 font-bold transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Optional Customer Details Form */}
              <div className="mt-4 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setShowCustomerForm(!showCustomerForm)}
                  className="w-full flex items-center justify-between text-xs font-bold text-slate-700 p-2.5 rounded-xl bg-slate-100/80 hover:bg-slate-200/70 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-emerald-700">person</span>
                    <span>{isUrdu ? 'کسٹمر تفصیلات (اختیاری)' : 'Customer Details (Optional)'}</span>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-slate-400">
                    {showCustomerForm ? 'expand_less' : 'expand_more'}
                  </span>
                </button>

                {showCustomerForm && (
                  <div className="mt-2.5 p-3 rounded-2xl bg-white border border-slate-200 space-y-2.5 animate-in fade-in duration-150">
                    <div>
                      <label htmlFor="inquiry-cust-name" className="block text-[11px] font-bold text-slate-600 mb-1">
                        {isUrdu ? 'کسان کا نام:' : 'Farmer Name:'}
                      </label>
                      <input
                        id="inquiry-cust-name"
                        type="text"
                        value={customerDetails.name}
                        onChange={(e) =>
                          setCustomerDetails((prev) => ({ ...prev, name: e.target.value }))
                        }
                        placeholder={isUrdu ? 'مثال: محمد احمد' : 'e.g. Muhammad Ahmad'}
                        className="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-cust-phone" className="block text-[11px] font-bold text-slate-600 mb-1">
                        {isUrdu ? 'موبائل نمبر:' : 'Mobile Number:'}
                      </label>
                      <input
                        id="inquiry-cust-phone"
                        type="tel"
                        value={customerDetails.phone}
                        onChange={(e) =>
                          setCustomerDetails((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        placeholder="e.g. 0300-1234567"
                        className="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-cust-area" className="block text-[11px] font-bold text-slate-600 mb-1">
                        {isUrdu ? 'علاقہ یا چک نمبر:' : 'Village / Area:'}
                      </label>
                      <input
                        id="inquiry-cust-area"
                        type="text"
                        value={customerDetails.villageArea}
                        onChange={(e) =>
                          setCustomerDetails((prev) => ({ ...prev, villageArea: e.target.value }))
                        }
                        placeholder={isUrdu ? 'مثال: کوٹ ادو بائی پاس، موضع...' : 'e.g. Kot Addu, Chak No...'}
                        className="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-2.5">
            {/* Primary Action Button: WhatsApp Inquiry */}
            <button
              id="send-whatsapp-inquiry-btn"
              type="button"
              onClick={handleSendWhatsAppInquiry}
              className="btn-shimmer w-full py-3.5 px-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white text-sm font-extrabold flex items-center justify-center gap-2 shadow-md hover:shadow-green-500/25 transition-all duration-300 hover:scale-[1.01] active:scale-95 border border-green-400/40 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>{isUrdu ? '📲 واٹس ایپ پر انکوائری بھیجیں' : '📲 Send Inquiry via WhatsApp'}</span>
            </button>

            {/* Delivery Trust Note */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-emerald-800 font-semibold bg-emerald-50/80 py-2 px-3 rounded-xl border border-emerald-200/60">
              <span className="material-symbols-outlined text-[15px] text-emerald-600">local_shipping</span>
              <span>
                {isUrdu
                  ? 'مفت ہوم و فارم ڈیلیوری کوٹ ادو اور ملحقہ علاقوں میں'
                  : 'Free Home & Farm Delivery in Kot Addu and Surrounding Areas'}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
