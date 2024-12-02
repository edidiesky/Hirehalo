"use client"
import moment from 'moment'
import { JobfilterData, JobType, LocationfilterData } from '@/constants';
import { useDispatch } from 'react-redux';
import CardLoader from '@/components/common/loader/CardLoader';
import { FilterSearchType } from '../page';
import JobCard from '@/components/common/JobCard';
// handleJobEmploymentChange
type JobListType = {
    filters: FilterSearchType;
    handleJobLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleJobEmploymentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isLoading: boolean;
    job: JobType[]
}

const JobList = ({ isLoading, job, filters, handleFilterChange, handleJobEmploymentChange, handleJobLocationChange }: JobListType) => {

    return (
        <div className='py-20 flex items-center gap-8 justify-center'>
            <div className="flex flex-col-reverse lg:grid items-start lg:grid-cols-custom_2 relative gap-8 mx-auto max-w-[1200px] w-[90%]">
                <div className="w-[350px] px-8 py-8 border sticky rounded-lg bg-white top-20 hidden lg:flex flex-col gap-4">
                    <div className="flex pb-6 border-b flex-col gap-2">
                        <span className="block text-lg lg:text-lg family2">
                            Date Posted
                        </span>
                        <div className="flex flex-col gap-4">
                            <input
                                onChange={handleFilterChange}
                                name={'location'}
                                value={filters?.location}
                                type="text" placeholder='Enter your location' className="text-sm border input rounded-xl font-normal w-full " />

                        </div>
                    </div>
                    <div className="flex pb-6 border-b flex-col gap-3">
                        <span className="block text-base lg:text-lg family2">
                            Job Type
                        </span>
                        <div className="flex flex-wrap gap-3">

                            {
                                JobfilterData?.map((data, index) => {
                                    return (
                                        <label key={index} className="flex text-sm md:text-base font-normal items-center gap-3">
                                            <input onChange={handleJobEmploymentChange} type="checkbox" checked={filters.employmentType.includes(data)} value={data} />
                                            {data}
                                        </label>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* location */}
                    <div className="flex pb-6 border-b flex-col gap-3">
                        <span className="block text-base lg:text-lg family2">
                            Job Location
                        </span>
                        <div className="flex flex-wrap gap-3">
                            {
                                LocationfilterData?.map((data, index) => {
                                    return (
                                        <label key={index} className="flex text-sm md:text-base font-normal items-center gap-3">
                                            <input onChange={handleJobLocationChange} type="checkbox" checked={filters.joblocation.includes(data)} value={data} />
                                            {data}
                                        </label>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <button className="btn btn_1 text-lg">
                        Filter Jobs
                    </button>
                </div>
                <div className="w-full flex flex-col gap-4 lg:gap-6">
                    <form action="" className='w-full relative'>
                        <input
                            onChange={handleFilterChange}
                            name={'title'}
                            value={filters?.title}
                            type="text"
                            placeholder='Search by Job Title'
                            className="text-base input rounded-md font-normal w-full " />
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
                                Array(10).fill("").map((_, index) => {
                                    return <CardLoader type='search' key={index} />
                                })
                            }
                        </div> : (
                            <ol className="flex flex-col gap-4">
                                {
                                    job?.map((data, index) => {
                                        const createdAt = moment(data?.PostedAt).format("DD MMM YYYY")
                                        return <JobCard data={data} createdAt={createdAt} key={index} type='large' />
                                    })
                                }

                            </ol>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default JobList;