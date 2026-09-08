import { Product, InquiryItem, InquiryCustomerDetails } from '../types';
import { BUSINESS_INFO } from '../data/agroData';

export type SupportedLanguage = 'ur' | 'en';

export interface DroneBookingData {
  name: string;
  phone: string;
  village: string;
  acres: number | string;
  crop: string;
  date: string;
  notes?: string;
}

export interface PhotoInquiryData {
  name: string;
  phone: string;
  village: string;
  crop: string;
  issue: string;
  details?: string;
  hasPhoto: boolean;
  photoFileName?: string;
}

export interface FarmingQuestionData {
  name: string;
  phone: string;
  village?: string;
  question: string;
  crop?: string;
}

/**
 * Builds a direct WhatsApp chat URL with properly encoded message text.
 */
export function buildWhatsAppUrl(message: string, phoneRaw = BUSINESS_INFO.phoneRaw): string {
  const cleanPhone = phoneRaw.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates WhatsApp URL for a single product inquiry.
 */
export function getProductInquiryUrl(product: Product, lang: SupportedLanguage = 'ur'): string {
  if (lang === 'en') {
    const text = `🌾 *Product Inquiry — Kissan Agro Traders*
━━━━━━━━━━━━━━━━━━━━
📦 *Product:* ${product.name}
🏷️ *Category:* ${product.categoryLabel}
📝 *Tagline:* ${product.taglineEnglish || product.tagline}
ℹ️ *Description:* ${product.descriptionEnglish || product.descriptionUrdu}
━━━━━━━━━━━━━━━━━━━━
Please share price, stock availability, and usage recommendation.
Inquiry from Kissan Agro Traders Website`;
    return buildWhatsAppUrl(text);
  }

  const text = `🌾 *پروڈکٹ انکوائری — کسان ایگرو ٹریڈرز*
━━━━━━━━━━━━━━━━━━━━
📦 *پروڈکٹ:* ${product.name} (${product.tagline})
🏷️ *کیٹیگری:* ${product.categoryUrdu || product.categoryLabel}
ℹ️ *تفصیل:* ${product.descriptionUrdu}
━━━━━━━━━━━━━━━━━━━━
السلام علیکم! مجھے اس پروڈکٹ کی قیمت، دستیابی اور طریقہ استعمال کے بارے میں رہنمائی درکار ہے۔
کسان ایگرو ٹریڈرز ویب سائٹ سے رابطہ`;
  return buildWhatsAppUrl(text);
}

export const getProductWhatsAppUrl = getProductInquiryUrl;

/**
 * Generates WhatsApp URL for inquiry cart checkout.
 */
export function getCartInquiryUrl(
  items: InquiryItem[],
  customer: InquiryCustomerDetails,
  lang: SupportedLanguage = 'ur'
): string {
  if (lang === 'en') {
    const productLines = items
      .map((item, index) => {
        return `${index + 1}. *${item.product.name}* (Qty: ${item.quantity}) — ${item.product.categoryLabel}`;
      })
      .join('\n');

    const text = `🛒 *Product Inquiry Cart — Kissan Agro Traders*
━━━━━━━━━━━━━━━━━━━━
👤 *Customer Name:* ${customer.name || 'Valued Farmer'}
📱 *Mobile Number:* ${customer.phone || 'N/A'}
📍 *Village / Area:* ${customer.villageArea || 'Kot Addu'}
━━━━━━━━━━━━━━━━━━━━
📋 *Selected Products (${items.length} items):*
${productLines}
━━━━━━━━━━━━━━━━━━━━
Please confirm product prices, delivery options, and best recommendations.`;

    return buildWhatsAppUrl(text);
  }

  const productLines = items
    .map((item, index) => {
      const prodName = item.product.name;
      const urduLabel = item.product.categoryUrdu || item.product.categoryLabel;
      return `${index + 1}. *${prodName}* (تعداد: ${item.quantity}) — ${urduLabel}`;
    })
    .join('\n');

  const text = `🛒 *پروڈکٹ انکوائری کارٹ — کسان ایگرو ٹریڈرز*
━━━━━━━━━━━━━━━━━━━━
👤 *گاہک کا نام:* ${customer.name || 'محترم کسان'}
📱 *موبائل نمبر:* ${customer.phone || 'N/A'}
📍 *علاقہ / گاؤں:* ${customer.villageArea || 'کوٹ ادو'}
━━━━━━━━━━━━━━━━━━━━
📋 *منتخب کردہ پروڈکٹس (${items.length} آئٹمز):*
${productLines}
━━━━━━━━━━━━━━━━━━━━
السلام علیکم! براہ کرم ان اشیاء کی موجودہ قیمتیں، دستیابی اور ترسیل کی تفصیلات فراہم کریں۔`;

  return buildWhatsAppUrl(text);
}

export const getProductCartInquiryUrl = getCartInquiryUrl;

/**
 * Generates WhatsApp URL for Drone Spray booking.
 */
export function getDroneBookingUrl(data: DroneBookingData, lang: SupportedLanguage = 'ur'): string {
  if (lang === 'en') {
    const text = `🚁 *Agricultural Drone Spray Booking — Kissan Agro Traders*
━━━━━━━━━━━━━━━━━━━━
👤 *Farmer Name:* ${data.name.trim()}
📱 *Mobile:* ${data.phone.trim()}
📍 *Village / Area:* ${data.village.trim()}
🌾 *Crop:* ${data.crop.trim()}
📐 *Field Area:* ${data.acres} Acres
📅 *Preferred Spray Date:* ${data.date}
💬 *Special Instructions:* ${data.notes?.trim() || 'N/A'}
━━━━━━━━━━━━━━━━━━━━
Please confirm drone availability, schedule slot, and charges.`;
    return buildWhatsAppUrl(text);
  }

  const text = `🚁 *زرعی ڈرون اسپرے بکنگ — کسان ایگرو ٹریڈرز*
━━━━━━━━━━━━━━━━━━━━
👤 *کسان کا نام:* ${data.name.trim()}
📱 *موبائل نمبر:* ${data.phone.trim()}
📍 *گاؤں / علاقہ:* ${data.village.trim()}
🌾 *فصل کا نام:* ${data.crop.trim()}
📐 *رقبہ:* ${data.acres} ایکڑ
📅 *مطلوبہ تاریخ:* ${data.date}
💬 *اضافی نوٹ:* ${data.notes?.trim() || 'کوئی نہیں'}
━━━━━━━━━━━━━━━━━━━━
السلام علیکم! کسان ایگرو ٹریڈرز، مجھے اپنی فصل کے لیے ڈرون اسپرے کی بکنگ اور چارجز کی تصدیق درکار ہے۔`;
  return buildWhatsAppUrl(text);
}

/**
 * Generates WhatsApp URL for Crop Problem / Photo Advisory inquiry.
 */
export function getPhotoInquiryUrl(data: PhotoInquiryData, lang: SupportedLanguage = 'ur'): string {
  const photoNote = data.hasPhoto
    ? (lang === 'en'
        ? `📸 Photo Attached: "${data.photoFileName || 'Crop Problem Photo'}" (Attaching in WhatsApp chat)`
        : `📸 فصل کی تصویر: صارف نے تصویر منتخب کی ہے اور واٹس ایپ پر ارسال کر رہا ہے۔`)
    : (lang === 'en' ? '📸 Photo: Not attached' : '📸 تصویر: شامل نہیں کی گئی');

  if (lang === 'en') {
    const text = `🌱 *Crop Advisory / Problem Inquiry — Kissan Agro Traders*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${data.name.trim()}
📱 *Mobile:* ${data.phone.trim()}
📍 *Village / Area:* ${data.village.trim()}
🌾 *Crop:* ${data.crop.trim()}
⚠️ *Problem / Issue:* ${data.issue.trim()}
📝 *Additional Details:* ${data.details?.trim() || 'N/A'}
${photoNote}
━━━━━━━━━━━━━━━━━━━━
Please provide expert agricultural guidance and product recommendation.`;
    return buildWhatsAppUrl(text);
  }

  const text = `🌱 *فصل کی بیماری و زرعی رہنمائی — کسان ایگرو ٹریڈرز*
━━━━━━━━━━━━━━━━━━━━
👤 *کسان کا نام:* ${data.name.trim()}
📱 *موبائل نمبر:* ${data.phone.trim()}
📍 *گاؤں / علاقہ:* ${data.village.trim()}
🌾 *فصل:* ${data.crop.trim()}
⚠️ *مسئلہ یا بیماری:* ${data.issue.trim()}
📝 *اضافی تفصیلات:* ${data.details?.trim() || 'کوئی نہیں'}
${photoNote}
━━━━━━━━━━━━━━━━━━━━
السلام علیکم! براہ کرم اس مسئلے کے حل کے لیے موثر اسپرے اور مشورہ فراہم فرمائیں۔`;
  return buildWhatsAppUrl(text);
}

/**
 * Generates WhatsApp URL for a quick Farming Question.
 */
export function getQuestionInquiryUrl(data: FarmingQuestionData, lang: SupportedLanguage = 'ur'): string {
  if (lang === 'en') {
    const text = `❓ *Farmer Question — Kissan Agro Traders*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${data.name.trim()}
📱 *Mobile:* ${data.phone.trim()}
${data.village ? `📍 *Area:* ${data.village.trim()}\n` : ''}${data.crop ? `🌾 *Crop:* ${data.crop.trim()}\n` : ''}💬 *Question / Problem:* ${data.question.trim()}
━━━━━━━━━━━━━━━━━━━━
Inquiry sent from Kissan Agro Traders website`;
    return buildWhatsAppUrl(text);
  }

  const text = `❓ *کسان کا زرعی سوال — کسان ایگرو ٹریڈرز*
━━━━━━━━━━━━━━━━━━━━
👤 *کسان کا نام:* ${data.name.trim()}
📱 *موبائل نمبر:* ${data.phone.trim()}
${data.village ? `📍 *علاقہ:* ${data.village.trim()}\n` : ''}${data.crop ? `🌾 *فصل:* ${data.crop.trim()}\n` : ''}💬 *زرعی سوال / رہنمائی:* ${data.question.trim()}
━━━━━━━━━━━━━━━━━━━━
کسان ایگرو ٹریڈرز پورٹل کے ذریعے بھیجا گیا`;
  return buildWhatsAppUrl(text);
}

export interface PestDiseaseFormData {
  name: string;
  phone: string;
  village: string;
  crop: string;
  variety: string;
  acres: string;
  problemType: string;
  whenStarted: string;
  symptoms: string;
  affectedArea: string;
  previousSpray: string;
  additionalMessage: string;
  hasPhoto?: boolean;
}

/**
 * Generates WhatsApp URL for Pest & Disease Inquiry Form.
 */
export function getPestDiseaseInquiryUrl(data: PestDiseaseFormData, lang: SupportedLanguage = 'ur'): string {
  const photoNote = data.hasPhoto
    ? lang === 'en'
      ? '📸 *Crop Photo:* Attached / ready to send in this chat'
      : '📸 *فصل کی تصویر:* چیٹ میں منسلک کر کے بھیجی جا رہی ہے'
    : '';

  if (lang === 'en') {
    const text = `🐛 *Pest & Disease Advisory Request — Kissan Agro Traders*
━━━━━━━━━━━━━━━━━━━━
👤 *Farmer Name:* ${data.name.trim()}
📱 *Mobile:* ${data.phone.trim()}
📍 *Village / Area:* ${data.village.trim() || 'N/A'}
🌾 *Crop:* ${data.crop.trim()}
🌱 *Variety / Seed:* ${data.variety.trim() || 'N/A'}
📐 *Total Acres:* ${data.acres.trim() || 'N/A'}
⚠️ *Problem Type:* ${data.problemType}
⏱️ *When Started:* ${data.whenStarted.trim() || 'Recently'}
🔍 *Observed Symptoms:* ${data.symptoms.trim()}
🗺️ *Affected Area / Spread:* ${data.affectedArea.trim() || 'N/A'}
🧪 *Previous Spray / Treatment:* ${data.previousSpray.trim() || 'None'}
📝 *Additional Message:* ${data.additionalMessage.trim() || 'None'}
${photoNote ? `${photoNote}\n` : ''}━━━━━━━━━━━━━━━━━━━━
Please analyze these symptoms and recommend the most effective pesticide, fungicide, or treatment schedule.`;
    return buildWhatsAppUrl(text);
  }

  const text = `🐛 *کیڑوں اور فصل بیماری کی تفصیلی رپورٹ — کسان ایگرو ٹریڈرز*
━━━━━━━━━━━━━━━━━━━━
👤 *کسان کا نام:* ${data.name.trim()}
📱 *موبائل نمبر:* ${data.phone.trim()}
📍 *گاؤں / علاقہ:* ${data.village.trim() || 'درج نہیں'}
🌾 *فصل:* ${data.crop.trim()}
🌱 *ورائٹی / بیج:* ${data.variety.trim() || 'درج نہیں'}
📐 *کل رقبہ (ایکڑ):* ${data.acres.trim() || 'درج نہیں'}
⚠️ *مسئلے کی قسم:* ${data.problemType}
⏱️ *مسئلہ کب شروع ہوا:* ${data.whenStarted.trim() || 'حال ہی میں'}
🔍 *علامات:* ${data.symptoms.trim()}
🗺️ *متاثرہ رقبہ:* ${data.affectedArea.trim() || 'درج نہیں'}
🧪 *سابقہ اسپرے / کھاد:* ${data.previousSpray.trim() || 'کوئی نہیں'}
📝 *اضافی پیغام:* ${data.additionalMessage.trim() || 'کوئی نہیں'}
${photoNote ? `${photoNote}\n` : ''}━━━━━━━━━━━━━━━━━━━━
السلام علیکم! کسان ایگرو ٹریڈرز، براہ کرم ان علامات کی روشنی میں مستند حل اور موثر اسپرے تجویز فرمائیں۔`;
  return buildWhatsAppUrl(text);
}

/**
 * Generates general consultation WhatsApp URL.
 */
export function getGeneralWhatsAppUrl(lang: SupportedLanguage = 'ur'): string {

  if (lang === 'en') {
    const text = `Hello Kissan Agro Traders! I am reaching out from your website. I need information regarding genuine pesticides, fertilizers, seeds, and drone spray services in Kot Addu.`;
    return buildWhatsAppUrl(text);
  }
  const text = `السلام علیکم! کسان ایگرو ٹریڈرز، مجھے زرعی ادویات، کھادوں، بیجوں اور ڈرون اسپرے سروس سے متعلق رہنمائی درکار ہے۔`;
  return buildWhatsAppUrl(text);
}
