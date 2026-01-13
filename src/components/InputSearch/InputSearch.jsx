"use client";

import React from "react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;
    const encoded = encodeURIComponent(value.trim());
    router.push(`?search=${encoded}`);
  };

  return (
    <div className="my-5">
      <form onSubmit={handleSubmit} className="flex gap-3 items-center">
        <input
          name="search"
          type="text"
          placeholder="Enter Food name"
          className="px-4 py-2 w-full max-w-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 rounded-lg transition duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
