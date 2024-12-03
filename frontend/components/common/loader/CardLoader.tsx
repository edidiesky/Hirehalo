import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const CardLoader = ({ type }: { type?: string }) => {
    if (type === "search") {
        return (
            <SkeletonThemeCard>
                <div className="w-full h-[200px] py-8 px-4 border flex flex-col justify-between gap-3 rounded-xl">
                    <div className="w-full flex items-center gap-4 justify-between">
                        <div className="flex-1 flex items-center gap-4">
                            <span className='h-[70px] w-[90px]'>
                                <Skeleton style={
                                    {
                                        borderRadius: "10px",
                                        width: "100%",
                                        height: "100%",
                                    }
                                } />
                            </span>
                            <div className='w-full flex flex-col gap-1'>
                                <span className='h-[10px] w-[150px]'>
                                    <Skeleton style={
                                        {
                                            borderRadius: "10px",
                                            width: "70%",
                                            height: "100%",
                                        }
                                    } />
                                </span>
                                <span className='h-[10px] w-[150px]'>
                                    <Skeleton style={
                                        {
                                            borderRadius: "10px",
                                            width: "100%",
                                            height: "100%",
                                        }
                                    } />
                                </span>
                                <span className='h-[10px] w-[150px]'>
                                    <Skeleton style={
                                        {
                                            borderRadius: "10px",
                                            width: "80%",
                                            height: "100%",
                                        }
                                    } />
                                </span>
                            </div>
                        </div>
                        <div className='flex-1 flex items-end justify-end flex-col gap-1'>
                            <span className='h-[10px] w-[150px]'>
                                <Skeleton style={
                                    {
                                        borderRadius: "10px",
                                        width: "70%",
                                        height: "100%",
                                    }
                                } />
                            </span>
                            <span className='h-[10px] w-[150px]'>
                                <Skeleton style={
                                    {
                                        borderRadius: "10px",
                                        width: "80%",
                                        height: "100%",
                                    }
                                } />
                            </span>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='h-[10px] w-full'>
                            <Skeleton style={
                                {
                                    borderRadius: "10px",
                                    width: "70%",
                                    height: "100%",
                                }
                            } />
                        </span>
                        <span className='h-[10px] w-full'>
                            <Skeleton style={
                                {
                                    borderRadius: "10px",
                                    width: "50%",
                                    height: "100%",
                                }
                            } />
                        </span>
                        <span className='h-[10px]'>
                            <Skeleton style={
                                {
                                    borderRadius: "10px",
                                    width: "30%",
                                    height: "100%",

                                }
                            } />
                        </span>
                    </div>

                </div>

            </SkeletonThemeCard>
        )
    }
    return (
        <SkeletonThemeCard>
            <div className="w-full p-4 border rounded-xl flex flex-col ">
                <span className='h-[200px] md:h-[250px] rounded-xl w-full'>
                    <Skeleton style={
                        {
                            width: "100%",
                            height: "100%",
                            borderRadius: "15px",
                        }
                    } />
                </span>
                <div className="w-full px-2 pt-4 md:pt-8 pb-4 flex flex-col gap-4">
                    <div className="w-full flex items-center gap-2 justify-between">
                        <div className='flex-1 flex flex-col gap-1'>
                            <span className='h-[10px] w-full'>
                                <Skeleton style={
                                    {
                                        borderRadius: "10px",
                                        width: "70%",
                                        height: "100%",
                                    }
                                } />
                            </span>
                            <span className='h-[10px] w-full'>
                                <Skeleton style={
                                    {
                                        borderRadius: "10px",
                                        width: "50%",
                                        height: "100%",
                                    }
                                } />
                            </span>
                            <span className='h-[10px]'>
                                <Skeleton style={
                                    {
                                        borderRadius: "10px",
                                        width: "30%",
                                        height: "100%",

                                    }
                                } />
                            </span>
                        </div>
                        <div className=' flex flex-col'>
                            <span className='h-[20px] w-[80px]'>
                                <Skeleton style={
                                    {
                                        borderRadius: "100px",
                                        width: "100%",
                                        height: "100%",
                                    }
                                } />
                            </span>
                            <span className='h-[6px]'>
                                <Skeleton style={
                                    {
                                        borderRadius: "10px",
                                        width: "60%",
                                        height: "100%",

                                    }
                                } />
                            </span>
                        </div>

                    </div>
                    {/* <div className='flex-1 flex flex-col gap-2'>
                        <span className='h-[5px] w-full'>
                            <Skeleton style={
                                {
                                    borderRadius: "10px",
                                    width: "80%",
                                    height: "100%",
                                }
                            } />
                        </span>
                        <span className='h-[5px]'>
                            <Skeleton style={
                                {
                                    borderRadius: "10px",
                                    width: "60%",
                                    height: "100%",

                                }
                            } />
                        </span>
                        <span className='h-[5px]'>
                            <Skeleton style={
                                {
                                    borderRadius: "10px",
                                    width: "30%",
                                    height: "100%",

                                }
                            } />
                        </span>
                    </div> */}
                </div>
                

            </div>

        </SkeletonThemeCard>
    )
}

const SkeletonThemeCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <SkeletonTheme baseColor="#eee" highlightColor="#fff">
            {children}
        </SkeletonTheme>
    )
}


export default CardLoader;