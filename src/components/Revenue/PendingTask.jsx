import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const PendingTask = () => {
    return (
        <div className='border shadow-md  rounded-md p-4'>
      <div className='flex justify-between '>
      <h3>Pending Tasks</h3>
      <BsThreeDotsVertical/>
      </div>
      <div className='flex justify-between items-center mt-4 border rounded-md p-3 '>
        <h4>Restaurant Account</h4>
        <span className='bg-[#F6E6EF] text-[#A1045A] font-semibold px-3 py-[6px] rounded-md'>10</span>
      </div>
      <div className='flex justify-between items-center mt-3 border rounded-md p-3'>
        <h4>Restaurent Onboarding</h4>
        <span className='bg-[#F6E6EF] text-[#A1045A] font-semibold px-3 py-[6px] rounded-md'>10</span>
      </div>
      <div className='flex justify-between items-center mt-3 border rounded-md p-3'>
        <h4>Ride Partners</h4>
        <span className='bg-[#F6E6EF] text-[#A1045A] font-semibold px-3 py-[6px] rounded-md'>10</span>
      </div>
      <div className='flex justify-between items-center mt-3 border rounded-md p-3'>
        <h4>Rider Onboarding</h4>
        <span className='bg-[#F6E6EF] text-[#A1045A] font-semibold px-3 py-[6px] rounded-md'>10</span>
      </div>
      <div className='flex justify-between items-center mt-3 border rounded-md p-3'>
        <h4>Support Tickets</h4>
        <span className='bg-[#F6E6EF] text-[#A1045A] font-semibold px-3 py-[6px] rounded-md'>10</span>
      </div>
        </div>
    );
};

export default PendingTask;