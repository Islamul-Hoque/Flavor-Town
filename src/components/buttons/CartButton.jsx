"use client";
import { CartContext } from "@/app/context/CartProvider";
import React, { use, useState } from "react";

const CartButton = ({food}) => {
    const [inCart, setIncart] = useState(false);
  const {addToCart} = use(CartContext)
  const handleAdd2Cart = () => {
    addToCart(food)
    setIncart(true)
  }
    return (
        <button
      onClick={handleAdd2Cart}
      disabled={inCart}
      className=" btn disabled:bg-gray-100 disabled:text-gray-400 bg-yellow-500 text-white hover:bg-yellow-600"
    >
     {inCart ? "Added" : "Add to Cart"}
    </button>
    );
};

export default CartButton;

