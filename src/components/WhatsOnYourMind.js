import { CDN_URL } from "../utils/const";

const WhatsOnYourMind = ( {itemData}) => {
    const {imageId } = itemData;

    return (<div className="whats-container flex-shrink-0 text-center w-35 p-4 px-5 ">
        <div className="mind-img flex flex-col items-center mt-15 ">
            <img className="mind-act-img w-22 h-36 object-cover rounded-full mt-20 ml-3 mb-2" src={CDN_URL + imageId} alt="item logo" />
        </div>
        
    </div>
      )
}

export default WhatsOnYourMind;