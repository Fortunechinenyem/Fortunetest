import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Image from "next/image";
import Logo from "../public/assessmentlogo.PNG";
import User from "../public/user.PNG";
import useStore from "../store";
// import ModalLayout from "./ModalLayout";
// import { ToastContainer, toast } from "react-toastify";

import { RxDashboard } from "react-icons/rx";
import { GoPeople } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineFolderMinus } from "react-icons/hi2";
import { BsBellFill } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { FiGift } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { SlEarphones } from "react-icons/sl";
import { IoLogOut } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const AdminDashboardLayout: React.FC = ({ children }) => {
  const currentModal = useStore((state: any) => state.currentModal);
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);

  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      {/* {currentModal && <ModalLayout />}
      <ToastContainer /> */}

      <div className={`md:flex h-screen ${currentModal && "blur-sm"}`}>
        <aside
          className={` ${
            isSidebarOpen ? "w-60" : "w-20"
          } h-full flex flex-col transition-all duration-300`}
        >
          <div className="w-full flex flex-col">
            <div className="flex items-center mb-7 mt-3">
              <Link
                href="/"
                className="flex title-font font-medium items-center"
              >
                <Image
                  className=""
                  src={Logo}
                  alt="logo"
                  width={110}
                  height={110}
                  priority
                />
              </Link>
            </div>
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
                  className="flex items-center py-3 hover:text-blue-1"
                >
                  <BsHandbag width={22} />
                  <span className="ml-2">Orders</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/users"
                  className="flex items-center py-3 hover:text-blue-1"
                >
                  <GoPeople width={22} />
                  <span className="ml-2">Customers</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory"
                  className="flex items-center py-3 hover:text-blue-1"
                >
                  <HiOutlineFolderMinus width={22} />
                  <span className="ml-2">Inventory</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/conversations"
                  className="flex items-center py-3  hover:text-blue-1 hover:stroke-blue-1"
                >
                  <BsChatDots width={18} height={27} />
                  <span className="ml-2">Conversations</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center py-3 hover:text-blue-1 hover:stroke-blue-1"
                >
                  <IoSettingsOutline width={18} height={27} />
                  <span className="ml-2">Settings</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center py-3 hover:text-blue-1 hover:stroke-blue-1"
                >
                  <SlEarphones width={18} height={27} />
                  <span className="ml-2">Contact Support</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center py-3  hover:text-blue-1 hover:stroke-blue-1"
                >
                  <FiGift width={18} height={27} />
                  <span className="ml-2">Free Gift Available</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="logout">
            <button className=" flex items-center gap-3 hover:text-blue-1">
              <IoLogOut width={15} />
              <span className="ml-2">Logout</span>
            </button>
          </div>
        </aside>
        <div className="flex flex-col flex-1">
          <header className=" shadow-md p-4 flex items-center justify-between">
            <button className="md:hidden" onClick={toggleSidebar}>
              <RxHamburgerMenu />
            </button>
            <h2 className="text-3xl text-center font-bold ">Dashboard</h2>
            <div className="flex items-center gap-4 ml-auto">
              <span className="mr-3">Nanny's Shop</span>
              <div className="w-9 h-9 bg-gray-300 rounded-full">
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
          </header>
          <main className="p-4">{children}</main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardLayout;
