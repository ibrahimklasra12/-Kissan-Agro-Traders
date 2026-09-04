/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopNoticeBar } from './components/TopNoticeBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WebCreatorCard } from './components/WebCreatorCard';
import { CategoryHighlights } from './components/CategoryHighlights';
import { ProductsSection } from './components/ProductsSection';
import { OffersSection } from './components/OffersSection';
import { DroneServicesSection } from './components/DroneServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomerReviews } from './components/CustomerReviews';
import { AboutSection } from './components/AboutSection';
import { ContactMapSection } from './components/ContactMapSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DroneBookingModal } from './components/DroneBookingModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'pesticides' | 'fertilizers' | 'seeds' | 'drone'
  >('all');
  const [isGlobalDroneBookingOpen, setIsGlobalDroneBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'services', 'offers', 'why-choose-us', 'reviews', 'about', 'contact'];
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
    <div className="min-h-screen bg-surface flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* 1. Top Notice Announcement & Contact Bar */}
      <TopNoticeBar />

      {/* 2. Primary Navigation */}
      <Navbar activeSection={activeSection} />

      {/* 3. Main Content Container */}
      <main className="flex-1">
        {/* Hero Section (Preserved) */}
        <HeroSection />

        {/* 9. Ibrahim Klasra - Web Creator Feature Card */}
        <WebCreatorCard />

        {/* 1. Hamari Services (5 Pillars: Pesticide, Fertilizer, Seeds, Drone Spray, Free Delivery) */}
        <CategoryHighlights
          onSelectCategory={(category) => setSelectedCategory(category)}
          onOpenDroneBooking={() => setIsGlobalDroneBookingOpen(true)}
        />

        {/* 2 & 3. Products Showcase, Categories & Real-time Search */}
        <ProductsSection
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* 7. Precision Drone Spray Mechanization with dedicated booking */}
        <DroneServicesSection />

        {/* Special Seasonal Bundles & Bulk Deals */}
        <OffersSection />

        {/* 10. Institutional Pillars: Why Choose Us (Kyun Kissan Agro Traders?) */}
        <WhyChooseUs />

        {/* 4. Customer Reviews: Hamare Customers Ka Aitmaad */}
        <CustomerReviews />

        {/* Heritage & Owner Section (Preserved) */}
        <AboutSection />

        {/* 5 & 6. Shop Location (Hamari Location) & Contact Section */}
        <ContactMapSection />
      </main>

      {/* Complete Footer (Preserved) */}
      <Footer />

      {/* 8. Floating Quick Action WhatsApp Button (💬 WhatsApp Karein) */}
      <FloatingWhatsApp />

      {/* Global Drone Spray Booking Modal */}
      <DroneBookingModal
        isOpen={isGlobalDroneBookingOpen}
        onClose={() => setIsGlobalDroneBookingOpen(false)}
      />
    </div>
  );
}
