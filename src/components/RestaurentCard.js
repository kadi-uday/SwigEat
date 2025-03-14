import { CARD_IMG_URL } from "../utils/const";

const RestaurentCard = () => {
    return(
       
       <div className="res-card">
             <div className="card-img"> 
                <img id="act-img" src ={CARD_IMG_URL} alt="card image"></img>
             </div>
          <div className="res-info">  
          <h3>Pista House</h3>
          <h4>Biryani, South Indian, Chinese</h4>
          <h4>4.4</h4>
          <h4>25 min</h4>
          </div>
       </div>
 
    )
 }

 export default RestaurentCard;