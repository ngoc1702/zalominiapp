import { Text, Icon, useNavigate } from "zmp-ui";
import Illus2 from "@/image/Illus-2.png";
function INTRO_WEBSITE() {
  return (
    <>
      
     <section className="flex flex-col ">
  <div className="flex  gap-5 justify-between self-center w-full max-md:max-w-full">
    <article className="flex flex-col max-md:max-w-full max-w-[730px]">
      <div className="text-xl font-semibold tracking-tighter  max-md:max-w-full  max-md:leading-[24px]">
        Dịch Vụ Thiết Kế
        <span className="text-[#CD2027]"> Website </span>
      </div>
    </article>
    <img loading="lazy" src="https://adsdigi.com/wp-content/uploads/2024/12/Icon-button-1.png" alt="Google Ads Service Icon" className="object-contain shrink-0 self-start w-8 max-w-full aspect-square rounded-[200px]" />
  </div>
  <p className="mt-2 text-sm max-md:max-w-full">
      Công cụ quan trọng giúp doanh nghiệp xây dựng thương hiệu và thu hút khách hàng. 
Đặc biệt đối với quảng cáo, website là nơi chuyển đổi khách truy cập thành khách hàng thực sự.
  </p>
  <img loading="lazy" src={Illus2} alt="Google Ads Campaign Dashboard" className="object-contain mt-2 w-full aspect-[3.03] max-md:max-w-full" />
</section>
    </>
  );
}

export default INTRO_WEBSITE;
