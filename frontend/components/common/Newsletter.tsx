import Image from 'next/image';
import Link from 'next/link';
import AnimateTextWord from '@/components/common/AnimateTextWord';

import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Newsletter = () => {
    return <div className='flex w-full py-20 items-center  gap-8 justify-center'>
        <div className="max-w-custom bg-[#ffe1ccdf] py-16 px-6 md:px-12 rounded-[40px] mx-auto w-[90%] grid lg:grid-cols-2 lg:items-end gap-20">
            <div className="w-full flex flex-col gap-4">
                <h2 className="text-4xl flex-1 lg:text-6xl max-w-[600px] text-start leading-[1.2] family2 text-dark family2">
                    <span className="pb-4 block font-normal text-xl">
                        <AnimateTextWord>
                            Let us Find your Dream Job
                        </AnimateTextWord>
                    </span>
                    <AnimateTextWord type='bigtext'>
                        Ready to take your career to the next Level?
                    </AnimateTextWord>

                </h2>
                <div className="flex flex-1 flex-col gap-4">
                    <span className='text-base lg:text-lg font-normal max-w-[500px]'>
                        <AnimateTextWord>
                            Unlock your true potential and discover a true world of communities that aligns Job Hunting made Easy: Get instant alerts for job matching your skills and innovative job finder!

                        </AnimateTextWord>
                    </span>
                </div>
            </div>
            <div className="w-full"></div>
        </div>
    </div>;
}

export default Newsletter;