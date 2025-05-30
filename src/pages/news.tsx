import React, { useEffect, useState } from "react";
import { Text, Page, Icon, useNavigate } from "zmp-ui";

interface Post {
  id: number;
  title: string;
  slug: string;
  avatar: string;
  createdAt: string;
}

const PAGE_SIZE = 10;

function NewsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // từ khóa khi nhấn search
  const [inputValue, setInputValue] = useState(""); // giá trị input hiện tại
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const queryParams = new URLSearchParams({
        "populate[avatar]": "true",
        "pagination[page]": page.toString(),
        "pagination[pageSize]": PAGE_SIZE.toString(),
        "sort": "createdAt:DESC",
        ...(searchTerm && {
          "filters[title][$containsi]": searchTerm,
        }),
      });

      const baseUrl = `https://natural-chickens-1b51cc007f.strapiapp.com/api/articles`;
      const res = await fetch(`${baseUrl}?${queryParams.toString()}`);
      const data = await res.json();

      if (Array.isArray(data.data)) {
        const mappedPosts = data.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          avatar: item.avatar?.url,
          createdAt: item.createdAt,
        }));

        setPosts(mappedPosts);
        setPageCount(data.meta.pagination.pageCount || 1);
      } else {
        setPosts([]);
        console.error("Dữ liệu trả về không đúng định dạng:", data);
      }
    } catch (err) {
      console.error("Lỗi lấy bài viết:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page, searchTerm]);

  const handleNext = () => {
    if (page < pageCount) setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <Page className="space-y-6 pt-28 pb-20 px-3">
      <Text.Title size="large">Tin tức mới nhất</Text.Title>

      <form
        className="max-w-md mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          setPage(1);
          setSearchTerm(inputValue.trim());
        }}
      >
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            placeholder="Tìm bài viết"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:ring-[#CE2127] focus:border-[#CE2127] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#CE2127] dark:focus:border-[#CE2127]"
            required
          />

          <button
            type="submit"
            className="text-white absolute end-4 bottom-2.5 bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

      <div className="grid grid-cols-2 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-100 rounded-b-lg cursor-pointer"
            onClick={() => {
              sessionStorage.setItem(`post-title-${post.slug}`, post.title);
              navigate(`/posts/${post.slug}`);
            }}
          >
            <img
              className="h-[13vh] w-full object-contain object-center"
              src={post.avatar}
              alt={post.title}
            />
            <div className="p-2">
              <p className="text-sm text-black font-medium title-font mb-[6px] uppercase line-clamp-2">
                {post.title}
              </p>
              <p className="text-[12px] text-gray-500">
                {new Date(post.createdAt)
                  .toLocaleDateString("en-GB")
                  .replace(/\//g, "-")}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 items-center py-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="bg-gray-300 px-1 pb-[2px] rounded disabled:opacity-50"
        >
          <Icon icon="zi-arrow-left" size={14} />
        </button>
        <span className="px-2 bg-[#CE2127] text-white text-sm rounded">
          {page}
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
