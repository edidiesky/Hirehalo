import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { whyChooseUs } from "@/constants";
import JobCard from "@/components/common/JobCard";
import { BsSearch } from 'react-icons/bs';
import AnimateTextWord from '@/components/common/AnimateTextWord';

const WhyChoose = () => {
    return <div className='min-h-[500px] lg:min-h-[550px] py-16 flex items-center gap-8 justify-center'>
        <div className="max-w-custom mx-auto w-[90%] grid grid-cols-1 gap-12">
            <div className="w-full flex flex-col items-center justify-center gap-8">
                <span className='text-base lg:text-lg font-normal lg:text-center max-w-[500px]'>
                    <AnimateTextWord type='bigtext'>
                        Choose Me
                    </AnimateTextWord>

                </span>
                <h2 className="text-4xl lg:text-7xl max-w-[600px] mx-auto lg:text-center leading-[1.2] family2 text-dark family2">
                    <AnimateTextWord type='bigtext'>
                        Why Connect is right for you?
                    </AnimateTextWord>

                </h2>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4">
                <div className="flex p-4 items-center flex-wrap gap-4">
                    <button className="text-sm lg:text-sm px-4 lg:px-6 py-4 border rounded-full text-white bg-[#3e3aff] shadows">Popular Company</button>
                    <button className="text-sm lg:text-sm px-4 lg:px-6 py-4 rounded-full shadows border">Recommended Jobs</button>
                    <button className="text-sm lg:text-sm px-4 lg:px-6 py-4 rounded-full shadows border">New Jobs</button>

                </div>
                <ol className="lg:w-[90%] grid mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {
                        whyChooseUs?.map((data, index) => {
                            return <div key={index} className="w-full justify-between flex flex-col gap-4 min-h-[260px] lg:min-h-[310px]  border p-6 rounded-2xl">
                                <div className="w-full flex items-center justify-between"></div>
                                <h4 className="text-xl lg:text-3xl">
                                    <span className="family2">
                                        <AnimateTextWord type='bigtext'>
                                            {
                                                data?.text
                                            }
                                        </AnimateTextWord>

                                    </span>
                                    <span className="block text-sm pt-3 font-normal">

                                        <AnimateTextWord>
                                            {data?.subtext}
                                        </AnimateTextWord>

                                    </span>
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