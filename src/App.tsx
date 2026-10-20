import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VisionSection from './components/VisionSection';
import ServicesSection from './components/ServicesSection';
import Works from './components/Works';
import WhyUsSection from './components/WhyUsSection';
import FaqSection from './components/FaqSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('branding');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceAndScroll = (serviceId: string) => {
    setSelectedService(serviceId);
    scrollToSection('engage');
  };

  const handleEngageSimilar = (category: string) => {
    setSelectedService(category);
    scrollToSection('engage');
  };

  return (
    <div className="min-h-screen bg-[#050806] text-white flex flex-col selection:bg-[#10b981] selection:text-black font-sans antialiased">
      {/* 1-Page Navigation Bar */}
      <Navbar onNavigateSection={scrollToSection} />

      {/* Main Single-Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section with 2 Core CTAs & Capabilities Ticker */}
        <HeroSection onNavigateSection={scrollToSection} />

        {/* 2. Vision & Philosophy with Collapsible Manifesto */}
        <VisionSection onEngageClick={() => scrollToSection('engage')} />

        {/* 3. Services & Capabilities */}
        <ServicesSection onSelectService={handleSelectServiceAndScroll} />

        {/* 4. Selected Works & Portfolio Gallery */}
        <Works onEngageSimilar={handleEngageSimilar} />

        {/* 5. Why Choose Us (Ordinary Agency vs. Seed Intelligenze) */}
        <WhyUsSection onEngage={() => scrollToSection('engage')} />

        {/* 6. Frequently Asked Questions */}
        <FaqSection />

        {/* 7. Engagement & Project Intake Form */}
        <Contact initialCategory={selectedService} />
      </main>

      {/* Footer */}
      <Footer onNavigateSection={scrollToSection} />
    </div>
  );
}
