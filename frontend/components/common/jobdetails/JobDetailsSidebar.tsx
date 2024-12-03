"use client"
import Image from "next/image";
import { motion } from 'framer-motion'
import { RxCross1 } from 'react-icons/rx'
import { useState } from "react";
import { slideSidebarLeft } from "@/constants/framer";
import JobApplicationForm from "./JobApplicationForm";
import {
    offJobDetailSidebar,
} from '@/services/modalSlice';
import { useDispatch, useSelector } from "react-redux";
import { useGetSingleJobQuery } from "@/services/jobApi";
import Loader from "../loader";
const JobDetailsSidebar = () => {
    const { jobDetailSidebar } = useSelector((store: any) => store.modal);
    const { jobID } = useSelector((store: any) => store.job);
    // 
    const dispatch = useDispatch();
    let { isLoading, data } = useGetSingleJobQuery(jobID)


    const [tab, setTab] = useState(0)
    // useGetSingleJobQuery
    return (
        <motion.div
            initial={{ opacity: 0 }}
            exit={{
                opacity: 0,
                transition: {
                    duration: .6,
                },
            }}
            animate={{ opacity: 1 }}
            className={`left-0 w-screen h-[100vh] fixed z-[600] top-0`}>
            <motion.div
                variants={slideSidebarLeft}
                initial="initial"
                animate={jobDetailSidebar ? "enter" : "exit"}
                exit="exit"
                className={`w-[100%] lg:w-[600px] h-full max-h-[100vh] overflow-auto absolute  top-0 bg-white z-30 p-6 sidebar_shadow`}>
                <div onClick={() => dispatch(offJobDetailSidebar(""))} className="w-12 h-12 rounded-full z-20 flex items-center hover:bg-[#eee] bg-[#fafafa] justify-center absolute cursor-pointer right-12 top-4">
                    <RxCross1 />
                </div>
                {
                    isLoading ? (
                        <div className="w-full h-full flex items-center justify-center">
                            <Loader type='dots' color={"#000"} />
                        </div>
                    ) : (
                        <div className="w-full flex flex-col gap-8">
                            {
                                tab === 0 ? <>
                                    <div className="flex items-center  gap-4">
                                        <Image
                                            src={data?.CompanyLogo}
                                            alt="Job image Logo Content"
                                            width={80}
                                            height={40}
                                        />
                                        <div className="flex flex-col">
                                            <h3 className="text-xl lg:text-2xl family2 family2 capitalize">{data?.Company}</h3>
                                            <h4 className="text-sm lg:text-lg font-normal">{data?.Title}</h4>
                                            <h4 className="text-xs lg:text-sm font-normal text-[#777]">{data?.Location}</h4>
                                        </div>


                                    </div>
                                    {/* requirement */}
                                    <div className="w-full flex items-center justify-between gap-4 p-4 bg-[#fafafa] rounded-lg">
                                        {/* salary */}
                                        <span className="text-lg md:text-xl flex-1 text-center border-r">

                                            <span className="family2">${data?.Salary} / month</span>
                                            <span className="block text-sm capitalize font-normal">
                                                salary
                                            </span>
                                        </span>
                                        {/* salary */}
                                        <span className="text-lg md:text-xl flex-1 text-center border-r ">
                                            <span className="family2">{data?.Experience} Years</span>
                                            <span className="block text-sm capitalize font-normal">
                                                Work experience
                                            </span>
                                        </span>
                                        {/* salary */}
                                        <span className="text-lg md:text-xl flex-1 text-center">

                                                <span className="family2">{data?.EmploymentType}</span>

                                            <span className="block text-sm capitalize font-normal">
                                                Job Type
                                            </span>
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-8">
                                        <div className="flex flex-col gap-4">
                                            <h4 className="text-base family2 lg:text-xl family2">
                                                Job Description
                                            </h4>
                                            <h5 className=" text-xs lg:text-base">
                                                {
                                                    data?.Description
                                                }
                                            </h5>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <h4 className="text-base family2 lg:text-xl family2">
                                                Job Responsibility
                                            </h4>
                                            <ol className="list-disc pl-6 lg:pl-8 flex-col gap-3 flex text-xs lg:text-base">
                                                {
                                                    data?.Responsibility?.map((data: string, index: string) => {
                                                        return (
                                                            <li key={index}>{data}</li>
                                                        )
                                                    })
                                                }
                                            </ol>
                                        </div>
                                    </div>
                                    <button onClick={() => setTab(1)} className="text-sm lg:text-base btn btn_1">Apply for this position</button>
                                </> : <JobApplicationForm />
                            }
                            {/* companys Image */}

                        </div>
                    )
                }
            </motion.div>
            <div style={{
                transition: "all .3s"
            }} onClick={() => dispatch(offJobDetailSidebar(""))} className={`${jobDetailSidebar ? "opacity-100 right-[0%]" : "opacity-0 -right-[100%]"} w-full top-0 absolute bg-[rgba(0,0,0,.1)] h-full z-10`}></div>
        </motion.div>
    )
}

export default JobDetailsSidebar;
