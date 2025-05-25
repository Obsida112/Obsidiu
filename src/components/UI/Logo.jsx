import React from 'react';
import logo from '../../assets/ob.webp';

const Logo = ({ color = 'currentColor', size = 'default' }) => {
  const textColor = color === 'white' ? 'text-white' : 'text-gray-900 dark:text-white';
  
  const logoSizes = {
    default: 'w-8 h-10',
    wide: 'w-16 h-20'
  };

  const textSizes = {
    default: 'text-xl',
    wide: 'text-2xl'
  };

  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="Logo" className={`${logoSizes[size]}`} />
      <span className={`font-bold ${textSizes[size]} ${textColor}`}>
        Obsidium
      </span>
    </div>
  );
};

export default Logo;