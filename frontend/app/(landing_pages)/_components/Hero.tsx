import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return <div className='min-h-[500px] md:min-h-[780px] flex items-center gap-8 justify-center'>
        <div className="max-w-custom mx-auto w-[90%] flex md:items-center md:justify-center flex-col gap-4">
            <div className="text-center p-3 max-w-[300px] px-6 gap-3 bg-gray-200 rounded-full text-sm">Explore our AI Powered Search Tool</div>
            <h2 className="text-4xl max-w-[1000px] md:text-7xl lg:text-8xl  family2 text-dark md:text-center font-semibold">
                <span>HireHalo</span>: Find your
                <span>Next Job or Hire</span>
             the best talent
            </h2>
            <span className="text-lg text-dark md:text-center md:text-xl font-normal">
                AngelList provides investors and innovators <br /> with the tools to grow.
            </span>
            <div className="flex items-center gap-4">
                <Link href={'/Job-Seekers'} className="btn mt-4 btn_1 py-4 px-4 md:px-6 text-sm md:text-lg font-normal">
                    Find your Next Job
                </Link>

                <Link href={'/companies'} className="btn mt-4 btn_2 border py-4 md:px-6 text-sm md:text-lg font-normal">
                    Find your Next Hire
                </Link>
            </div>
        </div>
    </div>;
}

export default Hero;