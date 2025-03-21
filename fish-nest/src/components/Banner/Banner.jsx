import React from 'react';
import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <div className="w-full">
      <div className="bg-purple-600 h-[300px] pt-3 px-4 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-3xl font-bold mb-1">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-sm md:text-base mx-auto max-w-2xl mb-8">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to 
            the coolest accessories, we have it all!
          </p>
          
          {/* Shop Now Button */}
          <button className="bg-white text-purple-600 font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
        
        <div className="absolute -bottom-1 left-0 right-0 h-16 rounded-t-full"></div>
      </div>
      

      <div className="relative  -mt-20 mx-auto max-w-3xl px-4">
        <div className="rounded-3xl overflow-hidden border-4 shadow-lg">
          <div className="bg-purple-800 p-0">
            <img 
              src={bannerImg}
              alt="VR Headset" 
              className="w-full  h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;