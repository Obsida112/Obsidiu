import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../UI/Button';
import AnimatedLogo from '../UI/AnimatedLogo';

const HeroWithServices = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]); // Parallax movement only for Hero

  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }), []);

  const titleWords = [
    { text: "Crafting", className: "text-white" },
    { text: "Digital", className: "text-obsidium-300" },
    { text: "Experiences", className: "text-obsidium-300" },
    { text: "That", className: "text-white" },
    { text: "Define", className: "text-white" },
    { text: "Success", className: "text-obsidium-300" }
  ];

  const backgroundElements = useMemo(() =>
    [...Array(2)].map(() => ({
      width: Math.random() * 200 + 100,
      height: Math.random() * 200 + 100,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${Math.random() * 3 + 5}s`
    }))
  , []);

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative min-h-screen bg-gradient-to-br from-obsidium-900 via-obsidium-800 to-obsidium-600 flex items-center overflow-hidden"
        style={{ y }}
      >
        {/* Parallax background elements */}
        {backgroundElements.map((element, i) => (
          <div
            key={i}
            className="absolute bg-obsidium-500/10 rounded-full animate-float"
            style={{
              width: element.width,
              height: element.height,
              left: element.left,
              top: element.top,
              animationDelay: element.animationDelay,
              animationDuration: element.animationDuration,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(88,130,193,0.1)_0%,transparent_100%)] pointer-events-none" />

        {/* Hero content */}
        <div className="container mx-auto px-4 relative z-10 py-20 lg:py-0">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              className="max-w-2xl text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.5, staggerChildren: 0.1 }
                }
              }}
            >
              <motion.div className="mb-8" variants={fadeIn}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-2">
                  {titleWords.map((word, index) => (
                    <motion.span
                      key={index}
                      className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${word.className}`}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            type: "spring",
                            damping: 12,
                            stiffness: 100
                          }
                        }
                      }}
                    >
                      {word.text}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.p
                variants={fadeIn}
                className="text-base sm:text-lg lg:text-xl text-obsidium-100 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                From stunning websites to powerful web applications, we bring your digital vision to life with expert design and development.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  className="bg-obsidium-500 hover:bg-obsidium-600 group w-full sm:w-auto"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Let's work together
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Logo */}
            <motion.div
              className="w-full lg:w-1/2 flex justify-center relative lg:translate-x-4 lg:ml-28"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(88,130,193,0.3)_0%,transparent_100%)] blur-3xl pointer-events-none"></div>
              <div className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px] xl:max-w-[500px]">
                {showLogo && <AnimatedLogo className="w-full h-full" />}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll down arrow */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <a
            href="#services"
            className="text-obsidium-300 hover:text-obsidium-200 transition-colors animate-[soft-bounce_2s_infinite]"
            aria-label="Scroll down"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>

    
    </>
  );
};

export default HeroWithServices;
