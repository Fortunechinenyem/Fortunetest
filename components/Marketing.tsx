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
        backgroundColor: ["#5570F1", "#C4CAE8", "#FFCC91"],
        hoverBackgroundColor: ["#5570F1", "#C4CAE8", "#FFCC91"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    cutout: "60%",
    plugins: {
      legend: {
        labels: {
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => ({
                text: label,
                fillStyle: data.datasets[0].backgroundColor[i],
                strokeStyle: "#fff",
                lineWidth: 9,
                hidden:
                  isNaN(data.datasets[0].data[i]) ||
                  chart.getDatasetMeta(0).data[i].hidden,

                borderRadius: 20,
              }));
            }
            return [];
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="grid grid-cols-2 gap-4">
        {" "}
        <div className="text-gray-600">Marketing</div>
        <div className="text-gray-300 text-center">This week v</div>
      </div>

      <div className="mt-4">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default Marketing;
