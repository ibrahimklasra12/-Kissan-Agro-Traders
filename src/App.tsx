/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopNoticeBar } from './components/TopNoticeBar';
import { SeasonalBanner } from './components/SeasonalBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WebCreatorCard } from './components/WebCreatorCard';
import { BusinessStats } from './components/BusinessStats';
import { CategoryHighlights } from './components/CategoryHighlights';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ProductsSection } from './components/ProductsSection';
import { CropAdvisorySection } from './components/CropAdvisorySection';
import { FarmingQuestionSection } from './components/FarmingQuestionSection';
import { DroneServicesSection } from './components/DroneServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { OffersSection } from './components/OffersSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BrandSignatureBanner } from './components/BrandSignatureBanner';
import { CustomerReviews } from './components/CustomerReviews';
import { ShopGallerySection } from './components/ShopGallerySection';
import { FAQAccordion } from './components/FAQAccordion';
import { AboutSection } from './components/AboutSection';
import { ContactMapSection } from './components/ContactMapSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';
import { MobileBottomNav } from './components/MobileBottomNav';
import { DroneBookingModal } from './components/DroneBookingModal';
import { CropAdvisoryModal } from './components/CropAdvisoryModal';
import { ExpertConsultationModal } from './components/ExpertConsultationModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { InquiryDrawer } from './components/InquiryDrawer';
import { InquiryToast } from './components/InquiryToast';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { PWAUpdateNotice } from './components/PWAUpdateNotice';
import { LoadingScreen } from './components/LoadingScreen';
import { InquiryCartProvider } from './context/InquiryCartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ToastProvider } from './context/ToastContext';
import { Product } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'pesticides' | 'fertilizers' | 'seeds' | 'drone' | 'favorites'
  >('all');
  const [isGlobalDroneBookingOpen, setIsGlobalDroneBookingOpen] = useState(false);
  const [isGlobalCropAdvisoryOpen, setIsGlobalCropAdvisoryOpen] = useState(false);
  const [isGlobalConsultationOpen, setIsGlobalConsultationOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  useEffect(() => {
    const sections = [
      'home',
      'featured-products',
      'products',
      'services',
      'crop-advisory',
      'farming-question-section',
      'drone-spray-section',
      'how-it-works',
      'offers',
      'why-choose-us',
      'reviews',
      'gallery',
      'faqs',
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
    <ThemeProvider>
      <LanguageProvider>
        <ToastProvider>
          <FavoritesProvider>
            <InquiryCartProvider>
              {/* Premium Brand Loading Screen */}
              <LoadingScreen />

              <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-200">
                {/* 1. Top Notice Announcement & Contact Bar with Real-time Shop Status */}
                <TopNoticeBar />

                {/* Seasonal Animated Banner */}
                <SeasonalBanner />

                {/* 2. Primary Navigation with Theme & Language switchers */}
                <Navbar
                  activeSection={activeSection}
                  onOpenConsultation={() => setIsGlobalConsultationOpen(true)}
                />

                {/* 3. Main Content Container */}
                <main className="flex-1 pb-16 md:pb-0">
                  {/* Existing Hero Section (Strictly Preserved) */}
                  <HeroSection />

                  {/* Creator Portfolio for Ibrahim Klasra (Digital Web Creator & Services) */}
                  <WebCreatorCard />

                  {/* 📊 Trust / Business Statistics Section (Animated Counters) */}
                  <BusinessStats />

                  {/* 🚜 Our Services — Interactive Cards */}
                  <CategoryHighlights
                    onSelectCategory={(category) => setSelectedCategory(category)}
                    onOpenDroneBooking={() => setIsGlobalDroneBookingOpen(true)}
                    onOpenCropAdvisory={() => setIsGlobalCropAdvisoryOpen(true)}
                  />

                  {/* 🛍️ Featured Products Showcase */}
                  <FeaturedProducts
                    onSelectProduct={(product) => setSelectedProductForModal(product)}
                  />

                  {/* Existing Products Showcase, Full Catalog, Categories, Favorites & Animated Search */}
                  <ProductsSection
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    onSelectProduct={(product) => setSelectedProductForModal(product)}
                  />

                  {/* 🌱 Crop Advisory Section (With Photo Inquiry & Expert Consultation) */}
                  <CropAdvisorySection
                    onOpenAdvisoryModal={() => setIsGlobalCropAdvisoryOpen(true)}
                    onOpenConsultationModal={() => setIsGlobalConsultationOpen(true)}
                  />

                  {/* 🌾 Dedicated Farming Question Form */}
                  <FarmingQuestionSection
                    onOpenConsultation={() => setIsGlobalConsultationOpen(true)}
                  />

                  {/* 🚁 Precision Drone Spray Mechanization with Prominent Booking Banner */}
                  <DroneServicesSection
                    onOpenBookingModal={() => setIsGlobalDroneBookingOpen(true)}
                  />

                  {/* 📦 How It Works — 3 Steps Process */}
                  <HowItWorks />

                  {/* Existing Special Seasonal Bundles & Bulk Deals (Preserved) */}
                  <OffersSection />

                  {/* 🌾 Premium "Why Choose Us?" Section (Kyun Kissan Agro Traders?) */}
                  <WhyChooseUs />

                  {/* 🌿 Brand Signature Banner ("کسان کی ترقی ہماری اولین ترجیح") */}
                  <BrandSignatureBanner />

                  {/* ⭐ Customer Trust / Reviews Section (Hamare Customers Ka Aitmaad) */}
                  <CustomerReviews />

                  {/* 📸 Real Shop & Field Gallery Section */}
                  <ShopGallerySection />

                  {/* ❓ Frequently Asked Questions (Animated FAQ Accordion) */}
                  <FAQAccordion />

                  {/* Existing Heritage & Owner Section (Strictly Preserved) */}
                  <AboutSection />

                  {/* 📍 Shop Location (Hamari Location) & 📞 Contact Section with Dynamic Status */}
                  <ContactMapSection />
                </main>

                {/* Existing Complete Footer (Strictly Preserved) */}
                <Footer />

                {/* ⬆️ Floating Back To Top Button */}
                <BackToTop />

                {/* 💬 Floating Quick Action WhatsApp Button */}
                <FloatingWhatsApp />

                {/* 📱 Mobile Bottom Navigation Bar (md:hidden) */}
                <MobileBottomNav
                  activeSection={activeSection}
                  onOpenAdvisory={() => setIsGlobalCropAdvisoryOpen(true)}
                />

                {/* Global Drone Spray Booking Modal */}
                <DroneBookingModal
                  isOpen={isGlobalDroneBookingOpen}
                  onClose={() => setIsGlobalDroneBookingOpen(false)}
                />

                {/* Global Crop Advisory Modal (With Photo Upload & Web Share) */}
                <CropAdvisoryModal
                  isOpen={isGlobalCropAdvisoryOpen}
                  onClose={() => setIsGlobalCropAdvisoryOpen(false)}
                />

                {/* 💬 Global Expert WhatsApp Consultation Modal */}
                <ExpertConsultationModal
                  isOpen={isGlobalConsultationOpen}
                  onClose={() => setIsGlobalConsultationOpen(false)}
                />

                {/* Reusable Product Detail Modal (With Heart Favorite & WhatsApp Inquiry) */}
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

                {/* Automatic PWA Update Notice */}
                <PWAUpdateNotice />
              </div>
            </InquiryCartProvider>
          </FavoritesProvider>
        </ToastProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
