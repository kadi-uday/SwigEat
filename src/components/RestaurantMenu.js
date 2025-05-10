import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/const";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

if ( resInfo === null ) return <Shimmer />;

const { name , cuisines , costForTwoMessage , areaName, avgRatingString, totalRatingsString ,sla} = resInfo?.data?.cards[2]?.card?.card?.info;
const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu m-25 mx-20  p-5 px-20 font-['Segoe UI']">
            <h2 className="rest-name max-w-[850px] mx-auto text-3xl font-bold mt-[15px] mb-2.5 pr-20 text-center">{name}</h2>
            <div className="res-details bg-white p-5 my-5 mx-auto max-w-[850px] w-full rounded-[20px] shadow-xl border-[3px] border-[#eee] ">
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

            <h2 className="menu-list pl-[180px] mt-[40px] mb-3 font-bold text-2xl">Recommended</h2>
            <div className="dish-list max-w-[850px] my-0 mx-auto p-0">
                {itemCards.map((item) => (
                    <div key={item.card.info.id} className="dish-item mb-[30px]">
                        <div className="dish-content font-bold flex justify-between items-start gap-[30px] text-[18px]">
                            <div className="dish-info flex flex-col max-w-[500px] gap-[5px]"> 
                                <p className="dish-name">{item.card.info.name} </p>
                                <p className="dish-price ">₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}</p>
                                <p className="dish-description max-w-[500px] font-normal ">{ item.card.info.description? item.card.info.description.split(" ").slice(0,20).join(" ") : "No Description Available"} <span className="more text-[#434040]">...more</span> </p> 
                            </div>
                            <div className="dish-image-container flex flex-col items-center min-w-[150px] ">
                                <img src={`${CDN_URL}${item.card.info.imageId}`} alt={item.card.info.name} className="dish-image w-40 h-40 rounded-[8px] mb-2 mt-[-10px]"/>
                                <button className="add-button mt-[-10px] py-1.5 px-[25px] bg-white text-[#339f5e] border-[1px] border-[grey] rounded-[6px] font-bold cursor-pointer text-[18px] ">ADD</button>
                            </div>
                        </div>
                        <hr className="dish-divider border-b-2 border-gray-300 mt-5"></hr>
                    </div>
                ))}
            </div>
        </div>

       
    )
}

export default RestaurantMenu;