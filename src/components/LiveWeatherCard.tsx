import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  weatherCode: number;
  sunrise: string;
  sunset: string;
  updatedAt: string;
}

interface LocationOption {
  name: string;
  urduName: string;
  lat: number;
  lon: number;
}

const PRESET_LOCATIONS: LocationOption[] = [
  { name: 'Kot Addu', urduName: 'کوٹ ادو (دکان کی جگہ)', lat: 30.47, lon: 70.96 },
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

function getWeatherInfo(code: number): { description: string; urdu: string; icon: string; isRain: boolean } {
  switch (code) {
    case 0:
      return { description: 'Clear Sky', urdu: 'صاف آسمان', icon: 'wb_sunny', isRain: false };
    case 1:
      return { description: 'Mainly Clear', urdu: 'زیادہ تر صاف', icon: 'partly_cloudy_day', isRain: false };
    case 2:
      return { description: 'Partly Cloudy', urdu: 'جزوی ابر آلود', icon: 'partly_cloudy_day', isRain: false };
    case 3:
      return { description: 'Overcast', urdu: 'گہرے بادل', icon: 'cloud', isRain: false };
    case 45:
    case 48:
      return { description: 'Fog / Mist', urdu: 'دھند', icon: 'foggy', isRain: false };
    case 51:
    case 53:
    case 55:
      return { description: 'Drizzle', urdu: 'ہلکی بوندا باندی', icon: 'rainy', isRain: true };
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
      return { description: 'Rain Showers', urdu: 'تیز بارش کی پھوار', icon: 'thunderstorm', isRain: true };
    case 95:
    case 96:
    case 99:
      return { description: 'Thunderstorm', urdu: 'گرج چمک کے ساتھ بارش', icon: 'thunderstorm', isRain: true };
    default:
      return { description: 'Fair Weather', urdu: 'معتدل موسم', icon: 'wb_cloudy', isRain: false };
  }
}

function formatTime(isoString?: string): string {
  if (!isoString) return '--:--';
  try {
    const d = new Date(isoString);
    return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  } catch {
    return '--:--';
  }
}

interface LiveWeatherCardProps {
  className?: string;
  isCompact?: boolean;
}

export const LiveWeatherCard: React.FC<LiveWeatherCardProps> = ({ className = '', isCompact = false }) => {
  const { isUrdu } = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState<LocationOption>(PRESET_LOCATIONS[0]);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLocationSelectorOpen, setIsLocationSelectorOpen] = useState(false);
  const [locationSearchQuery, setLocationSearchQuery] = useState('');
  const [showLocationPermissionModal, setShowLocationPermissionModal] = useState(false);
  const [locationStatusNotice, setLocationStatusNotice] = useState<string | null>(null);

  const filteredLocations = useMemo(() => {
    const q = locationSearchQuery.trim().toLowerCase();
    if (!q) return PRESET_LOCATIONS;
    return PRESET_LOCATIONS.filter(
      (loc) => loc.name.toLowerCase().includes(q) || loc.urduName.toLowerCase().includes(q)
    );
  }, [locationSearchQuery]);

  const fetchWeather = useCallback(async (lat: number, lon: number) => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      // Direct call to Open-Meteo live API (Asia/Karachi timezone)
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&daily=sunrise,sunset&timezone=Asia%2FKarachi`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Weather service returned HTTP ${response.status}`);
      }
      const json = await response.json();

      if (!json.current) {
        throw new Error('Incomplete weather payload received');
      }

      const now = new Date();
      const updatedFormatted = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

      setWeatherData({
        temperature: Math.round(json.current.temperature_2m * 10) / 10,
        humidity: Math.round(json.current.relative_humidity_2m),
        windSpeed: Math.round(json.current.wind_speed_10m * 10) / 10,
        precipitation: json.current.precipitation ?? 0,
        weatherCode: json.current.weather_code ?? 0,
        sunrise: json.daily?.sunrise?.[0] || '',
        sunset: json.daily?.sunset?.[0] || '',
        updatedAt: updatedFormatted,
      });
    } catch (err: any) {
      console.error('Weather fetch failed:', err);
      setErrorMessage(
        isUrdu
          ? 'موسم کا لائیو ڈیٹا دستیاب نہیں ہو سکا۔ برائے مہربانی انٹرنیٹ کنکشن چیک کر کے دوبارہ کوشش کریں۔'
          : 'Live weather data temporarily unavailable. Please check internet connection and retry.'
      );
    } finally {
      setIsLoading(false);
    }
  }, [isUrdu]);

  useEffect(() => {
    fetchWeather(selectedLocation.lat, selectedLocation.lon);
  }, [selectedLocation, fetchWeather]);

  const handleDeviceLocationPermission = () => {
    setShowLocationPermissionModal(false);
    if (!navigator.geolocation) {
      setLocationStatusNotice(isUrdu ? 'آپ کا براؤزر لوکیشن کو سپورٹ نہیں کرتا۔' : 'Browser does not support geolocation.');
      return;
    }

    setLocationStatusNotice(isUrdu ? 'ڈیوائس لوکیشن حاصل کی جا رہی ہے...' : 'Acquiring GPS device location...');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const customLoc: LocationOption = {
          name: 'My Farm Location',
          urduName: 'آپ کا فارم (ڈیوائس GPS)',
          lat: Math.round(pos.coords.latitude * 100) / 100,
          lon: Math.round(pos.coords.longitude * 100) / 100,
        };
        setSelectedLocation(customLoc);
        setIsLocationSelectorOpen(false);
        setLocationStatusNotice(
          isUrdu
            ? 'آپ کے فارم کا لائیو موسم کامیابی سے لوڈ ہو گیا ہے۔'
            : 'Live weather for your device location loaded.'
        );
        setTimeout(() => setLocationStatusNotice(null), 3500);
      },
      (error) => {
        let msg = isUrdu
          ? 'لوکیشن کی اجازت نہیں ملی، کوٹ ادو کا ڈیفالٹ موسم فعال ہے۔'
          : 'GPS permission denied, using default Kot Addu location.';
        if (error.code === error.PERMISSION_DENIED) {
          msg = isUrdu
            ? 'لوکیشن کی اجازت مسترد کر دی گئی۔ کوٹ ادو کا موسم دکھایا جا رہا ہے۔'
            : 'Location access declined. Showing Kot Addu weather.';
        }
        setLocationStatusNotice(msg);
        setTimeout(() => setLocationStatusNotice(null), 4000);
      },
      { timeout: 10000, enableHighAccuracy: false }
    );
  };

  const weatherMeta = weatherData ? getWeatherInfo(weatherData.weatherCode) : null;
  const isSpraySafe = weatherData ? weatherData.windSpeed < 15 && weatherData.precipitation === 0 : true;

  return (
    <div
      id="live-weather-card"
      dir={isUrdu ? 'rtl' : 'ltr'}
      className={`bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden ${className}`}
    >
      {/* Top Header with Location & Refresh */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[20px]">cloudy_snowing</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-700 dark:text-emerald-400">
                {isUrdu ? 'زرعی لائیو موسم' : 'Live Farm Weather'}
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open-Meteo</span>
              </span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white flex items-center gap-1">
              <span>{isUrdu ? selectedLocation.urduName : selectedLocation.name}</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1">
          {/* Location Select Button */}
          <button
            type="button"
            onClick={() => setIsLocationSelectorOpen(!isLocationSelectorOpen)}
            className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            title={isUrdu ? 'شہر یا لوکیشن تبدیل کریں' : 'Change Location'}
            aria-label={isUrdu ? 'شہر یا لوکیشن تبدیل کریں' : 'Change Location'}
          >
            <span className="material-symbols-outlined text-[20px]">location_on</span>
          </button>

          {/* Refresh Button */}
          <button
            type="button"
            onClick={() => fetchWeather(selectedLocation.lat, selectedLocation.lon)}
            disabled={isLoading}
            className={`p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all cursor-pointer ${
              isLoading ? 'animate-spin text-emerald-600' : ''
            }`}
            title={isUrdu ? 'موسم کا ڈیٹا ریفریش کریں' : 'Refresh Weather Data'}
            aria-label={isUrdu ? 'موسم کا ڈیٹا ریفریش کریں' : 'Refresh Weather Data'}
          >
            <span className="material-symbols-outlined text-[20px]">refresh</span>
          </button>
        </div>
      </div>

      {/* Optional Location Notice */}
      {locationStatusNotice && (
        <div className="mb-3 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center justify-between">
          <span>{locationStatusNotice}</span>
          <button
            type="button"
            onClick={() => setLocationStatusNotice(null)}
            className="text-slate-400 hover:text-slate-600 text-[10px] cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Location Dropdown Popover with Search & GPS */}
      {isLocationSelectorOpen && (
        <div className="mb-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/95 border border-slate-200 dark:border-slate-700 shadow-lg animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
              {isUrdu ? 'شہر / علاقہ منتخب کریں:' : 'Select Farming Area:'}
            </span>
            <button
              type="button"
              onClick={() => setShowLocationPermissionModal(true)}
              className="text-[11px] text-emerald-700 dark:text-emerald-400 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">my_location</span>
              <span>{isUrdu ? 'میری GPS لوکیشن' : 'Use Device GPS'}</span>
            </button>
          </div>

          {/* Location Search Field */}
          <div className="relative mb-2">
            <input
              type="text"
              value={locationSearchQuery}
              onChange={(e) => setLocationSearchQuery(e.target.value)}
              placeholder={isUrdu ? 'علاقہ یا شہر تلاش کریں...' : 'Search city or region...'}
              className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
            />
            {locationSearchQuery && (
              <button
                type="button"
                onClick={() => setLocationSearchQuery('')}
                className="absolute right-2 top-1.5 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-44 overflow-y-auto pr-1">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((loc) => (
                <button
                  key={loc.name}
                  type="button"
                  onClick={() => {
                    setSelectedLocation(loc);
                    setIsLocationSelectorOpen(false);
                    setLocationSearchQuery('');
                  }}
                  className={`text-left px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                    selectedLocation.name === loc.name
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600'
                  }`}
                >
                  <span className="truncate">{isUrdu ? loc.urduName.split(' ')[0] : loc.name}</span>
                  <span className="text-[10px] opacity-75">{isUrdu ? loc.name : loc.urduName.split(' ')[0]}</span>
                </button>
              ))
            ) : (
              <div className="col-span-full py-2 text-center text-xs text-slate-400">
                {isUrdu ? 'کوئی علاقہ نہیں ملا' : 'No locations matched'}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Loading Skeleton */}
      {isLoading && !weatherData && (
        <div className="space-y-3 py-3 animate-pulse">
          <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-xl w-3/4" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-xl" />
            <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-xl" />
          </div>
        </div>
      )}

      {/* Error State */}
      {errorMessage && !isLoading && (
        <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-center">
          <span className="material-symbols-outlined text-rose-500 text-[26px]">cloud_off</span>
          <p className="text-xs text-rose-700 dark:text-rose-300 font-semibold mt-1">
            {errorMessage}
          </p>
          <button
            type="button"
            onClick={() => fetchWeather(selectedLocation.lat, selectedLocation.lon)}
            className="mt-2.5 inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <span className="material-symbols-outlined text-[14px]">refresh</span>
            <span>{isUrdu ? 'دوبارہ کوشش کریں' : 'Retry Weather'}</span>
          </button>
        </div>
      )}

      {/* Real Live Weather Data Display */}
      {weatherData && weatherMeta && !errorMessage && (
        <div>
          {/* Main Temperature & Condition Row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-baseline gap-1.5" dir="ltr">
              <span className="text-3xl sm:text-4xl font-black text-slate-800 dark:text-white tracking-tight">
                {weatherData.temperature}°
              </span>
              <span className="text-sm font-bold text-slate-500 dark:text-slate-400">C</span>
            </div>

            <div className={`flex items-center gap-2 ${isUrdu ? 'text-left' : 'text-right'}`}>
              <div>
                <div className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-white">
                  {isUrdu ? weatherMeta.urdu : weatherMeta.description}
                </div>
                <div className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                  {weatherData.precipitation > 0
                    ? (isUrdu ? 'بارش کا امکان' : 'Rain Likely')
                    : (isUrdu ? 'کھیت کے لیے معتدل موسم' : 'Optimal Field Conditions')}
                </div>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-[26px]">{weatherMeta.icon}</span>
              </div>
            </div>
          </div>

          {/* 4 Agricultural Metric Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
            {/* Humidity */}
            <div className="p-2 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase">
                <span className="material-symbols-outlined text-[14px] text-sky-500">humidity_mid</span>
                <span>{isUrdu ? 'نمی / رطوبت' : 'Humidity'}</span>
              </div>
              <div className="text-xs sm:text-sm font-black text-slate-800 dark:text-white mt-0.5" dir="ltr">
                {weatherData.humidity}%
              </div>
            </div>

            {/* Wind Speed */}
            <div className="p-2 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase">
                <span className="material-symbols-outlined text-[14px] text-teal-500">air</span>
                <span>{isUrdu ? 'ہوا کی رفتار' : 'Wind'}</span>
              </div>
              <div className="text-xs sm:text-sm font-black text-slate-800 dark:text-white mt-0.5" dir="ltr">
                {weatherData.windSpeed} <span className="text-[10px] font-medium text-slate-400">km/h</span>
              </div>
            </div>

            {/* Rain / Precipitation */}
            <div className="p-2 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase">
                <span className="material-symbols-outlined text-[14px] text-blue-500">water_drop</span>
                <span>{isUrdu ? 'بارش / رین' : 'Rain'}</span>
              </div>
              <div className="text-xs sm:text-sm font-black text-slate-800 dark:text-white mt-0.5" dir="ltr">
                {weatherData.precipitation} <span className="text-[10px] font-medium text-slate-400">mm</span>
              </div>
            </div>

            {/* Sunrise & Sunset */}
            <div className="p-2 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase">
                <span className="material-symbols-outlined text-[14px] text-amber-500">wb_twilight</span>
                <span>{isUrdu ? 'طلوع / غروب' : 'Sun Times'}</span>
              </div>
              <div className="text-[10px] font-bold text-slate-800 dark:text-white mt-0.5 flex flex-col gap-0.5" dir="ltr">
                <span title="Sunrise">🌅 {formatTime(weatherData.sunrise)}</span>
                <span title="Sunset">🌇 {formatTime(weatherData.sunset)}</span>
              </div>
            </div>
          </div>

          {/* Spray Feasibility Advisory Note */}
          <div
            className={`p-2.5 rounded-2xl flex items-center justify-between text-xs font-bold border transition-colors ${
              isSpraySafe
                ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300'
                : 'bg-amber-50/80 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/60 text-amber-800 dark:text-amber-300'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">
                {isSpraySafe ? 'check_circle' : 'warning'}
              </span>
              <span className="text-[11px]">
                {isUrdu
                  ? isSpraySafe
                    ? 'اسپرے اور ڈرون کے لیے سازگار'
                    : 'تیز ہوا / اسپرے میں احتیاط'
                  : isSpraySafe
                  ? 'Safe for Spraying & Drone'
                  : 'High Wind / Caution Advised'}
              </span>
            </div>
            <span className="text-[11px] font-bold">
              {isUrdu
                ? isSpraySafe
                  ? 'بہترین وقت'
                  : 'احتیاط کریں'
                : isSpraySafe
                ? 'Optimal Window'
                : 'Check Wind'}
            </span>
          </div>

          {/* View Full Weather Section Button */}
          <a
            href="#weather-section"
            className="mt-3 w-full py-2 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>{isUrdu ? 'مکمل زرعی موسمی ڈیش بورڈ دیکھیں' : 'View Full Weather & Farming Section'}</span>
            <span className="material-symbols-outlined text-[16px]">
              {isUrdu ? 'arrow_downward' : 'arrow_downward'}
            </span>
          </a>

          {/* Footer Metadata */}
          <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">

            <span>
              {isUrdu ? 'آج: ' : 'Today: '}
              {new Date().toLocaleDateString(isUrdu ? 'ur-PK' : 'en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
              })}
            </span>
            <span dir="ltr">
              {isUrdu ? 'اپڈیٹ: ' : 'Updated: '}
              {weatherData.updatedAt}
            </span>
          </div>
        </div>
      )}

      {/* Explicit Location Permission Dialog (No Silent Collection) */}
      {showLocationPermissionModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            dir={isUrdu ? 'rtl' : 'ltr'}
            className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 max-w-sm w-full border border-slate-200 dark:border-slate-700 shadow-2xl animate-in zoom-in-95 duration-200"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[28px]">share_location</span>
            </div>
            <h3 className="text-base font-extrabold text-slate-800 dark:text-white">
              {isUrdu ? 'ڈیوائس لوکیشن کی اجازت؟' : 'Allow Location Access?'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              {isUrdu
                ? 'کیا آپ اپنی قریبی زمین یا فارم کے درست لائیو موسم کے لیے براؤزر کو لوکیشن حاصل کرنے کی اجازت دینا چاہتے ہیں؟'
                : 'Allow browser access to your device location to get live weather data for your immediate farm and village?'}
            </p>
            <div className="mt-5 flex items-center gap-2 justify-end">
              <button
                type="button"
                onClick={() => setShowLocationPermissionModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold cursor-pointer"
              >
                {isUrdu ? 'منسوخ کریں' : 'Cancel'}
              </button>
              <button
                type="button"
                onClick={handleDeviceLocationPermission}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs cursor-pointer"
              >
                {isUrdu ? 'اجازت دیں' : 'Allow Access'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
