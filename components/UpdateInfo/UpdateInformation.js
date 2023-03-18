import React from "react";
import style from "./UpdateInformation.module.css";
const UpdateInformation = () => {
  return (
    <div className={style}>
      <div className={style.waweTop}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230">
          <path
            fill="#0B1A4A"
            fill-opacity="1"
            d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,186.7C840,203,960,213,1080,208C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className={style.infoTitle}>
        <div className="container mx-auto flex justify-around">
          <div className="w-[80%]  flex flex-col  lg:flex-row justify-around lg:justify-between items-center gap-5 p-10 ">
            <div className="flex flex-col gap-5 items-start lg:w-[40%] sm:w-[80%]">
              <div className="box"></div>
              <h className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                Thông Tin Cập Nhật
              </h>
              <p className=" text-base text-sm">
                Nếu bạn đang sở hữu một chiếc xe điện và muốn tận dụng tối đa
                tiện ích của nó, bộ sạc xe ô tô điện của chúng tôi là sự lựa
                chọn tuyệt vời. Hãy tham gia với chúng tôi ngay hôm nay
              </p>
              <button className={style.buttonInfo}>
                Tham gia cộng đồng <i class="fa-solid fa-caret-right"></i>
              </button>
            </div>
            <div className="justify-center lg:w-[40%]">
              <img
                src="https://phukienotodien.com.vn/wp-content/uploads/2023/02/f4dfacd5cacb440ea92378dbe4c21d7f3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.rotateYWawe}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230">
          <path
            fill="#0B1A4A"
            fill-opacity="1"
            d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,186.7C840,203,960,213,1080,208C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default UpdateInformation;
