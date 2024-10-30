
"use client"

import Image from "next/image";
import { BsPen, BsSearch } from "react-icons/bs";
import MessagesList from "./_components/MessagesList";

export default function Home() {
  return (
    <div className="w-full bg-white h-[80vh] z-20 sticky top-0 py-4 px-4 lg:px-6">
      <div className="w-full max-w-custom h-full mx-auto grid grid-cols-custom_2 gap-8">
        <div className="w-[280px] h-[500px] overflow-auto flex flex-col gap-6 px-4 border-r">
          <div className="flex items-center gap-4 justify-between w-full">
            <h4 className="text-2xl lg:text-3xl family2">
              Inbox
            </h4>
            <div className="h-10 w-10 flex items-center justify-center text-base text-white rounded-md bg-[#161818]">
              <BsPen />
            </div>
          </div>
          <form action="" className='w-full flex items-center gap-4 relative'>
            <span className="w-4 h-4 absolute left-6">
              <BsSearch />
            </span>
            <input type="text" placeholder='Search Inbox..' className="text-sm pl-12 font-normal rounded-full w-full" />

          </form>
          <h4 className="text-base text-center px-4 font-light">
            Your conversation list is empty
          </h4>
        </div>
        <div className="w-full h-full max-h-[700px] border rounded-lg flex flex-col gap-4 relative">
          {/* top bar */}
          <div className="h-[65px] flex items-center justify-between gap-4 w-full border-b px-4">
            <div className="flex relative items-center gap-3 px-3 py-1 hover:bg-[#fafafa] rounded-md cursor-pointer">
              <Image
                src={'/images/face/avatar_1.jpg'}
                width={40}
                height={40}
                className='rounded-full'
                alt='Avatar for user'
              />
              <span className="text-sm family2 family2">
                Edidiong Essien
                <span className="text-xs block font-normal text-[#969A9A]">essieneddy10@gmail.com</span>
              </span>
            </div>
          </div>
          {/* MessagesList */}
          <MessagesList />

          {/* search input */}
          <div className="px-4 w-full flex items-center">
            <div style={{backdropFilter:"blur(24px)"}} className="p-4 bg-[#ffffffa0] w-full border flex flex-col rounded-lg h-[95px] ">
              <textarea name="" placeholder="Write a message" id="" className="w-full border-none p-2 text-sm text-dark min-h-[45px] outline-none"></textarea>
              <div className="w-full justify-end flex items-center gap-4 rounded-lg">
                <button className="shadows py-1 rounded-full cursor-pointer px-3 border text-white bg-[#000] text-xs">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
