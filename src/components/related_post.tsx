import { useEffect, useState } from "react";
import { Page, Text, useNavigate } from "zmp-ui";

interface Post {
  id: number;
  slug: string;
  title: string;
  avatar: string;
  createdAt: string;
}

interface Props {
  currentSlug?: string;
}

function RELATED_POST({ currentSlug }: Props) {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://natural-chickens-1b51cc007f.strapiapp.com/api/articles?populate[avatar]=true"
        );
        const data = await res.json();
        const articles = data.data
          .filter((item: any) => item.slug !== currentSlug) // ❌ lọc bài viết hiện tại
          .sort(() => 0.5 - Math.random()) // 🔀 random thứ tự
          .slice(0, 3) // ✅ lấy 3 bài
          .map((item: any) => ({
            id: item.id,
            slug: item.slug,
            title: item.title,
            createdAt: item.createdAt,
            avatar: item.avatar?.url,
          }));
        setPosts(articles);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, [currentSlug]);

  return (
    <div className="mt-10">
      <Text.Title size="large">Tin tức liên quan</Text.Title>
      <div className="mt-4 space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex gap-3 cursor-pointer"
            onClick={() => navigate(`/posts/${post.slug}`)}
          >
            <div className="w-[40%]">
              <img
                className="rounded w-full object-contain object-center"
                src={post.avatar}
                alt={post.title}
              />
            </div>
            <div className="w-[60%]">
              <p className="text-sm text-black-600 font-medium title-font mb-[6px] uppercase line-clamp-2">
                {post.title}
              </p>
              <p className="text-[12px] text-gray-500">
                {new Date(post.createdAt)
                  .toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })
                  .replace(/\//g, "-")
                  .replace(",", "")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RELATED_POST;
