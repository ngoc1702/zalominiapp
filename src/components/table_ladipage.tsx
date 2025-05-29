import { Text, Icon, useNavigate } from "zmp-ui";
import IMAGE_1 from "@/image/image.png";
function TABLE_LADIPAGE() {
  return (
    <>
      <div className="">
        <img
          loading="lazy"
          src="https://adsdigi.com/wp-content/uploads/2024/12/Icon-button.png"
          className="flex object-contain shrink-0 w-[28px] aspect-square rounded-[200px] mb-2"
        />
        <div className="flex  gap-10 justify-between items-start self-center max-w-full">
          <div className="flex flex-col min-w-[240px] max-md:max-w-full">
            <div className="text-xl  font-medium tracking-tighter max-md:max-w-full max-md:leading-[24px] text-[#141718]">
              <span className="font-semibold">Bảng Giá Dịch Vụ Thiết Kế</span>
              <span className="font-semibold text-[#CD2027]">Ladipage</span>
              {/* <span className="font-semibold text-[#3e795c]">(VNĐ)</span> */}
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
        <button className="flex mx-auto text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-500 py-2 px-6 hover:from-red-400 hover:to-orange-400 rounded-[50px] focus:outline-none border-0">
          BASIC
        </button>
        <p className="mt-2 text-[#CE2127] max-md:text-lg font-semibold text-center  mx-auto">
          1.500.000đ
        </p>
        <p className="mt-2 text-sm  text-center font-semibold">
          Thiết kế website cơ bản theo mẫu có sẵn
        </p> 
        <ul className="mt-2 text-sm ">
          <div>
            <li className="li">Miễn phí hosting năm đầu</li>
            <li className="li">Băng thông không giới hạn</li>

            <li className="li">Giao diện chuẩn UX/UI</li>
            <li className="li">Tối ưu giao diện máy tính</li>
            <li className="li">Tối ưu giao diện điện thoại</li>
            <li className="li">
              Bảo hành miễn phí
              <span className="text-[#CE2127] font-bold">1</span> năm
            </li>
          </div>
        </ul>
      </div>

      <div className="mx-1 flex flex-col flex-1 shrink justify-start min-w-[240px]  shadow-[0px_4px_10px_rgba(0,0,0,0.6)] p-8  bg-white rounded-[20px]">
        <button className="flex mx-auto text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-500 py-2 px-6 hover:from-red-400 hover:to-orange-400 rounded-[50px] focus:outline-none border-0">
          MEDIUM
        </button>
        <p className="mt-2 text-[#CE2127] max-md:text-lg font-semibold text-center  mx-auto">
          2.500.000đ
        </p>
        <p className="mt-2 text-sm  text-center font-semibold">
          Thiết kế website nâng cao theo mẫu có sẵn
        </p>
        <ul className="mt-2 text-sm ">
          <div>
            <li className="li">
              Miễn phí tên miền
              <span className="text-red-600 font-bold">.com</span> năm đầu
            </li>

            <li className="li">Băng thông không giới hạn</li>

            <li className="li">Giao diện chuẩn UX/UI</li>
            <li className="li">Tối ưu giao diện máy tính</li>
            <li className="li">Tối ưu giao diện điện thoại</li>
            <li className="li">Hỗ trợ thiết kế logo, banner</li>
            <li className="li">
              Bảo hành miễn phí
              <span className="text-[#CE2127] font-bold">1</span> năm
            </li>
          </div>
        </ul>
      </div>

      <div className="mx-1 flex flex-col flex-1 shrink justify-start min-w-[240px]  shadow-[0px_4px_10px_rgba(0,0,0,0.6)] p-8  bg-white rounded-[20px]">
        <button className="flex mx-auto text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-500 py-2 px-6 hover:from-red-400 hover:to-orange-400 rounded-[50px] focus:outline-none border-0">
          PREMIUM
        </button>
        <p className="mt-2 text-[#CE2127] max-md:text-lg font-semibold text-center  mx-auto">
          3.500.000đ
        </p>
        <p className="mt-2 text-sm  text-center font-semibold">
          Thiết kế website theo yêu cầu
        </p>
        <ul className="mt-2 text-sm ">
          <div>
            <li className="li">
              Miễn phí tên miền
              <span className="text-red-600 font-bold">.com</span> năm đầu
            </li>
            <li className="li">Băng thông không giới hạn</li>

            <li className="li">Giao diện chuẩn UX/UI</li>
            <li className="li">Tối ưu giao diện máy tính</li>
            <li className="li">Tối ưu giao diện điện thoại</li>
            <li className="li">Hỗ trợ thiết kế logo, banner</li>
            <li className="li">
              Hỗ trợ setup <span className="text-[#CE2127] font-bold">1</span>{" "}
              chiến dịch Google Ads
            </li>
            <li className="li">
              Bảo hành miễn phí{" "}
              <span className="text-[#CE2127] font-bold">1</span> năm
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default TABLE_LADIPAGE;
