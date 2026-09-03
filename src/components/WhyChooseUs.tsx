import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: 'verified',
      iconClass: 'bg-emerald-50 text-emerald-700',
      title: 'Quality Products',
      titleUrdu: 'معیاری اور اصل ادویات',
      description:
        'No counterfeit or sub-standard formulations. Every chemical batch is sourced from verified corporate manufacturers.',
    },
    {
      icon: 'handshake',
      iconClass: 'bg-blue-50 text-blue-600',
      title: 'Trusted Service',
      titleUrdu: 'قابلِ اعتماد زرعی مشورہ',
      description:
        'Transparent advice based on actual field pest thresholds rather than pushing unnecessary sales volume.',
    },
    {
      icon: 'agriculture',
      iconClass: 'bg-orange-50 text-orange-600',
      title: 'Farmer Focused',
      titleUrdu: 'کسان کی خوشحالی',
      description:
        'Directly addressing local challenges: water salinity, high temperatures, and resilient bollworm strains.',
    },
    {
      icon: 'precision_manufacturing',
      iconClass: 'bg-purple-50 text-purple-600',
      title: 'Modern Solutions',
      titleUrdu: 'جدید زرعی ٹیکنالوجی',
      description:
        'Bringing high-precision flight telemetry and GPS guided spray applications within everyday farmer reach.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-12 lg:py-16 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
            <span>Core Pillars</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
            Why Choose Us / <span className="urdu-text font-bold text-emerald-700" dir="rtl">ہمیں کیوں منتخب کریں؟</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Committed to farmer prosperity through genuine products, fair guidance, and modern technological efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${pillar.iconClass}`}>
                  <span className="material-symbols-outlined text-[26px]">{pillar.icon}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800">{pillar.title}</h3>
                <h4 className="urdu-text text-sm sm:text-base text-emerald-700 font-bold mt-0.5" dir="rtl">
                  {pillar.titleUrdu}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
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
