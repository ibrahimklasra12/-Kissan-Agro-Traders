export interface Product {
  id: string;
  name: string;
  nameUrdu?: string;
  category: 'pesticides' | 'fertilizers' | 'seeds' | 'drone';
  categoryLabel: string;
  categoryUrdu: string;
  tagline: string;
  taglineEnglish?: string;
  descriptionUrdu: string;
  descriptionEnglish?: string;
  imageUrl: string;
  imageAlt: string;
  badge: string;
  badgeEnglish?: string;
  inquiryMessage: string;
}

export interface SeasonalOffer {
  id: string;
  packageNumber: string;
  title: string;
  titleEnglish?: string;
  descriptionUrdu: string;
  descriptionEnglish?: string;
  features: string[];
  featuresEnglish?: string[];
  inquiryMessage: string;
}

export interface InquiryItem {
  product: Product;
  quantity: number;
}

export interface InquiryCustomerDetails {
  name: string;
  phone: string;
  villageArea: string;
}

export interface HourlyForecastItem {
  time: string;
  weatherCode: number;
  temperature: number;
  precipitationProbability: number;
  windSpeed: number;
}

export interface DailyForecastItem {
  date: string;
  dayName: string;
  dayNameUrdu: string;
  weatherCode: number;
  maxTemp: number;
  minTemp: number;
  precipitationProbability: number;
  rainSum: number;
  windMax: number;
  condition: string;
  conditionUrdu: string;
}

export interface FullWeatherData {
  temperature: number;
  feelsLike: number;
  weatherCode: number;
  humidity: number;
  dewPoint: number;
  windSpeed: number;
  windDirection: number;
  windGusts: number;
  precipitation: number;
  rain: number;
  cloudCover: number;
  visibility: number;
  surfacePressure: number;
  uvIndex: number;
  isDay: boolean;
  sunrise: string;
  sunset: string;
  daylightDuration: number;
  updatedAt: string;
  hourly: HourlyForecastItem[];
  daily: DailyForecastItem[];
  isFallback?: boolean;
}

export interface PestDiseaseInquiry {
  name: string;
  mobile: string;
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
  cropPhoto?: string;
}

