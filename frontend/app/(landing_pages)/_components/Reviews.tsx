import AnimateTextWord from '@/components/common/AnimateTextWord';
import Image from "next/image";
import { FaStar } from 'react-icons/fa'
import React from 'react';
const Reviews = () => {
    return (
        <div className='flex w-full py-20 items-center  gap-8 justify-center'>
            <div className="max-w-custom mx-auto w-[90%] grid lg:grid-cols-custom_2 lg:items-center gap-12 lg:gap-20">
                <div className="w-full lg:w-[480px] flex flex-col gap-4 lg:items-center justify-between">
                    <h2 className="text-4xl flex-1 lg:text-6xl text-start leading-[1.2] family2 text-dark family2">
                        <span className="pb-4 block text-xl">
                            <AnimateTextWord type='bigtext'>
                                Testimonial
                            </AnimateTextWord>

                        </span>
                        <AnimateTextWord type='bigtext'>
                            Reviews of People who got jobs using Hirehalo
                        </AnimateTextWord>

                    </h2>
                    <div className="flex flex-1 flex-col gap-4">
                        <span className='text-base lg:text-lg font-normal'>
                            <AnimateTextWord>
                                Unlock your true potential and discover a true world of communities that aligns Job Hunting made Easy: Get instant alerts for job matching your skills and innovative job finder!
                            </AnimateTextWord>
                        </span>
                        <span className='flex'>
                            <button className="text-sm lg:text-base px-4 lg:px-6 py-4 border rounded-full text-white bg-[#3e3aff] shadows">Get Started!</button>
                        </span>
                    </div>
                </div>
                <div className="w-full grid lg:grid-cols-1 gap-8">
                    <div className="min-h-[250px] z-10 rounded-[20px] w-full bg-[#e8f2fc61] flex p-8 py-12 flex-col justify-between gap-8">

                        <div className="flex flex-col gap-8">
                            <div className="w-full flex items-center justify-between gap-4">
                                <span className="text-base p-2 px-4 border rounded-full">User Testimonial</span>
                                <div className="flex items-center gap-4">
                                    <span className="text-xl"><FaStar color='#ffbf0f' /></span>
                                    <span className="text-xl"><FaStar color='#ffbf0f' /></span>
                                    <span className="text-xl"><FaStar color='#ffbf0f' /></span>
                                    <span className="text-xl"><FaStar color='#ffbf0f' /></span>
                                </div>
                            </div>
                            <h3 className="text-xl lg:text-2xl leading-[1.4] family2 text-dark family2">
                                <AnimateTextWord>
                                    Thanks to this platform, I secured a job in my dream company! I could not be more happier than the support
                                    and opportunities this platform offered. Highly recommended to any serious about findign their perfect job!
                                </AnimateTextWord>

                            </h3>

                        </div>

                        <div className="pt-8 border-t flex items-center gap-4">
                            <Image
                                src={'/images/face/avatar_1.jpg'}
                                width={50}
                                height={50}
                                className='rounded-full'
                                alt='Avatar for user'
                            />
                            <span>
                                <span className="family2 text-xl">
                                    James Ryrce
                                </span>
                                <span className="text-sm md:text-base block">Lead Developer, MTN</span>
                            </span>
                        </div>
                    </div>

                    <div className="min-h-[250px] lg:ml-12 z-10 rounded-[20px] w-full bg-[#ffe1cc56] flex p-8 py-12 flex-col justify-between gap-8">

                        <div className="flex flex-col gap-8">
                            <div className="w-full flex items-center justify-between gap-4">
                                <span className="text-base p-2 px-4 border rounded-full">User Testimonial</span>
                                <div className="flex items-center gap-4">
                                    <span className="text-xl"><FaStar color='#ffbf0f' /></span>
                                    <span className="text-xl"><FaStar color='#ffbf0f' /></span>
                                    <span className="text-xl"><FaStar color='#ffbf0f' /></span>
                                    <span className="text-xl"><FaStar color='#ffbf0f' /></span>
                                </div>
                            </div>
                            <h3 className="text-xl lg:text-2xl leading-[1.4] family2 text-dark family2">
                                <AnimateTextWord>
                                 If you are a job seeker looking for a platform that really
                                 cares about your success look no further. This platform is a game-changer, and I highly 
                                 recommend it to anyone serious about their career projections.

                              
                                </AnimateTextWord>

                            </h3>

                        </div>

                        <div className="pt-8 border-t flex items-center gap-4">
                            <Image
                                src={'/images/face/avatar_2.png'}
                                width={50}
                                height={50}
                                className='rounded-full'
                                alt='Avatar for user'
                            />
                            <span>
                                <span className="family2 text-xl">
                                    Dennis Bolgberg
                                </span>
                                <span className="text-sm md:text-base block">Software Developer, AMAZON</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default Reviews;