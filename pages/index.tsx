import React from "react";
import { Chart, registerables } from "chart.js"; // Import Chart and registerables

// Import custom components
import AdminDashboardLayout from "@/layout/AdminDashboardLayout";
import Customers from "@/components/Customers";
import Orders from "@/components/Orders";
import Marketing from "@/components/Marketing";
import AllProducts from "@/components/AllProducts";
import RecentOrders from "@/components/RecentOrders";
import AbandonedCart from "@/components/AbandonedCart";
import Summary from "@/components/Summary";
import SalesVolume from "@/components/SalesVolume";

// Register chart options
Chart.register(...registerables);

const AdminDashboardPage: React.FC = () => {
  const allOrders = 100;
  const pendingOrders = 30;
  const completedOrders = 70;

  const orders = [
    {
      image: "url-to-image-1",
      name: "Product 1",
      amount: 100,
      date: "2023-07-30",
      status: "Pending",
    },
    {
      image: "url-to-image-2",
      name: "Product 2",
      amount: 150,
      date: "2023-07-29",
      status: "Completed",
    },
    // Add more order data as needed
  ];

  return (
    <AdminDashboardLayout className="bg-[#EFEDFF]">
      <div className="m-4 mb-7 mt-5  bg-[#EFEDFF]">
        <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="m-4">
            <SalesVolume />
          </div>
          <div className="m-4">
            <Customers />
          </div>
          <div className="m-4">
            <Orders
              allOrders={allOrders}
              pendingOrders={pendingOrders}
              completedOrders={completedOrders}
            />
          </div>
          <div className="m-4">
            <Marketing />
          </div>
          <div className="m-4">
            <AllProducts />
          </div>
          <div className="m-4">
            <RecentOrders orders={orders} />
          </div>
          <div className="m-4">
            <AbandonedCart />
          </div>
          <div className="m-4">
            <Summary />
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminDashboardPage;
