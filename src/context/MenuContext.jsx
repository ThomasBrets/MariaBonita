import React, { useEffect, createContext, useState } from "react";

// Data
import { menuData } from "../data";

// Create Context
const menuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(menuData);

  console.log("MENU", menu);

  return (
    <menuContext.Provider value={{ menu, setMenu }}>
      {children}
    </menuContext.Provider>
  );
};

export default MenuProvider;
