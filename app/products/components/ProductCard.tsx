"use client";

// https://tailwindcomponents.com/component/e-commerce-product-card

import Image from "next/image";
import Link from "next/link";
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5";
import { Star } from "./Star";
import {
  addProductToCart,
  removeProductFromCart,
} from "@/app/shopping-cart/actions/actions";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
}

export const ProductCard = ({
  id,
  name,
  price,
  rating,
  image,
}: ProductCardProps) => {
  const router = useRouter();
  const onAddToCart = () => {
    addProductToCart(id);

    router.refresh();
  };

  const onRemoveFromCart = () => {
    removeProductFromCart(id);

    router.refresh();
  };

  return (
    <div className="bg-white shadow rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-100">
      {/* Product Image */}
      <div className="p-2">
        <Image
          width={500}
          height={500}
          className="rounded"
          src={image}
          alt={name}
        />
      </div>

      {/* Title */}
      <div className="px-5 pb-5">
        <Link href="#">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
            {name}
          </h3>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          {/* Stars */}
          {rating > 0 && (
            <div className="flex items-center">
              {[...Array(Math.floor(rating))].map((_, i) => (
                <Star key={i} />
              ))}
            </div>
          )}
          {/* Rating Number */}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {rating}
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>

          <div className="flex ml-2">
            <button
              onClick={onAddToCart}
              className="text-white mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <IoAddCircleOutline size={20} />
            </button>
            <button
              onClick={onRemoveFromCart}
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              <IoTrashOutline size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
