import { useEffect, useState, useRef } from "react";
import {
  getUserInfo,
  getPhoneNumber,
  openShareSheet,
  saveImageToGallery,
  showToast,
  minimizeApp,
  createShortcut,
  followOA,
  viewOAQr,
  getSetting,
  authorize,
  openPermissionSetting,
} from "zmp-sdk/apis";
import { Avatar, Page, Text, Button, Icon } from "zmp-ui";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LOGO from "@/image/cropped-logo-tron-ADSDIGI.png";
import ZALO from "@/image/icons8-zalo-48.png";
import QR_CODE from "@/image/download.png";
import BG_LABEl from "@/image/bg_img.png";
import BG_LABEll from "@/image/bg-fki.png";
import QRCode from "react-qr-code";

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

  // const hasRequestedPermissions = useRef(false);
// useEffect(() => {
//   checkPermissions();
// }, []);

  const fetchUser = async () => {
  try {
    const userRes = await getUserInfo({});

    const fetchedUser: UserProfile = {
      id: userRes.userInfo.id,
      name: userRes.userInfo.name,
      avatar: userRes.userInfo.avatar,
      phone: '', // nếu không dùng nữa thì có thể xoá dòng này
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

// useEffect chạy khi component mount
useEffect(() => {
  fetchUser();
}, []);

// Gọi lại fetchUser sau khi cấp quyền
const checkPermissions = async () => {
  try {
    const setting = await getSetting();

    const grantedLocation =
      setting.authSetting?.["scope.userLocation"] === true;
    const grantedPhone =
      setting.authSetting?.["scope.userPhonenumber"] === true;

    if (grantedLocation && grantedPhone) return;

    const missingScopes: string[] = [];
    if (!grantedLocation) missingScopes.push("scope.userLocation");
    if (!grantedPhone) missingScopes.push("scope.userPhonenumber");

    if (missingScopes.length > 0) {
      const result = await authorize({
        scopes: missingScopes as any,
      });

      const allGranted =
        result["scope.userLocation"] === true &&
        result["scope.userPhonenumber"] === true;

      if (allGranted) {
        // 🔄 Gọi lại fetchUser để cập nhật UI sau khi cấp quyền
        fetchUser();
      } else {
        openPermissionSetting();
      }
    }
  } catch (error) {
    const code = (error as any).code;
    if (code === -201) {
      console.warn("Người dùng từ chối cấp quyền.");
    } else {
      console.error("Lỗi khi xin quyền:", error);
    }
  }
};



  const handleDownloadQR = async () => {
    try {
      await saveImageToGallery({
        imageUrl:
          "https://adsdigi.com/wp-content/uploads/2025/05/zalo-miniapp-qr.png",
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

  const handleMinimize = async () => {
    try {
      await minimizeApp();
    } catch (error) {
      console.error("Thu nhỏ thất bại:", error);
    }
  };

  const handleCreateShortcut = async () => {
    try {
      const result = await createShortcut();
      console.log("Tạo shortcut thành công:", result);
    } catch (error) {
      console.error("Tạo shortcut thất bại:", error);
    }
  };

  const handleFollowOA = async () => {
    try {
      await followOA({ id: "3486274299209952959" });
      console.log("Đã quan tâm thành công");
    } catch (error: any) {
      if (error.code === -201) {
        console.log("Người dùng đã từ chối quan tâm");
      } else {
        console.log("Lỗi khác", error);
      }
    }
  };

  const handleViewOAQRCode = async () => {
    try {
      await viewOAQr({
        id: "3486274299209952959",
      });
    } catch (error) {
      console.error("Không hiển thị được QR OA:", error);
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
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <Avatar size={48} src={user?.avatar} />
          <div>
            <Text.Title>{user?.name}</Text.Title>
            <p className="text-sm font-bold">{user?.phone}</p>
          </div>
        </div>
        <button
          onClick={handleFollowOA}
          className="bg-red-600 text-white flex items-center border border-red-600 font-semibold text-sm py-1.5 px-3 gap-2 rounded-full h-10"
        >
          <img
            src={ZALO}
            alt="QR Zalo Mini App"
            className="w-6 h-6 object-cover rounded"
          />
          Quan tâm OA
        </button>
      </div>

      <div
        onClick={checkPermissions}
        className="w-full rounded-xl bg-red-600 text-white px-6 py-6 relative cursor-pointer"
      >
        <div className="relative z-10">
          <p className="text-lg font-semibold mb-1">Đăng ký thành viên</p>
          <p className="text-sm opacity-90">
            Nhận thông tin nhanh nhất, mở rộng tiện ích
          </p>
        </div>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[100px] opacity-10 z-0">
          💰
        </div>
      </div>

      {/* QR Mini App */}
      <div className="text-center border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
        <p className="text-sm text-gray-500 mb-2">
          Chia sẻ mã QR này để có thông tin mới nhất nhanh chóng, bảo mật
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

      <div className="grid grid-cols-2 gap-8 border-t border-b border-black-700 py-5">
        <div className="flex justify-center">
          <button
            onClick={handleCreateShortcut}
            className="flex items-center text-white font-semibold py-2 px-4 gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-700 shadow-md"
          >
            <img
              src={LOGO}
              alt="QR Zalo Mini App"
              className="w-6 h-6 rounded bg-white p-0.5"
            />
            Tạo phím tắt
          </button>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleMinimize}
            className="flex items-center text-white font-semibold py-2 px-4 gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-700 shadow-md"
          >
            <Icon icon="zi-setting" size={16} className="mr-1" />
            Thu nhỏ
          </button>
        </div>
      </div>

      {showSharePopup && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white w-[90%] max-w-md rounded-lg p-4 relative">
            <img
              src={BG_LABEl}
              alt="QR Zalo Mini App"
              className="w-full h-[25vh] object-cover mb-3 rounded"
            />
            <h2 className="text-xl font-bold text-center mb-1">
              Chia sẻ đường dẫn
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Hãy chia sẻ ngay đường dẫn cho bạn bè để kết bạn nhanh chóng, bảo
              mật
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleCopyZaloMiniAppLink}
                className="bg-white border border-solid border-red-600 text-red-600 font-semibold py-2 rounded-full"
              >
                <Icon icon="zi-copy" size={16} className="mr-1" />
                Sao chép link
              </button>

              <button
                onClick={handleShareToZalo}
                className="bg-red-600 text-white font-semibold py-2 rounded-full"
              >
                <Icon icon="zi-share" size={16} className="mr-1" />
                Chia sẻ trên Zalo
              </button>
            </div>

            <button
              className="absolute top-0 right-1 text-gray-500 hover:text-black"
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
