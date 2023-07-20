import React from "react";
import { CDN_URL } from "../utils/constant";

const ItemListComp = ({ itemList }) => {
  return (
    <div>
      {itemList?.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex flex-col lg:flex-row items-center justify-between"
        >
          <div>
            <div className="py-2">
              <span className="text-[23px]">{item.card.info.name}</span>
              <span className="text-[19px]">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-[17px] text-gray-500 leading-8">
              {item.card.info.description}
            </p>
          </div>
          <div className="p-4 relative">
            <div className="absolute top-0 left-0">
              <button className="p-2 rounded-lg bg-black text-white shadow-lg">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListComp;
