import React from "react";
import { Doughnut } from "react-chartjs-2";
import ActivityLog from "./ActivityLog";
import { BsThreeDotsVertical } from "react-icons/bs";
import bag from "../../assets/bag.png";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CurrentOrder = () => {
  const progressData = [
    { label: "Active", value: 384, percentage: 43, color: "bg-[#00997E]" },
    { label: "Pending", value: 125, percentage: 20, color: "bg-[#41A3FF]" },
    { label: "Refunded", value: 234, percentage: 37, color: "bg-[#FFA133]" },
    { label: "Cancelled", value: 234, percentage: 37, color: "bg-[#FF1717]" },
  ];

  // Data for the doughnut chart
  const doughnutData = {
    datasets: [
      {
        data: [43, 20, 37], 
        backgroundColor: ["#00997E", "#FFA133", "#FF1717"], 
        borderWidth: 10,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mx-4 lg:mx-0 mb-4">
      <div className="border p-4 rounded-md">
        {/* header */}
        <div className="flex justify-between ">
          <h3 className="font-semibold">Current Order Summary</h3>
          <BsThreeDotsVertical />
        </div>

        {/* new order */}
        <div className="bg-[#F7EBF2] p-4 rounded-md mt-8 flex justify-between items-center">
          <div className="flex items-center">
            <img src={bag} alt="Bag" className="h-5 mr-2" />
            <h4 className="text-[#A1045A] font-bold">125 new orders!</h4>
          </div>
          <button className="text-[#A1045A] bg-white px-4 py-1 rounded-md">Manage Order</button>
        </div>

        {/* card section */}
        <div className="flex justify-between items-center mt-3">
          {progressData.map((item, index) => (
            <div key={index} className="border p-4 rounded-md w-[110px] mr-4 lg:mr-0">
              <h1 className="text-2xl md:text-4xl font-bold">{item.value}</h1>
              <p className="text-[#757D85]">{item.label}</p>
            </div>
          ))}
        </div>

        {/* circle and progress bar */}
        <div className="flex justify-between items-center mt-6 space-x-3">
          {/* Doughnut Chart */}
          <div className="w-[250px] h-[250px]">
            <Doughnut data={doughnutData} options={{ maintainAspectRatio: false }} />
          </div>

          {/* progress bars */}
          <div className="w-full">
            {progressData.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">
                    {item.label} ({item.percentage}%)
                  </span>
                  <span className="text-gray-500">{item.value}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${item.color}`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ActivityLog />
    </div>
  );
};

export default CurrentOrder;
