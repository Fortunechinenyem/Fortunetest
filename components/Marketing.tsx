import React from "react";
import { Doughnut } from "react-chartjs-2";

const Marketing: React.FC<{
  title: string;
  acquisition: number;
  purchase: number;
  retention: number;
}> = ({ title, acquisition, purchase, retention }) => {
  const data = {
    labels: ["Acquisition", "Purchase", "Retention"],
    datasets: [
      {
        data: [acquisition, purchase, retention],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-4">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default Marketing;
