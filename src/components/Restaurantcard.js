import React from "react";
import { useNavigate } from "react-router-dom";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resList }) => {
  const navigation = useNavigate();
  const {
    id,
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resList?.data;

  return (
    <div
      className="max-w-[460px] mx-auto rounded overflow-hidden shadow-lg cursor-pointer
       hover:shadow-xl transition duration-300 p-4"
      onClick={() => navigation(`/restuarant/${id}`)}
    >
      <img
        className="w-full h-full object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt="myimages"
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <h4 className="text-gray-600 text-[19px] mb-2">
          {cuisines.join(", ")}
        </h4>
        <div className="flex gap-2 items-center mb-2">
          <svg
            className="w-8 h-8 text-yellow-500 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 16.67l-5.15 3.84 1.65-5.43L.83 7.34l5.45-.42L10 .76l2.72 6.16 5.45.42-4.67 4.74 1.65 5.43L10 16.67zm0-1.76l3.92 2.92-1.26-4.13 3.33-2.71-4.36-.34L10 5.29 8.37 1.99l-4.36.34 3.33 2.71L7.34 12l-1.26 4.13L10 14.91z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-gray-700 text-[18px]">{avgRating} stars</span>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            className="w-8 h-8 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 16a6 6 0 100-12 6 6 0 000 12zm0 1a7 7 0 110-14 7 7 0 010 14zm-3-8a1 1 0 112 0v2a1 1 0 11-2 0v-2zm4 0a1 1 0 112 0v2a1 1 0 11-2 0v-2zm3-2a1 1 0 00-1-1h-8a1 1 0 100 2h8a1 1 0 001-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-gray-700 text-[18px]">
            {costForTwo / 100} FOR TWO
          </span>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <svg
            className="w-8 h-8  text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm0-9a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-gray-700 text-[18px]">
            {deliveryTime} minutes
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
