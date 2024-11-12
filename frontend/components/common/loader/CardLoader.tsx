import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const CardLoader = () => {
    return (
        <SkeletonThemeCard>
            <div className="w-full flex flex-col gap-8 p-3 border rounded-xl">
                <span className='h-[300px] w-full'>
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
                        <span className='h-[7px] w-full'>
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
        <SkeletonTheme baseColor="#fafafa" highlightColor="#eeeeeee3">
            {children}
        </SkeletonTheme>
    )
}


export default CardLoader;