import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      badge: '✅ Quality Products',
      icon: 'verified',
      iconClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      title: 'Quality Products',
      titleUrdu: 'معیاری اور 100% اصل ادویات',
      description:
        'No counterfeit or sub-standard formulations. Every chemical batch is sourced from verified corporate manufacturers like Suncrop Group.',
    },
    {
      badge: '✅ Trusted Service',
      icon: 'handshake',
      iconClass: 'bg-teal-100 text-teal-800 border-teal-200',
      title: 'Trusted Service',
      titleUrdu: 'قابلِ اعتماد کسان خدمات',
      description:
        'Decades of honest partnership with local farmers in Kot Addu, built on fair transparent rates and guaranteed authenticity.',
    },
    {
      badge: '✅ Expert Guidance',
      icon: 'psychology',
      iconClass: 'bg-green-100 text-green-800 border-green-200',
      title: 'Expert Guidance',
      titleUrdu: 'ماہرانہ زرعی رہنمائی',
      description:
        'Certified agricultural field advice, pest threshold diagnosis, and precise dosage schedules tailored to your specific crop soil.',
    },
    {
      badge: '✅ Free Delivery',
      icon: 'local_shipping',
      iconClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      title: 'Free Delivery',
      titleUrdu: '100% مفت فارم ڈیلیوری',
      description:
        'Zero delivery fee! Heavy fertilizer bags, pesticides, and seeds delivered directly to your farm or dera across the region.',
    },
    {
      badge: '✅ Drone Spray Service',
      icon: 'flight_takeoff',
      iconClass: 'bg-purple-100 text-purple-800 border-purple-200',
      title: 'Drone Spray Service',
      titleUrdu: 'جدید ڈرون اسپرے سروس',
      description:
        'Advanced GPS agricultural hexacopters providing uniform micro-droplet coverage in 15 minutes per acre with zero crop trampling.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-12 lg:py-16 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200/60">
            <span className="material-symbols-outlined text-[16px] text-emerald-600">military_tech</span>
            <span>Unmatched Reliability</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
            Kyun Kissan Agro Traders? / <span className="urdu-text font-bold text-emerald-700" dir="rtl">کیوں کسان ایگرو ٹریڈرز؟</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Committed to farmer prosperity through genuine products, fair guidance, free delivery, and cutting-edge drone mechanization.
          </p>
        </div>

        {/* 5 Pillars Grid matching green/emerald theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4.5">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs hover:shadow-md card-premium-hover hover:border-emerald-300 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border ${pillar.iconClass}`}>
                    <span className="material-symbols-outlined text-[24px]">{pillar.icon}</span>
                  </div>
                  <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-800 group-hover:text-emerald-900 transition-colors">
                  {pillar.title}
                </h3>
                <h4 className="urdu-text text-sm font-bold text-emerald-700 mt-0.5" dir="rtl">
                  {pillar.titleUrdu}
                </h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
