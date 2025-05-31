import { useEffect, useState } from "react";
import { getUserInfo, getPhoneNumber, openShareSheet  , saveImageToGallery, showToast   } from "zmp-sdk/apis";
import { Avatar, Page, Text, Button, Icon } from "zmp-ui";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveAs } from "file-saver";
import LOGO from "@/image/cropped-logo-tron-ADSDIGI.png";
import QR_CODE from "@/image/download.png";
import BG_LABEl from "@/image/bg_label.png";

interface UserProfile {
  id: string;
  name: string;
  phone?: string;
  avatar: string;
}

declare global {
  interface Window {
    zaloMini?: {
      shareToFriend: (params: {
        type: "miniapp";
        appId: string;
        appParams?: string;
        success?: () => void;
        fail?: (err: any) => void;
      }) => void;
    };
  }
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [showSharePopup, setShowSharePopup] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const [userRes, phoneRes] = await Promise.all([
          getUserInfo({}),
          getPhoneNumber({}),
        ]);

        const fetchedUser: UserProfile = {
          id: userRes.userInfo.id,
          name: userRes.userInfo.name,
          avatar: userRes.userInfo.avatar,
          phone: phoneRes.number,
        };

        console.log("✅ Thông tin người dùng:", fetchedUser);
        setUser(fetchedUser);
      } catch (err) {
        console.error("❌ Không lấy được thông tin người dùng:", err);
        toast.error("Bạn cần cấp quyền truy cập thông tin.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);


const handleDownloadQR = async () => {
  try {
    await saveImageToGallery({
      imageUrl: "https://adsdigi.com/wp-content/uploads/2025/05/zalo-miniapp-qr.png",
    });

    await showToast({
      message: "Ảnh đã được lưu vào thư viện!",
    });
    console.log("✅ Lưu ảnh thành công!");
  } catch (error) {
    console.error("❌ Lỗi lưu ảnh:", error);
    await showToast({
      message: "Không thể lưu ảnh vào thiết bị.",
    });
  }
};


  const handleShareQR = () => {
    setShowSharePopup(true);
  };

const handleCopyZaloMiniAppLink = () => {
  const link = "https://zalo.me/s/1872406626404526216/?utm_source=zalo-qr";
  try {
    const textArea = document.createElement("textarea");
    textArea.value = link;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    textArea.style.pointerEvents = "none";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);

    if (successful) {
      showToast({
        message: "Đã sao chép link Zalo thành công!",
      });
    } else {
      throw new Error("Không thể sao chép");
    }
  } catch (error) {
    console.error("Lỗi sao chép:", error);
    showToast({
      message: "Không thể sao chép. Thiết bị không hỗ trợ.",
    });
  }
};


const handleShareToZalo = async () => {
  try {
    const data = await openShareSheet({
      type: "link",
      data: {
        link: "https://zalo.me/s/1872406626404526216/?utm_source=zalo-qr",
      },
    });

    console.log("Chia sẻ thành công:", data);
      showToast({
        message: "Chia sẻ thành công",
      });
  } catch (error) {
    console.error("Lỗi chia sẻ:", error);
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
        <Avatar size={48} src={user?.avatar} />
        <div>
          <Text.Title>{user?.name}</Text.Title>
          <p className="text-sm font-bold">{user?.phone}</p>
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

        <p className="text-lg font-semibold mt-2">ADSDIGI</p>

        <div className="flex justify-center gap-4 mt-3">
          <Button onClick={handleDownloadQR} type="neutral" variant="secondary">
            <Icon icon="zi-download" size={16} className=" mr-1" />
            Tải xuống
          </Button>
          <Button onClick={handleShareQR} type="neutral" variant="secondary">
            <Icon icon="zi-share" size={16} className="mb-1 mr-1" />
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
            <h2 className="text-xl font-bold text-center mb-1">
              Chia sẻ đường dẫn
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Hãy chia sẻ ngay đường dẫn cho bạn bè để kết bạn nhanh chóng, bảo
              mật
            </p>

            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handleCopyZaloMiniAppLink}
                className="bg-white border border-solid border-red-600 text-red-600 font-semibold py-2"
              >
                <Icon icon="zi-copy" size={16} className="mr-1" />
                Sao chép link
              </Button>

              <Button
                onClick={handleShareToZalo}
                className="bg-red-600 text-white font-semibold py-2"
              >
                Chia sẻ trên Zalo
              </Button>
            </div>

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
