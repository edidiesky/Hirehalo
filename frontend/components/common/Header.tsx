"use client"
import {
    onLoginModal, 
    onRegisterModal,
} from '@/services/modalSlice';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    // console.log(loginmodal);
    return <div className=" sticky z-40 top-0">
        <div style={{
            backdropFilter: "blur(14px)"
        }} className='min-h-[70px] w-full z-40 flex items-center px-4 lg:px-8 bg-[#ffffffa0] border-b gap-8 justify-between'>
            <div className="w-full max-w-custom mx-auto flex items-center justify-between">
                <div className="flex items-center gap-8 lg:gap-12">
                    <Link href={'/'} className='text-lg lg:text-xl family2'>HireHalo</Link>

                </div>

                <div className="hidden lg:flex flex-1 justify-center items-center gap-12">
                    <Link href={'/jobs'} className='text-base text-dark font-normal'>Find a Job</Link>
                    <Link href={'/about'} className='text-base text-dark font-normal'>About Us</Link>
                    <Link href={'/companies'} className='text-base text-dark font-normal'>For Companies</Link>

                </div>
                <div className="flex items-center justify-end gap-2 md:gap-4">
                    <span className=''>
                        <button onClick={() => dispatch(onLoginModal(""))} className="text-sm lg:text-sm px-4 lg:px-6 py-3 border rounded-full text-white bg-[#3e3aff] shadows">Join with Us</button>
                    </span>
                    <button onClick={() => dispatch(onRegisterModal(""))} className="text-sm lg:text-sm px-4 lg:px-6 py-3 rounded-full shadows border">Sign Up</button>
                </div>
            </div>
        </div>
    </div>;
}

export default Header;