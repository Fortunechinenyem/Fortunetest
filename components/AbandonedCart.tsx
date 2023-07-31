import React from "react";

const AbandonedCart: React.FC<{
  title: string;
  abandonedCarts: number;
  abandonedCustomers: number;
}> = ({ title, abandonedCarts, abandonedCustomers }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <p className="text-2xl font-bold text-center">{abandonedCarts}</p>
          <p className="text-gray-600 text-center">Abandoned Carts</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <p className="text-2xl font-bold text-center">{abandonedCustomers}</p>
          <p className="text-gray-600 text-center">Abandoned Customers</p>
        </div>
      </div>
    </div>
  );
};

export default AbandonedCart;
