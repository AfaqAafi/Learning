import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useResturantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  
  useEffect(() => {
    getMenuInfo();
  }, []);

  const getMenuInfo = async () => {
    const data = await fetch(MENU_API + id);
    const resp = await data.json();
    setResInfo(resp);
  };

  return resInfo;
};

export default useResturantMenu;
