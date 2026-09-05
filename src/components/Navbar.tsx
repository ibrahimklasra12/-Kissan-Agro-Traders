import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/agroData';
import { KissanLogo } from './KissanLogo';
import { useInquiryCart } from '../context/InquiryCartContext';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalCount, setIsDrawerOpen } = useInquiryCart();

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

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Offers', href: '#offers' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-md py-1'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80 shadow-xs py-2'
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-16 sm:h-18">
        {/* Brand Logo & Identity */}
        <a
          id="navbar-brand-logo"
          className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]"
          href="#home"
        >
          {/* Logo without animation */}
          <div className="relative">
            <KissanLogo size={46} animated={false} />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight tracking-tight group-hover:text-emerald-800 transition-colors">
              {BUSINESS_INFO.name}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
                Kot Addu, Pakistan
              </span>
              <span className="text-xs font-semibold text-emerald-800 urdu-text hidden sm:inline" dir="rtl">
                {BUSINESS_INFO.urduName}
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                id={`nav-link-${link.href.substring(1)}`}
                href={link.href}
                className={`text-sm font-semibold transition-all duration-200 pb-1 relative ${
                  isActive
                    ? 'text-emerald-700 font-bold'
                    : 'text-slate-600 hover:text-emerald-700 hover:-translate-y-0.5'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 rounded-full animate-fade-in" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Trailing Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Inquiry Cart Action Button */}
          <button
            id="nav-inquiry-cart-btn"
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-label={`View product inquiry cart (${totalCount} items)`}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs sm:text-sm font-extrabold transition-all duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer shadow-2xs"
          >
            <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-emerald-700">shopping_cart</span>
            <span className="hidden sm:inline">Inquiry</span>
            <span
              className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-black transition-all ${
                totalCount > 0
                  ? 'bg-emerald-700 text-white shadow-xs scale-105'
                  : 'bg-emerald-200/70 text-emerald-800'
              }`}
            >
              {totalCount}
            </span>
          </button>

          <a
            id="nav-call-btn"
            className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-800 text-white text-xs sm:text-sm font-bold hover:bg-slate-700 transition-all duration-200 hover:scale-[1.02] shadow-xs"
            href={BUSINESS_INFO.telLink}
          >
            <span className="material-symbols-outlined text-[17px]">call</span>
            <span>+92 342 6400074</span>
          </a>
          <a
            id="nav-whatsapp-btn"
            className="btn-shimmer inline-flex items-center gap-1.5 sm:gap-2 bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4.5 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-95 border border-green-400/40"
            href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, I need information about your products.')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:rotate-6">chat</span>
            <span>WhatsApp</span>
          </a>

          {/* Mobile menu toggle button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
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
        <div id="mobile-nav-menu" className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-3 mt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsDrawerOpen(true);
              }}
              className="flex items-center justify-between px-3 py-2.5 text-sm font-bold text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-xl"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-emerald-700">shopping_cart</span>
                <span>🛒 Product Inquiry Cart</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-700 text-white text-xs font-black">
                {totalCount} Items
              </span>
            </button>

            <a
              href={BUSINESS_INFO.telLink}
              className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-800 bg-slate-100 rounded-xl"
            >
              <span className="material-symbols-outlined text-[18px] text-slate-700">call</span>
              <span>Call Helpline: +92 342 6400074</span>
            </a>
            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, I need information about your products.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl shadow-xs"
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
