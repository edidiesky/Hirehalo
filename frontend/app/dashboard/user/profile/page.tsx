
"use client"

import { useState } from "react";

export default function Home() {
const [tab, setTab] = useState(0)
  return (
    <div className="w-full bg-white min-h-[100vh] py-12 px-4 md:px-8">
      <div className="w-full max-w-custom mx-auto flex flex-col gap-12 md:gap-20">
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-2xl block lg:text-3xl text-dark family2 font-semibold">
            Account Settings
          </h3>
          <span className="block text-base font-normal">
            Explore information and activity about your jobs applied
          </span>
        </div>
        <div className="w-full grid grid-cols-custom_2 gap-8">
          <div className="w-[350px] flex flex-col gap-2">
            <div className={"py-4 px-4 bg-[#e2e4e2] rounded-lg cursor-pointer text-base font-normal"}>
              General
            </div>

            <div className={"py-4 px-4 border-b cursor-pointer text-base font-normal"}>
              Password
            </div>

          </div>
          <div className="w-full flex flex-col gap-8">
          </div>
        </div>
      </div>
    </div>
  );
}
