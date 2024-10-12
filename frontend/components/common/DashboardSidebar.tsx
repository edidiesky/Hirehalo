"use client"
import Link from 'next/link';
import React from 'react';
import { HiBars3BottomLeft } from "react-icons/hi2";
const DashboardSidebar = ({ sidebarlinks }: { sidebarlinks?: { id: number; tab: { title: string; path: string; icon: React.JSX.Element; }; list: never[]; }[] }) => {
    return (
        <div className='w-[310px] bg-[#161818] lg:block hidden h-[100vh] overflow-auto sticky top-0'>
            <div className="w-full h-full px-3 py-3 flex flex-col justify-between">
                <div className="w-full flex flex-col justify-between">
                    <div className="py-2 rounded-md w-full px-3 text-lg md:text-xl font-normal
                     text-white flex items-center cursor-pointer gap-2 hover:bg-[#282c2b]">
                        <HiBars3BottomLeft fontSize={'24px'} />   HireHalo
                    </div>

                    <div className="py-2 rounded-md w-full px-4 font-normal
                     text-white flex items-center cursor-pointer gap-2 hover:bg-[#282c2b]">
                        <div className="w-6 h-6 rounded-md bg-[#A1718A]"></div>
                        <span className="text-sm family2 font-semibold">
                            Edidiong Essien
                            <span className="text-xs block font-normal text-[#969A9A]">Candidate Account</span>
                        </span>
                    </div> 
                    <ol className="pt-3 flex flex-col text-sm font-semibold gap-1">
                        {
                            sidebarlinks?.map((data, index) => {
                                return <li key={index} className="w-full">
                                    <Link href={`/dashboard${data.tab.path}`} className='flex py-3 hover:text-white text-[#969a9acb] font-semibold
                                 rounded-md px-3 hover:bg-[#282c2b] w-full items-center gap-4'>
                                        <span className=''>
                                            {data?.tab?.icon}
                                        </span>   <span className="flex-1">
                                            {data?.tab?.title}
                                        </span>
                                    </Link>
                                </li>
                            })
                        }
                    </ol>
                </div>
                <div className="w-full flex flex-col justify-between">
                    <div className="py-2 rounded-md w-full px-3 font-normal
                     text-white flex items-center cursor-pointer gap-2 hover:bg-[#282c2b]">
                        <div className="w-8 h-8 rounded-full bg-[#A1718A]"></div>
                        <span className="text-sm family2 font-semibold">
                            Edidiong Essien
                            <span className="text-xs block font-normal text-[#969A9A]">Candidate Account</span>
                        </span>
                    </div> 
                </div>
            </div>
        </div>
    );
}


export default DashboardSidebar;