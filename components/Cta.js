import React from "react";

const Cta = () => {
  return (
    <div className="container mx-auto py-30 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 py-10 lg:py-20 ">
        <div class="bg-[url('/assets/img1.png')] bg-no-repeat bg-right-top bg-cover ml-[80px] "></div>
        <div>
          <div class="card rounded-md overflow-hidden relative group w-[350px]">
            <img
              src="/assets/img2.png"
              alt="bg"
              class="h-[500px] transform transition duration-[1500ms] ease-in-out hover:scale-125  hover:brightness-50"
            />
            <div class="z-10 h-2/3 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent"></div>
            <div class="group-hover:bottom-0 transition-all absolute -bottom-10 left-0 text-white p-8 z-20 duration-[1500ms]">
              <h3 class="mb-20 text-[24px] font-['Muli-sans-serif'] font-light capitalize leading-[1.4em]">
                <a class="pb-7">
                  Sạc tại nhà giúp tiết kiện tài chính và linh hoạt thời gian
                  hơn so với sạc ngoài trạm
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-[300px] pt-36 ">
          <p className=" text-[30px] md:text-2xl lg:text-3xl font-muli text-[#0B1A4A] capitalize leading-[1.2em] font-bold">
            Nhận Thông Tin Của Chúng Tôi
          </p>
          <p className="text-base sm:text-lg lg:text-[15px] font-medium text-left">
            Đăng ký với chúng tối để nhận thông tin khuyến mãi hàng tháng. Cùng
            những cập nhật mới nhất về công nghệ sạc ô tô.
          </p>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 items-center mt-5">
            <input
              type="email"
              className="border border-black p-2 rounded-lg py-3 px-6"
              placeholder="Your email"
            />
            <button class="bg-[#00FFFF] hover:bg-[#0B1A4A] text-black hover:text-[#00FFFF] font-bold py-3 px-7  rounded transition duration-300 transform hover:scale-125 hover:filter hover:brightness-90">
              Gửi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
