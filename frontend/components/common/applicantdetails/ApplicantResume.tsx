import React from 'react';
const ApplicantResume = () => {
    return (
        <div className='px-4 py-6 border rounded-lg'>
            <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <h4 className="text-lg md:text-xl font-semibold family2">Professional Experience</h4>
                    <span className="text-sm leading-[1.5] font-normal">
                        Proven Full Stack Developer with 4+ years of experience building high-performance web applications using
                        React.js, Next.js, and Typescript. Proficient in optimizing code, integrating with back-end services, and
                        improving overall user experience. Experienced in working with cross-functional teams, including backend
                        developers, designers, and product managers, to deliver scalable, high-quality solutions. Passionate about crafting
                        efficient, responsive web applications with a strong focus on performance
                    </span>
                </div>
                <div className="flex flex-col gap-3">
                    <h4 className="text-lg md:text-xl font-semibold family2">Professional Experience</h4>
                    <ol className="list-disc pl-4 md:pl-8 flex-col gap-3 flex">
                        <li className="flex flex-col gap-2">
                            <span className="text-lg md:text-lg font-semibold family2">Bitnorm</span>
                            <ol className="text-sm font-normal list-disc pl-4 md:pl-6 flex-col gap-1 flex">
                                <li>
                                    Optimized code by using Typescript which ensured types thereby enhancing trading analytics load times by 20
                                </li>
                                <li>
                                    Optimized code by using Typescript which ensured types thereby enhancing trading analytics load times by 20%
                                </li>
                            </ol>
                        </li>
                        <li className="flex flex-col gap-2">
                            <span className="text-lg md:text-lg font-semibold family2">Bitnorm</span>
                            <ol className="text-sm font-normal list-disc pl-4 md:pl-6 flex-col gap-1 flex">
                                <li>
                                    Optimized code by using Typescript which ensured types thereby enhancing trading analytics load times by 20
                                </li>
                                <li>
                                    Optimized code by using Typescript which ensured types thereby enhancing trading analytics load times by 20%
                                </li>
                            </ol>
                        </li>
                    </ol>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="text-lg md:text-xl font-semibold family2">Skills and Expertise</h4>
                    <div className="flex w-full flex-wrap gap-2 items-center">
                        <span className="text-sm bg-[#deddff72] p-2 rounded-md font-semibold text-[#3e3aff]">
                            React.js
                        </span>
                        <span className="text-sm bg-[#deddff72] p-2 rounded-md font-semibold text-[#3e3aff]">
                            Next.js
                        </span>
                        <span className="text-sm bg-[#deddff72] p-2 rounded-md font-semibold text-[#3e3aff]">
                            Typescript.
                        </span>
                        <span className="text-sm bg-[#deddff72] p-2 rounded-md font-semibold text-[#3e3aff]">
                            NodeJS
                        </span>
                        <span className="text-sm bg-[#deddff72] p-2 rounded-md font-semibold text-[#3e3aff]">
                            Javascript
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicantResume;