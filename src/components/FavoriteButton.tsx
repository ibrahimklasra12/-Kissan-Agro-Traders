import React, { useState } from 'react';
import { useFavorites } from '../context/FavoritesContext';

interface FavoriteButtonProps {
  productId: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  productId,
  className = '',
  size = 'md',
  showLabel = false,
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(productId);
  const [animating, setAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setAnimating(true);
    toggleFavorite(productId);
    setTimeout(() => setAnimating(false), 300);
  };

  const iconSizes = {
    sm: 'text-[16px]',
    md: 'text-[20px]',
    lg: 'text-[24px]',
  };

  return (
    <button
      type="button"
      id={`fav-btn-${productId}`}
      onClick={handleClick}
      aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
      title={active ? 'Remove from favorites / پسندیدہ سے ہٹائیں' : 'Add to favorites / پسندیدہ میں شامل کریں'}
      className={`inline-flex items-center justify-center gap-1.5 rounded-full transition-all duration-200 cursor-pointer select-none active:scale-90 ${
        active
          ? 'text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 shadow-xs'
          : 'text-slate-400 hover:text-rose-500 bg-white/90 hover:bg-white border border-slate-200/80 shadow-2xs'
      } ${
        showLabel
          ? 'px-3 py-1.5 text-xs font-bold'
          : size === 'sm'
          ? 'w-7 h-7'
          : size === 'lg'
          ? 'w-10 h-10'
          : 'w-8.5 h-8.5'
      } ${className}`}
    >
      <span
        className={`inline-block transition-transform duration-200 ${
          animating ? 'scale-135' : 'scale-100'
        } ${iconSizes[size]}`}
      >
        {active ? '❤️' : '♡'}
      </span>
      {showLabel && (
        <span className="font-semibold text-xs whitespace-nowrap">
          {active ? 'Favorited' : 'Favorite'}
        </span>
      )}
    </button>
  );
};
