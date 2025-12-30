import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded-lg mb-3"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
      <div className="h-5 bg-gray-300 rounded w-1/3 mb-3"></div>
      <div className="flex gap-3">
        <div className="h-10 w-24 bg-gray-300 rounded"></div>
        <div className="h-10 w-24 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
