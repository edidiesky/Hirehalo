"use client"
import Image from 'next/image';
import Link from 'next/link';
import {AnimatePresence} from 'framer-motion'
import React, { useState } from 'react';
import TableCard from "@/components/common/TableCard";
import { ApplicantDataList, applicantsData } from '@/constants';
import { BiMessage } from 'react-icons/bi';
import { BsLinkedin } from 'react-icons/bs';
import ApplicantDetailsSidebar from '@/components/common/applicantdetails';
// const applicants =  [{"hired":[]},{"pending":[]},{"outsourced":[]}, {"internal interview":[]}]
const Candidates = () => {
    const [active, setActive] = useState(false)
    return (
        <>
            <AnimatePresence mode='wait'>
                {
                    active && <ApplicantDetailsSidebar
                        modal={active}
                        setModal={setActive}
                    />
                }
            </AnimatePresence>
           
            <div className='w-full flex flex-col gap-6'>
                <div className="w-full flex lg:flex-row flex-col gap-4 lg:items-center justify-between">
                    <h3 className="text-xl block lg:text-2xl text-dark family2 family2">
                        Candidates
                    </h3>
                    <div className="w-full flex flex-row gap-4 lg:items-center lg:justify-end">
                        <form action="" className='max-w-[240px] lg:w-[200px] relative'>
                            <input type="text" placeholder='Search candidate' className="text-sm font-normal rounded-full w-full " />
                        </form>
                        <div className="flex items-center lg:justify-end">
                            <button className="shadows py-3 rounded-full cursor-pointer px-4 border text-white bg-[#000] text-sm">Add Candidate</button>

                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        ApplicantDataList?.map((application, index) => {
                            return (
                                <div key={index} className="w-full flex flex-col gap-4">
                                    {
                                        Object.keys(application).map((data, index) => {
                                            return (
                                                <div key={index} className="p-3 bg-[#f7f7f7] cursor-pointer shadows  flex items-center uppercase justify-center gap-3 border rounded-md text-xs family2 family2">
                                                    <div className="w-2 h-2 rounded-full bg-[#3e3aff]"></div> {data} <span className="font-normal">(19)</span>
                                                </div>
                                            )
                                        })
                                    }
                                    {
                                        Object.values(application).map((data, _) => data.flatMap((data?: any, index?: any) => {
                                            return (
                                                <div onClick={() => setActive(true)} key={index} className="p-3 cursor-pointer bg-white border shadows rounded-md flex flex-col gap-2">
                                                    <Image
                                                        src={data?.ApplicantImage}
                                                        width={50}
                                                        height={50}
                                                        className='rounded-full'
                                                        alt='Avatar for user'
                                                    />
                                                    <span className="text-base family2 family1">
                                                        <span className="family2">{data?.ApplicantName}</span>
                                                        <span className="text-sm block font-normal">{data?.jobtitle}</span>
                                                    </span>
                                                    <div className="flex lg:flex-row flex-col lg:items-center gap-2 justify-between">
                                                        <div className="flex family2 items-center gap-1 text-sm">
                                                            cv_hansch.pdf
                                                        </div>
                                                        <div className="flex items-center gap-2 lg:justify-end">
                                                            <h6 className="text-xs flex items-center gap-[4px] family2">
                                                                <BsLinkedin fontSize={'15px'} /> LinkedIn
                                                            </h6>
                                                            <BiMessage fontSize={'14px'} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }))
                                    }

                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </>
    );
}

export default Candidates;


















