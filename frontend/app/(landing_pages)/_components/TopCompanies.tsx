import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AnimateTextWord from '@/components/common/AnimateTextWord';
import { BiArrowFromRight, BiArrowToRight } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';

const TopCompanies = () => {
    return <div className='flex w-full py-20 items-center  gap-8 justify-center'>
        <div className="max-w-custom mx-auto w-[90%] grid lg:grid-cols-1 lg:items-center gap-20">
            <div className="w-full flex lg:flex-row flex-col gap-4 lg:items-center justify-between">
                <h2 className="text-4xl flex-1 max-w-[600px] lg:text-7xl text-start leading-[1.2] family2 text-dark family2">
                    <span className="pb-4 block font-normal text-xl">
                        <AnimateTextWord type='bigtext'>
                            Top Companies
                        </AnimateTextWord>
                    </span>
                    <AnimateTextWord type='bigtext'>
                        Best Places to Work 2024
                    </AnimateTextWord>

                </h2>
                <div className="flex flex-1 flex-col gap-4">
                    <span className='text-sm lg:text-base font-normal max-w-[500px]'>
                        <AnimateTextWord>
                            Unlock your true potential and discover a true world of communities that aligns Job Hunting made Easy: Get instant alerts for job matching your skills and innovative job finder!
                        </AnimateTextWord>
                    </span>
                    <div className="w-full flex items-center lg:justify-center gap-4">
                        <form action="" className=' flex-1 lg:max-w-[450px] lg:w-[90%] flex items-center relative'>
                            <span className="w-4 h-4 absolute right-6">
                                <BsSearch />
                            </span>
                            <input type="text" placeholder='Search by job title, skill, tags' className="text-sm pr-12 font-normal bg-white rounded-full w-full " />
                        </form>
                        <span className='flex'>
                            <button className="text-sm lg:text-sm px-4 lg:px-6 py-4 border rounded-full text-white bg-[#3e3aff] shadows">Get Started!</button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full grid lg:grid-cols-3 gap-8">
                <div className="min-h-[450px] flex relative">
                    <div className="min-h-[100%] z-10 rounded-[40px] w-full bg-[#f7f7f7] flex p-6 pt-8 flex-col justify-between gap-12">
                        <Image
                            src={"/images/Productive.jpg"}
                            width={60}
                            height={60}
                            className='rounded-full'
                            alt='Avatar for user'
                        />
                        <div className="flex flex-col gap-4">
                            <span className='text-sm lg:text-sm font-normal max-w-[500px]'>
                                <AnimateTextWord type='bigtext'>
                                    Productive
                                </AnimateTextWord>

                            </span>
                            <h2 className="text-3xl lg:text-4xl leading-[1.2] family2 text-dark family2">
                                <AnimateTextWord type='bigtext'>
                                    Productive is a Popular Online Platform
                                </AnimateTextWord>

                            </h2>
                            <span className='text-sm lg:text-sm font-normal max-w-[500px]'>
                                <AnimateTextWord>
                                    Unlock your true potential and discover a true world of communities that aligns Job Hunting made Easy: Get instant alerts for job matching your skills and innovative job finder!
                                </AnimateTextWord>
                            </span>
                        </div>
                    </div>
                    {/* <div className="absolute -top-10 z-20 p-4 bg-[#fff] -right-4 rounded-[40px]">
                        <div className="h-20 w-20 z-20  flex items-center justify-center text-base text-white rounded-[20px] bg-[#161818]">
                            <BiArrowToRight />
                        </div>
                    </div> */}
                </div>

                <div className="min-h-[450px] flex relative">
                    <div className="min-h-[100%] z-10 rounded-[40px] w-full bg-[#fff] border flex p-6 pt-8 flex-col justify-between gap-12">
                        <div className="flex flex-col gap-4">
                            <span className='text-sm lg:text-sm font-normal max-w-[500px]'>
                                <AnimateTextWord type='bigtext'>
                                    NJGotham
                                </AnimateTextWord>
                              
                            </span>
                            <h2 className="text-3xl lg:text-4xl leading-[1.2] family2 text-dark family2">
                               
                                <AnimateTextWord type='bigtext'>
                                    NJGotham is a Popular Online Platform
                                </AnimateTextWord>
                            </h2>
                            <span className='text-sm lg:text-sm font-normal max-w-[500px]'>
                                 <AnimateTextWord >
                                    Unlock your true potential and discover a true world of communities that aligns Job Hunting made Easy: Get instant alerts for job matching your skills and innovative job finder!

                                </AnimateTextWord>
                           </span>
                        </div>
                        <Image
                            src={"/images/NJGotham.png"}
                            width={60}
                            height={60}
                            alt='Avatar for user'
                        />

                    </div>
                    {/* <div className="absolute -bottom-10 z-20 p-4 bg-[#fff] -right-4 rounded-[40px]">
                        <div className="h-20 w-20 z-20  flex items-center justify-center text-base text-white rounded-[20px] bg-[#161818]">
                            <BiArrowToRight />
                        </div>
                    </div> */}
                </div>
                <div className="min-h-[450px] flex relative">
                    <div className="min-h-[100%] z-10 rounded-[40px] w-full bg-[#fff] border flex p-6 pt-8 flex-col justify-between gap-12">

                        <Image
                            src={"/images/tenkara.png"}
                            width={60}
                            height={60}
                            alt='Avatar for user'
                        />
                        <div className="flex flex-col gap-4">
                            <span className='text-sm lg:text-sm font-normal max-w-[500px]'>
                                
                                <AnimateTextWord type='bigtext'>
                                    Tenkara
                                </AnimateTextWord>

                            </span>
                            <h2 className="text-3xl lg:text-4xl leading-[1.2] family2 text-dark family2">
                               
                                <AnimateTextWord type='bigtext'>
                                    Tenkara is a Popular Online Platform
                                </AnimateTextWord>

                            </h2>
                            <span className='text-sm lg:text-sm font-normal max-w-[500px]'>
                                <AnimateTextWord>
                                    Unlock your true potential and discover a true world of communities that aligns Job Hunting made Easy: Get instant alerts for job matching your skills and innovative job finder!

                                </AnimateTextWord>
                           </span>
                        </div>
                    </div>
                    {/* <div className="absolute -top-10 z-20 p-4 bg-[#fff] -right-4 rounded-[40px]">
                        <div className="h-20 w-20 z-20  flex items-center justify-center text-base text-white rounded-[20px] bg-[#161818]">
                            <BiArrowToRight />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>;
}

export default TopCompanies;