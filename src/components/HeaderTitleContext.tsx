import React, { createContext, useContext, useState } from "react";

interface HeaderTitleContextType {
  headerTitle: string;
  setHeaderTitle: (title: string) => void;
}

const HeaderTitleContext = createContext<HeaderTitleContextType>({
  headerTitle: "Zalo Mini App",
  setHeaderTitle: () => {},
});

export const HeaderTitleProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerTitle, setHeaderTitle] = useState("Zalo Mini App");

  return (
    <HeaderTitleContext.Provider value={{ headerTitle, setHeaderTitle }}>
      {children}
    </HeaderTitleContext.Provider>
  );
};

export const useHeaderTitle = () => useContext(HeaderTitleContext);
