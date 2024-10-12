import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link';
import React from 'react';
import { jobData, filterData } from '@/constants';

const JobList = () => {
    return <div className='py-12 md:py-24 flex items-center gap-8 justify-center'>
        <div className="flex flex-col-reverse lg:grid items-start lg:grid-cols-custom gap-8 mx-auto w-[90%]">
            <div className="w-full flex flex-col gap-12 md:gap-16">
                <form action="" className='w-full relative'>
                    <input type="text" placeholder='Search by companies, title, skill, tags' className="text-base font-normal w-full " />
                </form>
                <h4 className="text-lg family2 lg:text-3xl font-bold">
                    Recent posts
                    <span className="block text-base pt-4 font-normal">
                        20 new opportunities posted today!
                    </span>
                </h4>
                <ol className="flex flex-col gap-4">
                    {
                        jobData?.map((data, index) => {
                            return <li key={index} style={{
                                transition: "all .4s",
                                // filter:"blur(14px)"
                            }} className="flex w-full bg-[#fafafaa1] p-6 rounded-lg border shadows">
                                <Link href={`jobs/${index}`} className="flex w-full lg:flex-row flex-col lg:items-center gap-4 justify-between">
                                    <div className="flex items-center gap-8">
                                        <Image
                                            src={data?.companyImage}
                                            alt="Job image Logo Content"
                                            width={60}
                                            height={20}
                                        />
                                        <div className="flex flex-col">
                                            <h5 className="text-base md:text-lg font-normal capitalize">{data?.company}</h5>
                                            <h4 className="text-xl lg:text-2xl family2 font-semibold">{data?.jobtitle}</h4>
                                        </div>
                                    </div>
                                    <div className="flex lg:justify-end lg:items-end gap-2 md:gap-4 flex-col">
                                        <span className="text-base font-normal">Posted About 2 hrs ago</span>
                                        <span className="text-sm flex items-center font-bold  gap-2">
                                            <FaLocationArrow /> {data?.joblocation}
                                        </span>
                                    </div>

                                </Link>
                            </li>
                        })
                    }

                </ol>
            </div>
            <div className="w-[400px] px-8 py-12 border rounded-lg bg-white top-20 hidden lg:flex flex-col gap-8">
                <div className="flex pb-6 border-b flex-col gap-4">
                    <span className="block text-base md:text-lg font-semibold">
                        Desired Position
                    </span>
                    <ol className="flex flex-col gap-3">
                        {
                            filterData?.map((data, index) => {
                                return <li key={index} className="flex text-lg font-normal items-center gap-4">
                                    <input type="checkbox" name="" id="" />
                                    {data}
                                </li>
                            })
                        }
                    </ol>
                </div>

                <div className="flex pb-6 border-b flex-col gap-4">
                    <span className="block text-lg md:text-lg font-semibold">
                        Desired Location
                    </span>
                    <div className="flex flex-col gap-4">
                        <form action="" className='w-full relative'>
                            <input type="text" placeholder='Enter your location' className="text-sm font-normal w-full " />
                        </form>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <li className="flex text-lg font-normal items-center gap-4">
                        <input type="checkbox" name="" id="" />
                        Full Time
                    </li>
                    <li className="flex text-lg font-normal items-center gap-4">
                        <input type="checkbox" name="" id="" />
                      Freelance / Contractor
                    </li>
                </div>
                <button className="btn btn_1 text-lg">
                    Filter Jobs
                </button>
            </div>
        </div>
    </div>;
}

export default JobList;