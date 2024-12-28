import React, { useState } from 'react';
import Jug from './Jug';


const Filler = () => {

    const [fillingPercentage, setFillingPercentage] = useState(0);
    console.log(fillingPercentage);
    const fillTheJug = () => {
        setFillingPercentage((prev) => {

            if (prev === 0) return 1;

            const change = prev + prev * 0.4;
            if (change > 100) return 100;
            return change;
        })
    }


    const emptyTheJug = () => {
        setFillingPercentage((prev) => {

            if (prev < 1) return 0;
            return prev - prev * 0.2;
        })
    }

    return (
        <div className='flex flex-col items-center'>
            <Jug fillBy={fillingPercentage}></Jug>

            <div className='flex gap-2 mt-10'>
                <button onClick={fillTheJug} className='w-[50px] h-[50px] rounded-full bg-green-500 text-white'>&#8593;</button>

                <button onClick={emptyTheJug} className='w-[50px] h-[50px] rounded-full bg-red-500 text-white'>&#8595;</button>
            </div>
        </div>
    );
};

export default Filler;