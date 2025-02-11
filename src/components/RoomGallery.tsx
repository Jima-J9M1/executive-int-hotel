import React, { useState } from 'react';

type Room = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
};

const rooms: Room[] = [
  {
    id: 1,
    name: 'Ocean View Suite',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80',
    price: 599,
    description: 'Luxurious suite with panoramic ocean views'
  },
  {
    id: 2,
    name: 'Garden Villa',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
    price: 899,
    description: 'Private villa surrounded by tropical gardens'
  },
  {
    id: 3,
    name: 'Presidential Suite',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80',
    price: 1299,
    description: 'Ultimate luxury with personal butler service'
  }
];

const RoomGallery = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room>();

  return (
    <section className="py-20 bg-gray-50" id='rooms'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Luxurious Accommodations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedRoom(room)}
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
                  <p className="mb-2">{room.description}</p>
                  <p className="text-xl font-bold">From ${room.price}/night</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden relative">
            <img
              src={selectedRoom?.image}
              alt={selectedRoom?.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{selectedRoom?.name}</h3>
              <p className="text-gray-600 mb-4">{selectedRoom?.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">From ${selectedRoom?.price}/night</p>
                <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700">
                  Book Now
                </button>
              </div>
            </div>
            <button
              onClick={() => setSelectedRoom(undefined)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full py-2 px-3 hover:bg-black/70 transition-colors duration-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default RoomGallery;