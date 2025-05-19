import { useEffect, useState } from "react";
import { Avatar, Page, Text } from "zmp-ui";

interface UserProfile {
  id: string;
  name: string;
  avatar: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function loadUser() {
    if (!(window as any).ZaloMiniApp) {
      console.error("ZaloMiniApp SDK chưa được load hoặc không tồn tại!");
      setLoading(false);
      return;
    }

    try {
      const authResponse = await (window as any).ZaloMiniApp.getAuthToken();

      const accessToken = authResponse.accessToken;

      const res = await fetch(`https://openapi.zalo.me/v2.0/me?access_token=${accessToken}`);
      const data = await res.json();

      if (data.error) throw new Error(data.error.message);

      setUser({
        id: data.id,
        name: data.name,
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


  if (loading) return <Page><p>Đang tải...</p></Page>;
  if (!user) return <Page><p>Không lấy được thông tin người dùng.</p></Page>;

  return (
    <Page className="flex flex-col items-center justify-center space-y-6 bg-white dark:bg-black">
      <Avatar size={96} src={user.avatar}>
        {user.name.charAt(0)}
      </Avatar>
      <Text.Title>{user.name}</Text.Title>
    </Page>
  );
}
