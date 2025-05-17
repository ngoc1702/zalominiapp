import { openMiniApp } from "zmp-sdk";
import { Box, Button, Icon, Page, Text,  } from "zmp-ui";
import bg from "@/static/bg.svg";
import Room_CATBA from "@/components/room_catba";

function HomePage() {
  return (
    <Page
      className="flex flex-col pt-28 px-3 space-y-6 bg-cover bg-center bg-no-repeat bg-white dark:bg-black"
      // style={{
      //   backgroundImage: `url(${bg})`,
      // }}
    >
      <Room_CATBA></Room_CATBA>
    </Page>
  );
}
export default HomePage;
