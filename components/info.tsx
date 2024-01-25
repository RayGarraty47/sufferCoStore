"use client"

import React, { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import IconButton from "./ui/icon-button";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const [quantity, setQuantity] = useState(0);

  const onAddToCart = () => {
    cart.addItem(data, quantity);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const total: number = Number(data.price) * quantity;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Quantity:</h3>
          <IconButton onClick={decrementQuantity} icon={<Minus size={20} />} />
          <h3>{quantity}</h3>
          <IconButton onClick={incrementQuantity} icon={<Plus size={20} />} />
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Total:</h3>
          <h3>
            <Currency value={total} />
          </h3>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
