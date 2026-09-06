import React, { useState, useEffect } from 'react';

interface ShopStatusBadgeProps {
  showHours?: boolean;
  className?: string;
}

export const ShopStatusBadge: React.FC<ShopStatusBadgeProps> = ({ showHours = false, className = '' }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const checkStatus = () => {
      // Calculate current hour in Pakistan Standard Time (PKT = UTC+5)
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const pktTime = new Date(utcTime + 5 * 3600000);
      const hours = pktTime.getHours();

      // Open from 8:00 AM to 8:00 PM (20:00)
      const currentlyOpen = hours >= 8 && hours < 20;
      setIsOpen(currentlyOpen);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
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
      title={isOpen ? 'Open Now (8:00 AM - 8:00 PM PKT)' : 'Closed Now (WhatsApp Helpline 24/7)'}
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
          (8:00 AM - 8:00 PM)
        </span>
      )}
    </div>
  );
};
