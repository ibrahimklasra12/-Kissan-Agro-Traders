import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      badge: '✓ Genuine Products',
      icon: 'verified',
      gradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
      iconBg: 'bg-emerald-100 text-emerald-800 border-emerald-300/80',
      title: 'Genuine Products',
      titleUrdu: '100% تصدیق شدہ اور اصل ادویات',
      description:
        'Zero counterfeit guarantee. Every pesticide, fertilizer, and seed batch is 100% original, lab-verified, and sourced from top manufacturers.',
    },
    {
      badge: '✓ Agricultural Guidance',
      icon: 'psychology_alt',
      gradient: 'from-green-500/10 via-green-500/5 to-transparent',
      iconBg: 'bg-green-100 text-green-800 border-green-300/80',
      title: 'Agricultural Guidance',
      titleUrdu: 'مفید اور مفت زرعی رہنمائی',
      description:
        'Scientific field advice, pest threshold diagnosis, and custom crop nutrition schedules tailored directly to local soil conditions.',
    },
    {
      badge: '✓ Drone Spray',
      icon: 'flight_takeoff',
      gradient: 'from-purple-500/10 via-purple-500/5 to-transparent',
      iconBg: 'bg-purple-100 text-purple-800 border-purple-300/80',
      title: 'Drone Spray',
      titleUrdu: 'جدید ڈرون اسپرے سروس',
      description:
        'Next-generation GPS aerial spraying. Uniform canopy coverage in 15-20 minutes per acre with 0% crop trampling and massive water savings.',
    },
    {
      badge: '✓ Free Delivery',
      icon: 'local_shipping',
      gradient: 'from-teal-500/10 via-teal-500/5 to-transparent',
      iconBg: 'bg-teal-100 text-teal-800 border-teal-300/80',
      title: 'Free Delivery',
      titleUrdu: '100% مفت فارم ڈیلیوری',
      description:
        'Heavy fertilizer bags, pesticides, and hybrid seeds delivered straight to your farm or dera with 100% free delivery across Kot Addu.',
    },
    {
      badge: '✓ Trusted Service',
      icon: 'handshake',
      gradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
      iconBg: 'bg-amber-100 text-amber-800 border-amber-300/80',
      title: 'Trusted Service',
      titleUrdu: 'کسانوں کا قابلِ اعتماد ادارہ',
      description:
        'Decades of honest partnership with thousands of growers in Kot Addu, built upon transparent rates, mutual respect, and genuine care.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-14 lg:py-18 bg-slate-50 border-t border-slate-200/60 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-300/60 shadow-xs">
            <span className="material-symbols-outlined text-[16px] text-emerald-700">military_tech</span>
            <span>Why Farmers Trust Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Kyun Kissan Agro Traders? / <span className="urdu-text font-bold text-emerald-700" dir="rtl">کیوں کسان ایگرو ٹریڈرز؟</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-xl mx-auto leading-relaxed">
            Har kisan ki behtar paidawar ke liye 100% genuine products, muft rahnumai, muft farm delivery aur jadeed drone technology.
          </p>
        </div>

        {/* 5 Animated Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 100}ms` }}
              className={`relative bg-white/90 backdrop-blur-xs p-6 rounded-3xl border border-emerald-100/80 shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-emerald-400 flex flex-col justify-between group transition-all duration-300 animate-slide-up overflow-hidden`}
            >
              {/* Subtle card top gradient */}
              <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${pillar.gradient} pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xs border ${pillar.iconBg}`}>
                    <span className="material-symbols-outlined text-[26px]">{pillar.icon}</span>
                  </div>
                  <span className="text-[10px] font-black text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/70 shadow-2xs">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-800 group-hover:text-emerald-800 transition-colors tracking-tight">
                  {pillar.title}
                </h3>
                <h4 className="urdu-text text-sm font-bold text-emerald-700 mt-0.5" dir="rtl">
                  {pillar.titleUrdu}
                </h4>
                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="relative z-10 mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-emerald-700">
                <span>Verified Service</span>
                <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
