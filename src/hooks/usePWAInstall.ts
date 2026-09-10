import { useState, useEffect, useCallback } from 'react';

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

// Module-level singleton state to prevent race conditions across components
let globalDeferredPrompt: BeforeInstallPromptEvent | null = null;
let globalIsInstalled = false;
let globalIsIOS = false;
let globalIsAndroid = false;
let globalShowGuideModal = false;
const subscribers = new Set<() => void>();

function notifySubscribers() {
  subscribers.forEach((callback) => {
    try {
      callback();
    } catch {
      // ignore
    }
  });
}

function checkStandalone(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as unknown as { standalone?: boolean }).standalone === true ||
    (typeof document !== 'undefined' && document.referrer.includes('android-app://'))
  );
}

// Setup root event listeners once
if (typeof window !== 'undefined') {
  globalIsInstalled = checkStandalone();

  // Check early captured prompt from head script if present
  const win = window as unknown as {
    __deferredPrompt?: BeforeInstallPromptEvent | null;
    __isAppInstalled?: boolean;
    MSStream?: unknown;
  };

  if (win.__deferredPrompt) {
    globalDeferredPrompt = win.__deferredPrompt;
  }
  if (win.__isAppInstalled) {
    globalIsInstalled = true;
  }

  const userAgent = window.navigator.userAgent.toLowerCase();
  globalIsIOS = /iphone|ipad|ipod/.test(userAgent) && !win.MSStream;
  globalIsAndroid = /android/.test(userAgent);

  // Standard native event
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault();
    globalDeferredPrompt = e as BeforeInstallPromptEvent;
    win.__deferredPrompt = globalDeferredPrompt;
    notifySubscribers();
  });

  // Early capture custom event
  window.addEventListener('pwa-prompt-ready', ((e: CustomEvent<BeforeInstallPromptEvent>) => {
    if (e.detail) {
      globalDeferredPrompt = e.detail;
    } else if (win.__deferredPrompt) {
      globalDeferredPrompt = win.__deferredPrompt;
    }
    notifySubscribers();
  }) as EventListener);

  window.addEventListener('appinstalled', () => {
    globalIsInstalled = true;
    globalDeferredPrompt = null;
    win.__deferredPrompt = null;
    win.__isAppInstalled = true;
    notifySubscribers();
  });

  window.addEventListener('pwa-installed', () => {
    globalIsInstalled = true;
    globalDeferredPrompt = null;
    win.__deferredPrompt = null;
    win.__isAppInstalled = true;
    notifySubscribers();
  });
}

export function usePWAInstall() {
  const [, setTick] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const update = () => setTick((t) => t + 1);
    subscribers.add(update);

    // Initial check
    const standaloneNow = checkStandalone();
    if (standaloneNow !== globalIsInstalled) {
      globalIsInstalled = standaloneNow;
      update();
    }

    // Check banner session dismissal
    const dismissed = sessionStorage.getItem('kissan_pwa_dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }

    return () => {
      subscribers.delete(update);
    };
  }, []);

  const triggerInstall = useCallback(async (): Promise<'accepted' | 'dismissed' | 'guide'> => {
    // If already installed, do nothing
    if (globalIsInstalled || checkStandalone()) {
      globalIsInstalled = true;
      notifySubscribers();
      return 'accepted';
    }

    // Native browser install prompt available
    if (globalDeferredPrompt) {
      try {
        await globalDeferredPrompt.prompt();
        const choiceResult = await globalDeferredPrompt.userChoice;
        if (choiceResult.outcome === 'accepted') {
          globalIsInstalled = true;
          globalDeferredPrompt = null;
          notifySubscribers();
          return 'accepted';
        }
        return 'dismissed';
      } catch (err) {
        console.warn('Native install prompt failed, opening guide instead:', err);
      }
    }

    // Fallback: If no native prompt is available (iOS, unsupported browser, or dismissed prompt)
    // Show the interactive guide with step-by-step visual instructions!
    globalShowGuideModal = true;
    notifySubscribers();
    return 'guide';
  }, []);

  const dismissPrompt = useCallback(() => {
    setIsDismissed(true);
    try {
      sessionStorage.setItem('kissan_pwa_dismissed', 'true');
    } catch {
      // ignore
    }
  }, []);

  const setShowGuideModal = useCallback((show: boolean) => {
    globalShowGuideModal = show;
    notifySubscribers();
  }, []);

  return {
    // True if app is not yet installed (can be installed)
    isInstallable: !globalIsInstalled,
    // True if native prompt event is ready in browser
    canPromptNative: !!globalDeferredPrompt,
    // True if running as installed standalone app
    isInstalled: globalIsInstalled,
    // Device checks
    isIOS: globalIsIOS,
    isAndroid: globalIsAndroid,
    // Banner specific visibility (dismissible per session)
    isBannerVisible: !globalIsInstalled && !isDismissed,
    // Guide modal state
    showGuideModal: globalShowGuideModal,
    setShowGuideModal,
    // Deprecated alias for backwards compatibility
    showIOSModal: globalShowGuideModal && globalIsIOS,
    setShowIOSModal: setShowGuideModal,
    // Actions
    triggerInstall,
    dismissPrompt,
  };
}
