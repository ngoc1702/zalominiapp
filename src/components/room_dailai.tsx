// Room_CATBA.tsx
import React, { useEffect, useState } from "react";
import { Text, Icon, useNavigate } from "zmp-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import MODAL_CHAT from "@/components/modal-chat"; 

interface RoomItem {
  id: number;
  category:string;
  slug: string;
  title: string;
  price: string;
  avatar: string;
}

function Room_DAILAI() {
  const [rooms, setRooms] = useState<RoomItem[]>([]);
   const [showModal, setShowModal] = useState(false);
   const [selectedRoom, setSelectedRoom] = useState<RoomItem | null>(null); 
   const navigate = useNavigate();
 
   useEffect(() => {
     fetch("https://successful-kindness-6438c55093.strapiapp.com/api/rooms?populate[avatar]=true&populate[category]=true")
       .then((res) => res.json())
       .then((data) => {
         if (Array.isArray(data.data)) {
           const filteredRooms = data.data.filter(
             (item: any) => item.category && item.category.name === "dai-lai"
           );
 
           const mappedRooms = filteredRooms.map((item: any) => ({
             id: item.id,
             category: item.category,
             title: item.title,
             slug: item.slug,
             price: item.price,
             avatar: item.avatar?.url || "",
           }));
 
           setRooms(mappedRooms);
         } else {
           setRooms([]);
           console.error("Dữ liệu trả về không đúng định dạng", data);
         }
       })
       .catch((err) => console.error("Lỗi lấy bài viết:", err));
   }, []);
 
   const handleIconClick = (room: RoomItem) => {
     console.log("Clicked:", room.title);
     setSelectedRoom(room); 
     setShowModal(true); 
   };
  return (
    <>
      <Text.Title size="large">Flamingo Đại Lải</Text.Title>
      <div className="max-w-full ">
         <Swiper slidesPerView={2.2} spaceBetween={16} freeMode={true} modules={[FreeMode]}>
                  {rooms.map((room) => (
                    <SwiperSlide key={room.id}>
                      <div className="bg-gray-100 rounded-lg cursor-pointer">
                        <img
                          className="h-[18vh] rounded w-full object-cover object-center"
                          src={room.avatar}
                          alt={room.title}
                          onClick={() => navigate(`/rooms/${room.slug}`)}
                        />
                        <div className="p-2">
                          <h2 onClick={() => navigate(`/rooms/${room.slug}`)} className="text-sm text-[#16462F] font-medium title-font mb-[6px] uppercase line-clamp-2">
                            {room.title}
                          </h2>
                          <div className="flex justify-between items-center mb-1">
                            <p className="text-sm text-[#F58220] font-medium title-font">
                              {room.price}
                            </p>
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                handleIconClick(room); 
                              }}
                              className="cursor-pointer"
                            >
                              <Icon className="text-[#F58220]" icon="zi-plus-circle-solid" size={16} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
      </div>

      {selectedRoom && (
        <MODAL_CHAT
          visible={showModal}
          onClose={() => setShowModal(false)}
          avatar={selectedRoom.avatar}
          title={selectedRoom.title}
          price={selectedRoom.price}
        />
      )}
    </>
  );
}

export default Room_DAILAI;
