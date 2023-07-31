import React from "react";

const RecentOrderCard: React.FC<{
  image: string;
  name: string;
  amount: number;
  date: string;
  status: string;
}> = ({ image, name, amount, date, status }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md mb-4">
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="ml-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-lg mt-2">Amount: ${amount}</p>
          <p className="text-lg mt-2">Date: {date}</p>
          <p
            className={`text-lg mt-2 ${
              status === "Pending" ? "text-red-500" : "text-green-500"
            }`}
          >
            {status}
          </p>
        </div>
      </div>
    </div>
  );
};

const RecentOrders: React.FC<{ orders: any[] }> = ({ orders }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Recent Orders</h3>
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
