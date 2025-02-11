import React from 'react';
import { Calendar, Users, Mail, Phone } from 'lucide-react';

const BookingCTA = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-amber-600 text-white" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif mb-3 sm:mb-4">Ready for an Unforgettable Stay?</h2>
          <p className="text-lg sm:text-xl">Book now and save 20% on summer stays</p>
        </div>

        <form className="max-w-2xl mx-auto bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-gray-700 mb-1 sm:mb-2">Check-in Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1 sm:mb-2">Check-out Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1 sm:mb-2">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select className="w-full pl-10 pr-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1 sm:mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <button className="w-full bg-amber-600 text-white py-3 rounded-lg mt-4 sm:mt-6 hover:bg-amber-700 transition-colors">
            Check Availability
          </button>
        </form>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-base sm:text-lg mb-2">Need assistance? Contact us directly:</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <a href="tel:+1234567890" className="flex items-center hover:text-amber-200 transition-colors">
              <Phone className="mr-2" size={20} />
              +1 (234) 567-890
            </a>
            <a href="mailto:reservations@serenity.com" className="flex items-center hover:text-amber-200 transition-colors">
              <Mail className="mr-2" size={20} />
              reservations@serenity.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;