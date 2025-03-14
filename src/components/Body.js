import RestaurentCard from "./RestaurentCard";

const Body = () => {
    return (
       <div className="body">
          <div className="search-bar"> Search</div>
 
          <div className="res-container">
             < RestaurentCard /> 
             < RestaurentCard /> 
             < RestaurentCard /> 
             < RestaurentCard /> 
             < RestaurentCard /> 
             < RestaurentCard /> 
             < RestaurentCard /> 
             < RestaurentCard /> 
             
          </div>
       </div>
    )
 }

 export default Body;