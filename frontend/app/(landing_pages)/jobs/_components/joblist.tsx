"use client"
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa'
import { JobfilterData, JobType, LocationfilterData } from '@/constants';
import { useDispatch } from 'react-redux';
import { onJobDetailSidebar } from '@/services/modalSlice';
import { setJobID } from "@/services/jobSlice";
import CardLoader from '@/components/common/loader/CardLoader';

const JobList = ({ isLoading, job }: { isLoading: boolean, job: JobType[] }) => {
    const dispatch = useDispatch()
    return <div className='py-20 flex items-center gap-8 justify-center'>
        <div className="flex flex-col-reverse lg:grid items-start lg:grid-cols-custom_2 relative gap-8 mx-auto max-w-[1200px] w-[90%]">
            <div className="w-[350px] px-8 py-8 border sticky rounded-lg bg-white top-20 hidden lg:flex flex-col gap-4">
                <div className="flex pb-6 border-b flex-col gap-2">
                    <span className="block text-lg lg:text-lg family2">
                        Date Posted
                    </span>
                    <div className="flex flex-col gap-4">
                        <form action="" className='w-full relative'>
                            <input type="text" placeholder='Enter your location' className="text-sm border input rounded-xl font-normal w-full " />
                        </form>
                    </div>
                </div>
                <div className="flex pb-6 border-b flex-col gap-3">
                    <span className="block text-base lg:text-lg family2">
                        Job Type
                    </span>
                    <ol className="flex flex-wrap gap-3">
                        {
                            JobfilterData?.map((data, index) => {
                                return <li key={index} className="flex text-sm md:text-base font-normal items-center gap-3">
                                    <input type="checkbox" name="" id="" />
                                    {data}
                                </li>
                            })
                        }
                    </ol>
                </div>
                {/* location */}
                <div className="flex pb-6 border-b flex-col gap-3">
                    <span className="block text-base lg:text-lg family2">
                        Job Location
                    </span>
                    <ol className="flex flex-wrap gap-3">
                        {
                            LocationfilterData?.map((data, index) => {
                                return <li key={index} className="flex text-sm md:text-base font-normal items-center gap-3">
                                    <input type="checkbox" name="" id="" />
                                    {data}
                                </li>
                            })
                        }
                    </ol>
                </div>

                <button className="btn btn_1 text-lg">
                    Filter Jobs
                </button>
            </div>
            <div className="w-full flex flex-col gap-4 lg:gap-6">
                <form action="" className='w-full relative'>
                    <input type="text" placeholder='Search by companies, title, skill, tags' className="text-base input rounded-md font-normal w-full " />
                </form>
                <div className="flex flex-col gap-1">
                    <h4 className="text-lg family2 lg:text-3xl family2">
                        Recent posts

                    </h4>
                    <span className="block text-base pt-3 font-normal">
                        20 new opportunities posted today!
                    </span>
                </div>
                {
                    isLoading ? <div className="w-full flex flex-col gap-4">
                        {
                            Array(8).fill("").map((_, index) => {
                                return <CardLoader type='search' key={index} />
                            })
                        }
                    </div> : (
                        <ol className="flex flex-col gap-4">
                            {
                                job?.map((data, index) => {
                                    return <li onClick={() => {
                                        dispatch(onJobDetailSidebar(""))
                                        dispatch(setJobID(data?.ID))

                                    }} key={index} className="flex w-full bg-[#fff] p-6 rounded-lg border shadows">
                                        <div className="flex w-full flex-col gap-4 justify-between">
                                            <div className="flex items-start justify-between w-full">
                                                <div className="flex items-center gap-8">
                                                    <Image
                                                        src={data?.CompanyLogo}
                                                        alt="Job image Logo Content"
                                                        width={60}
                                                        height={20}
                                                    />
                                                    <div className="flex flex-col">
                                                        <h4 className="text-lg lg:text-xl family2 family2">{data?.Title}</h4>
                                                        <h5 className="text-sm lg:text-base font-normal capitalize">{data?.Company}</h5>

                                                    </div>
                                                </div>
                                                <div className="flex lg:justify-end lg:items-end gap-2 flex-col">

                                                    <span className="text-base flex items-center family2  gap-2">
                                                        <FaLocationArrow />
                                                        Marina East, SingaPore
                                                        {/* {data?.joblocation} */}
                                                    </span>
                                                    <span className="text-sm font-normal">Posted About 2 hrs ago</span>
                                                </div>
                                            </div>

                                            <ol className="list-disc px-4 flex-col gap-1 flex text-sm lg:text-base">
                                                {
                                                    data?.Responsibility?.map((data: any, index: any) => {
                                                        return (
                                                            <li key={index}>{data}</li>
                                                        )
                                                    })
                                                }
                                            </ol>
                                        </div>
                                    </li>
                                })
                            }

                        </ol>
                    )
                }
            </div>

        </div>
    </div>;
}

export default JobList;