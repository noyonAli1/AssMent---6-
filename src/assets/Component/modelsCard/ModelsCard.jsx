import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelsCard = ({ model, cart, setCart }) => {

  const { name, description, icon, tag, features, price, period, id } = model;
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscription = () => {
    const isFound = cart.find(cd => cd.id === id);
    if (isFound) {
      toast.error('it is already in cart !');
      return;
    }

    setIsSubscribed(true);
    setCart([...cart, model]);
    toast.success('Successfully added to cart !');
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-gray-500 p-6 w-[320px] relative m-2">

      {/* Dynamic Badge */}
      <span className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-medium
        ${tag === 'Best Seller' ? 'bg-orange-100 text-orange-600' :
          tag === 'Popular' ? 'bg-blue-100 text-blue-600' :
          tag === 'New' ? 'bg-green-100 text-green-600' :
          tag === 'Trending' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
        }`}>
        {tag}
      </span>

      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
        <img src={icon} alt={name} className="w-6 h-6" />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {name}
      </h2>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-4">
        {description}
      </p>

      {/* Price */}
      <div className="mb-4">
        <span className="text-2xl font-bold text-gray-900">${price}</span>
        <span className="text-gray-500 text-sm">/{period}</span>
      </div>

      {/* Features List */}
      <ul className="space-y-2 mb-6">
        {
          features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✔</span> {feature}
            </li>
          ))
        }
      </ul>

      {/* Action Button */}
      <button
        onClick={handleSubscription}
        className={`w-full py-3 rounded-full text-white font-medium transition 
          ${isSubscribed ? 'bg-green-500' : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90'}`}
      >
        {isSubscribed ? 'Added to Cart!' : 'Buy Now'}
      </button>

    </div>
  );
};

export default ModelsCard;