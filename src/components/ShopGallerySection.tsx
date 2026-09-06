import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/agroData';

interface GalleryItem {
  id: string;
  titleUrdu: string;
  titleEnglish: string;
  category: string;
  imageUrl: string;
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    titleUrdu: 'مرکزی دکان و کاؤنٹر',
    titleEnglish: 'Main Outlet & Farmer Consultation Desk',
    category: 'Shop Front',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    caption: 'Madina Chowk Bypass Kot Addu par kisan bhaiyon ke liye authentic pesticides and customer desk.',
  },
  {
    id: 'gal-2',
    titleUrdu: 'زرعی ڈرون اسپرے فلیٹ',
    titleEnglish: 'Agricultural Drone Spray Fleet',
    category: 'Drone Service',
    imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    caption: 'Advanced agricultural multicopter drone unit equipped with automated flow nozzles.',
  },
  {
    id: 'gal-3',
    titleUrdu: 'مستند اور سیل بند کھاد و ادویات گودام',
    titleEnglish: 'Certified Batch Storage & Warehouse',
    category: 'Inventory',
    imageUrl: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=800&q=80',
    caption: '100% original, climate-protected storage keeping chemical potency intact.',
  },
  {
    id: 'gal-4',
    titleUrdu: 'کھیتوں میں فیلڈ وزٹ و مشاورت',
    titleEnglish: 'Field Inspection & Crop Scouting',
    category: 'Agronomy',
    imageUrl: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
    caption: 'Kot Addu kisan bhaiyon ke kheton ka muayna aur beemariyon ka fori hal.',
  },
  {
    id: 'gal-5',
    titleUrdu: 'مصدقہ سن کراپ اور ہائبرڈ بیج',
    titleEnglish: 'Certified Hybrid Seeds Collection',
    category: 'Seeds',
    imageUrl: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    caption: 'High-germination wheat, cotton, maize and vegetable seeds approved by agriculture department.',
  },
  {
    id: 'gal-6',
    titleUrdu: 'مفت آن فارم ڈیلیوری سروس',
    titleEnglish: 'Free On-Farm Logistics Fleet',
    category: 'Logistics',
    imageUrl: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80',
    caption: 'Dera aur khet tak bari miqdaar mein khaad aur adwiyat ki fori delivery.',
  },
];

export const ShopGallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-12 lg:py-16 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/80 dark:border-emerald-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-extrabold uppercase tracking-wider mb-2 border border-emerald-200/60 dark:border-emerald-800/60">
            <span className="material-symbols-outlined text-[16px] text-emerald-600">photo_library</span>
            <span>Real Shop &amp; Field Gallery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight">
            ہماری دکان اور فیلڈ سروسز کی جھلکیاں / <span className="text-emerald-700 dark:text-emerald-400">Gallery</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
            مدینہ چوک بائی پاس، کوٹ ادو پر ہماری دکان، جدید زرعی ڈرون یونٹ اور زمیندار بھائیوں کے فیلڈ وزٹس۔
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-emerald-400 transition-all duration-300 cursor-pointer card-premium-3d"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.titleEnglish}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-xs text-[11px] font-bold text-emerald-300 border border-emerald-400/30">
                  {item.category}
                </span>

                {/* Click to Zoom indicator */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h4 className="urdu-text text-base sm:text-lg font-bold leading-tight drop-shadow-xs" dir="rtl">
                    {item.titleUrdu}
                  </h4>
                  <p className="text-xs font-semibold text-emerald-300 mt-0.5">
                    {item.titleEnglish}
                  </p>
                </div>
              </div>

              {/* Caption */}
              <div className="p-3.5 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
                {item.caption}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Image Preview */}
        {activeImage && (
          <div
            id="gallery-modal-backdrop"
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 relative animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-16/10 bg-slate-950">
                <img
                  src={activeImage.imageUrl}
                  alt={activeImage.titleEnglish}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  type="button"
                  onClick={() => setActiveImage(null)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close image preview"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              <div className="p-5 sm:p-6">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-extrabold uppercase tracking-wider">
                  {activeImage.category}
                </span>
                <h3 className="urdu-text text-xl font-bold text-slate-900 dark:text-white mt-2 leading-tight" dir="rtl">
                  {activeImage.titleUrdu}
                </h3>
                <h4 className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mt-0.5">
                  {activeImage.titleEnglish}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {activeImage.caption}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Kissan Agro Traders • Kot Addu Bypass
                  </span>
                  <a
                    href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(`سلام! میں نے گیلری میں تصویر دیکھی: ${activeImage.titleEnglish}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                    <span>اس حوالے سے رابطہ کریں</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
