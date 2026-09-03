/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopNoticeBar } from './components/TopNoticeBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryHighlights } from './components/CategoryHighlights';
import { ProductsSection } from './components/ProductsSection';
import { OffersSection } from './components/OffersSection';
import { DroneServicesSection } from './components/DroneServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { ContactMapSection } from './components/ContactMapSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'pesticides' | 'fertilizers' | 'seeds' | 'drone'
  >('all');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'services', 'offers', 'about', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* 1. Top Notice Announcement & Contact Bar */}
      <TopNoticeBar />

      {/* 2. Primary Navigation */}
      <Navbar activeSection={activeSection} />

      {/* 3. Main Content Container */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* 4-Pillar Category Highlights */}
        <CategoryHighlights
          onSelectCategory={(category) => setSelectedCategory(category)}
        />

        {/* Products Showcase & Advisory Filter */}
        <ProductsSection
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Precision Drone Spray Mechanization */}
        <DroneServicesSection />

        {/* Special Seasonal Bundles & Bulk Deals */}
        <OffersSection />

        {/* Institutional Pillars: Why Choose Us */}
        <WhyChooseUs />

        {/* Heritage & Creator Feature */}
        <AboutSection />

        {/* Interactive Store Location & Directions */}
        <ContactMapSection />
      </main>

      {/* 4. Complete Footer */}
      <Footer />

      {/* 5. Floating Quick Action WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

