import { CDN_URL } from "../utils/const";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({items}) => {
    
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div  className="dish-list max-w-[850px] my-0 mx-auto p-0">
                {items.map((item) => (
                    <div data-testid="foodItems" key={item?.card?.info?.id} className="dish-item mb-[30px]">
                        <div className="dish-content font-bold flex justify-between items-start gap-[30px] text-[18px]">
                            <div className="dish-info flex flex-col max-w-[500px] gap-[5px] "> 
                                <p className="dish-name mt-4">{item.card.info.name} </p>
                                <p className="dish-price ">₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}</p>
                                <p className="dish-description max-w-[500px] font-normal ">{ item.card.info.description? item.card.info.description.split(" ").slice(0,20).join(" ") : "No Description Available"} <span className="more text-[#434040]">...more</span> </p> 
                            </div>
                            <div className="dish-image-container flex flex-col items-center min-w-[150px] ">
                                <img src={`${CDN_URL}${item.card.info.imageId}`} alt={item.card.info.name} className="dish-image w-40 h-40 rounded-[8px] mb-2 mt-2"/>
                                <button className="add-button  py-1.5 px-[25px] bg-white text-[#339f5e] border-[1px] border-[grey] rounded-[6px] font-bold cursor-pointer text-[18px]" onClick={() => handleAddItem(item)} >ADD</button>
                            </div>
                        </div>
                        <hr className="dish-divider border-b-2 border-gray-300 mt-5"></hr>
                    </div>
                ))}
            </div>
    )
}

export default ItemsList;