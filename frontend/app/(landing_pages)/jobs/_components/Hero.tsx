import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return <div className='min-h-[500px] md:min-h-[650px] flex items-center gap-8 justify-center'>
        <div className="max-w-[900px] mx-auto w-[90%] flex md:items-center md:justify-center flex-col gap-4">
            <div className="text-center inline max-w-[300px] p-3 px-6 gap-3 bg-gray-200 rounded-full text-sm">Over 130k remote & local startup jobs</div>
            <h2 className="text-4xl md:text-7xl family2 text-dark md:text-center font-semibold">
                The #1 Job Board for Getting your dream Remote Jobs
            </h2>
            <span className="text-lg text-dark max-w-[800px] md:text-center md:text-xl font-normal">
                HireHalo is the heart of the remote jobs community and the best resource to discover and connect with designers and jobs worldwide.
            </span>
            <div className="flex items-center md:justify-center gap-4">

                <Link href={'/companies'} className="btn mt-4 btn_1 space-x-4 py-4 md:px-6 text-sm md:text-md font-normal">
                  +  Post A Job
                </Link>
            </div>
        </div>
    </div>;
}

export default Hero;