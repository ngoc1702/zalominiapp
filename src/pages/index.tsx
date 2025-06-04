import { Page } from "zmp-ui";

import { useEffect } from "react";
import BANNER from "@/components/banner";
import INTRO from "@/components/intro";
import SERVICE from "@/components/service";

function HomePage() {

  return (
    <Page
      className="flex flex-col pt-28 pb-[100px] px-3 space-y-6 bg-cover bg-center bg-no-repeat bg-white dark:bg-black h-screen overflow-y-auto"
    >
      <BANNER />
      <INTRO />
      <SERVICE />
    </Page>
  );
}

export default HomePage;
