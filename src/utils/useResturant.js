import { useEffect, useState } from "react";
import { SWIGGY_API } from "./constant";

const useResturant = () => {
  const [listRestuarants, setListRestuarants] = useState([]);
  const [filterRest, setFilterRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await fetch(SWIGGY_API);
    const myResp = await resp.json();
    setListRestuarants(myResp?.data?.cards[2]?.data?.data?.cards);
    setFilterRest(myResp?.data?.cards[2]?.data?.data?.cards);
  };

  return { listRestuarants, filterRest, setFilterRest, setListRestuarants };
};

export default useResturant;
