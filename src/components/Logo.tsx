import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark', showTagline = false }) => {
  const [imageError, setImageError] = useState(false);
  const isDarkBg = variant === 'light'; // variant 'light' means light text for dark background

  // Google Drive direct image links for ID: 1hWnzMb53ymJux2aTUhpXNc9zUog5Hbr1
  const googleDriveLogoUrl = 'https://lh3.googleusercontent.com/d/1hWnzMb53ymJux2aTUhpXNc9zUog5Hbr1';
  const googleDriveFallbackUrl = 'https://drive.google.com/uc?export=view&id=1hWnzMb53ymJux2aTUhpXNc9zUog5Hbr1';

  const [currentSrc, setCurrentSrc] = useState(googleDriveLogoUrl);

  const primaryTextColor = isDarkBg ? '#FFFFFF' : '#111111';
  const orangeColor = '#E86A2D';
  const featherGreen = isDarkBg ? '#2DD4BF' : '#0D5C46';
  const featherGreenLight = isDarkBg ? '#5EEAD4' : '#108E6C';

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {!imageError ? (
        <img
          src={currentSrc}
          alt="Madhav Enterprise Logo"
          onError={() => {
            if (currentSrc === googleDriveLogoUrl) {
              setCurrentSrc(googleDriveFallbackUrl);
            } else {
              setImageError(true);
            }
          }}
          className="h-14 sm:h-16 md:h-20 lg:h-22 w-auto object-contain drop-shadow-sm transition-transform duration-300 hover:scale-[1.02]"
          referrerPolicy="no-referrer"
        />
      ) : (
        /* Fallback Vector Logo combining ME Monogram, Brand Typography, and Mor Pankh */
        <svg
          viewBox="0 0 780 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 sm:h-15 md:h-18 lg:h-20 w-auto drop-shadow-sm transition-transform duration-300 hover:scale-[1.01]"
        >
          {/* 1. ME MONOGRAM */}
          <g id="monogram" transform="translate(10, 15)">
            <path
              d="M 10 180 L 10 20 L 38 20 L 72 105 L 106 20 L 134 20 L 134 180 L 106 180 L 106 72 L 79 138 L 65 138 L 38 72 L 38 180 Z"
              fill={primaryTextColor}
            />
            <path
              d="M 106 95 L 180 95 L 180 120 L 132 120 L 132 132 L 175 132 L 175 152 L 132 152 L 132 160 L 180 160 L 180 180 L 106 180 Z"
              fill={orangeColor}
            />
          </g>

          {/* 2. BRAND NAME TEXT */}
          <g id="brand-text" transform="translate(210, 35)">
            <text
              x="0"
              y="85"
              fontFamily="'Syne', 'Plus Jakarta Sans', Arial, sans-serif"
              fontWeight="800"
              fontSize="84"
              fill={primaryTextColor}
              letterSpacing="3"
            >
              MADHAV
            </text>
            <text
              x="5"
              y="142"
              fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
              fontWeight="700"
              fontSize="38"
              fill={orangeColor}
              letterSpacing="15"
            >
              ENTERPRISE
            </text>
            {showTagline && (
              <text
                x="5"
                y="178"
                fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
                fontWeight="600"
                fontSize="18"
                fill={isDarkBg ? '#A3A3A3' : '#666666'}
                letterSpacing="3"
              >
                MFR. &amp; SUPPLIER • VADODARA
              </text>
            )}
          </g>

          {/* 3. PEACOCK FEATHER */}
          <g id="peacock-feather" transform="translate(635, 5)">
            <path d="M 20 200 C 45 150 70 100 85 10" stroke={featherGreen} strokeWidth="3.5" strokeLinecap="round" />
            <path d="M 25 190 C 5 180 -10 160 5 150 M 28 180 C 60 175 75 165 60 155" stroke={featherGreen} strokeWidth="1.8" opacity="0.85" />
            <path d="M 32 170 C 10 155 -5 135 12 125 M 36 160 C 70 150 82 140 68 128" stroke={featherGreenLight} strokeWidth="1.8" opacity="0.85" />
            <path d="M 42 145 C 15 130 0 110 20 100 M 48 135 C 80 125 92 112 78 102" stroke={featherGreenLight} strokeWidth="1.8" opacity="0.9" />
            <path d="M 52 120 C 20 105 5 80 30 70 M 58 110 C 95 100 108 85 90 72" stroke={featherGreenLight} strokeWidth="2" />
            <path d="M 62 95 C 25 80 10 55 38 45 M 70 85 C 105 75 118 58 98 48" stroke={featherGreenLight} strokeWidth="2" />
            <g transform="translate(62, 15) rotate(-10)">
              <ellipse cx="20" cy="22" rx="28" ry="36" fill={featherGreen} opacity="0.35" />
              <ellipse cx="20" cy="22" rx="22" ry="28" fill="#D49E35" />
              <ellipse cx="20" cy="22" rx="17" ry="22" fill={orangeColor} />
              <ellipse cx="20" cy="24" rx="12" ry="15" fill="#1B365D" />
              <ellipse cx="20" cy="25" rx="7" ry="8" fill="#00A896" />
              <ellipse cx="20" cy="26" rx="3.5" ry="4" fill="#110B29" />
            </g>
          </g>
        </svg>
      )}
    </div>
  );
};


