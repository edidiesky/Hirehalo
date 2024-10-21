import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Newsletter = () => {
    return <div className='flex w-full py-20 items-center  gap-8 justify-center'>
        <div className="max-w-custom bg-[#ffe1ccdf] py-16 px-12 rounded-[40px] mx-auto w-[90%] grid md:grid-cols-2 md:items-end gap-20">
            <div className="w-full flex flex-col gap-4">
                <h2 className="text-4xl flex-1 lg:text-6xl text-start leading-[1.2] family2 text-dark font-semibold">
                    <span className="pb-4 block font-normal text-xl">Let us Find your Dream Job </span>
                    Ready to take <br /> your career to <br /> the next Level?
                </h2>
                <div className="flex flex-1 flex-col gap-4">
                    <span className='text-sm md:text-base font-normal max-w-[500px]'>
                        Unlock your true potential and discover a true world of communities that aligns Job Hunting made Easy: Get instant alerts for job matching your skills and innovative job finder!
                    </span>
                </div>
            </div>
            <div className="w-full"></div>
        </div>
    </div>;
}

export default Newsletter;