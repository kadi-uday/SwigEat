import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

const [btnName , setBtnName] = useState("Login");
const SwigEatlogo = new URL("../utils/SwigEat.png", import.meta.url).href;


   return (
      
      <div className="header">
         
         <img id="img-logo" src = {SwigEatlogo} alt="logo"></img> 

         <div className="nav-container">
               <ul id="list-container">
                  <li>
                   <Link to="/" >Home</Link>
                  </li>
                  <li>
                     <Link to="/about">About Us</Link>
                  </li>
                  <li>
                     <Link to="/contact">Contact Us</Link>
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