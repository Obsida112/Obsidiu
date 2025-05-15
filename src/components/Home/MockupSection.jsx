import React from 'react';
import { motion } from 'framer-motion';
import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle';
import logo from '../../assets/ob.png';

const MockupSection = () => {
  return (
    <Section background="light">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <SectionTitle
          title="Responsive Design"
          subtitle="Our websites look great and function perfectly across all devices"
        />

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-radial from-obsidium-500/20 to-transparent blur-3xl"></div>
          <img
            src="../../assets/mockup.png"
            alt="Responsive design mockup showing website on different devices"
            className="w-full h-auto rounded-lg shadow-2xl relative z-10"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default MockupSection;