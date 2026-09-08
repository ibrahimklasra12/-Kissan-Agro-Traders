import { FullWeatherData, HourlyForecastItem, DailyForecastItem } from '../types';

export interface LocationOption {
  name: string;
  urduName: string;
  lat: number;
  lon: number;
}

export const PRESET_LOCATIONS: LocationOption[] = [
  { name: 'Kot Addu (Main Store)', urduName: 'کوٹ ادو (مرکزی دکان)', lat: 30.47, lon: 70.96 },
  { name: 'Chowk Sarwar Shaheed', urduName: 'چوک سرور شہید', lat: 30.56, lon: 71.32 },
  { name: 'Sanawan', urduName: 'سنوان', lat: 30.31, lon: 71.01 },
  { name: 'Muzaffargarh', urduName: 'مظفر گڑھ', lat: 30.07, lon: 71.19 },
  { name: 'D.G. Khan', urduName: 'ڈیرہ غازی خان', lat: 30.05, lon: 70.63 },
  { name: 'Taunsa Sharif', urduName: 'تونسہ شریف', lat: 30.70, lon: 70.65 },
  { name: 'Layyah', urduName: 'لیہ', lat: 30.96, lon: 70.94 },
  { name: 'Bhakkar', urduName: 'بھکر', lat: 31.62, lon: 71.06 },
  { name: 'Multan', urduName: 'ملتان', lat: 30.19, lon: 71.47 },
  { name: 'Khanewal', urduName: 'خانیوال', lat: 30.30, lon: 71.93 },
  { name: 'Bahawalpur', urduName: 'بہاولپور', lat: 29.39, lon: 71.68 },
  { name: 'Rajanpur', urduName: 'راجن پور', lat: 29.10, lon: 70.32 },
  { name: 'Alipur', urduName: 'علی پور', lat: 29.38, lon: 70.91 },
  { name: 'Jhang', urduName: 'جھنگ', lat: 31.27, lon: 72.32 },
  { name: 'Mianwali', urduName: 'میانوالی', lat: 32.58, lon: 71.54 },
  { name: 'Rahim Yar Khan', urduName: 'رحیم یار خان', lat: 28.42, lon: 70.30 },
];

export function getWeatherConditionInfo(code: number): {
  description: string;
  urdu: string;
  icon: string;
  isRain: boolean;
} {
  switch (code) {
    case 0:
      return { description: 'Clear Sky', urdu: 'صاف آسمان', icon: 'wb_sunny', isRain: false };
    case 1:
      return { description: 'Mainly Clear', urdu: 'زیادہ تر صاف', icon: 'partly_cloudy_day', isRain: false };
    case 2:
      return { description: 'Partly Cloudy', urdu: 'جزوی طور پر ابر آلود', icon: 'partly_cloudy_day', isRain: false };
    case 3:
      return { description: 'Overcast', urdu: 'گہرے بادل', icon: 'cloud', isRain: false };
    case 45:
    case 48:
      return { description: 'Fog / Mist', urdu: 'دھند / کہرا', icon: 'foggy', isRain: false };
    case 51:
    case 53:
    case 55:
      return { description: 'Drizzle', urdu: 'ہلکی بوندا باندی', icon: 'grain', isRain: true };
    case 61:
    case 63:
    case 65:
      return { description: 'Rain', urdu: 'بارش', icon: 'rainy', isRain: true };
    case 71:
    case 73:
    case 75:
      return { description: 'Snow', urdu: 'برف باری', icon: 'ac_unit', isRain: false };
    case 80:
    case 81:
    case 82:
      return { description: 'Rain Showers', urdu: 'تیز بارش کی پھوار', icon: 'shower', isRain: true };
    case 95:
    case 96:
    case 99:
      return { description: 'Thunderstorm', urdu: 'گرج چمک کے ساتھ طوفان', icon: 'thunderstorm', isRain: true };
    default:
      return { description: 'Fair Weather', urdu: 'معتدل موسم', icon: 'wb_cloudy', isRain: false };
  }
}

export function getWindDirectionText(degrees: number): { en: string; ur: string } {
  const directions = [
    { en: 'N (North)', ur: 'شمال (North)' },
    { en: 'NE (Northeast)', ur: 'شمال مشرق' },
    { en: 'E (East)', ur: 'مشرق (East)' },
    { en: 'SE (Southeast)', ur: 'جنوب مشرق' },
    { en: 'S (South)', ur: 'جنوب (South)' },
    { en: 'SW (Southwest)', ur: 'جنوب مغرب' },
    { en: 'W (West)', ur: 'مغرب (West)' },
    { en: 'NW (Northwest)', ur: 'شمال مغرب' },
  ];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
}

export function calculateDewPoint(tempC: number, humidityRel: number): number {
  const a = 17.27;
  const b = 237.7;
  const alpha = (a * tempC) / (b + tempC) + Math.log(Math.max(humidityRel, 1) / 100);
  const dewPoint = (b * alpha) / (a - alpha);
  return Math.round(dewPoint * 10) / 10;
}

export function formatDaylightDuration(seconds: number, isUrdu: boolean): string {
  if (!seconds || seconds <= 0) return isUrdu ? '12 گھنٹے' : '12 hours';
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return isUrdu ? `${hours} گھنٹے ${minutes} منٹ` : `${hours}h ${minutes}m`;
}

export function formatIsoTime(isoString?: string): string {
  if (!isoString) return '--:--';
  try {
    const d = new Date(isoString);
    return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  } catch {
    return '--:--';
  }
}

export function formatForecastTime(isoString: string): string {
  try {
    const d = new Date(isoString);
    return d.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });
  } catch {
    return isoString;
  }
}

export function getDayNames(isoDateStr: string): { en: string; ur: string } {
  try {
    const d = new Date(isoDateStr);
    const dayIndex = d.getDay();
    const enDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const urDays = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
    return { en: enDays[dayIndex], ur: urDays[dayIndex] };
  } catch {
    return { en: 'Day', ur: 'دن' };
  }
}

export async function fetchLiveWeatherData(lat: number, lon: number): Promise<FullWeatherData> {
  const currentParams = [
    'temperature_2m',
    'relative_humidity_2m',
    'apparent_temperature',
    'precipitation',
    'rain',
    'weather_code',
    'cloud_cover',
    'surface_pressure',
    'wind_speed_10m',
    'wind_direction_10m',
    'wind_gusts_10m',
    'uv_index',
    'is_day',
  ].join(',');

  const hourlyParams = [
    'temperature_2m',
    'relative_humidity_2m',
    'precipitation_probability',
    'weather_code',
    'wind_speed_10m',
  ].join(',');

  const dailyParams = [
    'weather_code',
    'temperature_2m_max',
    'temperature_2m_min',
    'sunrise',
    'sunset',
    'daylight_duration',
    'precipitation_sum',
    'precipitation_probability_max',
    'wind_speed_10m_max',
  ].join(',');

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=${currentParams}&hourly=${hourlyParams}&daily=${dailyParams}&timezone=Asia%2FKarachi&forecast_days=7`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Weather service returned HTTP ${response.status}`);
  }

  const data = await response.json();
  const current = data.current || {};
  const hourly = data.hourly || {};
  const daily = data.daily || {};

  const temp = Math.round(current.temperature_2m ?? 30);
  const humidity = Math.round(current.relative_humidity_2m ?? 45);
  const dewPoint = calculateDewPoint(temp, humidity);

  // Parse Hourly (take next 24 hours starting from current hour)
  const hourlyItems: HourlyForecastItem[] = [];
  if (Array.isArray(hourly.time)) {
    const nowIso = new Date().toISOString().slice(0, 13); // match YYYY-MM-DDTHH
    let startIndex = hourly.time.findIndex((t: string) => t.startsWith(nowIso));
    if (startIndex === -1) startIndex = 0;

    const sliceLength = Math.min(24, hourly.time.length - startIndex);
    for (let i = 0; i < sliceLength; i++) {
      const idx = startIndex + i;
      hourlyItems.push({
        time: formatForecastTime(hourly.time[idx]),
        weatherCode: hourly.weather_code?.[idx] ?? 0,
        temperature: Math.round(hourly.temperature_2m?.[idx] ?? temp),
        precipitationProbability: Math.round(hourly.precipitation_probability?.[idx] ?? 0),
        windSpeed: Math.round(hourly.wind_speed_10m?.[idx] ?? 10),
      });
    }
  }

  // Parse Daily (7 days)
  const dailyItems: DailyForecastItem[] = [];
  if (Array.isArray(daily.time)) {
    for (let i = 0; i < daily.time.length; i++) {
      const code = daily.weather_code?.[i] ?? 0;
      const cond = getWeatherConditionInfo(code);
      const dayNames = getDayNames(daily.time[i]);
      dailyItems.push({
        date: daily.time[i],
        dayName: i === 0 ? 'Today' : dayNames.en,
        dayNameUrdu: i === 0 ? 'آج' : dayNames.ur,
        weatherCode: code,
        maxTemp: Math.round(daily.temperature_2m_max?.[i] ?? 35),
        minTemp: Math.round(daily.temperature_2m_min?.[i] ?? 22),
        precipitationProbability: Math.round(daily.precipitation_probability_max?.[i] ?? 0),
        rainSum: Math.round((daily.precipitation_sum?.[i] ?? 0) * 10) / 10,
        windMax: Math.round(daily.wind_speed_10m_max?.[i] ?? 15),
        condition: cond.description,
        conditionUrdu: cond.urdu,
      });
    }
  }

  return {
    temperature: temp,
    feelsLike: Math.round(current.apparent_temperature ?? temp),
    weatherCode: current.weather_code ?? 0,
    humidity,
    dewPoint,
    windSpeed: Math.round(current.wind_speed_10m ?? 12),
    windDirection: Math.round(current.wind_direction_10m ?? 0),
    windGusts: Math.round(current.wind_gusts_10m ?? current.wind_speed_10m ?? 15),
    precipitation: Math.round((current.precipitation ?? 0) * 10) / 10,
    rain: Math.round((current.rain ?? 0) * 10) / 10,
    cloudCover: Math.round(current.cloud_cover ?? 10),
    visibility: Math.round((current.visibility ?? 10000) / 1000), // convert m to km
    surfacePressure: Math.round(current.surface_pressure ?? 1012),
    uvIndex: Math.round((current.uv_index ?? 5) * 10) / 10,
    isDay: current.is_day === 1,
    sunrise: daily.sunrise?.[0] || '',
    sunset: daily.sunset?.[0] || '',
    daylightDuration: daily.daylight_duration?.[0] || 43200,
    updatedAt: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
    hourly: hourlyItems,
    daily: dailyItems,
  };
}

export interface FarmingInsight {
  type: 'spray' | 'wind' | 'rain' | 'heat' | 'humidity' | 'general';
  icon: string;
  badge: string;
  badgeUrdu: string;
  status: 'optimal' | 'caution' | 'alert';
  titleEn: string;
  titleUrdu: string;
  descriptionEn: string;
  descriptionUrdu: string;
}

export function generateFarmingInsights(weather: FullWeatherData): FarmingInsight[] {
  const insights: FarmingInsight[] = [];

  // 1. Drone & Foliar Spray observation (Non-absolute wording as requested)
  if (weather.windSpeed > 22 || weather.windGusts > 30) {
    insights.push({
      type: 'spray',
      icon: 'air',
      badge: 'Wind Caution',
      badgeUrdu: 'تیز ہوا کا جائزہ',
      status: 'alert',
      titleEn: 'Higher Wind Observed for Spraying',
      titleUrdu: 'اسپرے کے لیے ہوا کی رفتار زیادہ ہے',
      descriptionEn: 'Current wind speed is above 20 km/h. Weather conditions may cause chemical spray drift; scheduling spray during calmer morning or evening hours may be preferable.',
      descriptionUrdu: 'اس وقت ہوا کی رفتار 20 کلومیٹر سے زائد ہے۔ کیمیکل یا ڈرون اسپرے کے دوران دوا ضائع ہونے کا اندیشہ ہو سکتا ہے، لہٰذا ہوا تھمنے کا انتظار مناسب ہو سکتا ہے۔',
    });
  } else if (weather.precipitation > 0.5 || weather.rain > 0.5) {
    insights.push({
      type: 'spray',
      icon: 'water_drop',
      badge: 'Rain Observed',
      badgeUrdu: 'بارش کی صورتحال',
      status: 'alert',
      titleEn: 'Rain / Precipitation Active',
      titleUrdu: 'بارش کی سرگرمی موجود ہے',
      descriptionEn: 'Rain is detected in the area. Weather conditions may not be ideal for foliar applications until crop leaves dry out.',
      descriptionUrdu: 'علاقے میں بارش یا بونداباندی ہو رہی ہے۔ پتوں کے سوکھنے اور مٹی کے وتر آنے تک اسپرے موخر کرنا مناسب ہو سکتا ہے۔',
    });
  } else {
    insights.push({
      type: 'spray',
      icon: 'flight_takeoff',
      badge: 'Favorable Window',
      badgeUrdu: 'سازگار موسمی وقت',
      status: 'optimal',
      titleEn: 'Calm Spray Conditions',
      titleUrdu: 'ڈرون و عام اسپرے کے لیے پرسکون موسم',
      descriptionEn: 'Weather conditions may be suitable for agricultural drone spray and foliar applications with steady, mild winds.',
      descriptionUrdu: 'ہوا معتدل ہے اور مطلع صاف ہے۔ زرعی ڈرون اسپرے اور عام فیلڈ کام کے لیے موسمی حالات سازگار محسوس ہوتے ہیں۔',
    });
  }

  // 2. Rain & Soil Moisture
  const hasUpcomingRain = weather.daily.slice(0, 3).some((d) => d.precipitationProbability > 40 || d.rainSum > 1);
  if (hasUpcomingRain) {
    insights.push({
      type: 'rain',
      icon: 'cloud_sync',
      badge: 'Rain Alert',
      badgeUrdu: 'بارش کی پیش گوئی',
      status: 'caution',
      titleEn: 'Rain Chance in Upcoming Days',
      titleUrdu: 'اگلے چند روز میں بارش کا امکان',
      descriptionEn: 'Forecast data indicates possible rain or showers. Farmers may consider delaying heavy irrigation or urea top-dressing until weather stabilizes.',
      descriptionUrdu: 'پیش گوئی کے مطابق اگلے 48 سے 72 گھنٹوں میں بارش کا امکان ہے۔ نہری یا ٹیوب ویل پانی لگانے سے قبل موسمی صورتحال دیکھنا مفید ہوگا۔',
    });
  } else {
    insights.push({
      type: 'rain',
      icon: 'dry',
      badge: 'Dry Spell',
      badgeUrdu: 'خشک موسم',
      status: 'optimal',
      titleEn: 'Low Rain Probability Ahead',
      titleUrdu: 'بارش کے امکانات کم ہیں',
      descriptionEn: 'Dry atmospheric conditions ahead. Normal planned field irrigation and fertilizer broadcasting may proceed based on crop moisture requirements.',
      descriptionUrdu: 'اگلے دنوں میں بارش کا خاص امکان نہیں ہے۔ کسان بھائی حسبِ معمول ضرورت کے مطابق آبپاشی اور کھاد کے کام جاری رکھ سکتے ہیں۔',
    });
  }

  // 3. Heat & Crop Water Stress
  if (weather.temperature >= 38) {
    insights.push({
      type: 'heat',
      icon: 'local_fire_department',
      badge: 'Heat Alert',
      badgeUrdu: 'شدید گرمی کی علامت',
      status: 'alert',
      titleEn: 'High Daytime Temperature',
      titleUrdu: 'شدید گرمی اور تیز دھوپ',
      descriptionEn: 'High heat stress observed. Irrigating crops during cooler hours (early morning or late evening) may help preserve moisture and reduce leaf scorch.',
      descriptionUrdu: 'درجہ حرارت کافی بلند ہے۔ فصلوں کو پانی صبح سویرے یا شام کے وقت لگانا مناسب رہتا ہے تاکہ تپش سے نازک پتوں کو نقصان نہ پہنچے۔',
    });
  } else if (weather.temperature <= 12) {
    insights.push({
      type: 'heat',
      icon: 'ac_unit',
      badge: 'Cold Alert',
      badgeUrdu: 'سرد موسم',
      status: 'caution',
      titleEn: 'Cold Temperatures Detected',
      titleUrdu: 'سرد موسم کا مشاہدہ',
      descriptionEn: 'Chilly conditions may slow active vegetative growth in tender vegetables or young seedlings.',
      descriptionUrdu: 'سردی کی شدت سے نازک فصلوں اور سبزیوں کی نشوونما میں سستی آ سکتی ہے۔ پودوں کو نائٹروجن اور مناسب فاسفورس خوراک کی ضرورت رہتی ہے۔',
    });
  }

  // 4. Humidity & Disease Watch
  if (weather.humidity >= 70 && weather.temperature >= 26) {
    insights.push({
      type: 'humidity',
      icon: 'coronavirus',
      badge: 'High Humidity',
      badgeUrdu: 'زیادہ نمی کا انتباہ',
      status: 'caution',
      titleEn: 'High Moisture & Heat Environment',
      titleUrdu: 'زیادہ نمی اور گرم ماحول',
      descriptionEn: 'Combination of high humidity and heat is conducive to fungal spore proliferation and sucking pest build-up. Routine crop scouting is recommended.',
      descriptionUrdu: 'ہوا میں نمی کا تناسب زیادہ ہونے کی وجہ سے فنگس اور کیڑوں کے پھیلاؤ کے امکانات بڑھ جاتے ہیں۔ کسان بھائی اپنی فصل کا باقاعدہ معائنہ رکھیں۔',
    });
  }

  return insights;
}
