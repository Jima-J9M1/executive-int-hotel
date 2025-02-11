import { Facebook, Instagram, Twitter, Award, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="bg-white p-2 rounded">
            <img
              src="../../public/images/booking-com.png"
              alt="Booking.com Partner"
              className="h-12 sm:h-16 object-contain"
            />
          </div>
          <div className="bg-white p-2 rounded flex items-center gap-2">
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt="TripAdvisor"
              className="h-12 sm:h-12 object-contain"
            />
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
            <span className="text-base sm:text-lg font-semibold">Secure Booking</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
            <span className="text-base sm:text-lg font-semibold">5-Star Luxury</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Contact */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 text-sm sm:text-base">
              <p>123 Luxury Avenue</p>
              <p>Paradise City, PC 12345</p>
              <p className="mt-2">Phone: +1 (234) 567-890</p>
              <p>Email: info@serenityhaven.com</p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="#rooms" className="hover:text-amber-600 transition-colors">Rooms & Suites</a></li>
              <li><a href="#amenities" className="hover:text-amber-600 transition-colors">Amenities</a></li>
              <li><a href="#experiences" className="hover:text-amber-600 transition-colors">Experiences</a></li>
              <li><a href="#offers" className="hover:text-amber-600 transition-colors">Special Offers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="#" className="hover:text-amber-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-600 transition-colors">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-amber-600 transition-colors">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-amber-600 transition-colors">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 mt-6 sm:mt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; 2024 Executive Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;