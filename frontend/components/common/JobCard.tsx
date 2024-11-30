"use client"
import Image from "next/image";
import { FaBookmark } from "react-icons/fa";
import {
    onJobDetailSidebar,
} from '@/services/modalSlice';
import { useDispatch } from "react-redux";
import { JobType } from "@/constants";
import { setJobID } from "@/services/jobSlice";
type JobCardType = { data: JobType, index: number, type?: string }

const JobCard = ({ data, type }: JobCardType) => {
    const dispatch = useDispatch();

    return <>


        <li
            style={{
                transition: "all .4s"
            }} className="flex w-full bg-[#fffffff6] p-3 pb-4 rounded-2xl border shadows">
            <div className="flex w-full flex-col gap-4 justify-between">
                <div style={{
                    backgroundColor: `${data?.BgColor}`
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
                        <div className="flex flex-1 flex-col">
                            <h5 className="text-sm lg:text-base font-normal capitalize">{data?.Company}</h5>
                            <h4 className={`${type === 'home' ? "text-xl lg:text-2xl" : "text-base lg:text-lg"}  family2`}>{data?.Title}</h4>
                        </div>
                        <Image
                            src={data?.CompanyLogo}
                            alt="Job image Logo Content"
                            width={60}
                            height={20}
                        />

                    </div>
                    <div className="flex items-center flex-wrap pr-8 gap-2">
                        <span className="p-2 rounded-full border text-xs border-[rgba(0,0,0,.4)]">
                            {data?.ExperienceLevel}
                        </span>
                        <span className="p-2 rounded-full border text-xs border-[rgba(0,0,0,.4)]">
                            Senior Level
                        </span>
                        <span className="p-2 rounded-full border text-xs border-[rgba(0,0,0,.4)]">
                            Remote
                        </span>
                        <span className="p-2 rounded-full border text-xs border-[rgba(0,0,0,.4)]">
                            Javascript
                        </span>
                        <span className="p-2 rounded-full border text-xs border-[rgba(0,0,0,.4)]">
                            Distant
                        </span>
                    </div>
                </div>

                <div className="flex gap-2 px-3 lg:gap-4 items-center justify-between">
                    <span className={`${type === 'home' ? "text-lg lg:text-xl" : "text-sm lg:text-base"} flex-1`}>
                        <span className="family2">
                            ${data?.Salary} /hr
                        </span>
                        <span className="font-normal block text-xs md:text-base">{data?.Location}</span>
                    </span>
                    <button onClick={() => {
                        dispatch(setJobID(data?.ID))
                        dispatch(onJobDetailSidebar(""))
                    }} className="shadows py-2 rounded-full cursor-pointer px-4 border text-white bg-[#000] text-xs">Details</button>

                </div>

            </div>
        </li>
    </>
}


export default JobCard;