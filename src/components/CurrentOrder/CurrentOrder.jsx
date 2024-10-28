import React from "react";
import ActivityLog from "./ActivityLog";
import { BsThreeDotsVertical } from "react-icons/bs";
import bag from "../../assets/bag.png";

const CurrentOrder = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mx-4 lg:mx-0">
      <div className="border p-4 rounded-md">
        {/* header */}
        <div className="flex justify-between ">
          <h3 className="font-semibold">Current Order Summary</h3>
          <BsThreeDotsVertical />
        </div>

            {/* new order  */}
        <div className="bg-[#F7EBF2] p-4 rounded-md mt-8 flex justify-between items-center">
            <div className="flex items-center">
                <img src={bag} alt="Bag"  className="h-5 mr-2"/>
                <h4 className="text-[#A1045A] font-bold">125 new orders!</h4>
            </div>
            <button className="text-[#A1045A] bg-white px-4 py-1 rounded-md">Manage Order</button>
        </div>
        
        {/* card section */}
        <div className="flex justify-between items-center   mt-3">
            <div className="border p-4 rounded-md w-[110px] mr-4 lg:mr-0">
                <h1 className="text-2xl md:text-4xl font-bold">389</h1>
                <p className="text-[#757D85]">Active</p>
            </div>
            <div className="border p-4 rounded-md w-[110px] mr-4 lg:mr-0">
                <h1 className="text-2xl md:text-4xl font-bold">125</h1>
                <p className="text-[#757D85]">Pending</p>
            </div>
            <div className="border p-4 rounded-md w-[110px] mr-4 lg:mr-0">
                <h1 className="text-2xl md:text-4xl font-bold">234</h1>
                <p className="text-[#757D85]">Refunded</p>
            </div>
            <div className="border p-4 rounded-md w-[110px] mr-4 lg:mr-0">
                <h1 className="text-2xl md:text-4xl font-bold">234</h1>
                <p className="text-[#757D85]">Cancelled</p>
            </div>
        </div>
      </div>

      <ActivityLog />
    </div>
  );
};

export default CurrentOrder;
