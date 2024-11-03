"use client"
import Image from "next/image";
import { motion } from 'framer-motion'
import { RxCross1 } from 'react-icons/rx'
import Link from "next/link";
import { useState } from "react";
import { slideSidebarLeft } from "@/constants/framer";
import { FiMail, FiPhone } from "react-icons/fi";
import ApplicantResume from "./ApplicantResume";
import ApplicantDocument from "./ApplicantDocument";
import ApplicantActivity from "./ApplicantActivity";
const ApplicantDetailsSidebar = ({ modal, setModal }: { modal: boolean, setModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [tab, setTab] = useState(0)
    const data = {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Entry-level Javascript Developer",
        joblocation: "onsite",
        company: "Proxify",
        ApplicationStatus: "PENDING",
        bgColor: "#FFE1CC",
        companyImage: "/images/Zello.png",
    }
    const userData = {
        ApplicantName: "Kareeem Sollana",
        ApplicantImage: "/images/face/avatar_3.png",
        jobtitle: "Entry-level Javascript Developer",
        company: "Proxify",
        bgColor: "#FFE1CC",
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 1,
                },
            }}
            animate={{ opacity: 1 }}
            className={`w-screen h-[100vh] left-0 fixed z-[600] top-0 bg-[rgba(0,0,0,0.2)]`}>
            <motion.div
                variants={slideSidebarLeft}
                initial="initial"
                animate={modal ? "enter" : "exit"}
                exit="exit"
                className={`w-[100%] lg:w-[700px] h-full max-h-[100vh] overflow-auto absolute  top-0 bg-white z-30 py-6 sidebar_shadow`}>

                <div className="w-full flex flex-col gap-4">

                    <div className="flex px-6 w-full justify-between">

                        <div className="flex items-center gap-4">
                            <Image
                                src={userData?.ApplicantImage}
                                alt="Job image Logo Content"
                                width={70}
                                height={70}
                                className="rounded-full"
                            />
                            <div className="flex flex-col">
                                <h3 className="text-xl lg:text-2xl family2 family2 capitalize">{userData?.ApplicantName}</h3>
                                <h4 className="text-sm lg:text-base font-normal">{data?.jobtitle}</h4>
                            </div>


                        </div>
                        <div className="flex items-center lg:pr-4 justify-end gap-2">
                            <div className="w-10 h-10 rounded-full cursor-pointer border flex items-center justify-center text-lg">
                                <FiMail />
                            </div>
                            <div className="w-10 h-10 rounded-full cursor-pointer border flex items-center justify-center text-lg">
                                <FiPhone />
                            </div>
                        </div>
                    </div>


                    {/* user job requirement */}
                    <div className="px-6 w-full">
                        <div className="w-full flex items-center justify-between gap-4 p-4 bg-[#fafafa] rounded-lg">
                            {/* salary */}
                            <span className="text-lg lg:text-xl flex-1 text-center border-r family2">
                                $90000
                                <span className="block text-sm font-normal">
                                    salary
                                </span>
                            </span>
                            {/* salary */}
                            <span className="text-lg lg:text-xl flex-1 text-center border-r family2">
                                5 Years
                                <span className="block text-sm font-normal">
                                    Work experience
                                </span>
                            </span>
                            {/* salary */}
                            <span className="text-lg lg:text-xl flex-1 text-center family2">
                                Remote
                                <span className="block text-sm font-normal">
                                    Job Type
                                </span>
                            </span>
                        </div>
                    </div>
                    {/* tabs section of the sidebar*/}
                    <div className="w-full flex family2 items-center cursor-pointer">
                        <span onClick={() => setTab(0)} className={`${tab === 0 ? "text-[#A1718A] border-b-2 border-[#A1718A]" : "text-[#969A9A] border-b-2 border-[rgba(0,0,0,.08)]"} p-4 text-center flex-1 text-sm family2`}>
                            Resume
                        </span>
                        <span onClick={() => setTab(1)} className={`${tab === 1 ? "text-[#A1718A] border-b-2 border-[#A1718A]" : "text-[#969A9A] border-b-2 border-[rgba(0,0,0,.08)]"} p-4 text-center flex-1 text-sm family2`}>
                            Documents
                        </span>
                        <span onClick={() => setTab(2)} className={`${tab === 2 ? "text-[#A1718A] border-b-2 border-[#A1718A]" : "text-[#969A9A] border-b-2 border-[rgba(0,0,0,.08)]"} p-4 text-center flex-1 text-sm family2`}>
                            Applications
                        </span>
                    </div>
                    <div className="p-4 lg:p-6 w-full">
                        {tab === 0 ?
                            <ApplicantResume /> : tab === 1 ? <ApplicantDocument /> : <ApplicantActivity />
                        }
                    </div>
                </div>

            </motion.div>
            <div style={{
                transition: "all .3s"
            }} onClick={() => setModal(false)} className={`${modal ? "opacity-100 right-[0%]" : "opacity-0 -right-[100%]"} w-full top-0 absolute bg-[rgba(0,0,0,.1)] h-full z-10`}></div>
        </motion.div>
    )
}

export default ApplicantDetailsSidebar;
