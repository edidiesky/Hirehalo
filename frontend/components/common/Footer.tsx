import Link from 'next/link';
import React from 'react';
import AnimateTextWord from '@/components/common/AnimateTextWord';

const Footer = () => {
    return (
        <div
            className="relative"
        >
            <div className="h-full py-20 flex flex-col gap-8 items-center justify-center w-full bg-[#f8f9f7]">
                <div className="w-full px-2 md:px-4 flex flex-col lg:items-center lg:justify-center gap-4">
                    <h2 className="text-7xl lg:text-[250px] family2 lg:text-center">
                        <AnimateTextWord type='bigtext'>
                            HIREHALO
                        </AnimateTextWord>

                    </h2>
                    <div className="w-[95%] mx-auto max-w-custom grid lg:grid-cols-custom_2 gap-8">
                        <div className="w-[300px] flex flex-col gap-4">
                            <h4 className="text-base family2">Get started</h4>
                            <ul className="flex flex-col gap-4">
                                <li className="text-sm">Sign In</li>
                                <li className="text-sm">Sign Up</li>
                            </ul>
                        </div>

                        <div className="w-full grid lg:grid-cols-3 gap-8">
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
                {/* <span className="text-sm font-light">
                            <span className="block font-normal"> Disclaimer:</span>
                            Assets on platform refers the the amount of money being deployed by fund managers using HireHalo software. This does not refer to any amount of money being deployed with HireHalo affiliated exempt reporting adviser, AngelList Advisors, LLC.

                            The information contained herein is provided for informational and discussion purposes only and is not intended to be a recommendation for any investment, service, product, or other advice of any kind, and shall not constitute or imply an offer of any kind. Any investment opportunities and/or products or services shown here will only be completed pursuant to formal offering materials, a letter of intent, and/or any other agreements as determined by AngelList containing full details regarding risks, minimum investment, fees, and expenses of such transaction. The terms of any product, service, or particular investment opportunity, including size, costs, and other characteristics, are set forth in the applicable constituent documents for such product, service or particular investment opportunity and may differ materially from those presented in this presentation. Such terms are subject to change without notice. For more information on AngelList and its products and services, please see here.

                            Quotes included in these materials related to AngelList's services should not be construed in any way as an endorsement of AngelList's advice, analysis, or other service rendered to its clients.
                        </span> */}
            </div>
        </div>
    )

}

export default Footer;


