import Link from 'next/link';
import React from 'react';

const Header = () => {
    return <div className="p-4 lg:p-6 sticky top-0">
        <div style={{
            backdropFilter: "blur(14px)"
        }} className='min-h-[80px] max-w-custom mx-auto md:w-[90%] z-40 rounded-full flex items-center px-8 bg-[#ffffffa0] border gap-8 justify-between'>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-8 lg:gap-12">
                    <Link href={''} className='text-lg lg:text-2xl font-bold'>HireHalo</Link>
                    <div className="hidden lg:flex items-center gap-8">
                        <Link href={''} className='text-base text-dark font-light'>Discover Hirehalo</Link>
                        <Link href={''} className='text-base text-dark font-light'>For Job Seekers</Link>
                        <Link href={''} className='text-base text-dark font-light'>For Companies</Link>

                    </div>
                </div>

                <div className="flex items-center justify-end gap-4">
                    <span className='md:flex hidden'>
                        <button className="text-sm md:text-base  btn btn_1">Get Started</button>
                    </span>
                    <button className="text-sm md:text-base btn btn_2">Sign Up</button>
                </div>
            </div>
        </div>
    </div>;
}

export default Header;