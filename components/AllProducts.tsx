import React from "react";
import { HiOutlineFolderMinus } from "react-icons/hi2";

const AllProducts: React.FC<{
  title: string;
  allProducts: number;
  activeProducts: number;
}> = ({ title, allProducts, activeProducts }) => {
  return (
    <div>
      <div className="bg-[#5570F1] text-white rounded-lg p-4 shadow-md ">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center ">
            <HiOutlineFolderMinus />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="">
            <p className=" "> All Products</p>
            <p className="mt-2  ">45</p>
          </div>
          <div className="">
            <p className=" text-center"> Active</p>
            <p className="mt-2  text-center">
              32 <span className="text-xs  ">+24%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
