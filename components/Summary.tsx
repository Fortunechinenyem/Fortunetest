import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Sept 10", sales: 90 },
  { date: "Sept 11", sales: 40 },
  { date: "Sept 12", sales: 65 },
  { date: "Sept 13", sales: 30 },
  { date: "Sept 14", sales: 80 },
  { date: "Sept 15", sales: 40 },
  { date: "Sept 16", sales: 80 },
];

const Summary: React.FC<{
  title: string;
  data: { date: string; sales: number }[];
}> = ({ title, data }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-gray-600 mb-4">Summary</div>
        <div className="text-center  bg-[#EFEDFF] rounded-md text-center mt-2 ">
          Sales v
        </div>
        <div className="text-gray-300 text-center">Last 7 Days</div>
      </div>

      <div
        className="text-gray-300 text-xs"
        style={{ width: "100%", height: 200 }}
      >
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#8884d8" barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Summary;
