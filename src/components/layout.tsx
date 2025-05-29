// Layout.tsx
import React , { useEffect, useState } from "react";
import { Spinner } from "zmp-ui";
import { getSystemInfo } from "zmp-sdk";
import {
  App as ZmpApp,
  Page,
  Header,
  SnackbarProvider,
  AnimationRoutes,
  Route,
  useLocation,
  ZMPRouter,
} from "zmp-ui";
import { AppProps } from "zmp-ui/app";
import { HeaderTitleProvider, useHeaderTitle } from "./HeaderTitleContext";

import HomePage from "@/pages/index";
import NewsPage from "@/pages/news";
import ChatPage from "@/pages/chat";
import ProfilePage from "@/pages/profile";
import GOOGLE_ADS from "@/pages/goggle_ads";
import RENT_ACCOUNT from "@/pages/rent_account";
import DESIGN_WEBSITE from "@/pages/design_website";
import PostDetailPage from "@/pages/posts/[slug]";
import BottomNavBar from "./bottom_navigation";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InnerLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
   useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

 const getTitleByPath = (path: string) => {
  let title = "Zalo Mini App";

  if (path === "/") title = "Trang chủ";
  else if (path === "/news") title = "Tin tức";
  else if (path === "/chat") title = "Hỗ trợ";
  else if (path === "/profile") title = "Cá nhân";
  else if (path === "/google_ads") title = "Quảng cáo Google Ads";
  else if (path === "/rent_account") title = "Thuê tài khoản";
  else if (path === "/design_website") title = "Thiết kế Website";
  else if (path.startsWith("/posts/")) {
    const slug = path.split("/posts/")[1];
    const postTitle = sessionStorage.getItem(`post-title-${slug}`);
    title = postTitle || "Chi tiết tin tức";
  }

  // Giới hạn độ dài tiêu đề tối đa 30 ký tự
  return title.length > 30 ? title.slice(0, 30) + "..." : title;
};


  return (
    <Page>
      <Header
        title={getTitleByPath(location.pathname)}
        backgroundColor="#CE2127"
        textColor="#fff"
      />
       {loading ? (
        <div  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", 
    //  filter: "hue-rotate(30deg) saturate(800%) brightness(1.1) contrast(1.2)",
   
  }}>
          <Spinner />
        </div>
      ) : (
        <>
      <AnimationRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/google_ads" element={<GOOGLE_ADS/>} />
        <Route path="/rent_account" element={<RENT_ACCOUNT/>} />
        <Route path="/design_website" element={<DESIGN_WEBSITE/>} />
        <Route path="/posts/:slug" element={<PostDetailPage />} />
      </AnimationRoutes>
        <ToastContainer
        position="top-center" // hoặc "bottom-center" cho mobile
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BottomNavBar />
      </>
      )}
    </Page>
  );
};

const Layout = () => {
  return (
    <ZmpApp theme={getSystemInfo().zaloTheme as AppProps["theme"]}>
      <SnackbarProvider>
        <ZMPRouter>
          <InnerLayout />
        </ZMPRouter>
      </SnackbarProvider>
    </ZmpApp>
  );
};

export default Layout;
