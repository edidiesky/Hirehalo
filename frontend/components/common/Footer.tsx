
import React from 'react';
import AnimateTextWord from '@/components/common/AnimateTextWord';

const Footer = () => {
    return (
        <div
            className="relative"
        >
            <div className="h-full py-20 flex flex-col gap-8 items-center justify-center w-full bg-[#f8f9f7]">
                <div className="w-full px-4 flex flex-col lg:items-center lg:justify-center gap-4">
                    <h2 className="text-7xl sm:text-[150px] lg:text-[280px] family2 lg:text-center">
                        <AnimateTextWord type='bigtext'>
                            HIREHALO
                        </AnimateTextWord>

                    </h2>
                    <div className="lg:w-[90%] mx-auto max-w-custom grid sm:grid-cols-custom_2 gap-8">
                        <div className="w-[150px] md:w-[300px] flex flex-col gap-4">
                            <h4 className="text-base family2">Get started</h4>
                            <ul className="flex flex-col gap-4">
                                <li className="text-sm">Sign In</li>
                                <li className="text-sm">Sign Up</li>
                            </ul>
                        </div>

                        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8">
                            <div className="flex flex-col gap-4">
                                <h4 className="text-base family2">For Remote Candidates</h4>
                                <ul className="flex flex-col gap-4">
                                    <li className="text-sm">Overview</li>
                                    <li className="text-sm">
                                        Startup Jobs</li>
                                    <li className="text-sm">
                                        Web3 Jobs
                                    </li>
                                    <li className="text-sm">
                                        Featured
                                    </li>
                                    <li className="text-sm">
                                        Startup Hiring Data</li>
                                    <li className="text-sm">
                                        Tech Startups
                                        Remote</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h4 className="text-base family2">For Recruiters</h4>
                                <ul className="flex flex-col gap-4">
                                    <li className="text-sm">Overview</li>
                                    <li className="text-sm">
                                        Curated</li>
                                    <li className="text-sm">
                                        Recruit Pro
                                    </li>
                                    <li className="text-sm">
                                        RecruiterCloud
                                    </li>
                                    <li className="text-sm">Hire Developers</li>
                                    <li className="text-sm">Pricing</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h4 className="text-base family2">Resources</h4>
                                <ul className="flex flex-col gap-4">
                                    <li className="text-sm">About</li>
                                    <li className="text-sm">
                                        Help</li>
                                    <li className="text-sm">
                                        Blog
                                    </li>
                                    <li className="text-sm">
                                        Terms & Risks
                                    </li>
                                    <li className="text-sm">Hire Developers</li>
                                    <li className="text-sm">Privacy & Cookies</li>
                                    <li className="text-sm">Careers</li>
                                    <li className="text-sm">Education Center</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Footer;


