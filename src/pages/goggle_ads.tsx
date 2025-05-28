import INTRO_GGADS from "@/components/intro_ggads";
import TABLE_GG_ADS from "@/components/table_googleAds";
import { Box, Button, Icon, Page, Text } from "zmp-ui";

function GOOGLE_ADS() {
  return (
    <div className="flex flex-col pt-[104px] pb-[100px] px-3 space-y-6 bg-cover bg-center bg-no-repeat bg-white dark:bg-black h-screen overflow-y-auto">
      <INTRO_GGADS />
      <TABLE_GG_ADS />
    </div>
  );
}
export default GOOGLE_ADS;
