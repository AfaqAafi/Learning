import React from "react";
import { useParams } from "react-router-dom";
import Shimmar from "./Shimmar";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {
  const { id } = useParams();

  const resInfo = useResturantMenu(id);

  if (resInfo === null) return <Shimmar />;

  const { name, cuisines } = resInfo?.data?.cards[0]?.card?.card?.info;

  const category =
    resInfo?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ||
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="px-4 lg:px-24 mt-10 pb-20">
      <div className="max-w-[1580] mx-auto">
        <h3 className="font-bold text-center mt-6 text-2xl">{name}</h3>
        <p className="font-bold text-lg text-center mb-7">
          {cuisines.join(", ")}
        </p>

        {category?.map((itemList) => {
          return (
            <ResturantCategory
              key={itemList.card.card.title}
              itemList={itemList}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResturantMenu;
