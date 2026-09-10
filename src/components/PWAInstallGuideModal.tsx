import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/agroData';
import { KissanLogo } from './KissanLogo';

interface PWAInstallGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  isIOS?: boolean;
}

export const PWAInstallGuideModal: React.FC<PWAInstallGuideModalProps> = ({
  isOpen,
  onClose,
  isIOS = false,
}) => {
  const { isUrdu } = useLanguage();
  const [selectedPlatform, setSelectedPlatform] = React.useState<'android' | 'ios'>(isIOS ? 'ios' : 'android');

  React.useEffect(() => {
    setSelectedPlatform(isIOS ? 'ios' : 'android');
  }, [isIOS, isOpen]);

  if (!isOpen) return null;

  const showIosSteps = selectedPlatform === 'ios';

  return (
    <div
      id="pwa-install-guide-backdrop"
      className="fixed inset-0 z-[60] bg-slate-950/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        id="pwa-install-guide-modal"
        dir={isUrdu ? 'rtl' : 'ltr'}
        className="bg-white dark:bg-slate-900 max-w-md w-full rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 animate-in slide-in-from-bottom duration-250"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with App Icon */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 p-1 flex items-center justify-center shadow-md">
              <KissanLogo size={36} animated={false} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                  {isUrdu ? 'کسان ایگرو ایپ انسٹال کریں' : 'Install Kissan Agro App'}
                </h3>
                <span className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 text-[10px] font-black px-1.5 py-0.5 rounded-full">
                  PWA
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {showIosSteps
                  ? (isUrdu ? 'ایپل آئی فون / آئی پیڈ رہنمائی' : 'Apple iOS Safari Guide')
                  : (isUrdu ? 'اینڈرائیڈ، کروم و پی سی رہنمائی' : 'Android, Chrome & PC Guide')}
              </p>
            </div>
          </div>
          <button
            id="close-pwa-guide-btn"
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Platform Switcher Tabs */}
        <div className="mt-3 flex rounded-xl bg-slate-100 dark:bg-slate-800/80 p-1 text-xs font-bold">
          <button
            type="button"
            onClick={() => setSelectedPlatform('android')}
            className={`flex-1 py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              !showIosSteps
                ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">android</span>
            <span>{isUrdu ? 'اینڈرائیڈ / کروم' : 'Android / Chrome'}</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedPlatform('ios')}
            className={`flex-1 py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              showIosSteps
                ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">phone_iphone</span>
            <span>{isUrdu ? 'آئی فون (سفاری)' : 'iPhone / iPad'}</span>
          </button>
        </div>

        {/* Informative summary */}
        <div className="mt-3 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-200 flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[22px] text-emerald-600 dark:text-emerald-400 shrink-0">
            verified
          </span>
          <span className="leading-relaxed">
            {isUrdu
              ? 'ایپ انسٹال کرنے کے بعد یہ بالکل نیٹو ایپ کی طرح براہ راست موبائل اسکرین سے کھلتی ہے اور تیز ترین زرعی خدمات فراہم کرتی ہے۔'
              : 'Installing the app adds it directly to your home screen for ultra-fast access, offline capabilities, and direct WhatsApp consultations.'}
          </span>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="mt-4 space-y-3">
          <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
            {isUrdu ? 'آسان مراحل فالو کریں:' : 'Follow these quick steps:'}
          </p>

          {showIosSteps ? (
            <ol className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-3 p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {isUrdu ? 'Share بٹن پر ٹیپ کریں: ' : 'Tap Share Button: '}
                  </span>
                  {isUrdu ? (
                    <>سفاری براؤزر کے نیچے موجود <strong>Share</strong> آئیکن (<span className="material-symbols-outlined text-[15px] align-middle text-emerald-600 dark:text-emerald-400">ios_share</span>) پر کلک کریں۔</>
                  ) : (
                    <>Tap the <strong>Share</strong> button (<span className="material-symbols-outlined text-[15px] align-middle text-emerald-600">ios_share</span>) in the Safari bottom toolbar.</>
                  )}
                </div>
              </li>

              <li className="flex items-start gap-3 p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {isUrdu ? 'Add to Home Screen منتخب کریں: ' : 'Select Add to Home Screen: '}
                  </span>
                  {isUrdu ? (
                    <>شیئر مینیو میں نیچے اسکرول کر کے <strong>"Add to Home Screen"</strong> (<span className="material-symbols-outlined text-[15px] align-middle text-emerald-600">add_box</span>) پر ٹیپ کریں۔</>
                  ) : (
                    <>Scroll down in the options menu and select <strong>"Add to Home Screen"</strong>.</>
                  )}
                </div>
              </li>

              <li className="flex items-start gap-3 p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {isUrdu ? 'Add پر کلک کریں: ' : 'Tap Add: '}
                  </span>
                  {isUrdu ? (
                    <>اوپر دائیں کونے میں <strong>"Add"</strong> پر ٹیپ کریں۔ ایپ آپ کی موبائل اسکرین پر شامل ہو جائے گی!</>
                  ) : (
                    <>Tap <strong>"Add"</strong> in the top-right corner. The Kissan Agro app is now on your home screen!</>
                  )}
                </div>
              </li>
            </ol>
          ) : (
            <ol className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-3 p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {isUrdu ? 'براؤزر مینیو کھولیں: ' : 'Open Browser Menu: '}
                  </span>
                  {isUrdu ? (
                    <>اوپر دائیں کونے میں تھری ڈاٹس مینیو (<span className="material-symbols-outlined text-[15px] align-middle text-emerald-600">more_vert</span>) پر کلک کریں۔</>
                  ) : (
                    <>Tap the three dots menu (<span className="material-symbols-outlined text-[15px] align-middle text-emerald-600">more_vert</span>) in the top-right corner of Chrome/Edge.</>
                  )}
                </div>
              </li>

              <li className="flex items-start gap-3 p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {isUrdu ? 'Install App یا Add to Home screen: ' : 'Select Install App or Add to Home Screen: '}
                  </span>
                  {isUrdu ? (
                    <>مینیو میں <strong>"Install app"</strong> یا <strong>"Add to Home screen"</strong> (<span className="material-symbols-outlined text-[15px] align-middle text-emerald-600">install_mobile</span>) پر ٹیپ کریں۔</>
                  ) : (
                    <>Select <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong> (<span className="material-symbols-outlined text-[15px] align-middle text-emerald-600">install_mobile</span>).</>
                  )}
                </div>
              </li>

              <li className="flex items-start gap-3 p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {isUrdu ? 'Install پر کلک کریں: ' : 'Confirm Install: '}
                  </span>
                  {isUrdu ? (
                    <>پاپ اپ میں <strong>"Install"</strong> پر کلک کریں۔ ایپ آپ کی موبائل اسکرین پر انسٹال ہو جائے گی!</>
                  ) : (
                    <>Tap <strong>"Install"</strong> in the prompt. The app will install directly to your device!</>
                  )}
                </div>
              </li>
            </ol>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-95 cursor-pointer text-center"
          >
            {isUrdu ? 'سمجھ آ گئی (Got It)' : 'Got It, Thanks!'}
          </button>
          <a
            href={BUSINESS_INFO.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>{isUrdu ? 'مدد چاہیے؟' : 'Need Help?'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
