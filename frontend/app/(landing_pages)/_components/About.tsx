import AnimateTextWord from '@/components/common/AnimateTextWord';
import React from 'react';

const About = () => {
    return <div className='flex w-full py-12 md:pb-40 items-center bg-[#fafafa] gap-8 justify-center'>
        <div className="max-w-custom mx-auto w-[90%] grid lg:grid-cols-custom_2 lg:items-center gap-20">
            <div className=" lg:w-[400px]">
                <h2 className="text-4xl lg:text-6xl max-w-[500px] family2 text-dark family2">
                    <AnimateTextWord type='bigtext'>
                        Experience With Numbers
                    </AnimateTextWord>
              
                </h2>
            </div>
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                <h3 className="text-6xl leading-[1.5] flex-1 border-r pr-4 text-start lg:text-8xl font-normal">
                    <AnimateTextWord type='bigtext'>
                        90%
                    </AnimateTextWord>

                    <span className="block text-sm max-w-[300px]">
                        <AnimateTextWord>
                            Many Users found relevant job based their skills levels
                        </AnimateTextWord>

                    </span>
                </h3>
                <h3 className="text-6xl leading-[1.5] flex-1 border-r pr-4 text-start lg:text-8xl font-normal">
                    <AnimateTextWord type='bigtext'>
                        95%
                    </AnimateTextWord>
                    <span className="block text-sm max-w-[300px]">
                        <AnimateTextWord>
                            Data filtering form companies do not take too long
                        </AnimateTextWord>

                    </span>
                </h3>
                <h3 className="text-6xl leading-[1.5] flex-1 text-start lg:text-8xl font-normal">
                    <AnimateTextWord type='bigtext'>
                        80%
                    </AnimateTextWord>
                    <span className="block text-sm max-w-[300px]">
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