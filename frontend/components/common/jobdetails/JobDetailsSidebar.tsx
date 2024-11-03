"use client"
import Image from "next/image";
import { motion } from 'framer-motion'
import { RxCross1 } from 'react-icons/rx'
import { useContext, useState } from "react";
import { slideSidebarLeft } from "@/constants/framer";
import JobApplicationForm from "./JobApplicationForm";
import { ModalContext } from "@/context/ModalContext";
const JobDetailsSidebar = () => {
    const { OffJobDetailsSidebar, jobdetailsidebar } = useContext(ModalContext)

    const data = {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Entry-level Javascript Developer",
        joblocation: "onsite",
        company: "Proxify",
        ApplicationStatus: "PENDING",
        bgColor: "#FFE1CC",
        companyImage: "/images/Zello.png",
    }
    const [tab, setTab] = useState(0)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            exit={{
                opacity: 0,
                transition: {
                    duration: .6,
                },
            }}
            animate={{ opacity: 1 }}
            className={`left-0 w-screen h-[100vh] fixed z-[600] top-0`}>
            <motion.div
                variants={slideSidebarLeft}
                initial="initial"
                animate={jobdetailsidebar ? "enter" : "exit"}
                exit="exit"
                className={`w-[100%] lg:w-[600px] h-full max-h-[100vh] overflow-auto absolute  top-0 bg-white z-30 p-6 sidebar_shadow`}>
                <div onClick={() => OffJobDetailsSidebar()} className="w-12 h-12 rounded-full z-20 flex items-center hover:shadow-md border shadow-xl justify-center bg-white absolute cursor-pointer right-12 top-4">
                    <RxCross1 />
                </div>
                <div className="w-full flex flex-col gap-8">
                    {
                        tab === 0 ? <>
                            <div className="flex items-center  gap-4">
                                <Image
                                    src={data?.companyImage}
                                    alt="Job image Logo Content"
                                    width={60}
                                    height={30}
                                />
                                <div className="flex flex-col">
                                    <h3 className="text-xl lg:text-2xl family2 family2 capitalize">{data?.company}</h3>
                                    <h4 className="text-sm lg:text-base font-normal">{data?.jobtitle}</h4>
                                    <h4 className="text-xs lg:text-sm font-normal">{data?.joblocation}</h4>
                                </div>


                            </div>
                            {/* requirement */}
                            <div className="w-full flex items-center justify-between gap-4 p-4 bg-[#fafafa] rounded-lg">
                                {/* salary */}
                                <span className="text-lg md:text-xl flex-1 text-center border-r family2">
                                    $90000
                                    <span className="block text-sm font-normal">
                                        salary
                                    </span>
                                </span>
                                {/* salary */}
                                <span className="text-lg md:text-xl flex-1 text-center border-r family2">
                                    5 Years
                                    <span className="block text-sm font-normal">
                                        Work experience
                                    </span>
                                </span>
                                {/* salary */}
                                <span className="text-lg md:text-xl flex-1 text-center family2">
                                    Remote
                                    <span className="block text-sm font-normal">
                                        Job Type
                                    </span>
                                </span>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-base family2 lg:text-lg family2">
                                        Job Description
                                    </h4>
                                    <ol className="list-disc pl-6 lg:pl-12 flex-col gap-3 flex text-xs lg:text-sm">
                                        <li>Design effective landing pages that align with our client's goals</li>
                                        <li>Directly and verbally communicating with teams on calls</li>
                                        <li>Work with well-known brands, helping to improve their online aesthetics</li>
                                        <li>Get involved in a variety of design projects, including branding and web design</li>
                                        <li>Take on responsibilities and contribute to our creative direction</li>
                                    </ol>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <h4 className="text-base family2 lg:text-lg family2">
                                        What We Offer:
                                    </h4>
                                    <ol className="list-disc pl-6 lg:pl-12 flex-col gap-3 flex text-xs lg:text-sm">
                                        <li>Fully remote position—work from wherever you feel most creative</li>
                                        <li>Opportunities to work on diverse projects, keeping your work fresh and engaging</li>
                                        <li>A role within a team recognized as a Webflow Premium Enterprise Partner, with a strong reputation in design and SEO</li>
                                        <li>High standards and expectations, with plenty of room for growth</li>
                                        <li>Take on responsibilities and contribute to our creative direction</li>
                                    </ol>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-base family2 lg:text-lg family2">
                                        Who You Are:
                                    </h4>
                                    <ol className="list-disc pl-6 lg:pl-12 flex-col gap-3 flex text-xs lg:text-sm">
                                        <li>Fluent in English</li>
                                        <li>Comfortable working in a fast-paced, challenging environment</li>
                                        <li>Interested in having a say in the creative process and delivering quality work</li>
                                        <li>A founder</li>
                                    </ol>
                                </div>
                            </div>
                            <button onClick={() => setTab(1)} className="text-sm lg:text-base btn btn_1">Apply for this position</button>
                        </> : <JobApplicationForm />
                    }
                    {/* companys Image */}

                </div>
            </motion.div>
            <div style={{
                transition: "all .3s"
            }} onClick={() => OffJobDetailsSidebar()} className={`${jobdetailsidebar ? "opacity-100 right-[0%]" : "opacity-0 -right-[100%]"} w-full top-0 absolute bg-[rgba(0,0,0,.1)] h-full z-10`}></div>
        </motion.div>
    )
}

export default JobDetailsSidebar;
