import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { jobData } from "@/constants";
import JobCard from "@/components/common/JobCard";
import { BsSearch } from 'react-icons/bs';
import AnimateTextWord from '@/components/common/AnimateTextWord';

const DreamJob = () => {
    return <div className='min-h-[500px] lg:min-h-[550px] py-16 flex items-center gap-8 justify-center'>
        <div className="max-w-custom mx-auto w-[90%] grid grid-cols-1 gap-12">
            <div className="w-full flex flex-col lg:items-center lg:justify-center gap-8">
                <span className='text-base lg:text-lg font-normal lg:text-center max-w-[500px]'>
                    Your Dream Job
                </span>
                <h2 className="text-4xl lg:text-7xl max-w-[600px] lg:text-center leading-[1.2] family2 text-dark family2 lg:mx-auto">
                    <AnimateTextWord type='bigtext_Center'>
                        Explore and Find  your job here
                    </AnimateTextWord>
                   
                </h2>
              
                <div className="w-full flex items-center lg:justify-center gap-4">
                    <form action="" className='max-w-[100%] lg:max-w-[450px] lg:w-[90%] flex items-center relative'>
                        <span className="w-4 h-4 absolute right-6">
                            <BsSearch />
                        </span>
                        <input type="text" placeholder='Search by job title, skill, tags' className="text-sm input border pr-12 font-normal bg-white rounded-full w-full " />
                    </form>
                    <span className='flex'>
                        <button className="text-sm lg:text-sm px-4 lg:px-6 py-4 border rounded-full text-white bg-[#3e3aff] shadows">Get Started!</button>
                    </span>
                </div>
               
            </div>
            <div className="w-full flex flex-col lg:items-center lg:justify-center gap-4">
                <div className="flex p-2 md:p-4 items-center flex-wrap gap-4">
                    <button className="text-sm lg:text-sm px-4 lg:px-6 py-4 border rounded-full text-white bg-[#3e3aff] shadows">Popular Company</button>
                    <button className="text-sm lg:text-sm px-4 lg:px-6 py-4 rounded-full shadows border">Recommended Jobs</button>
                    <button className="text-sm lg:text-sm px-4 lg:px-6 py-4 rounded-full shadows border">New Jobs</button>

                </div>
                <ol className="lg:w-[90%] grid mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {
                        jobData.slice(0, 6)?.map((data, index) => {
                            return <JobCard type='home' index={index} key={index} data={data} />
                        })
                    }

                </ol>
                <div className="w-full flex flex-col mt-4 items-center justify-center gap-8">
                    <button className="text-sm lg:text-sm px-4 text-[#e28f54] bg-[#ffe1cc5a] lg:px-6 py-4 rounded-full shadows border">Show More</button>
                </div>
               

            </div>
        </div>
    </div>;
}

export default DreamJob;