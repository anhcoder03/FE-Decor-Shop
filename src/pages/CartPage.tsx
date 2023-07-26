/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from "react";
import { LayoutMain } from "../components/layout";
import { useSelector } from "react-redux";
import { RootState } from "../store/configureStore";
import formatPrice from "../utils/fomatPrice";
import { Tproduct } from "../types/product";

const CartPage = () => {
  const listCart = useSelector((state: RootState) => state.cart.carts);
  const [carts, setCarts] = useState<Tproduct[] | null>([]);
  const handle = () => {
    setCarts(listCart);
  };
  useEffect(() => {
    void handle();
  });
  console.log(carts);
  return (
    <LayoutMain>
      <div className="h-screen pt-20 bg-[#222222]">
        <h1 className="mb-10 text-2xl font-bold text-center">Cart Items</h1>
        <div className="justify-center max-w-5xl px-6 mx-auto md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {carts &&
              carts.length > 0 &&
              carts.map((item: Tproduct) => (
                <div
                  className="justify-between p-6 mb-6 bg-white rounded-lg shadow-md sm:flex sm:justify-start"
                  key={item?._id}
                >
                  <img
                    src={item?.productId.image}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item?.productId.name}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                    </div>
                    <div className="flex justify-between mt-4 sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span className="cursor-pointer rounded-l bg-[#222222] py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                          {" "}
                          -{" "}
                        </span>
                        <input
                          className="w-8 h-8 text-xs text-center bg-[#222222] border outline-none"
                          type="number"
                          defaultValue={item?.quantity}
                          min={1}
                        />
                        <span className="px-3 py-1 duration-100 bg-[#222222] rounded-r cursor-pointer hover:bg-blue-500 hover:text-blue-50">
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-red-500">
                        <p className="text-sm">
                          {formatPrice(item?.totalPrice)}đ
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 duration-150 cursor-pointer hover:text-red-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default CartPage;
