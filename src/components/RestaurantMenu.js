import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex , setShowIndex] = useState(0);

if ( resInfo === null ) return <Shimmer />;

const { name , cuisines , costForTwoMessage , areaName, avgRatingString, totalRatingsString ,sla} = resInfo?.data?.cards[2]?.card?.card?.info;
const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
     <div className="menu  px-4 py-4 sm:px-6 md:px-10 lg:mx-20 lg:p-5 lg:px-20 font-['Segoe UI']">
      <h2 className="rest-name text-xl sm:text-2xl md:text-3xl font-bold text-center mt-28 mb-4 sm:mb-5 max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[66.66%] mx-auto">
        {name}
      </h2>

      <div className="res-details bg-white p-4 sm:p-6 md:p-8 my-4 sm:my-5 mx-auto w-full rounded-2xl shadow-xl border-[2px] border-[#eee] max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[75%]">

        <div className="res-meta flex flex-wrap gap-2 items-center text-sm sm:text-base md:text-lg font-bold mb-2">
          <span className="rating">
            <span className="green-star text-[#339f5e]">★</span> {avgRatingString} ({totalRatingsString})
          </span>
          <span>•</span>
          <span className="cost">{costForTwoMessage}</span>
        </div>

        <p className="cuisines text-[#FF5606] text-sm sm:text-base md:text-lg font-bold my-2">
          {cuisines.join(", ")}
        </p>

        <div className="outlet-details flex flex-col sm:flex-row sm:items-center text-sm sm:text-base md:text-lg font-bold mt-2 gap-1 sm:gap-4">
          <p className="area">
            Outlet:{" "}
            <span className="ml-1 sm:ml-2 font-normal">{areaName}</span>
          </p>
        </div>

        <p className="time font-bold text-sm sm:text-base md:text-lg mt-2">
          {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins
        </p>
      </div>

      <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category.card.card}
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>
    </div>
       
    )
}

export default RestaurantMenu;