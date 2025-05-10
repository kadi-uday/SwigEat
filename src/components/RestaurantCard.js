import { CDN_URL } from "../utils/const";


const RestaurantCard = (props) => {
   
   const {resData} = props;
   const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData?.info;

    return(
       
       <div className="res-card w-71 h-auto bg-[#fff] rounded-xl overflow-hidden cursor-pointer transition duration-200 ease-in-out shadow-md transform hover:scale-103 hover:shadow-2xl">
         
             <div className="card-img w-full h-[170px] overflow-hidden flex justify-center items-center "> 
                <img className="act-img w-full h-full rounded-bl-xl rounded-br-xl" src = { CDN_URL + cloudinaryImageId } alt="card image"></img>
             </div>
          <div className="res-info p-4 font-['Segoe UI']">  
          <h3 className="text-[20px] font-bold mb-3">{name}</h3>
          <h4 >{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo} </h4>
          <h4>{ sla?.slaString} </h4>
          </div>
       </div>
 
    )
 }

 export default RestaurantCard;