import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCircleCheck, faCarBattery, faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';

const LuuY = () => {
  return (
    <div className="bg-[#0B1A4A] text-white " >
      <div className="container mr-auto ml-auto items-center relative lg:max-w-[1340px] lg:min-h-[800px] " >
        {/* <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
        Top Studying
      </p> */}
        <div className="flex flex-col lg:flex-row justify-evenly  lg:justify-between items-left gap-5 py-5  ">

          <div className="flex flex-col lg:flex-col justify-evenly  gap-5 py-5 ">
            <p className="text-3xl lg:text-3xl font-medium capitalize lg:pl-[20px] text-center lg:text-left">
              Lưu Ý Quan Trọng Khi Sử Dụng Bộ Sạc Xe Ô Tô Điện Tại Nhà
            </p>
            <div className="grid lg:gap-4 lg:grid-cols-2 lg:grid-rows-2 md:gap-4 md:grid-cols-2 md:grid-rows-2 lg:text-left md:text-center text-center lg:pr-[30px]">
              <div className="flex flex-col ">
                <div className="lg:text-left text-5xl text-[#00ffff] py-3 text-center md:text-center DEFAULT:text-center">
                  <FontAwesomeIcon icon={faLightbulb} />
                </div>

                <span className="text-xl md:text-3xl lg:text-2xl py-3 font-medium" >Nguồn Điện</span>

                <p className="text-base md:text-xl lg:text-base">
                  Đảm bảo nguồn điện đủ mạnh: Bộ sạc xe ô tô điện công suất 22 kW yêu cầu nguồn điện đủ mạnh để hoạt động, vì vậy bạn nên kiểm tra hệ thống điện nhà bạn trước khi sử dụng bộ sạc này.
                </p>
              </div>
              <div className="flex flex-col ">
                <div className="lg:text-left text-5xl text-[#00ffff] py-3 md:text-center">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <span className="text-xl md:text-3xl lg:text-2xl py-3 font-medium">Lắp Đặt Đúng Cách</span>

                <p className=" text-base  md:text-xl lg:text-base">
                  Để đảm bảo an toàn và hiệu quả sử dụng, bạn nên lắp đặt bộ sạc xe ô tô điện đúng cách. Hãy đọc kỹ hướng dẫn lắp đặt trước khi sử dụng. Hoặc liên lạc kỹ thuật của chúng tôi.
                </p>
              </div>
              <div className="flex flex-col ">
                <div className="lg:text-left text-5xl text-[#00ffff] py-3 md:text-center ">
                  <FontAwesomeIcon icon={faCarBattery} />
                </div>
                <span className="text-xl md:text-3xl lg:text-2xl py-3 font-medium">An Toàn Pin</span>

                <p className=" text-base md:text-xl lg:text-base">
                  Sạc đầy pin một cách an toàn: Khi sạc pin, bạn nên theo dõi quá trình này và đảm bảo rằng sạc được thực hiện một cách an toàn và đầy đủ. Việc sạc quá lâu hoặc không đầy đủ có thể làm giảm tuổi thọ của pin và làm giảm hiệu quả sử dụng của xe ô tô điện.
                </p>
              </div>
              <div className="flex flex-col ">
                <div className="lg:text-left text-5xl text-[#00ffff] py-3 md:text-center">
                  <FontAwesomeIcon icon={faHandHoldingMedical} />

                </div>
                <span className="text-xl md:text-3xl lg:text-2xl py-3 font-medium">Bảo Dưỡng</span>

                <p className=" text-base md:text-xl lg:text-base">
                  Bảo dưỡng thường xuyên: Để đảm bảo sử dụng bộ sạc xe ô tô điện trong thời gian dài và hiệu quả, bạn nên bảo dưỡng thường xuyên bằng cách vệ sinh và kiểm tra trạng thái của bộ sạc và các phụ kiện đi kèm.
                </p>
              </div>
            </div>

          </div>

          <div className="mb-9 lg:pl-[30px] ">
            <img src="https://phukienotodien.com.vn/wp-content/uploads/2023/02/cd7e311c406b45fbad55f1fb8b581545%E8%AF%A6%E6%83%85%E5%9B%BE2.png" alt="" height={"650px"} className="lg:min-h-[650px] lg:max-h-[650px] lg:min-w-[400px] lg:max-w-[400px] md:mx-auto " />
          </div>




        </div>
      </div>
    </div>
  );
};

export default LuuY;
