import React from 'react';
import { BsLuggage } from "react-icons/bs";
const Widget = () => {
    
    const widgetData = [
        {
            title: "Total Jobs Created",
            subtext: "Browse your applied jobs here and check their respective progress..",
            bgColor: "#cdeecd",
            trends:-3,
            icon: <BsLuggage fontSize={"24px"} />,
            color: "#347345"
        },
        {
            title: "Total Applicant",
            subtext: "Browse your applied jobs here and check their respective progress..",
            bgColor: "#deddff",
            trends:+20,
            icon: <BsLuggage fontSize={"24px"} />,
            color: "#347345"
        },
        {
            title: "Total Jobs Created",
            subtext: "Browse your applied jobs here and check their respective progress..",
            bgColor: "#cdeecd",
            trends:-5,
            icon: <BsLuggage fontSize={"24px"} />,
            color: "#347345"
        },
        {
            title: "Total Applicant",
            subtext: "Browse your applied jobs here and check their respective progress..",
            bgColor: "#deddff",
            trends:+10,
            icon: <BsLuggage fontSize={"24px"} />,
            color: "#347345"
        }
    ]
    return <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4">
        {
            widgetData?.map((data, index) => {
                return <div key={index} className="w-full p-4 shadows md:p-6 items-start justify-center min-h-[200px] md:min-h-[200px] 
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
                            <span className={`${data?.trends > 0 ? "text-[#347345] font-bold" :"text-[#c31212] font-bold"}`}>{data?.trends}%</span> from last month
                        </span>
                    </div>
                </div>
            })
        }
    </div>
}


export default Widget;