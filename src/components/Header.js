import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

const [btnName , setBtnName] = useState("Login");
const SwigEatlogo = new URL("../utils/SwigEat.png", import.meta.url).href;
const onlineStatus = useOnlineStatus();

   return (
      <header className="fixed top-0 w-full bg-white z-50 shadow-md">
      <div className="flex justify-between broder-black">
         
         <img  className="w-[100px] h-[100px]" id="img-logo" src = {SwigEatlogo} alt="logo"></img> 

         <div className="px-[21px] py-[16px]">
               <ul className="flex gap-[7px] text-[20px] font-bold font-['Segoe UI'] list-none">  

                  <li className="p-2 m-2.5">
                     Online Status: {onlineStatus? "🟢" : "🔴"}
                  </li>

                  <li className="p-2 m-2.5 hover:text-[#FF5606] hover:cursor-pointer">
                   <Link className="res-card-link" to="/" >Home</Link>
                  </li>

                  <li className="p-2 m-2.5 hover:text-[#FF5606] hover:cursor-pointer">
                     <Link className="res-card-link " to="/about">About Us</Link>
                  </li>

                  <li className="p-2 m-2.5 hover:text-[#FF5606] hover:cursor-pointer">
                     <Link className="res-card-link " to="/contact">Contact Us</Link>
                  </li>

                  <li className="p-2 m-2.5 hover:text-[#FF5606] hover:cursor-pointer">
                     <Link className="res-card-link " to="/grocery">Grocery</Link>
                  </li>

                  <li className="p-2 m-2.5 hover:text-[#FF5606] hover:cursor-pointer">Cart</li>
                  
                  <button className="w-20 h-11 mt-[10px] text-[18px] font-extrabold pb-[3px] cursor-pointer bg-black text-white rounded-[5px] border-none font-sans" onClick={() => {
                     btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                  }}>
                     {btnName}
                  </button>
               </ul>
         </div> 

      </div>
      </header>
   )
}

export default Header;