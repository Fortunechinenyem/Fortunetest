import React from "react";

import Sidebar from "@/components/Conversations/Sidebar";
import TopNav from "@/components/TopNav";

const AdminDashboardLayout: React.FC = ({ children }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="main-content">
          <TopNav />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardLayout;
