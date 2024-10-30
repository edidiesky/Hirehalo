"use client"
import React, { useState } from 'react';
import { ProfileFormData, FormValueType } from "@/constants";

const General = () => {

    const [formValue, setFormValue] = useState<FormValueType>({
        name: "",
        username: "",
        email: "",
        linkedln: "",
        country: "",
    })

    return <div className='w-full flex flex-col gap-8'>
        <h4 className="family2 text-xl lg:text-2xl family2">General Information</h4>
        <form action="" className='w-full flex flex-col gap-4 py-12 px-6 border rounded-lg relative'>
            {
                ProfileFormData.map((formdata, _?: any) => {
                    return <label key={formdata.id} htmlFor="" className="flex max-w-[300px] flex-col gap-2 text-base">
                        <span className="family2">
                            {formdata?.text}
                            {/* <span className="block text-sm pt-1 font-normal italic">{formdata?.label}</span> */}
                        </span>
                        <input type={formdata?.type} value={formValue[formdata.name]} name={formdata.name} placeholder={formdata?.label} className="text-sm font-normal rounded-md w-full " />
                    </label>
                })
            }
            <button className="text-sm mt-4 max-w-[300px] lg:text-base btn btn_1">Save new Information</button>

        </form>
    </div>;
}
export default General;