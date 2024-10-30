import React from 'react';
import TableCard from "@/components/common/TableCard";
import { applicantsData } from '@/constants';

const Candidates = () => {
    return <div className='px-6 py-8 border rounded-lg flex flex-col w-full gap-6'>
        <div className="w-full flex items-center justify-between gap-4">
            <h3 className="text-xl block lg:text-2xl text-dark family2 family2">
                Candidates
            </h3>
            <div className="w-full flex flex-row gap-4 lg:items-center justify-end">
                <form action="" className='max-w-[240px] lg:w-[200px] relative'>
                    <input type="text" placeholder='Search candidate' className="text-sm font-normal rounded-full w-full " />
                </form>
                <div className="flex items-center lg:justify-end">
                    <button className="shadows py-3 rounded-full cursor-pointer px-6 border text-white bg-[#000] text-sm">Add Candidate</button>

                </div>
            </div>
        </div>
        {/* table */}
        <div className="w-full">
            <TableCard
                tableheadList={["Company", "Full Name", "Role", "Date Created", "Application Status", "Actions"]}
                tabledata={applicantsData}
                type='Applicants'
            />
        </div>
    </div>;
}

export default Candidates;