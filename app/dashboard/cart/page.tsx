import { Product, products } from "@/app/products/data/products";
import { ItemCard } from "@/app/shopping-cart";
import { cookies } from "next/headers";
import Link from "next/link";

export const metadata = {
  title: "Shopping Cart Page",
  description: "Items in the Shopping Cart",
};

interface ProductInCart {
  product: Product;
  quantity: number;
}

const getProductsInCart = (cart: { [id: string]: number }) => {
  const productsInCart: ProductInCart[] = [];
  for (const id of Object.keys(cart)) {
    const product = products.find((p) => p.id === id);
    if (product) {
      productsInCart.push({ product, quantity: cart[id] });
    }
  }
  return productsInCart;
};

export default function CartPage() {
  const cookiesStore = cookies();
  const cart = JSON.parse(cookiesStore.get("cart")?.value ?? "{}") as {
    [id: string]: number;
  };
  const productsInCart = getProductsInCart(cart);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
        Shopping Cart
      </h1>

      <hr className="my-5" />
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex-1 flex flex-col gap-5">
          {productsInCart.length === 0 && (
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              No items in the cart. Add some items to the cart to see them here.
              <br />
              <span className="text-cyan-400 hover:underline cursor-pointer transition duration-200">
                Go to <Link href="/dashboard/products">Products</Link>
              </span>
            </div>
          )}
          {productsInCart.map(({ product, quantity }) => (
            <ItemCard key={product.id} product={product} quantity={quantity} />
          ))}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Summary
          </h2>
          <hr className="my-5" />
          <div className="flex justify-between">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Subtotal
            </span>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              $
              {productsInCart
                .reduce(
                  (total, { product, quantity }) =>
                    total + product.price * quantity,
                  0
                )
                .toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Shipping
            </span>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Free
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              15% Tax
            </span>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              $
              {(
                productsInCart.reduce(
                  (total, { product, quantity }) =>
                    total + product.price * quantity,
                  0
                ) * 0.15
              ).toFixed(2)}
            </span>
          </div>
          <hr className="my-5" />
          <div className="flex justify-between">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Total
            </span>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              $
              {(
                productsInCart.reduce(
                  (total, { product, quantity }) =>
                    total + product.price * quantity,
                  0
                ) * 1.15
              ).toFixed(2)}
            </span>
          </div>
          <button
            className="w-full py-3 mt-5 bg-cyan-400 text-white font-semibold rounded-lg hover:bg-cyan-500 transition duration-200"
            // onClick={() => alert("Not implemented")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
