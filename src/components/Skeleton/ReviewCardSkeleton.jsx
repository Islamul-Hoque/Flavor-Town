import React from "react";

const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-4 animate-pulse">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gray-300"></div>
        <div className="flex flex-col gap-2">
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
          <div className="h-3 w-24 bg-gray-200 rounded"></div>
        </div>
        <div className="ml-auto h-3 w-20 bg-gray-200 rounded"></div>
      </div>

      {/* Rating */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-gray-300 rounded"></div>
        ))}
      </div>

      {/* Review Text */}
      <div className="space-y-2">
        <div className="h-3 w-full bg-gray-300 rounded"></div>
        <div className="h-3 w-5/6 bg-gray-300 rounded"></div>
        <div className="h-3 w-4/6 bg-gray-300 rounded"></div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mt-2">
        <div className="h-3 w-32 bg-gray-200 rounded"></div>
        <div className="flex gap-3">
          <div className="h-8 w-20 bg-gray-300 rounded-md"></div>
          <div className="h-8 w-20 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
