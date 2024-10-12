
"use client"
import { IoDiamondSharp } from "react-icons/io5";
import { LuBadgePlus } from "react-icons/lu";
import { GiReceiveMoney } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import JobCard from "@/components/common/JobCard";
import { jobData, widgetData } from "@/constants";

export default function Home() {
  return (
    <div className="w-full bg-white min-h-[100vh] py-12 px-4 md:px-8">
      <div className="w-full max-w-custom mx-auto flex flex-col gap-8">
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-3xl block lg:text-4xl text-dark family2 font-semibold">
            All Jobs

          </h3>
          <span className="block text-base font-normal">
            Explore information and activity about your jobs applied
          </span>
        </div>
        {/* job Applied */}
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-wrap md:items-center gap-4">
            <form action="" className='max-w-[300px] md:w-[200px] relative'>
              <input type="text" placeholder='Search Jobs & Companies' className="text-sm font-normal rounded-full w-full " />
            </form>
            <div className="flex lg:flex-row flex-wrap md:items-center gap-2">
              {/* role */}
              <div className="relative">
                <button className="shadows py-3 flex items-center gap-2 rounded-full cursor-pointer px-4 border text-dark bg-[#fafafa] text-sm">
                  <IoDiamondSharp fontSize={'20px'} />
                  Role
                </button>
              </div>
              {/* skills */}
              <div className="relative">
                <button className="shadows py-3 flex items-center gap-2 rounded-full cursor-pointer px-4 border text-dark bg-[#fafafa] text-sm">
                  <LuBadgePlus fontSize={'20px'} />
                  Skills
                </button>
              </div>
              {/* Rate */}
              <div className="relative">
                <button className="shadows py-3 flex items-center gap-2 rounded-full cursor-pointer px-4 border text-dark bg-[#fafafa] text-sm">
                  <GiReceiveMoney fontSize={'20px'} />
                  Rate
                </button>
              </div>
              {/* // Location */}
              <div className="relative">
                <button className="shadows py-3 flex items-center gap-2 rounded-full cursor-pointer px-4 border text-dark bg-[#fafafa] text-sm">
                  <MdLocationOn fontSize={'20px'} />
                  Location
                </button>
              </div>
              {/*Job Type */}
              <div className="relative">
                <button className="shadows py-3 flex items-center gap-2 rounded-full cursor-pointer px-4 border text-dark bg-[#fafafa] text-sm">
                  <MdOutlineWork fontSize={'20px'} />
                  Job Type
                </button>
              </div>
            </div>
          

          </div>
          <div className="w-full flex items-center justify-between gap-4">
            <span className="block text-base font-semibold">
              196 <span className="font-normal">jobs found</span>
            </span>
            <span className="block text-sm font-normal">
              Sort by <span className="font-semibold">Newest</span>
            </span>
          </div>
          <ol className="grid mt-4 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {
              jobData?.map((data, index) => {
                return <JobCard index={index} key={index} data={data} />
              })
            }

          </ol>
        </div>
      </div>
    </div>
  );
}
