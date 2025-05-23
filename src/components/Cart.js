import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import ItemsList from "./ItemsList";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return ( 
    <div className=" m-4 p-4 mt-32">
        <h1 className="text-3xl font-extrabold font-sans text-center mb-4">🛒 Your Cart</h1>
        <div className="w-9/12 m-auto"> 
            {cartItems.length >0  && 
                <button className="bg-red-500 text-center text-lg text-white font-bold px-4 py-2 m-3 mb-10 block mx-auto rounded-lg hover:bg-red-600 transition translate-x-7" onClick={handleClearCart}>
                    Clear Cart
                </button>
            } 
            {cartItems.length === 0 && <h1 className=" m-2 text-2xl text-center font-bold font-sans">Cart is Empty! Add Items to the cart.</h1>}
            <ItemsList items={cartItems} />
        </div>
    </div>
    )
}

export default Cart;