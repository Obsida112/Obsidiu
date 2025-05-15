import { useEffect } from 'react';
import HeroSection from '../components/Home/HeroSection';
import ServicesSection from '../components/Home/ServicesSection';
import WhyChooseUsSection from '../components/Home/WhyChooseUsSection';
import ClientsSection from '../components/Home/ClientsSection';
import MockupSection from '../components/Home/MockupSection';
import CtaSection from '../components/Home/CtaSection';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Obsidium | Web Development Company';
  }, []);
  
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <MockupSection />
      <ClientsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;