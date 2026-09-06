import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/agroData';
import { KissanLogo } from './KissanLogo';
import { useInquiryCart } from '../context/InquiryCartContext';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../context/ToastContext';

interface NavbarProps {
  activeSection: string;
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalCount, setIsDrawerOpen } = useInquiryCart();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { showToast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShareWebsite = async () => {
    const shareData = {
      title: 'Kissan Agro Traders',
      text: '🌾 Kissan Agro Traders — Pesticides, Fertilizers, Seeds & Drone Spray Services in Kot Addu',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        showToast('success', 'ویب سائٹ شیئر ہو گئی!', 'Website shared successfully');
      } catch (err) {
        // User dismissed or share canceled
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast('success', 'لنک کاپی ہو گیا!', 'Website link copied to clipboard');
      } catch {
        showToast('info', 'لنک کاپی کریں:', window.location.href);
      }
    } else {
      showToast('info', 'ویب سائٹ ایڈریس:', window.location.href);
    }
  };

  const navLinks = [
    { label: t('nav.home', 'Home', 'ہوم'), href: '#home' },
    { label: t('nav.products', 'Products', 'پروڈکٹس'), href: '#products' },
    { label: t('nav.services', 'Services', 'خدمات'), href: '#services' },
    { label: t('nav.advisory', 'Advisory', 'زرعی مشورہ'), href: '#crop-advisory' },
    { label: t('nav.offers', 'Offers', 'آفرز'), href: '#offers' },
    { label: t('nav.about', 'About', 'ہمارے بارے میں'), href: '#about' },
    { label: t('nav.contact', 'Contact', 'رابطہ'), href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-emerald-900/10 dark:border-emerald-900/30 shadow-md py-1'
          : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-200/80 dark:border-slate-800 shadow-xs py-2'
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-16 sm:h-18">
        {/* Brand Logo & Identity */}
        <a
          id="navbar-brand-logo"
          className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]"
          href="#home"
        >
          <div className="relative">
            <KissanLogo size={46} animated={false} />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
              {BUSINESS_INFO.name}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Kot Addu, Pakistan
              </span>
              <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 urdu-text hidden sm:inline" dir="rtl">
                {BUSINESS_INFO.urduName}
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center space-x-5 xl:space-x-7">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                id={`nav-link-${sectionId}`}
                href={link.href}
                className={`text-sm font-semibold transition-all duration-200 pb-1 relative ${
                  isActive
                    ? 'text-emerald-700 dark:text-emerald-400 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:-translate-y-0.5'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full animate-fade-in" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Toggles */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* 1. Language Switcher Toggle */}
          <button
            id="nav-lang-toggle-btn"
            type="button"
            onClick={toggleLanguage}
            title={language === 'ur' ? 'Switch to English' : 'اردو منتخب کریں'}
            className="px-2.5 py-1 rounded-full text-xs font-black border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 transition-all cursor-pointer select-none"
          >
            {language === 'ur' ? 'English' : 'اردو'}
          </button>

          {/* 2. Dark / Light Theme Toggle */}
          <button
            id="nav-theme-toggle-btn"
            type="button"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-300 hover:bg-slate-200 transition-all cursor-pointer"
            aria-label="Toggle dark or light theme"
          >
            <span className="material-symbols-outlined text-[18px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* 3. Share Website Button */}
          <button
            id="nav-share-website-btn"
            type="button"
            onClick={handleShareWebsite}
            title="Share Website"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-2xs"
          >
            <span className="material-symbols-outlined text-[16px] text-emerald-600 dark:text-emerald-400">share</span>
            <span className="hidden md:inline">Share</span>
          </button>

          {/* 4. Inquiry Cart Action Button */}
          <button
            id="nav-inquiry-cart-btn"
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-label={`View product inquiry cart (${totalCount} items)`}
            className="inline-flex items-center gap-1 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/70 hover:bg-emerald-100 dark:hover:bg-emerald-900 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 text-xs sm:text-sm font-extrabold transition-all duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer shadow-2xs"
          >
            <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-emerald-700 dark:text-emerald-400">shopping_cart</span>
            <span className="hidden sm:inline">Cart</span>
            <span
              className={`inline-flex items-center justify-center min-w-[18px] h-4.5 px-1 rounded-full text-[10px] font-black transition-all ${
                totalCount > 0
                  ? 'bg-emerald-700 dark:bg-emerald-500 text-white shadow-xs scale-105'
                  : 'bg-emerald-200/80 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-200'
              }`}
            >
              {totalCount}
            </span>
          </button>

          {/* 5. WhatsApp Button (Desktop) */}
          <a
            id="nav-whatsapp-btn"
            className="btn-shimmer hidden sm:inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-95 border border-green-400/40"
            href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('السلام علیکم! کسان ایگرو ٹریڈرز، مجھے زرعی رہنمائی اور ادویات کی معلومات درکار ہیں۔')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[17px]">chat</span>
            <span>WhatsApp</span>
          </a>

          {/* Mobile menu toggle button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div id="mobile-nav-menu" className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-4 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            {/* Share Website (Mobile) */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleShareWebsite();
              }}
              className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-xl cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-emerald-600 dark:text-emerald-400">share</span>
              <span>📤 Share Website (ویب سائٹ شیئر کریں)</span>
            </button>

            {/* Cart Button */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsDrawerOpen(true);
              }}
              className="flex items-center justify-between px-3 py-2.5 text-sm font-bold text-emerald-900 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-xl"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-emerald-700 dark:text-emerald-400">shopping_cart</span>
                <span>🛒 Product Inquiry Cart</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-700 text-white text-xs font-black">
                {totalCount} Items
              </span>
            </button>

            {/* Call Helpline */}
            <a
              href={BUSINESS_INFO.telLink}
              className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-xl"
            >
              <span className="material-symbols-outlined text-[18px] text-slate-700 dark:text-slate-300">call</span>
              <span>Call Helpline: {BUSINESS_INFO.phone}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('السلام علیکم! کسان ایگرو ٹریڈرز، مجھے زرعی ادویات سے متعلق رہنمائی درکار ہے۔')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-bold text-white bg-green-500 hover:bg-green-600 rounded-xl shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>WhatsApp پر رابطہ کریں</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
