import { CDN_URL } from "../utils/const";

const WhatsOnYourMind = ( {itemData}) => {
    const {imageId } = itemData;

    return (<div className="whats-container">
        <div className="mind-img">
            <img className="mind-act-img" src={CDN_URL + imageId} alt="item logo" />
        </div>
        
    </div>
      )
}

export default WhatsOnYourMind;