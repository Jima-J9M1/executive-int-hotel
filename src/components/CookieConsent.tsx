import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center text-center sm:text-left">
            <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 mr-2 sm:mr-3 flex-shrink-0" />
            <p className="text-sm text-gray-600">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
          </div>
          <div className="flex gap-3 sm:gap-4">
            <button
              onClick={handleAccept}
              className="bg-amber-600 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-amber-700 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              Accept
            </button>
            <a
              href="#"
              className="text-gray-600 hover:text-amber-600 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;