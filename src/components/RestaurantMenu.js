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
        <div className="menu m-25 mx-20  p-5 px-20 font-['Segoe UI']">
            <h2 className="rest-name max-w-[66.66%] mx-auto text-3xl font-bold mt-32 mb-2.5 pr-20 text-center">{name}</h2>
            <div className="res-details bg-white p-5 my-5 mx-auto max-w-[75%] w-full rounded-[20px] shadow-xl border-[3px] border-[#eee] ">
    <           div className="res-meta flex items-center gap-2.5 font-bold text-[18px] mb-2.5">
                    <span className="rating"><span className="green-star text-[#339f5e] text-[18px] my-2 mx-0">★</span> {avgRatingString} ({totalRatingsString})</span>
                    <span>•</span>
                    <span className="cost">{costForTwoMessage}</span>
                </div>

                    <p className="cuisines text-[#FF5606] text-base text-[18px] font-bold my-2 mx-0">{cuisines.join(", ")}</p>

                    <div className="outlet-details flex items-center text-[18px] mt-2.5 font-bold">
                        <p className="area">Outlet <span className="bold ml-[15px] font-normal text-[18px]">{areaName}</span></p>
                    </div>
                    <p className="time font-bold text-[18px] mt-2.5">{sla.minDeliveryTime}-{sla.maxDeliveryTime} mins</p>
                </div>
                <div>
                    {categories.map((category, index) => (
                        <RestaurantCategory key={category.card.card.title} data = {category?.card?.card} showItems= {index === showIndex?true : false} setShowIndex = {() => setShowIndex(index === showIndex ? null : index)} />
                    ))}
                </div>
        </div>
       
    )
}

export default RestaurantMenu;