import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

   const [listOfRestaurants , setListOfRestaurants] = useState([]);
   const [filteredRestaurants , setFilteredRestaurants] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");

   function handleSearch() {
     const filteredRes = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchQuery.toLowerCase())
     );
     setFilteredRestaurants(filteredRes);
   }
 
   useEffect( () =>{
      fetchData();
   },[]);

   const fetchData = async () => {
      const data = await fetch(
         " https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }
   
   if(listOfRestaurants.length === 0){
      return <Shimmer />
   }

    return (
       <div className="body">
         <div className="search-container">
         <div className="button">
               <button className="filtered-btn" onClick={ () => {
                  const filteredRes = listOfRestaurants.filter(
                     (res) => res.info.avgRating > 4.5
                  )
                  setFilteredRestaurants(filteredRes);
               }}>
                  Top Rated Restaurants
               </button>
            </div>

            <div className="search-bar">
               <input type="text" placeholder="Enter restaurent name"
               value={searchQuery}
               onChange={(event) => {
                  setSearchQuery(event.target.value)
               }}></input>
               <button onClick={handleSearch}>Search</button>
            </div>
         </div>
          
          <div className="res-container">
             
            { filteredRestaurants.map((restaurant) => (
               <RestaurantCard key = {restaurant.info.id} resData={restaurant} />
             )) }

          </div>
       </div>
    )
 }

 export default Body;