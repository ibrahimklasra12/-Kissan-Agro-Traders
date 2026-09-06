import React from 'react';

// ============================================================================
// 🔵 FACEBOOK PROFILE CONFIGURATION
// Paste your exact Facebook profile link below between the quotes:
// Example: "https://www.facebook.com/your-username"
// ============================================================================
const FACEBOOK_PROFILE_URL = "PASTE_YOUR_FACEBOOK_PROFILE_LINK_HERE";

export const WebCreatorCard: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/923007157733?text=Assalam%20o%20Alaikum%20Ibrahim%20bhai%2C%20mujhe%20apne%20business%20ke%20liye%20website%20banwani%20hai.';

  // Fallback to Facebook if the placeholder has not been replaced yet
  const resolvedFacebookUrl =
    FACEBOOK_PROFILE_URL && FACEBOOK_PROFILE_URL !== 'PASTE_YOUR_FACEBOOK_PROFILE_LINK_HERE'
      ? FACEBOOK_PROFILE_URL
      : 'https://www.facebook.com';

  const services = [
    {
      title: 'Website Design',
      icon: 'palette',
      desc: 'Custom, modern and responsive user interfaces tailored for high engagement.',
    },
    {
      title: 'Business Websites',
      icon: 'storefront',
      desc: 'Professional web identity for shops, agro traders, distributors & enterprises.',
    },
    {
      title: 'Landing Pages',
      icon: 'rocket_launch',
      desc: 'High-converting showcase and product pages optimized for sales & inquiries.',
    },
    {
      title: 'PWA & Installable Apps',
      icon: 'install_mobile',
      desc: 'Offline-ready mobile app experience that installs directly on customer phones.',
    },
    {
      title: 'Website Maintenance',
      icon: 'build_circle',
      desc: 'Speed optimization, ongoing updates, bug fixes, and continuous technical support.',
    },
  ];

  return (
    <section id="creator-portfolio" className="w-full py-8 sm:py-12 bg-slate-900/30 border-t border-slate-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Creator Showcase Container */}
        <div
          id="ibrahim-klasra-creator-card"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white p-6 sm:p-8 lg:p-10 border border-emerald-500/35 shadow-2xl shadow-emerald-950/30 transition-all duration-300 hover:border-emerald-400/60 card-premium-3d"
        >
          {/* Ambient Glow Lighting */}
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            {/* Header: Identity, Title & Contact Bar */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 pb-6 border-b border-emerald-800/60">
              {/* Left: Avatar & Bio */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 w-full lg:w-auto">
                {/* IK Avatar Badge */}
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

                {/* Info */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-[11px] font-extrabold text-emerald-300 tracking-wide uppercase">
                      <span className="material-symbols-outlined text-[14px]">verified</span>
                      Website Creator
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[11px] font-bold">
                      Freelancer • Digital Web Creator
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1877F2]/20 border border-[#1877F2]/40 text-blue-300 text-[11px] font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#1877F2]" />
                      Facebook: Ibrahim Klasra
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      Ibrahim Klasra
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-300">
                      Website Designed &amp; Created by Ibrahim Klasra
                    </p>
                  </div>

                  <p className="text-amber-300 font-semibold text-xs sm:text-sm">
                    “Modern websites aur digital experiences create karta hoon.”
                  </p>

                  <p className="text-emerald-100/90 text-xs sm:text-sm max-w-xl leading-relaxed">
                    Aapka business, meri digital creativity. Apne karobar, dukaan ya personal brand ke liye modern, fast aur installable PWA website banwane ke liye rabta karein.
                  </p>
                </div>
              </div>

              {/* Right: Primary Contact Actions */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full lg:w-auto shrink-0">
                {/* Main WhatsApp CTA */}
                <a
                  id="creator-whatsapp-cta"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-extrabold px-5 py-3 rounded-2xl shadow-lg hover:shadow-green-500/30 transition-all duration-200 hover:scale-[1.02] active:scale-95 border border-white/20 text-center"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Contact Ibrahim Klasra (WhatsApp)</span>
                </a>

                {/* Facebook Profile */}
                <a
                  id="creator-facebook-btn"
                  href={resolvedFacebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-2xl shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95 border border-white/20 text-center"
                >
                  <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Follow on Facebook</span>
                </a>

                {/* Direct Call */}
                <a
                  href="tel:03007157733"
                  className="inline-flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 border border-emerald-500/30 text-white text-xs font-bold px-4 py-2 rounded-2xl transition-colors text-center"
                >
                  <span className="material-symbols-outlined text-[16px] text-emerald-300">call</span>
                  <span>Direct Call: 0300 7157733</span>
                </a>
              </div>
            </div>

            {/* Freelancer Services Grid */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-amber-300">design_services</span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Freelancer Web Services / <span className="urdu-text text-emerald-300 text-sm font-medium" dir="rtl">خدمات</span>
                  </h4>
                </div>
                <span className="text-[11px] text-emerald-300/80 font-medium hidden sm:inline">
                  Modern &amp; Responsive Web Solutions
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-emerald-900/40 border border-emerald-500/20 hover:border-emerald-400/40 hover:bg-emerald-900/60 transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-emerald-800/60 border border-emerald-400/30 text-emerald-300 flex items-center justify-center mb-2.5 transition-transform group-hover:scale-110">
                        <span className="material-symbols-outlined text-[18px]">{service.icon}</span>
                      </div>
                      <h5 className="text-xs sm:text-sm font-extrabold text-white mb-1">
                        {service.title}
                      </h5>
                      <p className="text-[11px] text-emerald-100/70 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* My Websites & Projects Showcase */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[18px] text-emerald-400">language</span>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  My Websites / Projects (پورٹ فولیو)
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Project 1: Kissan Agro Traders */}
                <div className="p-4 rounded-2xl bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-800/70 text-amber-300 flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-[20px]">agriculture</span>
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-black text-white">
                        Kissan Agro Traders
                      </h5>
                      <p className="text-[11px] text-emerald-200/80">
                        Live PWA Agricultural E-Commerce &amp; Guidance Platform
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold border border-emerald-400/30 uppercase">
                    Live Project
                  </span>
                </div>

                {/* Project 2: Coming Soon */}
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-dashed border-emerald-500/25 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 text-slate-400 flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-slate-300">
                        More Projects Coming Soon
                      </h5>
                      <p className="text-[11px] text-slate-400">
                        Exciting business websites in active development.
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white/5 text-slate-400 text-[10px] font-bold border border-white/10 uppercase">
                    In Progress
                  </span>
                </div>
              </div>
            </div>

            {/* Build Your Website CTA Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-900/90 via-emerald-800/80 to-teal-900/90 border border-emerald-400/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-amber-300 mb-0.5">
                  <span className="material-symbols-outlined text-[15px]">flash_on</span>
                  <span>Build Your Website</span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-white">
                  Apni Website Banwayein / <span className="urdu-text font-bold text-amber-300" dir="rtl">اپنی ویب سائٹ بنوائیں</span>
                </h4>
                <p className="text-xs text-emerald-100/90 mt-0.5 leading-relaxed">
                  Business ke liye modern, fast aur responsive website banwane ke liye Ibrahim Klasra se rabta karein.
                </p>
              </div>

              <a
                id="build-your-website-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95 whitespace-nowrap cursor-pointer border border-amber-200/80"
              >
                <span>Contact Ibrahim Klasra</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
