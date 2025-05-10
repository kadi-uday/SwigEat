import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import WhatsOnYourMind from "./WhatsOnYourMind";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
   const onlineStatus = useOnlineStatus();
   if(onlineStatus === false){
      return <h1>OPPS!!! YOU ARE OFFLINE. <br></br> PLEASE CHECK YOUR INTERNET CONNECTION.</h1>
   }

   if(listOfRestaurants.length === 0){
      return <Shimmer />
   }

    return (
       <div className="body">
         <div className="flex gap-4 items-center mt-2">
         <div className=" m-4">
               <button className="  w-48 h-10 ml-32 mt-30 my-[5px] mb-[20px] bg-[#fc8019] text-white font-bold px-[10px] py-[6px] rounded-[5px] cursor-pointer transition duration-200 ease-in-out hover:bg-[#fa6e00] active:scale-95 active:bg-[#e65100] font-['Segoe UI']" onClick={ () => {
                  const filteredRes = listOfRestaurants.filter(
                     (res) => res.info.avgRating > 4.5
                  )
                  setFilteredRestaurants(filteredRes);
               }}>
                  Top Rated Restaurants
               </button>
            </div>

            <div className=" flex gap-2 items-center m-4 ">
               <input className="p-2 w-54 h-10 border mt-25 border-gray-400 rounded-md text-lg" type="text" placeholder="Enter restaurent name"
               value={searchQuery}
               onChange={(event) => {
                  setSearchQuery(event.target.value)
               }}></input>
               <button className=" flex w-24 mt-25 h-10 px-[22px] py-1.5 bg-blue-500 text-white rounded-md cursor-pointer text-lg hover:bg-blue-700" onClick={handleSearch}>Search</button>
            </div>
         </div>
         
         <div className="mind-heading font-['Segoe_UI'] pl-36 mt-6 text-2xl font-bold">
            <h2>What's on your mind?</h2>
         </div>
         <div className="mind-container flex flex-nowrap overflow-x-auto px-20 gap-4 mt-[-70px] ">
            {mindData.slice(0,8).map((item) => (
               <WhatsOnYourMind key={item.id} itemData = {item} />
            ) )}
         </div>
         <div className="res-heading  pl-35 mt-1">
            <h2 className="font-['Segoe_UI'] font-bold text-2xl">Restaurants with online food delivery </h2>
         </div>
          
          <div className="res-container grid grid-cols-4 gap-7 p-5 px-36 bg-[#f9f9f9]">
             
            { filteredRestaurants.map((restaurant) => (
              <Link className="res-card-link " key = {restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> <RestaurantCard resData={restaurant} /> </Link> 
             )) }

          </div>
       </div>
    )
 }

 export default Body;