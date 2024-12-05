
"use client"
import { IoDiamondSharp } from "react-icons/io5";
import { LuBadgePlus } from "react-icons/lu";
import { GiReceiveMoney } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { regionFilterData, FilterSearchType, payFilterData, JobType, positionFilterData, skillsFilterData, JobfilterData } from "@/constants";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
type JobListType = {
    filters: FilterSearchType;
    handleJobRoleChange: (payload: string) => void;
    handleJobEmploymentChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFilterChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isLoading?: boolean;
}
export default function Filter({ isLoading, filters, handleFilterChange, handleJobEmploymentChange, handleJobRoleChange }: JobListType) {

    return (
        <div className="w-full flex flex-wrap lg:items-center gap-4">
            <form action="" className='w-[100px] lg:w-[200px] relative'>
                <input type="text" placeholder='Search Jobs & Companies' className="text-sm font-normal rounded-full w-full " />
            </form>
            <div className="flex lg:flex-row flex-wrap lg:items-center gap-2">
                {/* role */}
                <Popover>
                    {" "}
                    <PopoverTrigger>
                        <span className="shadows py-3 flex items-center gap-2 rounded-full cursor-pointer px-4 border text-dark bg-[#fafafa] text-sm">
                            <IoDiamondSharp fontSize={'20px'} />
                            Role
                        </span>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <div className="max-w-[480px] shadow-lg px-4 py-6 rounded-xl bg-white flex flex-col gap-4">
                            <div className="w-full pb-4 border-b max-h-[170px] overflow-auto flex items-center flex-wrap gap-2">
                                {
                                    positionFilterData?.map((data:string, index:number) => {
                                        const isIncluded = filters.role.includes(data)
                                        return <span onClick={() => handleJobRoleChange(data)} key={index} 
                                            className={`py-2 ${isIncluded ?"bg-[#eceff4b9]":""} cursor-pointer px-3 family2 border rounded-full text-base`}>{data}</span>
                                    })
                                }
                            </div>
                            <div className="flex items-center justify-end">
                                <button className="shadows py-3 rounded-full cursor-pointer px-6 border text-white bg-[#000] text-sm">Apply</button>

                            </div>
                        </div>
                    </PopoverContent>
                </Popover>

                {/* skills */}

                <Popover>
                    {" "}
                    <PopoverTrigger>
                        <span className="shadows py-3 flex items-center gap-2 rounded-full cursor-pointer px-4 border text-dark bg-[#fafafa] text-sm">
                            <LuBadgePlus fontSize={'20px'} />
                            Skills
                        </span>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <div className="max-w-[480px] shadow-lg px-4 py-6 rounded-xl bg-white flex flex-col gap-6">
                            <form action="" className='w-full relative'>
                                <input type="text" placeholder='Search Skills' className="text-sm font-normal rounded-full w-full " />
                            </form>
                            <div className="w-full flex flex-col gap-2">
                                <h4 className="text-lg">Popular Skills</h4>
                                <div className="w-full border-b pb-4 max-h-[170px] overflow-auto flex items-center flex-wrap gap-2">
                                    {
                                        skillsFilterData?.map((data, index) => {
                                            return <span onClick={() => handleJobRoleChange(data)} key={index} className="py-2 cursor-pointerpx-3 family2 border rounded-full text-base">{data}</span>
                                        })
                                    }
                                </div>
                                <div className="flex items-center justify-end">
                                    <button className="shadows py-3 rounded-full cursor-pointer px-6 border text-white bg-[#000] text-sm">Apply</button>

                                </div>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
                {/* Rate */}
                <Popover>
                    {" "}
                    <PopoverTrigger>
                        <span className="shadows py-3 flex items-center gap-2 rounded-full cursor-pointer px-4 border text-dark bg-[#fafafa] text-sm">
                            <GiReceiveMoney fontSize={'20px'} />
                            Rate
                        </span>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <div className="max-w-[480px] shadow-lg px-4 py-6 rounded-xl bg-white flex flex-col gap-4">
                            <div className="w-full max-h-[170px] overflow-auto pb-4 border-b flex items-center flex-wrap gap-2">
                                {
                                    payFilterData?.map((data, index) => {
                                        return <span key={index} className="h-[70px] w-[80px] flex items-center justify-center family2 border rounded-md text-base">${data}/hr</span>
                                    })
                                }
                            </div>
                            <div className="flex items-center justify-end">
                                <button className="shadows py-3 rounded-full cursor-pointer px-6 border text-white bg-[#000] text-sm">Apply</button>

                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
                {/* // Location */}

                <Popover>
                    {" "}
                    <PopoverTrigger>
                        <span className="shadows py-3 flex items-center gap-2 rounded-full cursor-pointer px-4 border text-dark bg-[#fafafa] text-sm">
                            <MdLocationOn fontSize={'20px'} />
                            Location
                        </span>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <div className="max-w-[480px] shadow-lg px-4 py-6 rounded-xl bg-white flex flex-col gap-4">
                            <div className="w-full max-h-[170px] overflow-auto pb-4 border-b flex items-center flex-wrap gap-2">
                                {
                                    regionFilterData?.map((data, index) => {
                                        return <span key={index} className="h-[60px] px-4 min-w-[80px] flex items-center justify-center family2 border rounded-md text-base">{data}</span>
                                    })
                                }
                            </div>
                            <div className="flex items-center justify-end">
                                <button className="shadows py-3 rounded-full cursor-pointer px-6 border text-white bg-[#000] text-sm">Apply</button>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
                {/*Job Type */}
                <Popover>
                    {" "}
                    <PopoverTrigger>
                        <span className="shadows py-3 flex items-center gap-2 rounded-full cursor-pointer px-4 border text-dark bg-[#fafafa] text-sm">
                            <MdOutlineWork fontSize={'20px'} />
                            Job Type
                        </span>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        {/* JobfilterData */}
                        <div className="max-w-[480px] shadow-lg px-4 py-6 rounded-xl bg-white flex flex-col gap-4">
                            <h4 className="text-lg">Popular Job Type</h4>
                            <div className="w-full border-b pb-4 max-h-[170px] overflow-auto flex items-center flex-wrap gap-2">
                                {
                                    JobfilterData?.map((data, index) => {
                                        return <span key={index} className="py-2 px-3 family2 border rounded-full text-base">{data}</span>
                                    })
                                }
                            </div>
                            <div className="flex items-center justify-end">
                                <button className="shadows py-3 rounded-full cursor-pointer px-6 border text-white bg-[#000] text-sm">Apply</button>

                            </div>
                        </div>
                    </PopoverContent>
                </Popover>


            </div>
        </div>

    );
}


