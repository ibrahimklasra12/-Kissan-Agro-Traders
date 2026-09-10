import React from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useLanguage } from '../context/LanguageContext';
import { KissanLogo } from './KissanLogo';
import { PWAInstallGuideModal } from './PWAInstallGuideModal';

export const PWAInstallBanner: React.FC = () => {
  const {
    isBannerVisible,
    isIOS,
    showGuideModal,
    setShowGuideModal,
    triggerInstall,
    dismissPrompt,
  } = usePWAInstall();
  const { isUrdu } = useLanguage();

  return (
    <>
      {/* Subtle Bottom Floating Install Banner (Visible only if not installed and not dismissed) */}
      {isBannerVisible && (
        <aside
          id="pwa-install-banner"
          aria-label="App installation banner"
          dir={isUrdu ? 'rtl' : 'ltr'}
          className="fixed bottom-20 sm:bottom-6 left-3 right-3 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-emerald-500/30 shadow-2xl p-3 sm:p-3.5 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 p-1 shrink-0 shadow-xs flex items-center justify-center">
              <KissanLogo size={34} animated={false} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white truncate">
                  {isUrdu ? 'کسان ایگرو ایپ انسٹال کریں' : 'Install Kissan Agro App'}
                </h4>
                <span className="bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  PWA
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                {isUrdu
                  ? 'ہوم اسکرین پر براہ راست رسائی کے لیے'
                  : 'Add to home screen for 1-tap access'}
              </p>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                id="pwa-install-btn"
                type="button"
                onClick={() => triggerInstall()}
                className="px-3 sm:px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white text-xs font-bold shadow-xs hover:shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                <span>{isUrdu ? '📲 انسٹال کریں' : '📲 Install App'}</span>
              </button>
              <button
                id="pwa-dismiss-btn"
                type="button"
                onClick={dismissPrompt}
                aria-label="Dismiss app install prompt"
                className="w-7 h-7 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Global Interactive Guide Modal (For iOS Safari or Android when manual install required) */}
      <PWAInstallGuideModal
        isOpen={showGuideModal}
        onClose={() => setShowGuideModal(false)}
        isIOS={isIOS}
      />
    </>
  );
};
