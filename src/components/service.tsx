import { Text, Button, Icon, useNavigate } from "zmp-ui";
import SERVICE_1 from "@/image/content-marketing-1.png";
import SERVICE_2 from "@/image/account-management-1.png";
import SERVICE_3 from "@/image/development-1.png";
function SERVICE() {
    const navigate = useNavigate();
  return (
    <>
      <Text.Title>
        Dịch vụ của <span className="text-[#CE2127]">ADSDIGI</span>
      </Text.Title>

      <div className="border border-gray-200 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full">
            <img src={SERVICE_1} alt="image" className="w-full" />
          </div>
          <button  onClick={() => navigate("/google_ads")}  className="text-white bg-[#CE2127] border-0 py-2 px-5 rounded-full">
            Khám phá
          </button>
        </div>

        <p className="text-base text-gray-900 font-medium title-font mb-2">
          Dịch vụ thuê chạy quảng cáo
        </p>
        <p className="leading-relaxed text-sm">
          Hướng đúng đối tượng mục tiêu, đo lường hiệu quả chi tiết từng chiến
          dịch quảng cáo một cách chi tiết. Tăng cường độ nhận diện thương hiệu
          đối với khách hàn.
        </p>
      </div>

      <div className="border border-gray-200 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full">
            <img src={SERVICE_2} alt="image" className="w-full" />
          </div>
          <button  onClick={() => navigate("/rent_account")} className="text-white bg-[#CE2127] border-0 py-2 px-5 rounded-full">
            Khám phá
          </button>
        </div>
        <p className="text-base text-gray-900 font-medium title-font mb-2">
          Dịch vụ thuê tài khoản Invoice
        </p>
        <p className="leading-relaxed text-sm">
          Nhận tất cả các sản phẩm sạch, vpcs nhẹ. Phí dịch vụ chỉ từ 1%. Đối
          tác trực tiếp. Hệ thống nạp tiền chủ động. Hỗ trợ khách hàng 24/7.
        </p>
      </div>

      <div className="border border-gray-200 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full">
            <img src={SERVICE_3} alt="image" className="w-full" />
          </div>
          <button onClick={() => navigate("/design_website")} className="text-white bg-[#CE2127] border-0 py-2 px-5 rounded-full">
            Khám phá
          </button>
        </div>
        <p className="text-base text-gray-900 font-medium title-font mb-2">
          Dịch vụ làm Website
        </p>
        <p className="leading-relaxed text-sm">
          Website được thiết kế riêng biệt cho từng chiến dịch marketing của
          khách hàng. Giúp tăng trải nghiệm người dùng và làm tăng độ tin cậy
          với khách hàng.
        </p>
      </div>
    </>
  );
}

export default SERVICE;
