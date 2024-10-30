
"use client"

import JobCard from "@/components/common/JobCard";
// import TableCard from "@/components/common/TableCard";
import { jobData, widgetData } from "@/constants";

export default function Home() {
  return (
    <div className="w-full bg-white min-h-[100vh] py-12 px-4 lg:px-8">
      <div className="w-full max-w-custom mx-auto flex flex-col gap-8">
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-2xl block lg:text-3xl text-dark family2 family2">
            My Applied Jobs

          </h3>
          <span className="block text-base font-normal">
            Explore information and activity about your jobs applied
          </span>
        </div>
        {/* job Applied */}
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex lg:flex-row flex-col gap-4 lg:items-center justify-between">
            <form action="" className='max-w-[260px] lg:w-[250px] relative'>
              <input type="text" placeholder='Search by companies, title, skill, tags' className="text-sm font-normal rounded-full w-full " />
            </form>
          </div>
          {/* <TableCard
            tableheadList={["Company", "Title", "Date Created", "Application Status", "Actions"]}
            tabledata={jobData.slice(0, 5)}
          /> */}
          <ol className="grid mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {
              jobData.slice(0, 5)?.map((data, index) => {
                return <JobCard index={index} key={index} data={data} />
              })
            }

          </ol>
        </div>
      </div>
    </div>
  );
}
