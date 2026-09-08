import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FullWeatherData } from '../types';
import {
  PRESET_LOCATIONS,
  LocationOption,
  fetchLiveWeatherData,
  getWeatherConditionInfo,
  getWindDirectionText,
  formatIsoTime,
  generateFarmingInsights,
} from '../utils/weatherService';
import { WeatherDetailModal } from './WeatherDetailModal';

interface WeatherSectionProps {
  id?: string;
  className?: string;
}

export const WeatherSection: React.FC<WeatherSectionProps> = ({
  id = 'weather-section',
  className = '',
}) => {
  const { isUrdu } = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState<LocationOption>(PRESET_LOCATIONS[0]);
  const [weatherData, setWeatherData] = useState<FullWeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Modals & Panels
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
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

  const loadWeather = useCallback(async (lat: number, lon: number) => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const data = await fetchLiveWeatherData(lat, lon);
      setWeatherData(data);
    } catch (err: unknown) {
      console.error('Weather load error:', err);
      setErrorMessage(
        isUrdu
          ? 'موسمی ڈیٹا حاصل کرنے میں عارضی دشواری۔ براہ کرم دوبارہ کوشش کریں۔'
          : 'Weather data temporarily unavailable. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  }, [isUrdu]);

  useEffect(() => {
    loadWeather(selectedLocation.lat, selectedLocation.lon);
  }, [selectedLocation, loadWeather]);

  const handleManualSelectLocation = (loc: LocationOption) => {
    setSelectedLocation(loc);
    setIsLocationSelectorOpen(false);
    setLocationSearchQuery('');
    setLocationStatusNotice(null);
  };

  const handleRequestDeviceLocation = () => {
    setShowLocationPermissionModal(false);
    if (!navigator.geolocation) {
      setLocationStatusNotice(
        isUrdu
          ? 'آپ کا براؤزر لوکیشن کو سپورٹ نہیں کرتا۔ دستی فہرست سے شہر منتخب کریں۔'
          : 'Geolocation is not supported by your browser. Please select from the city list.'
      );
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = Math.round(position.coords.latitude * 100) / 100;
        const userLon = Math.round(position.coords.longitude * 100) / 100;
        const customLoc: LocationOption = {
          name: 'My Device Location',
          urduName: 'میری موجودہ لوکیشن (GPS)',
          lat: userLat,
          lon: userLon,
        };
        setSelectedLocation(customLoc);
        setLocationStatusNotice(
          isUrdu ? 'آپ کی موجودہ GPS لوکیشن کامیابی سے فعال ہو گئی ہے۔' : 'Live GPS location enabled.'
        );
      },
      (error) => {
        console.warn('Geolocation denied/failed:', error);
        setIsLoading(false);
        setLocationStatusNotice(
          isUrdu
            ? 'لوکیشن کی اجازت نہیں ملی۔ آپ نیچے دی گئی فہرست سے قریبی شہر منتخب کر سکتے ہیں۔'
            : 'Location permission denied. You can select your nearest town manually below.'
        );
      },
      { timeout: 10000 }
    );
  };

  const condition = weatherData ? getWeatherConditionInfo(weatherData.weatherCode) : null;
  const windDir = weatherData ? getWindDirectionText(weatherData.windDirection) : null;
  const insights = weatherData ? generateFarmingInsights(weatherData) : [];

  return (
    <section
      id={id}
      dir={isUrdu ? 'rtl' : 'ltr'}
      className={`py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors ${className}`}
    >
      {/* Section Heading Bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-[16px]">wb_twilight</span>
            <span>{isUrdu ? 'لائیو زرعی موسمیاتی معلومات' : 'Live Agri Weather'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {isUrdu ? '🌦️ لائیو موسم و زرعی رہنمائی' : '🌦️ Weather & Farming Weather'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            {isUrdu
              ? 'اوپن میٹیو لائیو موسمی ڈیٹا، درجہ حرارت، ہوا کی رفتار، بارش کا امکان اور زرعی ڈرون اسپرے و فیلڈ کے لیے جامع رہنمائی۔'
              : 'Real-time meteorological forecast powered by Open-Meteo, including temperature, wind speed, rain probability, and farmer guidance.'}
          </p>
        </div>

        {/* Action Controls: Refresh & Location */}
        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
          {/* Change Location Button */}
          <button
            id="weather-change-location-btn"
            type="button"
            onClick={() => setIsLocationSelectorOpen(true)}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-[18px]">
              location_on
            </span>
            <span className="max-w-[130px] sm:max-w-[160px] truncate">
              {isUrdu ? selectedLocation.urduName : selectedLocation.name}
            </span>
            <span className="material-symbols-outlined text-[16px] text-slate-400">arrow_drop_down</span>
          </button>

          {/* Refresh Weather Button */}
          <button
            id="weather-refresh-btn"
            type="button"
            onClick={() => loadWeather(selectedLocation.lat, selectedLocation.lon)}
            disabled={isLoading}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            title={isUrdu ? 'موسم تازہ کریں' : 'Refresh Weather'}
          >
            <span className={`material-symbols-outlined text-[18px] ${isLoading ? 'animate-spin' : ''}`}>
              refresh
            </span>
            <span>{isUrdu ? 'موسم تازہ کریں' : 'Refresh'}</span>
          </button>
        </div>
      </div>

      {/* Notice Message if any */}
      {locationStatusNotice && (
        <div className="mb-6 p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 text-xs flex items-center justify-between gap-3 animate-in fade-in">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-amber-600">info</span>
            <span>{locationStatusNotice}</span>
          </div>
          <button
            type="button"
            onClick={() => setLocationStatusNotice(null)}
            className="text-amber-700 dark:text-amber-300 hover:underline font-bold text-xs"
          >
            ✕
          </button>
        </div>
      )}

      {/* Error State if API Fails */}
      {errorMessage && !weatherData && (
        <div className="p-8 rounded-3xl bg-rose-50 dark:bg-rose-950/20 border border-rose-300 dark:border-rose-800 text-center space-y-3">
          <span className="material-symbols-outlined text-rose-500 text-[40px]">cloud_off</span>
          <h3 className="text-base font-bold text-rose-900 dark:text-rose-200">
            {isUrdu ? 'موسمی ڈیٹا لوڈ نہیں ہو سکا' : 'Weather Data Unavailable'}
          </h3>
          <p className="text-xs text-rose-700 dark:text-rose-300 max-w-md mx-auto">
            {errorMessage}
          </p>
          <button
            type="button"
            onClick={() => loadWeather(selectedLocation.lat, selectedLocation.lon)}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer"
          >
            {isUrdu ? 'دوبارہ کوشش کریں' : 'Try Again'}
          </button>
        </div>
      )}

      {/* Loading Skeleton */}
      {isLoading && !weatherData && (
        <div className="bg-slate-100 dark:bg-slate-900/60 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 animate-pulse min-h-[300px] flex flex-col items-center justify-center text-center space-y-3">
          <span className="material-symbols-outlined text-emerald-500 text-[48px] animate-spin">
            progress_activity
          </span>
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
            {isUrdu ? 'لائیو موسمی ڈیٹا حاصل کیا جا رہا ہے...' : 'Fetching live Open-Meteo weather data...'}
          </p>
        </div>
      )}

      {/* Main Weather Section Content */}
      {weatherData && condition && (
        <div className="space-y-6">
          {/* Main Hero Weather Card */}
          <div
            id="weather-main-clickable-card"
            onClick={() => setIsDetailModalOpen(true)}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-950 text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-emerald-500/30 cursor-pointer transition-all duration-300 hover:shadow-emerald-900/30 hover:border-emerald-400/60"
          >
            {/* Background Ambient Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Primary Weather Display */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-emerald-200 text-xs font-bold backdrop-blur-xs">
                    <span className="material-symbols-outlined text-[16px]">{condition.icon}</span>
                    <span>{isUrdu ? condition.urdu : condition.description}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    <span>{isUrdu ? selectedLocation.urduName : selectedLocation.name}</span>
                  </span>
                </div>

                <div className="flex items-baseline gap-4">
                  <span className="text-6xl sm:text-7xl font-black tracking-tight" dir="ltr">
                    {weatherData.temperature}°C
                  </span>
                  <div className="space-y-0.5">
                    <div className="text-xs text-emerald-200 font-medium">
                      {isUrdu ? 'محسوس درجہ حرارت' : 'Feels like'}
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white" dir="ltr">
                      {weatherData.feelsLike}°C
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-emerald-200/90 font-medium flex-wrap">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-amber-300">wb_twilight</span>
                    <span>{isUrdu ? `طلوع: ${formatIsoTime(weatherData.sunrise)}` : `Sunrise: ${formatIsoTime(weatherData.sunrise)}`}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-orange-400">nights_stay</span>
                    <span>{isUrdu ? `غروب: ${formatIsoTime(weatherData.sunset)}` : `Sunset: ${formatIsoTime(weatherData.sunset)}`}</span>
                  </span>
                  <span>•</span>
                  <span className="text-slate-300">
                    {isUrdu ? `آخری اپ ڈیٹ: ${weatherData.updatedAt}` : `Updated: ${weatherData.updatedAt}`}
                  </span>
                </div>

                {/* Click hint banner */}
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 group-hover:text-white transition-colors pt-2">
                  <span>{isUrdu ? 'مکمل گھنٹہ وار و 7 روزہ ڈیش بورڈ کھولنے کے لیے کلک کریں' : 'Click to view full hourly & 7-day dashboard'}</span>
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                    {isUrdu ? 'arrow_back' : 'arrow_forward'}
                  </span>
                </div>
              </div>

              {/* Right Column: 8 Key Metrics Grid */}
              <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                {/* 1. Humidity */}
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="text-emerald-200 flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-[16px]">water_drop</span>
                    <span>{isUrdu ? 'نمی' : 'Humidity'}</span>
                  </div>
                  <div className="text-lg font-black text-white" dir="ltr">
                    {weatherData.humidity}%
                  </div>
                  <div className="text-[10px] text-emerald-200/80">
                    {isUrdu ? `شبنم: ${weatherData.dewPoint}°C` : `Dew: ${weatherData.dewPoint}°C`}
                  </div>
                </div>

                {/* 2. Wind Speed */}
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="text-emerald-200 flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-[16px]">air</span>
                    <span>{isUrdu ? 'ہوا کی رفتار' : 'Wind Speed'}</span>
                  </div>
                  <div className="text-lg font-black text-white" dir="ltr">
                    {weatherData.windSpeed} km/h
                  </div>
                  <div className="text-[10px] text-emerald-200/80 truncate">
                    {windDir ? (isUrdu ? windDir.ur : windDir.en) : ''}
                  </div>
                </div>

                {/* 3. Rain / Precipitation */}
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="text-emerald-200 flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-[16px]">rainy</span>
                    <span>{isUrdu ? 'بارش' : 'Rain'}</span>
                  </div>
                  <div className="text-lg font-black text-white" dir="ltr">
                    {weatherData.precipitation} mm
                  </div>
                  <div className="text-[10px] text-emerald-200/80">
                    {weatherData.precipitation > 0 ? (isUrdu ? 'بارش فعال' : 'Precipitating') : (isUrdu ? 'خشک' : 'Dry')}
                  </div>
                </div>

                {/* 4. Cloud Cover */}
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="text-emerald-200 flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-[16px]">cloud</span>
                    <span>{isUrdu ? 'بادل' : 'Clouds'}</span>
                  </div>
                  <div className="text-lg font-black text-white" dir="ltr">
                    {weatherData.cloudCover}%
                  </div>
                  <div className="text-[10px] text-emerald-200/80">
                    {weatherData.cloudCover > 50 ? (isUrdu ? 'ابر آلود' : 'Cloudy') : (isUrdu ? 'صاف مطلع' : 'Clear')}
                  </div>
                </div>

                {/* 5. Visibility */}
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="text-emerald-200 flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                    <span>{isUrdu ? 'حدِ نگاہ' : 'Visibility'}</span>
                  </div>
                  <div className="text-lg font-black text-white" dir="ltr">
                    {weatherData.visibility} km
                  </div>
                  <div className="text-[10px] text-emerald-200/80">
                    {weatherData.visibility >= 8 ? (isUrdu ? 'صاف' : 'Clear') : (isUrdu ? 'دھند' : 'Foggy')}
                  </div>
                </div>

                {/* 6. UV Index */}
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="text-emerald-200 flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-[16px]">wb_sunny</span>
                    <span>{isUrdu ? 'یو وی انڈیکس' : 'UV Index'}</span>
                  </div>
                  <div className="text-lg font-black text-white" dir="ltr">
                    {weatherData.uvIndex}
                  </div>
                  <div className="text-[10px] text-emerald-200/80">
                    {weatherData.uvIndex > 6 ? (isUrdu ? 'تیز دھوپ' : 'High') : (isUrdu ? 'معتدل' : 'Normal')}
                  </div>
                </div>

                {/* 7. Wind Gusts */}
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="text-emerald-200 flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-[16px]">storm</span>
                    <span>{isUrdu ? 'جھونکے' : 'Gusts'}</span>
                  </div>
                  <div className="text-lg font-black text-white" dir="ltr">
                    {weatherData.windGusts} km/h
                  </div>
                  <div className="text-[10px] text-emerald-200/80">
                    {isUrdu ? 'زیادہ سے زیادہ' : 'Max speed'}
                  </div>
                </div>

                {/* 8. Pressure */}
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="text-emerald-200 flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-[16px]">speed</span>
                    <span>{isUrdu ? 'ہوائی دباؤ' : 'Pressure'}</span>
                  </div>
                  <div className="text-lg font-black text-white" dir="ltr">
                    {weatherData.surfacePressure}
                  </div>
                  <div className="text-[10px] text-emerald-200/80">
                    hPa
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 12: Farmer-Friendly Quick Alerts Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {/* 1. Rain Alert */}
            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${weatherData.precipitation > 0 ? 'bg-blue-500/20 text-blue-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                <span className="material-symbols-outlined text-[20px]">water_drop</span>
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase truncate">
                  {isUrdu ? 'بارش الرٹ' : 'Rain Alert'}
                </div>
                <div className="text-xs font-black text-slate-800 dark:text-slate-200 truncate">
                  {weatherData.precipitation > 0 ? (isUrdu ? 'بارش کا امکان' : 'Active Rain') : (isUrdu ? 'بارش نہیں' : 'No Rain')}
                </div>
              </div>
            </div>

            {/* 2. Wind Alert */}
            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${weatherData.windSpeed > 20 ? 'bg-rose-500/20 text-rose-600' : 'bg-emerald-500/20 text-emerald-600'}`}>
                <span className="material-symbols-outlined text-[20px]">air</span>
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase truncate">
                  {isUrdu ? 'ہوا کا جائزہ' : 'Wind Status'}
                </div>
                <div className="text-xs font-black text-slate-800 dark:text-slate-200 truncate">
                  {weatherData.windSpeed > 20 ? (isUrdu ? 'تیز ہوا' : 'High Wind') : (isUrdu ? 'معتدل ہوا' : 'Calm Wind')}
                </div>
              </div>
            </div>

            {/* 3. Heat Indicator */}
            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${weatherData.temperature >= 38 ? 'bg-rose-500/20 text-rose-600' : 'bg-amber-500/20 text-amber-600'}`}>
                <span className="material-symbols-outlined text-[20px]">thermostat</span>
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase truncate">
                  {isUrdu ? 'گرمی کی شدت' : 'Heat Level'}
                </div>
                <div className="text-xs font-black text-slate-800 dark:text-slate-200 truncate">
                  {weatherData.temperature >= 38 ? (isUrdu ? 'شدید گرمی' : 'High Heat') : (isUrdu ? 'معتدل موسم' : 'Normal')}
                </div>
              </div>
            </div>

            {/* 4. Humidity */}
            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">humidity_mid</span>
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase truncate">
                  {isUrdu ? 'فصل نمی' : 'Humidity'}
                </div>
                <div className="text-xs font-black text-slate-800 dark:text-slate-200 truncate">
                  {weatherData.humidity}%
                </div>
              </div>
            </div>

            {/* 5. UV Index */}
            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">wb_sunny</span>
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase truncate">
                  {isUrdu ? 'دھوپ یو وی' : 'UV Index'}
                </div>
                <div className="text-xs font-black text-slate-800 dark:text-slate-200 truncate">
                  UV {weatherData.uvIndex}
                </div>
              </div>
            </div>

            {/* 6. General Field Weather */}
            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">agriculture</span>
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase truncate">
                  {isUrdu ? 'کھیت کا کام' : 'Field Work'}
                </div>
                <div className="text-xs font-black text-slate-800 dark:text-slate-200 truncate">
                  {weatherData.windSpeed <= 18 && weatherData.precipitation === 0 ? (isUrdu ? 'سازگار وقت' : 'Suitable') : (isUrdu ? 'احتیاط' : 'Caution')}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Preview of Farming Insights & Button to open full Dashboard */}
          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-start">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-[20px]">
                  psychology
                </span>
                <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                  {isUrdu ? '🌱 زرعی موسمی رہنمائی و پیش گوئی' : '🌱 Farming Weather Insights & Detailed Forecast'}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {insights[0]
                  ? isUrdu ? insights[0].titleUrdu : insights[0].titleEn
                  : isUrdu ? 'فصلوں کی حفاظت اور اسپرے کے اوقات کی رہنمائی' : 'Crop protection and spraying window analysis'}
              </p>
            </div>

            <button
              id="weather-open-full-dashboard-btn"
              type="button"
              onClick={() => setIsDetailModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">dashboard</span>
              <span>{isUrdu ? 'مکمل موسمی ڈیش بورڈ کھولیں' : 'Open Detailed Weather Dashboard'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Detailed Weather Modal */}
      <WeatherDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        weather={weatherData}
        location={selectedLocation}
        isLoading={isLoading}
        onRefresh={() => loadWeather(selectedLocation.lat, selectedLocation.lon)}
        onOpenLocationPicker={() => setIsLocationSelectorOpen(true)}
      />

      {/* City / Location Picker Modal */}
      {isLocationSelectorOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
          onClick={() => setIsLocationSelectorOpen(false)}
        >
          <div
            dir={isUrdu ? 'rtl' : 'ltr'}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4 text-slate-800 dark:text-slate-100"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-[20px]">
                  map
                </span>
                <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                  {isUrdu ? 'شہر منتخب کریں / موسمی مقام' : 'Select City / Location'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsLocationSelectorOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* GPS Location Button */}
            <button
              type="button"
              onClick={() => {
                setIsLocationSelectorOpen(false);
                setShowLocationPermissionModal(true);
              }}
              className="w-full py-2.5 px-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold text-xs rounded-xl flex items-center justify-center gap-2 border border-emerald-500/30 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">my_location</span>
              <span>{isUrdu ? 'میری موجودہ جگہ استعمال کریں (GPS)' : 'Use My Current Location (GPS)'}</span>
            </button>

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={locationSearchQuery}
                onChange={(e) => setLocationSearchQuery(e.target.value)}
                placeholder={isUrdu ? 'شہر تلاش کریں (مثلاً: کوٹ ادو، ملتان، لیہ)...' : 'Search city (e.g. Kot Addu, Multan)...'}
                className="w-full py-2 px-3 pl-8 pr-3 text-xs bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-white"
              />
              <span className="material-symbols-outlined absolute left-2 top-2 text-slate-400 text-[16px]">
                search
              </span>
            </div>

            {/* City List */}
            <div className="max-h-60 overflow-y-auto space-y-1.5 pr-1 scrollbar-thin">
              {filteredLocations.map((loc) => (
                <button
                  key={loc.name}
                  type="button"
                  onClick={() => handleManualSelectLocation(loc)}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors text-start cursor-pointer ${
                    selectedLocation.name === loc.name
                      ? 'bg-emerald-600 text-white font-bold'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span>{isUrdu ? loc.urduName : loc.name}</span>
                  </div>
                  {selectedLocation.name === loc.name && (
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* GPS Location Permission Modal */}
      {showLocationPermissionModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
          onClick={() => setShowLocationPermissionModal(false)}
        >
          <div
            dir={isUrdu ? 'rtl' : 'ltr'}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 text-center space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[28px]">location_searching</span>
            </div>
            <h3 className="font-black text-base text-slate-900 dark:text-white">
              {isUrdu ? 'لوکیشن کی اجازت درکار ہے' : 'Location Permission Needed'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {isUrdu
                ? 'آپ کے کھیت یا گاؤں کا لائیو اور درست ترین موسمی ڈیٹا حاصل کرنے کے لیے براؤزر کو لوکیشن کی اجازت درکار ہوگی۔'
                : 'To display live weather data precisely for your farm or area, your browser will ask for location permission.'}
            </p>
            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowLocationPermissionModal(false)}
                className="flex-1 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-xl cursor-pointer"
              >
                {isUrdu ? 'کینسل' : 'Cancel'}
              </button>
              <button
                type="button"
                onClick={handleRequestDeviceLocation}
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
              >
                {isUrdu ? 'اجازت دیں' : 'Allow Access'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
