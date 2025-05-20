import React, { useEffect, useState } from "react";
import { Text, Icon, useNavigate, Page } from "zmp-ui";

interface Post {
  id: number;
  category:string;
  slug: string;
  title: string;
  avatar: string;
}

function NewsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();
  console.log(navigate)

useEffect(() => {
  fetch("http://localhost:1337/api/articles?populate[avatar]=true")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (Array.isArray(data.data)) {
        const mappedPost = data.data.map((item: any) => ({
          id: item.id,
          category: item.category?.name || "",
          title: item.title,
          slug: item.slug,
          avatar: item.avatar?.url
            ? `http://localhost:1337${item.avatar.url}`
            : "",
        }));
        setPosts(mappedPost);
      } else {
        setPosts([]);
        console.error("Dữ liệu trả về không đúng định dạng", data);
      }
    })
    .catch((err) => console.error("Lỗi lấy bài viết:", err));
}, []);

  return (
     <Page
      className=" space-y-6  pt-28 pb-20 px-3"
    >
        <Text.Title size="large">Cẩm nang du lịch</Text.Title>
      <div className="grid grid-cols-2 gap-8">
          {posts.map((post) => (
             <div
                className="bg-gray-100 rounded-lg cursor-pointer"
                onClick={() => navigate(`/posts/${post.slug}`)}
              >
                <img
                  className="h-[18vh] rounded w-full object-cover object-center"
                  src={post.avatar}
                  alt={post.title}
                />
                <div className="p-2">
                  <h2 className="text-sm text-[#16462F] font-medium title-font mb-[6px] uppercase line-clamp-2">
                    {post.title}
                  </h2>
                 
                </div>
              </div>
              ))}
              </div>
    </Page>
  )
 
}

export default NewsPage;


