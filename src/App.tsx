/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopNoticeBar } from './components/TopNoticeBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WebCreatorCard } from './components/WebCreatorCard';
import { BusinessStats } from './components/BusinessStats';
import { CategoryHighlights } from './components/CategoryHighlights';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ProductsSection } from './components/ProductsSection';
import { CropAdvisorySection } from './components/CropAdvisorySection';
import { DroneServicesSection } from './components/DroneServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { OffersSection } from './components/OffersSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BrandSignatureBanner } from './components/BrandSignatureBanner';
import { CustomerReviews } from './components/CustomerReviews';
import { AboutSection } from './components/AboutSection';
import { ContactMapSection } from './components/ContactMapSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DroneBookingModal } from './components/DroneBookingModal';
import { CropAdvisoryModal } from './components/CropAdvisoryModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { InquiryDrawer } from './components/InquiryDrawer';
import { InquiryToast } from './components/InquiryToast';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { InquiryCartProvider } from './context/InquiryCartContext';
import { Product } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'pesticides' | 'fertilizers' | 'seeds' | 'drone'
  >('all');
  const [isGlobalDroneBookingOpen, setIsGlobalDroneBookingOpen] = useState(false);
  const [isGlobalCropAdvisoryOpen, setIsGlobalCropAdvisoryOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  useEffect(() => {
    const sections = [
      'home',
      'featured-products',
      'products',
      'services',
      'crop-advisory',
      'how-it-works',
      'offers',
      'why-choose-us',
      'reviews',
      'about',
      'contact',
    ];
    const handleScroll = () => {
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
    <InquiryCartProvider>
      <div className="min-h-screen bg-surface flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
        {/* 1. Top Notice Announcement & Contact Bar */}
        <TopNoticeBar />

        {/* 2. Primary Navigation */}
        <Navbar activeSection={activeSection} />

        {/* 3. Main Content Container */}
        <main className="flex-1">
          {/* Existing Hero Section (Strictly Preserved) */}
          <HeroSection />

          {/* Existing Ibrahim Klasra - Web Creator Feature Card (Strictly Preserved) */}
          <WebCreatorCard />

          {/* 9. 📊 Trust / Business Statistics Section */}
          <BusinessStats />

          {/* 2. 🚜 Our Services — Interactive Cards (Pesticides, Fertilizers, Seeds, Drone, Free Delivery, Crop Advisory) */}
          <CategoryHighlights
            onSelectCategory={(category) => setSelectedCategory(category)}
            onOpenDroneBooking={() => setIsGlobalDroneBookingOpen(true)}
            onOpenCropAdvisory={() => setIsGlobalCropAdvisoryOpen(true)}
          />

          {/* 8. 🛍️ Featured Products Showcase */}
          <FeaturedProducts
            onSelectProduct={(product) => setSelectedProductForModal(product)}
          />

          {/* Existing Products Showcase, Full Catalog, Categories & Real-time Search */}
          <ProductsSection
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onSelectProduct={(product) => setSelectedProductForModal(product)}
          />

          {/* 4. 🌱 Crop Advisory Section & Modal Trigger */}
          <CropAdvisorySection
            onOpenAdvisoryModal={() => setIsGlobalCropAdvisoryOpen(true)}
          />

          {/* 3. 🚁 Precision Drone Spray Mechanization with Prominent Booking Banner */}
          <DroneServicesSection
            onOpenBookingModal={() => setIsGlobalDroneBookingOpen(true)}
          />

          {/* 10. 📦 How It Works — 3 Steps Process */}
          <HowItWorks />

          {/* Existing Special Seasonal Bundles & Bulk Deals (Preserved) */}
          <OffersSection />

          {/* 1. 🌾 Premium "Why Choose Us?" Section (Kyun Kissan Agro Traders?) */}
          <WhyChooseUs />

          {/* 11. 🌿 Brand Signature Banner ("کسان کی ترقی ہماری اولین ترجیح") */}
          <BrandSignatureBanner />

          {/* 5. ⭐ Customer Trust / Reviews Section (Hamare Customers Ka Aitmaad) */}
          <CustomerReviews />

          {/* Existing Heritage & Owner Section (Strictly Preserved) */}
          <AboutSection />

          {/* 6 & 7. 📍 Shop Location (Hamari Location) & 📞 Contact Section */}
          <ContactMapSection />
        </main>

        {/* Existing Complete Footer (Strictly Preserved) */}
        <Footer />

        {/* 13. Floating Quick Action WhatsApp Button (💬 WhatsApp Karein) */}
        <FloatingWhatsApp />

        {/* 3. Global Drone Spray Booking Modal */}
        <DroneBookingModal
          isOpen={isGlobalDroneBookingOpen}
          onClose={() => setIsGlobalDroneBookingOpen(false)}
        />

        {/* 4. Global Crop Advisory Modal */}
        <CropAdvisoryModal
          isOpen={isGlobalCropAdvisoryOpen}
          onClose={() => setIsGlobalCropAdvisoryOpen(false)}
        />

        {/* Reusable Product Detail Modal */}
        <ProductDetailModal
          product={selectedProductForModal}
          onClose={() => setSelectedProductForModal(null)}
        />

        {/* Smart Inquiry Drawer */}
        <InquiryDrawer />

        {/* Inquiry Notification Toast */}
        <InquiryToast />

        {/* PWA Install Banner */}
        <PWAInstallBanner />
      </div>
    </InquiryCartProvider>
  );
}
