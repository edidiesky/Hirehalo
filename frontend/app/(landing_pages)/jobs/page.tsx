"use client"
import Hero from "./_components/Hero";
import JobLists from "./_components/joblist";
import { useGetAllJobQuery } from "@/services/jobApi";
import { useState, useEffect } from 'react';
export type FilterSearchType = {
  title: string;
  company: string;
  location: string;
  jobtype: string;
  page: number;
  pageSize: number;
}
export default function Home() {

  const [filters, setFilters] = useState<FilterSearchType>({
    title: "",
    company: "",
    location: "",
    jobtype: "",
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
  const { isLoading, data: Jobs } = useGetAllJobQuery(debouncedfilters)
  console.log("debouncedfilters", debouncedfilters)
  return (
    <div className="w-full">
      <Hero />
      <JobLists
        handleFilterChange={handleFilterChange}
        filters={filters}
        isLoading={isLoading} job={Jobs?.job} />
    </div>
  );
}
