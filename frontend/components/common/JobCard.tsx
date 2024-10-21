"use client"
import Image from "next/image";
import { FaBookmark } from "react-icons/fa";
import { AnimatePresence } from 'framer-motion'
import JobDetailsSidebar from "./jobdetails/JobDetailsSidebar";
import { useState } from "react";
type JobCardType = { data: { bgColor: string, company: string, jobtitle: string, companyImage: string }, index: number, type?:string }

const JobCard = ({ index, data, type }: JobCardType) => {
    const [modal, setModal] = useState(false)
    return <>
        <AnimatePresence mode='wait'>
            {
                modal && <JobDetailsSidebar setModal={setModal} modal={modal} />
            }
        </AnimatePresence>

        <li key={index} style={{
            transition: "all .4s"
        }} className="flex w-full bg-[#fffffff6] p-3 pb-4 rounded-2xl border shadows">
            <div className="flex w-full flex-col gap-4 justify-between">
                <div style={{
                    backgroundColor: `${data?.bgColor}`
                }} className="flex p-4 gap-4 flex-col rounded-xl">
                    <div className="flex items-center justify-between gap-8">
                        <span className="p-2 rounded-full bg-[#fff] text-sm">
                            20 May 2024
                        </span>
                        <div className="w-8 h-8 bg-white flex text-sm cursor-pointer items-center justify-center rounded-full">
                            <FaBookmark />
                        </div>
                    </div>
                    <div className="flex items-center justify-between  gap-8">
                        <div className="flex flex-col">
                            <h5 className="text-sm md:text-base font-normal capitalize">{data?.company}</h5>
                            <h4 className={`${type === 'home' ? "text-xl lg:text-2xl" :"text-base lg:text-lg"}  family2 font-bold`}>{data?.jobtitle}</h4>
                        </div>
                        <Image
                            src={data?.companyImage}
                            alt="Job image Logo Content"
                            width={60}
                            height={20}
                        />

                    </div>
                    <div className="flex items-center flex-wrap md:pr-8 gap-2">
                        <span className="p-2 rounded-full border text-xs font-semibold border-[rgba(0,0,0,.4)]">
                            Part-time
                        </span>
                        <span className="p-2 rounded-full border text-xs font-semibold border-[rgba(0,0,0,.4)]">
                            Senior Level
                        </span>
                        <span className="p-2 rounded-full border text-xs font-semibold border-[rgba(0,0,0,.4)]">
                            Remote
                        </span>
                        <span className="p-2 rounded-full border text-xs font-semibold border-[rgba(0,0,0,.4)]">
                            Javascript
                        </span>
                        <span className="p-2 rounded-full border text-xs font-semibold border-[rgba(0,0,0,.4)]">
                            Distant
                        </span>
                    </div>
                </div>

                <div className="flex gap-2 px-3 md:gap-4 items-center justify-between">
                    <span className={`${type === 'home' ? "text-lg lg:text-xl" : "text-sm lg:text-base"}  family2 font-bold`}>$250 /hr
                        <span className="font-normal block text-xs">San-fransico, United-States</span>
                    </span>
                    <button onClick={() => setModal(true)} className="shadows py-2 rounded-full cursor-pointer px-4 border text-white bg-[#000] text-xs">Details</button>

                </div>

            </div>
        </li>
    </>
}


export default JobCard;