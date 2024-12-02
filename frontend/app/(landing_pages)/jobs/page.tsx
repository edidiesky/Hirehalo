"use client"
import Hero from "./_components/Hero";
import JobLists from "./_components/joblist";
import { useGetAllJobQuery } from "@/services/jobApi";
import { useState, useEffect } from 'react';
export type FilterSearchType = {
  title: string;
  company: string;
  location: string;
  joblocation: string[];
  employmentType: string[];
  page: number;
  pageSize: number;
}
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
  const { isLoading, data: Jobs } = useGetAllJobQuery(params ? params : "")
  console.log("params", params)
  return (
    <div className="w-full">
      <Hero />
      <JobLists
        handleJobEmploymentChange={handleJobEmploymentChange}
        handleJobLocationChange={handleJobLocationChange}
        handleFilterChange={handleFilterChange}
        filters={filters}
        isLoading={isLoading} job={Jobs?.job} />
    </div>
  );
}
