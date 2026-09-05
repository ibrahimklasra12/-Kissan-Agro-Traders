import React from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { KissanLogo } from './KissanLogo';

export const PWAInstallBanner: React.FC = () => {
  const {
    isInstallable,
    isIOS,
    showIOSModal,
    setShowIOSModal,
    triggerInstall,
    dismissPrompt,
  } = usePWAInstall();

  if (!isInstallable) return null;

  return (
    <>
      {/* Subtle Bottom Floating Install Banner */}
      <aside
        id="pwa-install-banner"
        aria-label="App installation banner"
        className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-white/95 backdrop-blur-md rounded-2xl border border-emerald-200/90 shadow-xl p-3.5 sm:p-4 animate-in fade-in slide-in-from-bottom-5 duration-300"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 p-1 shrink-0 shadow-xs flex items-center justify-center">
            <KissanLogo size={36} animated={false} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 truncate">
                Kissan Agro App Install Karein
              </h4>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.2 rounded-sm">
                PWA
              </span>
            </div>
            <p className="text-[11px] text-slate-500 truncate urdu-text" dir="rtl">
              تیز رفتار رسائی اور ڈائریکٹ انکوائری کے لیے
            </p>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              id="pwa-install-btn"
              type="button"
              onClick={triggerInstall}
              className="px-3 sm:px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white text-xs font-bold shadow-xs hover:shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>{isIOS ? 'Install' : 'Install App'}</span>
            </button>
            <button
              id="pwa-dismiss-btn"
              type="button"
              onClick={dismissPrompt}
              aria-label="Dismiss app install prompt"
              className="w-7 h-7 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>
      </aside>

      {/* iOS Safari Instructions Modal */}
      {showIOSModal && (
        <div
          id="ios-install-modal-backdrop"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-3 sm:p-4"
          onClick={() => setShowIOSModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            id="ios-install-modal"
            className="bg-white max-w-sm w-full rounded-3xl p-5 shadow-2xl border border-slate-200 animate-in slide-in-from-bottom duration-200 text-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px] text-emerald-700">phone_iphone</span>
                <h3 className="text-sm font-bold text-slate-900">iPhone par App Install Karein</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowIOSModal(false)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-4 urdu-text leading-relaxed" dir="rtl">
              ایپل سفاری (Safari) میں ایپ کو ہوم اسکرین پر شامل کرنے کے لیے نیچے دیے گئے ۳ آسان مراحل فالو کریں:
            </p>

            <ol className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50">
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  سفاری براؤزر کے نیچے موجود <strong>Share</strong> بٹن (<span className="material-symbols-outlined text-[14px] align-middle text-emerald-700">ios_share</span>) پر کلک کریں۔
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50">
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  مینیو میں نیچے اسکرول کر کے <strong>"Add to Home Screen"</strong> منتخب کریں۔
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50">
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  اوپر دائیں کونے میں <strong>"Add"</strong> پر کلک کریں۔ ایپ آپ کی موبائل اسکرین پر آ جائے گی!
                </div>
              </li>
            </ol>

            <button
              type="button"
              onClick={() => setShowIOSModal(false)}
              className="mt-4 w-full py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              سمجھ آ گئی (Got it)
            </button>
          </div>
        </div>
      )}
    </>
  );
};
