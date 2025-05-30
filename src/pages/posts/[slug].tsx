import { useLocation, Icon } from "zmp-ui";
import { useEffect, useState } from "react";
import { Page, Text } from "zmp-ui";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RELATED_POST from "@/components/related_post";

interface RoomItem {
  id: number;
  slug: string;
  avatar: string;
  title: string;
  content: string;
  gallery: string[];
  createdAt: string;
}

export default function PostDetailPage() {
  const location = useLocation();
  const [post, setPost] = useState<RoomItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const slug = location.pathname.split("/posts/")[1];

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    setNotFound(false);

    fetch(
      `https://natural-chickens-1b51cc007f.strapiapp.com/api/articles?populate[avatar]=true`
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.data) && data.data.length > 0) {
          const item =
            data.data.find((roomItem: any) => roomItem.slug === slug) ||
            data.data[0];

          setPost({
            id: item.id,
            slug: item.slug,
            title: item.title,
            avatar: item.avatar?.url ? `${item.avatar.url}` : "",
            content: item.content,
            createdAt: item.createdAt,
            gallery: item.gallery
              ? item.gallery.map((img: any) => `${img.url}`)
              : [],
          });
        } else {
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.error("Lỗi khi fetch chi tiết phòng:", err);
        setNotFound(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading)
    return (
      <Page>
        <Text>Đang tải...</Text>
      </Page>
    );
  if (notFound)
    return (
      <Page>
        <Text>Không tìm thấy phòng</Text>
      </Page>
    );

  // 👇 Đây là URL đầy đủ của bài viết hiện tại
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <Page className="pt-28 pb-[102px] px-3 bg-white dark:bg-black">
      <Text.Title className="mb-2 uppercase">
        <strong>{post?.title}</strong>
      </Text.Title>
      <p className="text-sm text-gray-500 mb-[6px]">
        {new Date(post?.createdAt)
          .toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })
          .replace(",", "")}
      </p>

      <img
        className="h-[25vh] w-full rounded object-contain"
        src={post?.avatar}
        alt={post?.title}
        style={{ display: "block", marginBottom: 8 }}
      />

      <ReactMarkdown className="text-sm text-justify" rehypePlugins={[rehypeRaw]}>
        {post?.content}
      </ReactMarkdown>

      {post?.gallery && post.gallery.length > 0 && (
        <Swiper
          modules={[FreeMode, Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="room-swiper"
          style={{ width: "100%", maxWidth: "600px" }}
        >
          {post.gallery.map((url, idx) => (
            <SwiperSlide key={idx}>
              <img
                className="h-[25vh] w-full rounded object-cover"
                src={url.startsWith("http") ? url : `${url}`}
                alt={`${post.title || "image"} - ${idx + 1}`}
                style={{ display: "block", marginBottom: 8 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Chia sẻ & Liên hệ */}
      <div className="mt-6 grid grid-cols-2 items-center justify-center gap-4 py-2 border-t border-b border-1 border-black-700">
        <a
          href={`https://zalo.me/share?url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm gap-1 flex justify-center items-center text-red-600"
        >
          <Icon icon="zi-share" size={14} /> Chia sẻ
        </a>
        <a
          href="https://zalo.me/0396767186"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm gap-1 flex justify-center items-center text-red-600"
        >
          <Icon icon="zi-chat" size={14} /> Liên hệ
        </a>
      </div>

      <RELATED_POST currentSlug={post?.slug} />
    </Page>
  );
}
