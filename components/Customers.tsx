import React from "react";

const Customers: React.FC<{
  title: string;
  totalCustomers: number;
  activeCustomers: number;
}> = ({ title, totalCustomers, activeCustomers }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <p className="text-2xl font-bold text-center">{totalCustomers}</p>
          <p className="text-gray-600 text-center">Total Customers</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <p className="text-2xl font-bold text-center">{activeCustomers}</p>
          <p className="text-gray-600 text-center">Active Customers</p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
