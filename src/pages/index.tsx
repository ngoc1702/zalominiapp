import { Page } from "zmp-ui";
import { getSetting, authorize, openPermissionSetting } from "zmp-sdk/apis";
import { useEffect } from "react";
import BANNER from "@/components/banner";
import INTRO from "@/components/intro";
import SERVICE from "@/components/service";

function HomePage() {
  useEffect(() => {
    checkPermissions();
  }, []);

  const checkPermissions = async () => {
    try {
      // Bước 1: Lấy quyền đã cấp
      const setting = await getSetting();

      const grantedLocation = setting.authSetting?.["scope.userLocation"] === true;
      const grantedPhone = setting.authSetting?.["scope.userPhonenumber"] === true;

      const missingScopes: string[] = [];
      if (!grantedLocation) missingScopes.push("scope.userLocation");
      if (!grantedPhone) missingScopes.push("scope.userPhonenumber");

      if (missingScopes.length > 0) {
        // Bước 2: Xin quyền còn thiếu
        const result = await authorize({
          scopes: missingScopes as any, // 👈 ép kiểu tại đây
        });

        if (
          result["scope.userLocation"] !== true ||
          result["scope.userPhonenumber"] !== true
        ) {
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

  return (
    <Page
      className="flex flex-col pt-[104px] pb-[100px] px-3 space-y-6 bg-cover bg-center bg-no-repeat bg-white dark:bg-black h-screen overflow-y-auto"
    >
      <BANNER />
      <INTRO />
      <SERVICE />
    </Page>
  );
}

export default HomePage;
