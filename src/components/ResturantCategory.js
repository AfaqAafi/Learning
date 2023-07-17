import React, { useState } from "react";
import ItemListComp from "./ItemListComp";
const ResturantCategory = ({ itemList }) => {
  const [showCategory, setShowCategory] = useState(false);

  const handlerItemList = () => {
    setShowCategory(!showCategory);
  };

  return (
    <div className="bg-gray-200 mb-4 p-3 rounded shadow-md">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handlerItemList}
      >
        <h2 className="text-2xl font-bold">
          {itemList?.card?.card?.title} (
          {itemList?.card?.card?.itemCards?.length}){" "}
        </h2>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="true"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>

      {showCategory && <ItemListComp itemList={itemList.card.card.itemCards} />}
    </div>
  );
};

export default ResturantCategory;
