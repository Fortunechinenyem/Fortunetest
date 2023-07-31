import React, { useEffect, useState } from "react";
import { fetchSalesVolumeData } from "../pages/api/salesVolume";

const SalesVolume: React.FC = () => {
  const [salesData, setSalesData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchSalesVolumeData()
      .then((data) => {
        setSalesData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading Sales Volume...</div>;
  }

  if (error) {
    return <div>Error fetching Sales Volume data</div>;
  }

  // Calculate total sales and volume
  const totalSales = salesData.reduce((total, item) => total + item.sales, 0);
  const totalVolume = salesData.reduce((total, item) => total + item.volume, 0);

  return (
    <div>
      <h2>Sales Volume</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold">Total Sales</h3>
          <p className="text-2xl mt-2">${totalSales}</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold">Total Volume</h3>
          <p className="text-2xl mt-2">{totalVolume} units</p>
        </div>
      </div>
    </div>
  );
};

export default SalesVolume;
