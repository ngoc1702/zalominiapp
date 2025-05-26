import { useEffect, useState } from "react";
import { Avatar, Page, Text, Button, Icon } from "zmp-ui";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import zmp from "zmp-sdk";
import LOGO from "@/image/cropped-logo-tron-ADSDIGI.png";
import QR_CODE from "@/image/download.png";
import BG_LABEl from "@/image/bg_label.png";

interface UserProfile {
  id: string;
  name: string;
  phone:string;
  avatar: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [showSharePopup, setShowSharePopup] = useState(false);


  useEffect(() => {
    async function loadUser() {
      const zalo = (window as any).ZaloMiniApp;

      if (!zalo) {
        console.warn(
          "ZaloMiniApp SDK không tìm thấy. Dùng dữ liệu giả cho môi trường dev."
        );
        setUser({
          id: "1234567890",
          name: "Người Dùng Thử",
          phone:"0396767186",
          avatar: "https://via.placeholder.com/96",
        });
        setLoading(false);
        return;
      }

      try {
        const authResponse = await zalo.getAuthToken();
        const accessToken = authResponse.accessToken;

        const res = await fetch(
          `https://openapi.zalo.me/v2.0/me?access_token=${accessToken}`
        );
        const data = await res.json();

        if (data.error) throw new Error(data.error.message);

        setUser({
          id: data.id,
          name: data.name,
          phone:data.phone,
          avatar: data.picture,
        });
      } catch (error) {
        console.error("Lấy thông tin user thất bại", error);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  const handleDownloadQR = () => {
    const link = document.createElement("a");
    link.href = "/path/to/zalo-miniapp-qr.png"; 
    link.download = "zalo-miniapp-qr.png";
    link.click();
     toast.success("Đã sao chép link Zalo Mini App!");
  };

const handleShareQR = () => {
  setShowSharePopup(true);
};


const handleCopyZaloMiniAppLink = () => {
  const appId = '4399971435693795957';
  const appParams = 'ref=share';
  const link = `https://zalo.me/app/${appId}?appParams=${encodeURIComponent(appParams)}`;

  try {
    const textArea = document.createElement("textarea");
    textArea.value = link;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0"; // Ẩn textarea
    textArea.style.pointerEvents = "none";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);

    if (successful) {
      toast.success("Đã sao chép link Zalo Mini App!");
    } else {
      throw new Error("Fallback execCommand copy failed");
    }
  } catch (error) {
    console.error("Lỗi sao chép:", error);
    toast.error("Không thể sao chép. Thiết bị không hỗ trợ.");
  }
};

  if (loading)
    return (
      <Page>
        <p>Đang tải...</p>
      </Page>
    );
  if (!user)
    return (
      <Page>
        <p>Không lấy được thông tin người dùng.</p>
      </Page>
    );

  return (
    <Page className="flex flex-col pt-28 pb-20 px-3 space-y-6 bg-white dark:bg-black">
      <div className="flex gap-4 items-center">
        <Avatar size={48} src={user.avatar}>
          {user.name.charAt(0)}
        </Avatar>
        <div>
        <Text.Title>{user.name}</Text.Title>
        <p className="text-sm font-bold">{user.phone}</p>
        </div>
      </div>

      {/* QR Mini App */}
      <div className="text-center border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
        <p className="text-sm text-gray-500 mb-2">
          Chia sẻ mã QR này để kết bạn nhanh chóng, bảo mật
        </p>
        <img
          src={LOGO}
          alt="QR Zalo Mini App"
          className="w-12 h-12 mx-auto mb-3 mt-2 rounded"
        />
        <img
          src={QR_CODE}
          alt="QR Zalo Mini App"
          className="w-48 h-48 mx-auto mb-4 rounded"
        />

        <h3 className="text-lg font-semibold mt-2">ADSDIGI</h3>

        <div className="flex justify-center gap-4 mt-3">
          <Button onClick={handleDownloadQR} type="neutral" variant="secondary" >
            <Icon icon="zi-download" size={16} className=" mr-1"/>
            Tải xuống
          </Button>
          <Button onClick={handleShareQR} type="neutral" variant="secondary">
            <Icon icon="zi-share" size={16} className="mb-1 mr-1"/>
            Chia sẻ
          </Button>
        </div>
      </div>


      {showSharePopup && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
    <div className="bg-white w-[90%] max-w-md rounded-lg p-4 relative">
<img
          src={BG_LABEl}
          alt="QR Zalo Mini App"
          className="w-full h-auto mb-3 rounded"
        />
      {/* Tiêu đề và mô tả */}
      <h2 className="text-xl font-bold text-center mb-1">Chia sẻ đường dẫn</h2>
      <p className="text-center text-gray-600 mb-4">
        Hãy chia sẻ ngay đường dẫn cho bạn bè để kết bạn nhanh chóng, bảo mật
      </p>

      {/* Nút hành động */}
      <div className="grid grid-cols-2 gap-3">
        <Button 
          onClick={handleCopyZaloMiniAppLink}
          className="bg-white border border-solid border-orange-500 text-orange-500 font-semibold py-2 "
        >
          <Icon icon="zi-copy" size={16} className="mr-1" />
          Sao chép link
        </Button>

        <Button
          onClick={() => {
            setShowSharePopup(false);
            window.open("https://zalo.me", "_blank");
          }}
          className="bg-orange-500 text-white font-semibold py-2"
        >
          Chia sẻ trên Zalo
        </Button>
      </div>

      {/* Nút đóng */}
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-black"
        onClick={() => setShowSharePopup(false)}
      >
        ✕
      </button>
    </div>
  </div>
)}

    </Page>
  );
}
