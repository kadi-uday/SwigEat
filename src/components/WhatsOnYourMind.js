import { CDN_URL } from "../utils/const";

const WhatsOnYourMind = ( {itemData}) => {
    const {imageId } = itemData;

    return (
<div className="whats-container flex-shrink-0 text-center w-28 sm:w-32 md:w-36 lg:w-36 -ml-6 md:-ml-8 p-3 md:p-4 lg:p-4 lg:px-5">
  <div className="mind-img flex flex-col items-center">
    <img
      className="mind-act-img w-20 md:w-24 lg:w-28 h-24 sm:h-28 md:h-32 lg:h-36 object-cover rounded-full ml-1 sm:ml-2 md:ml-3 lg:ml-3 mb-2"
      src={CDN_URL + imageId}
      alt="item logo"
    />
  </div>
</div>
      )
}

export default WhatsOnYourMind;