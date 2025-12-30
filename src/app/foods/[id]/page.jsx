import React from "react";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/52794`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.details;
};

const page = async ({ params }) => {
  const { id } = params;
  
  const food = await getSingleFood(id);
  if (!food || Object.keys(food).length === 0) {
  return <h2 className="text-center text-red-500 text-xl">Food not Found</h2>;
}


  if (!food) {
    return <h2 className="text-center text-red-500 text-xl">Food not Found</h2>;
  }

  const { title, foodImg, price, category, area, video } = food;

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-3 text-white">{title}</h2>
      <img
        src={foodImg}
        alt={title}
        className="w-full max-w-md rounded-xl mb-4 shadow-lg"
      />
      <div className="space-y-2 text-gray-200">
        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p>
          <span className="font-semibold">Area:</span> {area}
        </p>
        <p>
          <span className="font-semibold">Price:</span> ৳ {price}
        </p>
        <a
          href={video}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Watch Recipe Video
        </a>
      </div>
    </div>
  );
};

export default page;
