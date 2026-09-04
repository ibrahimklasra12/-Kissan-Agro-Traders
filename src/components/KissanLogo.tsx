import React from 'react';

interface KissanLogoProps {
  className?: string;
  size?: number | string;
  animated?: boolean;
}

export const KissanLogo: React.FC<KissanLogoProps> = ({
  className = '',
  size = 48,
  animated = true,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${
        animated ? 'group' : ''
      } ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Kissan Agro Traders Official Emblem Logo"
    >
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full transform transition-all duration-500 ease-out ${
          animated
            ? 'hover:scale-105 hover:brightness-105 drop-shadow-[0_4px_12px_rgba(14,78,52,0.35)]'
            : ''
        }`}
      >
        <defs>
          {/* Outer Ring Gold Gradient */}
          <linearGradient id="goldRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9DF88" />
            <stop offset="35%" stopColor="#E5B74B" />
            <stop offset="70%" stopColor="#D29930" />
            <stop offset="100%" stopColor="#F5D678" />
          </linearGradient>

          {/* Deep Forest Green Base */}
          <radialGradient id="greenBgGrad" cx="45%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#135E40" />
            <stop offset="65%" stopColor="#0A452D" />
            <stop offset="100%" stopColor="#063220" />
          </radialGradient>

          {/* Wheat and Gold Elements Gradient */}
          <linearGradient id="wheatGold" x1="20%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#FDEAB0" />
            <stop offset="50%" stopColor="#ECC463" />
            <stop offset="100%" stopColor="#D9A334" />
          </linearGradient>

          {/* Subtle Ambient Glow */}
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Diagonal Long Shadow Mask */}
          <clipPath id="innerCircleClip">
            <circle cx="250" cy="250" r="218" />
          </clipPath>
        </defs>

        {/* Outer Golden Border Rim */}
        <circle cx="250" cy="250" r="242" fill="url(#goldRingGrad)" stroke="#B37E22" strokeWidth="3" />

        {/* Inner Circle Fill Clip */}
        <g clipPath="url(#innerCircleClip)">
          {/* Emerald Green Background */}
          <circle cx="250" cy="250" r="220" fill="url(#greenBgGrad)" />

          {/* Diagonal 45-degree shadow from wheat & leaves */}
          <path
            d="M250 45 L390 185 L440 330 L450 450 L340 470 L250 300 Z"
            fill="#032115"
            opacity="0.32"
          />
          <path
            d="M340 210 L470 340 L450 430 L310 320 Z"
            fill="#032115"
            opacity="0.25"
          />

          {/* Central Vertical Golden Line */}
          <line
            x1="250"
            y1="40"
            x2="250"
            y2="460"
            stroke="url(#wheatGold)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Upper Wheat Whisker Awns */}
          <g stroke="url(#wheatGold)" strokeWidth="4.5" strokeLinecap="round">
            <line x1="250" y1="120" x2="250" y2="48" />
            <line x1="243" y1="120" x2="232" y2="52" />
            <line x1="257" y1="120" x2="268" y2="52" />
            <line x1="237" y1="130" x2="218" y2="65" />
            <line x1="263" y1="130" x2="282" y2="65" />
          </g>

          {/* Wheat Grains / Ear (Stylized chevron seeds) */}
          <g fill="url(#wheatGold)" stroke="#093C27" strokeWidth="2.5">
            {/* Top grain pair */}
            <path d="M250 115 C240 100 235 88 250 78 C265 88 260 100 250 115 Z" />
            {/* Tier 2 */}
            <path d="M250 140 C234 125 230 108 248 98 C251 110 250 128 250 140 Z" />
            <path d="M250 140 C266 125 270 108 252 98 C249 110 250 128 250 140 Z" />
            {/* Tier 3 */}
            <path d="M250 168 C230 150 225 130 247 118 C252 132 250 152 250 168 Z" />
            <path d="M250 168 C270 150 275 130 253 118 C248 132 250 152 250 168 Z" />
            {/* Tier 4 */}
            <path d="M250 196 C228 175 222 152 247 140 C252 155 250 178 250 196 Z" />
            <path d="M250 196 C272 175 278 152 253 140 C248 155 250 178 250 196 Z" />
            {/* Tier 5 */}
            <path d="M250 224 C228 200 220 176 247 164 C252 180 250 206 250 224 Z" />
            <path d="M250 224 C272 200 280 176 253 164 C248 180 250 206 250 224 Z" />
          </g>

          {/* Left Leaf (Serrated Wheat Leaf with Veins) */}
          <g>
            <path
              d="M248 290 C215 285 160 270 110 215 C102 205 106 195 118 195 C140 196 155 186 168 178 C176 172 186 178 184 188 C198 185 212 180 225 174 C232 170 240 176 238 184 C250 182 260 178 270 172 C276 168 284 174 282 182 C286 198 280 230 252 285 Z"
              fill="url(#wheatGold)"
              stroke="#083824"
              strokeWidth="2"
            />
            {/* Left Leaf Main Rib & Veins */}
            <path
              d="M248 285 Q190 240 112 200"
              stroke="#083824"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M170 232 L150 215 M195 248 L178 230 M220 265 L208 245"
              stroke="#083824"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M165 228 L185 210 M190 244 L215 222 M215 260 L242 238"
              stroke="#083824"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>

          {/* Right Leaf (Serrated Wheat Leaf with Veins) */}
          <g>
            <path
              d="M252 290 C285 285 340 270 390 215 C398 205 394 195 382 195 C360 196 345 186 332 178 C324 172 314 178 316 188 C302 185 288 180 275 174 C268 170 260 176 262 184 C250 182 240 178 230 172 C224 168 216 174 218 182 C214 198 220 230 248 285 Z"
              fill="url(#wheatGold)"
              stroke="#083824"
              strokeWidth="2"
            />
            {/* Right Leaf Main Rib & Veins */}
            <path
              d="M252 285 Q310 240 388 200"
              stroke="#083824"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M330 232 L350 215 M305 248 L322 230 M280 265 L292 245"
              stroke="#083824"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M335 228 L315 210 M310 244 L285 222 M285 260 L258 238"
              stroke="#083824"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>

          {/* Base Joint */}
          <path
            d="M236 288 L250 300 L264 288 L250 276 Z"
            fill="url(#wheatGold)"
            stroke="#073522"
            strokeWidth="2"
          />

          {/* Typography: KISSAN */}
          <text
            x="250"
            y="356"
            textAnchor="middle"
            fill="url(#wheatGold)"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Montserrat', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="58"
            letterSpacing="3"
          >
            KISSAN
          </text>

          {/* Central Golden Square Dot */}
          <rect
            x="245"
            y="364"
            width="10"
            height="10"
            fill="url(#wheatGold)"
            rx="1.5"
          />

          {/* Typography: AGRO TRADERS */}
          <text
            x="250"
            y="398"
            textAnchor="middle"
            fill="url(#wheatGold)"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Montserrat', 'Segoe UI', sans-serif"
            fontWeight="800"
            fontSize="26"
            letterSpacing="6.5"
          >
            AGRO TRADERS
          </text>
        </g>

        {/* Inner Gold Inset Accent Ring */}
        <circle
          cx="250"
          cy="250"
          r="218"
          fill="none"
          stroke="url(#goldRingGrad)"
          strokeWidth="3.5"
          opacity="0.85"
        />
      </svg>
    </div>
  );
};
