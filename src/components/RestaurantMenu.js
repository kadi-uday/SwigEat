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
        <div className="menu">
            <h2 className="rest-name">{name}</h2>
            <div className="res-details">
    <           div className="res-meta">
                    <span className="rating"><span className="green-star">★</span> {avgRatingString} ({totalRatingsString})</span>
                    <span>•</span>
                    <span className="cost">{costForTwoMessage}</span>
                </div>

                    <p className="cuisines">{cuisines.join(", ")}</p>

                    <div className="outlet-details">
                        <p className="area">Outlet <span className="bold">{areaName}</span></p>
                    </div>
                    <p className="time">{sla.minDeliveryTime}-{sla.maxDeliveryTime} mins</p>
                </div>

            <h2 className="menu-list">Recommended</h2>
            <div className="dish-list">
                {itemCards.map((item) => (
                    <div key={item.card.info.id} className="dish-item">
                        <div className="dish-content">
                            <div className="dish-info"> 
                                <p className="dish-name">{item.card.info.name} </p>
                                <p className="dish-price">₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}</p>
                                <p className="dish-description">{ item.card.info.description? item.card.info.description.split(" ").slice(0,20).join(" ") : "No Description Available"} <span className="more">...more</span> </p> 
                            </div>
                            <div className="dish-image-container">
                                <img src={`${CDN_URL}${item.card.info.imageId}`} alt={item.card.info.name} className="dish-image"/>
                                <button className="add-button">ADD</button>
                            </div>
                        </div>
                        <hr className="dish-divider"></hr>
                    </div>
                ))}
            </div>
        </div>

       
    )
}

export default RestaurantMenu;