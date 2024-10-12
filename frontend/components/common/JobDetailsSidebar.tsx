"use client"
import Image from "next/image";
import { RxCross1 } from 'react-icons/rx'
import Link from "next/link";
import { useState } from "react";
import JobApplicationForm from "./JobApplicationForm";
const JobDetailsSidebar = ({ modal, setModal }: { modal: boolean, setModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
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
    return <div className='w-screen h-[100vh] fixed right-0 z-[600] top-0'>
        <div className="w-[90%] md:w-[600px] h-full max-h-[100vh] overflow-auto absolute right-0 top-0 bg-white z-30 p-6 sidebar_shadow">
            <div onClick={() => setModal(false)} className="w-12 h-12 rounded-full z-20 flex items-center hover:shadow-md border shadow-xl justify-center bg-white absolute cursor-pointer right-12 top-4">
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
                                <h3 className="text-xl md:text-2xl font-semibold family2 capitalize">{data?.company}</h3>
                                <h4 className="text-sm lg:text-base font-normal">{data?.jobtitle}</h4>
                                <h4 className="text-xs lg:text-sm font-normal">{data?.joblocation}</h4>
                            </div>


                        </div>
                        {/* requirement */}
                        <div className="w-full flex items-center justify-between gap-4 p-4 bg-[#fafafa] rounded-lg">
                            {/* salary */}
                            <span className="text-xl flex-1 text-center border-r font-bold">
                                $90000
                                <span className="block text-sm font-normal">
                                    salary
                                </span>
                            </span>
                            {/* salary */}
                            <span className="text-xl flex-1 text-center border-r font-bold">
                                5 Years
                                <span className="block text-sm font-normal">
                                    Work experience
                                </span>
                            </span>
                            {/* salary */}
                            <span className="text-xl flex-1 text-center font-bold">
                                Remote
                                <span className="block text-sm font-normal">
                                    Job Type
                                </span>
                            </span>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <h4 className="text-base family2 lg:text-lg font-bold">
                                    Job Description
                                </h4>
                                <ol className="list-disc pl-6 md:pl-12 flex-col gap-3 flex text-xs md:text-sm">
                                    <li>Design effective landing pages that align with our client's goals</li>
                                    <li>Directly and verbally communicating with teams on calls</li>
                                    <li>Work with well-known brands, helping to improve their online aesthetics</li>
                                    <li>Get involved in a variety of design projects, including branding and web design</li>
                                    <li>Take on responsibilities and contribute to our creative direction</li>
                                </ol>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h4 className="text-base family2 lg:text-lg font-bold">
                                    What We Offer:
                                </h4>
                                <ol className="list-disc pl-6 md:pl-12 flex-col gap-3 flex text-xs md:text-sm">
                                    <li>Fully remote position—work from wherever you feel most creative</li>
                                    <li>Opportunities to work on diverse projects, keeping your work fresh and engaging</li>
                                    <li>A role within a team recognized as a Webflow Premium Enterprise Partner, with a strong reputation in design and SEO</li>
                                    <li>High standards and expectations, with plenty of room for growth</li>
                                    <li>Take on responsibilities and contribute to our creative direction</li>
                                </ol>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="text-base family2 lg:text-lg font-bold">
                                    Who You Are:
                                </h4>
                                <ol className="list-disc pl-6 md:pl-12 flex-col gap-3 flex text-xs md:text-sm">
                                    <li>Fluent in English</li>
                                    <li>Comfortable working in a fast-paced, challenging environment</li>
                                    <li>Interested in having a say in the creative process and delivering quality work</li>
                                    <li>A founder</li>
                                </ol>
                            </div>
                        </div>
                        <button onClick={() => setTab(1)} className="text-sm md:text-base btn btn_1">Apply for this position</button>
                    </> : <JobApplicationForm />
                }
                {/* companys Image */}

            </div>
        </div>
        <div onClick={() => setModal(false)} className="w-full top-0 left-0 absolute bg-[rgba(0,0,0,.1)] h-full z-10"></div>
    </div>;
}

export default JobDetailsSidebar;