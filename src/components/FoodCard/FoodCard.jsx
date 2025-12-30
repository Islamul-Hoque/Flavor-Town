import React from "react";

const FoodCard = ({ food }) => {
  const { title, foodImg, price, category } = food;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300">
      <img
        src={foodImg}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mb-1">Category: {category}</p>
      <p className="text-lg font-semibold text-yellow-600">৳ {price}</p>
      <div className="mt-4 flex gap-3">
        <button className="btn bg-yellow-500 text-white hover:bg-yellow-600">
          Add to Cart
        </button>
        <button className="btn bg-stone-800 text-white hover:bg-stone-700">
          View Details
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
