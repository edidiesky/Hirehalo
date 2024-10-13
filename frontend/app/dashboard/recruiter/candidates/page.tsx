
"use client"
import { BsLuggage } from "react-icons/bs";
import Charts from "../_components/Chart";
import Candidates from "../_components/Candidates";

export default function Home() {
  const widgetData = [
    {
      title: "Total Jobs Created",
      subtext: "Browse your applied jobs here and check their respective progress..",
      bgColor: "#cdeecd",
      icon: <BsLuggage fontSize={"24px"} />,
      color: "#347345"
    },
    {
      title: "Total Applicant",
      subtext: "Browse your applied jobs here and check their respective progress..",
      bgColor: "#deddff",
      icon: <BsLuggage fontSize={"24px"} />,
      color: "#347345"
    },
    {
      title: "Total Jobs Created",
      subtext: "Browse your applied jobs here and check their respective progress..",
      bgColor: "#cdeecd",
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
    <div className="w-full bg-white min-h-[100vh] py-12 px-4 md:px-8">
      <div className="w-full max-w-custom mx-auto flex flex-col gap-8">
        <div className="w-full flex flex-col gap-1">
          <h3 className="text-2xl block lg:text-3xl text-dark family2 font-semibold">
           Current Openings
          </h3>
          <span className="block text-base font-normal">
            Overview of notes regarding HR management
          </span>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4">
          {
            widgetData?.map((data, index) => {
              return <div key={index} className="w-full p-4 md:p-6 items-start justify-center min-h-[200px] md:min-h-[250px] 
                    border rounded-md flex flex-col gap-4">
                <div className="flex md:flex-row flex-col md:items-center gap-1 md:gap-4">
                  <div style={{
                    backgroundColor: `${data?.bgColor}`,
                    color: `${data?.color}`
                  }} className="w-10 md:w-12 flex items-center justify-center h-10 md:h-12 rounded-md">
                    {
                      data?.icon
                    }
                  </div>
                  <h4 className="text-sm md:text-base font-semibold">
                    {data?.title}
                  </h4>
                </div>
                <div className="w-full md:pt-3 flex flex-col">
                  <h3 className="text-3xl md:text-5xl font-semibold">
                    10
                  </h3>

                  <span className="text-xs flex-1 pt-2 md:text-sm block font-normal">
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
        {/* candidates */}
        <Charts />
        {/* candidates */}
        <Candidates />
      </div>
    </div>
  );
}
