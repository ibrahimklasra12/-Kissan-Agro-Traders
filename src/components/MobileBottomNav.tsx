import React from 'react';
import { BUSINESS_INFO } from '../data/agroData';
import { useInquiryCart } from '../context/InquiryCartContext';

interface MobileBottomNavProps {
  activeSection: string;
  onOpenAdvisory: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeSection, onOpenAdvisory }) => {
  const { totalCount, setIsDrawerOpen } = useInquiryCart();

  const navItems = [
    { id: 'home', label: 'Home', urdu: 'ہوم', icon: 'home', href: '#home' },
    { id: 'products', label: 'Products', urdu: 'پروڈکٹس', icon: 'inventory_2', href: '#products' },
    { id: 'services', label: 'Services', urdu: 'خدمات', icon: 'agriculture', href: '#services' },
    {
      id: 'advisory',
      label: 'Advisory',
      urdu: 'مشورہ',
      icon: 'psychology_alt',
      action: onOpenAdvisory,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      urdu: 'واٹس ایپ',
      icon: 'chat',
      href: `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('السلام علیکم! کسان ایگرو ٹریڈرز، مجھے زرعی رہنمائی درکار ہے۔')}`,
      isExternal: true,
      highlight: true,
    },
  ];

  return (
    <nav
      id="mobile-bottom-nav"
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-t border-slate-200 dark:border-emerald-950 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-safe transition-all duration-300"
    >
      <div className="flex items-center justify-around px-2 py-1.5 h-16">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          if (item.action) {
            return (
              <button
                key={item.id}
                type="button"
                onClick={item.action}
                className="flex flex-col items-center justify-center flex-1 py-1 px-1 transition-all duration-200 active:scale-90 cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 transition-colors">
                  <span className="material-symbols-outlined text-[22px] transition-transform group-hover:scale-110">
                    {item.icon}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 leading-tight">
                  {item.urdu}
                </span>
              </button>
            );
          }

          if (item.isExternal) {
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center flex-1 py-1 px-1 transition-all duration-200 active:scale-90 group"
              >
                <div className="w-9 h-9 rounded-2xl bg-green-500 text-white flex items-center justify-center shadow-md shadow-green-500/30 transition-transform group-hover:scale-105">
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                </div>
                <span className="text-[10px] font-black text-green-600 dark:text-green-400 leading-tight mt-0.5">
                  {item.urdu}
                </span>
              </a>
            );
          }

          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 py-1 px-1 transition-all duration-200 active:scale-90 relative ${
                isActive ? 'text-emerald-700 dark:text-emerald-400 font-extrabold' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {isActive && (
                <span className="absolute top-0 w-8 h-0.5 bg-emerald-600 rounded-full animate-in fade-in duration-200" />
              )}
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <span
                  className={`material-symbols-outlined text-[22px] transition-transform ${
                    isActive ? 'scale-115 text-emerald-600 dark:text-emerald-400' : ''
                  }`}
                >
                  {item.icon}
                </span>
              </div>
              <span className="text-[10px] leading-tight">
                {item.urdu}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
