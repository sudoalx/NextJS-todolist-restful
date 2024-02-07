import { cookies } from "next/headers";
import {
  CiChat1,
  CiMenuBurger,
  CiSearch,
  CiShoppingBasket,
} from "react-icons/ci";

export const TopMenu = () => {
  const cookieStore = cookies();
  const cart = JSON.parse(cookieStore.get("cart")?.value ?? "{}");

  const getTotalItems = () => {
    let total = 0;
    for (const key in cart) {
      total += cart[key];
    }
    return total;
  };

  return (
    <div className="sticky z-10 top-0 h-16 border-b bg-gray-900 lg:py-2.5">
      <div className="px-6 flex items-center justify-between space-x-4">
        <h5 hidden className="text-2xl text-gray-300 font-medium lg:block">
          Dashboard
        </h5>
        <button
          className="w-12 h-16 -mr-2 border-r lg:hidden"
          aria-label="Hamburger"
        >
          <CiMenuBurger size={30} />
        </button>
        <div className="flex space-x-2">
          <div hidden className="md:block">
            <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
              <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-700">
                <CiSearch className="text-gray-300" />
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Search here"
                className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-300 outline-none border border-gray-700 focus:border-cyan-300 transition bg-gray-800 placeholder-gray-500"
              />
            </div>
          </div>

          <button
            className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-800 focus:bg-gray-800 active:bg-gray-700 md:hidden"
            aria-label="Search"
          >
            <CiSearch />
          </button>
          <button
            className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-800 focus:bg-gray-800 active:bg-gray-700"
            aria-label="Chat"
          >
            <CiChat1 size={25} />
          </button>
          <button
            className="p-2 flex items-center justify-center h-10 rounded-xl border bg-gray-800 focus:bg-gray-800 active:bg-gray-700"
            aria-label="Notifications"
          >
            <span className="text-xs font-semibold text-gray-300 bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center">
              {getTotalItems() ?? 0}
            </span>
            <CiShoppingBasket size={25} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
