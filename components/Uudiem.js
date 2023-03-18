import React from "react";
import { FaChargingStation, FaConnectdevelop, FaProjectDiagram, FaShieldAlt } from "react-icons/fa";
const Uudiem = () => {
  return (
    <div className="container mx-auto py-20 bg-[#eef0f6] text-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20 bg-[#eef0f6] text-black">
        <div className="flex flex-col gap-5 items-center text-black">
          <p className="text-2xl font-semibold text-black text-center"><FaChargingStation/></p>
          <p className="text-2xl font-semibold text-black">THIẾT KẾ</p>
          <p className="text-black text-center">
            Với bề mặt cong, đèn LED tính hiệu tam giác bo tròn; được đánh giá
            là rất hiện đại và sang trọng, thích hợp để lắp đặt tại nhà hoặc các
            khu vực công cộng.
          </p>
          <p className="text-2xl font-semibold text-black text-center"><FaProjectDiagram/></p>
          <p className="text-2xl font-semibold">ĐỘ TIN CẬY CAO</p>
          <p className="text-black text-center">
            Thương hiệu đang được VinFast sử dụng cho lắp các trạm sạc ngoài
            trời, được sản xuất với chất lượng cao và độ tin cậy tuyệt đối, giúp
            người dùng yên tâm sử dụng trong thời gian dài mà không gặp phải các
            sự cố về sạc hoặc an toàn.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/changing.png" alt="v1" className="w-[333px] h-[333px]" />
          <button className=" bg-[#00ffff] h-[44px] w-[230px] rounded-[20px] ">
            Mua Ngay: <a href={`tel:0931848775`}>0931.848.775</a>
          </button>
        </div>{" "}
        <div className="flex flex-col gap-5 items-center">
          <p className="text-2xl font-semibold text-black text-center"><FaConnectdevelop/></p>
          <p className="text-2xl font-semibold">KẾT NỐI</p>
          <p className="text-black text-center">
            Hỗ trợ 4G, WIFI, Ethernet, RS485. Tuân thủ giao thức OCPP 1.6J
            (EVSE&Backend) và giao thức ISO15118(EVSE&EV).
          </p>
          <p className="text-2xl font-semibold text-black text-center"><FaShieldAlt/></p>
          <p className="text-2xl font-semibold text-center">HỆ THỐNG BẢO VỆ - AN TOÀN</p>
          <p className="text-black text-center">
            Với nhiều biện pháp bảo vệ điện và mức bảo vệ vượt trội lên tới IP55
            & IK10. Được trang bị đầy đủ các tính năng tiện ích như cổng kết nối
            thông minh với ứng dụng điện thoại di động, chức năng ngắt tự động
            khi sạc đầy và chống chập điện
          </p>
        </div>
      </div>
    </div>
  );
};

export default Uudiem;
