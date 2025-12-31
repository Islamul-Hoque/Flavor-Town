import React from "react";

const FoodDetailsSkeleton = () => {
  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-white rounded-2xl shadow-lg w-[80%] p-6 animate-pulse">
        {/* Image Skeleton */}
        <div className="w-full h-80 bg-gray-300 rounded-xl mb-4"></div>

        {/* Title Skeleton */}
        <div className="h-6 bg-gray-300 rounded w-1/3 mb-3"></div>

        {/* Text Skeletons */}
        <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/5 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/6 mb-4"></div>

        {/* Buttons Skeleton */}
        <div className="flex gap-4">
          <div className="btn flex-1 bg-gray-300 h-10 rounded-lg"></div>
          <div className="btn flex-1 bg-gray-300 h-10 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
