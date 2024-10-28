import React from 'react';
import PendingTask from './PendingTask';

const Revenue = () => {
    return (
        <div  className='grid grid-cols-1 md:grid-cols-2 my-6 mx-4 lg:mx-0'>
            <div>
                <h3>Revenue</h3>
            </div>
            <PendingTask/>
        </div>
    );
};

export default Revenue;