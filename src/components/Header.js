import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

const [btnName , setBtnName] = useState("Login");
const SwigEatlogo = new URL("../utils/SwigEat.png", import.meta.url).href;
const onlineStatus = useOnlineStatus();

   return (
      
      <div className="header">
         
         <img id="img-logo" src = {SwigEatlogo} alt="logo"></img> 

         <div className="nav-container">
               <ul id="list-container">
                  <li className="online">
                     Online Status: {onlineStatus? "🟢" : "🔴"}
                  </li>
                  <li>
                   <Link className="res-card-link" to="/" >Home</Link>
                  </li>
                  <li>
                     <Link className="res-card-link " to="/about">About Us</Link>
                  </li>
                  <li>
                     <Link className="res-card-link " to="/contact">Contact Us</Link>
                  </li>
                  <li>Cart</li>
                  <button className="login" onClick={() => {
                     btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                  }}>
                     {btnName}
                  </button>
               </ul>
         </div> 

      </div>
   )
}

export default Header;