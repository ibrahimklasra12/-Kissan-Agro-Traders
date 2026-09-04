import React, { useState, useMemo } from 'react';
import { PRODUCTS, BUSINESS_INFO } from '../data/agroData';
import { Product } from '../types';

interface ProductsSectionProps {
  selectedCategory: 'all' | 'pesticides' | 'fertilizers' | 'seeds' | 'drone';
  onCategoryChange: (category: 'all' | 'pesticides' | 'fertilizers' | 'seeds' | 'drone') => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { key: 'all', label: 'All Products', urdu: 'تمام' },
    { key: 'pesticides', label: 'Pesticides', urdu: 'کیڑے مار ادویات' },
    { key: 'fertilizers', label: 'Fertilizers', urdu: 'کھادیں' },
    { key: 'seeds', label: 'Seeds', urdu: 'بیج' },
    { key: 'drone', label: 'Drone Spray', urdu: 'ڈرون سروس' },
  ] as const;

  // Filter products by category and reactive real-time search
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((p) => {
        return (
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.categoryUrdu.toLowerCase().includes(q) ||
          p.descriptionUrdu.toLowerCase().includes(q) ||
          p.badge.toLowerCase().includes(q)
        );
      });
    }

    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-12 lg:py-16 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200/60">
              <span className="material-symbols-outlined text-[15px]">inventory_2</span>
              <span>Direct Supply &amp; Guaranteed Quality</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
              Our Products / <span className="urdu-text font-bold text-emerald-700" dir="rtl">زرعی مصنوعات</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-1 max-w-xl">
              Direct farmer orders and institutional bulk inquiries. Authentic supplies with expert field guidance.
            </p>
          </div>

          {/* Search Bar - Feature 3 */}
          <div className="w-full md:w-80 lg:w-96">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input
                id="product-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="🔎 Product ka naam search karein..."
                aria-label="Product search"
                className="w-full pl-10 pr-10 py-3 rounded-2xl bg-white border border-slate-200 shadow-xs text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>
            {searchQuery && (
              <div className="mt-1.5 text-xs text-slate-500 flex items-center justify-between px-1">
                <span>
                  Found: <strong className="text-emerald-700">{filteredProducts.length}</strong> products
                </span>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-emerald-600 hover:underline font-semibold cursor-pointer"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Categories Bar - Feature 2 */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 bg-white p-3 rounded-2xl border border-slate-200/90 shadow-2xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 hidden sm:inline">
              Categories:
            </span>
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  id={`product-tab-${tab.key}`}
                  type="button"
                  onClick={() => onCategoryChange(tab.key)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-emerald-800 text-white shadow-xs scale-102'
                      : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`urdu-text text-[11px] ${isActive ? 'text-emerald-200' : 'text-slate-400'}`} dir="rtl">
                    ({tab.urdu})
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs text-slate-500 font-medium px-2">
            Total Available: <strong className="text-slate-800">{PRODUCTS.length} Items</strong>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="bg-white rounded-3xl border border-slate-200/90 p-4 flex flex-col justify-between shadow-sm card-premium-3d border-glow-emerald group"
              >
                <div>
                  {/* Product Image Frame with Zoom & Badges */}
                  <div className="relative aspect-square rounded-2xl bg-slate-50 overflow-hidden mb-3.5 border border-slate-100/80">
                    <img
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md text-emerald-800 text-[11px] px-2.5 py-0.5 rounded-full border border-emerald-200/60 font-extrabold shadow-xs transition-transform duration-300 group-hover:scale-105">
                      {product.badge}
                    </div>
                    <div className="absolute top-2.5 right-2.5 bg-emerald-900/85 backdrop-blur-md text-amber-300 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1 shadow-xs">
                      <span className="material-symbols-outlined text-[13px]">verified</span>
                      <span>100% اصل</span>
                    </div>
                  </div>

                  <div className="px-1">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
                        {product.tagline}
                      </span>
                      <span className="text-[10px] font-medium text-slate-400 capitalize">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-800 leading-tight transition-colors duration-200 group-hover:text-emerald-900">
                      {product.name}
                    </h3>
                    <p className="urdu-text text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed line-clamp-2" dir="rtl">
                      {product.descriptionUrdu}
                    </p>
                  </div>
                </div>

                {/* Product Actions: WhatsApp for Price & Free Delivery */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  {/* Primary Action: WhatsApp for Price */}
                  <a
                    id={`product-whatsapp-${product.id}`}
                    className="btn-shimmer w-full flex items-center justify-between bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-bold py-2.5 px-3.5 rounded-2xl shadow-sm hover:shadow-md hover:shadow-green-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-95 border border-green-400/40 group/btn"
                    href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(`Salam Kissan Agro Traders, what is the price and availability of: ${product.name} (${product.tagline})?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover/btn:rotate-12">chat</span>
                      <span>WhatsApp for Price</span>
                    </div>
                    <span className="urdu-text text-xs text-white/90 font-semibold" dir="rtl">قیمت معلوم کریں</span>
                  </a>

                  {/* Free Delivery Label directly underneath WhatsApp for Price */}
                  <div className="flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200/60 text-emerald-800 text-xs font-bold transition-colors group-hover:bg-emerald-100/80">
                    <span className="material-symbols-outlined text-[15px] text-emerald-600">local_shipping</span>
                    <span>🚚 Free Delivery</span>
                    <span className="text-slate-300 mx-0.5">•</span>
                    <span className="urdu-text text-[11px] font-semibold text-emerald-700" dir="rtl">مفت ڈیلیوری</span>
                  </div>

                  {/* Info Modal Trigger */}
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-1.5 bg-slate-100/80 hover:bg-slate-200/80 hover:text-emerald-800 rounded-xl text-xs font-semibold text-slate-600 text-center transition-all duration-200 hover:scale-[1.01] cursor-pointer"
                  >
                    فصل کی رہنمائی و خوراک دیکھیں
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 max-w-md mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-4">
              <span className="material-symbols-outlined text-[32px]">search_off</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">کوئی پروڈکٹ نہیں ملی</h3>
            <p className="text-xs text-slate-500 mb-5">
              "{searchQuery}" کے نام سے کوئی پراڈکٹ نہیں ملی۔ آپ براہِ راست واٹس ایپ پر معلوم کر سکتے ہیں۔
            </p>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  onCategoryChange('all');
                }}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-colors"
              >
                تمام پروڈکٹس دیکھیں (Reset Search)
              </button>
              <a
                href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(`Salam Kissan Agro Traders, I am searching for: ${searchQuery}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>واٹس ایپ پر پوچھیں</span>
              </a>
            </div>
          </div>
        )}

        {/* Advisory Quick Note */}
        <div className="mt-8 p-4 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-700">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
            <span className="material-symbols-outlined text-[22px] text-emerald-600">psychology</span>
            <span>کسان بھائی اپنی فصل یا کیڑوں کی تصویر واٹس ایپ پر بھیج کر مفت زرعی مشورہ اور درست خوراک معلوم کر سکتے ہیں۔</span>
          </div>
          <a
            href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, I want to send crop photos for diagnosis.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white text-xs font-bold transition-all whitespace-nowrap"
          >
            <span>تصویر بھیجیں (WhatsApp)</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          id="product-modal-backdrop"
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            id="product-modal-content"
            className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  {selectedProduct.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-800 mt-0.5">
                  {selectedProduct.name}
                </h3>
                <span className="text-sm font-bold text-slate-500">
                  {selectedProduct.tagline}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden mb-4 border border-slate-100 aspect-16/10 bg-slate-50">
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.imageAlt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 mb-5">
              <h4 className="text-xs font-bold uppercase text-slate-400 mb-1">تفصیل و فصل کی حفاظت:</h4>
              <p className="urdu-text text-sm text-slate-700 leading-relaxed" dir="rtl">
                {selectedProduct.descriptionUrdu}
              </p>
            </div>

            <div className="space-y-2.5">
              <a
                href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(`Salam Kissan Agro Traders, I want to confirm the rate and order for ${selectedProduct.name} (${selectedProduct.tagline}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl text-xs sm:text-sm font-bold text-center transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-green-500/25 border border-green-400/40"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp پر ریٹ معلوم کریں اور آرڈر کریں</span>
              </a>

              <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold">
                <span className="material-symbols-outlined text-[16px] text-emerald-600">local_shipping</span>
                <span>🚚 Free Doorstep Delivery across Kot Addu</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
