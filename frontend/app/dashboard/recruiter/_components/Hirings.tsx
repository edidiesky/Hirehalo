import React from 'react';
import { applicantsData } from '@/constants';
import { BsThreeDots, BsTrash } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
const Hirings = () => {
    return <div className='px-4 py-8 border rounded-lg flex flex-col w-full gap-6'>
        <h3 className="text-lg block lg:text-xl text-dark family2 family2">
            Hiring Interview
        </h3>
        <div className="w-full flex flex-col gap-4">
            {
                applicantsData?.map((data, index) => {
                    return <div key={index} className="w-full bg-[#f8f8f8] hover:bg-[#eee] p-3 border rounded-md flex items-center gap-4">
                        <div className="flex justify-center items-center gap-2">
                            <Image
                                src={data?.applicantImage}
                                width={40}
                                height={40}
                                className='rounded-full'
                                alt="Comapny's Logo"
                            />
                            <span className="text-base flex-1 family2">
                                {data?.applicantName}
                                <span className="flex font-normal text-xs items-center gap-1">
                                    {data?.jobtitle}
                                    {" "} |
                                    <span> 24th October</span>
                                </span>
                            </span>
                        </div>
                    </div>
                })
            }
        </div>
    </div>;
}

export default Hirings;