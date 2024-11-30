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
            <div className="w-full flex flex-col gap-3 rounded-xl">
                <span className='h-[200px] w-full'>
                    <Skeleton style={
                        {
                            borderRadius: "10px",
                            width: "100%",
                            height: "100%",
                        }
                    } />
                </span>
                <div className="w-full p-3 flex items-center gap-4 justify-between">
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
                        <span className='h-[6px]'>
                            <Skeleton height={6} style={
                                {
                                    borderRadius: "10px",
                                    width: "30%",
                                    height: "100%",

                                }
                            } />
                        </span>
                    </div>
                    <span className='h-[30px] w-[70px]'>
                        <Skeleton style={
                            {
                                borderRadius: "100px",
                                width: "100%",
                                height: "100%",
                            }
                        } />
                    </span>
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