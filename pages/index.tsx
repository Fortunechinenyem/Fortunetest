import React from "react";
import { Chart, registerables } from "chart.js";

import Image1 from "../public/assessmentimage1.PNG";
import Image2 from "../public/assessmentimage2.PNG";

import AdminDashboardLayout from "@/layout/AdminDashboardLayout";
import Customers from "@/components/Customers";
import Orders from "@/components/Orders";

import AllProducts from "@/components/AllProducts";
import RecentOrders from "@/components/RecentOrders";
import AbandonedCart from "@/components/AbandonedCart";
import Summary from "@/components/Summary";
import SalesVolume from "@/components/SalesVolume";
import Marketing from "@/components/Marketing";

Chart.register(...registerables);

const AdminDashboardPage: React.FC = () => {
  const summaryData = [
    { date: "Sept 10", sales: 90 },
    { date: "Sept 11", sales: 40 },
    { date: "Sept 12", sales: 65 },
    { date: "Sept 13", sales: 30 },
    { date: "Sept 14", sales: 80 },
    { date: "Sept 15", sales: 40 },
    { date: "Sept 16", sales: 80 },
  ];
  const orders = [
    {
      image: Image1,
      name: "iPhone 13",
      amount: "730,000.00",
      date: "12 Sept 2022",
      status: "Pending",
    },
    {
      image: Image2,
      name: "iPhone 13",
      amount: "730,000.00",
      date: "12 Sept 2022",
      status: "Completed",
    },
    {
      image: Image1,
      name: "iPhone 13",
      amount: "730,000.00",
      date: "12 Sept 2022",
      status: "Pending",
    },
    {
      image: Image2,
      name: "iPhone 13",
      amount: "730,000.00",
      date: "12 Sept 2022",
      status: "Completed",
    },
    {
      image: Image2,
      name: "iPhone 13",
      amount: "730,000.00",
      date: "12 Sept 2022",
      status: "Completed",
    },
    {
      image: Image2,
      name: "iPhone 13",
      amount: "730,000.00",
      date: "12 Sept 2022",
      status: "Completed",
    },
    {
      image: Image1,
      name: "iPhone 13",
      amount: "730,000.00",
      date: "12 Sept 2022",
      status: "Pending",
    },
    {
      image: Image1,
      name: "iPhone 13",
      amount: "730,000.00",
      date: "12 Sept 2022",
      status: "Pending",
    },
  ];

  return (
    <AdminDashboardLayout className="bg-[#EFEDFF]">
      <div className="m-2 mb-7 mt-5  bg-[#EFEDFF]">
        <div className="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="m-2">
            <SalesVolume />
          </div>
          <div className="m-2">
            <Customers />
          </div>
          <div className="m-2">
            <Orders />
          </div>
          <div className="m-2 ">
            <Marketing
              title="Marketing Analytics"
              purchase={15}
              acquisition={55}
              retention={35}
            />
          </div>
          <div className="m-2">
            <AllProducts />
            <div className="mt-4">
              <AbandonedCart />
            </div>
          </div>
          <div className="p-2 m-4 bg-white">
            <div>
              <p className="mt-2 text-gray-600 font-semibold mb-4 ">
                Recent Orders
              </p>
              <RecentOrders orders={orders} />
            </div>
          </div>
        </div>
        <div className="m-4 mt-7">
          <Summary data={summaryData} />
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminDashboardPage;
