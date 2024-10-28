import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ActivityLog = () => {
    return (
        <div className='border shadow-md  rounded-md p-4 mt-10 lg:mt-0 w-full'>
      <div className='flex justify-between '>
      <h3>Activity Log</h3>
      <BsThreeDotsVertical/>
      </div>
      <div className='flex justify-between items-center mt-4 border rounded-md p-3 '>
       <div>
       <h4 className='text-[#757D85]'>12-04-2024 10:14 PM</h4>
       <h3 className='font-semibold'>Modified New Item</h3>
       </div>
        <span className='text-[#757D85]'>Jakit Sarkar</span>
      </div>
      <div className='flex justify-between items-center mt-4 border rounded-md p-3 '>
       <div>
       <h4 className='text-[#757D85]'>12-04-2024 10:14 PM</h4>
       <h3 className='font-semibold'>Modified New Item</h3>
       </div>
        <span className='text-[#757D85]'>Jakit Sarkar</span>
      </div>
      <div className='flex justify-between items-center mt-4 border rounded-md p-3 '>
       <div>
       <h4 className='text-[#757D85]'>12-04-2024 10:14 PM</h4>
       <h3 className='font-semibold'>Modified New Item</h3>
       </div>
        <span className='text-[#757D85]'>Jakit Sarkar</span>
      </div>
      <div className='flex justify-between items-center mt-4 border rounded-md p-3 '>
       <div>
       <h4 className='text-[#757D85]'>12-04-2024 10:14 PM</h4>
       <h3 className='font-semibold'>Modified New Item</h3>
       </div>
        <span className='text-[#757D85]'>Jakit Sarkar</span>
      </div>
      <div className='flex justify-between items-center mt-4 border rounded-md p-3 '>
       <div>
       <h4 className='text-[#757D85]'>12-04-2024 10:14 PM</h4>
       <h3 className='font-semibold'>New Items Approved</h3>
       </div>
        <span className='text-[#757D85]'>Jakit Sarkar</span>
      </div>
    
        </div>
    );
};

export default ActivityLog;