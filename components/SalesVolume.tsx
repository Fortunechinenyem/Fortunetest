import React from "react";
import { AiOutlinePieChart } from "react-icons/ai";
// import { fetchSalesVolumeData } from "../pages/api/salesVolume";

const SalesVolume: React.FC = () => {
  // const [salesData, setSalesData] = useState<any[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   fetchSalesVolumeData()
  //     .then((data) => {
  //       setSalesData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(true);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return <div>Loading Sales Volume...</div>;
  // }

  // if (error) {
  //   return <div>Error fetching Sales Volume data</div>;
  // }

  // const totalSales = salesData.reduce((total, item) => total + item.sales, 0);
  // const totalVolume = salesData.reduce((total, item) => total + item.volume, 0);

  return (
    <div>
      <div className="bg-white rounded-lg p-4 shadow-md grid grid-cols-2 gap-4">
        <div className="text-center">
          <AiOutlinePieChart />
        </div>
        <div className="text-gray-300 text-center">This week v</div>
        <div className="">
          <p className="text-gray-400 "> Sales</p>
          <p className="mt-2 text-gray-600 ">N4,000,000.00</p>
        </div>
        <div className="">
          <p className="text-gray-400 text-center"> Volume</p>
          <p className="mt-2 text-gray-600 text-center">
            450 <span className="text-xs text-[#1DC198]">+20.00%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesVolume;
