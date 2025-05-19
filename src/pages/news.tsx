import React, { useEffect, useState } from "react";
import { Text, Icon, useNavigate, Page } from "zmp-ui";

interface RoomItem {
  id: number;
  category:string;
  slug: string;
  title: string;
  price: string;
  avatar: string;
}

function ArticlesPage() {
  const [rooms, setRooms] = useState<RoomItem[]>([]);
  const navigate = useNavigate();
  console.log(navigate)

useEffect(() => {
  fetch("http://localhost:1337/api/rooms?articles")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      
      if (Array.isArray(data.data)) {
        const filteredRooms = data.data.filter(
          (item: any) => item.category.name === "cat-ba"
        );
        const mappedRooms = filteredRooms.map((item: any) => ({
          id: item.id,
          category:item.category,
          title: item.title,
          slug: item.slug,
          price: item.price,
          avatar: item.avatar?.url
            ? `http://localhost:1337${item.avatar.url}`
            : "",
        }));
        setRooms(mappedRooms);
      } else {
        setRooms([]);
        console.error("Dữ liệu trả về không đúng định dạng", data);
      }
    })
    .catch((err) => console.error("Lỗi lấy bài viết:", err));
}, []);
  return (
     <Page
      className="flex flex-col items-center justify-center space-y-6 bg-cover bg-center bg-no-repeat bg-white dark:bg-black"
    >
        
    </Page>
  )
 
}

export default ArticlesPage;


