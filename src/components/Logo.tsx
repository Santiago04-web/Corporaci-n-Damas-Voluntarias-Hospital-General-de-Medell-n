import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'badge';
  className?: string;
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '', lightMode = false }) => {
  if (variant === 'icon') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="w-10 h-10 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Peach Heart */}
          <path d="M50 46 C42 32 26 36 26 48 C26 58 40 68 50 76 C60 68 74 58 74 48 C74 36 58 32 50 46 Z" fill="#E79E85"/>
          {/* Left Hand */}
          <path d="M 22 64 C 18 54 25 42 32 30 C 34 37 30 48 36 55 C 39 58 44 55 44 51 C 44 45 40 40 42 34 C 45 38 49 46 48 52 C 47 60 40 72 30 73 C 24 73 22 68 22 64 Z" fill={lightMode ? "#FAF7F2" : "#164E3D"} />
          {/* Right Hand */}
          <path d="M 78 64 C 82 54 75 42 68 30 C 66 37 70 48 64 55 C 61 58 56 55 56 51 C 56 45 60 40 58 34 C 55 38 51 46 52 52 C 53 60 60 72 70 73 C 76 73 78 68 78 64 Z" fill={lightMode ? "#FAF7F2" : "#164E3D"} />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Graphic */}
      <div className="relative shrink-0 w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#E79E85]/40 shadow-sm flex items-center justify-center p-1.5 transition-transform hover:scale-105">
        <img
          src="/assets/logo-emblem.jpg"
          alt="Corporación Damas Voluntarias Logo"
          className="w-full h-full object-contain rounded-full"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <svg viewBox="0 0 100 100" className="w-8 h-8 hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 46 C42 32 26 36 26 48 C26 58 40 68 50 76 C60 68 74 58 74 48 C74 36 58 32 50 46 Z" fill="#E79E85"/>
          <path d="M 22 64 C 18 54 25 42 32 30 C 34 37 30 48 36 55 C 39 58 44 55 44 51 C 44 45 40 40 42 34 C 45 38 49 46 48 52 C 47 60 40 72 30 73 C 24 73 22 68 22 64 Z" fill="#164E3D"/>
          <path d="M 78 64 C 82 54 75 42 68 30 C 66 37 70 48 64 55 C 61 58 56 55 56 51 C 56 45 60 40 58 34 C 55 38 51 46 52 52 C 53 60 60 72 70 73 C 76 73 78 68 78 64 Z" fill="#164E3D"/>
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <span className={`text-[10px] tracking-[0.2em] uppercase font-bold ${lightMode ? 'text-[#E79E85]' : 'text-[#164E3D]'}`}>
          Corporación
        </span>
        <span className={`text-base sm:text-lg font-serif-title font-semibold leading-tight ${lightMode ? 'text-white' : 'text-[#164E3D]'}`}>
          Damas Voluntarias
        </span>
        <span className={`text-[9px] tracking-wider font-medium opacity-80 ${lightMode ? 'text-gray-200' : 'text-gray-600'}`}>
          Hospital General de Medellín
        </span>
      </div>
    </div>
  );
};
