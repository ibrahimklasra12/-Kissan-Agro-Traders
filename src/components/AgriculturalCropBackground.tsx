import React from 'react';
import { PAKISTANI_CROPS } from '../data/pakistaniCrops';

export type CropKey =
  | 'wheat'
  | 'rice'
  | 'cotton'
  | 'maize'
  | 'sugarcane'
  | 'sunflower'
  | 'canola'
  | 'mango'
  | 'citrus'
  | 'potato'
  | 'onion'
  | 'tomato'
  | 'chili'
  | 'vegetables'
  | 'peanut'
  | 'pulses'
  | 'watermelon'
  | 'melon';

interface AgriculturalCropBackgroundProps {
  crop: CropKey | string;
  overlay?: 'emerald' | 'emerald-dark' | 'slate' | 'light' | 'golden' | 'subtle';
  opacity?: number; // e.g. 0.10 to 0.35
  enableParallax?: boolean;
  className?: string;
  cropBadgeLabel?: string;
}

export const AgriculturalCropBackground: React.FC<AgriculturalCropBackgroundProps> = ({
  crop,
  overlay = 'emerald',
  opacity = 0.16,
  enableParallax = true,
  className = '',
  cropBadgeLabel,
}) => {
  const cropData = PAKISTANI_CROPS.find((c) => c.id === crop) || PAKISTANI_CROPS[0];
  const imageUrl = cropData.image;

  // Choose overlay gradient based on requested theme
  let overlayClasses = 'bg-gradient-to-b from-slate-900/80 via-emerald-950/85 to-slate-900/90';
  if (overlay === 'emerald') {
    overlayClasses = 'bg-gradient-to-br from-emerald-950/80 via-slate-900/75 to-teal-950/85';
  } else if (overlay === 'emerald-dark') {
    overlayClasses = 'bg-gradient-to-b from-slate-950/90 via-emerald-950/85 to-slate-950/92';
  } else if (overlay === 'light') {
    overlayClasses = 'bg-gradient-to-b from-white/92 via-slate-50/88 to-white/94';
  } else if (overlay === 'golden') {
    overlayClasses = 'bg-gradient-to-br from-amber-950/75 via-emerald-950/80 to-slate-950/85';
  } else if (overlay === 'subtle') {
    overlayClasses = 'bg-gradient-to-b from-slate-900/50 via-slate-950/60 to-slate-900/70';
  }

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
    >
      {/* Realistic Pakistani Crop Image Background */}
      <img
        src={imageUrl}
        alt={cropData.alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        style={{ opacity }}
        className={`w-full h-full object-cover object-center transform-gpu ${
          enableParallax ? 'animate-crop-drift' : 'scale-105'
        }`}
      />

      {/* Atmospheric Theme Gradient Overlay for pristine text readability */}
      <div className={`absolute inset-0 ${overlayClasses} backdrop-blur-[0.5px]`} />

      {/* Micro Agricultural Motif Grid for organic texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Optional subtle watermarked crop name tag in bottom corner */}
      {cropBadgeLabel && (
        <div className="absolute bottom-2 right-4 text-[10px] font-medium tracking-wider text-emerald-300/40 uppercase hidden sm:block">
          🌾 {cropBadgeLabel}
        </div>
      )}
    </div>
  );
};
