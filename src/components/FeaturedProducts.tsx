import React from 'react';
import { PRODUCTS, BUSINESS_INFO } from '../data/agroData';
import { Product } from '../types';

interface FeaturedProductsProps {
  onSelectProduct?: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onSelectProduct }) => {
  // Curated list of high-impact products from existing catalog without duplicating data
  const featuredList = PRODUCTS.filter((p) =>
    [
      'diamond-hybrid-rice',
      'diamond-hybrid-pearl-millet',
      'rootex',
      'zinkron-chelated',
      'fall-super',
      'lumax-xtra',
      'aegis-zinc-sulfur',
      'kamman',
    ].includes(p.id)
  );

  return (
    <section id="featured-products" className="py-12 lg:py-16 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200/60">
              <span className="material-symbols-outlined text-[16px] text-amber-600">local_fire_department</span>
              <span>Top Agricultural Picks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
              🔥 Featured Products / <span className="urdu-text font-bold text-emerald-700" dir="rtl">نمایاں زرعی مصنوعات</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              Kot Addu ke kisanon ke pasandeeda aur tasdeeq shuda top formulations aur hybrid beej.
            </p>
          </div>

          <a
            href="#products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
          >
            <span>View All {PRODUCTS.length} Products</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredList.map((product) => {
            const waText = `Salam Kissan Agro Traders! Mujhe '${product.name}' (${product.categoryLabel}) ke baray mein maloomat aur price chahiye.`;
            const waUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(waText)}`;

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-emerald-300 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative aspect-4/3 bg-slate-50 overflow-hidden border-b border-slate-100 flex items-center justify-center p-3">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Featured Flame Badge */}
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-black tracking-wide shadow-xs flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">local_fire_department</span>
                      Featured
                    </span>

                    {/* Category Pill */}
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold">
                      {product.categoryLabel}
                    </span>
                  </div>

                  {/* Product Details */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between text-xs text-emerald-700 font-semibold mb-1">
                      <span>{product.badge}</span>
                      <span className="urdu-text text-[11px]" dir="rtl">{product.categoryUrdu}</span>
                    </div>

                    <h3 className="font-extrabold text-slate-800 text-base group-hover:text-emerald-800 transition-colors line-clamp-1">
                      {product.name}
                    </h3>

                    <h4 className="urdu-text text-emerald-700 text-sm font-bold mt-0.5" dir="rtl">
                      {product.tagline}
                    </h4>

                    <p className="urdu-text text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed" dir="rtl">
                      {product.descriptionUrdu}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-4 sm:p-5 pt-0 border-t border-slate-100/60 mt-2">
                  <div className="flex items-center justify-between py-1.5 px-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-[11px] font-bold mb-2.5">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-emerald-600">local_shipping</span>
                      Free Farm Delivery
                    </span>
                    <span className="urdu-text" dir="rtl">مفت ترسیل</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shimmer flex-1 py-2.5 px-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs hover:shadow-md transition-all active:scale-95 border border-green-400/40"
                    >
                      <span className="material-symbols-outlined text-[16px]">chat</span>
                      <span>WhatsApp Inquiry</span>
                    </a>

                    {onSelectProduct && (
                      <button
                        type="button"
                        onClick={() => onSelectProduct(product)}
                        aria-label="Quick View"
                        className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-700 flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
