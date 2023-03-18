import React from "react";

const Cta = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 lg:py-20  ">
        {/* <div className="lg:w-[90%] w-[100%] mx-auto lg:mr-auto">
          <div class="bg-[url('/assets/img1.png')] h-[500px] bg-cover bg-right"></div>
        </div> */}
        <div>
          <div className="card rounded-md overflow-hidden relative group  md:mx-auto lg:mr-auto mx-auto">
            <div className=" transform transition duration-[1500ms] ease-in-out hover:scale-125  hover:brightness-50">
              <div className="z-10 h-full absolute bottom-0 left-0 w-full bg-gray-900 opacity-30 to-transparent"></div>
              <div className="bg-[url('/assets/img1.png')] h-[500px] bg-cover bg-right  "></div>

              {/* <img src="/assets/img2.png" alt="bg" class="h-[500px] " /> */}
            </div>
            <div className="group-hover:bottom-5 transition-all absolute -bottom-10 left-0 text-white p-10 z-40 duration-[1500ms]">
              <h3 className="mb-20 text-[24px] font-['Muli-sans-serif'] font-light capitalize leading-[1.4em]">
                <a >
                  {/* Sạc tại nhà giúp tiết kiện tài chính và linh hoạt thời gian
                  hơn so với sạc ngoài trạm */}
                </a>
              </h3>
            </div>
          </div>
        </div>

        <div>
          <div className="card rounded-md overflow-hidden relative group md:mx-auto lg:mr-auto mx-auto">
            <div className=" transform transition duration-[1500ms] ease-in-out hover:scale-125  hover:brightness-50">
              <div className="z-10 h-full absolute bottom-0 left-0 w-full bg-gray-900 opacity-30 to-transparent"></div>
              <div className="bg-[url('/assets/img2.png')] h-[500px] bg-cover bg-center  "></div>

              {/* <img src="/assets/img2.png" alt="bg" class="h-[500px] " /> */}
            </div>
            <div className="group-hover:bottom-5 transition-all absolute -bottom-10 left-0 text-white p-10 z-40 duration-[1500ms]">
              <h3 className="mb-20 text-[24px] font-['Muli-sans-serif'] font-light capitalize leading-[1.4em]">
                <a >
                  Sạc tại nhà giúp tiết kiện tài chính và linh hoạt thời gian
                  hơn so với sạc ngoài trạm
                </a>
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:w-[100%] pt-28 md:mx-auto  mx-auto lg:pl-[40px]">
          <h3 className=" md:text-[30px] lg:text-[35px] text-[22px]  text-[#0B1A4A] capitalize leading-[1.2em] font-medium font-b lg:text-left md:text-center text-center">
            Nhận Thông Tin Của Chúng Tôi
          </h3>
          <p className="sm:text-lg lg:text-[15px] font-medium  lg:text-left md:text-center text-[#0B1A4A]  text-center">
            Đăng ký với chúng tối để nhận thông tin khuyến mãi hàng tháng. Cùng
            những cập nhật mới nhất về công nghệ sạc ô tô.
          </p>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 items-center mt-5 pb-[20px]">
            <input
              type="email"
              className="border border-black p-2 rounded-lg lg:w-[500px] lg:h-[50px] md:w-[100%] w-[100%]"
              placeholder="Your email"
            />
            <button className="bg-[#00FFFF] hover:bg-[#0B1A4A] text-black hover:text-[#00FFFF] font-bold py-2 px-6  rounded transition duration-300 transform hover:scale-125 hover:filter hover:brightness-90 md:w-[100%] lg:w-[100px] w-[100%]">
              Gửi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
