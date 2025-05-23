import { openMiniApp } from "zmp-sdk";
import { Box, Button, Icon, Page, Text,  } from "zmp-ui";
import bg from "@/static/bg.svg";
import BANNER from "@/components/banner";
import Room_CATBA from "@/components/room_catba";
import Room_DAILAI from "@/components/room_dailai";

function HomePage() {
  return (
    <Page
      className="flex flex-col pt-[104px] pb-[100px] px-3 space-y-4 bg-cover bg-center bg-no-repeat bg-white dark:bg-black h-screen overflow-y-auto"
      // style={{
      //   backgroundImage: `url(${bg})`,
      // }}
    >
      <BANNER/>
      <Room_CATBA />
      <Room_DAILAI/>
    </Page>
  );
}
export default HomePage;
