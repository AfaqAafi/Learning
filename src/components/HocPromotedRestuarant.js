import React from "react";

const HocPromotedRestuarant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-2xl cursor-pointer p-2 m-2 bg-black text-white  rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default HocPromotedRestuarant;
