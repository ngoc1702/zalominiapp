import { Text, Icon } from "zmp-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import {  FreeMode } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


interface RoomItem {
  id: number;
  slug:string;
  title: string;
  price:string;
  avatar: string;
}

function Room_CATBA() {
  const [rooms, setRooms] = useState<RoomItem[]>([]);

useEffect(() => {
  fetch("http://localhost:1337/api/rooms?populate=avatar")
    .then((res) => res.json())
    .then((data) => {
      console.log("Raw data:", data);
      if (Array.isArray(data.data)) {
        const mappedRooms = data.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          price: item.price,
          avatar:
            item.avatar?.url
              ? `http://localhost:1337${item.avatar.url}`
              : undefined,
        }));
        setRooms(mappedRooms);
      } else {
        console.error("Dữ liệu trả về không đúng định dạng", data);
        setRooms([]);
      }
    })
    .catch((err) => console.error("Lỗi lấy bài viết:", err));
}, []);

  return (
    <>
      <Text.Title size="large">Flamingo Cát Bà</Text.Title>
      <div className="max-w-full overflow-hidden">
      <Swiper
        slidesPerView={2.4}
        spaceBetween={16}
        // loop={true}
        freeMode={true}
        modules={[FreeMode]}
      >
        {rooms.map((room) => (
          <SwiperSlide key={room.id}>
            <div className="bg-gray-100  rounded-lg">
              <img
                className="h-[18vh] rounded w-full object-cover object-center"
                src={room.avatar}
                alt="content"
              />
              <div className="p-2">
              <Link to={`/rooms/${room.slug}`} onClick={() => console.log("Clicked slug:", room.slug)}>
                <h2 className="text-sm text-[#16462F] font-medium title-font mb-[6px] uppercase line-clamp-2">
                    {room.title}
                </h2>
                </Link>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm text-[#F58220] font-medium title-font ">
                     {room.price}
                  </p>
                  <Icon
                    className="text-[#F58220] "
                    icon="zi-plus-circle-solid"
                    size={16}
                  />
                </div>
              </div>
            </div>
          
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
}

export default Room_CATBA;
