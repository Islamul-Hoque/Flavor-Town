import FoodCard from "@/components/Card/FoodCard";
import React from "react";
import { resolve } from "styled-jsx/css";
import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch/InputSearch";
import style from "./foods.module.css"



const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data.foods || [];
};

const FoodsPage = async ({ searchParams }) => {
  const { search = "" } = await searchParams;
  const foods = await getFoods(search);

  return (
    <div>
      <h2 className={`text-4xl font-bold ${style.bgRed} `}>
        Total <span className="text-yellow-500">{foods.length}</span> Foods Found
      </h2>

      <div className="mt-4">
        <InputSearch />
      </div>

      <div className="flex gap-5">
        <div className="grid my-5 grid-cols-3 gap-5 w-[75%]">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
        <div className="w-[25%] border-2 rounded-xl p-4">
          <h2 className="text-2xl font-bold">Cart Items</h2>
          <hr />
          <CartItems />
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;