import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div
            className="relative h-[800px]"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className="relative h-[100vh] bottom-[0]">
                <div className="min-h-[800px] sticky bottom-[0]">
                    <div className="h-full flex flex-col gap-8 items-center justify-center w-full bg-[#f8f9f7]">
                        <div className="w-full flex flex-col items-center justify-center gap-4">
                            <h2 className="text-[160px] md:text-[250px] family2 text-center">HIREHALO</h2>
                            <div className="w-[95%] mx-auto max-w-custom grid md:grid-cols-custom_2 gap-8">
                                <div className="w-[300px] flex flex-col gap-4">
                                    <h4 className="text-base font-semibold">Get started</h4>
                                    <ul className="flex flex-col gap-4">
                                        <li className="text-sm">Sign In</li>
                                        <li className="text-sm">Sign Up</li>
                                    </ul>
                                </div>

                                <div className="w-full grid md:grid-cols-3 gap-8">
                                    <div className="flex flex-col gap-4">
                                        <h4 className="text-base font-semibold">For Remote Candidates</h4>
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
                                        <h4 className="text-base font-semibold">For Recruiters</h4>
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
                                        <h4 className="text-base font-semibold">Resources</h4>
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
            </div>
        </div>
    )

}

export default Footer;


