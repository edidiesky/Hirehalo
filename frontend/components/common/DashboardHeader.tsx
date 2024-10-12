"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
import { BsSearch } from 'react-icons/bs';
const DashboardHeader = ({ }) => {
    const [active, setActive] = useState(false)
    return <div style={{
        backdropFilter: "blur(14px)"
    }} className='h-[85px] border-b border-[rgba(0,0,0,.08)] bg-[#ffffff4e] flex z-40 sticky top-0 items-center justify-between'>
        <div className="w-full px-4 max-w-custom mx-auto flex items-center justify-between">
            <form action="" className='max-w-[250px] md:max-w-[400px] md:w-[300px] flex items-center relative'>
                <span className="w-4 h-4 absolute left-6">
                    <BsSearch />
                </span>
                <input type="text" placeholder='Search by job title, skill, tags' className="text-sm pl-12 font-normal bg-white rounded-full w-full " />
            </form>

            <div className="flex justify-end relative items-center gap-4">
                <div onClick={() => setActive(!active)} className="flex relative justify-end group items-center gap-4 cursor-pointer">
                    <Image
                        src={'/images/face/avatar_1.jpg'}
                        width={45}
                        height={45}
                        className='rounded-full'
                        alt='Avatar for user'
                    />
                    <span className="text-base md:block hidden family2 font-semibold">
                        Edidiong Essien
                        <span className="text-xs block font-normal text-[#969A9A]">Candidate Account</span>
                    </span>
                    
                </div>
                {/* dropdown */}
                <div style={{ transition: "all .4s ease" }} className=
                    {`absolute ${active ? "opacity-100 scale-100 visible" :"scale-[0] opacity-0 "} py-2 border right-[10%] top-[110%] shadow-lg w-[250px] bg-white rounded-lg`}>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex w-full relative pb-3 border-b px-4 items-center gap-4 cursor-pointer">
                            <Image
                                src={'/images/face/avatar_1.jpg'}
                                width={50}
                                height={50}
                                className='rounded-full'
                                alt='Avatar for user'
                            />
                            <span className="text-base family2 font-semibold">
                                Edidiong Essien
                                <span className="text-xs block font-normal text-[#969A9A]">essieneddy10@gmail.com</span>
                            </span>
                        </div>
                        <div className="w-full flex flex-col pb-3 border-b">
                            <Link href={'/'} className="text-sm block font-normal px-4 py-2 hover:bg-[#fafafa] text-[#000]">My Profile</Link>
                            <Link href={'/'} className="text-sm block font-normal px-4 py-2 hover:bg-[#fafafa] text-[#000]">My Jobs</Link>
                            <Link href={'/'} className="text-sm block font-normal px-4 py-2 hover:bg-[#fafafa] text-[#000]">My Messages</Link>
                        </div>
                        <div className="w-full flex flex-col pb-3 border-b">
                            <Link href={'/'} className="text-sm block font-normal px-4 py-2 hover:bg-[#fafafa] text-[#000]">My Mode</Link>
                            <Link href={'/'} className="text-sm block font-normal px-4 py-2 hover:bg-[#fafafa] text-[#000]">Account Settings</Link>
                        </div>
                        <div className="w-full hover:bg-[#fafafa] cursor-pointer text-center py-2 font-semibold text-[#d02828ed]">Sign Out</div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default DashboardHeader;