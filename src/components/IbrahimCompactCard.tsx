import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface IbrahimCompactCardProps {
  onOpenPortfolio?: () => void;
  className?: string;
}

export const IbrahimCompactCard: React.FC<IbrahimCompactCardProps> = ({
  onOpenPortfolio,
  className = '',
}) => {
  const { isUrdu } = useLanguage();
  const whatsappUrl = isUrdu
    ? 'https://wa.me/923007157733?text=' + encodeURIComponent('السلام علیکم ابراہیم بھائی! مجھے اپنے کاروبار کے لیے جدید ویب سائٹ / موبائل ایپ بنوانی ہے۔')
    : 'https://wa.me/923007157733?text=' + encodeURIComponent('Hello Ibrahim! I would like to consult with you for custom website / web app development.');
  const facebookUrl = 'https://www.facebook.com';

  const handlePortfolioClick = (e: React.MouseEvent) => {
    if (onOpenPortfolio) {
      e.preventDefault();
      onOpenPortfolio();
    } else {
      const el = document.getElementById('creator-portfolio');
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      id="ibrahim-creator-compact-card"
      className={`w-full max-w-2xl bg-slate-900/80 dark:bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 text-white shadow-lg transition-all duration-300 hover:border-emerald-400/50 ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Creator Info */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-black text-xs shadow-xs shrink-0 border border-white/20">
            IK
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-extrabold text-xs sm:text-sm text-white tracking-wide truncate">
                Ibrahim Klasra
              </span>
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                <span className="material-symbols-outlined text-[12px]">code</span>
                <span>{isUrdu ? 'ویب میکر' : 'Web Creator'}</span>
              </span>
            </div>
            <p className="text-[11px] text-emerald-200/90 font-medium truncate">
              {isUrdu ? 'فری لانسر • ڈیجیٹل ویب میکر' : 'Freelancer • Digital Web Creator'}
            </p>
            <p className="text-[10px] text-slate-400 truncate">
              {isUrdu ? 'اس ویب سائٹ کے خالق و ڈیزائنر' : 'Creator of this Website'}
            </p>
          </div>
        </div>

        {/* Small Action Buttons */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto justify-end shrink-0">
          {/* Facebook */}
          <a
            id="creator-compact-facebook"
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ibrahim Klasra Facebook"
            className="inline-flex items-center gap-1 bg-blue-600/80 hover:bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-xl border border-blue-400/30 transition-all duration-200 active:scale-95 shadow-xs whitespace-nowrap"
            title="Facebook Profile"
          >
            <span className="material-symbols-outlined text-[14px]">public</span>
            <span>Facebook</span>
          </a>

          {/* WhatsApp */}
          <a
            id="creator-compact-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ibrahim Klasra WhatsApp"
            className="inline-flex items-center gap-1 bg-emerald-600/80 hover:bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-xl border border-emerald-400/30 transition-all duration-200 active:scale-95 shadow-xs whitespace-nowrap"
            title="Chat on WhatsApp"
          >
            <span className="material-symbols-outlined text-[14px]">chat</span>
            <span>WhatsApp</span>
          </a>

          {/* Portfolio Link / Button */}
          <a
            id="creator-compact-portfolio"
            href="#creator-portfolio"
            onClick={handlePortfolioClick}
            aria-label="View Creator Portfolio"
            className="inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-xl border border-white/20 transition-all duration-200 active:scale-95 shadow-xs whitespace-nowrap"
            title="Explore Full Portfolio"
          >
            <span className="material-symbols-outlined text-[14px]">work</span>
            <span>{isUrdu ? 'پورٹ فولیو' : 'Portfolio'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
