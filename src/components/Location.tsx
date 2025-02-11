import React from 'react';
import { MapPin, Car, Train, Plane } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Location</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373715!3d-37.817209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjAiUyAxNDTCsDU3JzEzLjQiRQ!5e0!3m2!1sen!2sus!4v1635176261200!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Location Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Getting Here</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Plane className="w-6 h-6 mr-4 text-amber-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">By Air</h4>
                    <p className="text-gray-600">20 minutes from International Airport (15km)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Train className="w-6 h-6 mr-4 text-amber-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">By Train</h4>
                    <p className="text-gray-600">10 minutes from Central Station (5km)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Car className="w-6 h-6 mr-4 text-amber-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">By Car</h4>
                    <p className="text-gray-600">Valet parking available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Nearby Attractions</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 text-amber-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">City Center</h4>
                    <p className="text-gray-600">5 minutes walk</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 text-amber-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Beach</h4>
                    <p className="text-gray-600">Direct access</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 text-amber-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Shopping District</h4>
                    <p className="text-gray-600">10 minutes walk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;