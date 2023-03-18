import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-[#0B1A4A] h-[80px] w-full lg:flex hidden md:block md:text-center justify-around items-center fixed pl-20 pr-20 z-10 top-0 border-b border-gray-300">
      <div className="w-[100%] lg:text-left md:text-center">
        <span className=" text-[#FFF] text-[15px] font-Muli text-left hover:text-[#00FFFF]">
          Hotline: 0931 848 775
        </span>{"   "}
        <span className=" text-[#9599a6]"> | </span>
        <span className=" text-[#FFF] text-[15px] font-Muli text-left hover:text-[#00FFFF]">
          phukienotodien68@gmail.com
        </span>
      </div>
      <div className="w-[100%] font-Muli lg:justify-end md:justify-center flex text-[#9FA6C0] md:pt-5 lg:pt-0">
        <div class="flex-initial w-32 hover:text-[#FFFF]" >
          <a className="text-[14px]" href="https://www.facebook.com/groups/532055499048261">FACEBOOK</a>
        </div>
        <div class="flex-initial w-32 hover:text-[#FFFF]">
          <a className="text-[14px] " href="">TWITTER</a>
        </div>
        <div class="flex-initial w-32 hover:text-[#FFFF]">
          <a className="text-[14px] " href="">PINTEREST</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar