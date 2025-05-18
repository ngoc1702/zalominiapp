import { getSystemInfo } from "zmp-sdk";
import {
  AnimationRoutes,
  App,
  Route,
  SnackbarProvider,
  ZMPRouter,
  Header,
  useLocation,
} from "zmp-ui";
import { BrowserRouter } from "react-router-dom";
import { AppProps } from "zmp-ui/app";

import HomePage from "@/pages/index";
import CatergoriesPage from "@/pages/catergories";
import ChatPage from "@/pages/chat";
import ProfilePage from "@/pages/profile";
import BottomNavBar from "./bottom_navigation";
import RoomDetailPage from "@/pages/rooms/[slug]";

const Layout = () => {
  return (
    <BrowserRouter>
    <App theme={getSystemInfo().zaloTheme as AppProps["theme"]}>
      <SnackbarProvider>
        <ZMPRouter>
          <InnerLayout />
        </ZMPRouter>
      </SnackbarProvider>
    </App>
    </BrowserRouter>
  );
};


const InnerLayout = () => {
  const location = useLocation();

  const getTitleByPath = (path: string): string => {
    switch (path) {
      case "/":
        return "Trang chủ";
      case "/catergories":
        return "Danh mục";
      case "/chat":
        return "Tin nhắn";
      case "/profile":
        return "Cá nhân";
      default:
        return "Zalo Mini App";
    }
  };

  const title = getTitleByPath(location.pathname);

  return (
    <>
      <Header backgroundColor="#F58220" textColor="#ffffff" title={title} />
      <AnimationRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catergories" element={<CatergoriesPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/rooms/:slug" element={<RoomDetailPage />} />
      </AnimationRoutes>
      <BottomNavBar />
    </>
  );
};

export default Layout;
