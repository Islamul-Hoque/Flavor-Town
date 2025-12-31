import Link from "next/link";
import React from "react";
import CartButton from "../buttons/CartButton";

const FoodCard = ({ food }) => {
  const { id, title, foodImg, price, category } = food;

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
       <CartButton food={food} />
        <Link href={`/foods/${id}`} className="btn bg-stone-800 text-white hover:bg-stone-700">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
