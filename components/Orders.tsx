import React from "react";
import { BsHandbag } from "react-icons/bs";

const Orders: React.FC<{
  allOrders: number;
  pendingOrders: number;
  completedOrders: number;
}> = ({ allOrders, pendingOrders, completedOrders }) => {
  return (
    <div>
      <div className="bg-white rounded-lg p-4 shadow-md grid grid-cols-2 gap-4">
        <div className="text-center">
          <BsHandbag />
        </div>
        <div className="text-gray-300 text-center">This week v</div>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-md grid grid-cols-3 gap-4">
        {" "}
        <div className="">
          <p className="text-gray-400 "> All Orders</p>
          <p className="mt-2 text-gray-600 ">450</p>
        </div>
        <div className="">
          <p className="text-gray-400 text-center"> Pending</p>
          <p className="mt-2 text-gray-600 text-center">5</p>
        </div>
        <div className="">
          <p className="text-gray-400 text-center"> Completed</p>
          <p className="mt-2 text-gray-600 text-center">445</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
