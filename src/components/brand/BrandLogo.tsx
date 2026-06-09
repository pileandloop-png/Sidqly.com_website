import React from 'react';
import { brand } from '../../config/brand';

interface BrandLogoProps {
  variant?: 'default' | 'dark' | 'light' | 'mark';
  className?: string;
  showText?: boolean;
}

const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'default',
  className = "h-8",
  showText = true
}) => {
  const logoPath = variant === 'mark'
    ? '/brand/sidqly-mark.svg'
    : `/brand/sidqly-logo${variant === 'default' ? '' : `-${variant}`}.svg`;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logoPath}
        alt={brand.name}
        className="h-full w-auto object-contain"
      />
    </div>
  );
};

export default BrandLogo;
