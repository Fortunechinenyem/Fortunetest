import React from "react";

import Sidebar2 from "@/components/Conversations/Sidebar2";
import TopNav2 from "@/components/Conversations/TopNav2";

const ConversationsLayout: React.FC = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar2 />
      <div className="main-content">
        <TopNav2 />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default ConversationsLayout;
