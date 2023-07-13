import React, { useEffect, useState } from "react";
import Restaurantcard from "./Restaurantcard";
import Shimmar from "./Shimmar";

const Body = () => {
  const [listRestuarants, setListRestuarants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterRest, setFilterRest] = useState([]);

  console.log("afaq");
  // console.log("afaq");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const myResp = await resp.json();
    setListRestuarants(myResp?.data?.cards[2]?.data?.data?.cards);
    setFilterRest(myResp?.data?.cards[2]?.data?.data?.cards);
  };

  if (listRestuarants?.length === 0) {
    return <Shimmar />;
  }

  return (
    <div className="body_container">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            name=""
            id=""
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="auth"
            onClick={() =>
              setFilterRest(
                listRestuarants.filter((resCard) =>
                  resCard.data.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
                )
              )
            }
          >
            Search
          </button>
        </div>
        <button
          className="filter_btn"
          onClick={() =>
            setListRestuarants(
              listRestuarants.filter((res) => res?.data?.avgRating > 4.3)
            )
          }
        >
          High Rated Restuarants
        </button>
      </div>
      <div className="restaurant_card_container">
        {filterRest?.map((resList) => (
          <Restaurantcard key={resList.data.id} resList={resList} />
        ))}
      </div>
    </div>
  );
};

export default Body;
