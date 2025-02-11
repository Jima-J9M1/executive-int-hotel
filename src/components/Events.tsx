import React from 'react';
import { Users, Heart, Briefcase, ChefHat } from 'lucide-react';

const events = [
  {
    title: 'Weddings',
    description: 'Create unforgettable moments in our stunning venues',
    capacity: 'Up to 200 guests',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80',
    icon: Heart
  },
  {
    title: 'Conferences',
    description: 'State-of-the-art facilities for successful business events',
    capacity: 'Up to 500 delegates',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80',
    icon: Briefcase
  },
  {
    title: 'Private Dining',
    description: 'Exclusive culinary experiences with our master chefs',
    capacity: 'Up to 30 guests',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80',
    icon: ChefHat
  }
];

const Events = () => {
  return (
    <section id="experiences" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Events & Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <event.icon className="w-8 h-8 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                  <p className="mb-2 opacity-90">{event.description}</p>
                  <div className="flex items-center text-sm opacity-75">
                    <Users className="w-4 h-4 mr-2" />
                    {event.capacity}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-colors">
            Plan Your Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;