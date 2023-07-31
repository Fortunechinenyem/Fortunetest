import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "../../public/assessmentlogo.PNG";
import { RxDashboard } from "react-icons/rx";
import { GoPeople } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineFolderMinus } from "react-icons/hi2";
import useStore from "@/store";
import { BsChatDots } from "react-icons/bs";
import { FiGift } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { SlEarphones } from "react-icons/sl";
import { IoLogOut } from "react-icons/io5";

const Sidebar: React.FC = () => {
  const currentModal = useStore((state: any) => state.currentModal);
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);

  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="sidebar">
      <aside
        className={`md:w-60 h-full flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "flex" : "hidden md:flex"
        }`}
      >
        <div className="w-full ">
          <Link href="/" className="flex title-font font-medium items-center">
            <Image
              className=""
              src={Logo}
              alt="logo"
              width={110}
              height={110}
              priority
            />
          </Link>

          <ul className="pl-5 pt-5 pb-2 md:block text-black grow">
            <li>
              <Link
                href="/"
                className="flex items-center py-3 hover:text-blue-1"
              >
                <RxDashboard width={22} />
                <span className="ml-2">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/orders"
                className="mt-4 mb-4 flex items-center py-3 hover:text-blue-1"
              >
                <BsHandbag width={22} />
                <span className="ml-2">Orders</span>
                <span className="ml-2 bg-[#FFCC91]">3</span>
              </Link>
            </li>
            <li>
              <Link
                href="/users"
                className="mt-4 mb-4 flex items-center py-3 hover:text-blue-1"
              >
                <GoPeople width={22} />
                <span className="ml-2">Customers</span>
              </Link>
            </li>
            <li>
              <Link
                href="/inventory"
                className="mt-4 mb-4 flex items-center py-3 hover:text-blue-1"
              >
                <HiOutlineFolderMinus width={22} />
                <span className="ml-2">Inventory</span>
              </Link>
            </li>
            <li>
              <Link
                href="/conversations"
                className="mt-4 mb-4 flex items-center py-3  hover:text-blue-1 hover:stroke-blue-1"
              >
                <BsChatDots width={18} height={27} />
                <span className="ml-2">Conversations</span>
                <span className="ml-2 bg-[#FFCC91]">16</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className=" mt-4 mb-4 flex items-center py-3 hover:text-blue-1 hover:stroke-blue-1"
              >
                <IoSettingsOutline width={18} height={27} />
                <span className="ml-2">Settings</span>
              </Link>
            </li>
          </ul>
          <div className="mt-9">
            <Link
              href="/contact"
              className="flex items-center py-3 hover:text-blue-1 hover:stroke-blue-1"
            >
              <SlEarphones width={18} height={27} />
              <span className="ml-2">Contact Support</span>
            </Link>

            <Link
              href="/contact"
              className="flex items-center py-3  hover:text-blue-1 hover:stroke-blue-1"
            >
              <FiGift width={18} height={27} />
              <span className="ml-2">Free Gift Available</span>
            </Link>
          </div>

          <div className="logout">
            <button className="flex items-center gap-3 hover:text-blue-1">
              <IoLogOut width={15} />
              <span className="ml-2">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
