import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export function generateStaticParams() {
  return [{ id: '52930' }, { id: '52843' }, { id: '53024' }]
}

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    
    {next: { revalidate: 5 } }
  );
  const data = await res.json();
  return data.details;
};

const page = async ({ params }) => {
  const { id } = await params; 
  const food = await getSingleFood(id);

  if (!food || Object.keys(food).length === 0) {
    return (
      <h2 className="text-center text-red-500 text-xl">
        Food not Found
      </h2>
    );
  }

  const { title, foodImg, price, category, area, video } = food;

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen bg-gray-900">
 
    


      <div className="bg-white rounded-2xl shadow-lg w-[80%] p-6">
        {/* Image */}
        <img src={foodImg}  alt={title}  className="w-full h-80 object-cover rounded-xl mb-4 shadow-md"  />

        {/* Body */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-700 mb-1">
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p className="text-gray-700 mb-1">
          <span className="font-semibold">Area:</span> {area}
        </p>
        <p className="text-gray-800 font-semibold mb-4">
          <span className="font-semibold">Price:</span>{" "}
          <span className="text-yellow-600">৳ {price}</span>
        </p>

        {/* Buttons side by side */}


<div className="flex gap-4">
  <a
    href={video}
    target="_blank"
    rel="noopener noreferrer"
    className="btn flex-1 bg-indigo-500 text-white hover:bg-indigo-600 flex items-center justify-center gap-2"
  >
    <FaPlay className="w-5 h-5" />
    Watch Video
  </a>
  <button className="btn flex-1 bg-teal-500 text-white hover:bg-teal-600 flex items-center justify-center gap-2">
    <FaShoppingCart className="w-5 h-5" />
    Add to Cart
  </button>
</div>



      </div>
    </div>
  );
};

export default page;
