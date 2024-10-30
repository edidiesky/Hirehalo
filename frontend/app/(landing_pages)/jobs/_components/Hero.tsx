import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return <div className='py-16 bg-[#fafafa] flex items-center'>
        <div className="max-w-[1200px] mx-auto w-[90%] flex flex-col gap-4">
            <div className="text-center inline max-w-[300px] p-3 px-6 gap-3 bg-gray-200 rounded-full text-sm">Over 130k remote & local startup jobs</div>
            <h2 className="text-4xl lg:text-7xl family2 text-dark family2">
                {/* The #1 Job Board for Getting your dream Remote Jobs */}
                Find your dream Jobs
            </h2>
            <span className="text-lg text-dark max-w-[800px] lg:text-xl font-normal">
                HireHalo is the heart of the remote jobs community and the best resource to discover and connect with designers and jobs worldwide.
            </span>
            <div className="flex items-start gap-4">

                <Link href={'/companies'} className="btn mt-4 btn_1 space-x-4 py-4 lg:px-6 text-sm lg:text-md font-normal">
                  +  Post A Job
                </Link>
            </div>
        </div>
    </div>;
}

export default Hero;