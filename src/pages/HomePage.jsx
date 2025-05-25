import { useEffect } from 'react';
import HeroSection from '../components/Home/HeroSection';
import ServicesSection from '../components/Home/ServicesSection';
import WhyChooseUsSection from '../components/Home/WhyChooseUsSection';
import ClientsSection from '../components/Home/ClientsSection';
import FaqSection from '../components/Home/FaqSection';
import CtaSection from '../components/Home/CtaSection';
import Responsive from '../components/Home/Responsive';
import SEO from '../components/UI/SEO';

<SEO 
  title="Obsidium – Expert Web Development & Design Services"
  description="Obsidium offers tailored web development, e-commerce platforms, and digital solutions for businesses ready to grow online. Fast, modern, and SEO-friendly websites."
  canonical="https://www.obsidium.dev/"
  ogTitle="Obsidium – Expert Web Development & Design Services"
  ogDescription="Launch your business online with high-performance websites crafted by Obsidium. Specialized in modern design and development."
  ogUrl="https://www.obsidium.dev/"
  ogImage="https://www.obsidium.dev/images/preview-home.jpg"
/>

const HomePage = () => {
  return (
    <>
      <SEO 
        title="Web Development Company"
        description="Transform your digital presence with expert web development services. Custom websites, e-commerce solutions, and web applications built for success."
      />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <Responsive />
      <FaqSection />
      <CtaSection />
    </>
  );
};

export default HomePage;