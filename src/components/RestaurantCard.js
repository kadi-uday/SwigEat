import { CDN_URL } from "../utils/const";


const RestaurantCard = (props) => {
   
   const {resData} = props;
   const {name,cloudinaryImageId,cuisines,avgRating,costForTwo,sla} =resData?.info;

    return(
       
<div
  data-testid="resCard"
  className="res-card w-full h-auto bg-white rounded-xl overflow-hidden cursor-pointer transition duration-200 ease-in-out shadow-md transform hover:scale-105 hover:shadow-2xl"
>
  <div className="card-img w-full h-36 sm:h-40 md:h-44 lg:h-[170px] overflow-hidden flex justify-center items-center">
    <img
      className="act-img w-full h-full object-cover rounded-bl-xl rounded-br-xl "
      src={CDN_URL + cloudinaryImageId}
      alt="card image"
    />
  </div>

  <div className="res-info p-3 sm:p-4 font-['Segoe UI']">
    <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-bold mb-2 sm:mb-3">{name}</h3>
    <h4 className="text-sm sm:text-base truncate overflow-hidden whitespace-nowrap w-full">{cuisines.join(", ")}</h4>
    <h4 className="text-sm sm:text-base">{avgRating} stars</h4>
    <h4 className="text-sm sm:text-base">{costForTwo}</h4>
    <h4 className="text-sm sm:text-base">{sla?.slaString}</h4>
  </div>
</div>
 
    )
 }

 export default RestaurantCard;