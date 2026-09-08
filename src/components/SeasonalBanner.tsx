import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export interface SeasonalBannerConfig {
  enabled: boolean;
  icon: string;
  seasonName: { en: string; ur: string };
  title: { en: string; ur: string };
  message: { en: string; ur: string };
  ctaText: { en: string; ur: string };
  ctaTarget: string;
}

// Centralized configuration for seasonal campaigns
export const SEASONAL_BANNER_CONFIG: SeasonalBannerConfig = {
  enabled: true,
  icon: '🌾',
  seasonName: {
    en: 'Wheat Season',
    ur: 'گندم کا سیزن',
  },
  title: {
    en: 'Wheat Season Agricultural Support & Crop Protection',
    ur: 'گندم کا سیزن — بروقت نگہداشت اور معیاری زرعی ادویات',
  },
  message: {
    en: 'Get certified herbicides, rust protection fungicides, and micronutrients with expert field guidance.',
    ur: 'گندم کی جڑی بوٹیوں کی تلفی، رسٹ سے بچاؤ اور فصل کی بہتر بڑھوتری کے لیے مستند حل۔',
  },
  ctaText: {
    en: 'Explore Products',
    ur: 'پروڈکٹس دیکھیں',
  },
  ctaTarget: '#products',
};

export const SeasonalBanner: React.FC<{ config?: SeasonalBannerConfig }> = ({
  config = SEASONAL_BANNER_CONFIG,
}) => {
  const { isUrdu } = useLanguage();
  if (!config.enabled) return null;

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(config.ctaTarget);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="seasonal-banner" className="w-full py-2 sm:py-3 bg-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white p-4 sm:p-5 border border-emerald-500/40 shadow-md">
          {/* Subtle Ambient Agricultural Visual Element */}
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute left-1/3 top-0 w-24 h-24 bg-amber-400/10 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Left: Icon and Details */}
            <div className="flex items-center gap-3.5 text-center md:text-left w-full md:w-auto">
              <div className="w-12 h-12 rounded-2xl bg-emerald-700/60 border border-emerald-400/40 flex items-center justify-center text-2xl shrink-0 shadow-xs animate-soft-float">
                <span>{config.icon}</span>
              </div>
              <div className="space-y-0.5 text-left rtl:text-right">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-extrabold tracking-wider uppercase border border-amber-300/30">
                    {isUrdu ? 'موجودہ سیزن' : 'Active Season'}
                  </span>
                  <span className="text-xs font-bold text-emerald-200">
                    {isUrdu ? config.seasonName.ur : config.seasonName.en}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight">
                  {isUrdu ? config.title.ur : config.title.en}
                </h3>
                <p className="text-xs text-emerald-100/90 leading-normal">
                  {isUrdu ? config.message.ur : config.message.en}
                </p>
              </div>
            </div>

            {/* Right: CTA Button */}
            <div className="shrink-0 w-full sm:w-auto flex justify-center md:justify-end">
              <a
                id="seasonal-banner-cta"
                href={config.ctaTarget}
                onClick={handleCtaClick}
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95 border border-amber-200/60 w-full sm:w-auto"
              >
                <span>{isUrdu ? config.ctaText.ur : config.ctaText.en}</span>
                <span className="material-symbols-outlined text-[16px]">
                  {isUrdu ? 'arrow_back' : 'arrow_forward'}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
