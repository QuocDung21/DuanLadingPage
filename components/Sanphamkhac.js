import React from "react";

const Sanphamkhac = () => {
  return (
    <div className="container mx-auto">
      <p className="text-black text-3xl lg:text-5xl font-medium text-center pt-5 font-bold">
        Sản phẩm khác
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-0.5 py-20  ">
        <div className="flex flex-col justify-center lg:justify-between items-center gap-5 py-10 lg:py-20 bg-[#0b1a4a] rounded-[20px]">
          <p className="text-[#00ffff] text-3xl lg:text-5xl font-medium text-center pt-5 font-bold mb-12">Sạc EverEV Di Động 7 KW</p>
          <img src="/assets/Portable.png" className="p-3" />
          <ul className="text-white list-disc pl-5">
            <li>Dòng sạc di động gọn, nhẹ.</li>
            <li>Sạc nhanh và an toàn.</li>
            <li>Kiểu dáng công nghiệp hiện đại với giao diện LCD cao cấp.</li>
            <li>Kết nối dễ dàng với giao thức OCPP 1.6J.</li>
            <li>Sạc tự động, quẹt thẻ, đặt giờ, thông qua phần mềm.</li>
          </ul>
          <button className=" bg-[#00ffff] h-[44px] w-[230px] rounded-[20px] ">
           Thông tin
          </button>
        </div>
        <div className="flex flex-col justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20 bg-[#0b1a4a] rounded-[20px]">
        <p className="text-[#00ffff] text-3xl lg:text-5xl font-medium text-center pt-5 font-bold">Sạc EverEV Treo Tường Cố Định (7kW; 11kW; 22kW)</p>
          <img src="/assets/wallbox.png"  className="p-3"  />
          <ul className="text-white list-disc pl-5">
            <li>Dòng sạc di động gọn, nhẹ.</li>
            <li>Sạc nhanh và an toàn.</li>
            <li>Kiểu dáng công nghiệp hiện đại với giao diện LCD cao cấp.</li>
            <li>Kết nối dễ dàng với giao thức OCPP 1.6J.</li>
            <li>Sạc tự động, quẹt thẻ, đặt giờ, thông qua phần mềm.</li>
          </ul>
          <button className=" bg-[#00ffff] h-[44px] w-[230px] rounded-[20px] ">
            Thông tin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sanphamkhac;
