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
  <div className="px-4 mt-24 md:mt-28 lg:mt-32 min-h-screen">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-sans text-center mb-4">
        🛒 Your Cart
      </h1>

      <div className="w-full max-w-5xl mx-auto">
        {cartItems.length > 0 && (
          <button
            className="bg-red-500 text-white font-semibold text-sm md:text-base lg:text-lg px-4 py-2 mb-8 block mx-auto rounded-lg hover:bg-red-600 transition duration-200"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}

        {cartItems.length === 0 && (
          <h1 className="text-center text-base md:text-xl lg:text-2xl font-bold font-sans mt-4">
            Cart is Empty! Add Items to the cart.
          </h1>
        )}

        <ItemsList items={cartItems} />
      </div>
    </div>
    )
}

export default Cart;