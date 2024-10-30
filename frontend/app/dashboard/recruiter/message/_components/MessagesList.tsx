import React from 'react';
const MessagesList = () => {
    return <div className='w-full px-6 h-[45vh] overflow-auto flex-col gap-2'>
      
        {/* sender message */}
        <div className="w-full flex items-center justify-end">
            <div className="flex w-full justify-end items-end gap-1">
                <div className="flex-1 flex items-end flex-col justify-end gap-1">
                    <span className="max-w-[200px] lg:max-w-[400px] rounded-[40px] family1 text-sm leading-[1.6] text-dark flex items-center bg-[#deddff] justify-center p-3 px-6">
                        Hi the day was really cool, hope u are fine!!
                    </span>
                    <span className="text-xs family1 text-dark">
                        {/* {createdAt} */} 24th sep 2024
                    </span>
                </div>
                <div className="w-12 h-12 rounded-full family1 flex items-center justify-center text-lg text-white bg-[#000]">
                    {/* {message?.sender?.username &&
                        message?.sender?.username[0]} */}
                    D
                </div>
                {/* <img src={message?.sender?.username} className='w-14 h-14 mb-8 rounded-full' alt="" /> */}
            </div>
        </div>
        {/* receiver message */}
        <div className="w-full flex items-center justify-start">
            <div className="flex w-full justify-start items-end gap-1">
                <div className="w-12 h-12 rounded-full family1 flex items-center justify-center text-lg text-[#000] bg-[#f3f3f1]">
                    {/* {message?.sender?.username &&
                        message?.sender?.username[0]} */}
                    A
                </div>

                <div className="flex-1 flex items-start flex-col justify-start gap-1">
                    <span className="max-w-[200px] lg:max-w-[400px] rounded-[30px] family1 text-white text-xs leading-[1.6] flex items-center bg-[#3e3aff] justify-center p-3 px-6">
                        {/* {message?.body} */} I believe your day went fine
                    </span>
                    <span className="text-xs family1 text-dark">
                        {/* {createdAt} */} 21st May 2024
                    </span>
                </div>
            </div>
        </div>

        <div className="w-full flex items-center justify-end">
            <div className="flex w-full justify-end items-end gap-1">
                <div className="flex-1 flex items-end flex-col justify-end gap-1">
                    <span className="max-w-[200px] lg:max-w-[400px] rounded-[40px] family1 text-sm leading-[1.6] text-dark flex items-center bg-[#deddff] justify-center p-3 px-6">
                        Hi the day was really cool, hope u are fine!!
                    </span>
                    <span className="text-xs family1 text-dark">
                        {/* {createdAt} */} 24th sep 2024
                    </span>
                </div>
                <div className="w-12 h-12 rounded-full family1 flex items-center justify-center text-lg text-white bg-[#000]">
                    {/* {message?.sender?.username &&
                        message?.sender?.username[0]} */}
                    D
                </div>
                {/* <img src={message?.sender?.username} className='w-14 h-14 mb-8 rounded-full' alt="" /> */}
            </div>
        </div>
        {/* receiver message */}
        <div className="w-full flex items-center justify-start">
            <div className="flex w-full justify-start items-end gap-1">
                <div className="w-12 h-12 rounded-full family1 flex items-center justify-center text-lg text-[#000] bg-[#f3f3f1]">
                    {/* {message?.sender?.username &&
                        message?.sender?.username[0]} */}
                    A
                </div>

                <div className="flex-1 flex items-start flex-col justify-start gap-1">
                    <span className="max-w-[200px] lg:max-w-[400px] rounded-[30px] family1 text-white text-xs leading-[1.6] flex items-center bg-[#3e3aff] justify-center p-3 px-6">
                        {/* {message?.body} */} I believe your day went fine
                    </span>
                    <span className="text-xs family1 text-dark">
                        {/* {createdAt} */} 21st May 2024
                    </span>
                </div>
            </div>
        </div>

        <div className="w-full flex items-center justify-end">
            <div className="flex w-full justify-end items-end gap-1">
                <div className="flex-1 flex items-end flex-col justify-end gap-1">
                    <span className="max-w-[200px] lg:max-w-[400px] rounded-[40px] family1 text-sm leading-[1.6] text-dark flex items-center bg-[#deddff] justify-center p-3 px-6">
                        Hi the day was really cool, hope u are fine!!
                    </span>
                    <span className="text-xs family1 text-dark">
                        {/* {createdAt} */} 24th sep 2024
                    </span>
                </div>
                <div className="w-12 h-12 rounded-full family1 flex items-center justify-center text-lg text-white bg-[#000]">
                    {/* {message?.sender?.username &&
                        message?.sender?.username[0]} */}
                    D
                </div>
                {/* <img src={message?.sender?.username} className='w-14 h-14 mb-8 rounded-full' alt="" /> */}
            </div>
        </div>
        {/* receiver message */}
        <div className="w-full flex items-center justify-start">
            <div className="flex w-full justify-start items-end gap-1">
                <div className="w-12 h-12 rounded-full family1 flex items-center justify-center text-lg text-[#000] bg-[#f3f3f1]">
                    {/* {message?.sender?.username &&
                        message?.sender?.username[0]} */}
                    A
                </div>

                <div className="flex-1 flex items-start flex-col justify-start gap-1">
                    <span className="max-w-[200px] lg:max-w-[400px] rounded-[30px] family1 text-white text-xs leading-[1.6] flex items-center bg-[#3e3aff] justify-center p-3 px-6">
                        {/* {message?.body} */} I believe your day went fine
                    </span>
                    <span className="text-xs family1 text-dark">
                        {/* {createdAt} */} 21st May 2024
                    </span>
                </div>
            </div>
        </div>

        <div className="w-full flex items-center justify-end">
            <div className="flex w-full justify-end items-end gap-1">
                <div className="flex-1 flex items-end flex-col justify-end gap-1">
                    <span className="max-w-[200px] lg:max-w-[400px] rounded-[40px] family1 text-sm leading-[1.6] text-dark flex items-center bg-[#deddff] justify-center p-3 px-6">
                        Hi the day was really cool, hope u are fine!!
                    </span>
                    <span className="text-xs family1 text-dark">
                        {/* {createdAt} */} 24th sep 2024
                    </span>
                </div>
                <div className="w-12 h-12 rounded-full family1 flex items-center justify-center text-lg text-white bg-[#000]">
                    {/* {message?.sender?.username &&
                        message?.sender?.username[0]} */}
                    D
                </div>
                {/* <img src={message?.sender?.username} className='w-14 h-14 mb-8 rounded-full' alt="" /> */}
            </div>
        </div>
        {/* receiver message */}
        <div className="w-full flex items-center justify-start">
            <div className="flex w-full justify-start items-end gap-1">
                <div className="w-12 h-12 rounded-full family1 flex items-center justify-center text-lg text-[#000] bg-[#f3f3f1]">
                    {/* {message?.sender?.username &&
                        message?.sender?.username[0]} */}
                    A
                </div>

                <div className="flex-1 flex items-start flex-col justify-start gap-1">
                    <span className="max-w-[200px] lg:max-w-[400px] rounded-[30px] family1 text-white text-xs leading-[1.6] flex items-center bg-[#3e3aff] justify-center p-3 px-6">
                        {/* {message?.body} */} I believe your day went fine
                    </span>
                    <span className="text-xs family1 text-dark">
                        {/* {createdAt} */} 21st May 2024
                    </span>
                </div>
            </div>
        </div>
    </div>
}

export default MessagesList;