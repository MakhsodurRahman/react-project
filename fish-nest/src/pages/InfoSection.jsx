import React from 'react';

const InfoSection = () => {
  const features = [
    {
      icon: '🚚', // Replace with an appropriate icon or image
      title: 'Free Shipping',
      description: 'Get your orders delivered with no extra cost',
    },
    {
      icon: '🎧', // Replace with an appropriate icon or image
      title: 'Support 24/7',
      description: 'We are here to assist you anytime',
    },
    {
      icon: '💰', // Replace with an appropriate icon or image
      title: '100% Money Back',
      description: 'Full refund if you are not satisfied',
    },
    {
      icon: '🔒', // Replace with an appropriate icon or image
      title: 'Payment Secure',
      description: 'Your payment information is safe with us',
    },
    {
      icon: '🏷️', // Replace with an appropriate icon or image
      title: 'Discount',
      description: 'Enjoy the best prices on our products',
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="text-red-500 text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;