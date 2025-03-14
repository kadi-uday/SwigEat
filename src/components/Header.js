import SwigEatlogo from "../utils/SwigEat.png";

const Header = () => {
   return (
      <div className="header">
         
         <img id="img-logo" src = {SwigEatlogo} alt="logo"></img>

         <div className="nav-container">
               <ul id="list-container">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Cart</li>
               </ul>
         </div> 

      </div>
   )
}

export default Header;