import React from "react";
import ReactDOM from "react-dom/client";
import SwigEatlogo from "./src/SwigEat.png";

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

const RestaurentCard = () => {
   return(
      
      <div className="res-card">
            <div className="card-img"> 
               <img id="act-img" src ="https://b.zmtcdn.com/data/pictures/5/93455/17944045f4536262a7d7f6efbe285822_o2_featured_v2.jpg" alt="card image"></img>
            </div>
         <div className="res-info">  
         <h3>Pista House</h3>
         <h4>Biryani, South Indian, Chinese</h4>
         <h4>4.4</h4>
         <h4>25 min</h4>
         </div>
      </div>

   )
}

const Body = () => {
   return (
      <div className="body">
         <div className="search-bar"> Search</div>

         <div className="res-container">
            < RestaurentCard /> 
            < RestaurentCard /> 
            < RestaurentCard /> 
            < RestaurentCard /> 
            < RestaurentCard /> 
            < RestaurentCard /> 
            < RestaurentCard /> 
            < RestaurentCard /> 
            
         </div>
      </div>
   )
}
const AppLayout = () => {
   return (
      <div id="app">
         <Header/>
         < Body />
      </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< AppLayout/>);