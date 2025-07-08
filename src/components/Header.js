import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

const [btnName , setBtnName] = useState("Login");
// const SwigEatlogo = new URL("../utils/SwigEat.png", import.meta.url).href;
const [menuOpen, setMenuOpen] = useState(false);
const onlineStatus = useOnlineStatus();
const {loggedInUser} = useContext(UserContext);
// console.log(loggedInUser);

const cartItems = useSelector((store) => store.cart.items || []);
// console.log(cartItems);

   return (
    <header className="fixed top-0 w-full bg-white z-50 shadow-md overflow-x-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 py-2">

        <div className="flex w-full lg:w-auto justify-between items-center">
          <img
            className="w-16 h-16 md:w-16 md:h-16 lg:w-[100px] lg:h-[100px] object-contain"
            src="https://dynamic.design.com/preview/logodraft/395abbee-2dd3-4ad2-85bc-693808066056/image/large.png"
            alt="logo"
          />

          <button className="text-xl p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>

      <div className={`${menuOpen ? "translate-x-0" : "-translate-x-full"} fixed top-[70px] left-0 w-full bg-gray-100 lg:bg-white z-40 transition-transform duration-300 ease-in-out flex flex-col lg:flex lg:flex-row lg:static lg:translate-x-0 items-start lg:items-center justify-start lg:justify-end px-4 py-2 text-[15px] md:text-[16px] lg:text-[20px] font-bold font-['Segoe UI']`}>

        <ul className="flex flex-col lg:flex-row gap-2 md:gap-[2px] lg:gap-4 font-bold text-[15px] md:text-[16px] md:flex-wrap lg:text-[20px] font-['Segoe UI']">
        <li className="p-2">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>

        <li className="p-2 hover:text-[#FF5606] hover:underline">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>

        <li className="p-2 hover:text-[#FF5606] hover:underline">
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        </li>

        <li className="p-2 hover:text-[#FF5606] hover:underline">
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </li>

        <li className="p-2 hover:text-[#FF5606] hover:underline ">
          <Link to="/grocery" onClick={() => setMenuOpen(false)}>Grocery</Link>
        </li>

        <li className="p-2 hover:text-[#FF5606] hover:underline">
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faCartShopping} /> ({cartItems.length} items)
          </Link>
        </li>

        <li className="p-2 hover:text-[#FF5606] hover:underline">
          <button onClick={() => setBtnName(prev => prev === "Login" ? "Logout" : "Login")}>
            {btnName}
          </button>
        </li>

        <li className="p-2">{loggedInUser}</li>
        </ul>
      </div>
      </div>
    </header>
   )
}

export default Header;