import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register PWA service worker with auto-reload upon update
registerSW({
  immediate: true,
  onNeedRefresh() {
    // When a new SW is found, silently reload or notify
    console.log('Kissan Agro Traders PWA update available.');
  },
  onOfflineReady() {
    console.log('Kissan Agro Traders PWA offline ready.');
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
