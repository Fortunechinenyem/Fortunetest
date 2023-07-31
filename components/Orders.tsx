import React from "react";

const Orders: React.FC<{
  allOrders: number;
  pendingOrders: number;
  completedOrders: number;
}> = ({ allOrders, pendingOrders, completedOrders }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-semibold">All Orders</h3>
      <p className="text-2xl mt-2">{allOrders}</p>
      <h3 className="text-xl font-semibold mt-4">Pending Orders</h3>
      <p className="text-2xl mt-2">{pendingOrders}</p>
      <h3 className="text-xl font-semibold mt-4">Completed Orders</h3>
      <p className="text-2xl mt-2">{completedOrders}</p>
    </div>
  );
};

export default Orders;
