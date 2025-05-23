import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

const [btnName , setBtnName] = useState("Login");
// const SwigEatlogo = new URL("../utils/SwigEat.png", import.meta.url).href;
const onlineStatus = useOnlineStatus();
const {loggedInUser} = useContext(UserContext);
// console.log(loggedInUser);

const cartItems = useSelector((store) => store.cart.items);
// console.log(cartItems);

   return (
      <header className="fixed top-0 w-full bg-white z-50 shadow-md">
      <div className="flex justify-between items-center px-4 py-2">
         
         <img  className="w-[100px] h-[100px] object-contain" id="img-logo" src = "https://dynamic.design.com/preview/logodraft/395abbee-2dd3-4ad2-85bc-693808066056/image/large.png" alt="logo"></img> 

         <div className="px-[21px] py-[16px]">
               <ul className="flex gap-[7px] text-[20px] font-bold font-['Segoe UI'] list-none">  

                  <li className="p-2 m-2.5">
                     Online Status: {onlineStatus? "🟢" : "🔴"}
                  </li>

                  <li className="p-2 m-2.5 hover:text-[#FF5606] hover:cursor-pointer hover:underline">
                   <Link className="res-card-link" to="/" >Home</Link>
                  </li>

                  <li className="p-2 m-2.5 hover:text-[#FF5606] hover:cursor-pointer hover:underline">
                     <Link className="res-card-link " to="/about">About Us</Link>
                  </li>

                  <li className="p-2 m-2.5 hover:text-[#FF5606] hover:cursor-pointer hover:underline">
                     <Link className="res-card-link " to="/contact">Contact Us</Link>
                  </li>

                  <li className="p-2 m-2.5 hover:text-[#FF5606] hover:cursor-pointer hover:underline">
                     <Link className="res-card-link " to="/grocery">Grocery</Link>
                  </li>

                  <li className="p-2 m-2.5 hover:text-[#FF5606] hover:cursor-pointer hover:underline"> 
                     <Link className="res-card-link " to="/cart"><FontAwesomeIcon icon={faCartShopping} /> ({cartItems.length} items)</Link>
                  </li>
                  
                  <button className="p-2 m-2.5 hover:text-[#FF5606] hover:cursor-pointer hover:underline" onClick={() => {
                     btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                  }}>
                     {btnName}
                  </button>

                  <li className="p-2 m-2.5 mr-[-10px]">{loggedInUser}</li>
               </ul>
         </div> 

      </div>
      </header>
   )
}

export default Header;