import { Text, Icon, useNavigate } from "zmp-ui";
import Illus from "@/image/Illus.png";
function INTRO_RENTACC() {
  return (
    <>
      
     <section className="flex flex-col ">
  <div className="flex  gap-5 justify-between self-center w-full max-md:max-w-full">
    <article className="flex flex-col max-md:max-w-full max-w-[730px]">
      <div className="text-xl font-semibold tracking-tighter  max-md:max-w-full  max-md:leading-[24px]">
        Dịch Vụ Thuê Tài Khoản
        <span className="text-[#CD2027]"> Google Ads</span>
      </div>
    </article>
    <img loading="lazy" src="https://adsdigi.com/wp-content/uploads/2024/12/Icon-button-1.png" alt="Google Ads Service Icon" className="object-contain shrink-0 self-start w-8 max-w-full aspect-square rounded-[200px]" />
  </div>
  <p className="mt-2 text-sm max-md:max-w-full">
     Thuê tài khoản Google Ads (VNĐ)  là giải giáp hữu hiệu để chiến dịch quảng cáo của bạn nhân rộng mức độ hiệu quả.
  </p>
  <img loading="lazy" src={Illus} alt="Google Ads Campaign Dashboard" className="object-contain mt-2 w-full aspect-[3.03] max-md:max-w-full" />
</section>
    </>
  );
}

export default INTRO_RENTACC;
