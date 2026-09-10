import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register Service Worker via VitePWA
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('[PWA] New content available');
  },
  onOfflineReady() {
    console.log('[PWA] App is ready for offline use');
  },
  onRegisteredSW(swUrl) {
    console.log('[PWA] Service Worker registered at:', swUrl);
  },
  onRegisterError(error) {
    console.warn('[PWA] Service Worker registration error:', error);
  },
});

// Resilient fallback service worker registration for GitHub Pages / subpaths
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Only register if not already registered/controlled
    if (!navigator.serviceWorker.controller) {
      const base = import.meta.env.BASE_URL || '/';
      const normalizedBase = base.endsWith('/') ? base : `${base}/`;
      const swUrl = `${normalizedBase}sw.js`;
      navigator.serviceWorker
        .register(swUrl, { scope: normalizedBase })
        .then((reg) => {
          console.log('[PWA] Fallback SW registered at:', reg.scope);
        })
        .catch((err) => {
          console.warn('[PWA] Fallback SW register notice:', err);
        });
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);


