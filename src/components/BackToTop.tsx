import React, { useState, useEffect } from 'react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 380) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      id="back-to-top-btn"
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className="fixed bottom-20 md:bottom-6 left-5 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-800/90 dark:bg-emerald-700/90 hover:bg-emerald-700 text-white backdrop-blur-md shadow-lg shadow-emerald-950/20 border border-emerald-400/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer animate-in fade-in slide-in-from-bottom-4 group"
    >
      <span className="material-symbols-outlined text-[24px] transition-transform group-hover:-translate-y-0.5">
        arrow_upward
      </span>
    </button>
  );
};
