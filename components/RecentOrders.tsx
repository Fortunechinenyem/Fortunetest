import Image from "next/image";
import React from "react";

const RecentOrderCard: React.FC<{
  image: string;
  name: string;
  amount: number;
  date: string;
  status: string;
}> = ({ image, name, amount, date, status }) => {
  return (
    <div className="bg-white rounded-lg p-4 border">
      <div className="flex items-center">
        <Image
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded"
          width={110}
          height={110}
          priority
        />
        <div className="ml-4">
          <div className="grid grid-cols-2 gap-4">
            {" "}
            <p className="mt-2 text-gray-600 ">{name}</p>
            <p className="mt-2 text-gray-300 text-xs "> {date}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <p className="mt-2 text-gray-600 "> N{amount}</p>

            <p
              className={` bg-[#EFEDFF] rounded-lg text-center mt-2 text-xs ${
                status === "Pending"
                  ? "text-red-400 bg-[#FFE3F2]"
                  : "text-[#1DC198]"
              }`}
            >
              {status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentOrders: React.FC<{ orders: any[] }> = ({ orders }) => {
  return (
    <div>
      {orders.map((order, index) => (
        <RecentOrderCard
          key={index}
          image={order.image}
          name={order.name}
          amount={order.amount}
          date={order.date}
          status={order.status}
        />
      ))}
    </div>
  );
};

export default RecentOrders;
