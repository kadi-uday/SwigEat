import { CDN_URL } from "../utils/const";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({items}) => {
    
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
<div className="dish-list w-full max-w-5xl mx-auto px-4 ml-3 md:ml-6 lg:ml-36">
  {items.map((item) => (
    <div key={item?.card?.info?.id} className="mb-8 border-b pb-6">
      <div className="flex flex-row justify-between gap-4">

        <div className="w-full sm:w-2/3">
          <p className="text-sm md:text-lg font-bold lg:text-xl">{item.card.info.name}</p>
          <p className="text-sm md:text-lg font-semibold lg:text-lg">
            ₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </p>
          <p className="text-xs md:text-sm lg:text-lg text-gray-700 break-words ">
            { item.card.info.description? item.card.info.description.split(" ").slice(0,20).join(" ") : "No Description Available"}
            <span className="text-gray-600">...more</span>
          </p>
        </div>

        <div className="w-full sm:w-1/3 flex flex-col items-center">
          <img
            src={`${CDN_URL}${item.card.info.imageId}`}
            alt={item.card.info.name}
            className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-md mb-2"
          />
          <button
            onClick={() => handleAddItem(item)}
            className="px-5 py-1.5 border border-gray-400 rounded-md text-[#339f5e] font-bold text-sm hover:bg-gray-50"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

    )
}

export default ItemsList;