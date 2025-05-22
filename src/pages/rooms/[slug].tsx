import { useLocation } from "zmp-ui";
import { useEffect, useState } from "react";
import { Page, Text } from "zmp-ui";
import ReactMarkdown from "react-markdown";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface RoomItem {
  id: number;
  slug: string;
  title: string;
  price: string;
  content: string;
  gallery: string[];
}

export default function RoomDetailPage() {
  const location = useLocation();
  const [post, setPost] = useState<RoomItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const slug = location.pathname.split("/rooms/")[1];

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    setNotFound(false);

    fetch(`https://successful-kindness-6438c55093.strapiapp.com/api/rooms?populate=gallery`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "APIIII");

        if (Array.isArray(data.data) && data.data.length > 0) {
          const item = data.data.find(
            (roomItem: any) => roomItem.slug === slug
          ) || data.data[0];

          setPost({
            id: item.id,
            slug: item.slug,
            title: item.title,
            price: item.price,
            content: item.content,
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

  return (
    <Page className="pt-28 pb-24 px-3 bg-white dark:bg-black">
      <Text.Title className="mb-2 uppercase">
        <strong>{post?.title}</strong>
      </Text.Title>

     
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

      <ReactMarkdown>{post?.content}</ReactMarkdown>
    </Page>
  );
}
