import React from 'react';

interface StarProps {
  variant?: 'small' | 'medium' | 'large';
  color?: string;
  animationDelay?: string;
}

const Star: React.FC<StarProps> = ({
  variant = 'medium',
  color = 'currentColor',
  animationDelay = '0s',
}) => {
  const sizeMap = {
    small: '12px',
    medium: '20px',
    large: '28px',
  };

  return (
    <svg
      width={sizeMap[variant]}
      height={sizeMap[variant]}
      viewBox="0 0 24 24"
      fill={color}
      style={{
        animation: 'star-twinkle 3s ease-in-out infinite',
        animationDelay,
        filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.6))',
        display: 'block',
      }}
    >
      <defs>
        <filter id={`glow-${variant}`}>
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        filter={`url(#glow-${variant})`}
      />
    </svg>
  );
};

export default Star;
