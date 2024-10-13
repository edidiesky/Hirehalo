
"use client"
import { widgetData } from "@/constants";
import Charts from "./_components/Chart";
import JobsApplied from "./_components/JobsApplied";
export default function Home() {
  return (
    <div className="w-full bg-white min-h-[100vh] py-12 px-4 md:px-8">
      <div className="w-full max-w-custom mx-auto flex flex-col gap-12">
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-2xl block lg:text-3xl text-dark family2 font-semibold">
            Welcome 👋

          </h3>
          <span className="block text-base font-normal">
            Explore information and activity about your jobs applied
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
          <Charts />
        </div>
        {/* job Applied */}
        <JobsApplied />
      </div>
    </div>
  );
}
