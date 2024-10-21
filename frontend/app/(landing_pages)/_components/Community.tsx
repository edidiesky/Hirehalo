import React from 'react';
const Community = () => {
    return (
        <div className='flex w-full py-20 items-center  gap-8 justify-center'>
            <div className="max-w-custom mx-auto w-[90%] grid md:grid-cols-2 md:items-center gap-12 md:gap-20">
                <div className="w-full flex flex-col gap-4 md:items-center justify-between">
                    <h2 className="text-5xl flex-1 lg:text-7xl text-start leading-[1.2] family2 text-dark font-semibold">
                        <span className="pb-4 block font-normal text-xl">Top Companies </span>
                        Building your Network: The Job Finder Community
                    </h2>
                    <div className="flex flex-1 flex-col gap-4">
                        <span className='text-sm md:text-base font-normal'>
                            Unlock your true potential and discover a true world of communities that aligns Job Hunting made Easy: Get instant alerts for job matching your skills and innovative job finder!
                        </span>
                        <span className='flex'>
                            <button className="text-sm lg:text-sm px-4 lg:px-6 py-4 border rounded-full text-white bg-[#3e3aff] shadows">Get Started!</button>
                        </span>
                    </div>
                </div>
                <div className="w-full grid md:grid-cols-2 gap-6">
                    <div className="w-full flex flex-col gap-4">
                        <div className="min-h-[250px] w-full flex relative">
                            <div className="min-h-[100%] z-10 rounded-[20px] w-full bg-[#e8f2fc61] flex p-6 pt-8 flex-col justify-between gap-12">

                                <div className="flex flex-col gap-4">

                                    <h3 className="text-2xl lg:text-3xl leading-[1.2] family2 text-dark font-semibold">
                                        Jobs In Tech
                                    </h3>
                                    <span className='text-sm md:text-sm font-normal max-w-[500px]'>
                                        Many Tech Companies foster innovative and collaborative environments
                                    </span>
                                </div>

                                <span className='flex'>
                                    <button className="text-xs px-4 py-3 border rounded-full text-white bg-[#000] shadows">Get Started!</button>
                                </span>
                            </div>
                        </div>
                        <div className="min-h-[250px] w-full flex relative">
                            <div className="min-h-[100%] z-10 rounded-[20px] w-full bg-[#ffe1cc56] flex p-6 pt-8 flex-col justify-between gap-12">

                                <div className="flex flex-col gap-4">

                                    <h3 className="text-2xl lg:text-3xl leading-[1.2] family2 text-dark font-semibold">
                                        Designers
                                    </h3>
                                    <span className='text-sm md:text-sm font-normal max-w-[500px]'>
                                        Design jobs are all about creating visual components that communicate ideas and vision
                                    </span>
                                </div>

                                <span className='flex'>
                                    <button className="text-xs px-4 py-3 border rounded-full text-white bg-[#000] shadows">Get Started!</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full min-h-[250px] flex flex-col gap-4">
                        <div className="min-h-[85%] w-full flex relative">
                            <div className="min-h-[100%] z-10 rounded-[20px] w-full bg-[#e8f2fc61] flex p-6 pt-8 flex-col justify-between gap-12">

                                <div className="flex flex-col gap-4">
                                    <h3 className="text-3xl pb-6 border-b lg:text-5xl leading-[1.2] family2 text-dark font-semibold">
                                        20k+
                                        <span className='text-sm md:text-sm block font-normal max-w-[500px]'>
                                            Users joined the community!
                                        </span>
                                    </h3>
                                    <h3 className="text-2xl lg:text-3xl leading-[1.2] family2 text-dark font-semibold">
                                        Salaries in Tech
                                    </h3>
                                    <span className='text-sm md:text-sm font-normal max-w-[500px]'>
                                        Tech salaries are generally quite competitive compared to the average across all occupations.
                                    </span>
                                </div>

                                <span className='flex'>
                                    <button className="text-xs px-4 py-3 border rounded-full text-white bg-[#000] shadows">Get Started!</button>
                                </span>
                            </div>
                        </div>
                        <div className="z-10 rounded-[20px] w-full bg-[#e8f2fc61] flex p-4 items-center justify-center gap-4">
                            <h3 className="text-lg lg:text-xl leading-[1.2] family2 text-dark text-center w-full font-semibold">
                                More
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Community