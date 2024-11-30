"use client"
import Hero from "./_components/Hero";
import JobLists from "./_components/joblist";
import { useGetAllJobQuery } from "@/services/jobApi";

export default function Home() {
  const { isLoading, data: Jobs } = useGetAllJobQuery("")

  return (
   <div className="w-full">
      <Hero/>
      <JobLists isLoading={isLoading} job={Jobs?.job} />
   </div>
  );
}
