import { BottomNavigation, Icon, useNavigate, useLocation } from "zmp-ui";

function BottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation(); 

  return (
    <BottomNavigation fixed activeKey={location.pathname}>
      <BottomNavigation.Item
        key="/"
        icon={<Icon icon="zi-home" />}
        label="Trang chủ"
        onClick={() => navigate("/")}
      />
      <BottomNavigation.Item
        key="/catergories"
        icon={<Icon icon="zi-list-1" />}
        label="Cẩm nang"
        onClick={() => navigate("/news")}
      />
      <BottomNavigation.Item
        key="/chat"
        icon={<Icon icon="zi-chat" />}
        label="Tin nhắn"
        onClick={() => navigate("/chat")}
      />
      <BottomNavigation.Item
        key="/profile"
        icon={<Icon icon="zi-user" />}
        label="Cá nhân"
        onClick={() => navigate("/profile")}
      />
    </BottomNavigation>
    
  );
}

export default BottomNavBar;
