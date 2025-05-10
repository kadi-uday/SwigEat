import { CDN_URL } from "../utils/const";

const WhatsOnYourMind = ( {itemData}) => {
    const {imageId } = itemData;

    return (<div className="whats-container flex-shrink-0 text-center w-37 p-2.5 px-5">
        <div className="mind-img flex flex-col items-center mt-15 ">
            <img className="mind-act-img w-60 h-40 object-fill rounded-full ml-8 mb-2" src={CDN_URL + imageId} alt="item logo" />
        </div>
        
    </div>
      )
}

export default WhatsOnYourMind;