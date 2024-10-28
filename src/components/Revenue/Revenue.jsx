import React from 'react';
import PendingTask from './PendingTask';

const Revenue = () => {
    return (
        <div  className='flex flex-col md:flex-row justify-between mt-6'>
            <div>
                <h3>Revenue</h3>
            </div>
            <PendingTask/>
        </div>
    );
};

export default Revenue;