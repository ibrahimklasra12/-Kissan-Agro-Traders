import React from 'react';

export const BusinessStats: React.FC = () => {
  const stats = [
    {
      metric: '100%',
      label: 'Genuine Products',
      urduLabel: 'اصل اور مصدقہ پروڈکٹس',
      icon: 'verified_user',
      description: 'Zero counterfeit guarantee on all pesticides and fertilizers.',
    },
    {
      metric: '4+',
      label: 'Core Categories',
      urduLabel: 'چار زرعی شعبہ جات',
      icon: 'category',
      description: 'Pesticides, Fertilizers, Hybrid Seeds, and Drone Mechanization.',
    },
    {
      metric: '100%',
      label: 'Free Farm Delivery',
      urduLabel: 'مفت فارم ڈیلیوری',
      icon: 'local_shipping',
      description: 'Direct delivery to dera or field anywhere in Kot Addu bypass region.',
    },
    {
      metric: 'Fast',
      label: 'WhatsApp Support',
      urduLabel: 'فوری واٹس ایپ رابطہ',
      icon: 'chat',
      description: 'Direct agricultural advice and rate confirmation on WhatsApp.',
    },
  ];

  return (
    <section id="business-stats" className="py-12 bg-emerald-950 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-800/40 via-emerald-950 to-emerald-950 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-[15px]">insights</span>
            <span>Business Facts &amp; Trust</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Hamare Karobar Ka Aitmaad / <span className="urdu-text text-amber-400 font-bold" dir="rtl">ہمارا اعتماد</span>
          </h2>
          <p className="text-xs sm:text-sm text-emerald-200/80 mt-1">
            Verified agricultural reliability with transparent standards across Punjab.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-emerald-900/40 backdrop-blur-md rounded-3xl p-6 border border-emerald-500/25 hover:border-emerald-400/50 hover:bg-emerald-900/60 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-800/60 border border-emerald-400/30 text-emerald-300 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-[26px]">{stat.icon}</span>
              </div>

              <div className="text-3xl sm:text-4xl font-black text-amber-300 tracking-tight mb-1">
                {stat.metric}
              </div>

              <div className="text-base font-bold text-white mb-0.5">
                {stat.label}
              </div>

              <div className="urdu-text text-xs text-emerald-300 font-semibold mb-2" dir="rtl">
                {stat.urduLabel}
              </div>

              <p className="text-xs text-emerald-100/70 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
