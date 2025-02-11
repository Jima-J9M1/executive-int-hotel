import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import RoomGallery from './components/RoomGallery';
import SpecialOffers from './components/SpecialOffers';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Features />
      <RoomGallery />
      <SpecialOffers />
      <Events />
      <Testimonials />
      <Location />
      <BookingCTA />
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;