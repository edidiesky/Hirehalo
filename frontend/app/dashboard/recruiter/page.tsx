
"use client"

import JobCard from "@/components/common/JobCard";
import TableCard from "@/components/common/TableCard";
import { jobData, widgetData } from "@/constants";

export default function Home() {
  return (
    <div className="w-full bg-white min-h-[100vh] py-12 px-4 md:px-8">
      <div className="w-full max-w-custom mx-auto flex flex-col gap-12">
        <div className="w-full flex flex-col gap-1">
          <h3 className="text-2xl block lg:text-3xl text-dark family2 font-semibold">
            Dashboard
          </h3>
          <span className="block text-base font-normal">
            Overview of notes regarding HR management
          </span>
        </div>
        <div className="w-full flex flex-col gap-8">
          {/* widget data listings */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {
              widgetData?.map((data, index) => {
                return <div key={index} className="w-full p-4 md:p-6 items-start justify-center min-h-[250px] border rounded-md flex flex-col gap-4">
                  <div style={{
                    backgroundColor: `${data?.bgColor}`,
                    color: `${data?.color}`
                  }} className="w-12 flex items-center justify-center h-12 rounded-md">
                    {
                      data?.icon
                    }
                  </div>
                  <div className="w-full pt-3 flex flex-col">
                    <h3 className="text-3xl md:text-5xl font-semibold">
                      10
                    </h3>
                    <h4 className="text-base md:text-lg font-semibold">
                      {data?.title}

                      <span className="text-xs md:text-xs pt-1 block font-normal">
                        {data?.subtext}
                      </span>
                    </h4>
                  </div>
                  <div className="pt-3">
                    <div className="shadows py-2 bg-[#fafafa] rounded-md cursor-pointer px-4 border text-dark text-sm">Browse</div>
                  </div>
                </div>

              })
            }
          </div>
        </div>
        {/* job Applied */}
        <div className="w-full flex flex-col gap-8">
          <h4 className="text-2xl font-semibold">
            Jobs Applied
          </h4>
          <div className="w-full flex lg:flex-row flex-col gap-4 md:items-center justify-between">
            <form action="" className='max-w-[500px] md:w-[400px] relative'>
              <input type="text" placeholder='Search by companies, title, skill, tags' className="text-sm font-normal rounded-full w-full " />
            </form>
            <div className="flex items-center md:justify-end">
              <button className="shadows py-2 rounded-md cursor-pointer px-6 border text-dark bg-[#fafafa] text-base">Filter</button>

            </div>
          </div>
          {/* <TableCard
            tableheadList={["Company", "Title", "Date Created", "Application Status", "Actions"]}
            tabledata={jobData.slice(0,5)}
          /> */}
        </div>
      </div>
    </div>
  );
}
