import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { whyChooseUs } from "@/constants";
import JobCard from "@/components/common/JobCard";
import { BsSearch } from 'react-icons/bs';
const WhyChoose = () => {
    return <div className='min-h-[500px] md:min-h-[550px] py-16 flex items-center gap-8 justify-center'>
        <div className="max-w-custom mx-auto w-[90%] grid grid-cols-1 gap-12">
            <div className="w-full flex flex-col items-center justify-center gap-8">
                <span className='text-base md:text-lg font-normal lg:text-center max-w-[500px]'>
                    Choose Me
                </span>
                <h2 className="text-5xl lg:text-7xl md:text-center leading-[1.2] family2 text-dark font-semibold">
                    Why Connect is right <br /> for you?
                </h2>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4">
                <div className="flex p-4 items-center flex-wrap gap-4">
                    <button className="text-sm lg:text-sm px-4 lg:px-6 py-4 border rounded-full text-white bg-[#3e3aff] shadows">Popular Company</button>
                    <button className="text-sm md:text-sm px-4 md:px-6 py-4 rounded-full shadows border">Recommended Jobs</button>
                    <button className="text-sm md:text-sm px-4 md:px-6 py-4 rounded-full shadows border">New Jobs</button>

                </div>
                <ol className="md:w-[90%] grid mt-4 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {
                        whyChooseUs?.map((data, index) => {
                            return <div key={index} className="w-full justify-between flex flex-col gap-4 min-h-[260px] md:min-h-[310px]  border p-6 rounded-2xl">
                                <div className="w-full flex items-center justify-between"></div>
                                <h4 className="text-xl md:text-3xl font-semibold">
                                    <span className="family2">{
                                        data?.text
                                    }</span>
                                    <span className="block text-sm pt-3 font-normal">{data?.subtext}</span>
                                </h4>
                            </div>
                        })
                    }

                </ol>

            </div>
        </div>
    </div>;
}

export default WhyChoose;