import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/ob.webp'; // Replace with a .webp or .svg if possible for better performance

const AnimatedLogo = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-[300px] h-[400px] flex items-center justify-center will-change-transform transform-gpu">
      {/* Use <img> for better mobile GPU performance */}
      <motion.img
        src={logo}
        alt="Logo"
        className="w-full h-full object-contain"
        initial={{
          scale: 0.8,
          opacity: 0,
          filter: 'blur(10px)',
          transform: 'translate3d(0, 0, 0)',
        }}
        animate={{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          transition: {
            duration: 1.2,
            ease: 'easeOut',
          },
        }}
        style={{
          willChange: 'transform, opacity, filter',
        }}
      />

      {/* Glow effect only on non-mobile devices */}
      {revealed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none hidden sm:block"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.2), transparent)',
            filter: 'blur(40px)',
            willChange: 'opacity, transform',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
      )}
    </div>
  );
};

export default React.memo(AnimatedLogo);
