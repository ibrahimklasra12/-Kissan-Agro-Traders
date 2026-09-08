import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface CropInfo {
  id: string;
  name: string;
  nameUrdu: string;
  icon: string;
  plantingPeriodEn: string;
  plantingPeriodUr: string;
  growthStageEn: string;
  growthStageUr: string;
  monitoringPeriodEn: string;
  monitoringPeriodUr: string;
  harvestPeriodEn: string;
  harvestPeriodUr: string;
  remindersEn: string[];
  remindersUr: string[];
}

const CROPS_DATA: CropInfo[] = [
  {
    id: 'cotton',
    name: 'Cotton',
    nameUrdu: 'کپاس (سفید سونا)',
    icon: 'spa',
    plantingPeriodEn: 'Spring / Early Summer (April – May typically)',
    plantingPeriodUr: 'موسم بہار / ابتدائی گرما (عام طور پر اپریل تا مئی)',
    growthStageEn: 'Vegetative growth, squaring, flowering, and boll development',
    growthStageUr: 'شاخ کشی، پھول گڈی اور ٹینڈا بننے کے مراحل',
    monitoringPeriodEn: 'Regular scouting for sucking pests (whitefly, jassids, thrips) and pink bollworm',
    monitoringPeriodUr: 'رس چوسنے والے کیڑے (سفید مکھی، تھرپس، سبز تیلا) اور گلابی سنڈی کی باقاعدہ جانچ',
    harvestPeriodEn: 'Autumn to early Winter (September – November)',
    harvestPeriodUr: 'موسم خزاں تا آغاز سرما (ستمبر تا نومبر)',
    remindersEn: [
      'Use certified delinted seeds treated with fungicide.',
      'Maintain adequate plant population and avoid over-irrigation during early squaring.',
      'Consult agronomists before spraying chemicals to respect economic threshold levels.',
    ],
    remindersUr: [
      'تصدیق شدہ اور زہر آلود بیج استعمال کریں۔',
      'پھول گڈی کے دوران زیادہ پانی دینے سے گریز کریں تاکہ پھول گرنے کا خطرہ کم ہو۔',
      'اسپرے کرنے سے پہلے معاشی حدِ نقصان (ETL) کا خیال رکھیں۔',
    ],
  },
  {
    id: 'wheat',
    name: 'Wheat',
    nameUrdu: 'گندم (بنیادی غذائی فصل)',
    icon: 'grain',
    plantingPeriodEn: 'Autumn / Winter (November – early December)',
    plantingPeriodUr: 'موسم ربیع / خزاں (نومبر تا دسمبر)',
    growthStageEn: 'Tillering, jointing, booting, heading, and grain-filling',
    growthStageUr: 'شگوفے نکلنا، گوبھ، سٹے نکلنا اور دانے کا دودھیا مرحلہ',
    monitoringPeriodEn: 'Broadleaf and narrowleaf weed eradication (30–45 days after sowing); rust disease watch',
    monitoringPeriodUr: 'بوائی کے 30 تا 45 دن بعد چوڑے و نوکیلے پتوں والی جڑی بوٹیوں کا تدارک اور کنگی کی جانچ',
    harvestPeriodEn: 'Spring (April – early May)',
    harvestPeriodUr: 'موسم بہار (اپریل تا مئی)',
    remindersEn: [
      'Apply full phosphorus fertilizer at time of land preparation / sowing.',
      'Critical irrigations: Crown root initiation (first water) and booting/heading stages.',
      'Keep field free from weed competition in the first 40 days.',
    ],
    remindersUr: [
      'بوائی کے وقت فاسفورسی اور پوٹاش کھاد کا استعمال یقینی بنائیں۔',
      'پہلا پانی (کور کا پانی) اور گوبھ کے وقت پانی کی فراہمی انتہائی اہم ہے۔',
      'پہلے 40 دنوں کے اندر جڑی بوٹیوں کا خاتمہ یقینی بنائیں۔',
    ],
  },
  {
    id: 'sugarcane',
    name: 'Sugarcane',
    nameUrdu: 'کماد / گنا',
    icon: 'grass',
    plantingPeriodEn: 'Autumn (September – October) or Spring (February – March)',
    plantingPeriodUr: 'موسم بہار (فروری تا مارچ) یا موسم خزاں (ستمبر تا اکتوبر)',
    growthStageEn: 'Germination, tillering, grand growth / stalk elongation, and ripening',
    growthStageUr: 'اگاؤ، شگوفے، گنے کی لمبائی اور مٹھاس کا پختگی مرحلہ',
    monitoringPeriodEn: 'Borer watch (top borer, stem borer, root borer) and pyrilla',
    monitoringPeriodUr: 'گڑوؤں (تنے، چوٹی، اور جڑ کی سنڈی) اور پائرلا کی باقاعدہ جانچ',
    harvestPeriodEn: 'Winter through Spring (November – March depending on mill season)',
    harvestPeriodUr: 'نومبر تا مارچ (شوگر مل سیزن کے مطابق)',
    remindersEn: [
      'Ensure deep ploughing and furrow planting with healthy, borer-free sets.',
      'Timely earthing-up helps prevent lodging during monsoon winds.',
      'Balance granular insecticide applications to safeguard subterranean root systems.',
    ],
    remindersUr: [
      'صحت مند اور کیڑوں سے پاک گنے کے بیج استعمال کریں۔',
      'مون سون کی ہواؤں سے قبل کماد کو مٹی چڑھانے کا عمل لازمی کریں۔',
      'جڑوں اور تنے کی حفاظت کے لیے تجویز کردہ دانے دار زہر کا بروقت استعمال کریں۔',
    ],
  },
  {
    id: 'maize',
    name: 'Maize / Corn',
    nameUrdu: 'مکئی (بہاریہ و خریف)',
    icon: 'energy_savings_leaf',
    plantingPeriodEn: 'Spring crop (February) & Autumn crop (July – August)',
    plantingPeriodUr: 'بہاریہ مکئی (فروری) اور خریف مکئی (جولائی تا اگست)',
    growthStageEn: 'Knee-high vegetative, tasseling, silking, and cob formation',
    growthStageUr: 'گھٹنے کے برابر قد، جھنڈی نکلنا، سِلک بننا اور چھلی بھرائی',
    monitoringPeriodEn: 'Fall Armyworm scouting and shoot fly during early germination',
    monitoringPeriodUr: 'ابتدائی اگاؤ پر شوٹ فلائی اور بعد میں فال آرمی ورم (لشکر سنڈی) کی نگرانی',
    harvestPeriodEn: 'Around 90–110 days after sowing depending on hybrid',
    harvestPeriodUr: 'بوائی کے تقریباً 90 تا 110 دن بعد (ہائبرڈ ورائٹی کے لحاظ سے)',
    remindersEn: [
      'Regular scouting for Fall Armyworm heart-leaf damage is vital.',
      'Consistent moisture during flowering and cob formation prevents blank tips.',
      'Split nitrogen application into multiple smaller doses for high hybrid yields.',
    ],
    remindersUr: [
      'فال آرمی ورم کے حملے پر فورا دل میں دانے دار یا تجویز کردہ اسپرے کریں۔',
      'پھول اور چھلی بننے کے وقت پانی کی کمی مت آنے دیں۔',
      'نائٹروجن کھاد کو قسطوں میں استعمال کریں تاکہ پودے کو مسلسل خوراک ملتی رہے۔',
    ],
  },
  {
    id: 'rice',
    name: 'Rice / Paddy',
    nameUrdu: 'دھان / چاول',
    icon: 'water',
    plantingPeriodEn: 'Nursery sowing (May – June); Transplantation (June – July)',
    plantingPeriodUr: 'پنیری کی کاشت (مئی تا جون) اور منتقلی (جون تا جولائی)',
    growthStageEn: 'Tillering, panicle initiation, flowering, and grain ripening',
    growthStageUr: 'شاخ کشی، گوبھ، سٹا نکلنا اور دانے پکنا',
    monitoringPeriodEn: 'Stem borers, leaf folder, bacterial leaf blight, and stem rot',
    monitoringPeriodUr: 'تنے کی سنڈی، پتہ لپیٹ اور بیکٹیریل بلائٹ کی بروقت نگرانی',
    harvestPeriodEn: 'Autumn (October – November)',
    harvestPeriodUr: 'موسم خزاں (اکتوبر تا نومبر)',
    remindersEn: [
      'Maintain 2–3 inches of standing water during first 30 days after transplant.',
      'Zinc sulphate application at 20–25 days prevents khaira disease / yellowing.',
      'Drain water 10–12 days prior to mechanical or manual harvesting.',
    ],
    remindersUr: [
      'پنیری لگنے کے پہلے 30 دن تک پانی کا کھڑا رہنا ضروری ہے۔',
      'زنک سلفیٹ کا استعمال پودے کو پیلاہٹ سے محفوظ رکھتا ہے۔',
      'کٹائی سے 10 تا 12 دن قبل پانی بند کر دیں۔',
    ],
  },
];

interface CropCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CropCalendarModal: React.FC<CropCalendarModalProps> = ({ isOpen, onClose }) => {
  const { isUrdu } = useLanguage();
  const [selectedCropId, setSelectedCropId] = useState<string>(CROPS_DATA[0].id);

  if (!isOpen) return null;

  const currentCrop = CROPS_DATA.find((c) => c.id === selectedCropId) || CROPS_DATA[0];

  return (
    <div
      id="crop-calendar-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        dir={isUrdu ? 'rtl' : 'ltr'}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto max-h-[90vh] flex flex-col text-slate-800 dark:text-slate-100 transition-colors"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">calendar_today</span>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                {isUrdu ? '🌾 زرعی فصل کیلنڈر و عمومی رہنمائی' : '🌾 Crop Calendar & Agricultural Stages'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isUrdu ? 'اہم فصلوں کے کاشت، دیکھ بھال اور برداشت کے مراحل' : 'Key planting, growth, monitoring, and harvest periods'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-800 dark:hover:text-white bg-slate-200/80 dark:bg-slate-800 rounded-xl transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
          {/* Crop Selector Tabs */}
          <div>
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-2">
              {isUrdu ? 'فصل منتخب کریں:' : 'Select Crop:'}
            </label>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {CROPS_DATA.map((crop) => (
                <button
                  key={crop.id}
                  type="button"
                  onClick={() => setSelectedCropId(crop.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                    selectedCropId === crop.id
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{crop.icon}</span>
                  <span>{isUrdu ? crop.nameUrdu : crop.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Current Crop Details Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800/80 dark:to-slate-900/80 p-5 sm:p-7 rounded-3xl border border-emerald-500/30 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[28px]">{currentCrop.icon}</span>
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white">
                  {isUrdu ? currentCrop.nameUrdu : currentCrop.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {isUrdu ? 'جنوبی پنجاب / کوٹ ادو زون کے عمومی زرعی معمولات' : 'General agronomic profile for South Punjab region'}
                </p>
              </div>
            </div>

            {/* 4 Main Stage Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 1. Planting Period */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-1.5">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  <span>{isUrdu ? 'کاشت کا وقت (Planting Period)' : 'Planting Period'}</span>
                </div>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {isUrdu ? currentCrop.plantingPeriodUr : currentCrop.plantingPeriodEn}
                </p>
              </div>

              {/* 2. Growth Stage */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-bold mb-1.5">
                  <span className="material-symbols-outlined text-[18px]">potted_plant</span>
                  <span>{isUrdu ? 'نشوونما کے اہم مراحل (Growth Stage)' : 'Growth Stages'}</span>
                </div>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {isUrdu ? currentCrop.growthStageUr : currentCrop.growthStageEn}
                </p>
              </div>

              {/* 3. Monitoring Period */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold mb-1.5">
                  <span className="material-symbols-outlined text-[18px]">search</span>
                  <span>{isUrdu ? 'نگرانی و حفاظتی تدابیر (Monitoring)' : 'Monitoring Period'}</span>
                </div>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {isUrdu ? currentCrop.monitoringPeriodUr : currentCrop.monitoringPeriodEn}
                </p>
              </div>

              {/* 4. Harvest Period */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 text-xs font-bold mb-1.5">
                  <span className="material-symbols-outlined text-[18px]">agriculture</span>
                  <span>{isUrdu ? 'برداشت / کٹائی (Harvest Period)' : 'Harvest Period'}</span>
                </div>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {isUrdu ? currentCrop.harvestPeriodUr : currentCrop.harvestPeriodEn}
                </p>
              </div>
            </div>

            {/* General Reminders */}
            <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-3">
                <span className="material-symbols-outlined text-[18px]">checklist</span>
                <span>{isUrdu ? 'عمومی ہدایات و یاد دہانیاں (General Reminders)' : 'General Reminders'}</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {(isUrdu ? currentCrop.remindersUr : currentCrop.remindersEn).map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-emerald-500 shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            {isUrdu
              ? 'وضاحت: کاشت اور برداشت کے اوقات مقامی موسم، پانی کی دستیابی اور ورائٹی کے مطابق بدل سکتے ہیں۔ عین تاریخوں کے بجائے موسمی حالات اور ماہر زراعت کی ہدایت پر عمل کریں۔'
              : 'Notice: Sowing and harvesting windows vary based on local weather, water availability, and seed variety. These ranges are general agricultural guides.'}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50/80 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
          >
            {isUrdu ? 'بند کریں' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
