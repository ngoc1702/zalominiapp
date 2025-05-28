
import INTRO_WEBSITE from "@/components/intro_website";
import TABLE_LADIPAGE from "@/components/table_ladipage";
import TABLE_WEBSITE from "@/components/table_website";


import { Box, Button, Icon, Page, Text } from "zmp-ui";

function DESIGN_WEBSITE() {
  return (
    <div className="flex flex-col pt-[104px] pb-[100px] px-3 space-y-6 bg-cover bg-center bg-no-repeat bg-white dark:bg-black h-screen overflow-y-auto">
    <INTRO_WEBSITE/>
    <TABLE_WEBSITE/>
    <TABLE_LADIPAGE/>
    </div>
  );
}
export default DESIGN_WEBSITE;
