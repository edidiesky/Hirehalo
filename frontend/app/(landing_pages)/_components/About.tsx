import AnimateTextWord from '@/components/common/AnimateTextWord';
import React from 'react';

const About = () => {
    return <div className='flex w-full py-20 items-center bg-[#fafafa] gap-8 justify-center'>
        <div className="max-w-custom mx-auto w-[90%] grid lg:grid-cols-custom lg:items-center gap-8 lg:gap-20">
            <div className="w-full">
                <h2 className="text-4xl lg:text-5xl leading-[1.3] capitalize family2 text-dark family2">
                    <AnimateTextWord>
                        Unlock your true potentials and discover A world of opportunities that align with your skills, interests and Aspirations.
                    </AnimateTextWord>

                </h2>
            </div>
            <div className="w-full lg:w-[500px] grid sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                <h3 className="text-6xl leading-[1.5] flex-1 text-start lg:text-6xl font-normal">
                    <AnimateTextWord type='bigtext'>
                        90%
                    </AnimateTextWord>

                    <span className="block text-base max-w-[300px]">
                        <AnimateTextWord>
                            Many Users found relevant job based their skills levels
                        </AnimateTextWord>

                    </span>
                </h3>
                <h3 className="text-6xl leading-[1.5] flex-1 text-start lg:text-6xl font-normal">
                    <AnimateTextWord type='bigtext'>
                        10K
                    </AnimateTextWord>

                    <span className="block text-base max-w-[300px]">
                        <AnimateTextWord>
                            Many Companies found relevant job based their skills levels
                        </AnimateTextWord>

                    </span>
                </h3>
                <h3 className="text-6xl leading-[1.5] flex-1 text-start lg:text-6xl font-normal">
                    <AnimateTextWord type='bigtext'>
                        95%
                    </AnimateTextWord>
                    <span className="block text-base max-w-[300px]">
                        <AnimateTextWord>
                            Data filtering form companies do not take too long
                        </AnimateTextWord>

                    </span>
                </h3>
                <h3 className="text-6xl leading-[1.5] flex-1 text-start lg:text-6xl font-normal">
                    <AnimateTextWord type='bigtext'>
                        80%
                    </AnimateTextWord>
                    <span className="block text-base max-w-[300px]">
                        <AnimateTextWord>
                            Many top employers can connect with Many users
                        </AnimateTextWord>

                    </span>
                </h3>
            </div>
        </div>
    </div>;
}

export default About;