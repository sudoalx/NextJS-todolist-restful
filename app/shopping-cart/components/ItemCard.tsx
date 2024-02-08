"use client";
import type { Product } from "../../products/data/products";
import Image from "next/image";

import { IoAddCircleOutline, IoRemove, IoTrash } from "react-icons/io5";
import {
  addProductToCart,
  removeProductFromCart,
  removeSingleItemFromCart,
} from "../actions/actions";

import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  product: Product;
  quantity: number;
}

export const ItemCard = ({ product, quantity }: Props) => {
  const router = useRouter();

  function onAddToCart() {
    addProductToCart(product.id);
    router.refresh();
  }

  function onRemoveItem() {
    removeSingleItemFromCart(product.id);
    router.refresh();
  }

  function onRemoveAll() {
    removeProductFromCart(product.id);
    router.refresh();
  }

  return (
    <div className="flex flex-col md:flex-row items-center shadow rounded-lg w-full bg-gray-800 border-gray-100 mb-4">
      {/* Product Image */}
      <div className="p-2 md:w-1/4">
        <Image
          width={200}
          height={200}
          className="rounded cursor-pointer transition transform hover:scale-105 duration-300 ease-in-out"
          src={product.image}
          alt={product.name}
        />
      </div>

      {/* Title */}
      <div className="px-5 pb-5 w-full flex flex-col md:w-1/2 md:mt-0">
        <Link href="#">
          <h3 className="font-semibold text-xl tracking-tight text-white">
            {product.name} -{" "}
            <small className="text-sm">${product.price.toFixed(2)}</small>
          </h3>
        </Link>

        {/* Price and Add to Cart */}
        <div className="flex flex-col items-start justify-between mt-2">
          <span className="text-gray-900 dark:text-white">
            Quantity: {quantity}
          </span>
          <span className="font-bold text-white">
            Total: ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col items-center justify-between md:w-1/4">
        {/* Quantity Controls */}
        <div className="flex p-3 items-center justify-center">
          <button
            onClick={onRemoveItem}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            <IoRemove size={20} />
          </button>
          <span className="text-xl text-white mx-2">{quantity}</span>
          <button
            onClick={onAddToCart}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <IoAddCircleOutline size={20} />
          </button>
        </div>

        {/* Remove All Button */}
        <button
          onClick={onRemoveAll}
          className="mt-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          <IoTrash size={20} />
        </button>
      </div>
    </div>
  );
};
