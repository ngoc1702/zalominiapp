import { Text, Icon, useNavigate } from "zmp-ui";
import IMAGE_1 from "@/image/image.png";
function TABLE_GG_ADS() {
  return (
    <>
      <div>
        <img
          loading="lazy"
          src="https://adsdigi.com/wp-content/uploads/2024/12/Icon-button.png"
          className="flex object-contain shrink-0 w-[28px] aspect-square rounded-[200px] mb-2"
        />
        <div className="flex  gap-10 justify-between items-start self-center max-w-full">
          <div className="flex flex-col min-w-[240px] max-md:max-w-full">
            <div className="text-xl  font-medium tracking-tighter max-md:max-w-full max-md:leading-[24px] text-[#141718]">
              <span className="font-semibold">
                Gói Dịch Vụ Chạy Quảng Cáo Google Ads
              </span>{" "}
              <span className="font-semibold text-[#CD2027]">Adsdigi</span>{" "}
              <span className="font-semibold text-[#3e795c]">(VNĐ)</span>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://adsdigi.com/wp-content/uploads/2024/12/Icon-button.png"
            className="hidden md:flex object-contain shrink-0 w-[48px] md:w-[69px] aspect-square rounded-[200px]"
          />
        </div>
      </div>

      <div className="mx-1 flex flex-col flex-1 shrink justify-start min-w-[240px]  shadow-[0px_4px_10px_rgba(0,0,0,0.6)] p-8  bg-white rounded-[20px]">
        <button
          className="flex mx-auto text-sm font-medium text-white py-2 px-6 rounded-[50px] focus:outline-none border-0"
          style={{ background: "linear-gradient(to right, #00868B, #00CDCD)" }}
        >
          GÓI SETUP
        </button>
        <p className="mt-2 text-[#CE2127] max-md:text-lg font-semibold text-center  mx-auto">
          1.500.000Đ
        </p>
        <ul className="mt-2 text-sm ">
          <li className="li">5 loại chiến dịch tùy chọn</li>
          <li className="li">1 Chiến dịch remarketing</li>
          <li className="li">Setup chuẩn Google ads</li>
          <li className="li">
            Cài đặt chuyển đổi cơ bản <span />
          </li>
          <li className="li">Bàn giao tài khoản</li>
          <li className="li">Hướng dẫn sử dụng</li>
        </ul>
      </div>

      <div className="mx-1 flex flex-col flex-1 shrink justify-start min-w-[240px]  shadow-[0px_4px_10px_rgba(0,0,0,0.6)] p-8  bg-white rounded-[20px]">
        <button className="flex mx-auto text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-500 py-2 px-6 hover:from-red-400 hover:to-orange-400 rounded-[50px] focus:outline-none border-0">
          GÓI CARE
        </button>
        <p className="mt-2 text-[#CE2127] max-md:text-lg font-semibold text-center  mx-auto">
          2.000.000đ
        </p>
        <ul className="mt-2 text-sm ">
          <div>
            <li className="li">Dành cho ngân sách vừa và nhỏ dưới 30 triệu</li>
            <li className="li">
              {" "}
              Giảm <span className="text-red-600">50%</span> phí Setup
            </li>
            <li className="li">Setup chuẩn Google ads</li>
            <li className="li">Cài đặt chuyển đổi cơ bản</li>
            <li className="li">
              Tối ưu chiến dịch - phủ định từ khóa hàng ngày
            </li>
            <li className="li">Báo cáo kết quả định kỳ</li>
          </div>
        </ul>
      </div>

       <div className="mx-1 flex flex-col flex-1 shrink justify-start min-w-[240px]  shadow-[0px_4px_10px_rgba(0,0,0,0.6)] p-8  bg-white rounded-[20px]">
 <button className="flex mx-auto text-sm font-medium text-white py-2 px-6 rounded-[50px] focus:outline-none border-0" style={{background: 'linear-gradient(to right, #CD5555, #FF6A6A)'}}>
  GÓI SPECIAL
</button>

  <p className="mt-2 text-[#CE2127] max-md:text-lg text-center font-semibold mx-auto">7-3% Chi phí</p>
  <ul className="mt-2 text-sm ">
   <div>
  <li className="li">Dành cho ngân sách lớn chi tiêu
    trên 30 triệu</li>
  <li className="li">Miễn phí setup</li>
  <li className="li">Setup chuẩn Google ads</li>
  <li className="li">Cài đặt chuyển đổi nâng cao <span /></li>
  <li className="li">Tối ưu chiến dịch - phủ định từ
    khóa hàng ngày</li>
  <li className="li">Báo cáo kết quả định kỳ</li>
  <li className="li">Ưu đãi cụ thể tại bảng giá chi tiết</li>
</div>

  </ul>
</div>
    </>
  );
}

export default TABLE_GG_ADS;
