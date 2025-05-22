import React, { useEffect, useState } from "react";
import { Text, Page, Icon, useNavigate } from "zmp-ui";

interface Post {
  id: number;
  category: string;
  slug: string;
  title: string;
  avatar: string;  
  createdAt:string;
  views: number;

}

const PAGE_SIZE = 10;

function NewsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `https://successful-kindness-6438c55093.strapiapp.com/api/articles?populate[avatar]=true&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}`
        );
        const data = await res.json();

        if (Array.isArray(data.data)) {
          const mappedPosts = data.data.map((item: any) => ({
            id: item.id,
            category: item.category || "",
            title: item.title,
            slug: item.slug,
            avatar: item.avatar?.url ? `${item.avatar.url}` : "",
            createdAt:item.createdAt,
            views: item.views || 0,

          }));

          setPosts(mappedPosts);
          setPageCount(data.meta.pagination.pageCount);
        } else {
          setPosts([]);
          console.error("Dữ liệu trả về không đúng định dạng:", data);
        }
      } catch (err) {
        console.error("Lỗi lấy bài viết:", err);
      }
    };

    fetchPosts();
  }, [page]);

  const handleNext = () => {
    if (page < pageCount) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <Page className="space-y-6 pt-28 pb-20 px-3">
      <Text.Title size="large">Cẩm nang du lịch</Text.Title>

      <div className="grid grid-cols-2 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
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
              <p className="text-[12px] text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString("en-GB").replace(/\//g, '-')}
                </p>

            </div>
          </div>
        ))}
      </div>

      {/* Phân trang */}
      <div className="flex justify-center gap-4 items-center p2-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="bg-gray-300 px-1 pb-[2px] rounded disabled:opacity-50"
        >
          <Icon icon="zi-arrow-left" size={14} />
        </button>
        <span className="text-sm">
          Trang {page} / {pageCount}
        </span>
        <button
          onClick={handleNext}
          disabled={page === pageCount}
          className="bg-gray-300 px-1 pb-[2px] rounded disabled:opacity-50"
        >
          <Icon icon="zi-arrow-right" size={14} />
        </button>
      </div>
    </Page>
  );
}

export default NewsPage;
