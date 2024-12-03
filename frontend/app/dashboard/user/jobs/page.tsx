
"use client"
import JobCard from "@/components/common/JobCard";
import { FilterSearchType, JobType } from "@/constants";
import CardLoader from '@/components/common/loader/CardLoader';
import { useState, useEffect } from 'react';
import { useGetAllJobQuery } from "@/services/jobApi";
import Filter from "./_components/Filter";

export default function Home() {
  const [filters, setFilters] = useState<FilterSearchType>({
    title: "",
    company: "",
    location: "",
    joblocation: [],
    employmentType: [],
    page: 1,
    pageSize: 10,
  });
  const [debouncedfilters, setDebouncedFilters] = useState<FilterSearchType>(filters)
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedFilters(filters), 500)
    return () => clearTimeout(timer)
  }, [filters])
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleJobLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFilters((prev) => {
      const updatedJobType = checked ? [...prev.joblocation, value] :
        prev.joblocation.filter((type) => type != value)
      return { ...prev, joblocation: updatedJobType }
    })
  }

  const handleJobEmploymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFilters((prev) => {
      const updatedEmploymentType = checked ? [...prev.employmentType, value] :
        prev.employmentType.filter((type) => type != value)
      return { ...prev, employmentType: updatedEmploymentType }
    })
  }

  const params = new URLSearchParams(Object.fromEntries(
    Object.entries({
      ...debouncedfilters,
      joblocation: debouncedfilters.joblocation.join(','),
    }).map(([key, value]) => [key, String(value)])
  )).toString()
  const { isLoading, data } = useGetAllJobQuery(params ? params : "")
  // console.log(data)


  return (
    <div className="w-full bg-white min-h-[100vh] py-12 px-4 lg:px-8">
      <div className="w-full max-w-custom mx-auto flex flex-col gap-8">
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-3xl block lg:text-4xl text-dark family2 family2">
            All Jobs

          </h3>
          <span className="block text-base font-normal">
            Explore information and activity about your jobs applied
          </span>
        </div>
        {/* job Applied */}
        <div className="w-full flex flex-col gap-4">
          <Filter />
          <div className="w-full flex items-center justify-between gap-4">
            <span className="block text-base family2">
              196 <span className="font-normal">jobs found</span>
            </span>
            <span className="block text-sm font-normal">
              Sort by <span className="family2">Newest</span>
            </span>
          </div>
          {
            isLoading ? <div className="w-full grid mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-y-12 lg:gap-x-8">
              {
                Array(10).fill("").map((_, index) => {
                  return <CardLoader key={index} />
                })
              }
            </div>
              : <ol className="grid mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-y-12 lg:gap-x-8">
                {
                  data?.job?.map((data: JobType, index: any) => {
                    return <JobCard key={index} data={data} />
                  })
                }

              </ol>
          }

        </div>
      </div>
    </div>
  );
}


