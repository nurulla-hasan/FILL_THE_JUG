import React from 'react';

const Jug = ({ fillBy }) => {
    return (
        <div className='w-[300px] h-[450px] relative border-black border-t-0 border-2 rounded-b-3xl overflow-hidden'>
            <div style={{ height: `${fillBy}%` }} className='w-full absolute bottom-0 bg-blue-500 rounded-b-3xl animate-wave '>
                <span className='text-white font-bold text-xl animate-pulse'>{Math.round(fillBy)}%</span>
            </div>
        </div>
    );
};

export default Jug;