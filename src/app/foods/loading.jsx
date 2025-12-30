import FoodCardSkeleton from "@/components/Skeleton/FoodCardSkeleton";
import React from "react";


const loading = () => {
  return (
    <div className="grid my-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {[...Array(12)].map((_, index) => (
        <FoodCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default loading;