import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider, Outlet } from "react-router-dom";
import { lazy , Suspense} from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";

/**
 *  when ever user needs then only show or load the code ie js file. this is also called as 
 *    Chunking, Code Splitting, Dynamic Bundling, Lazy Loading, Demand Loading.
 */

const Grocery = lazy( () => import("./components/Grocery")); // this is also called as Dynamic Importing.

const AppLayout = () => {
   // autentication
   const [userName , setUserName] = useState();
   useEffect(() => {
      // make an API call and send user name and password
      const data = {
         name : "Kadi Uday", 
      };
      setUserName(data.name);
   }, []);

   return (
      <Provider store = {appStore}>
         <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="min-h-screen overflow-auto bg-white">
               <div id="app">
                  <Header/>
                  < Outlet />
               </div>
            </div>
         </UserContext.Provider>
      </Provider>
   )
}

const appRouter = createBrowserRouter( [
   {
      path: "/",
      element: <AppLayout />,
      children : [
         { 
            path: "/",
            element: <Body />,
         },
         {
            path: "/about",
            element: <About />,
         },
         {
            path: "/contact",
            element:<Contact />,
         },
         {
            path: "/grocery",
            element:(
            <Suspense fallback= {<h1>Loading...</h1>}  ><Grocery /></Suspense>
            ),
         },
         {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />,
         },
         {
            path: "/cart",
            element: <Cart />,
         },
      ],
      errorElement: < Error />,
   },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( < RouterProvider router = {appRouter} />);