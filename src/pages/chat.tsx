import { useEffect } from "react";
import { Page, Text, Button, Icon } from "zmp-ui";
import SALE from "@/image/customer-support.png";
import { openChat } from "zmp-sdk/apis";

export default function ChatPage() {
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

  return (
    <Page className="flex flex-col pt-28 pb-20 px-3 space-y-6 bg-white dark:bg-black">
      <div className="flex items-center gap-3 max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div>
          <p className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Chat với chúng tôi trên Zalo
          </p>

          <p className="text-sm mb-3 font-normal text-gray-700">
            Nhân viên của chúng tôi sẽ giúp bạn giải đáo mội thắc mắc kịp thời
          </p>

        
            <button onClick={handleChatNow}
              className="text-sm text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              <Icon icon="zi-chat" size={16} className="mb-[2px]" /> Chat ngay
            </button>
          
        </div>
        <img
          src={SALE}
          alt="image"
          className="w-[80px] h-[100px] mb-3 rounded"
        />
      </div>

      <div className=" gap-4 max-w-sm px-5 py-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="tel:0837999926" target="_blank">
          <button
            type="button"
            className="relative flex gap-6  w-full px-4 py-4 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-red-800 focus:z-10 "
          >
            <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full inline-flex items-center justify-center">
              <Icon icon="zi-call" />
            </div>
            <div className="text-start">
              <p className="text-red-600">Tổng đài hỗ trợ</p>
              <p className=" text-black-300">0837999926</p>
            </div>
          </button>
        </a>
         <a href="mailto:info@adsdigi.com" target="_blank">
          <button
            type="button"
            className="relative flex gap-6  w-full px-4 py-4 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-red-800 focus:z-10 "
          >
            <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full inline-flex items-center justify-center">
              <Icon icon="zi-inbox" />
            </div>
            <div className="text-start">
              <p className="text-red-600">Email hỗ trợ</p>
              <p className=" text-black-300">info@adsdigi.com</p>
            </div>
          </button>
        </a>
        
          <button
            type="button"
            className="relative flex gap-6  w-full px-4 py-4 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-red-800 focus:z-10 "
          >
            <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full inline-flex items-center justify-center">
              <Icon icon="zi-calendar" />
            </div>
            <div className="text-start">
              <p className="text-red-600">Lịch làm việc</p>
              <p className=" text-black-300">08:00 - 17:00 (T2 -T7)</p>
            </div>
          </button>
       
      
          <button
            type="button"
            className="relative flex gap-6  w-full px-4 py-4 text-sm font-medium  rounded-t-lg hover:bg-gray-100 hover:text-red-800 focus:z-10 "
          >
            <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full inline-flex items-center justify-center">
              <Icon icon="zi-location" />
            </div>
            <div className="text-start">
              <p className="text-red-600">Địa chỉ văn phòng</p>
              <p className=" text-black-300">Shophouse SB23-451, Sao biển 23, Vinhomes Ocean Park, Dương Xá, Gia Lâm, Hà Nội</p>
            </div>
          </button>
       
      </div>
    </Page>
  );
}
