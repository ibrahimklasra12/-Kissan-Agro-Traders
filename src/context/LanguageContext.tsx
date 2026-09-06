import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'ur' | 'en';
export type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string, englishFallback: string, urduFallback?: string) => string;
}

const TRANSLATIONS: Record<string, { en: string; ur: string }> = {
  // Navigation
  'nav.home': { en: 'Home', ur: 'ہوم' },
  'nav.products': { en: 'Products', ur: 'پروڈکٹس' },
  'nav.services': { en: 'Services', ur: 'خدمات' },
  'nav.advisory': { en: 'Crop Advisory', ur: 'زرعی مشورہ' },
  'nav.offers': { en: 'Offers', ur: 'آفرز' },
  'nav.about': { en: 'About Us', ur: 'ہمارے بارے میں' },
  'nav.contact': { en: 'Contact', ur: 'رابطہ' },
  'nav.cart': { en: 'Inquiry Cart', ur: 'انکوائری کارٹ' },
  'nav.favorites': { en: 'My Favorites', ur: 'میری پسندیدہ' },

  // Common CTAs
  'cta.whatsapp': { en: 'WhatsApp Inquiry', ur: 'واٹس ایپ پر رابطہ' },
  'cta.call': { en: 'Call Helpline', ur: 'ہیلپ لائن پر کال' },
  'cta.directions': { en: 'Get Directions', ur: 'لوکیشن دیکھیں' },
  'cta.share': { en: 'Share Website', ur: 'ویب سائٹ شیئر کریں' },
  'cta.ask_question': { en: 'Ask Farming Question', ur: 'زرعی سوال پوچھیں' },
  'cta.expert_consultation': { en: 'Expert WhatsApp Consultation', ur: 'ماہر زرعی مشورہ' },
  'cta.drone_booking': { en: 'Book Drone Spray', ur: 'ڈرون اسپرے بک کریں' },

  // Status
  'status.open': { en: 'Open Now (7:00 AM - 6:30 PM)', ur: 'کھلا ہے (صبح 7:00 تا شام 6:30)' },
  'status.closed': { en: 'Closed Now (WhatsApp 24/7)', ur: 'دکان بند ہے (واٹس ایپ 24/7)' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kissan_agro_lang');
      if (saved === 'ur' || saved === 'en') return saved;
    }
    // Default to Urdu as it's the primary language of the target farming audience
    return 'ur';
  });

  const direction: Direction = language === 'ur' ? 'rtl' : 'ltr';

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', direction);
    localStorage.setItem('kissan_agro_lang', language);
  }, [language, direction]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'ur' ? 'en' : 'ur'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string, englishFallback: string, urduFallback?: string): string => {
    const entry = TRANSLATIONS[key];
    if (entry) {
      return language === 'ur' ? entry.ur : entry.en;
    }
    return language === 'ur' ? (urduFallback || englishFallback) : englishFallback;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
