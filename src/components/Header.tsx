import React, { useState } from 'react';
import { Menu, X, Phone, Globe, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="text-2xl font-serif font-bold">
            Executive Hotel
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#rooms" className="hover:text-amber-600 transition-colors">Rooms</a>
            <a href="#amenities" className="hover:text-amber-600 transition-colors">Amenities</a>
            <a href="#experiences" className="hover:text-amber-600 transition-colors">Experiences</a>
            <a href="#offers" className="hover:text-amber-600 transition-colors">Special Offers</a>
            <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <Globe className="w-5 h-5" />
              <select className="bg-transparent border-none focus:ring-0">
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="fr">FR</option>
              </select>
            </div>
            <a href="tel:+1234567890" className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              +1 (234) 567-890
            </a>
            <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#rooms" className="py-2 hover:text-amber-600 transition-colors">Rooms</a>
              <a href="#amenities" className="py-2 hover:text-amber-600 transition-colors">Amenities</a>
              <a href="#experiences" className="py-2 hover:text-amber-600 transition-colors">Experiences</a>
              <a href="#offers" className="py-2 hover:text-amber-600 transition-colors">Special Offers</a>
              <a href="#contact" className="py-2 hover:text-amber-600 transition-colors">Contact</a>
              <hr className="my-2" />
              <div className="flex items-center space-x-4 py-2">
                <Globe className="w-5 h-5" />
                <select className="bg-transparent border-none focus:ring-0">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
              <a href="tel:+1234567890" className="flex items-center py-2">
                <Phone className="w-5 h-5 mr-2" />
                +1 (234) 567-890
              </a>
              <button className="w-full bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors">
                Book Now
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;