import React, { useState, useEffect } from 'react';

interface ShopStatusBadgeProps {
  showHours?: boolean;
  className?: string;
}

export const ShopStatusBadge: React.FC<ShopStatusBadgeProps> = ({ showHours = false, className = '' }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const checkStatus = () => {
      // Calculate current time in Pakistan Standard Time (PKT = UTC+5)
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const pktTime = new Date(utcTime + 5 * 3600000);
      const hours = pktTime.getHours();
      const minutes = pktTime.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      // Active operating hours: 7:00 AM (420 mins) to 6:30 PM (18:30 = 1110 mins) PKT
      const currentlyOpen = totalMinutes >= 420 && totalMinutes < 1110;
      setIsOpen(currentlyOpen);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Recheck every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="shop-status-badge"
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold tracking-wide transition-all ${
        isOpen
          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
          : 'bg-rose-500/20 text-rose-300 border border-rose-400/30'
      } ${className}`}
      title={isOpen ? 'Open Now (7:00 AM - 6:30 PM PKT)' : 'Closed Now (WhatsApp Helpline 24/7)'}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isOpen ? 'bg-emerald-400' : 'bg-rose-400'
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            isOpen ? 'bg-emerald-500' : 'bg-rose-500'
          }`}
        />
      </span>
      <span>{isOpen ? '🟢 Open Now' : '🔴 Closed Now'}</span>
      {showHours && (
        <span className="text-[10px] opacity-80 hidden sm:inline">
          (7:00 AM - 6:30 PM)
        </span>
      )}
    </div>
  );
};
