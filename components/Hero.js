import React from "react";
import Navbar from "./Navbar/Navbar";

const Hero = () => {
  return (
    <div className="bg-[#0b1a4a] w-full px-6 lg:px-16 py-10">
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
        <img src="/assets/sac.png" alt="" className="w-[800px] h-[800px]" />
        <div className="flex flex-col gap-5 lg:gap-10 pl-[20px]">
          <p className=" text-[75px] text-white sm:text-4xl md:text-5xl lg:text-[85px] font-bold leading-[1.3rem]">
            Giải pháp <br className="lg:flex hidden" /> sạc xe điện{" "}
            <br className="lg:flex hidden" /> tối ưu
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-white">
            Bộ sạc ô tô điện treo tường Aurora Series (7.4kW; 11kW; 22kW) Chuyên
            nghiệp và tiện lợi – Sẽ giúp bạn tiết kiệm thời gian và tiền bạc.
          </p>
          <div className="flex flex-row gap-12 ">
            <div>
              <button className="btn btn-sm lg:btn-lg bg-[#00ffff] color-[#0b1a4a] rounded-full border-none w-[50px] lg:w-[250px] capitalize">
                Nhận báo giá ▶
              </button>
            </div>
            <div>
              <button className="text-white pt-[20px]">Tư vấn kỹ thuật ▶</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
