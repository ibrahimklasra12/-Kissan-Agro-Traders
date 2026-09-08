import React, { useState } from 'react';
import { ServiceInquiryModal } from './ServiceInquiryModal';
import { useLanguage } from '../context/LanguageContext';

// ============================================================================
// 🔵 FACEBOOK PROFILE CONFIGURATION
// ============================================================================
const FACEBOOK_PROFILE_URL = "PASTE_YOUR_FACEBOOK_PROFILE_LINK_HERE";

export const WebCreatorCard: React.FC = () => {
  const { isUrdu } = useLanguage();
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Business Website');

  const whatsappUrl =
    'https://wa.me/923007157733?text=Assalam%20o%20Alaikum%20Ibrahim%20bhai%2C%20mujhe%20apne%20business%20ke%20liye%20website%20banwani%20hai.';

  const resolvedFacebookUrl =
    FACEBOOK_PROFILE_URL && FACEBOOK_PROFILE_URL !== 'PASTE_YOUR_FACEBOOK_PROFILE_LINK_HERE'
      ? FACEBOOK_PROFILE_URL
      : 'https://www.facebook.com';

  const services = [
    {
      id: 'web-design',
      title: isUrdu ? '🖥️ ویب سائٹ ڈیزائننگ' : '🖥️ Website Design',
      name: 'Business Website',
      icon: 'desktop_windows',
      desc: isUrdu
        ? 'بزنسز اور ڈسٹری بیوٹرز کے لیے تیز رفتار، جدید برانڈنگ والی موبائل فرینڈلی ویب سائٹس۔'
        : 'High-speed, beautifully branded, and responsive websites for modern businesses & distributors.',
    },
    {
      id: 'pwa-dev',
      title: isUrdu ? '📱 پی ڈبلیو اے (PWA) ایپس' : '📱 PWA Development',
      name: 'PWA / Installable Web App',
      icon: 'install_mobile',
      desc: isUrdu
        ? 'پلے اسٹور کے بغیر براہ راست کسٹمر کے موبائل ہوم اسکرین پر انسٹال ہونے والی جدید ویب ایپس۔'
        : 'Offline-ready mobile app experience that installs directly on customer home screens without app store hassle.',
    },
    {
      id: 'ui-design',
      title: isUrdu ? '🎨 یو آئی / یو ایکس ڈیزائن' : '🎨 UI/UX Design',
      name: 'UI/UX Design',
      icon: 'palette',
      desc: isUrdu
        ? 'صاف ستھری ٹائپوگرافی، آسان نیویگیشن اور موبائل پر بہترین ہموار صارف تجربہ۔'
        : 'Clean typography, intuitive navigation, high contrast colors, and seamless mobile interactions.',
    },
    {
      id: 'landing-pages',
      title: isUrdu ? '🚀 لینڈنگ پیجز' : '🚀 Landing Pages',
      name: 'Landing Page',
      icon: 'rocket_launch',
      desc: isUrdu
        ? 'پروڈکٹ کی فوری فروخت اور واٹس ایپ انکوائری کے لیے مخصوص اور پرکشش سیلز پیجز۔'
        : 'High-converting product showcase pages optimized for WhatsApp inquiries and instant sales.',
    },
    {
      id: 'maintenance',
      title: isUrdu ? '🛠️ ویب سائٹ دیکھ بھال' : '🛠️ Website Maintenance',
      name: 'Website Maintenance',
      icon: 'build_circle',
      desc: isUrdu
        ? 'ویب اسپیڈ میں اضافہ، بگز کی درستی، ڈومین سیکیورٹی اور مسلسل تکنیکی معاونت۔'
        : 'Speed optimization, real-time bug fixes, SSL & domain management, and continuous technical support.',
    },
  ];

  const projects = [
    {
      id: 'kissan-agro',
      title: isUrdu ? 'کسان ایگرو ٹریڈرز' : 'Kissan Agro Traders',
      category: isUrdu ? 'پی ڈبلیو اے زرعی پورٹل' : 'PWA & Agricultural E-Commerce',
      desc: isUrdu
        ? 'فصلوں کی لائیو رہنمائی، فوٹو انکوائری، ڈرون بکنگ اور واٹس ایپ انکوائری کے ساتھ مکمل زرعی پورٹل۔'
        : 'Full-featured agricultural portal with real-time crop advisory, photo inquiry, drone spray booking, and inquiry cart.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite PWA'],
      status: isUrdu ? 'لائیو اور فعال' : 'Live & Active',
      link: '#home',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'drone-spray-mechanization',
      title: isUrdu ? 'ایگرو ڈرون بکنگ پورٹل' : 'Agro Drone Mechanization Portal',
      category: isUrdu ? 'زرعی مکینائزیشن سروس' : 'Precision Agriculture Service Platform',
      desc: isUrdu
        ? 'کھیت کی جی پی ایس پیمائش، بیٹری لاجسٹکس اور لائیو اسپرے شیڈولنگ کا خودکار نظام۔'
        : 'Automated field booking system, GPS area calculations, battery logistics, and real-time farmer scheduling.',
      tech: ['TypeScript', 'PWA', 'Tailwind', 'Interactive State'],
      status: isUrdu ? 'ایپ میں شامل' : 'Integrated in App',
      link: '#services',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const testimonials = [
    {
      id: 't-1',
      name: isUrdu ? 'محمد طارق کلاسرہ' : 'Muhammad Tariq Klasra',
      role: isUrdu ? 'اونر، کسان ایگرو ٹریڈرز' : 'Owner, Kissan Agro Traders',
      rating: 5,
      comment: isUrdu
        ? 'ابراہیم کلاسرہ نے ہماری دکان کے لیے انتہائی شاندار اور تیز رفتار ویب سائٹ تیار کی۔ کسانوں کو واٹس ایپ پر آرڈر دینا بہت آسان ہو گیا ہے۔'
        : 'Ibrahim Klasra designed an exceptionally fast and intuitive website for our business. Farmers find it effortless to place orders directly on WhatsApp.',
    },
    {
      id: 't-2',
      name: isUrdu ? 'ملک ذیشان' : 'Malik Zeeshan',
      role: isUrdu ? 'بزنس اونر، پنجاب' : 'Business Owner, Punjab',
      rating: 5,
      comment: isUrdu
        ? 'بہت تیز ڈیلیوری اور زبردست رسپانسو موبائل ڈیزائن۔ موبائل ہوم اسکرین پر بغیر کسی رکاوٹ کے ایپ انسٹال ہو جاتی ہے۔'
        : 'Super fast delivery and flawless mobile responsive design. The PWA installability works smoothly on all smartphones.',
    },
    {
      id: 't-3',
      name: isUrdu ? 'عادل عباس' : 'Adil Abbas',
      role: isUrdu ? 'کسٹمر و ریویور' : 'Customer / Reviewer',
      comment: isUrdu
        ? 'بہت عمدہ ایپس بناتے ہیں، کام صاف ستھرا، خوبصورت اور استعمال میں انتہائی آسان ہے۔'
        : 'Creates remarkable web apps. The user experience is clean, modern, robust, and exceptionally easy to navigate.',
    },
  ];

  const handleOpenInquiry = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsInquiryModalOpen(true);
  };

  return (
    <section id="creator-portfolio" className="w-full py-10 sm:py-14 bg-slate-900/40 border-t border-slate-200/60 dark:border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Creator Card */}
        <div
          id="ibrahim-klasra-creator-card"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white p-6 sm:p-8 lg:p-10 border border-emerald-500/35 shadow-2xl shadow-emerald-950/30 transition-all duration-300 hover:border-emerald-400/60 card-premium-3d"
        >
          {/* Ambient Lighting Orbs */}
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            {/* 1. Header: Profile, Identity, Title & Contacts */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 pb-6 border-b border-emerald-800/60">
              {/* Left Profile */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left rtl:sm:text-right gap-5 w-full lg:w-auto">
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-emerald-400 via-emerald-600 to-teal-800 text-white font-black text-3xl sm:text-4xl flex items-center justify-center shadow-xl border-2 border-emerald-300/40 ring-4 ring-emerald-900/80">
                    <span>IK</span>
                  </div>
                  <div
                    className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-emerald-400 text-emerald-950 flex items-center justify-center shadow-md border-2 border-emerald-950 font-bold"
                    title="Digital Web Creator"
                  >
                    <span className="material-symbols-outlined text-[15px]">code</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-[11px] font-extrabold text-emerald-300 tracking-wide uppercase">
                      <span className="material-symbols-outlined text-[14px]">verified</span>
                      {isUrdu ? 'ویب کریئٹر' : 'Website Creator'}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[11px] font-bold">
                      {isUrdu ? 'فری لانس ویب ڈویلپر' : 'Freelancer • Full-Stack Web Creator'}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {isUrdu ? 'ابراہیم کلاسرہ' : 'Ibrahim Klasra'}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-300">
                      {isUrdu
                        ? 'ویب سائٹ ڈیزائنر و ڈویلپر: ابراہیم کلاسرہ'
                        : 'Website Designed & Created by Ibrahim Klasra'}
                    </p>
                  </div>

                  <p className="text-amber-300 font-semibold text-xs sm:text-sm">
                    {isUrdu
                      ? '“جدید، تیز رفتار اور خوبصورت ڈیجیٹل ویب سائٹس بناتا ہوں۔”'
                      : '“Crafting modern websites, fast PWAs, and delightful digital experiences.”'}
                  </p>

                  <p className="text-emerald-100/90 text-xs sm:text-sm max-w-xl leading-relaxed">
                    {isUrdu
                      ? 'آپ کا بزنس، میری ڈیجیٹل مہارت۔ اپنے کاروبار، دکان یا ذاتی برانڈ کے لیے جدید اور موبائل فرینڈلی PWA ویب سائٹ بنوانے کے لیے رابطہ کریں۔'
                      : 'Elevate your business with digital craftsmanship. Contact for modern, fast, and installable PWA web solutions.'}
                  </p>
                </div>
              </div>

              {/* Right Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full lg:w-auto shrink-0">
                {/* Build Your Website CTA */}
                <button
                  id="creator-build-website-btn"
                  type="button"
                  onClick={() => handleOpenInquiry('Business Website')}
                  className="btn-shimmer inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs sm:text-sm font-black px-5 py-3 rounded-2xl shadow-lg hover:shadow-amber-400/30 transition-all duration-200 hover:scale-[1.02] active:scale-95 border border-amber-200/80 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">flash_on</span>
                  <span>{isUrdu ? 'اپنی ویب سائٹ بنوائیں' : 'Build Your Website'}</span>
                </button>

                {/* Creator WhatsApp */}
                <a
                  id="creator-whatsapp-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-2xl shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95 border border-white/20 text-center"
                >
                  <span className="material-symbols-outlined text-[17px]">chat</span>
                  <span>WhatsApp: 0300 7157733</span>
                </a>

                {/* Facebook Profile Button */}
                <a
                  id="creator-facebook-btn"
                  href={resolvedFacebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs sm:text-sm font-extrabold px-5 py-2 rounded-2xl shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95 border border-white/20 text-center"
                >
                  <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>{isUrdu ? 'فیس بک پر وزٹ کریں' : 'Follow on Facebook'}</span>
                </a>
              </div>
            </div>

            {/* 2. Freelancer Services */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-amber-300">design_services</span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {isUrdu ? 'فری لانس ویب خدمات' : 'Freelancer Web Services'}
                  </h4>
                </div>
                <span className="text-[11px] text-emerald-300/80 font-medium hidden sm:inline">
                  {isUrdu ? 'انکوائری کے لیے سروس پر کلک کریں' : 'Click any service to request inquiry'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {services.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => handleOpenInquiry(srv.name)}
                    className="p-4 rounded-2xl bg-emerald-900/40 border border-emerald-500/25 hover:border-emerald-400/50 hover:bg-emerald-900/60 transition-all duration-200 group flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-emerald-800/60 border border-emerald-400/30 text-emerald-300 flex items-center justify-center mb-2.5 transition-transform group-hover:scale-110">
                        <span className="material-symbols-outlined text-[19px]">{srv.icon}</span>
                      </div>
                      <h5 className="text-xs sm:text-sm font-extrabold text-white mb-1">
                        {srv.title}
                      </h5>
                      <p className="text-[11px] text-emerald-100/70 leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                    <div className="pt-3 flex items-center gap-1 text-[10px] font-bold text-amber-300 group-hover:underline">
                      <span>{isUrdu ? 'انکوائری بھیجیں' : 'Inquire Now'}</span>
                      <span className="material-symbols-outlined text-[12px]">
                        {isUrdu ? 'arrow_back' : 'arrow_forward'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. My Websites & Project Showcase */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-emerald-400">language</span>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {isUrdu ? 'ویب سائٹس و پورٹ فولیو پروجیکٹس' : 'Websites & Projects Portfolio'}
                  </h4>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="rounded-2xl overflow-hidden bg-emerald-900/50 border border-emerald-500/30 flex flex-col justify-between group hover:border-emerald-400/60 transition-all"
                  >
                    <div className="relative aspect-16/9 overflow-hidden bg-slate-950">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-emerald-950/90 text-emerald-300 text-[10px] font-extrabold border border-emerald-400/40">
                        {proj.status}
                      </span>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between space-y-2.5">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                          {proj.category}
                        </span>
                        <h5 className="text-sm sm:text-base font-black text-white mt-0.5">
                          {proj.title}
                        </h5>
                        <p className="text-[11px] text-emerald-100/75 mt-1 leading-relaxed">
                          {proj.desc}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1 mb-2.5">
                          {proj.tech.map((t, idx) => (
                            <span key={idx} className="px-1.5 py-0.2 rounded-md bg-white/10 text-[9px] font-medium text-slate-200">
                              {t}
                            </span>
                          ))}
                        </div>

                        <a
                          href={proj.link}
                          className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 hover:text-amber-200 transition-colors"
                        >
                          <span>{isUrdu ? 'پروجیکٹ دیکھیں' : 'View Project'}</span>
                          <span className="material-symbols-outlined text-[14px]">
                            {isUrdu ? 'arrow_back' : 'arrow_forward'}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Coming Soon Card */}
                <div className="rounded-2xl p-5 bg-emerald-950/40 border border-dashed border-emerald-500/30 flex flex-col justify-center items-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 mb-2">
                    <span className="material-symbols-outlined text-[24px]">more_horiz</span>
                  </div>
                  <h5 className="text-sm font-bold text-white">
                    {isUrdu ? 'مزید پروجیکٹس جلد آ رہے ہیں' : 'More Projects Coming Soon'}
                  </h5>
                  <p className="text-[11px] text-slate-400 mt-1 max-w-xs leading-relaxed">
                    {isUrdu
                      ? 'جدید بزنس پورٹلز اور تیز رفتار ویب ایپس پر کام جاری ہے۔'
                      : 'Working on innovative business portals and high-speed web apps.'}
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Creator Testimonials */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[18px] text-amber-400">rate_review</span>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {isUrdu ? 'کلائنٹس کا اعتماد اور تاثرات' : 'Client Feedback & Reviews'}
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {testimonials.map((test) => (
                  <div
                    key={test.id}
                    className="p-4 sm:p-5 rounded-2xl bg-emerald-900/40 border border-emerald-500/25 hover:border-emerald-400/50 hover:bg-emerald-900/60 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99] group cursor-default"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        {test.rating ? (
                          <div className="flex items-center gap-0.5 text-amber-400">
                            {[...Array(test.rating)].map((_, i) => (
                              <span key={i} className="material-symbols-outlined text-[16px] fill-current">star</span>
                            ))}
                          </div>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-300 bg-emerald-950/70 px-2 py-0.5 rounded-md border border-emerald-500/30">
                            <span className="material-symbols-outlined text-[13px] text-emerald-400">chat</span>
                            <span>Feedback</span>
                          </span>
                        )}
                        <span className="material-symbols-outlined text-emerald-400/60 group-hover:text-emerald-300 text-[22px] transition-transform duration-200 group-hover:scale-110">
                          format_quote
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed italic">
                        &ldquo;{test.comment}&rdquo;
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-emerald-800/50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 text-white font-black text-xs flex items-center justify-center shadow-xs">
                          {test.name.slice(0, 1)}
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-white tracking-tight">{test.name}</span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-300/90">{test.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Bottom Call to Action Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-900/90 via-emerald-800/80 to-teal-900/90 border border-emerald-400/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-amber-300 mb-0.5">
                  <span className="material-symbols-outlined text-[15px]">flash_on</span>
                  <span>{isUrdu ? 'ویب سائٹ بنوانی ہے؟' : 'Need a Website?'}</span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-white">
                  {isUrdu ? 'ابراہیم کلاسرہ سے رابطہ کریں' : 'Build Your Professional Website Today'}
                </h4>
                <p className="text-xs text-emerald-100/90 mt-0.5 leading-relaxed">
                  {isUrdu
                    ? 'اپنے بزنس کے لیے جدید، تیز رفتار اور موبائل فرینڈلی ویب سائٹ بنوانے کے لیے رابطہ کریں۔'
                    : 'Get in touch with Ibrahim Klasra for high-performance, modern business websites and apps.'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleOpenInquiry('Business Website')}
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95 whitespace-nowrap cursor-pointer border border-amber-200/80"
              >
                <span>{isUrdu ? 'ابراہیم کلاسرہ سے رابطہ کریں' : 'Contact Ibrahim Klasra'}</span>
                <span className="material-symbols-outlined text-[16px]">
                  {isUrdu ? 'arrow_back' : 'arrow_forward'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Inquiry Popup */}
      <ServiceInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        defaultService={selectedService}
      />
    </section>
  );
};
