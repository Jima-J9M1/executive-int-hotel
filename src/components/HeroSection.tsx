import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-[100svh] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
          poster="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-4 leading-tight">
          Luxury Redefined at<br className="sm:hidden" /> Executive Hotel
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Where timeless elegance meets modern comfort. Experience 5-star luxury with breathtaking ocean views.
        </p>
        <button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 max-w-xs sm:max-w-none">
          Book Now - 20% Off Summer Stays
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce hidden sm:block">
          <ChevronDown size={32} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;