import React from "react";
import { CDN_URL } from "../utils/constant";

const Restaurantcard = ({ resList }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resList?.data;
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt="myimages" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default Restaurantcard;
