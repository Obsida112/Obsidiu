import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import logo from '../../assets/ob.png';

const AnimatedLogo = () => {
  const [revealed, setRevealed] = useState(false);
  const [afterEffectStarted, setAfterEffectStarted] = useState(false);
  const crystalControls = useAnimation();
  const particleCount = 12; // Number of floating particles

  useEffect(() => {
    let isMounted = true;

    const startReveal = async () => {
      if (!isMounted) return;

      // Initial reveal animation
      await crystalControls.start({
        rotateY: [0, 360],
        scale: [0, 1.2, 1],
        opacity: [0, 1],
        filter: ['blur(20px)', 'blur(0px)'],
        transition: {
          duration: 2,
          ease: 'easeOut',
          times: [0, 0.7, 1],
        },
      });

      if (!isMounted) return;
      setRevealed(true);

      // Continuous floating animation
      crystalControls.start({
        y: [0, -20, 0],
        rotateY: [0, 360],
        scale: [1, 1.05, 1],
        transition: {
          y: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotateY: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          },
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'reverse',
          },
        },
      });

      setTimeout(() => {
        if (isMounted) setAfterEffectStarted(true);
      }, 1000);
    };

    startReveal();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-[300px] h-[400px] relative flex items-center justify-center">
      {/* Particle effects */}
      {revealed && (
        <div className="absolute inset-0">
          {[...Array(particleCount)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-obsidium-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {/* Main logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={crystalControls}
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${logo})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'drop-shadow(0 20px 30px rgba(59, 130, 246, 0.6))',
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-0"
      />

      {/* Glowing orb background */}
      {revealed && (
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.4), transparent 70%)',
            filter: 'blur(40px)',
            zIndex: -1,
          }}
        />
      )}

      {/* Energy rings */}
      {afterEffectStarted && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.5],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
            className="absolute inset-0 rounded-full border-2 border-obsidium-400/30"
          />
          <motion.div
            animate={{
              scale: [1, 1.5],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
              delay: 1,
            }}
            className="absolute inset-0 rounded-full border-2 border-obsidium-400/30"
          />
        </>
      )}

      {/* Shimmering effect */}
      {revealed && (
        <motion.div
          animate={{
            opacity: [0, 0.5, 0],
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, transparent, rgba(59,130,246,0.3), transparent)',
            mixBlendMode: 'overlay',
          }}
        />
      )}
    </div>
  );
};

export default AnimatedLogo;