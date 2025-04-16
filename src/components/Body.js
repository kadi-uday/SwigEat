import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import WhatsOnYourMind from "./WhatsOnYourMind";
import { Link } from "react-router-dom";

const Body = () => {

   const [listOfRestaurants , setListOfRestaurants] = useState([]);
   const [filteredRestaurants , setFilteredRestaurants] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");
   const [mindData , setMindData] = useState([]);

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

      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setMindData(json?.data?.cards[0]?.card.card.imageGridCards?.info);   
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
         
         <div className="mind-heading">
            <h2>What's on your mind?</h2>
         </div>
         <div className="mind-container">
            {mindData.slice(0,7).map((item) => (
               <WhatsOnYourMind key={item.id} itemData = {item} />
            ) )}
         </div>
         <div className="res-heading">
            <h2>Restaurants with online food delivery </h2>
         </div>
          
          <div className="res-container">
             
            { filteredRestaurants.map((restaurant) => (
              <Link className="res-card-link" key = {restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> <RestaurantCard resData={restaurant} /> </Link> 
             )) }

          </div>
       </div>
    )
 }

 export default Body;