import { CDN_URL } from "../utils/const";


const RestaurantCard = (props) => {
   
   const {resData} = props;
   const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData?.info;

    return(
       
       <div className="res-card">
             <div className="card-img"> 
                <img id="act-img" src = { CDN_URL + cloudinaryImageId } alt="card image"></img>
             </div>
          <div className="res-info">  
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo} </h4>
          <h4>{ sla?.slaString} </h4>
          </div>
       </div>
 
    )
 }

 export default RestaurantCard;