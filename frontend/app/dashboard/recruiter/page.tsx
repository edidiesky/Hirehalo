
"use client"
import { BsLuggage } from "react-icons/bs";
import { jobData } from "@/constants";
import Hirings from "./_components/Hirings";
import Charts from "./_components/Chart";
import JobsCreated from "./_components/JobsCreated";
import Candidates from "./_components/Candidates";

export default function Home() {
  const widgetData = [
    {
      title: "Total Jobs Created",
      subtext: "Browse your applied jobs here and check their respective progress..",
      bgColor: "#cdeed3",
      icon: <BsLuggage fontSize={"24px"} />,
      color: "#347345"
    },
    {
      title: "Total Applicant",
      subtext: "Browse your applied jobs here and check their respective progress..",
      bgColor: "#deddff",
      icon: <BsLuggage fontSize={"24px"} />,
      color: "#347345"
    }
  ]
  return (
    <div className="w-full bg-white min-h-[100vh] py-12 px-4 lg:px-8">
      <div className="w-full max-w-custom mx-auto flex flex-col gap-8">
        <div className="w-full flex flex-col gap-1">
          <h3 className="text-2xl block lg:text-3xl text-dark family2 family2">
            Dashboard
          </h3>
          <span className="block text-base font-normal">
            Overview of notes regarding HR management
          </span>
        </div>
        <div className="w-full flex flex-col gap-8">
          {/* widget data listings */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-custom gap-4 lg:gap-6">


            <div className="w-full flex flex-col gap-4">
              <div className="w-full grid grid-cols-2 gap-4">
                {/* widget */}
                {
                  widgetData?.map((data, index) => {
                    return <div key={index} className="w-full shadows p-4 lg:p-6 items-start justify-center min-h-[200px] lg:min-h-[250px] 
                    border rounded-md flex flex-col gap-4">
                      <div className="flex lg:flex-row flex-col lg:items-center gap-1 lg:gap-4">
                        <div style={{
                          backgroundColor: `${data?.bgColor}`,
                          color: `${data?.color}`
                        }} className="w-10 lg:w-12 flex items-center justify-center h-10 lg:h-12 rounded-md">
                          {
                            data?.icon
                          }
                        </div>
                        <h4 className="text-sm lg:text-base family2">
                          {data?.title}
                        </h4>
                      </div>
                      <div className="w-full lg:pt-3 flex flex-col">
                        <h3 className="text-3xl lg:text-4xl family2">
                          10
                        </h3>

                        <span className="text-xs flex-1 pt-2 lg:text-sm block font-normal">
                          {data?.subtext}
                        </span>
                      </div>
                      {/* <div className="pt-3">
                    <div className="shadows py-2 bg-[#fafafa] rounded-md cursor-pointer px-4 border text-dark text-sm">Browse</div>
                  </div> */}
                    </div>
                  })
                }
              </div>
              <Charts />
            </div>
            <div className="lg:w-[380px] flex flex-col gap-4">
              <Hirings />
            </div>
          </div>
        </div>
        {/* candidates */}
        <Candidates />
        {/* job Applied */}
        <JobsCreated/>
      </div>
    </div>
  );
}
