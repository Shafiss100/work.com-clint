import React from 'react';
import { Link } from 'react-router-dom';

const Worker = () => {
    return (
        <div>
            <div className='w-100 rounded-lg  m-2 p-2 '>
                <button className='btn btn-secondary'>be to hired</button>
                <h1 className='text-3xl text-center mb-5'>WORKER LIST</h1>
                <div className='worklist bg-primary p-2 rounded-lg'>
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