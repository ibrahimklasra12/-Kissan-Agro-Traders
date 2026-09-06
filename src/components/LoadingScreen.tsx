import React, { useState, useEffect } from 'react';
import { KissanLogo } from './KissanLogo';

export const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Elegant, short presentation (non-blocking)
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 600);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 950);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="app-loading-screen"
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 text-white transition-opacity duration-350 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Brand Ambient Glow */}
      <div className="absolute w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 space-y-4">
        {/* Logo */}
        <div className="relative p-2 rounded-3xl bg-emerald-900/60 border border-emerald-400/30 shadow-2xl animate-soft-float">
          <KissanLogo size={64} animated={false} />
        </div>

        {/* Brand Name */}
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-black tracking-wider text-white uppercase drop-shadow-sm">
            Kissan Agro Traders
          </h1>
          <p className="urdu-text text-sm sm:text-base text-amber-300 font-bold" dir="rtl">
            کسان کی ترقی ہماری اولین ترجیح
          </p>
          <span className="text-[11px] tracking-widest text-emerald-300 uppercase font-semibold block">
            Kot Addu, Pakistan
          </span>
        </div>

        {/* Elegant Minimal Loading Indicator */}
        <div className="pt-2 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse [animation-delay:150ms]" />
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
};
