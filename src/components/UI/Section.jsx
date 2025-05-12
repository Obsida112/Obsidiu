import React from 'react';

const Section = ({
  children,
  className = '',
  id,
  background = 'white',
  spacing = 'lg'
}) => {
  const backgroundStyles = {
    white: 'bg-white dark:bg-gray-900',
    light: 'bg-gradient-to-br from-obsidium-50 via-obsidium-100 to-obsidium-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800',
    dark: 'bg-gradient-to-br from-obsidium-900 via-obsidium-800 to-obsidium-700 text-white',
    primary: 'bg-gradient-to-br from-obsidium-600 via-obsidium-500 to-obsidium-400 text-white',
    gradient: 'bg-gradient-to-br from-obsidium-900 via-obsidium-800 to-obsidium-600 text-white'
  };

  const spacingStyles = {
    none: 'py-0',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-20',
    xl: 'py-20 md:py-32'
  };

  return (
    <section 
      id={id}
      className={`relative overflow-hidden ${backgroundStyles[background]} ${spacingStyles[spacing]} ${className}`}
    >
      {/* Animated background elements for gradient backgrounds */}
      {(background === 'gradient' || background === 'dark' || background === 'primary' || background === 'light') && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${
                background === 'light'
                  ? 'bg-obsidium-200/10 dark:bg-obsidium-500/10'
                  : 'bg-obsidium-500/10'
              }`}
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-${i} ${Math.random() * 5 + 5}s infinite alternate ease-in-out`,
              }}
            />
          ))}
        </div>
      )}

      {/* Radial gradient overlay */}
      {(background === 'gradient' || background === 'dark' || background === 'primary' || background === 'light') && (
        <div className={`absolute inset-0 bg-gradient-radial ${
          background === 'light'
            ? 'from-obsidium-200/20 dark:from-obsidium-500/20'
            : 'from-obsidium-500/20'
        } to-transparent`}></div>
      )}

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {children}
      </div>

      <style jsx>{`
        @keyframes float-0 { to { transform: translate(20px, 20px); } }
        @keyframes float-1 { to { transform: translate(-20px, 30px); } }
        @keyframes float-2 { to { transform: translate(30px, -20px); } }
        @keyframes float-3 { to { transform: translate(-25px, -25px); } }
        @keyframes float-4 { to { transform: translate(25px, 25px); } }
      `}</style>
    </section>
  );
};

export default Section;