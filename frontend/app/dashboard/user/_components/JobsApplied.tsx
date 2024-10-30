"use client"
import React from 'react';
import JobCard from "@/components/common/JobCard";
import { jobData, widgetData } from "@/constants";
const JobsApplied = () => {
    return <div className='px-6 py-8 border rounded-lg flex flex-col w-full gap-6'>
        <div className="w-full flex flex-col gap-8">
            <h4 className="text-2xl family2">
                Jobs Applied
            </h4>
            <div className="w-full flex lg:flex-row flex-col gap-4 lg:items-center justify-between">
                <form action="" className='max-w-[500px] lg:w-[400px] relative'>
                    <input type="text" placeholder='Search by companies, title, skill, tags' className="text-sm font-normal rounded-full w-full " />
                </form>
                <div className="flex items-center lg:justify-end">
                    <button className="shadows py-2 rounded-md cursor-pointer px-6 border text-dark bg-[#fafafa] text-base">Filter</button>

                </div>
            </div>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {
                    jobData.slice(0, 5)?.map((data, index) => {
                        return <JobCard index={index} key={index} data={data} />
                    })
                }

            </ol>
        </div>
    </div>;
}

export default JobsApplied;