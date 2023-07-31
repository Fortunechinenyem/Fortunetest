import React from "react";
import { GoPeople } from "react-icons/go";

const Customers: React.FC<{
  title: string;
  totalCustomers: number;
  activeCustomers: number;
}> = ({ title, totalCustomers, activeCustomers }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="grid grid-cols-2 gap-4 ">
        <div className="text-center">
          <GoPeople />
        </div>
        <div className="text-gray-300 text-center">This week v</div>
        <div className="">
          <p className="text-gray-400 ">Customers</p>
          <p className="mt-2 text-gray-600">
            1,250 <span className="text-[#1DC198]">+15.80%</span>
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-center">Active </p>
          <p className="mt-2 text-gray-600">
            1,180 <span className="text-xs text-[#1DC198]">85%</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
