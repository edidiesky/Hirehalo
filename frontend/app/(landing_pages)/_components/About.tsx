import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return <div className='min-h-[700px] flex w-full py-20 items-center bg-[#001D21] gap-8 justify-center'>
        <div className="max-w-custom mx-auto w-[90%] flex items-center justify-center flex-col gap-20">
            <div className="grid lg:grid-cols-3 items-center pb-8 border-b justify-center w-full flex-col gap-4">
                <h3 className="text-6xl leading-[1.5] text-center md:text-9xl text-white font-normal">
                    8M+
                    <span className="block text-lg">
                        Matches Made
                    </span>
                </h3>

                <h3 className="text-6xl leading-[1.5] text-center md:text-9xl text-white font-normal">
                    150K+
                   

                    <span className="block text-lg">
                        Tech Jobs
                    </span>
                </h3> <h3 className="text-6xl leading-[1.5] text-center md:text-9xl text-white font-normal">
                    10M+
                    <span className="block text-lg">
                        Startup Ready Candidates
                    </span>
                </h3>
            </div>
            <div className="w-full py-20 flex flex-col gap-4">
                <h3 className="text-4xl leading-[1.5] md:text-5xl text-white lg:w-[800px] font-normal">
                    <span className="block text-lg font-normal pb-4 md:pb-8">
                        Software for Venture & Private Equity
                    </span>

                    Our software suite amplifies opportunity for venture and private equity firms, regardless of stage or provider.
                </h3>
            </div>
        </div>
    </div>;
}

export default About;