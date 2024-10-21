import Link from 'next/link';
import React from 'react';

const Header = () => {
    return <div className="p-4 lg:p-6 sticky z-40 top-0">
        <div style={{
            backdropFilter: "blur(14px)"
        }} className='min-h-[70px] max-w-custom mx-auto md:w-[95%] z-40 rounded-full flex items-center px-8 bg-[#ffffffa0] border gap-8 justify-between'>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-8 lg:gap-12">
                    <Link href={''} className='text-lg lg:text-xl font-bold'>HireHalo</Link>
                   
                </div>

                <div className="hidden lg:flex flex-1 justify-center items-center gap-12">
                    <Link href={''} className='text-base text-dark font-normal'>Find a Job</Link>
                    <Link href={''} className='text-base text-dark font-normal'>About Us</Link>
                    <Link href={''} className='text-base text-dark font-normal'>For Companies</Link>

                </div>
                <div className="flex items-center justify-end gap-4">
                    <span className='md:flex hidden'>
                        <button className="text-sm md:text-sm px-4 md:px-6 py-3 border rounded-full text-white bg-[#3e3aff] shadows">Join with Us</button>
                    </span>
                    <button className="text-sm md:text-sm px-4 md:px-6 py-3 rounded-full shadows border">Sign Up</button>
                </div>
            </div>
        </div>
    </div>;
}

export default Header;