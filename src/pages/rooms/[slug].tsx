import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface PostDetail {
  title: string;
  content: string;
}

export default function RoomDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<PostDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

 useEffect(() => {
  if (!slug) return;

  setLoading(true);
  setNotFound(false);

  fetch(`http://localhost:1337/api/rooms?filters[slug][$eq]=${slug}&populate=*`)
    .then((res) => res.json())
    .then((data) => {
      if (data.data && data.data.length > 0) {
        const roomData = data.data[0].attributes;
        setPost({
          title: roomData.title,
          content: roomData.content,
        });
      } else {
        setNotFound(true);
      }
    })
    .catch((err) => {
      console.error("Lỗi khi fetch chi tiết phòng:", err);
      setNotFound(true);
    })
    .then(() => {
      setLoading(false); // Đặt lại loading sau catch
    });
}, [slug]);

  if (loading) return <div>Đang tải...</div>;
  if (notFound) return <div>Không tìm thấy phòng</div>;

  return (
    <div>
      <h1>{post?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post?.content || "" }} />
    </div>
  );
}
