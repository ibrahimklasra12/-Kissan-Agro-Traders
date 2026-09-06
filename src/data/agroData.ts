import { Product, SeasonalOffer } from '../types';
import kammanWdgImg from '../assets/images/product_kamman_wdg_1788436180871.jpg';
import lumaxXtraImg from '../assets/images/product_lumax_xtra_1788436213547.jpg';
import aegisImg from '../assets/images/product_aegis_1788436235592.jpg';
import kammanGrImg from '../assets/images/product_kamman_gr_1788436254038.jpg';
import foreePlusImg from '../assets/images/product_foree_plus_1788436270542.jpg';

// 15 New High-Fidelity Product Images
import diamondBajraImg from '../assets/images/product_bajra_1788536271482.jpg';
import diamondRiceImg from '../assets/images/product_diamond_rice_1788536325268.jpg';
import rootexImg from '../assets/images/product_rootex_1788536344907.jpg';
import trunkStarImg from '../assets/images/product_trunk_star_1788536368864.jpg';
import zinkronImg from '../assets/images/product_zinkron_1788536390165.jpg';
import factorImg from '../assets/images/product_factor_1788536412452.jpg';
import bestowImg from '../assets/images/product_bestow_1788536430994.jpg';
import rangerGoldImg from '../assets/images/product_ranger_gold_1788536449698.jpg';
import alpineImg from '../assets/images/product_alpine_1788536478713.jpg';
import superHelperImg from '../assets/images/product_super_helper_1788536502779.jpg';
import fallSuperImg from '../assets/images/product_fall_super_1788536523383.jpg';
import nitroPotashImg from '../assets/images/product_nitro_potash_1788536545866.jpg';
import sunflowerSeedImg from '../assets/images/product_sunflower_seed_1788536568263.jpg';
import hybridOkraImg from '../assets/images/product_hybrid_okra_1788536588007.jpg';
import trunkImg from '../assets/images/product_trunk_1788536612922.jpg';

export const BUSINESS_INFO = {
  name: 'KISSAN AGRO TRADERS',
  urduName: 'کسان ایگرو ٹریڈرز',
  tagline: 'کسانوں کا قابلِ اعتماد زرعی پارٹنر',
  englishTagline: 'Quality Pesticides, Fertilizers, Seeds & Professional Drone Spray Services',
  phone: '0342-6400074',
  phoneRaw: '+923426400074',
  telLink: 'tel:+923426400074',
  whatsappBaseUrl: 'https://wa.me/923426400074',
  address: 'Kot Addu Bypass, Madina Chowk, Punjab, Pakistan',
  addressUrdu: 'کوٹ ادو بائی پاس، مدینہ چوک، پاکستان',
  mapsUrl: 'https://maps.google.com/?q=Kot+Addu+Bypass+Madina+Chowk+Pakistan',
  openingHours: '7:00 AM — 6:30 PM (Daily)',
  openingHoursUrdu: 'روزانہ صبح 7:00 بجے سے شام 6:30 بجے تک',
};

export const PRODUCTS: Product[] = [
  {
    id: 'kamman-wdg',
    name: 'Kamman',
    category: 'pesticides',
    categoryLabel: 'Pesticides',
    categoryUrdu: 'زرعی ادویات',
    tagline: 'کمان 20% WDG',
    descriptionUrdu: 'فصلوں کی اٹھان، سنڈیوں اور بوررز سے پاک شاندار پیداوار کے لیے موثر حل۔',
    imageUrl: kammanWdgImg,
    imageAlt: 'Kamman 20% WDG pesticide packaging by Suncrop Group',
    badge: 'Pesticides / زرعی ادویات',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Kamman.',
  },
  {
    id: 'lumax-xtra',
    name: 'Lumax Xtra',
    category: 'pesticides',
    categoryLabel: 'Pesticides',
    categoryUrdu: 'جڑی بوٹی مار',
    tagline: 'لیومیکس ایکسٹرا 550 SC',
    descriptionUrdu: 'مکئی کی جڑی بوٹیوں کا دشمن - سخت جان گھاس اور چوڑے پتے والی جڑی بوٹیوں کا دیرپا اور موثر کنٹرول۔',
    imageUrl: lumaxXtraImg,
    imageAlt: 'Lumax Xtra 550 SC herbicide packaging by Suncrop Group',
    badge: 'Pesticides / جڑی بوٹی مار',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Lumax Xtra.',
  },
  {
    id: 'aegis',
    name: 'Aegis',
    category: 'fertilizers',
    categoryLabel: 'Fertilizers',
    categoryUrdu: 'بایو اسٹیمولینٹ و کھاد',
    tagline: 'جاپانی ایجز فارمولیشن',
    descriptionUrdu: 'شدید گرمی، سردی ہو یا برسات - نامساعد موسمی حالات میں پودے کی مضبوط نشوونما اور بھرپور مدافعت۔',
    imageUrl: aegisImg,
    imageAlt: 'Aegis bio-stimulant plant growth regulator packaging by Suncrop Group',
    badge: 'Fertilizers / بایو اسٹیمولینٹ',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Aegis.',
  },
  {
    id: 'kamman-gr',
    name: 'Kamman',
    category: 'pesticides',
    categoryLabel: 'Pesticides',
    categoryUrdu: 'دانے دار زہر',
    tagline: 'کمان 0.4% GR (دانے دار)',
    descriptionUrdu: 'تمام قسم کے بوررز اور پتہ لپیٹ سنڈی کا بہترین اور دیرپا کنٹرول۔',
    imageUrl: kammanGrImg,
    imageAlt: 'Kamman 0.4% GR granular insecticide packaging by Suncrop Group',
    badge: 'Pesticides / دانے دار زہر',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Kamman (GR).',
  },
  {
    id: 'foree-plus',
    name: 'Foree Plus',
    category: 'pesticides',
    categoryLabel: 'Pesticides',
    categoryUrdu: 'زرعی ادویات',
    tagline: 'فوری پلس 10% WP',
    descriptionUrdu: 'وزنی ٹینڈے، سفید کپاس - سفید مکھی، جیسڈ، تھرپس اور دیگر رس چوسنے والے کیڑوں کا موثر کنٹرول۔',
    imageUrl: foreePlusImg,
    imageAlt: 'Foree Plus 10% WP pesticide pouch packaging by Suncrop Group',
    badge: 'Pesticides / زرعی ادویات',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Foree Plus.',
  },
  {
    id: 'certified-hybrid-seeds',
    name: 'Certified Hybrid Seeds',
    category: 'seeds',
    categoryLabel: 'Seeds',
    categoryUrdu: 'ہائبرڈ بیج',
    tagline: 'مصدقہ اگاؤ اور شاندار پیداوار',
    descriptionUrdu: 'شاندار اگاؤ اور موسمی تغیرات کے خلاف مدافعت رکھنے والے پنجاب مصدقہ ہائبرڈ بیج۔',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA03dwJBQ6prBq0XtNPk7QIxQW1EVtS9SI56Gz-G_dKcSrOkMNJSzf45t0vLoyZsIzn-W4eI_PgconQ6K9En7fpRCX1ya8CaOfzzwPUw9TuYUKhfQE8bvPY7ylnxqnIEAkI5WgWv7oJ70n5Sn2ETKgtUuoKUXsntW_MBmmR-9q4Sl1wQE-prHqdsjstEg07_cj3e_gkKu0GZAiP374ijVSkL8g-sYSwdYD0lpl83tGjJGlN7TJyNiJd',
    imageAlt: 'Golden Harvest Pro certified hybrid crop seed packet',
    badge: 'Seeds / ہائبرڈ بیج',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Certified Hybrid Seeds.',
  },
  {
    id: 'drone-spray-flight',
    name: 'Precision Drone Spray Service',
    category: 'drone',
    categoryLabel: 'Drone Spray',
    categoryUrdu: 'ڈرون سروس',
    tagline: 'یکساں اور جدید مائیکرو ڈراپلیٹ اسپرے',
    descriptionUrdu: 'فصل کے پودوں پر یکساں اور تیز رفتار مائیکرو ڈراپلیٹ اسپرے سروس، پانی اور وقت کی بچت۔',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAA3aDprkGx-GOeQe3P2XvNuyJ-7Zj7UQyBliWK1hgZ_92J5OPHnmWFKMjJYv3DTb6lYGJOwWi0eAUD84d3mStY514TquSjfYUexI2eu324NPUcMh35ouaSP6FvJ4okXFQBSayLrEPWPcAbI5MZ_C9N3w6I0f7tKAlsDjsEs6S3w4gs2b5n_CiSFsS0O_7msWD3973PwIffD5qAu64H6DA_dNI5sjB60jENFwz4o1sS7mvWB24HbDOF',
    imageAlt: 'Agricultural spray drone flying over crop field',
    badge: 'Drone Spray / ڈرون سروس',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to book or inquire about Drone Spray Service.',
  },
  // 1. Diamond Hybrid Pearl Millet (SEED)
  {
    id: 'diamond-hybrid-pearl-millet',
    name: 'Diamond Hybrid Pearl Millet',
    category: 'seeds',
    categoryLabel: 'Seeds',
    categoryUrdu: 'ہائبرڈ باجرہ بیج',
    tagline: 'ڈائمنڈ ہائبرڈ باجرہ بیج - شاندار پیداوار',
    descriptionUrdu: 'صحت مند فصل، موٹا سٹہ اور بہترین پیداواری صلاحیت کا حامل پنجاب مصدقہ ہائبرڈ باجرہ بیج۔',
    imageUrl: diamondBajraImg,
    imageAlt: 'Diamond Hybrid Pearl Millet Seed package in lush green farm field',
    badge: 'Seeds / ہائبرڈ بیج',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Diamond Hybrid Pearl Millet Seed.',
  },
  // 2. Diamond Hybrid Rice (SEED)
  {
    id: 'diamond-hybrid-rice',
    name: 'Diamond Hybrid Rice',
    category: 'seeds',
    categoryLabel: 'Seeds',
    categoryUrdu: 'ہائبرڈ چاول بیج',
    tagline: 'ڈائمنڈ 152 ہائبرڈ چاول بیج',
    descriptionUrdu: 'ڈائمنڈ ہی بس ڈائمنڈ ہے - بھرپور شگوفے، لمبا وزنی دانہ اور شاندار پیداواری ریکارڈ۔',
    imageUrl: diamondRiceImg,
    imageAlt: 'Diamond 152 Hybrid Rice Seed bag in golden paddy field',
    badge: 'Seeds / ہائبرڈ چاول',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Diamond Hybrid Rice (Diamond 152).',
  },
  // 3. Rootex (PESTICIDE)
  {
    id: 'rootex',
    name: 'Rootex',
    category: 'pesticides',
    categoryLabel: 'Pesticides',
    categoryUrdu: 'جڑی بوٹی مار (کماد)',
    tagline: 'روٹیکس 300 EC (Rootex)',
    descriptionUrdu: 'کماد کی فصل میں ڈھیلا گھاس، مدھانہ، برو اور دیگر تمام سخت جان جڑی بوٹیوں کا جڑ سے مکمل صفایا۔',
    imageUrl: rootexImg,
    imageAlt: 'Rootex 300 EC herbicide bottle for sugarcane weed control',
    badge: 'Pesticides / جڑی بوٹی مار',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Rootex 300 EC for sugarcane.',
  },
  // 4. Trunk Star (PESTICIDE)
  {
    id: 'trunk-star',
    name: 'Trunk Star',
    category: 'pesticides',
    categoryLabel: 'Pesticides',
    categoryUrdu: 'بیج کی حفاظت و کیڑے مار',
    tagline: 'ٹرنک سٹار 26% FS (Trunk Star)',
    descriptionUrdu: 'ٹرنک سٹار لگائیں، بیماریوں اور کیڑوں سے مکمل حفاظت پائیں - کپاس اور دیگر فصلوں کے لیے بہترین حل۔',
    imageUrl: trunkStarImg,
    imageAlt: 'Trunk Star 26% FS chemical bottle in green field',
    badge: 'Pesticides / زرعی ادویات',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Trunk Star 26% FS.',
  },
  // 5. Zinkron Chelated (FERTILIZER)
  {
    id: 'zinkron-chelated',
    name: 'Zinkron Chelated',
    category: 'fertilizers',
    categoryLabel: 'Fertilizers',
    categoryUrdu: 'زنک چیلیٹڈ مائیکرو نیوٹرینٹ',
    tagline: 'زنکرون چیلیٹڈ زنک (Zinkron Chelated)',
    descriptionUrdu: 'مضبوط بنیاد، بھرپور پیداوار - فصل کو زنک کی فوری اور آسان فراہمی جو پودے کی مدافعت اور پیداوار بڑھائے۔',
    imageUrl: zinkronImg,
    imageAlt: 'Zinkron Chelated Zinc package in rice paddy field',
    badge: 'Fertilizers / چیلیٹڈ زنک',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Zinkron Chelated Zinc fertilizer.',
  },
  // 6. Factor (FERTILIZER)
  {
    id: 'factor',
    name: 'Factor',
    category: 'fertilizers',
    categoryLabel: 'Fertilizers',
    categoryUrdu: 'زمینی اصلاح کار',
    tagline: 'فیکٹر (Factor) - زمینی اصلاح کار',
    descriptionUrdu: 'زمین کی سخت تہہ توڑے، جڑوں کی نشوونما تیز کرے اور کھادوں کے استعمال کو انتہائی موثر بنائے۔',
    imageUrl: factorImg,
    imageAlt: 'Factor soil conditioner green bag standing in field',
    badge: 'Fertilizers / زمینی اصلاح کار',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Factor Soil Conditioner.',
  },
  // 7. Bestow (FERTILIZER)
  {
    id: 'bestow',
    name: 'Bestow',
    category: 'fertilizers',
    categoryLabel: 'Fertilizers',
    categoryUrdu: 'NPK فاسفیٹ کھاد',
    tagline: 'بیستو NPK 17:44:0 (Bestow)',
    descriptionUrdu: 'پیداوار کے ڈھیر - صحت مند فصل، بھرپور فاسفورس اور نائٹروجن سے فصل کی فوری اور متوازن غذائیت۔',
    imageUrl: bestowImg,
    imageAlt: 'Bestow NPK 17:44:0 Urea Phosphate fertilizer bag in cotton field',
    badge: 'Fertilizers / یوریا فاسفیٹ',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Bestow NPK 17:44:0 Urea Phosphate.',
  },
  // 8. Ranger Gold (PESTICIDE)
  {
    id: 'ranger-gold',
    name: 'Ranger Gold',
    category: 'pesticides',
    categoryLabel: 'Pesticides',
    categoryUrdu: 'دانے دار کیڑے مار',
    tagline: 'رینجر گولڈ (Ranger Gold)',
    descriptionUrdu: 'کیڑوں اور سنڈیوں سے پاک صحت مند کماد و دیگر فصلیں - دیرپا اور طاقتور تحفظ۔',
    imageUrl: rangerGoldImg,
    imageAlt: 'Ranger Gold pesticide pouch packaging in sugarcane farm',
    badge: 'Pesticides / دانے دار زہر',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Ranger Gold pesticide.',
  },
  // 9. Alpine (PESTICIDE)
  {
    id: 'alpine',
    name: 'Alpine',
    category: 'pesticides',
    categoryLabel: 'Pesticides',
    categoryUrdu: 'رس چوسنے والے کیڑوں کا خاتمہ',
    tagline: 'الپائن 200 SG (Alpine)',
    descriptionUrdu: 'رس چوسنے والے کیڑوں، سفید مکھی اور تھرپس کا فوری اور انتہائی موثر و دیرپا کنٹرول۔',
    imageUrl: alpineImg,
    imageAlt: 'Alpine 200 SG pesticide sachet pouch packaging',
    badge: 'Pesticides / حشرات کش',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Alpine 200 SG.',
  },
  // 10. Super Helper (FERTILIZER)
  {
    id: 'super-helper',
    name: 'Super Helper',
    category: 'fertilizers',
    categoryLabel: 'Fertilizers',
    categoryUrdu: 'درآمد شدہ زرعی ٹانک و کھاد',
    tagline: 'سپر ہیلپر سپیشل (Super Helper Special)',
    descriptionUrdu: 'پیداوار کا نیا معیار - امریکہ سے درآمد شدہ سپیشل فارمولیشن، دانہ موٹا اور فصل سرسبز و شاداب۔',
    imageUrl: superHelperImg,
    imageAlt: 'Super Helper Special foliar fertilizer container in wheat farm',
    badge: 'Fertilizers / پلانٹ ٹانک',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Super Helper Special.',
  },
  // 11. Fall Super (PESTICIDE)
  {
    id: 'fall-super',
    name: 'Fall Super',
    category: 'pesticides',
    categoryLabel: 'Pesticides',
    categoryUrdu: 'فال آرمی ورم سپیشلسٹ',
    tagline: 'فال سپر 0.35% دانے دار (Fall Super)',
    descriptionUrdu: 'مکئی اور دیگر فصلوں میں فال آرمی ورم اور دیگر نقصان دہ سنڈیوں کا مکمل اور یقینی صفایا۔',
    imageUrl: fallSuperImg,
    imageAlt: 'Fall Super 0.35% granular insecticide bag in corn field',
    badge: 'Pesticides / دانے دار زہر',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Fall Super 0.35% Granular.',
  },
  // 12. Nitro Potash (FERTILIZER)
  {
    id: 'nitro-potash',
    name: 'Nitro Potash',
    category: 'fertilizers',
    categoryLabel: 'Fertilizers',
    categoryUrdu: 'نائٹروپوٹاش پوٹاشیم نائٹریٹ',
    tagline: 'ڈائمنڈ نائٹروپوٹاش (Diamond Nitro Potash)',
    descriptionUrdu: 'پھل اور دانے کا سائز بڑا، چمکدار اور وزنی بنانے کے لیے بہترین حل - پھول گرنے سے روکے۔',
    imageUrl: nitroPotashImg,
    imageAlt: 'Diamond Nitro Potash Potassium Nitrate fertilizer package',
    badge: 'Fertilizers / پوٹاشیم نائٹریٹ',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Diamond Nitro Potash.',
  },
  // 13. Sunflower Seed (SEED)
  {
    id: 'sunflower-seed',
    name: 'Sunflower Seed',
    category: 'seeds',
    categoryLabel: 'Seeds',
    categoryUrdu: 'سورج مکھی ہائبرڈ بیج',
    tagline: 'ڈائمنڈ 2033 سورج مکھی ہائبرڈ بیج',
    descriptionUrdu: 'اعلیٰ تیل کی مقدار، شاندار پھول اور ریکارڈ پیداواری صلاحیت کا حامل مصدقہ سورج مکھی F1 ہائبرڈ بیج۔',
    imageUrl: sunflowerSeedImg,
    imageAlt: 'Diamond 2033 F1 Hybrid Sunflower Seed packet in sunflower field',
    badge: 'Seeds / سورج مکھی',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Diamond 2033 Sunflower Seed.',
  },
  // 14. Hybrid Okra (Bhindi) (SEED)
  {
    id: 'hybrid-okra',
    name: 'Hybrid Okra (Bhindi)',
    category: 'seeds',
    categoryLabel: 'Seeds',
    categoryUrdu: 'بھنڈی ہائبرڈ بیج',
    tagline: 'ڈائمنڈ 33 F1 ہائبرڈ بھنڈی بیج',
    descriptionUrdu: 'گہرا سبز رنگ، نازک لذیذ پھل اور پیلی رگ کے وائرس کے خلاف زبردست قوت مدافعت والا اعلیٰ بیج۔',
    imageUrl: hybridOkraImg,
    imageAlt: 'Diamond 33 F1 Hybrid Okra Bhindi seed pouch in flourishing field',
    badge: 'Seeds / ہائبرڈ بیج',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Diamond 33 F1 Hybrid Okra Seed.',
  },
  // 15. Trunk (PESTICIDE)
  {
    id: 'trunk',
    name: 'Trunk',
    category: 'pesticides',
    categoryLabel: 'Pesticides',
    categoryUrdu: 'باغات و کیڑے مار دوا',
    tagline: 'ٹرنک 20% SC (Trunk)',
    descriptionUrdu: 'آم کے باغات میں مینگو ہاپر، رس چوسنے والے کیڑوں کا مکمل صفایا اور پھل کی شاندار حفاظت۔',
    imageUrl: trunkImg,
    imageAlt: 'Trunk 20% SC insecticide bottle for mango tree hopper control',
    badge: 'Pesticides / حشرات کش',
    inquiryMessage: 'Salam Kissan Agro Traders, I want to inquire about Trunk 20% SC pesticide.',
  },
];

export const SEASONAL_OFFERS: SeasonalOffer[] = [
  {
    id: 'offer-1',
    packageNumber: 'PACKAGE 01',
    title: 'Wheat Season Protection Kit',
    descriptionUrdu: 'گندم کی جڑی بوٹیوں اور بیماریوں کے فوری انسداد کے لیے تجویز کردہ مخصوص اور موثر ادویات کا خصوصی بنڈل۔',
    features: [
      'Broad-spectrum weed control',
      'Rust prevention foliar spray',
      'Approved batch quality',
    ],
    inquiryMessage: 'Salam Kissan Agro Traders, I am inquiring about Wheat Season Protection Kit (Package 01).',
  },
  {
    id: 'offer-2',
    packageNumber: 'PACKAGE 02',
    title: 'Bulk Acre Drone Spray Booking',
    descriptionUrdu: 'زیادہ رقبے (25+ ایکڑ) والے زمینداروں کے لیے ترجیحی شیڈولنگ اور خصوصی فی ایکڑ رعایت۔',
    features: [
      'Guaranteed same-day slot allocation',
      'Complete battery and water support unit',
      'Experienced drone piloting team',
    ],
    inquiryMessage: 'Salam Kissan Agro Traders, I am inquiring about Bulk Acre Drone Spray Booking (Package 02).',
  },
  {
    id: 'offer-3',
    packageNumber: 'PACKAGE 03',
    title: 'Soil Health & Micro-Nutrient Pack',
    descriptionUrdu: 'زمین کی کمزوری دور کرنے اور پیداوار میں خاطر خواہ اضافے کے لیے معیاری نامیاتی اور مائیکرو نیوٹرینٹ حل۔',
    features: [
      'Enhanced root absorption blend',
      'Free dosage consultation with purchase',
      'High soil vitality stimulant',
    ],
    inquiryMessage: 'Salam Kissan Agro Traders, I am inquiring about Soil Health & Micro-Nutrient Pack (Package 03).',
  },
];
