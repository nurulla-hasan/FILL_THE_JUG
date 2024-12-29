import React, { useEffect, useState } from 'react';

const Jug = ({ fillBy }) => {

    const [levelChange, setLevelChange] = useState(false);


    useEffect(() => {
        setLevelChange(true)

        const timeOutId = setTimeout(() => {
            setLevelChange(false)
        }, 3000);

        return () => {
            clearTimeout(timeOutId);
        }
    }, [fillBy])


    return (
        <div className='w-[300px] h-[450px] relative border-black border-t-0 border-2 rounded-b-3xl overflow-hidden'>
            <div className={`w-full absolute bottom-0 bg-blue-500 rounded-b-3xl ${levelChange ? 'animate-wave' : ''}`} style={{ height: `${fillBy}%` }}>
                <span className='text-white font-bold text-xl animate-pulse'>{Math.round(fillBy)}%</span>
            </div>
        </div>
    );
};

export default Jug;