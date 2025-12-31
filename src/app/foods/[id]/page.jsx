import React from "react";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
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
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6">
        {/* Image */}
        <img
          src={foodImg}
          alt={title}
          className="w-full h-64 object-cover rounded-xl mb-4 shadow-md"
        />

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
            className="btn bg-yellow-500 text-white hover:bg-yellow-600 text-center"
          >
            Watch Video
          </a>
          <button className="btn bg-green-600 text-white hover:bg-green-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
