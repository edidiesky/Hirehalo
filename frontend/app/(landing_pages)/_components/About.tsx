import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return <div className='flex w-full py-20 items-center bg-[#fafafa] gap-8 justify-center'>
        <div className="max-w-custom mx-auto w-[90%] grid md:grid-cols-custom_2 md:items-center gap-20">
          <div className=" md:w-[400px]">
                <h2 className="text-5xl lg:text-6xl family2 text-dark font-semibold">
                    Experience <br /> With Numbers
                </h2>
          </div>
          <div className="w-full grid md:grid-cols-3 gap-12">
                <h3 className="text-6xl leading-[1.5] flex-1 border-r pr-4 text-start md:text-8xl font-normal">
                    90%
                    <span className="block text-sm">
                     Many Users found relevant job based their skills levels
                    </span>
                </h3>
                <h3 className="text-6xl leading-[1.5] flex-1 border-r pr-4 text-start md:text-8xl font-normal">
                    92%
                    <span className="block text-sm">
                        Data filtering form companies do not take too long
                    </span>
                </h3>
                <h3 className="text-6xl leading-[1.5] flex-1 text-start md:text-8xl font-normal">
                    92%
                    <span className="block text-sm">
                       Many top employers can connect with Many users
                    </span>
                </h3>
          </div>
        </div>
    </div>;
}

export default About;