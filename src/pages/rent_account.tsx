
import INTRO_RENTACC from "@/components/intro_rentacc";
import TABLE_RENTACC from "@/components/table_rentacc";

import { Box, Button, Icon, Page, Text } from "zmp-ui";

function RENT_ACCOUNT() {
  return (
    <div className="flex flex-col pt-28 pb-[100px] px-3 space-y-6 bg-cover bg-center bg-no-repeat bg-white dark:bg-black h-screen overflow-y-auto">
   <INTRO_RENTACC/>
   <TABLE_RENTACC/>
    </div>
  );
}
export default RENT_ACCOUNT;
