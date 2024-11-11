"use client"
import { LogOut } from "@/services/authSlice";
import { useLogoutMutation } from "@/services/userApi";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';


const UserProfile = () => {
    const [active, setActive] = useState(false);
    const { currentUser } = useSelector((store: { auth?: any }) => store.auth);
    const [logout] = useLogoutMutation()
    const dispatch = useDispatch();
    const handleLogOut = async () => {
        try {
            await logout("")
            dispatch(LogOut(""));
            toast.success("You have been logged out successfully!");
        } catch (err: any) {
            toast.error(err?.data?.message || err.error);
        }
    };
    return (
        <div className=" relative">
            {currentUser && (
                <div className="flex items-center justify-end gap-8">
                    <div className="flex items-center gap-2">
                        {currentUser?.image ? (
                            <img
                                onClick={() => setActive(!active)}
                                src={currentUser?.image}
                                alt=""
                                className="w-14 h-14 object-cover rounded-full"
                            />
                        ) : (
                            <div onClick={() => setActive(!active)} className="w-12 h-12 flex items-center text-[#fff] justify-center text-xl rounded-full bg-[#A1718A]">
                                {currentUser?.name.slice("")[0]}
                            </div>
                        )}
                    </div>
                    <div
                        style={{ transition: "all .4s ease" }}
                        className={`absolute ${active ? "opacity-100 scale-100 visible" : "scale-[0] opacity-0 "
                            } py-2 border right-[5%] top-[100%] shadow-lg w-[250px] bg-white rounded-lg`}
                    >
                        <div className="w-full flex flex-col gap-4">
                            <div className="flex w-full relative pb-3 border-b px-4 items-center gap-4 cursor-pointer">
                                <img
                                    src={
                                        currentUser?.image
                                            ? currentUser?.image
                                            : "https://fundednext.fra1.digitaloceanspaces.com/dashboard/demo-avatar.jpg"
                                    }
                                    className="w-12 h-12 object-cover rounded-full"
                                    alt="Avatar for user"
                                />
                                <span className="text-base family2">
                                    {currentUser?.name}
                                    <span className="block font-normal family1 text-xs text-dark">
                                        {currentUser?.role === "JOB_RECRUITER"
                                            ? "Seller"
                                            : currentUser?.role === "JOB_AdDMIN"
                                                ? "Admin"
                                                : "Personal"}{" "}
                                        Account
                                    </span>
                                </span>
                            </div>
                            {currentUser?.role === "JOB_RECRUITER" ||
                                currentUser?.role === "JOB_AdDMIN" ? (
                                <div className="flex flex-col gap-3">
                                    <div className="w-full family1 flex flex-col pb-3 border-b">
                                        <Link
                                            href={`/dashboard/recruiter`}
                                            className="text-sm block font-normal px-4 py-2 hover:bg-[#fafafa] text-[#000]"
                                        >
                                            My Dashboard
                                        </Link>
                                        <Link
                                            href={`/dashboard/recruiter/jobs`}
                                            className="text-sm block font-normal px-4 py-2 hover:bg-[#fafafa] text-[#000]"
                                        >
                                            My Jobs
                                        </Link>
                                        <Link
                                            href={"/dashboard/recruiter/candidates"}
                                            className="text-sm block font-normal px-4 py-2 hover:bg-[#fafafa] text-[#000]"
                                        >
                                            My Candidates
                                        </Link>
                                        <Link
                                            href={"/dashboard/recruiter/message"}
                                            className="text-sm block font-normal px-4 py-2 hover:bg-[#fafafa] text-[#000]"
                                        >
                                            My Messages
                                        </Link>
                                        {currentUser?.role === "JOB_AdDMIN" && (
                                            <Link
                                                href={"/dashboard/recruiter/customers"}
                                                className="text-sm block font-normal px-4 py-2 hover:bg-[#fafafa] text-[#000]"
                                            >
                                                My Customers
                                            </Link>
                                        )}
                                    </div>
                                    <div className="w-full family1 flex flex-col pb-3 border-b">

                                        <Link
                                            href={`/dashboard/recruiter/profile/`}
                                            className="text-sm block  font-normal px-4 py-2 hover:bg-[#fafafa] text-[#000]"
                                        >
                                            Account Settings
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-3">
                                    <div className="w-full family1 flex flex-col pb-3 border-b">
                                        <Link
                                            href={`/dashboard/user`}
                                            className="text-sm block font-normal px-4 py-2 hover:bg-[#fafafa] text-[#000]"
                                        >
                                            My Dashboard
                                        </Link>
                                        <Link
                                            href={`/dashboard/user/applied-jobs`}
                                            className="text-sm block font-normal px-4 py-2 hover:bg-[#fafafa] text-[#000]"
                                        >
                                            My Applications
                                        </Link>
                                        <Link
                                            href={"/dashboard/user/message"}
                                            className="text-sm block font-normal px-4 py-2 hover:bg-[#fafafa] text-[#000]"
                                        >
                                            My Messages
                                        </Link>
                                    </div>
                                    <div className="w-full family1 flex flex-col pb-3 border-b">

                                        <Link
                                            href={`/dashboard/user/profile`}
                                            className="text-sm block  font-normal px-4 py-2 hover:bg-[#fafafa] text-[#000]"
                                        >
                                            Account Settings
                                        </Link>
                                    </div>
                                </div>
                            )}

                            <div
                                onClick={handleLogOut}
                                className="w-full hover:bg-[#fafafa] cursor-pointer family1 text-center py-2 font-semibold text-[#d02828ed]"
                            >
                                Sign Out
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default UserProfile;
