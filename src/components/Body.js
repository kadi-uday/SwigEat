import RestaurantCard from "./RestaurantCard";
import { useState , useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import WhatsOnYourMind from "./WhatsOnYourMind";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

   const [listOfRestaurants , setListOfRestaurants] = useState([]);
   const [filteredRestaurants , setFilteredRestaurants] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");
   const [mindData , setMindData] = useState([]);
   const {loggedInUser, setUserName} = useContext(UserContext);

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
      console.log(data);
      
      const json = await data.json();

      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setMindData(json?.data?.cards[0]?.card.card.imageGridCards?.info);   
   }
   const onlineStatus = useOnlineStatus();
   if(onlineStatus === false){
      return <h1>OPPS!!! YOU ARE OFFLINE. <br></br> PLEASE CHECK YOUR INTERNET CONNECTION.</h1>
   }

   if(!listOfRestaurants || listOfRestaurants.length === 0 ){
      return <Shimmer />
   }

   return (
    <div className="body px-4 lg:px-36 py-4">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-20 md:mt-24 lg:mt-32 w-full">
  
  <div className="w-full md:w-[32%]">
    <button
      className="w-full h-10 bg-[#fc8019] text-white font-bold px-4 py-2 rounded-md cursor-pointer transition duration-200 ease-in-out hover:bg-[#fa6e00] active:scale-95 active:bg-[#e65100] font-['Segoe UI']"
      onClick={() => {
        const filteredRes = listOfRestaurants.filter(
          (res) => res.info.avgRating > 4.5
        );
        setFilteredRestaurants(filteredRes);
      }}
    >
      Top Rated Restaurants
    </button>
  </div>

  <div className="w-full md:w-[32%] flex flex-col sm:flex-row gap-2">
    <input
      data-testid="searchInput"
      className="p-2 h-10 border border-gray-400 rounded-md text-base w-full"
      type="text"
      placeholder="Enter restaurant name"
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
    />
    <button
      className="w-full sm:w-24 h-10 bg-blue-500 text-white rounded-md text-base hover:bg-blue-700"
      onClick={handleSearch}
    >
      Search
    </button>
  </div>

  <div className="w-full md:w-[32%] flex flex-col sm:flex-row gap-2 items-center">
    <label className="text-base lg:text-lg font-bold whitespace-nowrap">User Name:</label>
    <input
      className="p-2 h-10 border border-gray-400 rounded-md text-base w-full"
      type="text"
      placeholder="Enter name"
      value={loggedInUser}
      onChange={(e) => setUserName(e.target.value)}
    />
  </div>
</div>

      <div className="mt-6 md:mt-8 lg:mt-10">
         <h2 className="font-['Segoe UI'] text-xl md:text-xl lg:text-2xl font-bold text-center md:text-start lg:text-start">
            What's on your mind?
         </h2>
         <div className="flex flex-nowrap overflow-x-auto gap-4 lg:gap-7 ">
            {mindData.slice(0, 9).map((item) => (
            <WhatsOnYourMind key={item.id} itemData={item} />
            ))}
         </div>
      </div>

      <div className="mt-0 md:mt-0 lg:mt-4">
         <h2 className="font-['Segoe UI'] text-xl lg:text-2xl font-bold">
            Restaurants with online food delivery
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 bg-[#f9f9f9] p-4 rounded-md">
            {filteredRestaurants.map((restaurant) => (
            <Link
               className="res-card-link"
               key={restaurant.info.id}
               to={"/restaurants/" + restaurant.info.id}
            >
               <RestaurantCard resData={restaurant} />
            </Link>
            ))}
         </div>
    </div>
    </div>

   )
 }

 export default Body;