import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FullWeatherData } from '../types';
import {
  LocationOption,
  getWeatherConditionInfo,
  getWindDirectionText,
  formatDaylightDuration,
  formatIsoTime,
  generateFarmingInsights,
} from '../utils/weatherService';

interface WeatherDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  weather: FullWeatherData | null;
  location: LocationOption;
  isLoading: boolean;
  onRefresh: () => void;
  onOpenLocationPicker: () => void;
}

export const WeatherDetailModal: React.FC<WeatherDetailModalProps> = ({
  isOpen,
  onClose,
  weather,
  location,
  isLoading,
  onRefresh,
  onOpenLocationPicker,
}) => {
  const { isUrdu } = useLanguage();

  if (!isOpen || !weather) return null;

  const condition = getWeatherConditionInfo(weather.weatherCode);
  const windDir = getWindDirectionText(weather.windDirection);
  const insights = generateFarmingInsights(weather);

  // Simple UV scale label
  const getUvLevel = (uv: number) => {
    if (uv <= 2) return { text: isUrdu ? 'کم (محفوظ)' : 'Low (Safe)', color: 'text-emerald-500' };
    if (uv <= 5) return { text: isUrdu ? 'درمیانہ' : 'Moderate', color: 'text-amber-500' };
    if (uv <= 7) return { text: isUrdu ? 'زیادہ (حفاظت کریں)' : 'High (Sun Protection)', color: 'text-orange-500' };
    return { text: isUrdu ? 'بہت زیادہ (احتیاط)' : 'Very High (Caution)', color: 'text-rose-500' };
  };

  const uvLevel = getUvLevel(weather.uvIndex);

  return (
    <div
      id="weather-detail-dashboard-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        dir={isUrdu ? 'rtl' : 'ltr'}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-800 dark:text-slate-100 transition-colors"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">cloud</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  {isUrdu ? 'تفصیلی موسمی ڈیش بورڈ' : 'Detailed Weather Dashboard'}
                </h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 font-bold">
                  {isUrdu ? 'لائیو ڈیٹا' : 'Live Data'}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
                <span className="material-symbols-outlined text-[14px] text-emerald-500">location_on</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {isUrdu ? location.urduName : location.name}
                </span>
                <span>•</span>
                <span>{isUrdu ? `آخری اپ ڈیٹ: ${weather.updatedAt}` : `Updated: ${weather.updatedAt}`}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenLocationPicker}
              className="px-3 py-1.5 text-xs font-bold bg-slate-200/80 dark:bg-slate-800 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 rounded-xl transition-all flex items-center gap-1 cursor-pointer"
              title={isUrdu ? 'شہر منتخب کریں' : 'Change Location'}
            >
              <span className="material-symbols-outlined text-[16px]">edit_location_alt</span>
              <span className="hidden sm:inline">{isUrdu ? 'شہر بدلیں' : 'Change City'}</span>
            </button>

            <button
              type="button"
              onClick={onRefresh}
              disabled={isLoading}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 bg-slate-200/80 dark:bg-slate-800 rounded-xl transition-all cursor-pointer disabled:opacity-50"
              title={isUrdu ? 'موسم تازہ کریں' : 'Refresh Weather'}
            >
              <span className={`material-symbols-outlined text-[18px] ${isLoading ? 'animate-spin' : ''}`}>
                refresh
              </span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-800 dark:hover:text-white bg-slate-200/80 dark:bg-slate-800 rounded-xl transition-all cursor-pointer"
              aria-label="Close"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Top Banner: Current Big Snapshot */}
          <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Column: Big Temp & Condition */}
              <div className="md:col-span-6 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-emerald-100 text-xs font-bold backdrop-blur-xs">
                  <span className="material-symbols-outlined text-[16px]">{condition.icon}</span>
                  <span>{isUrdu ? condition.urdu : condition.description}</span>
                  <span>•</span>
                  <span>{weather.isDay ? (isUrdu ? '☀️ دن' : '☀️ Day') : (isUrdu ? '🌙 رات' : '🌙 Night')}</span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight" dir="ltr">
                    {weather.temperature}°C
                  </span>
                  <div className="text-emerald-100 text-sm font-semibold">
                    <div>{isUrdu ? 'محسوس ہونے والا درجہ حرارت' : 'Feels like'}</div>
                    <div className="text-lg font-bold text-white" dir="ltr">
                      {weather.feelsLike}°C
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  {isUrdu
                    ? `آج کا درجہ حرارت ${weather.temperature}°C ہے اور ہوا کی رفتار ${weather.windSpeed} کلومیٹر فی گھنٹہ ہے۔`
                    : `Currently ${weather.temperature}°C with ${condition.description} and ${weather.windSpeed} km/h wind.`}
                </p>
              </div>

              {/* Right Column: Quick Stats Bento */}
              <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                  <div className="text-emerald-200 flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-[16px]">water_drop</span>
                    <span>{isUrdu ? 'نمی' : 'Humidity'}</span>
                  </div>
                  <div className="text-lg font-black text-white" dir="ltr">
                    {weather.humidity}%
                  </div>
                  <div className="text-[10px] text-emerald-200/80">
                    {isUrdu ? `شبنم پوائنٹ: ${weather.dewPoint}°C` : `Dew pt: ${weather.dewPoint}°C`}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                  <div className="text-emerald-200 flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-[16px]">air</span>
                    <span>{isUrdu ? 'ہوا' : 'Wind'}</span>
                  </div>
                  <div className="text-lg font-black text-white" dir="ltr">
                    {weather.windSpeed} km/h
                  </div>
                  <div className="text-[10px] text-emerald-200/80 truncate">
                    {isUrdu ? windDir.ur : windDir.en}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                  <div className="text-emerald-200 flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-[16px]">rainy</span>
                    <span>{isUrdu ? 'بارش' : 'Precipitation'}</span>
                  </div>
                  <div className="text-lg font-black text-white" dir="ltr">
                    {weather.precipitation} mm
                  </div>
                  <div className="text-[10px] text-emerald-200/80">
                    {isUrdu ? `بارش: ${weather.rain} mm` : `Rain: ${weather.rain} mm`}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                  <div className="text-emerald-200 flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-[16px]">cloud</span>
                    <span>{isUrdu ? 'بادل' : 'Cloud Cover'}</span>
                  </div>
                  <div className="text-lg font-black text-white" dir="ltr">
                    {weather.cloudCover}%
                  </div>
                  <div className="text-[10px] text-emerald-200/80">
                    {weather.cloudCover > 60 ? (isUrdu ? 'ابر آلود' : 'Cloudy') : (isUrdu ? 'مطلع صاف' : 'Clear')}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                  <div className="text-emerald-200 flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                    <span>{isUrdu ? 'حدِ نگاہ' : 'Visibility'}</span>
                  </div>
                  <div className="text-lg font-black text-white" dir="ltr">
                    {weather.visibility} km
                  </div>
                  <div className="text-[10px] text-emerald-200/80">
                    {weather.visibility >= 8 ? (isUrdu ? 'بہترین' : 'Good') : (isUrdu ? 'محدود' : 'Reduced')}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                  <div className="text-emerald-200 flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-[16px]">wb_sunny</span>
                    <span>{isUrdu ? 'یو وی' : 'UV Index'}</span>
                  </div>
                  <div className="text-lg font-black text-white" dir="ltr">
                    {weather.uvIndex}
                  </div>
                  <div className="text-[10px] text-emerald-200/80 truncate">
                    {uvLevel.text}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Hourly Forecast (Horizontally scrollable only inside this component) */}
          <div className="bg-slate-50 dark:bg-slate-950/70 p-4 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-[20px]">
                  schedule
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                  {isUrdu ? 'گھنٹہ وار پیش گوئی (آئندہ 24 گھنٹے)' : 'Hourly Forecast (Next 24 Hours)'}
                </h4>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">
                {isUrdu ? 'آگے دیکھنے کے لیے اسکرول کریں ➔' : 'Scroll right to view more ➔'}
              </span>
            </div>

            {/* Scrollable container with NO full-page scroll */}
            <div className="flex gap-2.5 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-emerald-500/30">
              {weather.hourly.map((hour, idx) => {
                const hourCond = getWeatherConditionInfo(hour.weatherCode);
                return (
                  <div
                    key={idx}
                    className="shrink-0 w-20 sm:w-24 bg-white dark:bg-slate-900 p-2.5 sm:p-3 rounded-2xl border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-between gap-1 shadow-xs hover:border-emerald-500/50 transition-colors"
                  >
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap">
                      {hour.time}
                    </span>
                    <span className="material-symbols-outlined text-[24px] text-emerald-600 dark:text-emerald-400 my-1">
                      {hourCond.icon}
                    </span>
                    <span className="text-sm sm:text-base font-black text-slate-900 dark:text-white" dir="ltr">
                      {hour.temperature}°C
                    </span>
                    <div className="flex items-center gap-0.5 text-[10px] text-blue-500 font-bold" title="Rain probability">
                      <span className="material-symbols-outlined text-[11px]">water_drop</span>
                      <span>{hour.precipitationProbability}%</span>
                    </div>
                    <span className="text-[9px] text-slate-400 font-medium whitespace-nowrap" dir="ltr">
                      {hour.windSpeed} km/h
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 6: Daily Forecast (7 Days) */}
          <div className="bg-slate-50 dark:bg-slate-950/70 p-4 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-[20px]">
                calendar_month
              </span>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                {isUrdu ? 'روزانہ کی پیش گوئی (7 دن)' : 'Daily Forecast (7 Days)'}
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2.5">
              {weather.daily.map((day, idx) => {
                const dayCond = getWeatherConditionInfo(day.weatherCode);
                return (
                  <div
                    key={idx}
                    className={`bg-white dark:bg-slate-900 p-3.5 rounded-2xl border ${
                      idx === 0
                        ? 'border-emerald-500/50 ring-1 ring-emerald-500/20 bg-emerald-50/30 dark:bg-emerald-950/20'
                        : 'border-slate-200 dark:border-slate-800'
                    } flex flex-col items-center justify-between text-center gap-1.5 shadow-xs`}
                  >
                    <span className="text-xs font-black text-slate-800 dark:text-slate-200">
                      {isUrdu ? day.dayNameUrdu : day.dayName}
                    </span>
                    <span className="material-symbols-outlined text-[28px] text-emerald-600 dark:text-emerald-400 my-1">
                      {dayCond.icon}
                    </span>
                    <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 truncate max-w-full">
                      {isUrdu ? day.conditionUrdu : day.condition}
                    </span>

                    {/* Max / Min */}
                    <div className="flex items-center justify-center gap-1.5 text-xs font-bold mt-1" dir="ltr">
                      <span className="text-rose-500">{day.maxTemp}°</span>
                      <span className="text-slate-400">/</span>
                      <span className="text-blue-500">{day.minTemp}°</span>
                    </div>

                    {/* Rain & Wind */}
                    <div className="flex items-center justify-between w-full pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-0.5 text-blue-500 font-bold" title="Rain probability">
                        <span className="material-symbols-outlined text-[12px]">water_drop</span>
                        <span>{day.precipitationProbability}%</span>
                      </span>
                      <span className="flex items-center gap-0.5" title="Max wind">
                        <span className="material-symbols-outlined text-[12px]">air</span>
                        <span dir="ltr">{day.windMax}</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Metric Cards Grid (Rain, Wind, Humidity, Sun/UV) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 7. Dedicated Rain Information Card */}
            <div className="bg-slate-50 dark:bg-slate-950/70 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-500 text-[22px]">rainy</span>
                    <h5 className="font-extrabold text-sm text-slate-900 dark:text-white">
                      {isUrdu ? '🌧️ بارش کی معلومات' : '🌧️ Rain Information'}
                    </h5>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-blue-500/15 text-blue-600 dark:text-blue-400 font-bold">
                    {weather.precipitation > 0 ? (isUrdu ? 'بارش جاری' : 'Raining') : (isUrdu ? 'خشک' : 'Dry')}
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">{isUrdu ? 'موجودہ بارش' : 'Current Precipitation'}</span>
                    <span className="font-extrabold text-slate-800 dark:text-slate-200" dir="ltr">{weather.precipitation} mm</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">{isUrdu ? 'بارش کی مقدار' : 'Rain Amount'}</span>
                    <span className="font-extrabold text-slate-800 dark:text-slate-200" dir="ltr">{weather.rain} mm</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500 dark:text-slate-400">{isUrdu ? 'آج بارش کا امکان' : 'Today Rain Probability'}</span>
                    <span className="font-extrabold text-blue-600 dark:text-blue-400" dir="ltr">
                      {weather.daily[0]?.precipitationProbability ?? 0}%
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                {weather.precipitation > 0
                  ? isUrdu ? 'کھیت میں وتر اور نمی موجود ہے۔' : 'Precipitation observed in local area.'
                  : isUrdu ? 'فوری بارش کا کوئی امکان ریکارڈ نہیں ہوا۔' : 'No significant rainfall recorded.'}
              </p>
            </div>

            {/* 8. Dedicated Wind Information Card with animated compass */}
            <div className="bg-slate-50 dark:bg-slate-950/70 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-teal-500 text-[22px]">air</span>
                    <h5 className="font-extrabold text-sm text-slate-900 dark:text-white">
                      {isUrdu ? '💨 ہوا کی رفتار و سمت' : '💨 Wind & Gusts'}
                    </h5>
                  </div>
                  {/* Subtle animated compass needle */}
                  <div
                    className="w-7 h-7 rounded-full bg-teal-500/15 flex items-center justify-center text-teal-600 dark:text-teal-400 transition-transform duration-700"
                    style={{ transform: `rotate(${weather.windDirection}deg)` }}
                    title={`Wind direction: ${weather.windDirection}°`}
                  >
                    <span className="material-symbols-outlined text-[18px]">navigation</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">{isUrdu ? 'ہوا کی رفتار' : 'Wind Speed'}</span>
                    <span className="font-extrabold text-slate-800 dark:text-slate-200" dir="ltr">{weather.windSpeed} km/h</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">{isUrdu ? 'ہوا کے جھونکے' : 'Max Wind Gust'}</span>
                    <span className="font-extrabold text-slate-800 dark:text-slate-200" dir="ltr">{weather.windGusts} km/h</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500 dark:text-slate-400">{isUrdu ? 'ہوا کی سمت' : 'Direction'}</span>
                    <span className="font-extrabold text-teal-600 dark:text-teal-400">
                      {isUrdu ? windDir.ur : windDir.en}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                {weather.windSpeed > 20
                  ? isUrdu ? 'تیز ہوا: ڈرون اسپرے کے لیے ہوا کم ہونے کا انتظار کریں۔' : 'High wind: Drone spray drift risk elevated.'
                  : isUrdu ? 'ہوا معتدل ہے، اسپرے کے لیے موزوں ہو سکتی ہے۔' : 'Calm breeze: Favorable for agricultural spraying.'}
              </p>
            </div>

            {/* 9. Dedicated Humidity Card */}
            <div className="bg-slate-50 dark:bg-slate-950/70 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-cyan-500 text-[22px]">humidity_percentage</span>
                    <h5 className="font-extrabold text-sm text-slate-900 dark:text-white">
                      {isUrdu ? '💧 نمی و شبنم' : '💧 Humidity & Dew'}
                    </h5>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 font-bold" dir="ltr">
                    {weather.humidity}%
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">{isUrdu ? 'متعلقہ نمی' : 'Relative Humidity'}</span>
                    <span className="font-extrabold text-slate-800 dark:text-slate-200" dir="ltr">{weather.humidity}%</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">{isUrdu ? 'شبنم نقطہ (Dew Point)' : 'Dew Point'}</span>
                    <span className="font-extrabold text-slate-800 dark:text-slate-200" dir="ltr">{weather.dewPoint}°C</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500 dark:text-slate-400">{isUrdu ? 'ہوائی دباؤ' : 'Surface Pressure'}</span>
                    <span className="font-extrabold text-slate-800 dark:text-slate-200" dir="ltr">{weather.surfacePressure} hPa</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                {weather.humidity > 70
                  ? isUrdu ? 'زیادہ نمی: فنگس اور بیماریوں کی باقاعدہ جانچ کریں۔' : 'High moisture: Monitor leaves for fungal issues.'
                  : isUrdu ? 'نمی متوازن ہے، مٹی کی ساخت عام ہے۔' : 'Moisture balance normal for local season.'}
              </p>
            </div>

            {/* 10. Dedicated Sun & UV Card */}
            <div className="bg-slate-50 dark:bg-slate-950/70 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-amber-500 text-[22px]">wb_sunny</span>
                    <h5 className="font-extrabold text-sm text-slate-900 dark:text-white">
                      {isUrdu ? '☀️ سورج اور یو وی' : '☀️ Sun & UV Index'}
                    </h5>
                  </div>
                  <span className={`text-[11px] px-2 py-0.5 rounded-md font-bold ${uvLevel.color} bg-amber-500/15`}>
                    UV {weather.uvIndex}
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">{isUrdu ? 'طلوعِ آفتاب' : 'Sunrise'}</span>
                    <span className="font-extrabold text-slate-800 dark:text-slate-200" dir="ltr">{formatIsoTime(weather.sunrise)}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">{isUrdu ? 'غروبِ آفتاب' : 'Sunset'}</span>
                    <span className="font-extrabold text-slate-800 dark:text-slate-200" dir="ltr">{formatIsoTime(weather.sunset)}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500 dark:text-slate-400">{isUrdu ? 'دن کا دورانیہ' : 'Daylight Duration'}</span>
                    <span className="font-extrabold text-amber-600 dark:text-amber-400">
                      {formatDaylightDuration(weather.daylightDuration, isUrdu)}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                {isUrdu
                  ? `یو وی شدت: ${uvLevel.text}۔ کھلے کھیت میں دوپہر کے وقت مناسب احتیاط رکھیں۔`
                  : `UV level: ${uvLevel.text}. Appropriate protection advised during peak midday.`}
              </p>
            </div>
          </div>

          {/* Section 11 & 12: Farming Weather Insights & Farmer-Friendly Weather Info */}
          <div className="bg-emerald-900/10 dark:bg-emerald-950/30 p-5 sm:p-7 rounded-3xl border border-emerald-500/30 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">psychology</span>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                  {isUrdu ? '🌱 کسان موسمی مشاورتی رہنمائی (Farming Weather Insights)' : '🌱 Farming Weather Insights'}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {isUrdu
                    ? 'لائیو موسمی عوامل پر مبنی عمومی زرعی مشاہدات اور مشاورتی تجاویز'
                    : 'General observational guidance based on current and forecast meteorological conditions'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
              {insights.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border ${
                    item.status === 'alert'
                      ? 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-500/30 text-rose-950 dark:text-rose-200'
                      : item.status === 'caution'
                      ? 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-500/30 text-amber-950 dark:text-amber-200'
                      : 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-500/30 text-emerald-950 dark:text-emerald-200'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="material-symbols-outlined text-[18px]">
                      {item.icon}
                    </span>
                    <span className="text-xs font-black">
                      {isUrdu ? item.titleUrdu : item.titleEn}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed opacity-90">
                    {isUrdu ? item.descriptionUrdu : item.descriptionEn}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 italic pt-2">
              {isUrdu
                ? 'نوٹ: یہ رہنمائی محض عمومی موسمی مشاہدات پر مبنی ہے۔ فصل کے مخصوص سپرے یا کیمیائی علاج کے لیے کسان ایگرو ٹریڈرز کے عملے یا ماہر زراعت سے انفرادی مشاورت ضرور فرمائیں۔'
                : 'Note: These observations are for general farmer awareness. For specific chemical recommendations and dosages, consult Kissan Agro Traders agronomists.'}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50/80 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {isUrdu ? 'اوپن میٹیو لائیو موسمی سروس برائے کسان ایگرو ٹریڈرز' : 'Open-Meteo live weather service for Kissan Agro Traders'}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
          >
            {isUrdu ? 'بند کریں' : 'Close Dashboard'}
          </button>
        </div>
      </div>
    </div>
  );
};
