import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import logo from '../../assets/ob.png';

const AnimatedLogo = () => {
  const [revealed, setRevealed] = useState(false);
  const [afterEffectStarted, setAfterEffectStarted] = useState(false);
  const crystalControls = useAnimation();
  const particleCount = 20;

  useEffect(() => {
    let isMounted = true;

    const startReveal = async () => {
      if (!isMounted) return;

      // Initial dramatic reveal animation
      await crystalControls.start({
        rotateY: [0, 720],
        rotateX: [45, 0],
        scale: [0, 1.5, 1],
        opacity: [0, 1],
        filter: ['blur(40px)', 'blur(0px)'],
        transition: {
          duration: 2.5,
          ease: [0.6, 0.01, -0.05, 0.95],
          times: [0, 0.7, 1],
        },
      });

      if (!isMounted) return;
      setRevealed(true);

      // Complex continuous animation
      crystalControls.start({
        y: [0, -15, 0],
        rotateY: [0, 360],
        scale: [1, 1.05, 1],
        transition: {
          y: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotateY: {
            duration: 15,
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
      {/* Orbital particles */}
      {revealed && (
        <div className="absolute inset-0">
          {[...Array(particleCount)].map((_, i) => {
            const angle = (360 / particleCount) * i;
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-obsidium-400/30"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [
                    Math.cos(angle * (Math.PI / 180)) * 100,
                    Math.cos((angle + 360) * (Math.PI / 180)) * 100,
                  ],
                  y: [
                    Math.sin(angle * (Math.PI / 180)) * 100,
                    Math.sin((angle + 360) * (Math.PI / 180)) * 100,
                  ],
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * (3 / particleCount),
                }}
              />
            );
          })}
        </div>
      )}

      {/* Energy field */}
      {revealed && (
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
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
          filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.6))',
        }}
        className="absolute inset-0"
      />

      {/* Pulsing rings */}
      {afterEffectStarted && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              animate={{
                scale: [1, 2],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut',
                delay: i * 0.6,
              }}
              style={{
                border: '2px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '50%',
              }}
            />
          ))}
        </>
      )}

      {/* Shimmering overlay */}
      {revealed && (
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(45deg, transparent 0%, rgba(59,130,246,0.3) 50%, transparent 100%)',
              'linear-gradient(45deg, transparent 100%, rgba(59,130,246,0.3) 50%, transparent 0%)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            mixBlendMode: 'overlay',
          }}
        />
      )}

      {/* Energy sparks */}
      {revealed && (
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-6 bg-obsidium-400/50"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: 'center',
              }}
              animate={{
                rotate: [i * 45, i * 45 + 360],
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedLogo;