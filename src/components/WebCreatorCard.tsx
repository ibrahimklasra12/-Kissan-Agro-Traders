import React from 'react';

// ============================================================================
// 🔵 FACEBOOK PROFILE CONFIGURATION
// Paste your exact Facebook profile link below between the quotes:
// Example: "https://www.facebook.com/your-username"
// ============================================================================
const FACEBOOK_PROFILE_URL = "PASTE_YOUR_FACEBOOK_PROFILE_LINK_HERE";

export const WebCreatorCard: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/923007157733?text=Assalam%20o%20Alaikum%2C%20mujhe%20apni%20website%20banwani%20hai.';

  // Fallback to Facebook if the placeholder has not been replaced yet
  const resolvedFacebookUrl =
    FACEBOOK_PROFILE_URL && FACEBOOK_PROFILE_URL !== 'PASTE_YOUR_FACEBOOK_PROFILE_LINK_HERE'
      ? FACEBOOK_PROFILE_URL
      : 'https://www.facebook.com';

  return (
    <section id="creator-spotlight" className="w-full py-3 sm:py-5 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          id="ibrahim-klasra-creator-card"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white p-5 sm:p-7 border border-emerald-500/35 shadow-xl shadow-emerald-950/20 transition-all duration-300 hover:border-emerald-400/50"
        >
          {/* Subtle Ambient Glow Orbs */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 left-1/4 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-5 sm:gap-6">
            {/* Left: Avatar & Identity Details */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 w-full xl:w-auto">
              {/* "IK" Circular Avatar Badge */}
              <div className="relative shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-600 to-teal-800 text-white font-black text-2xl sm:text-3xl flex items-center justify-center shadow-lg border-2 border-emerald-300/40 ring-4 ring-emerald-900/60">
                  <span>IK</span>
                </div>
                <div
                  className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-400 text-emerald-950 flex items-center justify-center shadow-xs border-2 border-emerald-950"
                  title="Digital Web Creator"
                >
                  <span className="material-symbols-outlined text-[13px] font-bold">code</span>
                </div>
              </div>

              {/* Text & Roles */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-[11px] font-extrabold text-emerald-300 tracking-wide uppercase">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    Creator of this Website
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[11px] font-bold">
                    Freelancer | Digital Web Creator
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1877F2]/20 border border-[#1877F2]/40 text-blue-300 text-[11px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#1877F2]" />
                    Facebook: Ibrahim Klasra
                  </span>
                </div>

                <div className="flex flex-wrap items-baseline justify-center sm:justify-start gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Ibrahim Klasra
                  </h3>
                  <span className="text-xs font-semibold text-emerald-400/90">
                    (Freelancer • Web Creator)
                  </span>
                </div>

                {/* Requested Tagline */}
                <p className="text-amber-300 font-semibold text-xs sm:text-sm tracking-wide">
                  “Aapka business, meri digital creativity.”
                </p>

                <p className="text-emerald-100/90 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
                  “Apni website banwane ke liye is number par rabta karein.”
                  <span className="block text-emerald-300/90 text-xs font-normal urdu-text mt-0.5" dir="rtl">
                    اپنی ذاتی، کاروباری یا کسان ایگرو جیسی جدید ویب سائٹ بنوانے کے لیے رابطہ کریں
                  </span>
                </p>
              </div>
            </div>

            {/* Right: Contact Number, WhatsApp & Facebook Follow Button */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2.5 sm:gap-3 w-full xl:w-auto shrink-0 pt-3 xl:pt-0 border-t xl:border-t-0 border-emerald-800/60">
              {/* Contact Call Link */}
              <a
                href="tel:03007157733"
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-black/40 hover:bg-black/60 border border-emerald-500/30 text-white transition-all duration-200 hover:-translate-y-0.5 group w-full sm:w-auto justify-center"
                title="Call 0300 7157733"
              >
                <div className="w-7 h-7 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[17px]">call</span>
                </div>
                <div className="text-left">
                  <span className="text-[9px] text-emerald-300/80 font-semibold block uppercase tracking-wider">
                    Contact / Call
                  </span>
                  <span className="text-xs sm:text-sm font-black tracking-wide text-white">
                    0300 7157733
                  </span>
                </div>
              </a>

              {/* WhatsApp Button with exact text and link preserved */}
              <a
                id="ibrahim-klasra-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-extrabold px-4 py-3 rounded-2xl shadow-md hover:shadow-green-500/25 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 border border-white/25 w-full sm:w-auto"
              >
                <span>💬 WhatsApp par Rabta Karein</span>
              </a>

              {/* Premium Facebook Follow Button */}
              <a
                id="ibrahim-klasra-facebook-btn"
                href={resolvedFacebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs sm:text-sm font-extrabold px-4 py-3 rounded-2xl shadow-md hover:shadow-[0_6px_20px_-4px_rgba(24,119,242,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 border border-white/25 w-full sm:w-auto"
                title="Follow Ibrahim Klasra on Facebook"
              >
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>🔵 Follow Me on Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
