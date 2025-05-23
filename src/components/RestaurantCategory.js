import ItemsList from "./ItemsList";

const RestaurantCategory = ({data ,showItems, setShowIndex}) => {

    const handleClick = () =>{
        setShowIndex();
    }

    return (
        <div className="mt-5">
            {/* Header */}
            <div onClick={handleClick} className="w-9/12 mx-auto my-6 bg-gray-100 shadow-lg p-4 rounded-lg cursor-pointer">
                <div  className="flex justify-between">
                    <span className="font-bold text-xl">{data.title} ({data.itemCards.length})</span>
                    <span className="font-bold text-lg">∨</span>
                </div>  
            </div>
            {/* Accordion Body */}
            {showItems && <ItemsList items = {data.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;