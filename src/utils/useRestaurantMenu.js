import {useState, useEffect} from "react";
import { MENU_API } from "./const";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect( ()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch( MENU_API + resId);
        const json = await data.json();
        setResInfo(json);
    };
   
    return resInfo;
};

export default useRestaurantMenu;
