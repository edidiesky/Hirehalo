"use client"
import Image from "next/image";
import { RxCross1 } from 'react-icons/rx'
import Link from "next/link";
import React, { useState } from 'react';
import { BsPen } from "react-icons/bs";
import { ApplicationFormData } from "@/constants";

const JobApplicationForm = ({ }) => {
    const data = {
        jobdescription: "We're looking for a skilled creative to join our team, focusing on creating top-quality landing pages.",
        jobtitle: "Entry-level Javascript Developer",
        joblocation: "onsite",
        company: "Proxify",
        ApplicationStatus: "PENDING",
        bgColor: "#FFE1CC",
        companyImage: "/images/Zello.png",
    }

    const [formValue, setFormValue] = useState({
        name: "",
        username: "",
        email: "",
        linkedln: "",
        salary: "",
        country: "",
        employmentScholarship: false,
        authorizationToWork: false,
        englishFluency: false,
        noticePeriod: false,
    })
    return <div className="flex flex-col gap-8">
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
        <div className="border p-4 rounded-lg flex items-center justify-between gap-4">
            <h4 className="text-lg font-semibold  flex-1 gap-2">
                <span className="flex items-center  gap-3"> <BsPen /> Auto fill from resume</span>
                <span className="block text-sm font-normal">Upload your resume here to autofil key applications fields</span>
            </h4>
            <button className="shadows py-2 rounded-full cursor-pointer px-4 border font-semibold text-dark bg-[#fafafa] text-sm">Upload File</button>


        </div>
        <div className="flex flex-col gap-6">
            <h4 className="text-base lg:text-xl family2 font-semibold">General Information</h4>
            <form action="" className='w-full flex flex-col gap-6 relative'>
                {
                    ApplicationFormData.map((formdata: { id: number, name: string, text: string, label: string, type: string }, index?: any) => {
                        return <label key={formdata.id} htmlFor="" className="flex flex-col gap-2 text-base">
                            <span className="font-semibold">
                                {formdata?.label}
                                {/* <span className="block text-sm pt-1 font-normal italic">{formdata?.label}</span> */}
                            </span>
                            <input type={formdata?.type} value={formValue[formdata.name]} name={formdata.name} placeholder={formdata?.label} className="text-sm font-normal rounded-md w-full " />
                        </label>
                    })
                }

                {/* resume */}
                <label htmlFor="" className="flex flex-col gap-4 items-startn text-lg">
                    <span className="font-semibold">Your Resume / CV
                        <span className="block text-sm pt-1 font-normal italic">Please enter your Resume / CV</span>
                    </span>
                    <div className="flex w-full gap-4 border p-4 rounded-lg  items-center justify-center text-lg">
                        <button className="shadows py-2 rounded-full flex items-center gap-4 cursor-pointer px-4 border font-semibold
                         text-dark bg-[#fafafa] text-sm"><BsPen />  Upload File</button>
                    </div>


                </label>
            </form>

        </div>
        <button className="text-sm md:text-base btn btn_1">Apply for this position</button>

    </div>
}


export default JobApplicationForm;