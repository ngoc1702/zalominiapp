// Layout.tsx
import React from "react";
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
import CatergoriesPage from "@/pages/catergories";
import ChatPage from "@/pages/chat";
import ProfilePage from "@/pages/profile";
import RoomDetailPage from "@/pages/rooms/[slug]";
import BottomNavBar from "./bottom_navigation";

const InnerLayout = () => {
  const location = useLocation();

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
      <AnimationRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catergories" element={<CatergoriesPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
         <Route path="/rooms/:slug" element={<RoomDetailPage />} />
      </AnimationRoutes>
      <BottomNavBar />
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
