"use client";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { MdEdit } from "react-icons/md";
import { BsThreeDots, BsTrash } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const TableCard = ({ tabledata, type, tableheadList }: {
    tabledata?: any, type?: string, tableheadList: string[]
}) => {
    const [userdeletemodal, setUserDeleteModal] = useState(false);
    const startDate = moment(tabledata?.startDate).format("DD MMM YYYY");
    const endDate = moment(tabledata?.endDate).format("DD MMM YYYY");
    return (

        <table className="table-fixed border-collapse overflow-auto">
            <thead>
                <tr>
                    {
                        tableheadList?.map((data, index) => {
                            return <th className="text-sm py-4 px-3 text-[#969A9A] font-normal" key={index}>{data}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody className="text-sm font-normal">
                {
                    tabledata?.map((data?: any, _?: any) => {
                        return <tr className="px-4 hover:bg-[#fafafa] cursor-pointer text-start py-3" key={data?.id}>

                            <td className=" font-normal py-3 flex items-center justify-center text-center">
                                <Image
                                    src={data?.companyImage}
                                    width={50}
                                    height={50}
                                    alt="Comapny's Logo"
                                />
                            </td>
                            <td className=" font-semibold py-3 text-center">{data?.company}
                                <span className="block font-normal text-sm">
                                    {data?.jobtitle}
                                </span>

                            </td>
                            <td className=" font-normal py-3 text-center">24th Ocotber 2024</td>

                            <td className="py-3 text-center">
                                {data?.ApplicationStatus === "HIRED" ? (
                                    <span className="py-2 font-semibold px-4 rounded-md bg-[#cdeed3] text-[#347345] text-xs family1 success text-center">
                                        {data?.ApplicationStatus}
                                    </span>
                                ) : data?.ApplicationStatus === "ACTIVE" ? (
                                    <span className="py-2 font-semibold px-4 rounded-md bg-[#ffeec3] text-[#a37d18] text-xs family1 success text-center">
                                        {data?.ApplicationStatus}
                                    </span>
                                ) :

                                    (
                                        <span className="py-2 font-semibold px-4 rounded-md bg-[#deddff] text-[#3e3aff] text-xs family1 danger text-center">
                                            {data?.ApplicationStatus}
                                        </span>
                                    )}
                            </td>
                            <td className=" font-normal py-3 text-center">
                                <Link href="user/applied-jobs" className="shadows px-3 py-3 border rounded-md bg-[#fafafa]">
                                    View Application
                                </Link>
                            </td>
                        </tr>
                    })
                }

            </tbody>
        </table>

    );
};

export default TableCard;
