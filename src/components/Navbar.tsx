import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/agroData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Offers', href: '#offers' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header id="main-header" className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-16 sm:h-18">
        {/* Brand Logo & Identity */}
        <a id="navbar-brand-logo" className="flex items-center gap-3 group" href="#home">
          <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-xs group-hover:bg-emerald-700 transition-colors">
            <span>K</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold text-slate-800 leading-tight tracking-tight">
              {BUSINESS_INFO.name}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wide">
                Kot Addu, Pakistan
              </span>
              <span className="text-xs font-medium text-slate-400 urdu-text hidden sm:inline" dir="rtl">
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
                className={`text-sm font-semibold transition-colors duration-150 pb-1 ${
                  isActive
                    ? 'text-emerald-700 border-b-2 border-emerald-600'
                    : 'text-slate-600 hover:text-emerald-700'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Trailing Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            id="nav-call-btn"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-white text-xs sm:text-sm font-bold hover:bg-slate-700 transition-colors shadow-xs"
            href={BUSINESS_INFO.telLink}
          >
            <span className="material-symbols-outlined text-[17px]">call</span>
            <span>+92 342 6400074</span>
          </a>
          <a
            id="nav-whatsapp-btn"
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-2 rounded-full shadow-xs hover:shadow transition-all duration-150 active:scale-95"
            href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Salam Kissan Agro Traders, I need information about your products.')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px] sm:text-[20px]">chat</span>
            <span>WhatsApp</span>
          </a>

          {/* Mobile menu toggle button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
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
