import { Text, Icon } from "zmp-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import {  FreeMode } from "swiper/modules";
import "swiper/css";
function Room_CATBA() {
  return (
    <>
      <Text.Title size="large">Flamigo Cát Bà</Text.Title>
      <div className="max-w-full overflow-hidden">
        <Swiper
          slidesPerView={2.3}
          spaceBetween={16}
          loop={true}
          // autoplay={{ delay: 4000 }}
          freeMode={true}
          modules={[FreeMode]}
        >
          <SwiperSlide>
            <div className="bg-gray-100  rounded-lg">
              <img
                className="h-[18vh] rounded w-full object-cover object-center"
                src="https://flamingobooking.com/wp-content/uploads/2025/05/Deluxe-Mountain-View-1-300x200.jpg"
                alt="content"
              />
              <div className="p-2">
                <h2 className="text-sm text-[#16462F] font-medium title-font mb-[6px] uppercase line-clamp-2">
                  Phòng Deluxe view núi ( toà 1-3 )
                </h2>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm text-[#F58220] font-medium title-font ">
                    2,650,000
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
          <SwiperSlide>
            <div className="bg-gray-100  rounded-lg">
              <img
                className="h-[18vh] rounded w-full object-cover object-center"
                src="https://flamingobooking.com/wp-content/uploads/2025/04/phong-deluxe-ocean-view-flamingo-cat-ba-resort-3-533x400-1-300x225.jpg"
                alt="content"
              />
              <div className="p-2">
                <h2 className="text-sm text-[#16462F] font-medium title-font mb-[6px] uppercase line-clamp-2">
                  Phòng Deluxe view núi ( toà 1-3 )
                </h2>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm text-[#F58220] font-medium title-font ">
                    2,650,000
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
          <SwiperSlide>
            <div className="bg-gray-100  rounded-lg">
              <img
                className="h-[18vh] rounded w-full object-cover object-center"
                src="https://flamingobooking.com/wp-content/uploads/2025/05/flamingo_dai_lai_can2pn-03_0.jpg"
                alt="content"
              />
              <div className="p-2">
                <h2 className="text-sm text-[#16462F] font-medium title-font mb-[6px] uppercase line-clamp-2">
                  Phòng Deluxe view núi ( toà 1-3 )
                </h2>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm text-[#F58220] font-medium title-font ">
                    2,650,000
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
        </Swiper>
      </div>
    </>
  );
}

export default Room_CATBA;
