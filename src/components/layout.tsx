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

import HomePage from "@/pages/index";
import ArticlesPage from "@/pages/news";
import ChatPage from "@/pages/chat";
import ProfilePage from "@/pages/profile";
import RoomDetailPage from "@/pages/rooms/[slug]";
import BottomNavBar from "./bottom_navigation";

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
    if (path === "/") return "Trang chủ";
    if (path === "/catergories") return "Danh mục";
    if (path === "/chat") return "Tin nhắn";
    if (path === "/profile") return "Cá nhân";
    if (path.startsWith("/rooms/")) return "Chi tiết phòng";
    return "Zalo Mini App";
  };

  return (
    <Page>
      <Header
        title={getTitleByPath(location.pathname)}
        backgroundColor="#F58220"
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
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
         <Route path="/rooms/:slug" element={<RoomDetailPage />} />
      </AnimationRoutes>
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
