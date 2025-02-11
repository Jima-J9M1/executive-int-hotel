import React from 'react';
import { Wifi, Waves, Utensils, Car, Wine, Space as Spa } from 'lucide-react';

const features = [
  {
    icon: Waves,
    title: 'Private Beach Access',
    description: 'Exclusive access to pristine shoreline'
  },
  {
    icon: Spa,
    title: 'Luxury Spa',
    description: 'World-class treatments and facilities'
  },
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'Award-winning restaurants'
  },
  {
    icon: Car,
    title: '24/7 Airport Shuttle',
    description: 'Complimentary luxury transfers'
  },
  {
    icon: Wine,
    title: 'Sunset Cocktails',
    description: 'Daily complimentary happy hour'
  },
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Stay connected throughout'
  }
];

const Features = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-8 sm:mb-12 lg:mb-16">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;