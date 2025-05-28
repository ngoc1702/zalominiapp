import { Text, Icon, useNavigate } from "zmp-ui";
import IMAGE_1 from "@/image/image.png";
function TABLE_RENTACC() {
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
                Bảng Giá Dịch Vụ Thuê Tài Khoản
              </span>{" "}
              <span className="font-semibold text-[#CD2027]">Google Ads</span>{" "}
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

      <div className="text-sm font-normal">
        <span className="text-red-600 font-semibold">
          Tài khoản quảng cáo Google VNĐ
        </span>
        <span>
          <strong> đối tác uy tín của Google</strong>
        </span>{" "}
        có xác minh nhà quảng cáo đầy đủ.
        <br />
        Phù hợp với mọi ngành hàng. Dịch vụ minh bạch, rõ ràng. <br />
      </div>

      <section className="flex justify-between flex-col w-full rounded-xl max-md:mt-1 max-md:max-w-full">
        <div className="">
          <div className=" text-sm font-normal">
            Nói
            <span className="italic font-semibold text-red-600"> “Không”</span>{" "}
            với ngành vi phạm pháp luật.
          </div>
          <ul className=" text-sm font-normal">
            <li className="li">Free phí mở tài khoản đầu tiên</li>
            <li className="li">Hỗ trợ vấn đề tài khoản tạm ngưng</li>
            <li className="li">Xuất hóa đơn đầy đủ</li>
          </ul>
        </div>
        <div className="rounded-[60px] shadow-[2px_4px_10px_rgba(0,0,0,0.2)] pb-12 mb-2 mx-2 bg-white mt-4">
          <table className="w-full border-collapse text-center items-center text-sm">
            <thead className="text-center ">
              <tr className="flex  text-center items-center w-full font-semibold text-neutral-900 max-md:max-w-full">
                <th
                  scope="col"
                  className="flex-1 shrink text-center  py-4 border-r border-b border-neutral-900 w-[40%]  max-md:px-5 max-md:max-w-full text-red-600 font-black"
                >
                  MỐC PHÍ
                </th>
                <th
                  scope="col"
                  className=" py-4 border-b border-neutral-900  w-[60%] max-md:px-5 max-md:max-w-full text-red-600 font-black"
                >
                  NGÂN SÁCH
                </th>
              </tr>
            </thead>
            <tbody className="text-center bg-white">
              <tr className="flex flex-wrap items-center w-full bg-[#EEE9E9] max-md:max-w-full ">
                <td className="flex-1 shrink py-4 font-semibold border-r border-b border-neutral-900  text-neutral-900 max-md:px-5 max-md:max-w-full text-center w-[40%]">
                  5% :
                </td>
                <td className="py-4 font-bold  border-b border-neutral-900 max-md:px-5 max-md:max-w-full  w-[60%]">
                  Dưới 100 triệu
                </td>
              </tr>
              <tr className="flex flex-wrap items-center w-full max-md:max-w-full bg-white">
                <td className="flex-1 shrink py-4 font-semibold border-r border-b border-neutral-900  text-neutral-900 max-md:px-5 max-md:max-w-full text-center w-[40%]">
                  4% :
                </td>
                <td className="py-4 font-bold  border-b border-neutral-900 max-md:px-5 max-md:max-w-full  w-[60%]">
                  Từ 100 triệu - 500 triệu
                </td>
              </tr>
              <tr className="flex flex-wrap items-center w-full  bg-[#EEE9E9] max-md:max-w-full">
                <td className="flex-1 shrink  py-4 font-semibold border-r border-b border-neutral-900  text-neutral-900 max-md:px-5 max-md:max-w-full text-center w-[40%]">
                  3% :
                </td>
                <td className=" py-4 font-bold  border-b border-neutral-900 w-[60%] max-md:px-5 max-md:max-w-full ">
                  Từ 500 triệu - 1 tỷ
                </td>
              </tr>
              <tr className="flex flex-wrap items-center w-full max-md:max-w-full bg-white">
                <td className="flex-1 shrink py-4 font-semibold border-r border-b border-neutral-900 text-neutral-900 max-md:px-5 max-md:max-w-full text-center w-[40%]">
                  2% :
                </td>
                <td className="py-4 font-bold  border-b border-neutral-900 w-[60%] max-md:px-5 max-md:max-w-full ">
                  Trên 1 tỷ
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default TABLE_RENTACC;
