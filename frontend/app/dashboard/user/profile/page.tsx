
"use client"

import { useState } from "react";
import General from "./_components/General";
import Password from "./_components/Password";

export default function Home() {
const [tab, setTab] = useState(0)
  return (
    <div className="w-full bg-white min-h-[100vh] py-12 px-4 md:px-8">
      <div className="w-full max-w-custom mx-auto flex flex-col gap-8 md:gap-12">
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-2xl block lg:text-3xl text-dark family2 font-semibold">
            Account Settings
          </h3>
          <span className="block text-base font-normal">
            Explore information and activity about your jobs applied
          </span>
        </div>
        <div className="w-full grid md:grid-cols-custom_2 gap-4 md:gap-8">
          <div className="w-[250px] flex md:flex-col flex-row gap-2">
            <div onClick={() => setTab(0)} className={`${tab === 0 ?"bg-[#fafafa]":""} py-3 px-4  rounded-lg cursor-pointer text-base font-normal`}>
              General
            </div>

            <div onClick={() => setTab(1)} className={`${tab === 1 ? "bg-[#fafafa]" : ""} py-3 px-4  rounded-lg cursor-pointer text-base font-normal`}>
              Password
            </div>

          </div>
          <div className="w-full flex flex-col gap-8">
            {
              tab === 0 ? <General /> : <Password />
            }
         
          </div>
        </div>
      </div>
    </div>
  );
}
