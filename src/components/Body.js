import React, { useEffect, useState } from "react";
import Restaurantcard from "./Restaurantcard";
import Shimmar from "./Shimmar";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResturant from "../utils/useResturant";
import HocPromotedRestuarant from "./HocPromotedRestuarant";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const { listRestuarants, filterRest, setFilterRest } = useResturant();
  const onlineStatus = useOnlineStatus();
  const IsPromotedComp = HocPromotedRestuarant(Restaurantcard);

  if (onlineStatus === false) {
    return (
      <div className="body_container">
        <h1>You are offline, Please check your network</h1>;
      </div>
    );
  }

  if (listRestuarants?.length === 0) {
    return <Shimmar />;
  }

  return (
    <div className="px-4 lg:px-24 mt-10 pb-24">
      <div className="flex lg:flex-row flex-col items-center gap-3 mt-6">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <input
            className="border text-[19px] border-slate-500 pr-24 pl-2 py-3"
            type="text"
            name=""
            id=""
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="px-3 py-3 bg-slate-500 text-2xl text-white"
            onClick={() =>
              setFilterRest(
                listRestuarants?.filter((resCard) =>
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
          className="px-3 py-2 bg-slate-500 text-2xl text-white"
          onClick={() =>
            setFilterRest((listRestuarants) =>
              listRestuarants?.filter((res) => res?.data?.avgRating > 4.3)
            )
          }
        >
          High Rated Restuarants
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center lg:justify-between gap-3 mt-10">
        {/* //* if restuarant card is promoted present then render otherwise won't  */}

        {filterRest?.map((resList) =>
          resList?.data?.promoted ? (
            <IsPromotedComp key={resList?.data?.id} resList={resList} />
          ) : (
            <Restaurantcard key={resList?.data?.id} resList={resList} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
