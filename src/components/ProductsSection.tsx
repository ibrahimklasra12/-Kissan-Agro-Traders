import React, { useState, useMemo } from 'react';
import { PRODUCTS, BUSINESS_INFO } from '../data/agroData';
import { Product } from '../types';
import { ProductDetailModal } from './ProductDetailModal';
import { useInquiryCart } from '../context/InquiryCartContext';
import { useFavorites } from '../context/FavoritesContext';
import { FavoriteButton } from './FavoriteButton';

interface ProductsSectionProps {
  selectedCategory: 'all' | 'pesticides' | 'fertilizers' | 'seeds' | 'drone' | 'favorites';
  onCategoryChange: (category: 'all' | 'pesticides' | 'fertilizers' | 'seeds' | 'drone' | 'favorites') => void;
  onSelectProduct?: (product: Product) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  selectedCategory,
  onCategoryChange,
  onSelectProduct,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const { addToInquiry } = useInquiryCart();
  const { isFavorite, favoritesCount } = useFavorites();

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    if (onSelectProduct) {
      onSelectProduct(product);
    }
  };

  const filterTabs = [
    { key: 'all', label: 'All Products', urdu: 'تمام' },
    { key: 'pesticides', label: 'Pesticides', urdu: 'کیڑے مار ادویات' },
    { key: 'fertilizers', label: 'Fertilizers', urdu: 'کھادیں' },
    { key: 'seeds', label: 'Seeds', urdu: 'بیج' },
    { key: 'drone', label: 'Drone Spray', urdu: 'ڈرون سروس' },
  ] as const;

  // Filter products by category, favorites, and reactive search
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    if (selectedCategory === 'favorites') {
      result = result.filter((p) => isFavorite(p.id));
    } else if (selectedCategory !== 'all') {
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
  }, [selectedCategory, searchQuery, isFavorite]);

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

          {/* Animated Search Bar - Feature 8 */}
          <div className="w-full md:w-80 lg:w-96">
            <div
              className={`relative rounded-2xl transition-all duration-300 ${
                isSearchFocused
                  ? 'ring-2 ring-emerald-500 shadow-md bg-white'
                  : 'bg-white/90 border border-slate-200/90 shadow-2xs hover:border-slate-300'
              }`}
            >
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <span
                  className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${
                    isSearchFocused ? 'text-emerald-600 scale-110' : 'text-slate-400'
                  }`}
                >
                  search
                </span>
              </div>
              <input
                id="product-search-input"
                type="text"
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="🔎 Product ka naam search karein..."
                aria-label="Product search"
                className="w-full pl-10 pr-10 py-3 rounded-2xl bg-transparent border-none text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer animate-fade-in"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>

            {searchQuery && (
              <div className="mt-1.5 text-xs text-slate-500 flex items-center justify-between px-1 animate-fade-in">
                <span>
                  Found: <strong className="text-emerald-700 font-bold">{filteredProducts.length}</strong> products
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

        {/* Categories Bar & Favorites Tab - Feature 7 */}
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
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 active:scale-95 ${
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

            {/* ❤️ My Favorites Tab */}
            <button
              id="product-tab-favorites"
              type="button"
              onClick={() => onCategoryChange('favorites')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 active:scale-95 ${
                selectedCategory === 'favorites'
                  ? 'bg-rose-600 text-white shadow-xs scale-102'
                  : 'bg-rose-50/80 border border-rose-200/80 text-rose-700 hover:bg-rose-100'
              }`}
            >
              <span>❤️ My Favorites</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                  selectedCategory === 'favorites' ? 'bg-white text-rose-600' : 'bg-rose-200/80 text-rose-900'
                }`}
              >
                {favoritesCount}
              </span>
            </button>
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
                className="bg-white rounded-3xl border border-slate-200/90 p-4 flex flex-col justify-between shadow-xs card-premium-3d border-glow-emerald group transition-all duration-300 relative"
              >
                {/* Product Image Frame with Zoom & Badges & Favorite Heart */}
                <div className="relative aspect-square rounded-2xl bg-slate-50 overflow-hidden mb-3.5 border border-slate-100/80">
                  <div
                    className="w-full h-full cursor-pointer"
                    onClick={() => handleOpenProduct(product)}
                    title={`${product.name} - View Details`}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-108"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>

                  {/* Left Badge: Product Type */}
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md text-emerald-800 text-[11px] px-2.5 py-0.5 rounded-full border border-emerald-200/60 font-extrabold shadow-xs transition-transform duration-300 group-hover:scale-105 pointer-events-none">
                    {product.badge}
                  </div>

                  {/* Right: ❤️ Favorite Heart Button */}
                  <div className="absolute top-2.5 right-2.5 z-10">
                    <FavoriteButton productId={product.id} size="md" />
                  </div>

                  {/* Bottom: 100% Genuine Tag */}
                  <div className="absolute bottom-2.5 left-2.5 bg-emerald-950/85 backdrop-blur-md text-amber-300 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1 shadow-xs pointer-events-none">
                    <span className="material-symbols-outlined text-[13px]">verified</span>
                    <span>100% اصل</span>
                  </div>
                </div>

                {/* Clickable Area for Info */}
                <div
                  className="px-1 cursor-pointer"
                  onClick={() => handleOpenProduct(product)}
                  title={`${product.name} - View Details`}
                >
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

                {/* Product Actions: Add to Inquiry, WhatsApp for Price & Details */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  {/* Action Row 1: Add to Inquiry & View Details */}
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      id={`card-add-inquiry-${product.id}`}
                      type="button"
                      onClick={() => addToInquiry(product, 1)}
                      className="py-2 px-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 active:scale-95 text-emerald-900 border border-emerald-200 text-xs font-bold flex items-center justify-center gap-1 transition-all cursor-pointer shadow-2xs"
                    >
                      <span className="material-symbols-outlined text-[16px] text-emerald-700">add_shopping_cart</span>
                      <span>+ Inquiry</span>
                    </button>

                    <button
                      id={`card-view-details-${product.id}`}
                      type="button"
                      onClick={() => handleOpenProduct(product)}
                      className="py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 text-xs font-bold flex items-center justify-center gap-1 transition-all cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">info</span>
                      <span>تفصیل دیکھیں</span>
                    </button>
                  </div>

                  {/* Primary Action: One-Tap WhatsApp for Price */}
                  <a
                    id={`product-whatsapp-${product.id}`}
                    className="btn-shimmer w-full flex items-center justify-between bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-bold py-2.5 px-3.5 rounded-2xl shadow-xs hover:shadow-md hover:shadow-green-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-95 border border-green-400/40 group/btn"
                    href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(`Assalam o Alaikum!\nMujhe ${product.name} (${product.tagline}) ke bare mein maloomat chahiye.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover/btn:rotate-12">chat</span>
                      <span>WhatsApp for Price</span>
                    </div>
                    <span className="urdu-text text-xs text-white/90 font-semibold" dir="rtl">قیمت معلوم کریں</span>
                  </a>

                  {/* Free Delivery Label */}
                  <div className="flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200/60 text-emerald-800 text-xs font-bold transition-colors group-hover:bg-emerald-100/80">
                    <span className="material-symbols-outlined text-[15px] text-emerald-600">local_shipping</span>
                    <span>🚚 Free Delivery</span>
                    <span className="text-slate-300 mx-0.5">•</span>
                    <span className="urdu-text text-[11px] font-semibold text-emerald-700" dir="rtl">مفت ڈیلیوری</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : selectedCategory === 'favorites' ? (
          /* Empty Favorites State */
          <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 max-w-md mx-auto shadow-sm animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-4 text-3xl">
              <span>♡</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">
              ابھی کوئی پسندیدہ پروڈکٹ نہیں ہے
            </h3>
            <p className="text-xs text-slate-500 mb-5 leading-relaxed">
              Abhi aap ne koi favorite product shamil nahi ki. Kisi bhi product par bane dil (❤️) ke nishan par click karke use yahan mehfooz kar sakte hain.
            </p>
            <button
              type="button"
              onClick={() => onCategoryChange('all')}
              className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all active:scale-95 shadow-xs cursor-pointer"
            >
              تمام پروڈکٹس دیکھیں (Browse All Products)
            </button>
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 max-w-md mx-auto shadow-sm animate-fade-in">
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
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-colors cursor-pointer"
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
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white text-xs font-bold transition-all whitespace-nowrap cursor-pointer"
          >
            <span>تصویر بھیجیں (WhatsApp)</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Reusable Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
