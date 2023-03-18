import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-[#0B1A4A] h-[160px] w-full flex md:flex-row flex-col justify-around items-center pl-20 pr-20">
        <div className="w-[100%]">
          <a href="">
            <img className="h-[30px] w-[30px]" src="https://phukienotodien.com.vn/wp-content/uploads/2023/02/phukienotodien-scaled.jpg" />
          </a>
        </div>
        <div className="w-[100%] lg:text-left text-[15px] text-center md:text-center">
          <p className="text-[#FFF] ">Lắp đặt ngay bộ sạc ô tô điện tại nhà với chức năng sạc nhanh, thao tác đơn giản, an toàn và tiện lợi nhất</p>
        </div>
      </div>
      <div className="bg-[#0B1A4A] h-[80px] w-full flex md:flex-row flex-col justify-around items-center p-10 border-t">
        <div className="w-[100%] lg:text-left text-center md:text-center">
          <span className=" text-[#FFF] text-[15px] font-Muli  hover:text-[#00FFFF]">
            Hotline: 0931.848.775 (Mr.Dũng)
          </span>{"   "}
          <span className=" text-[#9599a6]"> | </span>
          <span className=" text-[#FFF] text-[15px] font-Muli text-left hover:text-[#00FFFF]">
            phukienotodien68@gmail.com
          </span>
        </div>
        <div className="w-[100%] font-Muli lg:text-right text-center md:text-center">
          <span className=" text-[#FFF] text-[15px]">
            Bản Quyền Thuộc Về Phukienotodien.Com.Vn
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
