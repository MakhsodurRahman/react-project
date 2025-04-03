import React from 'react';

const AquariumFishCategories = () => {
  // Sample fish category data - replace with your actual data
  const fishCategories = [
    {
      id: 1,
      name: 'Freshwater Fish',
      image: 'freshwater-fish.jpg', // Replace with actual image path
      link: '/freshwater-fish',
      bgColor: 'bg-blue-200', // Light blue background
    },
    {
      id: 2,
      name: 'Saltwater Fish',
      image: 'saltwater-fish.jpg', // Replace with actual image path
      link: '/saltwater-fish',
      bgColor: 'bg-yellow-100', // Light yellow background
    },
    {
      id: 3,
      name: 'Tropical Fish',
      image: 'tropical-fish.jpg', // Replace with actual image path
      link: '/tropical-fish',
      bgColor: 'bg-pink-200', // Light pink background
    },
  ];

  return (
    <div className="flex justify-between gap-5 p-5 max-w-6xl mx-auto ">
      {fishCategories.map((category) => (
        <div
          key={category.id}
          className={`relative flex-1 rounded-2xl overflow-hidden h-[250px] transform transition-transform duration-300 hover:scale-105 ${category.bgColor}`}
        >
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${category.image})` }}
          />

          {/* Content Overlay */}
          <div className="absolute top-5 left-5 ">
            <h2 className="text-2xl font-bold text-gray-800">{category.name}</h2>
            <a
              href={category.link}
              className="text-gray-600 hover:text-gray-800 font-medium mt-2 block"
            >
              View All
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AquariumFishCategories;