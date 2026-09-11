import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'monogram';
  theme?: 'dark' | 'light';
  className?: string;
  onClick?: () => void;
  iconSize?: number;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  className = '',
  onClick,
  iconSize,
}) => {
  const isLight = theme === 'light';
  const textColor = isLight ? 'text-white' : 'text-[#1C1A18]';
  const subTextColor = isLight ? 'text-stone-300' : 'text-[#6E675F]';

  // Exact 1:1 reproduction of the user's uploaded Shenk Design logo image:
  // - Clean square with signature sky/powder cerulean blue (#9BC0DC)
  // - Perfectly proportioned architectural white box in the center (38% width, with generous blue margins)
  // - Right wall breaks at bottom with crisp 45° diagonal pointer branch extending outward
  // - Upward corner return stub on bottom right
  // - Centered geometric 'S' glyph
  const LogoIcon = ({ size = 38 }: { size?: number }) => (
    <div
      className="relative shrink-0 overflow-hidden shadow-xs transition-transform duration-300 group-hover:scale-105"
      style={{
        width: size,
        height: size,
        borderRadius: size > 40 ? 6 : 4,
        backgroundColor: '#9BC0DC',
      }}
      aria-hidden="true"
    >
      <img
        src="/logo.svg"
        alt="Shenk Design Logo"
        className="w-full h-full object-cover select-none"
        draggable={false}
      />
    </div>
  );

  if (variant === 'monogram') {
    return (
      <div
        onClick={onClick}
        className={`inline-flex items-center cursor-pointer group ${className}`}
        title="Shenk Design"
      >
        <LogoIcon size={iconSize || 38} />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div
        onClick={onClick}
        className={`inline-flex flex-col items-center cursor-pointer group select-none text-center ${className}`}
      >
        <LogoIcon size={iconSize || 44} />
        <div className="mt-3">
          <span
            className={`block font-serif tracking-[0.24em] text-lg font-medium uppercase leading-tight ${textColor}`}
          >
            SHENK
          </span>
          <span
            className={`block font-sans text-[9px] uppercase tracking-[0.3em] font-normal mt-0.5 ${subTextColor}`}
          >
            DESIGN LLC
          </span>
        </div>
      </div>
    );
  }

  // Default horizontal
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3.5 cursor-pointer group select-none ${className}`}
    >
      <LogoIcon size={iconSize || 38} />
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif tracking-[0.22em] text-[17px] font-medium uppercase leading-none ${textColor}`}
        >
          SHENK
        </span>
        <span
          className={`font-sans text-[8.5px] uppercase tracking-[0.32em] font-normal mt-1 ${subTextColor}`}
        >
          DESIGN LLC
        </span>
      </div>
    </div>
  );
};
