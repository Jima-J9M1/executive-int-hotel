import React from 'react';
import { Clock, Calendar, Gift } from 'lucide-react';

const offers = [
  {
    title: 'Summer Escape',
    description: 'Book 4 nights, get 1 free + complimentary spa treatment',
    discount: '20% OFF',
    validUntil: '2024-08-31',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80'
  },
  {
    title: 'Romantic Getaway',
    description: 'Includes champagne, couples massage, and sunset dinner',
    discount: '15% OFF',
    validUntil: '2024-12-31',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80'
  },
  {
    title: 'Early Bird Special',
    description: 'Book 60 days in advance and save big',
    discount: '25% OFF',
    validUntil: '2024-12-31',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80'
  }
];

const SpecialOffers = () => {
  return (
    <section id="offers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full">
                  {offer.discount}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Valid until {new Date(offer.validUntil).toLocaleDateString()}</span>
                </div>
                <button className="w-full bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors">
                  Book This Offer
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <div className="max-w-2xl mx-auto text-center">
            <Gift className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Get Exclusive Offers</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter and receive 10% off your first booking
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border focus:ring-2 focus:ring-amber-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;