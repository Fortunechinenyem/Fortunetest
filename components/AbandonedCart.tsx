import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const AbandonedCart: React.FC<{
  title: string;
  abandonedCarts: number;
  abandonedCustomers: number;
}> = ({ title, abandonedCarts, abandonedCustomers }) => {
  return (
    <div>
      <div className="bg-white rounded-lg p-4 shadow-md grid grid-cols-2 gap-4">
        <div className="text-center">
          <LuShoppingCart />
        </div>
        <div className="text-gray-300 text-center">This week v</div>
        <div className="">
          <p className="text-red-400 "> Abandoned Cart</p>
          <p className="mt-2 text-gray-600 ">
            20%<span className="text-[#1DC198] text-xs">+0.00%</span>
          </p>
        </div>
        <div className="">
          <p className="text-gray-400 text-center"> Customers</p>
          <p className="mt-2 text-gray-600 text-center">30</p>
        </div>
      </div>
    </div>
  );
};

export default AbandonedCart;
