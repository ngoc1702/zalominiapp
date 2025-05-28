import { Text, Icon, useNavigate } from "zmp-ui";
import IMAGE_1 from "@/image/image.png";
function INTRO() {
  return (
    <>
      <Text.Title>
        Giới thiệu <span className="text-[#CE2127]">ADSDIGI</span>
      </Text.Title>
      <Text size="small" className="text-justify" style={{marginTop:'12px'}} >
        <strong>ADSDIGI</strong> là một trong những đơn vị uy tín tại Việt Nam trong lĩnh vực
        Marketing Online. Chúng tôi cam kết mang đến sự hợp tác bền vững dựa
        trên nguyên tắc cùng nhau đột phá <span className="italic">"Breakthrough together"</span>, nơi cả hai
        bên đều đạt được mục tiêu chung.
      </Text>

   <img
          src={IMAGE_1}
          alt="image"
          className="h-[300px] mb-3 rounded"
        />
              <Text size="small" className="text-justify" >
         Với sự am hiểu sâu sắc về thị trường và
        chiến lược quảng cáo tối ưu, Adsdigi không chỉ giúp khách hàng gia tăng
        doanh thu, mà còn xây dựng thương hiệu mạnh mẽ trong tâm trí người tiêu
        dùng.
      </Text>
    </>
  );
}

export default INTRO;
