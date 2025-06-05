import { useEffect, useState } from "react";
import { Page, Text, Icon } from "zmp-ui";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { openPostFeed, showToast, openChat } from "zmp-sdk/apis";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RELATED_POST from "@/components/related_post";
import { useLocation } from "zmp-ui";

interface PostItem {
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
  const [post, setPost] = useState<PostItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const slug = location.pathname.split("/posts/")[1];

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    setNotFound(false);

    fetch(
      `https://natural-chickens-1b51cc007f.strapiapp.com/api/articles?populate[avatar]=true&populate[gallery]=true`
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.data) && data.data.length > 0) {
          const item =
            data.data.find((roomItem: any) => roomItem.slug === slug) ||
            data.data.find((roomItem: any) => String(roomItem.id) === slug); // Fix lỗi kiểu

          if (item) {
            setPost({
              id: item.id,
              slug: item.slug,
              title: item.title,
              avatar: item.avatar?.url || "",
              content: item.content,
              createdAt: item.createdAt,
              gallery: item.gallery?.map((img: any) => img.url) || [],
            });
          } else {
            setNotFound(true);
          }
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

const handleSharePost = async () => {
  try {
   const currentUrl = window.location.origin + window.location.pathname;

    if (!currentUrl || !post) {
      showToast({ message: "Không thể chia sẻ bài viết" });
      return;
    }

    const title = post.title || "Bài viết";
    const thumb = post.avatar || "https://via.placeholder.com/300x200?text=No+Image";
    const rawDescription = post.content
      ? post.content.replace(/<[^>]*>?/gm, "")
      : "";
    const description = rawDescription.slice(0, 50) || "Xem chi tiết bài viết";
 console.log("Dữ liệu chia sẻ:", { currentUrl, title, thumb, description });
    const { status, shareType, numberOfUser } = await openPostFeed({
      type: "link",
      data: {
        link: currentUrl,
        title,
        thumb,
        description,
      },
    });

    if (String(status) === "success") {
      console.log("Chia sẻ thành công:", { shareType, numberOfUser });
      showToast({ message: "Chia sẻ thành công!" });
    } else {
      showToast({ message: "Chia sẻ thất bại" });
    }
  } catch (error) {
    console.error("Lỗi chia sẻ:", error);
    showToast({ message: "Lỗi chia sẻ, thử lại sau" });
  }
};

const handleChatNow = async () => {
  try {
    await openChat({
      type: "oa",
      id: "3486274299209952959", 
    });
  } catch (error) {
    console.error("Không mở được chat:", error);
  }
};


  if (loading) {
    return (
      <Page>
        <Text>Đang tải...</Text>
      </Page>
    );
  }

  if (notFound) {
    return (
      <Page>
        <Text>Không tìm thấy bài viết</Text>
      </Page>
    );
  }

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
        className="h-[25vh] w-full rounded object-contain mb-2"
        src={post?.avatar}
        alt={post?.title}
      />

      <ReactMarkdown className="text-sm text-justify" rehypePlugins={[rehypeRaw]}>
        {post?.content}
      </ReactMarkdown>

      {/* {post?.gallery.length > 0 && (
        <Swiper
          modules={[FreeMode, Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="room-swiper"
        >
          {post.gallery.map((url, idx) => (
            <SwiperSlide key={idx}>
              <img
                className="h-[25vh] w-full rounded object-cover"
                src={url}
                alt={`${post.title} - ${idx + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )} */}

      <div className="mt-6 grid grid-cols-2 items-center justify-center gap-4 py-2 border-t border-b border-1 border-black-700">
        <button onClick={handleSharePost} className="text-sm gap-1 flex justify-center items-center text-red-600">
          <Icon icon="zi-share" size={14} /> Chia sẻ
        </button>
        <button onClick={handleChatNow}
          className="text-sm gap-1 flex justify-center items-center text-red-600"
        >
          <Icon icon="zi-chat" size={14} /> Liên hệ
        </button>
      </div>

      <RELATED_POST currentSlug={post?.slug} />
    </Page>
  );
}
