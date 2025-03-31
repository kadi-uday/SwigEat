import SwigEatlogo from "../utils/SwigEat.png";
import { useState } from "react";

const Header = () => {

const [btnName , setBtnName] = useState("Login");

   return (
      <div className="header">
         
         <img id="img-logo" src = {SwigEatlogo} alt="logo"></img>

         <div className="nav-container">
               <ul id="list-container">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
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