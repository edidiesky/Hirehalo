"use client"
import React from 'react';
import TableCard from "@/components/common/TableCard";
const JobsCreated = () => {
    return <div className='px-6 py-8 border rounded-lg flex flex-col w-full gap-6'>
        <div className="w-full flex items-center justify-between gap-4">
            <h3 className="text-xl block lg:text-2xl text-dark family2 font-semibold">
                JobsCreated
            </h3>
            <div className="w-full flex flex-row gap-4 md:items-center justify-end">
                <form action="" className='max-w-[240px] md:w-[200px] relative'>
                    <input type="text" placeholder='Search candidate' className="text-sm font-normal rounded-full w-full " />
                </form>
                <div className="flex items-center md:justify-end">
                    <button className="shadows py-2 rounded-full cursor-pointer px-6 border text-white bg-[#000] text-base">Add Cabdidate</button>

                </div>
            </div>
        </div>
    </div>;
}

export default JobsCreated;