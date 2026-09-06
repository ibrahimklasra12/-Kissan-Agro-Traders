import React, { useState, useEffect } from 'react';
import { registerSW } from 'virtual:pwa-register';

export const PWAUpdateNotice: React.FC = () => {
  const [needRefresh, setNeedRefresh] = useState(false);
  const [updateFunction, setUpdateFunction] = useState<((reloadPage?: boolean) => Promise<void>) | null>(null);

  useEffect(() => {
    try {
      const updateSW = registerSW({
        immediate: true,
        onNeedRefresh() {
          // New version detected
          setNeedRefresh(true);
        },
        onOfflineReady() {
          console.log('Kissan Agro Traders PWA is ready for offline usage.');
        },
      });

      setUpdateFunction(() => updateSW);
    } catch (err) {
      console.warn('PWA registration check skipped:', err);
    }
  }, []);

  const handleUpdate = async () => {
    if (updateFunction) {
      try {
        await updateFunction(true);
      } catch {
        window.location.reload();
      }
    } else {
      window.location.reload();
    }
  };

  const handleLater = () => {
    setNeedRefresh(false);
  };

  if (!needRefresh) return null;

  return (
    <aside
      id="pwa-update-notice-banner"
      role="alert"
      aria-live="polite"
      className="fixed top-20 sm:top-24 right-4 left-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-slate-900/95 text-white backdrop-blur-md rounded-2xl border border-emerald-500/50 shadow-2xl p-4 animate-in slide-in-from-top-4 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-400/30">
          <span className="material-symbols-outlined text-[20px]">update</span>
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-xs sm:text-sm font-black text-white flex items-center gap-1.5">
            <span>✨ New version available</span>
          </h4>
          <p className="text-[11px] text-emerald-200/90 mt-0.5 urdu-text" dir="rtl">
            کسان ایگرو ٹریڈرز کا نیا اپڈیٹ دستیاب ہے۔
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Click update to load the latest catalog and features.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 mt-3">
            <button
              id="pwa-update-now-btn"
              type="button"
              onClick={handleUpdate}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-slate-950 text-xs font-black transition-all shadow-xs cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[15px]">refresh</span>
              <span>Update Now</span>
            </button>
            <button
              id="pwa-update-later-btn"
              type="button"
              onClick={handleLater}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-slate-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Later
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLater}
          aria-label="Close update notice"
          className="w-6 h-6 rounded-lg text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">close</span>
        </button>
      </div>
    </aside>
  );
};
