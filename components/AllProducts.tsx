import React from "react";

const AllProducts: React.FC<{
  title: string;
  allProducts: number;
  activeProducts: number;
}> = ({ title, allProducts, activeProducts }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <p className="text-2xl font-bold text-center">{allProducts}</p>
          <p className="text-gray-600 text-center">All Products</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <p className="text-2xl font-bold text-center">{activeProducts}</p>
          <p className="text-gray-600 text-center">Active Products</p>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
