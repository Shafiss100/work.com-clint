import React from 'react';

const Worker = () => {
    return (
        <div>
            <div className='w-100 rounded-lg  m-2 p-2 '>
                <h1 className='text-3xl text-center mb-5'>WORKER LIST</h1>
                <div className='worklist p-2 rounded-lg'>
                    <ol type="1">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ol>  

                </div>
            </div>
        </div>
    );
};

export default Worker;