import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { HiHome } from "react-icons/hi2";
import { BsBellFill } from "react-icons/bs";
import User from "../../public/user.PNG";
import useStore from "../../store";

const TopNav2: React.FC = () => {
  const currentModal = useStore((state: any) => state.currentModal);

  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="top-nav">
      <nav className="shadow-md p-4 flex items-center justify-between">
        <div>
          <h2 className="text-3xl text-center text-black">Conversations</h2>
          <div className="flex mt-4 gap-4">
            <HiHome />
            <p className="text-black"> / Conversations</p>
          </div>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <span className="mr-3 bg-[#FFE3F2] rounded-full">Nanny's Shop</span>
          <div className="w-9 h-9  text-center rounded-full">
            <BsBellFill />
          </div>
          <div className="w-9 h-9 bg-gray-300 rounded-full">
            <Image
              className=""
              src={User}
              alt="logo"
              width={50}
              height={50}
              priority
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNav2;
