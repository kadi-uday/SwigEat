import RestaurentCard from "./RestaurentCard";
import { useState , useEffect } from "react";

const Body = () => {

   const [listOfRestaurents , setListOfRestaurents] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");

   function handleSearch() {
     const filteredRes = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchQuery.toLowerCase())
     );
     setListOfRestaurents(filteredRes);
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
      setListOfRestaurents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }
   
    return (
       <div className="body">
         <div className="search-bar">
            <input type="text" placeholder="Enter restaurent name"
            value={searchQuery}
            onChange={(event) => {
               setSearchQuery(event.target.value)
            }}></input>
            <button onClick={handleSearch}>Search</button>
         </div>

          <div className="button">
            <button className="filtered-btn" onClick={ () => {
               const filteredRes = listOfRestaurents.filter(
                  (res) => res.info.avgRating > 4.5
               )
               setListOfRestaurents(filteredRes);
            }}>
               Top Rated Restaurents
            </button>
          </div>
          
          <div className="res-container">
             
            { listOfRestaurents.map((restaurent) => (
               <RestaurentCard key = {restaurent.info.id} resData={restaurent} />
             )) }

          </div>
       </div>
    )
 }

 export default Body;