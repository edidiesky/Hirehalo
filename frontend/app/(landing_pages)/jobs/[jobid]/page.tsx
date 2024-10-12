import Image from 'next/image';
import Link from 'next/link';
import { BiChevronLeft } from 'react-icons/bi'
import React from 'react';

const Home = () => {
    return <div className='py-12 w-[90%] mx-auto max-w-[1200px] md:py-16 flex items-center gap-8 justify-center'>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-custom items-start gap-8 mx-auto w-[90%]">
            <div className="w-full flex items-start flex-col gap-12 md:gap-12">
                <span>
                    <Link href={'/jobs'} className="py-3 px-4 flex items-center gap-2 font-semibold text-sm rounded-full bg-[#F8F7F4]">
                        <BiChevronLeft fontSize={'20px'} />   All Jobs
                    </Link>
                </span>
                <div className="flex flex-col gap-8">
                    <h3 className="text-2xl family2 lg:text-4xl font-bold">
                        <span className="block text-sm pb-4 font-normal">
                            Job Details
                        </span>
                        Landing Page Designer (UI/UX)

                    </h3>
                    <span className="text-lg">
                        We're looking for a skilled designer to join our team, focusing on creating top-quality landing pages.
                    </span>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg family2 lg:text-2xl font-bold">
                            What You'll Do:
                        </h4>
                        <ol className="list-disc pl-8 flex-col gap-3 flex text-base md:text-lg">
                            <li>Design effective landing pages that align with our client's goals</li>
                            <li>Directly and verbally communicating with teams on calls</li>
                            <li>Work with well-known brands, helping to improve their online aesthetics</li>
                            <li>Get involved in a variety of design projects, including branding and web design</li>
                            <li>Take on responsibilities and contribute to our creative direction</li>
                        </ol>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg family2 lg:text-2xl font-bold">
                            What We Offer:
                        </h4>
                        <ol className="list-disc pl-8 flex-col gap-3 flex text-base md:text-lg">
                            <li>Fully remote position—work from wherever you feel most creative</li>
                            <li>Opportunities to work on diverse projects, keeping your work fresh and engaging</li>
                            <li>A role within a team recognized as a Webflow Premium Enterprise Partner, with a strong reputation in design and SEO</li>
                            <li>High standards and expectations, with plenty of room for growth</li>
                            <li>Take on responsibilities and contribute to our creative direction</li>
                        </ol>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg family2 lg:text-2xl font-bold">
                            Who You Are:
                        </h4>
                        <ol className="list-disc pl-8 flex-col gap-3 flex text-base md:text-lg">
                            <li>Fluent in English</li>
                            <li>Comfortable working in a fast-paced, challenging environment</li>
                            <li>Interested in having a say in the creative process and delivering quality work</li>
                            <li>A founder</li>
                        </ol>
                    </div>
                    <h5 className="text-lg font-normal">
                        If this sounds like the right fit for you, we'd love to hear from you.
                    </h5>
                </div>
                <button className="text-sm md:text-base btn btn_1">Apply for this position</button>
            </div>
            <div className="w-[350px] px-8 py-12 border rounded-lg bg-white top-20 flex justify-center items-center flex-col gap-4">
                <div className="flex justify-center w-full pb-6 border-b items-center flex-col gap-4">
                    <Image
                        src="/images/Zello.png"
                        width={70}
                        alt='Comapny Logo'
                        height={80}
                    />
                    <h3 className="text-xl family2 lg:text-3xl font-bold">
                        ZelloFace
                    </h3>
                    <button className="p-6 bg-[#002b31] text-white py-3 font-bold rounded-full text-sm">Apply for this position</button>
                </div>
                <div className="flex justify-center w-full items-start flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        {/* job type */}
                        <span className="text-lg font-semibold">
                            <span className="text-base font-normal">
                                Job Type
                            </span>
                            <span className="block">
                                Full-time
                            </span>
                        </span>
                        {/* job locaion */}
                        <span className="text-lg font-semibold">
                            <span className="text-base font-normal">
                                Location
                            </span>
                            <span className="block">
                                Remote
                            </span>
                            <span className="block">
                                
                                Remote Friendly
                            </span>
                        </span>
                        {/* job locaion */}
                        <span className="text-lg font-semibold">
                            <span className="text-base font-normal">
                                Date posted
                            </span>
                            <span className="block">
                                Sep 27, 2024
                            </span>
                        </span>

                    </div>
                </div>

            </div>
        </div>
    </div>;
}

export default Home;