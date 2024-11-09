import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';
const Hero = () => {
    return <div className='min-h-[750px] py-12 lg:py-24 flex items-center gap-8 justify-center'>
        <div className="max-w-custom mx-auto w-[90%] grid grid-cols-1 gap-4">
            <div className="w-full flex flex-col lg:items-center lg:justify-center gap-8">
                <div className="px-6 py-2 max-w-[300px] border bg-[#deddff5b] rounded-full text-sm text-[#3e3aff] family2">
                    #1 Top greatest on Product Hunt 
                </div>
                <h2 className="text-4xl sm:text-5xl max-w-[500px] lg:max-w-[1000px] lg:mx-auto leading-[1] lg:text-[85px] lg:text-center family2 text-dark family2">
                    Supporting Job Seekers
                    Every  Step of the Way

                </h2>
                <span className='text-base lg:text-xl font-normal lg:text-center max-w-[460px] md:max-w-[500px]'>
                    Unlock your true potential and discover a true world of communities that aligns.
                    Job Hunting made Easy: Get instant alerts for job matching your skills and innovative job finder!
                     {/*Job Hunting made Easy: Get instant alerts for job matching your skills and innovative job finder!  */}
                </span>
                <div className="w-full flex md:max-w-[600px] sm:items-center lg:justify-center gap-2 md:gap-4">
                    <form action="" className='lg:max-w-[450px] w-[250px] lg:w-[80%] flex items-center relative'>
                        <span className="w-4 h-4 flex absolute right-6">
                            <BsSearch />
                        </span>
                        <input type="text" placeholder='Search by job title, skill, tags' className="text-sm input pr-12 font-normal bg-white rounded-full w-full " />
                    </form>
                    <span className='flex'>
                        <button className="text-xs lg:text-sm px-4 lg:px-6 py-4 border rounded-full text-white bg-[#3e3aff] shadows">Get Started!</button>
                    </span>
                </div>
                <div className="flex p-4 md:flex-row flex-col md:items-center gap-4">
                    <div className="flex items-center">
                        <span>
                            <Image
                                src={'/images/face/avatar_1.jpg'}
                                width={50}
                                height={50}
                                className='rounded-full'
                                alt='Avatar for user'
                            />
                        </span>
                        <span className='-ml-4 z-10 border-4 rounded-full border-[#fff]'>
                            <Image
                                src={'/images/face/avatar_2.png'}
                                width={50}
                                height={50}
                                className='rounded-full'
                                alt='Avatar for user'
                            />
                        </span>
                        <span className='-ml-4 z-20 border-4 rounded-full border-[#fff]'>
                            <Image
                                src={'/images/face/avatar_2.png'}
                                width={50}
                                height={50}
                                className='rounded-full'
                                alt='Avatar for user'
                            />
                        </span>
                        <span className='-ml-4 z-20 border-4 rounded-full border-[#fff]'>
                            <Image
                                src={'/images/face/avatar_3.png'}
                                width={50}
                                height={50}
                                className='rounded-full'
                                alt='Avatar for user'
                            />
                        </span>

                    </div>
                    <span className='text-base font-normal md:text-center max-w-[300px]'>
                        <span className='text-[#3e3aff] family2'>
                            40k+
                        </span> Talents found <br /> Their dream jobs

                    </span>
                </div>
            </div>
            <div className="lg:w-[300px] flex flex-col gap-8">

            </div>
        </div>
    </div>;
}

export default Hero;